import { useState, useRef, useEffect, useMemo } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AutoTransparentImage } from "@/components/AutoTransparentImage";
import yashneeLogo from "@/assets/yashnee-logo-new.png";

// Searchable content items
const searchableContent = [
  { title: "Home", description: "Welcome to Yashnee Tech - Your Next-Gen Talent Partner", path: "/", keywords: ["home", "welcome", "main"] },
  { title: "Who We Are", description: "Learn about our mission, values, and the team behind Yashnee Tech", path: "/who-we-are", keywords: ["about", "team", "company", "mission", "values"] },
  { title: "Contact Us", description: "Get in touch with our recruitment experts", path: "/contact", keywords: ["contact", "email", "phone", "reach", "inquire"] },
  { title: "Get Started", description: "Begin your journey with Yashnee Tech today", path: "/get-started", keywords: ["start", "begin", "register", "signup"] },
  { title: "Staffing Solutions", description: "Comprehensive staffing services for your business needs", path: "/contact", keywords: ["staffing", "staff", "hire", "hiring", "workforce"] },
  { title: "AI Talent Sourcing", description: "Leverage AI-powered recruitment for smarter hiring", path: "/contact", keywords: ["ai", "artificial intelligence", "sourcing", "technology"] },
  { title: "Global Recruitment", description: "Access talent from around the world", path: "/contact", keywords: ["global", "international", "worldwide", "overseas"] },
  { title: "Executive Recruiting", description: "Find top-level executives for leadership roles", path: "/contact", keywords: ["executive", "leadership", "c-suite", "director", "manager"] },
  { title: "For Start-up's", description: "Tailored recruitment solutions for startups", path: "/contact", keywords: ["startup", "start-up", "entrepreneur", "new business"] },
  { title: "RPO Services", description: "Recruitment Process Outsourcing for scalable hiring", path: "/contact", keywords: ["rpo", "outsourcing", "process", "recruitment"] },
  { title: "Find a Job", description: "Browse and apply for job opportunities", path: "/contact", keywords: ["job", "career", "employment", "work", "opportunity", "position"] },
  { title: "Submit Your Resume", description: "Upload your resume to be considered for roles", path: "/contact", keywords: ["resume", "cv", "apply", "submit", "upload"] },
  { title: "Accounting & Finance", description: "Specialized talent for finance and accounting roles", path: "/contact", keywords: ["accounting", "finance", "financial", "accountant", "cpa"] },
  { title: "Engineering", description: "Find skilled engineers for your projects", path: "/contact", keywords: ["engineer", "engineering", "technical", "developer"] },
  { title: "IT & Non-IT", description: "Technology and non-technical staffing solutions", path: "/contact", keywords: ["it", "information technology", "software", "non-it"] },
  { title: "Healthcare", description: "Healthcare and life sciences recruitment", path: "/contact", keywords: ["healthcare", "medical", "life sciences", "pharma", "hospital"] },
  { title: "Human Resources", description: "HR professionals and talent acquisition experts", path: "/contact", keywords: ["hr", "human resources", "talent", "people"] },
  { title: "Sales & Marketing", description: "Sales and marketing talent for growth", path: "/contact", keywords: ["sales", "marketing", "business development", "growth"] },
  { title: "Privacy Policy", description: "Our privacy practices and data protection policies", path: "/privacy-policy", keywords: ["privacy", "policy", "data", "protection", "gdpr"] },
  { title: "Terms of Service", description: "Terms and conditions for using our services", path: "/terms-of-service", keywords: ["terms", "conditions", "service", "legal"] },
];

const hireTalentItems = [{
  label: "Staffing Solutions",
  href: "/contact"
}, {
  label: "AI Talent Sourcing",
  href: "/contact"
}, {
  label: "Global Recruitment",
  href: "/contact"
}, {
  label: "Executive Recruiting",
  href: "/contact"
}, {
  label: "For Start-up's",
  href: "/contact"
}, {
  label: "Recruitment Process Outsourcing (RPO)",
  href: "/contact"
}];

const jobSeekerItems = [{
  label: "Find a Job",
  href: "/contact"
}, {
  label: "Submit Your Resume",
  href: "/contact"
}];

const expertiseItems = ["Accounting & Finance", "Administrative & Customer Support", "Engineering", "IT & Non-IT", "Healthcare & Life Sciences", "Human Resources", "Sales & Marketing", "Supply Chain & Logistics", "Manufacturing", "Life Sciences"];

const contactItems = [{
  label: "I am an Employer",
  href: "/contact"
}, {
  label: "I am Job Seeker",
  href: "/contact"
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

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-4 py-2 text-sm font-bold text-white bg-emerald/20 rounded-md hover:bg-emerald hover:text-primary-foreground transition-all duration-300"
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-border py-1 z-[100] animate-slide-down">
          {items.map((item, index) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={itemClasses}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => {
                  setIsOpen(false);
                  onItemClick?.();
                }}
              >
                <span className="relative z-10">{item.label}</span>
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className={itemClasses}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => {
                  setIsOpen(false);
                  onItemClick?.();
                }}
              >
                <span className="relative z-10">{item.label}</span>
              </Link>
            )
          )}
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
    navigate("/contact");
  };

  const itemClasses = "relative block w-full text-left px-4 py-3 text-sm text-emerald-dark transition-all duration-300 ease-out overflow-hidden group hover:text-gold hover:pl-6 before:absolute before:inset-0 before:bg-gradient-to-r before:from-emerald/15 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0 after:absolute after:left-0 after:top-0 after:bottom-0 after:w-1 after:bg-gold after:scale-y-0 after:transition-transform after:duration-300 hover:after:scale-y-100";

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-4 py-2 text-sm font-bold text-white bg-emerald/20 rounded-md hover:bg-emerald hover:text-primary-foreground transition-all duration-300"
      >
        Areas of Expertise
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-border py-1 z-[100] animate-slide-down">
          {expertiseItems.map((item, index) => (
            <button
              key={item}
              onClick={() => handleExpertiseClick(item)}
              className={itemClasses}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="relative z-10">{item}</span>
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
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter search results based on query
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return searchableContent.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.keywords.some(keyword => keyword.includes(query))
    ).slice(0, 6); // Limit to 6 results
  }, [searchQuery]);

  const handleResultClick = (path: string) => {
    navigate(path);
    setSearchQuery("");
    setSearchOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${scrolled ? "bg-emerald-dark/80 backdrop-blur-md border-b border-emerald/20 shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="items-center justify-between h-20 lg:h-24 flex flex-row">
          <Link to="/" className="flex items-center group transition-transform duration-300 hover:scale-105 -ml-4 lg:-ml-6">
            <AutoTransparentImage 
              src={yashneeLogo} 
              alt="Yashnee - Next Gen Talent Partner" 
              className="h-20 md:h-28 lg:h-32 w-auto object-contain [filter:drop-shadow(0_0_12px_rgba(255,255,255,0.9))_drop-shadow(0_0_6px_rgba(255,255,255,0.8))_drop-shadow(0_0_3px_rgba(255,255,255,1))_drop-shadow(0_2px_4px_rgba(0,0,0,0.3))]" 
              tolerance={90}
              orangeToWhite={true}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <Dropdown label="Hire Talent" items={hireTalentItems} />
            <Dropdown label="For Job Seekers" items={jobSeekerItems} />
            <ExpertiseDropdown />
            <Link to="/who-we-are" className="flex items-center px-4 py-2 text-sm font-bold text-white bg-emerald/20 rounded-md hover:bg-emerald hover:text-primary-foreground transition-all duration-300">
              Who We Are
            </Link>
            <Dropdown label="Contact Us" items={contactItems} />
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-white/70 hover:text-gold transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
              {searchOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-border z-[100] animate-slide-down overflow-hidden">
                  <div className="p-3 border-b border-border">
                    <div className="flex items-center gap-2 bg-secondary rounded-md px-3">
                      <Search className="w-4 h-4 text-muted-foreground" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search pages, services..."
                        className="w-full py-2 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                        autoFocus
                      />
                    </div>
                  </div>
                  
                  <div className="max-h-80 overflow-y-auto">
                    {searchQuery.trim() === "" ? (
                      <div className="p-4 text-center text-sm text-muted-foreground">
                        Start typing to search...
                      </div>
                    ) : searchResults.length > 0 ? (
                      <div className="py-2">
                        {searchResults.map((result, index) => (
                          <button
                            key={`${result.title}-${index}`}
                            onClick={() => handleResultClick(result.path)}
                            className="w-full text-left px-4 py-3 hover:bg-emerald/10 transition-colors group"
                          >
                            <div className="text-sm font-medium text-emerald-dark group-hover:text-emerald">
                              {result.title}
                            </div>
                            <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                              {result.description}
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center">
                        <div className="text-sm text-muted-foreground">No results found</div>
                        <div className="text-xs text-muted-foreground mt-1">Try different keywords</div>
                      </div>
                    )}
                  </div>
                </div>
              )}
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
      {mobileMenuOpen && (
        <div className="lg:hidden bg-emerald-dark border-t border-emerald/20 animate-slide-down">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Dropdown label="Hire Talent" items={hireTalentItems} onItemClick={closeMobileMenu} />
            <Dropdown label="For Job Seekers" items={jobSeekerItems} onItemClick={closeMobileMenu} />
            <ExpertiseDropdown onItemClick={closeMobileMenu} />
            <Link to="/who-we-are" className="block px-4 py-2 text-sm font-bold text-white bg-emerald/20 rounded-md hover:bg-emerald hover:text-primary-foreground transition-all duration-300" onClick={closeMobileMenu}>
              Who We Are
            </Link>
            <Dropdown label="Contact Us" items={contactItems} onItemClick={closeMobileMenu} />
            <Link to="/get-started" onClick={closeMobileMenu}>
              <Button className="w-full bg-emerald text-primary-foreground hover:bg-emerald-light">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};