import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { AutoTransparentImage } from "@/components/AutoTransparentImage";
import yashneeLogo from "@/assets/yashnee-logo-header.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center group transition-transform duration-300 hover:scale-105">
              <AutoTransparentImage
                src={yashneeLogo}
                alt="Yashnee Tech - Next Gen Talent Partner"
                className="h-16 md:h-20 w-auto object-contain [filter:drop-shadow(0_0_12px_rgba(255,255,255,0.9))_drop-shadow(0_0_6px_rgba(255,255,255,0.8))_drop-shadow(0_0_3px_rgba(255,255,255,1))_drop-shadow(0_2px_4px_rgba(0,0,0,0.3))]"
                tolerance={35}
              />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              We connect top technology talent with leading organizations, leveraging AI-powered recruitment technology to deliver precise talent matching at scale.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/#who-we-are" className="text-primary-foreground/70 hover:text-champagne transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-primary-foreground/70 hover:text-champagne transition-colors text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/#mission" className="text-primary-foreground/70 hover:text-champagne transition-colors text-sm">
                  Our Mission
                </Link>
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
                <Mail className="w-5 h-5 text-champagne mt-0.5" />
              <a href="mailto:info@yashneetech.com" className="text-primary-foreground/70 hover:text-champagne transition-colors text-sm">
                  info@yashneetech.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-champagne mt-0.5" />
                <a href="tel:+914049964796" className="text-primary-foreground/70 hover:text-champagne transition-colors text-sm">
                  +91 40 4996 4796
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-champagne mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Hyderabad, Telangana, India
                </span>
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
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-champagne hover:text-emerald transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-champagne hover:text-emerald transition-all"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-champagne hover:text-emerald transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-champagne hover:text-emerald transition-all"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};