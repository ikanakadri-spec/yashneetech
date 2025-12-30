import { Link, useNavigate } from "react-router-dom";
import { Linkedin, Instagram, Facebook, Mail, Phone, MapPin, Globe, Smartphone } from "lucide-react";

// Custom X (formerly Twitter) logo component
const XLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleHashNavigation = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    navigate("/" + hash);
  };

  return (
    <footer className="bg-emerald text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="group transition-transform duration-300 hover:scale-105">
              <span className="font-heading font-bold text-xl md:text-2xl text-primary-foreground tracking-wide">
                Yashnee Tech Solutions
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              We connect top technology talent with leading organizations, leveraging AI-powered recruitment technology to deliver precise talent matching at scale.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/who-we-are" className="text-primary-foreground/70 hover:text-champagne transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <a 
                  href="/#services" 
                  onClick={(e) => handleHashNavigation(e, "#services")}
                  className="text-primary-foreground/70 hover:text-champagne transition-colors text-sm cursor-pointer"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a 
                  href="/#mission" 
                  onClick={(e) => handleHashNavigation(e, "#mission")}
                  className="text-primary-foreground/70 hover:text-champagne transition-colors text-sm cursor-pointer"
                >
                  Our Mission
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-champagne transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-primary-foreground/70 hover:text-champagne transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-primary-foreground/70 hover:text-champagne transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-champagne mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  Office No. 1105, Door No. 1-61/AS/B, Asian Sun City, Block B, Kothaguda, Hyderabad, Telangana State, India - 500 084
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Smartphone className="w-5 h-5 text-champagne mt-0.5 flex-shrink-0" />
                <a href="tel:+919848896747" className="text-primary-foreground/70 hover:text-champagne transition-colors text-sm">
                  +91 98488 96747
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-champagne mt-0.5 flex-shrink-0" />
                <a href="tel:+914049964796" className="text-primary-foreground/70 hover:text-champagne transition-colors text-sm">
                  +91 40 4996 4796
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-champagne mt-0.5 flex-shrink-0" />
                <a href="mailto:info@yashneetech.com" className="text-primary-foreground/70 hover:text-champagne transition-colors text-sm">
                  info@yashneetech.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-champagne mt-0.5 flex-shrink-0" />
                <a href="https://www.yashneetech.co" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-champagne transition-colors text-sm">
                  www.yashneetech.co
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Join Our Team</h4>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Willing to join our dynamic team? Drop your resume at:
            </p>
            <a
              href="mailto:info@yashneetech.com"
              className="inline-flex items-center gap-2 text-champagne hover:text-champagne-light transition-colors font-medium"
            >
              <Mail className="w-4 h-4" />
              info@yashneetech.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Yashnee Tech. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] [&:hover>svg]:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5 transition-colors duration-300" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-foreground hover:bg-foreground [&:hover>svg]:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <XLogo className="w-5 h-5 transition-colors duration-300" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#E4405F] hover:bg-[#E4405F] [&:hover>svg]:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <Instagram className="w-5 h-5 transition-colors duration-300" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] [&:hover>svg]:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <Facebook className="w-5 h-5 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};