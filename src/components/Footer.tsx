import { Link, useNavigate } from "react-router-dom";
import { Linkedin, Instagram, Facebook, Mail, Phone, MapPin, Globe, Smartphone, ArrowUpRight } from "lucide-react";

// Custom X (formerly Twitter) logo component
const XLogo = ({
  className
}: {
  className?: string;
}) => <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>;
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const handleHashNavigation = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    navigate("/" + hash);
  };
  return <footer className="relative bg-gradient-to-b from-emerald-900 to-emerald-950 text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-champagne via-orange-500 to-champagne" />
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-12 pt-12 pb-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
          
          {/* Brand Column - Larger */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="group inline-block">
            <h3 style={{
              fontFamily: "'Playfair Display', serif"
            }} className="text-3xl font-bold text-white tracking-tight md:text-2xl">
                Yashnee Tech Solutions
              </h3>
              <p className="tracking-[0.2em] text-orange-500 mt-1 text-xs font-bold text-center my-0">
                Next Gen Talent Partner
              </p>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              We connect top technology talent with leading organizations, leveraging AI-powered recruitment technology to deliver precise talent matching at scale.
            </p>
            
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/90 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[{
              label: "About Us",
              to: "/who-we-are"
            }, {
              label: "Our Services",
              hash: "#services"
            }, {
              label: "Our Mission",
              hash: "#mission"
            }, {
              label: "Contact Us",
              to: "/contact"
            }, {
              label: "Privacy Policy",
              to: "/privacy-policy"
            }, {
              label: "Terms of Service",
              to: "/terms-of-service"
            }].map(link => <li key={link.label}>
                  {link.to ? <Link to={link.to} className="text-white/60 hover:text-orange-400 transition-colors text-sm inline-flex items-center gap-1 group">
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link> : <a href={`/${link.hash}`} onClick={e => handleHashNavigation(e, link.hash!)} className="text-white/60 hover:text-orange-400 transition-colors text-sm inline-flex items-center gap-1 group cursor-pointer">
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>}
                </li>)}
            </ul>
          </div>

          {/* Join Our Team */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/90 mb-4">
              Join Our Team
            </h4>
            <p className="text-white/60 text-sm leading-relaxed mb-3">
              Willing to join our dynamic team? Drop your resume at:
            </p>
            <a href="mailto:info@yashneetech.com" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors text-sm font-medium group">
              <Mail className="w-4 h-4" />
              info@yashneetech.com
              <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/90 mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                  <MapPin className="w-4 h-4 text-orange-400" />
                </div>
                <span className="text-white/60 text-sm leading-relaxed">
                  Office No. 1105, Door No. 1-61/AS/B, Asian Sun City, Block B, Kothaguda, Hyderabad, India - 500 084
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-orange-400" />
                </div>
                <div className="flex flex-col">
                  <a href="tel:+919848896747" className="text-white/60 hover:text-white transition-colors text-sm">
                    +91 98488 96747
                  </a>
                  <a href="tel:+914049964796" className="text-white/60 hover:text-white transition-colors text-sm">
                    +91 40 4996 4796
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-orange-400" />
                </div>
                <a href="mailto:info@yashneetech.com" className="text-white/60 hover:text-white transition-colors text-sm">
                  info@yashneetech.com
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                  <Globe className="w-4 h-4 text-orange-400" />
                </div>
                <a href="https://yashneetech.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm">
                  yashneetech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {currentYear} Yashnee Tech Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/yashnee-tech-solutions/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all duration-300 hover:scale-105 shadow-md">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://x.com/Yashneetech" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 shadow-md">
                <XLogo className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/yashneetech_recruit/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-pink-600 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 hover:text-white transition-all duration-300 hover:scale-105 shadow-md">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all duration-300 hover:scale-105 shadow-md">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};