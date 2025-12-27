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
      name: "",
      email: "",
      contactNumber: "",
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
      <section className="pt-32 pb-16 bg-emerald">
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
              <div className="w-12 h-12 bg-emerald rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Email Us</h3>
                <a href="mailto:info@yashtech.com" className="text-muted-foreground hover:text-champagne transition-colors">
                  info@yashtech.com
                </a>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-card border border-border shadow-md flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Call Us</h3>
                <a href="tel:+914049964796" className="text-muted-foreground hover:text-champagne transition-colors">
                  +91 40 4996 4796
                </a>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-card border border-border shadow-md flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald rounded-xl flex items-center justify-center flex-shrink-0">
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

            <form onSubmit={handleSubmit} className="relative p-8 md:p-10 rounded-3xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-2xl space-y-8 overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-champagne/5 rounded-full blur-3xl" />
              
              {/* Personal Information Section */}
              <div className="relative space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-emerald/10 flex items-center justify-center">
                    <span className="text-emerald font-semibold text-sm">1</span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">Personal Information</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="relative group">
                    <label className="block text-sm font-medium text-foreground mb-2 transition-colors group-focus-within:text-emerald">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3.5 rounded-xl bg-background border-2 transition-all duration-300 text-foreground placeholder:text-muted-foreground ${
                        focusedField === 'name' 
                          ? 'border-emerald shadow-lg shadow-emerald/10' 
                          : 'border-border hover:border-emerald/50'
                      }`}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  {/* Contact Number */}
                  <div className="relative group">
                    <label className="block text-sm font-medium text-foreground mb-2 transition-colors group-focus-within:text-emerald">
                      Contact Number <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('contactNumber')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3.5 rounded-xl bg-background border-2 transition-all duration-300 text-foreground placeholder:text-muted-foreground ${
                        focusedField === 'contactNumber' 
                          ? 'border-emerald shadow-lg shadow-emerald/10' 
                          : 'border-border hover:border-emerald/50'
                      }`}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                </div>

                {/* Email - Full width */}
                <div className="relative group">
                  <label className="block text-sm font-medium text-foreground mb-2 transition-colors group-focus-within:text-emerald">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3.5 rounded-xl bg-background border-2 transition-all duration-300 text-foreground placeholder:text-muted-foreground ${
                      focusedField === 'email' 
                        ? 'border-emerald shadow-lg shadow-emerald/10' 
                        : 'border-border hover:border-emerald/50'
                    }`}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border/50"></div>
                </div>
              </div>

              {/* Enquiry Details Section */}
              <div className="relative space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-champagne/20 flex items-center justify-center">
                    <span className="text-champagne font-semibold text-sm">2</span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">Enquiry Details</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Type of Enquiry */}
                  <div className="relative group">
                    <label className="block text-sm font-medium text-foreground mb-2 transition-colors group-focus-within:text-emerald">
                      Type of Enquiry <span className="text-destructive">*</span>
                    </label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('enquiryType')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3.5 rounded-xl bg-background border-2 transition-all duration-300 text-foreground cursor-pointer ${
                        focusedField === 'enquiryType' 
                          ? 'border-emerald shadow-lg shadow-emerald/10' 
                          : 'border-border hover:border-emerald/50'
                      }`}
                      required
                    >
                      <option value="">Select enquiry type</option>
                      {enquiryTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Industry */}
                  <div className="relative group">
                    <label className="block text-sm font-medium text-foreground mb-2 transition-colors group-focus-within:text-emerald">
                      Industry <span className="text-destructive">*</span>
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('industry')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3.5 rounded-xl bg-background border-2 transition-all duration-300 text-foreground cursor-pointer ${
                        focusedField === 'industry' 
                          ? 'border-emerald shadow-lg shadow-emerald/10' 
                          : 'border-border hover:border-emerald/50'
                      }`}
                      required
                    >
                      <option value="">Select industry</option>
                      {industries.map(ind => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Timeline */}
                <div className="relative group">
                  <label className="block text-sm font-medium text-foreground mb-2 transition-colors group-focus-within:text-emerald">
                    What is your timeline? <span className="text-destructive">*</span>
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('timeline')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3.5 rounded-xl bg-background border-2 transition-all duration-300 text-foreground cursor-pointer ${
                      focusedField === 'timeline' 
                        ? 'border-emerald shadow-lg shadow-emerald/10' 
                        : 'border-border hover:border-emerald/50'
                    }`}
                    required
                  >
                    <option value="">Select timeline</option>
                    {timelines.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>

                {/* Requirements */}
                <div className="relative group">
                  <label className="block text-sm font-medium text-foreground mb-2 transition-colors group-focus-within:text-emerald">
                    Tell us about your requirements <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('requirements')}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className={`w-full px-4 py-3.5 rounded-xl bg-background border-2 transition-all duration-300 text-foreground placeholder:text-muted-foreground resize-none ${
                      focusedField === 'requirements' 
                        ? 'border-emerald shadow-lg shadow-emerald/10' 
                        : 'border-border hover:border-emerald/50'
                    }`}
                    placeholder="Please describe your staffing needs, job requirements, or any other details..."
                    required
                  />
                </div>
              </div>

              {/* Attachments */}
              <div className="relative group">
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
                    className="flex items-center justify-center gap-3 w-full px-4 py-5 rounded-xl border-2 border-dashed border-border bg-background hover:border-emerald/50 hover:bg-emerald/5 cursor-pointer transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Upload className="w-5 h-5 text-emerald" />
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {formData.attachment ? formData.attachment.name : "Click to upload resume or documents"}
                    </span>
                  </label>
                </div>
              </div>

              {/* CAPTCHA Placeholder */}
              <div className="p-5 rounded-xl bg-background border-2 border-border hover:border-emerald/30 transition-colors">
                <label className="flex items-center gap-4 cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={captchaChecked}
                      onChange={(e) => setCaptchaChecked(e.target.checked)}
                      className="peer w-6 h-6 rounded-lg border-2 border-border text-emerald focus:ring-emerald focus:ring-offset-0 transition-all cursor-pointer checked:bg-emerald checked:border-emerald"
                    />
                    {captchaChecked && (
                      <CheckCircle className="absolute inset-0 w-6 h-6 text-primary-foreground pointer-events-none" />
                    )}
                  </div>
                  <span className="text-sm text-foreground group-hover:text-emerald transition-colors">I'm not a robot</span>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-emerald hover:bg-emerald-light text-primary-foreground text-base py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-emerald/20 transition-all duration-300 hover:-translate-y-0.5"
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
      <section className="py-16 bg-ivory">
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
              className="inline-flex items-center gap-2 text-lg font-medium text-emerald hover:text-champagne transition-colors"
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