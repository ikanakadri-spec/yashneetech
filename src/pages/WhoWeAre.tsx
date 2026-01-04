import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Users, Building2, Clock, Target, TrendingUp, Shield, Award, MessageSquare, DollarSign } from "lucide-react";

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

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO 
        title="About Us | Yashnee Tech – Next-Gen Staffing & Talent Solutions"
        description="Learn about Yashnee Tech, your strategic partner for talent acquisition. We provide expert staffing solutions across multiple industries."
        canonical="https://yashneetech.com/who-we-are"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-emerald-dark via-emerald to-emerald-light overflow-hidden">
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-champagne font-bold text-xl md:text-2xl mb-6 backdrop-blur-sm">
              <Users className="w-6 h-6" />
              Who We Are
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-8">
              Your Strategic{" "}
              <span className="gradient-text-animated">Partner</span>
              {" "}for Talent
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto">
              We are your partner for talent in finding the right work and helping you secure meaningful roles. Our team has multi-year expertise in the staffing industry, leveraging AI-powered recruitment technology to deliver precise talent matching at scale.
            </p>
          </div>
        </div>

        {/* Straight line separator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-background" />
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <StaggerContainer className="grid lg:grid-cols-2 gap-8" staggerDelay={0.15}>
            {/* For Clients */}
            <StaggerItem>
              <div className="group p-10 rounded-3xl bg-card border border-border transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald to-emerald-light rounded-2xl flex items-center justify-center">
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
            </StaggerItem>

            {/* For Candidates */}
            <StaggerItem>
              <div className="group p-10 rounded-3xl bg-card border border-border transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-champagne to-champagne-light rounded-2xl flex items-center justify-center">
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
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default WhoWeAre;
