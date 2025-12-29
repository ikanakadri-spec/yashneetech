import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Users, 
  ArrowRight, 
  Briefcase, 
  Search, 
  Clock, 
  CheckCircle,
  Sparkles
} from "lucide-react";

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-emerald-dark via-emerald to-emerald-light overflow-hidden">
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-champagne font-semibold text-sm mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Get Started
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-8">
              How Can We{" "}
              <span className="relative inline-block">
                <span className="relative z-10 gradient-text-animated">Help</span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-champagne/30 -skew-x-12" />
              </span>
              {" "}You?
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Whether you're looking to build your team or advance your career, we're here to make it happen.
            </p>
          </div>
        </div>

        {/* Straight line separator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-background" />
      </section>

      {/* Options Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Employer Card */}
              <Link to="/contact#contact-form" className="group">
                <div className="relative h-full p-10 rounded-3xl bg-card border border-border transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald to-emerald-light rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="w-10 h-10 text-primary-foreground" />
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4 group-hover:text-emerald transition-colors">
                      I'm an Employer
                    </h2>
                    
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      Looking to build your dream team? We connect you with top-tier talent across industries.
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-emerald" />
                        </div>
                        <span className="text-muted-foreground text-sm">Access pre-screened candidates</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-emerald" />
                        </div>
                        <span className="text-muted-foreground text-sm">Flexible staffing solutions</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-emerald" />
                        </div>
                        <span className="text-muted-foreground text-sm">Industry-specialized recruiters</span>
                      </li>
                    </ul>
                    
                    <div className="flex items-center gap-2 text-emerald font-semibold group-hover:gap-4 transition-all duration-300">
                      <span>Hire Talent</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
              
              {/* Job Seeker Card */}
              <Link to="/contact#contact-form" className="group">
                <div className="relative h-full p-10 rounded-3xl bg-card border border-border transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-champagne to-champagne-light rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-10 h-10 text-emerald-dark" />
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4 group-hover:text-champagne transition-colors">
                      I'm a Job Seeker
                    </h2>
                    
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      Ready to take the next step in your career? Let us connect you with amazing opportunities.
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-champagne/10 flex items-center justify-center flex-shrink-0">
                          <Search className="w-4 h-4 text-champagne" />
                        </div>
                        <span className="text-muted-foreground text-sm">Exclusive job opportunities</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-champagne/10 flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-4 h-4 text-champagne" />
                        </div>
                        <span className="text-muted-foreground text-sm">Career guidance & support</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-champagne/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="w-4 h-4 text-champagne" />
                        </div>
                        <span className="text-muted-foreground text-sm">Fast placement process</span>
                      </li>
                    </ul>
                    
                    <div className="flex items-center gap-2 text-champagne font-semibold group-hover:gap-4 transition-all duration-300">
                      <span>Find a Job</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
              
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetStarted;
