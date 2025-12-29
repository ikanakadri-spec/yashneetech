import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import yashneeLogo from "@/assets/yashnee-logo-header.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={yashneeLogo} 
                alt="Yashnee Tech Logo" 
                className="h-12 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              />
              <div className="-space-y-1">
                <span className="font-heading font-bold text-2xl tracking-tighter leading-tight bg-gradient-to-r from-emerald via-white to-emerald bg-[length:200%_auto] bg-clip-text text-transparent animate-text-shimmer drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">
                  YASHNEE TECH
                </span>
                <p className="text-xs text-white leading-tight drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] italic">Next-Gen Talent Partner</p>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              We connect top technology talent with leading organizations, leveraging AI-powered recruitment technology to deliver precise talent matching at scale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
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
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-champagne mt-0.5" />
                <a href="mailto:info@yashtech.com" className="text-primary-foreground/70 hover:text-champagne transition-colors text-sm">
                  info@yashtech.com
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

          {/* Join Our Team */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Join Our Team</h4>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Willing to join our dynamic team? Drop your resume at:
            </p>
            <a
              href="mailto:info@yashtech.com"
              className="inline-flex items-center gap-2 text-champagne hover:text-champagne-light transition-colors font-medium"
            >
              <Mail className="w-4 h-4" />
              info@yashtech.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} YASH TECH. All rights reserved.
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