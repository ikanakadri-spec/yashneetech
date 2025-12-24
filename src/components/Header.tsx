import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const hireTalentItems = [
  { label: "Staffing Solutions", href: "/#services" },
  { label: "AI Talent Sourcing", href: "/#services" },
  { label: "Global Recruitment", href: "/#services" },
  { label: "Executive Recruiting", href: "/#services" },
  { label: "Start-up End to End Staffing", href: "/#services" },
  { label: "Recruitment Process Outsourcing (RPO)", href: "/#services" },
];

const jobSeekerItems = [
  { label: "Find a Job", href: "/contact#contact-form" },
  { label: "Submit Your Resume", href: "/contact#contact-form" },
];

const expertiseItems = [
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
];

const contactItems = [
  { label: "I am an Employer", href: "/contact#contact-form" },
  { label: "I am Job Seeker", href: "/contact#contact-form" },
];

interface DropdownProps {
  label: string;
  items: { label: string; href: string; external?: boolean }[];
  onItemClick?: () => void;
}

const Dropdown = ({ label, items, onItemClick }: DropdownProps) => {
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

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-card rounded-lg shadow-lg border border-border py-2 z-50 animate-slide-down">
          {items.map((item) => (
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                onClick={() => {
                  setIsOpen(false);
                  onItemClick?.();
                }}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                onClick={() => {
                  setIsOpen(false);
                  onItemClick?.();
                }}
              >
                {item.label}
              </Link>
            )
          ))}
        </div>
      )}
    </div>
  );
};

const ExpertiseDropdown = ({ onItemClick }: { onItemClick?: () => void }) => {
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

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
      >
        Areas of Expertise
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-72 bg-card rounded-lg shadow-lg border border-border py-2 z-50 animate-slide-down">
          {expertiseItems.map((item) => (
            <button
              key={item}
              onClick={() => handleExpertiseClick(item)}
              className="block w-full text-left px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const closeMobileMenu = () => setMobileMenuOpen(false);

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald via-teal-500 to-cyan-500 rounded-xl shadow-lg group-hover:shadow-emerald/40 transition-shadow"></div>
              <div className="absolute inset-[3px] bg-gradient-to-br from-gold via-amber-400 to-orange-400 rounded-lg"></div>
              <div className="absolute inset-[6px] bg-gradient-to-br from-emerald-dark via-emerald to-teal-600 rounded-md"></div>
              <span className="absolute inset-0 flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-br from-gold-light via-gold to-amber-300 font-heading font-black text-lg drop-shadow-sm">YT</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-xl bg-gradient-to-r from-emerald via-teal-600 to-emerald-dark bg-clip-text text-transparent">YASH</span>
              <span className="font-heading font-bold text-xl bg-gradient-to-r from-gold via-amber-500 to-gold-light bg-clip-text text-transparent ml-1">TECH</span>
              <p className="text-[10px] text-muted-foreground -mt-1">Next-Gen Talent Partner</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <Dropdown label="Hire Talent" items={hireTalentItems} />
            <Dropdown label="For Job Seekers" items={jobSeekerItems} />
            <ExpertiseDropdown />
            <Link
              to="/#who-we-are"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Who We Are
            </Link>
            <Dropdown label="Contact Us" items={contactItems} />
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
              {searchOpen && (
                <form
                  onSubmit={handleSearch}
                  className="absolute top-full right-0 mt-2 w-72 bg-card rounded-lg shadow-lg border border-border p-3 z-50 animate-slide-down"
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-full px-3 py-2 bg-secondary rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    autoFocus
                  />
                </form>
              )}
            </div>

            {/* CTA Button */}
            <Link to="/contact">
              <Button className="hidden sm:inline-flex bg-emerald text-primary-foreground hover:bg-emerald-light">
                Get Started
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-slide-down">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Dropdown label="Hire Talent" items={hireTalentItems} onItemClick={closeMobileMenu} />
            <Dropdown label="For Job Seekers" items={jobSeekerItems} onItemClick={closeMobileMenu} />
            <ExpertiseDropdown onItemClick={closeMobileMenu} />
            <Link
              to="/#who-we-are"
              className="block px-4 py-2 text-sm font-medium text-foreground"
              onClick={closeMobileMenu}
            >
              Who We Are
            </Link>
            <Dropdown label="Contact Us" items={contactItems} onItemClick={closeMobileMenu} />
            <Link to="/contact" onClick={closeMobileMenu}>
              <Button className="w-full bg-emerald text-primary-foreground hover:bg-emerald-light">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};