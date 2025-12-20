import { Brain, Database, Users, Shield, Zap, Cloud, Code, LineChart, Headphones, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const services = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Machine learning, automation, and analytics to solve real business challenges with scalable, secure solutions."
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Statistics, machine learning, and analytics that deliver scalable insights driving performance and innovation."
    },
    {
      icon: Users,
      title: "Staffing Solutions",
      description: "Streamlined recruitment with vetted professionals across industries to build strong, high-performing teams."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Intelligent security using monitoring, detection, and response technologies for proactive protection."
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Modern technologies and smart solutions to improve efficiency, agility, and customer experience."
    },
    {
      icon: Cloud,
      title: "Cloud Engineering",
      description: "Scalable cloud infrastructure and migration services for modern, resilient business operations."
    }
  ];

  const expertise = [
    { icon: Code, title: "Application Development" },
    { icon: Users, title: "IT Recruitment & Staffing" },
    { icon: LineChart, title: "AI & Data Analytics" },
    { icon: Cloud, title: "Cloud Engineering" },
    { icon: Database, title: "Big Data Technologies" },
    { icon: Shield, title: "Accounting & Finance Staffing" }
  ];

  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "500+", label: "Projects Delivered" },
    { value: "150+", label: "Happy Clients" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">Y</span>
            </div>
            <span className="font-heading font-bold text-xl text-foreground">Yashnee Tech</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a>
            <a href="#expertise" className="text-muted-foreground hover:text-foreground transition-colors">Expertise</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          
          <Button variant="hero" size="lg">
            Get In Touch
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Modern tech office with data analytics" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-heading font-medium mb-4 animate-slide-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              Welcome to Yashnee Tech
            </p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-foreground animate-slide-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              Smart IT Solutions For{" "}
              <span className="gradient-text">Smarter Businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl animate-slide-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              Fueling digital transformation with expert solutions. We provide world-wide strategies 
              to ensure proactive domination at the end of the day.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              <Button variant="hero" size="xl">
                Explore Services
              </Button>
              <Button variant="outline" size="xl">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute right-20 top-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute right-40 bottom-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-heading font-medium mb-4">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Empower Your Business With Our{" "}
              <span className="gradient-text">Excellence Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 gradient-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <a href="#" className="inline-flex items-center gap-2 text-primary font-medium mt-6 group-hover:gap-4 transition-all">
                  Learn More <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-heading font-medium mb-4">Why Choose Us</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">
                25+ Years of Delivering{" "}
                <span className="gradient-text">Custom IT Solutions</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                We are a team of industry stalwarts with over a decade of experience, united by a shared 
                vision to deliver innovative, reliable, and scalable technology and workforce solutions. 
                Backed by a vast and resourceful talent pool, we bring deep expertise in Software Technology, 
                IT Services, and Specialized Staffing.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Award, title: "Industry Experience", desc: "Solutions that work in real-world environments" },
                  { icon: Headphones, title: "24/7 Customer Support", desc: "Dedicated team always available to help" },
                  { icon: CheckCircle, title: "Trust & Reliability", desc: "Consistent quality and dependable service" }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="p-8 rounded-2xl bg-card border border-border text-center hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                >
                  <div className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-heading font-medium mb-4">Our Expertise</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Our Service Portfolio{" "}
              <span className="gradient-text">Includes</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Expertise in Software Technology, IT Services, and Specialized Staffing across diverse domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <div 
                key={item.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:gradient-accent transition-all duration-500 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary-foreground/10 rounded-xl flex items-center justify-center transition-colors">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground group-hover:text-primary-foreground transition-colors">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-accent opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Ready to transform your business with cutting-edge IT solutions? 
              Get in touch with our expert team today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl">
                Get In Touch
              </Button>
              <Button variant="outline" size="xl">
                Call: +91 40 4996 4796
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-primary font-heading font-medium mb-4">Get In Touch</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">
                Contact <span className="gradient-text">Us</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground">📧</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Email</h4>
                    <a href="mailto:info@yashneetech.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@yashneetech.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground">📞</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Phone</h4>
                    <a href="tel:+914049964796" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 40 4996 4796
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground">📍</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      Office No. 1105, 11th Floor, Asian Suncity,<br />
                      Block B, Kothaguda, Hyderabad,<br />
                      Telangana, India - 500 084
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">Y</span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground">Yashnee Tech</span>
            </div>
            
            <p className="text-muted-foreground text-center">
              © 2025 Yashnee Tech. All rights reserved. | Globus Operandi
            </p>
            
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors">
                <span className="text-muted-foreground">in</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors">
                <span className="text-muted-foreground">X</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors">
                <span className="text-muted-foreground">f</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
