import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Users, Brain, Globe, Briefcase, Rocket, Building2, ArrowRight, Target, ChevronRight, Zap, UserCheck, FileText, Search, Award } from "lucide-react";
import heroGeometric from "@/assets/hero-geometric.jpg";
import officeMeeting from "@/assets/office-meeting.jpg";
import officeWorkspace from "@/assets/office-workspace.jpg";
import officeExecutive from "@/assets/office-executive.jpg";
const services = [{
  icon: Users,
  title: "Staffing Solutions",
  description: "Flexible workforce solutions tailored to your unique business needs and timelines."
}, {
  icon: Brain,
  title: "AI Talent Sourcing",
  description: "Leverage cutting-edge AI technology to identify and attract the best candidates."
}, {
  icon: Globe,
  title: "Global Recruitment",
  description: "Access talent from around the world with our extensive international network."
}, {
  icon: Briefcase,
  title: "Executive Recruiting",
  description: "Find C-suite and senior leadership talent to drive your organization forward."
}, {
  icon: Rocket,
  title: "Start-up Staffing",
  description: "End-to-end recruitment solutions designed for fast-growing startups."
}, {
  icon: Building2,
  title: "RPO Services",
  description: "Outsource your entire recruitment process for maximum efficiency and cost savings."
}];
const stats = [{
  number: "500+",
  label: "Placements",
  icon: Users
}, {
  number: "98%",
  label: "Success Rate",
  icon: Target
}, {
  number: "50+",
  label: "Industries",
  icon: Globe
}, {
  number: "24/7",
  label: "Support",
  icon: Zap
}];

const missionCards = [
  {
    title: "Impacting Businesses",
    image: officeMeeting,
    description: "Helping organizations build winning teams that drive growth and innovation."
  },
  {
    title: "Changing Lives",
    image: officeWorkspace,
    description: "Connecting talented professionals with opportunities that transform their careers."
  },
  {
    title: "Transforming Careers",
    image: officeExecutive,
    description: "Empowering individuals to reach their full potential through meaningful work."
  }
];
const Index = () => {
  return <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 lg:pt-28 overflow-hidden">

        <div className="absolute inset-0">
          <img src={heroGeometric} alt="Premium geometric emerald design" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent" />
        </div>
        
        {/* Floating Recruitment Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[8%] opacity-[0.08] animate-pulse">
            <UserCheck className="w-20 h-20 text-emerald-dark" style={{ animationDuration: '4s' }} />
          </div>
          <div className="absolute top-[25%] left-[25%] opacity-[0.06] animate-pulse" style={{ animationDelay: '1s' }}>
            <FileText className="w-14 h-14 text-emerald-dark" />
          </div>
          <div className="absolute top-[60%] left-[5%] opacity-[0.07] animate-pulse" style={{ animationDelay: '2s' }}>
            <Briefcase className="w-16 h-16 text-emerald-dark" />
          </div>
          <div className="absolute top-[45%] left-[20%] opacity-[0.05] animate-pulse" style={{ animationDelay: '0.5s' }}>
            <Search className="w-12 h-12 text-emerald-dark" />
          </div>
          <div className="absolute top-[75%] left-[15%] opacity-[0.06] animate-pulse" style={{ animationDelay: '1.5s' }}>
            <Award className="w-18 h-18 text-emerald-dark" />
          </div>
          <div className="absolute top-[35%] left-[35%] opacity-[0.04] animate-pulse" style={{ animationDelay: '2.5s' }}>
            <Users className="w-24 h-24 text-emerald-dark" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-[1.1] overflow-hidden">
              <span className="inline-block overflow-hidden">
                <span className="inline-block text-foreground opacity-0 animate-reveal-text" style={{ animationDelay: '200ms' }}>
                  Find Your&nbsp;
                </span>
              </span>
              <span className="inline-block overflow-hidden">
                <span className="inline-block opacity-0 animate-reveal-text" style={{ animationDelay: '500ms' }}>
                  <span className="gradient-text-animated">Perfect</span>
                </span>
              </span>
              <br />
              <span className="inline-block overflow-hidden">
                <span className="inline-block text-foreground/90 opacity-0 animate-slide-in-blur" style={{ animationDelay: '800ms' }}>
                  Talent Match
                </span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl opacity-0 animate-fade-up whitespace-nowrap font-bold" style={{
            animationDelay: '400ms',
            animationFillMode: 'forwards'
          }}>
              Precision meets human expertise. We connect relevant talent with exceptional opportunities.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-16 opacity-0 animate-fade-up" style={{
            animationDelay: '600ms',
            animationFillMode: 'forwards'
          }}>
              <Link to="/get-started">
                <Button size="lg" className="group bg-emerald text-primary-foreground hover:bg-emerald-dark text-lg px-10 py-7 font-semibold shadow-lg hover:shadow-emerald/25 transition-all duration-500 hover:scale-105 min-w-[220px] justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="group border-2 border-emerald text-emerald hover:bg-emerald hover:text-primary-foreground text-lg px-10 py-7 font-semibold transition-all duration-500 hover:scale-105 min-w-[220px] justify-center">
                  Submit Resume
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-0 animate-fade-up" style={{
            animationDelay: '800ms',
            animationFillMode: 'forwards'
          }}>
              {/* Placements */}
              <div className="group relative p-5 rounded-2xl bg-gradient-to-br from-emerald via-emerald-light to-teal-400 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-emerald/30">
                <div className="absolute -right-2 -top-2 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <Users className="w-6 h-6 text-white/90 mb-2" />
                  <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">100+</div>
                  <div className="text-sm text-white/80">Placements</div>
                </div>
              </div>

              {/* Success Rate */}
              <div className="group relative p-5 rounded-2xl bg-gradient-to-br from-emerald via-emerald-light to-teal-400 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-emerald/30">
                <div className="absolute -right-2 -top-2 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <Target className="w-6 h-6 text-white/90 mb-2" />
                  <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">98%</div>
                  <div className="text-sm text-white/80">Success Rate</div>
                </div>
              </div>

              {/* Industries */}
              <div className="group relative p-5 rounded-2xl bg-gradient-to-br from-emerald via-emerald-light to-teal-400 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-emerald/30">
                <div className="absolute -right-2 -top-2 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <Globe className="w-6 h-6 text-white/90 mb-2" />
                  <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">50+</div>
                  <div className="text-sm text-white/80">Industries</div>
                </div>
              </div>

              {/* Support */}
              <div className="group relative p-5 rounded-2xl bg-gradient-to-br from-emerald via-emerald-light to-teal-400 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-emerald/30">
                <div className="absolute -right-2 -top-2 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <Zap className="w-6 h-6 text-white/90 mb-2" />
                  <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-white/80">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-10 bg-background relative overflow-hidden">
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald/10 text-emerald font-bold text-xl md:text-2xl mb-6">
              Our Services
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Comprehensive{" "}
              <span className="gradient-text-animated">Recruitment</span>
              <br />Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From temporary staffing to executive search, we provide end-to-end talent solutions that drive your business forward.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {services.map((service, index) => (
              <StaggerItem key={service.title}>
                <div className="group relative p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-emerald hover:bg-emerald/5 transition-all duration-300 hover:-translate-y-2">
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald to-emerald-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-emerald transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-10 bg-background relative overflow-hidden">
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald/10 text-emerald font-bold text-xl md:text-2xl mb-6">
              Our Mission
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Making{" "}
              <span className="gradient-text-animated">Meaningful</span>
              {" "}Connections
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              At <span className="font-bold text-emerald">Yashnee Tech</span>, we believe great talent and great companies deserve each other. Our mission is to make those connections happen – faster, smarter, and with lasting impact.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {missionCards.map((card) => (
              <StaggerItem key={card.title}>
                <div className="group relative h-[400px] rounded-3xl overflow-hidden transition-all duration-500">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark via-emerald-dark/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                      <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-3">
                        {card.title}
                      </h3>
                      <p className="text-primary-foreground/80 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-14 relative overflow-hidden">
        {/* Solid gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald via-emerald-light to-emerald" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8">
              <span className="text-primary-foreground text-xl md:text-2xl font-bold">Ready to Get Started?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-8 leading-tight">
              Build Your{" "}
              <span className="text-champagne">Dream Team</span>
              <br />With Us
            </h2>
            
            <p className="text-primary-foreground/80 text-xl mb-12 max-w-2xl mx-auto">
              Whether you're looking to hire top talent or find your next career opportunity, we're here to help make it happen.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact">
                <Button size="lg" className="group bg-champagne text-emerald-dark hover:bg-champagne-light text-lg px-12 py-8 font-bold transition-all duration-300 hover:scale-105">
                  I'm an Employer
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="group border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-12 py-8 font-bold backdrop-blur-sm transition-all duration-500 hover:border-champagne">
                  I'm a Job Seeker
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;