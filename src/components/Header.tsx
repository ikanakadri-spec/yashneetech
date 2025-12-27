import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import yashneeLogoFinal from "@/assets/yashnee-logo-final.jpg";
const hireTalentItems = [{
  label: "Staffing Solutions",
  href: "/contact#contact-form"
}, {
  label: "AI Talent Sourcing",
  href: "/contact#contact-form"
}, {
  label: "Global Recruitment",
  href: "/contact#contact-form"
}, {
  label: "Executive Recruiting",
  href: "/contact#contact-form"
}, {
  label: "For Start-up's",
  href: "/contact#contact-form"
}, {
  label: "Recruitment Process Outsourcing (RPO)",
  href: "/contact#contact-form"
}];
const jobSeekerItems = [{
  label: "Find a Job",
  href: "/contact#contact-form"
}, {
  label: "Submit Your Resume",
  href: "/contact#contact-form"
}];
const expertiseItems = ["Accounting & Finance", "Administrative & Customer Support", "Engineering", "IT & Non-IT", "Healthcare & Life Sciences", "Human Resources", "Sales & Marketing", "Supply Chain & Logistics", "Manufacturing", "Life Sciences"];
const contactItems = [{
  label: "I am an Employer",
  href: "/contact#contact-form"
}, {
  label: "I am Job Seeker",
  href: "/contact#contact-form"
}];
interface DropdownProps {
  label: string;
  items: {
    label: string;
    href: string;
    external?: boolean;
  }[];
  onItemClick?: () => void;
}
const Dropdown = ({
  label,
  items,
  onItemClick
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const itemClasses = "relative block px-4 py-3 text-sm text-emerald-dark transition-all duration-300 ease-out overflow-hidden group hover:text-gold hover:pl-6 before:absolute before:inset-0 before:bg-gradient-to-r before:from-emerald/15 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0 after:absolute after:left-0 after:top-0 after:bottom-0 after:w-1 after:bg-gold after:scale-y-0 after:transition-transform after:duration-300 hover:after:scale-y-100";
  return <div className="relative" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="relative flex items-center gap-1 px-4 py-2 text-sm font-bold text-white hover:text-emerald-light transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-emerald-light after:transition-all after:duration-300 hover:after:w-full">
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-border py-1 z-50 animate-slide-down">
          {items.map((item, index) => item.external ? <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={itemClasses} style={{
        animationDelay: `${index * 50}ms`
      }} onClick={() => {
        setIsOpen(false);
        onItemClick?.();
      }}>
                <span className="relative z-10">{item.label}</span>
              </a> : <Link key={item.label} to={item.href} className={itemClasses} style={{
        animationDelay: `${index * 50}ms`
      }} onClick={() => {
        setIsOpen(false);
        onItemClick?.();
      }}>
                <span className="relative z-10">{item.label}</span>
              </Link>)}
        </div>}
    </div>;
};
const ExpertiseDropdown = ({
  onItemClick
}: {
  onItemClick?: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleExpertiseClick = (item: string) => {
    setIsOpen(false);
    onItemClick?.();
    navigate("/contact#contact-form");
  };
  const itemClasses = "relative block w-full text-left px-4 py-3 text-sm text-emerald-dark transition-all duration-300 ease-out overflow-hidden group hover:text-gold hover:pl-6 before:absolute before:inset-0 before:bg-gradient-to-r before:from-emerald/15 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0 after:absolute after:left-0 after:top-0 after:bottom-0 after:w-1 after:bg-gold after:scale-y-0 after:transition-transform after:duration-300 hover:after:scale-y-100";
  return <div className="relative" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="relative flex items-center gap-1 px-4 py-2 text-sm font-bold text-white hover:text-emerald-light transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-emerald-light after:transition-all after:duration-300 hover:after:w-full">
        Areas of Expertise
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-border py-1 z-50 animate-slide-down">
          {expertiseItems.map((item, index) => <button key={item} onClick={() => handleExpertiseClick(item)} className={itemClasses} style={{
        animationDelay: `${index * 50}ms`
      }}>
              <span className="relative z-10">{item}</span>
            </button>)}
        </div>}
    </div>;
};
export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const closeMobileMenu = () => setMobileMenuOpen(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Simple search navigation
      const query = searchQuery.toLowerCase();
      if (query.includes("contact") || query.includes("employer") || query.includes("job")) {
        navigate("/contact");
      } else if (query.includes("about") || query.includes("who")) {
        navigate("/#who-we-are");
      } else if (query.includes("mission")) {
        navigate("/#mission");
      } else {
        navigate("/#services");
      }
      setSearchQuery("");
      setSearchOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-emerald-dark/80 backdrop-blur-md border-b border-emerald/20 shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center group">
            <div className="relative flex items-center">
              {/* Logo Container with emerald background */}
              <div className="relative bg-emerald-dark rounded-lg px-3 py-1.5 shadow-lg border border-emerald/40 transition-all duration-300 group-hover:shadow-gold/30 group-hover:shadow-xl group-hover:scale-105 group-hover:border-gold/50">
                <img 
                  src={yashneeLogoFinal} 
                  alt="Yashnee Tech Logo" 
                  className="h-10 md:h-12 lg:h-14 w-auto object-contain brightness-110 contrast-110"
                  style={{ 
                    filter: 'invert(1) hue-rotate(180deg) brightness(1.5) contrast(1.2)'
                  }}
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <Dropdown label="Hire Talent" items={hireTalentItems} />
            <Dropdown label="For Job Seekers" items={jobSeekerItems} />
            <ExpertiseDropdown />
            <Link to="/who-we-are" className="relative px-4 py-2 text-sm font-bold text-white hover:text-emerald-light transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-emerald-light after:transition-all after:duration-300 hover:after:w-full">
              Who We Are
            </Link>
            <Dropdown label="Contact Us" items={contactItems} />
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative">
              <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 text-white/70 hover:text-gold transition-colors">
                <Search className="w-5 h-5" />
              </button>
              {searchOpen && <form onSubmit={handleSearch} className="absolute top-full right-0 mt-2 w-72 bg-card rounded-lg shadow-lg border border-border p-3 z-50 animate-slide-down">
                  <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search..." className="w-full px-3 py-2 bg-secondary rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" autoFocus />
                </form>}
            </div>

            {/* CTA Button */}
            <Link to="/get-started">
              <Button className="hidden sm:inline-flex bg-emerald text-primary-foreground hover:bg-emerald-light">
                Get Started
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-white">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && <div className="lg:hidden bg-emerald-dark border-t border-emerald/20 animate-slide-down">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Dropdown label="Hire Talent" items={hireTalentItems} onItemClick={closeMobileMenu} />
            <Dropdown label="For Job Seekers" items={jobSeekerItems} onItemClick={closeMobileMenu} />
            <ExpertiseDropdown onItemClick={closeMobileMenu} />
            <Link to="/who-we-are" className="block px-4 py-2 text-sm font-medium text-foreground" onClick={closeMobileMenu}>
              Who We Are
            </Link>
            <Dropdown label="Contact Us" items={contactItems} onItemClick={closeMobileMenu} />
            <Link to="/get-started" onClick={closeMobileMenu}>
              <Button className="w-full bg-emerald text-primary-foreground hover:bg-emerald-light">Get Started</Button>
            </Link>
          </div>
        </div>}
    </header>;
};