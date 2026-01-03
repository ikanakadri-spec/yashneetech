import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Input validation schema
const ContactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  contactNumber: z.string().regex(/^[+]?[\d\s\-()]{7,20}$/, "Invalid phone number format"),
  enquiryType: z.enum(["Staffing Needs", "Looking for a Job", "Generic Enquiry"]),
  industry: z.string().max(100, "Industry must be less than 100 characters").optional(),
  timeline: z.string().max(100, "Timeline must be less than 100 characters").optional(),
  requirements: z.string().max(2000, "Requirements must be less than 2000 characters").optional(),
  fileName: z.string().max(255, "File name must be less than 255 characters").optional(),
  captchaToken: z.string().min(1, "CAPTCHA token is required"),
});

type ContactSubmission = z.infer<typeof ContactSchema>;

// HTML escape function to prevent XSS in emails
function escapeHtml(text: string | undefined): string {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // requests per window
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }
  
  if (record.count >= RATE_LIMIT) {
    return false;
  }
  
  record.count++;
  return true;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting by IP
    const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (!checkRateLimit(clientIP)) {
      console.log(`Rate limit exceeded for IP: ${clientIP.substring(0, 10)}...`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Parse and validate input
    const rawInput = await req.json();
    const validationResult = ContactSchema.safeParse(rawInput);
    
    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(e => e.message).join(", ");
      console.log("Validation failed:", errors);
      return new Response(
        JSON.stringify({ error: "Invalid input: " + errors }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const submission = validationResult.data;
    
    // Verify reCAPTCHA token with Google
    const recaptchaSecretKey = Deno.env.get("RECAPTCHA_SECRET_KEY");
    if (!recaptchaSecretKey) {
      console.error("[INTERNAL] RECAPTCHA_SECRET_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Server configuration error. Please try again later." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const recaptchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${recaptchaSecretKey}&response=${submission.captchaToken}`,
    });

    const recaptchaData = await recaptchaResponse.json();
    
    if (!recaptchaData.success) {
      console.log("reCAPTCHA verification failed:", recaptchaData["error-codes"]);
      return new Response(
        JSON.stringify({ error: "CAPTCHA verification failed. Please try again." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("reCAPTCHA verified successfully");
    console.log("Received valid contact submission from:", submission.email.replace(/(.{2}).*@/, "$1***@"));

    // Create Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Store submission in database
    const { data: dbData, error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name: submission.name,
        email: submission.email,
        contact_number: submission.contactNumber,
        enquiry_type: submission.enquiryType,
        industry: submission.industry || null,
        timeline: submission.timeline || null,
        requirements: submission.requirements || null,
        file_name: submission.fileName || null,
      })
      .select()
      .single();

    if (dbError) {
      console.error("[INTERNAL] Database error code:", dbError.code);
      return new Response(
        JSON.stringify({ error: "Unable to process your submission. Please try again." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Submission saved to database:", dbData.id);

    // Escape all user inputs for HTML emails
    const safeName = escapeHtml(submission.name);
    const safeEmail = escapeHtml(submission.email);
    const safePhone = escapeHtml(submission.contactNumber);
    const safeEnquiryType = escapeHtml(submission.enquiryType);
    const safeIndustry = escapeHtml(submission.industry);
    const safeTimeline = escapeHtml(submission.timeline);
    const safeRequirements = escapeHtml(submission.requirements);
    const safeFileName = escapeHtml(submission.fileName);

    // Send notification email to team
    const teamEmailResponse = await resend.emails.send({
      from: "Yashnee Tech <noreply@yashneetech.com>",
      to: ["info@yashneetech.com"],
      subject: `New ${safeEnquiryType} - ${safeName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #059669, #10b981); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #e5e7eb;">
              <h3 style="margin-top: 0; color: #059669;">Contact Details</h3>
              <p><strong>Name:</strong> ${safeName}</p>
              <p><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color: #059669;">${safeEmail}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${safePhone}" style="color: #059669;">${safePhone}</a></p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
              <h3 style="margin-top: 0; color: #059669;">Enquiry Details</h3>
              <p><strong>Type:</strong> ${safeEnquiryType}</p>
              ${safeIndustry ? `<p><strong>Industry:</strong> ${safeIndustry}</p>` : ''}
              ${safeTimeline ? `<p><strong>Timeline:</strong> ${safeTimeline}</p>` : ''}
              ${safeRequirements ? `<p><strong>Additional Details:</strong><br>${safeRequirements}</p>` : ''}
              ${safeFileName ? `<p><strong>Attachment:</strong> ${safeFileName}</p>` : ''}
            </div>
            
            <p style="margin-top: 20px; color: #6b7280; font-size: 12px;">
              Submitted on ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}
            </p>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Team notification email result:", teamEmailResponse.error ? "failed" : "sent");

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "Yashnee Tech <noreply@yashneetech.com>",
      to: [submission.email],
      subject: "Thank you for contacting Yashnee Tech",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #059669, #10b981); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank You, ${safeName}!</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
            <p style="margin-top: 0;">We have received your enquiry and our team will get back to you within 24 hours.</p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e5e7eb;">
              <h3 style="margin-top: 0; color: #059669;">Your Submission Details:</h3>
              <p><strong>Enquiry Type:</strong> ${safeEnquiryType}</p>
              ${safeIndustry ? `<p><strong>Industry:</strong> ${safeIndustry}</p>` : ''}
              ${safeTimeline ? `<p><strong>Timeline:</strong> ${safeTimeline}</p>` : ''}
              ${safeRequirements ? `<p><strong>Additional Details:</strong> ${safeRequirements}</p>` : ''}
            </div>
            
            <p>If you have any urgent queries, feel free to reach out to us at:</p>
            <p style="margin-bottom: 0;">
              <strong>Email:</strong> <a href="mailto:info@yashneetech.com" style="color: #059669;">info@yashneetech.com</a><br>
              <strong>Phone:</strong> +91 40 4996 4796
            </p>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px;">
            <p>© ${new Date().getFullYear()} Yashnee Tech. All rights reserved.</p>
            <p>Next Gen Talent Partner</p>
          </div>
        </body>
        </html>
      `,
    });

    console.log("User confirmation email result:", userEmailResponse.error ? "failed" : "sent");

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Submission received successfully"
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: unknown) {
    console.error("[INTERNAL] Unexpected error in submit-contact function");
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred. Please try again." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
