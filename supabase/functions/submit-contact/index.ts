import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactSubmission {
  name: string;
  email: string;
  contactNumber: string;
  enquiryType: string;
  industry?: string;
  timeline?: string;
  requirements?: string;
  fileName?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const submission: ContactSubmission = await req.json();
    console.log("Received contact submission:", { ...submission, email: "***" });

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
      console.error("Database error:", dbError);
      throw new Error("Failed to save submission");
    }

    console.log("Submission saved to database:", dbData.id);

    // Send confirmation email to user
    const emailResponse = await resend.emails.send({
      from: "Yashnee Tech <onboarding@resend.dev>",
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
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank You, ${submission.name}!</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
            <p style="margin-top: 0;">We have received your enquiry and our team will get back to you within 24 hours.</p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e5e7eb;">
              <h3 style="margin-top: 0; color: #059669;">Your Submission Details:</h3>
              <p><strong>Enquiry Type:</strong> ${submission.enquiryType}</p>
              ${submission.industry ? `<p><strong>Industry:</strong> ${submission.industry}</p>` : ''}
              ${submission.timeline ? `<p><strong>Timeline:</strong> ${submission.timeline}</p>` : ''}
              ${submission.requirements ? `<p><strong>Additional Details:</strong> ${submission.requirements}</p>` : ''}
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

    console.log("Confirmation email sent:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Submission received successfully",
        id: dbData.id 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in submit-contact function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "An error occurred" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
