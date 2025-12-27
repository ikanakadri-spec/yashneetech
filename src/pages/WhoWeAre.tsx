import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Users, Building2, Clock, Target, TrendingUp, Shield, Award, MessageSquare, DollarSign, Sparkles, Star } from "lucide-react";
import officeMeeting from "@/assets/office-meeting.jpg";
import officeWorkspace from "@/assets/office-workspace.jpg";
import officeExecutive from "@/assets/office-executive.jpg";

const clientBenefits = [
  {
    icon: Clock,
    text: "Faster Hiring: Cut time-to-fill by 50% with pre-screened, qualified candidates"
  },
  {
    icon: Target,
    text: "Quality Matches: Higher retention through skill and culture alignment"
  },
  {
    icon: TrendingUp,
    text: "Scalable Solutions: Single hires to entire team builds"
  },
  {
    icon: Shield,
    text: "Market Intelligence: Real-time insights on compensation, availability, trends"
  }
];

const candidateBenefits = [
  {
    icon: Award,
    text: "Career Advancement: Exclusive opportunities with leading companies"
  },
  {
    icon: MessageSquare,
    text: "Transparent Process: Clear communication & honest feedback"
  },
  {
    icon: Users,
    text: "Long-term Partnership: Ongoing career guidance beyond placement"
  },
  {
    icon: DollarSign,
    text: "Better Compensation: Competitive packages with market knowledge"
  }
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

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-emerald-dark via-emerald to-emerald-light overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-champagne/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-white/20 rounded-full animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-gradient-to-br from-champagne/10 to-transparent rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-champagne font-semibold text-sm mb-6 backdrop-blur-sm">
              <Users className="w-4 h-4" />
              Who We Are
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-8">
              Your Strategic{" "}
              <span className="relative inline-block">
                <span className="relative z-10 gradient-text-animated">Partner</span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-champagne/30 -skew-x-12" />
              </span>
              {" "}for Talent
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto">
              We are your partner for talent in finding the right work and helping you secure meaningful roles. Our team has multi-year expertise in the staffing industry, leveraging AI-powered recruitment technology to deliver precise talent matching at scale.
            </p>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-ivory/30 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
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
                {clientBenefits.map((benefit) => (
                  <li key={benefit.text} className="flex items-start gap-4 group/item">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-champagne/20 to-champagne/10 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-5 h-5 text-champagne" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed pt-2">{benefit.text}</span>
                  </li>
                ))}
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
                {candidateBenefits.map((benefit) => (
                  <li key={benefit.text} className="flex items-start gap-4 group/item">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald/20 to-emerald/10 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-5 h-5 text-emerald" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed pt-2">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-b from-background to-ivory relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald/5 via-transparent to-transparent opacity-70" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 text-emerald font-semibold text-sm mb-6">
              <Star className="w-4 h-4" />
              Our Mission
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Making{" "}
              <span className="gradient-text-animated">Meaningful</span>
              {" "}Connections
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              At Yash Tech, we believe great talent and great companies deserve each other. Our mission is to make those connections happen – faster, smarter, and with lasting impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {missionCards.map((card) => (
              <div key={card.title} className="group relative h-[400px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark via-emerald-dark/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
                
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
