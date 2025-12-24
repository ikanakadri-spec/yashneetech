import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Upload, 
  CheckCircle,
  Building2,
  Clock,
  Send
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

const Contact = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [formData, setFormData] = useState({
    enquiryType: "",
    industry: "",
    timeline: "",
    requirements: "",
    attachment: null as File | null
  });

  // Scroll to form if hash is present
  useEffect(() => {
    if (location.hash === "#contact-form") {
      setTimeout(() => {
        document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, attachment: e.target.files![0] }));
    }
  };

  const isFormValid = () => {
    return (
      formData.enquiryType &&
      formData.industry &&
      formData.timeline &&
      formData.requirements.trim() &&
      captchaChecked
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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Form submitted successfully!",
      description: "We'll be in touch with you shortly.",
    });
    
    // Reset form
    setFormData({
      enquiryType: "",
      industry: "",
      timeline: "",
      requirements: "",
      attachment: null
    });
    setCaptchaChecked(false);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Ready to take the next step? Whether you're looking to hire exceptional talent or find your dream job, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-card border border-border shadow-md flex items-start gap-4">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Email Us</h3>
                <a href="mailto:info@yashtech.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@yashtech.com
                </a>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-card border border-border shadow-md flex items-start gap-4">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Call Us</h3>
                <a href="tel:+914049964796" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 40 4996 4796
                </a>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-card border border-border shadow-md flex items-start gap-4">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Visit Us</h3>
                <span className="text-muted-foreground text-sm">
                  Hyderabad, Telangana, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Tell Us About Your Needs
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below, and we will reach out to you
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border border-border shadow-lg space-y-6">
              {/* Type of Enquiry */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Type of Enquiry <span className="text-destructive">*</span>
                </label>
                <select
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-foreground"
                  required
                >
                  <option value="">Select enquiry type</option>
                  {enquiryTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Industry <span className="text-destructive">*</span>
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-foreground"
                  required
                >
                  <option value="">Select industry</option>
                  {industries.map(ind => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  What is your timeline? <span className="text-destructive">*</span>
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-foreground"
                  required
                >
                  <option value="">Select timeline</option>
                  {timelines.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              {/* Requirements */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tell us about your requirements <span className="text-destructive">*</span>
                </label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Please describe your staffing needs, job requirements, or any other details..."
                  required
                />
              </div>

              {/* Attachments */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Attachments (Optional)
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
                    className="flex items-center justify-center gap-3 w-full px-4 py-4 rounded-lg border-2 border-dashed border-border bg-secondary/50 hover:border-primary/50 cursor-pointer transition-colors"
                  >
                    <Upload className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {formData.attachment ? formData.attachment.name : "Click to upload resume or documents"}
                    </span>
                  </label>
                </div>
              </div>

              {/* CAPTCHA Placeholder */}
              <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={captchaChecked}
                    onChange={(e) => setCaptchaChecked(e.target.checked)}
                    className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-foreground">I'm not a robot</span>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full gradient-primary text-primary-foreground text-base"
                disabled={!isFormValid() || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Clock className="mr-2 w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 w-5 h-5" />
                    Submit Enquiry
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Join Our Team
            </h2>
            <p className="text-muted-foreground mb-6">
              Willing to join our dynamic team? Drop your resume at:
            </p>
            <a
              href="mailto:info@yashtech.com"
              className="inline-flex items-center gap-2 text-lg font-medium text-primary hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
              info@yashtech.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;