import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Ox Consults",
  description:
    "Ox Consults Terms of Service — the terms and conditions governing the use of our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <SectionHeader
            title="Terms of Service"
            subtitle="Please read these terms carefully before using our website or engaging our consulting services."
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
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the Ox Consults website and services,
                you agree to be bound by these Terms of Service and all
                applicable laws and regulations. If you do not agree with any
                of these terms, you are prohibited from using or accessing
                this site or engaging our services.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="heading-section text-2xl md:text-3xl text-foreground mb-4">
                2. Description of Services
              </h2>
              <p className="mb-4">
                Ox Consults provides management consulting and advisory
                services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Strategy and growth consulting
                </li>
                <li>
                  Operations and process improvement
                </li>
                <li>Digital transformation advisory</li>
                <li>Financial advisory and restructuring</li>
                <li>HR and organizational design</li>
                <li>Market entry and expansion planning</li>
                <li>Mergers and acquisitions advisory</li>
                <li>Executive coaching and leadership development</li>
              </ul>
              <p className="mt-4">
                Specific engagement terms, deliverables, timelines, and fees
                will be outlined in a separate Statement of Work (SOW) or
                engagement letter agreed upon between Ox Consults and the
                client.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="heading-section text-2xl md:text-3xl text-foreground mb-4">
                3. Client Obligations
              </h2>
              <p className="mb-4">
                When engaging our services, clients agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Provide accurate and complete information necessary for
                  the engagement
                </li>
                <li>
                  Make timely decisions and provide feedback as reasonably
                  required
                </li>
                <li>
                  Ensure appropriate personnel are available for
                  collaboration and interviews
                </li>
                <li>
                  Comply with the payment terms outlined in the engagement
                  agreement
                </li>
                <li>
                  Respect the intellectual property and proprietary
                  methodologies of Ox Consults
                </li>
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="heading-section text-2xl md:text-3xl text-foreground mb-4">
                4. Intellectual Property
              </h2>
              <p className="mb-4">
                All content on this website, including text, graphics, logos,
                images, and software, is the property of Ox Consults and is
                protected by applicable intellectual property laws.
              </p>
              <p>
                Unless otherwise specified in an engagement agreement,
                proprietary frameworks, methodologies, and tools used by Ox
                Consults in delivering services remain the intellectual
                property of Ox Consults. Clients receive a non-exclusive
                license to use deliverables produced during an engagement for
                their internal business purposes.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="heading-section text-2xl md:text-3xl text-foreground mb-4">
                5. Confidentiality
              </h2>
              <p>
                Ox Consults takes client confidentiality seriously. All
                information shared by clients during an engagement is treated
                as confidential and will not be disclosed to third parties
                without prior written consent, except as required by law.
                Specific confidentiality obligations will be outlined in the
                engagement agreement or a separate Non-Disclosure Agreement
                (NDA).
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="heading-section text-2xl md:text-3xl text-foreground mb-4">
                6. Limitation of Liability
              </h2>
              <p className="mb-4">
                Our consulting services are advisory in nature.
                Recommendations and analyses are based on the information
                available to us and our professional judgement. While we
                strive to provide the highest quality advice:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  We do not guarantee specific business outcomes or results
                </li>
                <li>
                  Clients are responsible for all final decisions and their
                  implementation
                </li>
                <li>
                  Ox Consults shall not be liable for indirect,
                  incidental, consequential, or punitive damages arising
                  from the use of our services
                </li>
                <li>
                  Our total liability for any claim shall not exceed the
                  fees paid for the specific engagement giving rise to the
                  claim
                </li>
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="heading-section text-2xl md:text-3xl text-foreground mb-4">
                7. Payment Terms
              </h2>
              <p>
                Payment terms will be specified in the engagement agreement.
                Unless otherwise agreed, invoices are payable within 30 days
                of the invoice date. Late payments may be subject to interest
                charges as specified in the engagement agreement. Ox Consults
                reserves the right to suspend services if invoices remain
                unpaid beyond the agreed terms.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="heading-section text-2xl md:text-3xl text-foreground mb-4">
                8. Engagement Termination
              </h2>
              <p>
                Either party may terminate an engagement by providing
                written notice as specified in the engagement agreement.
                Upon termination, the client will be responsible for payment
                of all work completed up to the termination date. Ox
                Consults will provide all completed deliverables and
                work-in-progress materials to the client upon settlement of
                outstanding fees.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="heading-section text-2xl md:text-3xl text-foreground mb-4">
                9. Website Use
              </h2>
              <p className="mb-4">
                When using our website, you agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Use the site in any way that violates applicable laws or
                  regulations
                </li>
                <li>
                  Attempt to gain unauthorized access to any part of the
                  site or its systems
                </li>
                <li>
                  Reproduce, distribute, or create derivative works from
                  website content without written permission
                </li>
                <li>
                  Use automated tools to scrape, crawl, or extract data
                  from the website
                </li>
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="heading-section text-2xl md:text-3xl text-foreground mb-4">
                10. Governing Law
              </h2>
              <p>
                These Terms of Service shall be governed by and construed in
                accordance with the laws of England and Wales, without
                regard to its conflict of law provisions. Any disputes
                arising from these terms shall be subject to the exclusive
                jurisdiction of the courts of England and Wales.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="heading-section text-2xl md:text-3xl text-foreground mb-4">
                11. Changes to Terms
              </h2>
              <p>
                Ox Consults reserves the right to modify these Terms of
                Service at any time. We will notify users of any material
                changes by posting the updated terms on this page and
                updating the &quot;Last Updated&quot; date. Your continued
                use of the website or our services after such changes
                constitutes your acceptance of the revised terms.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="heading-section text-2xl md:text-3xl text-foreground mb-4">
                12. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms of Service,
                please contact us:
              </p>
              <div className="mt-4 p-6 bg-secondary/30 rounded-xl border border-border">
                <p className="font-semibold text-foreground">Ox Consults</p>
                <p>100 Oxford Street, London W1D 1LL</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:legal@oxconsults.com"
                    className="text-emerald hover:underline"
                  >
                    legal@oxconsults.com
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
