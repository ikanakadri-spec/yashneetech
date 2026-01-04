import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Upload, 
  CheckCircle,
  Clock,
  Send,
  ArrowRight,
  Briefcase,
  Users,
  Globe
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const enquiryTypes = [
  "Staffing Needs",
  "Looking for a Job",
  "Generic Enquiry"
];

const industries = [
  "Accounting & Finance",
  "Administrative & Customer Support",
  "Engineering",
  "IT & Non-IT",
  "Healthcare & Life Sciences",
  "Human Resources",
  "Sales & Marketing",
  "Supply Chain & Logistics",
  "Manufacturing",
  "Life Sciences",
  "Others"
];

const timelines = [
  "Immediate Need (less than 1 month)",
  "Upcoming Need (1–3 months)",
  "Seeking Consultation"
];

// Declare grecaptcha for TypeScript
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      render: (container: string | HTMLElement, options: object) => number;
      reset: (widgetId?: number) => void;
      getResponse: (widgetId?: number) => string;
    };
  }
}

// Your reCAPTCHA v2 site key - replace with your actual site key
const RECAPTCHA_SITE_KEY = "6Lfl8TosAAAAAJzYQvEXT-jL_9K4FUINN0HaRfoG";

const Contact = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [recaptchaWidgetId, setRecaptchaWidgetId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    enquiryType: "",
    industry: "",
    timeline: "",
    requirements: "",
    attachment: null as File | null
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Initialize reCAPTCHA widget
  useEffect(() => {
    const initRecaptcha = () => {
      if (window.grecaptcha && document.getElementById('recaptcha-container')) {
        try {
          const widgetId = window.grecaptcha.render('recaptcha-container', {
            sitekey: RECAPTCHA_SITE_KEY,
            callback: (token: string) => setRecaptchaToken(token),
            'expired-callback': () => setRecaptchaToken(null),
            'error-callback': () => setRecaptchaToken(null),
            theme: 'light',
            size: 'normal'
          });
          setRecaptchaWidgetId(widgetId);
        } catch (e) {
          // Widget already rendered
        }
      }
    };

    // Check if grecaptcha is already loaded
    if (window.grecaptcha) {
      window.grecaptcha.ready(initRecaptcha);
    } else {
      // Wait for script to load
      const checkInterval = setInterval(() => {
        if (window.grecaptcha) {
          clearInterval(checkInterval);
          window.grecaptcha.ready(initRecaptcha);
        }
      }, 100);
      return () => clearInterval(checkInterval);
    }
  }, []);

  // Scroll to form if hash is present
  useEffect(() => {
    if (location.hash === "#contact-form") {
      setTimeout(() => {
        document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, attachment: e.target.files![0] }));
    }
  };

  const isFormValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]?[\d\s-]{10,}$/;
    return (
      formData.name.trim() &&
      emailRegex.test(formData.email) &&
      phoneRegex.test(formData.contactNumber) &&
      formData.enquiryType &&
      recaptchaToken &&
      privacyConsent
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      toast({
        title: "Please complete all fields",
        description: "All fields are required before submitting.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('submit-contact', {
        body: {
          name: formData.name,
          email: formData.email,
          contactNumber: formData.contactNumber,
          enquiryType: formData.enquiryType,
          industry: formData.industry || undefined,
          timeline: formData.timeline || undefined,
          requirements: formData.requirements || undefined,
          fileName: formData.attachment?.name || undefined,
          captchaToken: recaptchaToken,
        }
      });

      if (error) throw error;

      toast({
        title: "Form submitted successfully!",
        description: "We'll be in touch with you shortly. Check your email for confirmation.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        enquiryType: "",
        industry: "",
        timeline: "",
        requirements: "",
        attachment: null
      });
      setRecaptchaToken(null);
      setPrivacyConsent(false);
      // Reset reCAPTCHA widget
      if (recaptchaWidgetId !== null && window.grecaptcha) {
        window.grecaptcha.reset(recaptchaWidgetId);
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact Us | Yashnee Tech – Next-Gen Staffing & Talent Solutions"
        description="Get in touch with Yashnee Tech for your staffing and recruitment needs. Submit your resume or inquire about our talent solutions."
        canonical="https://yashneetech.com/contact"
      />
      <Header />

      {/* Hero Section - Professional Gradient */}
      <section className="relative pt-28 pb-32 overflow-hidden">
        {/* Background - solid gradient only */}
        <div className="absolute inset-0 gradient-hero" />
        
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-primary-foreground text-lg font-medium animate-fade-up">
              <Globe className="w-5 h-5" />
              <span>Connect With Our Global Team</span>
            </div>
          </div>
        </div>
        
        {/* Straight line separator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-ivory" />
      </section>

      {/* Contact Info Cards - Floating Style */}
      <section className="relative -mt-16 pb-6 z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.1}>
            {/* Email Card */}
            <StaggerItem>
              <div className="group p-6 rounded-2xl bg-card border border-border transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald to-emerald-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Email Us</h3>
                  <a href="mailto:info@yashneetech.com" className="text-muted-foreground hover:text-emerald transition-colors font-medium">
                    info@yashneetech.com
                  </a>
                </div>
              </div>
            </StaggerItem>
            
            {/* Phone Card */}
            <StaggerItem>
              <div className="group p-6 rounded-2xl bg-card border border-border transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-champagne to-champagne-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Call Us</h3>
                  <a href="tel:+914049964796" className="text-muted-foreground hover:text-emerald transition-colors font-medium">
                    +91 40 4996 4796
                  </a>
                </div>
              </div>
            </StaggerItem>
            
            {/* Location Card */}
            <StaggerItem>
              <div className="group p-6 rounded-2xl bg-card border border-border transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald to-emerald-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Visit Us</h3>
                  <span className="text-muted-foreground font-medium">
                    Hyderabad, Telangana, India
                  </span>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-10 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Highlighted Form Header */}
            <ScrollReveal className="text-center mb-6">
              <h2 className="inline-block text-lg md:text-xl font-heading font-bold text-foreground bg-gradient-to-r from-champagne/30 to-emerald/20 px-6 py-3 rounded-xl border border-emerald/30">
                Tell Us About Your Requirements
              </h2>
              <p className="text-muted-foreground mt-4 text-base">
                Our team will reach out within 24 hours to discuss your requirements.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <form onSubmit={handleSubmit} className="relative p-6 md:p-8 rounded-2xl bg-card border-2 border-emerald space-y-3 overflow-hidden">
                  
                  {/* Form Fields */}
                  <div className="relative space-y-3">

                    <div className="grid md:grid-cols-2 gap-3">
                      {/* Full Name */}
                      <div className="relative group">
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-3 py-2.5 rounded-xl bg-background border-2 transition-all duration-300 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none ${
                            focusedField === 'name' 
                              ? 'border-emerald shadow-lg shadow-emerald/10' 
                              : 'border-gray-300 hover:border-emerald/40'
                          }`}
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      {/* Contact Number */}
                      <div className="relative group">
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Contact Number <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="tel"
                          name="contactNumber"
                          value={formData.contactNumber}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('contactNumber')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-3 py-2.5 rounded-xl bg-background border-2 transition-all duration-300 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none ${
                            focusedField === 'contactNumber' 
                              ? 'border-emerald shadow-lg shadow-emerald/10' 
                              : 'border-gray-300 hover:border-emerald/40'
                          }`}
                          placeholder="+91 XXXXX XXXXX"
                          required
                        />
                      </div>
                    </div>

                    {/* Email - Full width */}
                    <div className="relative group">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address <span className="text-destructive">*</span>
                      </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-3 py-2.5 rounded-xl bg-background border-2 transition-all duration-300 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none ${
                          focusedField === 'email' 
                            ? 'border-emerald shadow-lg shadow-emerald/10' 
                            : 'border-gray-300 hover:border-emerald/40'
                        }`}
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Additional Fields */}
                  <div className="relative space-y-3">
                    {/* Type of Enquiry */}
                    <div className="relative group">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Type of Enquiry <span className="text-destructive">*</span>
                      </label>
                      <select
                        name="enquiryType"
                        value={formData.enquiryType}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('enquiryType')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-3 py-2.5 rounded-xl bg-background border-2 transition-all duration-300 text-sm text-foreground cursor-pointer focus:outline-none ${
                          focusedField === 'enquiryType' 
                            ? 'border-emerald shadow-lg shadow-emerald/10' 
                            : 'border-gray-300 hover:border-emerald/40'
                        }`}
                        required
                      >
                        <option value="">Select enquiry type</option>
                        {enquiryTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3">
                      {/* Industry - Optional */}
                      <div className="relative group">
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Industry <span className="text-muted-foreground text-sm font-normal">(Optional)</span>
                        </label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('industry')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-3 py-2.5 rounded-xl bg-background border-2 transition-all duration-300 text-sm text-foreground cursor-pointer focus:outline-none ${
                            focusedField === 'industry' 
                              ? 'border-emerald shadow-lg shadow-emerald/10' 
                              : 'border-gray-300 hover:border-emerald/40'
                          }`}
                        >
                          <option value="">Select industry</option>
                          {industries.map(ind => (
                            <option key={ind} value={ind}>{ind}</option>
                          ))}
                        </select>
                      </div>

                      {/* Timeline - Optional */}
                      <div className="relative group">
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Timeline <span className="text-muted-foreground text-sm font-normal">(Optional)</span>
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('timeline')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-3 py-2.5 rounded-xl bg-background border-2 transition-all duration-300 text-sm text-foreground cursor-pointer focus:outline-none ${
                            focusedField === 'timeline' 
                              ? 'border-emerald shadow-lg shadow-emerald/10' 
                              : 'border-gray-300 hover:border-emerald/40'
                          }`}
                        >
                          <option value="">Select timeline</option>
                          {timelines.map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Requirements - Optional */}
                    <div className="relative group">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Additional Details <span className="text-muted-foreground text-sm font-normal">(Optional)</span>
                      </label>
                      <textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('requirements')}
                        onBlur={() => setFocusedField(null)}
                        rows={3}
                        className={`w-full px-3 py-2.5 rounded-xl bg-background border-2 transition-all duration-300 text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none ${
                          focusedField === 'requirements' 
                            ? 'border-emerald shadow-lg shadow-emerald/10' 
                            : 'border-gray-300 hover:border-emerald/40'
                        }`}
                        placeholder="Tell us about your needs..."
                      />
                    </div>
                  </div>

                  {/* Attachments */}
                  <div className="relative group">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Attachments <span className="text-muted-foreground text-sm font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        id="file-upload"
                        accept=".pdf,.doc,.docx,.txt"
                      />
                      <label
                        htmlFor="file-upload"
                        className="flex items-center justify-center gap-3 w-full px-4 py-4 rounded-xl border-2 border-dashed border-gray-300 bg-background hover:border-emerald/50 hover:bg-emerald/5 cursor-pointer transition-all duration-300 group/upload"
                      >
                        <div className="w-10 h-10 rounded-xl bg-emerald/10 flex items-center justify-center group-hover/upload:scale-110 transition-transform">
                          <Upload className="w-5 h-5 text-emerald" />
                        </div>
                        <span className="text-muted-foreground group-hover/upload:text-foreground transition-colors text-sm">
                          {formData.attachment ? formData.attachment.name : "Upload resume or documents (PDF, DOC)"}
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Privacy Consent */}
                  <div className="p-2.5 rounded-lg bg-background border border-gray-300 hover:border-emerald/30 transition-colors">
                    <label className="flex items-start gap-2.5 cursor-pointer group">
                      <div className="relative mt-0.5">
                        <input
                          type="checkbox"
                          checked={privacyConsent}
                          onChange={(e) => setPrivacyConsent(e.target.checked)}
                          className="peer w-4 h-4 rounded border-2 border-gray-300 text-emerald focus:ring-emerald focus:ring-offset-0 transition-all cursor-pointer checked:bg-emerald checked:border-emerald appearance-none"
                        />
                        {privacyConsent && (
                          <CheckCircle className="absolute inset-0 w-4 h-4 text-primary-foreground pointer-events-none" />
                        )}
                      </div>
                      <span className="text-xs text-foreground leading-relaxed">
                        I agree to the{" "}
                        <Link to="/privacy" className="text-emerald hover:text-emerald-light underline" target="_blank">
                          Privacy Policy
                        </Link>
                        {" "}and{" "}
                        <Link to="/terms" className="text-emerald hover:text-emerald-light underline" target="_blank">
                          Terms of Service
                        </Link>
                        {" "}and allow Yashnee Tech to use my information.<span className="text-destructive">*</span>
                      </span>
                    </label>
                  </div>

                  {/* reCAPTCHA Widget */}
                  <div className="flex justify-center">
                    <div id="recaptcha-container"></div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-emerald hover:bg-emerald-light text-primary-foreground py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-emerald/20 transition-all duration-300 hover:-translate-y-0.5 group"
                    disabled={!isFormValid() || isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="mr-2 w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                        Submit Enquiry
                        <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </>
                    )}
                  </Button>
                </form>
              </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Join Our Team - Premium CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald via-emerald-light to-emerald" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(42_85%_55%/0.15),_transparent_70%)]" />
        
        <div className="container relative mx-auto px-4 lg:px-8">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-primary-foreground/90 text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              <span>Careers at Yashnee Tech</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Join Our Growing Team
            </h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              We're always looking for talented individuals to join our dynamic team. Send us your resume and let's explore opportunities together.
            </p>
            <a
              href="mailto:info@yashneetech.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-emerald font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5" />
              info@yashneetech.com
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
