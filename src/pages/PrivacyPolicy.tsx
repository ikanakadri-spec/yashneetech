import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Shield, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 text-emerald font-semibold text-sm mb-6">
              <Shield className="w-4 h-4" />
              Your Privacy Matters
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <section className="mb-10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Yashnee Tech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our recruitment services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Personal Information:</strong> Name, email address, phone number, and mailing address.</li>
                <li><strong className="text-foreground">Professional Information:</strong> Resume, work history, education, skills, and employment preferences.</li>
                <li><strong className="text-foreground">Technical Information:</strong> IP address, browser type, device information, and cookies.</li>
                <li><strong className="text-foreground">Communication Data:</strong> Records of correspondence with us.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Match you with relevant job opportunities</li>
                <li>Process your applications and submissions</li>
                <li>Communicate with you about services and opportunities</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraudulent or illegal activity</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">4. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Potential Employers:</strong> With your consent, we share your professional information with companies seeking candidates.</li>
                <li><strong className="text-foreground">Service Providers:</strong> Third-party vendors who assist us in operating our business.</li>
                <li><strong className="text-foreground">Legal Requirements:</strong> When required by law or to protect our rights.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. You may request deletion of your data at any time.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">8. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. For more information, please see our{" "}
                <Link to="/terms" className="text-emerald hover:text-emerald-light underline">
                  Terms of Service
                </Link>.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="flex items-center gap-2 text-emerald">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@yashneetech.com" className="hover:text-emerald-light">
                  info@yashneetech.com
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
