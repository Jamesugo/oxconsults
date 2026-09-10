import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Ox Consults",
  description:
    "Ox Consults Privacy Policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <SectionHeader
            title="Privacy Policy"
            subtitle="Your privacy matters to us. This policy outlines how Ox Consults collects, uses, and safeguards your personal information."
            label="Legal"
          />
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <ScrollReveal>
              <p className="text-sm text-muted-foreground">
                Last Updated: January 1, 2025
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="heading-section text-2xl md:text-3xl text-foreground mb-4">
                1. Information We Collect
              </h2>
              <p className="mb-4">
                We collect information that you provide directly to us,
                including when you fill out a contact form, schedule a
                consultation, create an account, or correspond with us. This
                information may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Full name, email address, phone number, and job title
                </li>
                <li>Company name, size, and industry</li>
                <li>
                  Details about your consulting needs and project requirements
                </li>
                <li>
                  Payment information when you engage our services
                </li>
                <li>
                  Any other information you choose to provide in messages
                  or uploaded documents
                </li>
              </ul>
              <p className="mt-4">
                We also automatically collect certain technical information
                when you visit our website, including your IP address, browser
                type, operating system, referring URLs, and information about
                how you interact with our site.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="heading-section text-2xl md:text-3xl text-foreground mb-4">
                2. How We Use Your Information
              </h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Respond to your inquiries and provide the services you
                  request
                </li>
                <li>
                  Schedule and manage consultations, engagements, and project
                  delivery
                </li>
                <li>
                  Send you relevant updates about our services, insights,
                  and events (with your consent)
                </li>
                <li>
                  Improve our website, services, and overall client
                  experience
                </li>
                <li>
                  Comply with legal obligations and protect our rights
                </li>
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="heading-section text-2xl md:text-3xl text-foreground mb-4">
                3. Information Sharing
              </h2>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information in the following
                limited circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">
                    Service Providers:
                  </strong>{" "}
                  With trusted third-party vendors who assist us in
                  operating our website, conducting our business, or
                  servicing you, provided they agree to keep your
                  information confidential.
                </li>
                <li>
                  <strong className="text-foreground">
                    Legal Requirements:
                  </strong>{" "}
                  When required by law, regulation, legal process, or
                  governmental request.
                </li>
                <li>
                  <strong className="text-foreground">
                    Business Transfers:
                  </strong>{" "}
                  In connection with a merger, acquisition, or sale of
                  assets, where your information may be transferred as a
                  business asset.
                </li>
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="heading-section text-2xl md:text-3xl text-foreground mb-4">
                4. Data Security
              </h2>
              <p>
                We implement industry-standard security measures to protect
                your personal information, including encryption, secure
                servers, and access controls. While we strive to use
                commercially acceptable means to protect your data, no method
                of transmission over the Internet or method of electronic
                storage is 100% secure, and we cannot guarantee absolute
                security.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="heading-section text-2xl md:text-3xl text-foreground mb-4">
                5. Cookies &amp; Tracking
              </h2>
              <p>
                Our website uses cookies and similar tracking technologies to
                enhance your browsing experience, analyze site traffic, and
                understand where our visitors are coming from. You can
                instruct your browser to refuse all cookies or to indicate
                when a cookie is being sent. However, some features of our
                website may not function properly without cookies.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="heading-section text-2xl md:text-3xl text-foreground mb-4">
                6. Your Rights
              </h2>
              <p className="mb-4">
                Depending on your jurisdiction, you may have the following
                rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The right to access, update, or delete your personal
                  information
                </li>
                <li>
                  The right to object to or restrict the processing of your
                  data
                </li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent at any time</li>
                <li>
                  The right to lodge a complaint with a supervisory
                  authority
                </li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:privacy@oxconsults.com"
                  className="text-emerald hover:underline"
                >
                  privacy@oxconsults.com
                </a>
                .
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="heading-section text-2xl md:text-3xl text-foreground mb-4">
                7. Data Retention
              </h2>
              <p>
                We retain your personal information only for as long as
                necessary to fulfill the purposes for which it was collected,
                including to satisfy any legal, accounting, or reporting
                requirements. When we no longer need your information, we
                will securely delete or anonymize it.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="heading-section text-2xl md:text-3xl text-foreground mb-4">
                8. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy
                on this page and updating the &quot;Last Updated&quot; date.
                We encourage you to review this policy periodically.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="heading-section text-2xl md:text-3xl text-foreground mb-4">
                9. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <div className="mt-4 p-6 bg-secondary/30 rounded-xl border border-border">
                <p className="font-semibold text-foreground">Ox Consults</p>
                <p>100 Oxford Street, London W1D 1LL</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:privacy@oxconsults.com"
                    className="text-emerald hover:underline"
                  >
                    privacy@oxconsults.com
                  </a>
                </p>
                <p>Phone: +44 (0) 20 7123 4567</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
