import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  Users, 
  Brain, 
  Globe, 
  Briefcase, 
  Rocket, 
  Building2,
  ArrowRight,
  CheckCircle,
  Clock,
  TrendingUp,
  Shield,
  Target,
  MessageSquare,
  Award,
  DollarSign,
  ChevronRight
} from "lucide-react";
import officeHero from "@/assets/office-hero.jpg";
import officeMeeting from "@/assets/office-meeting.jpg";
import officeWorkspace from "@/assets/office-workspace.jpg";
import officeExecutive from "@/assets/office-executive.jpg";

const services = [
  {
    icon: Users,
    title: "Staffing Solutions",
    description: "Flexible workforce solutions tailored to your unique business needs and timelines."
  },
  {
    icon: Brain,
    title: "AI Talent Sourcing",
    description: "Leverage cutting-edge AI technology to identify and attract the best candidates."
  },
  {
    icon: Globe,
    title: "Global Recruitment",
    description: "Access talent from around the world with our extensive international network."
  },
  {
    icon: Briefcase,
    title: "Executive Recruiting",
    description: "Find C-suite and senior leadership talent to drive your organization forward."
  },
  {
    icon: Rocket,
    title: "Start-up Staffing",
    description: "End-to-end recruitment solutions designed for fast-growing startups."
  },
  {
    icon: Building2,
    title: "RPO Services",
    description: "Outsource your entire recruitment process for maximum efficiency and cost savings."
  }
];

const clientBenefits = [
  { icon: Clock, text: "Faster Hiring: Cut time-to-fill by 50% with pre-screened, qualified candidates" },
  { icon: Target, text: "Quality Matches: Higher retention through skill and culture alignment" },
  { icon: TrendingUp, text: "Scalable Solutions: Single hires to entire team builds" },
  { icon: Shield, text: "Market Intelligence: Real-time insights on compensation, availability, trends" }
];

const candidateBenefits = [
  { icon: Award, text: "Career Advancement: Exclusive opportunities with leading companies" },
  { icon: MessageSquare, text: "Transparent Process: Clear communication & honest feedback" },
  { icon: Users, text: "Long-term Partnership: Ongoing career guidance beyond placement" },
  { icon: DollarSign, text: "Better Compensation: Competitive packages with market knowledge" }
];

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
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <img 
            src={officeHero} 
            alt="Modern corporate office space" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4 animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              Welcome to YASH TECH
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-primary-foreground leading-tight animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              Your Partner in Finding{" "}
              <span className="gradient-text">Top Talent</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              We connect exceptional talent with exceptional opportunities. Experience recruitment reimagined with AI-powered precision and human expertise.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              <Link to="/contact">
                <Button size="lg" className="gradient-primary text-primary-foreground text-base px-8">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="https://www.thelasallenetwork.com/submit/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8">
                  Submit Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">Our Services</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Comprehensive Recruitment Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From temporary staffing to executive search, we provide end-to-end talent solutions that drive your business forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-primary font-medium mb-4">Who We Are</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-8">
              Your Partner for Talent
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are your partner for talent in finding the right work and helping you secure meaningful roles and develop relevant skills. Yash Tech team has hands-on multi-year expertise in the staffing and recruitment industry, especially serving the USA market. We connect top technology talent with leading organizations, leveraging AI-powered recruitment technology to deliver precise talent matching at scale.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* For Clients */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary-foreground" />
                </div>
                For Our Clients
              </h3>
              <ul className="space-y-4">
                {clientBenefits.map((benefit) => (
                  <li key={benefit.text} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <benefit.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Candidates */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary-foreground" />
                </div>
                For Our Candidates
              </h3>
              <ul className="space-y-4">
                {candidateBenefits.map((benefit) => (
                  <li key={benefit.text} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <benefit.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">Our Mission</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Making Meaningful Connections
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              At Yash Tech, we believe great talent and great companies deserve each other. Our mission is to make those connections happen – faster, smarter, and with lasting impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {missionCards.map((card, index) => (
              <div 
                key={card.title}
                className="group relative h-80 rounded-2xl overflow-hidden"
              >
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Ready to Find Your Perfect Match?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Whether you're looking to hire top talent or find your next career opportunity, we're here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary-foreground text-navy hover:bg-primary-foreground/90 text-base px-8">
                  I'm an Employer
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8">
                  I'm a Job Seeker
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;