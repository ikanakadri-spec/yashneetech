import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { FileText, Mail } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 text-emerald font-semibold text-sm mb-6">
              <FileText className="w-4 h-4" />
              Legal Terms
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <section className="mb-10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the Yashnee Tech website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">2. Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Yashnee Tech provides recruitment and staffing services, including but not limited to job placement, resume submission, and talent acquisition services for employers and job seekers.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">When using our services, you agree to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide accurate and truthful information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Not misrepresent your qualifications or experience</li>
                <li>Not use our services for any unlawful purpose</li>
                <li>Respect the intellectual property rights of others</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">4. Resume and Data Submission</h2>
              <p className="text-muted-foreground leading-relaxed">
                By submitting your resume or personal information through our website, you grant Yashnee Tech permission to store, process, and share your information with potential employers for recruitment purposes. You may request removal of your data at any time by contacting us.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">5. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website uses cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Essential Cookies:</strong> Required for website functionality</li>
                <li><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong className="text-foreground">Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                By continuing to use our website, you consent to our use of cookies as described in our{" "}
                <Link to="/privacy" className="text-emerald hover:text-emerald-light underline">
                  Privacy Policy
                </Link>.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, graphics, logos, and software, is the property of Yashnee Tech and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our written permission.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Yashnee Tech is not liable for any direct, indirect, incidental, or consequential damages arising from your use of our services. We do not guarantee job placement or specific outcomes from using our recruitment services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">8. Modifications to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of the United States of America, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
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

export default TermsOfService;
