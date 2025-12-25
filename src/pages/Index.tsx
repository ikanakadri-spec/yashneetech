import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Users, Brain, Globe, Briefcase, Rocket, Building2, ArrowRight, Clock, TrendingUp, Shield, Target, MessageSquare, Award, DollarSign, ChevronRight, Sparkles, Zap, Star } from "lucide-react";
import officeHero from "@/assets/office-hero.jpg";
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
const clientBenefits = [{
  icon: Clock,
  text: "Faster Hiring: Cut time-to-fill by 50% with pre-screened, qualified candidates"
}, {
  icon: Target,
  text: "Quality Matches: Higher retention through skill and culture alignment"
}, {
  icon: TrendingUp,
  text: "Scalable Solutions: Single hires to entire team builds"
}, {
  icon: Shield,
  text: "Market Intelligence: Real-time insights on compensation, availability, trends"
}];
const candidateBenefits = [{
  icon: Award,
  text: "Career Advancement: Exclusive opportunities with leading companies"
}, {
  icon: MessageSquare,
  text: "Transparent Process: Clear communication & honest feedback"
}, {
  icon: Users,
  text: "Long-term Partnership: Ongoing career guidance beyond placement"
}, {
  icon: DollarSign,
  text: "Better Compensation: Competitive packages with market knowledge"
}];
const missionCards = [{
  title: "Impacting Businesses",
  image: officeMeeting,
  description: "Helping organizations build winning teams that drive growth and innovation."
}, {
  title: "Changing Lives",
  image: officeWorkspace,
  description: "Connecting talented professionals with opportunities that transform their careers."
}, {
  title: "Transforming Careers",
  image: officeExecutive,
  description: "Empowering individuals to reach their full potential through meaningful work."
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
const Index = () => {
  return <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-champagne/30 to-champagne-light/20 rounded-full blur-3xl animate-float" />
          <div className="absolute top-1/2 -left-20 w-72 h-72 bg-gradient-to-br from-emerald/20 to-emerald-light/10 rounded-full blur-3xl animate-float" style={{
          animationDelay: '2s'
        }} />
          <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-br from-champagne/20 to-transparent rounded-full blur-3xl animate-float" style={{
          animationDelay: '4s'
        }} />
        </div>

        <div className="absolute inset-0">
          <img src={officeHero} alt="Modern corporate office space" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-dark/70 via-emerald/50 to-emerald/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/40 via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 leading-[1.1] overflow-hidden">
              <span className="inline-block overflow-hidden">
                <span className="inline-block text-primary-foreground opacity-0 animate-reveal-text" style={{ animationDelay: '200ms' }}>
                  Find Your{" "}
                </span>
              </span>
              <span className="relative inline-block overflow-hidden">
                <span className="inline-block opacity-0 animate-reveal-text" style={{ animationDelay: '500ms' }}>
                  <span className="relative z-10 text-champagne animate-glow-pulse">Perfect</span>
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-champagne/30 -skew-x-12 origin-left animate-[scaleX_0.5s_ease-out_0.9s_forwards] scale-x-0" />
              </span>
              <br />
              <span className="inline-block overflow-hidden">
                <span className="inline-block text-primary-foreground/90 opacity-0 animate-slide-in-blur" style={{ animationDelay: '800ms' }}>
                  Talent Match
                </span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-12 leading-relaxed max-w-2xl opacity-0 animate-fade-up" style={{
            animationDelay: '400ms',
            animationFillMode: 'forwards'
          }}>
              AI-powered precision meets human expertise. We connect exceptional talent with exceptional opportunities.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-16 opacity-0 animate-fade-up" style={{
            animationDelay: '600ms',
            animationFillMode: 'forwards'
          }}>
              <Link to="/contact">
                <Button size="lg" className="group bg-champagne text-emerald-dark hover:bg-champagne-light text-lg px-10 py-7 font-semibold shadow-lg hover:shadow-champagne/25 transition-all duration-500 hover:scale-105">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-10 py-7 backdrop-blur-sm transition-all duration-500 hover:border-champagne">
                  Submit Resume
                </Button>
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-0 animate-fade-up" style={{
            animationDelay: '800ms',
            animationFillMode: 'forwards'
          }}>
              {stats.map((stat, index) => <div key={stat.label} className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-500">
                  <stat.icon className="w-6 h-6 text-champagne mx-auto mb-2" />
                  <div className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-1">{stat.number}</div>
                  <div className="text-sm text-primary-foreground/60">{stat.label}</div>
                </div>)}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up" style={{
        animationDelay: '1000ms',
        animationFillMode: 'forwards'
      }}>
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-champagne rounded-full animate-bounce-subtle" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-background/80 backdrop-blur-sm relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-ivory/30 to-transparent pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 text-emerald font-semibold text-sm mb-6">
              <Star className="w-4 h-4" />
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
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <div key={service.title} className="group relative p-8 rounded-2xl bg-card/70 backdrop-blur-sm border border-border/50 hover:border-champagne/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-champagne/10" style={{
            animationDelay: `${index * 100}ms`
          }}>
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-champagne/5 via-transparent to-emerald/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald to-emerald-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald/20 transition-all duration-500">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-emerald transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  
                  <div className="mt-6 flex items-center text-champagne font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    Learn more <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="py-32 bg-gradient-to-b from-ivory to-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-champagne/20 rounded-full animate-float" style={{
        animationDelay: '1s'
      }} />
        <div className="absolute bottom-40 right-20 w-32 h-32 border-2 border-emerald/20 rounded-full animate-float" style={{
        animationDelay: '3s'
      }} />
        
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-champagne/10 text-champagne font-semibold text-sm mb-6">
              <Users className="w-4 h-4" />
              Who We Are
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-8">
              Your Strategic{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-emerald">Partner</span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-emerald/20 -skew-x-12" />
              </span>
              {" "}for Talent
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are your partner for talent in finding the right work and helping you secure meaningful roles. Our team has multi-year expertise in the staffing industry, leveraging AI-powered recruitment technology to deliver precise talent matching at scale.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* For Clients */}
            <div className="group p-10 rounded-3xl bg-card/70 backdrop-blur-sm border border-border/50 shadow-xl hover:shadow-2xl hover:shadow-emerald/10 transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald to-emerald-light rounded-2xl flex items-center justify-center shadow-lg">
                  <Building2 className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground">For Our Clients</h3>
              </div>
              <ul className="space-y-5">
                {clientBenefits.map((benefit, index) => <li key={benefit.text} className="flex items-start gap-4 group/item">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-champagne/20 to-champagne/10 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-5 h-5 text-champagne" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed pt-2">{benefit.text}</span>
                  </li>)}
              </ul>
            </div>

            {/* For Candidates */}
            <div className="group p-10 rounded-3xl bg-card/70 backdrop-blur-sm border border-border/50 shadow-xl hover:shadow-2xl hover:shadow-champagne/10 transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-champagne to-champagne-light rounded-2xl flex items-center justify-center shadow-lg">
                  <Users className="w-7 h-7 text-emerald-dark" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground">For Our Candidates</h3>
              </div>
              <ul className="space-y-5">
                {candidateBenefits.map((benefit, index) => <li key={benefit.text} className="flex items-start gap-4 group/item">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald/20 to-emerald/10 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-5 h-5 text-emerald" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed pt-2">{benefit.text}</span>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-32 bg-background/80 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald/5 via-transparent to-transparent opacity-70" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 text-emerald font-semibold text-sm mb-6">
              <Target className="w-4 h-4" />
              Our Mission
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Making{" "}
              <span className="gradient-text-animated">Meaningful</span>
              <br />Connections
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-xl">
              At Yash Tech, we believe great talent and great companies deserve each other. Our mission is to make those connections happen – faster, smarter, and with lasting impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {missionCards.map((card, index) => <div key={card.title} className="group relative h-[450px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark via-emerald-dark/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="w-12 h-12 bg-champagne/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm border border-champagne/30">
                      <Sparkles className="w-6 h-6 text-champagne" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-3">
                      {card.title}
                    </h3>
                    <p className="text-primary-foreground/80 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-champagne/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald via-emerald-light to-emerald animate-gradient" />
        
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-champagne/10 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-float" style={{
          animationDelay: '3s'
        }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary-foreground/10 rounded-full animate-rotate-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary-foreground/5 rounded-full animate-rotate-slow" style={{
          animationDirection: 'reverse'
        }} />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8">
              <Zap className="w-4 h-4 text-champagne" />
              <span className="text-primary-foreground text-sm font-medium">Ready to Get Started?</span>
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
                <Button size="lg" className="group bg-champagne text-emerald-dark hover:bg-champagne-light text-lg px-12 py-8 font-bold shadow-2xl hover:shadow-champagne/30 transition-all duration-500 hover:scale-105">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;