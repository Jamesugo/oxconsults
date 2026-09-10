import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { CTAButton } from "@/components/shared/CTAButton";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found | Ox Consults" };
  return {
    title: `${service.title} | Ox Consults`,
    description: service.description,
  };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background dark:bg-navy-deep dark:gradient-hero relative overflow-hidden">
        <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>

          <SectionHeader
            title={service.title}
            subtitle={service.longDescription}
            label={service.shortTitle}
            align="left"
          />
        </div>
      </section>

      {/* Challenges We Address */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal>
            <h2 className="heading-section text-3xl md:text-4xl mb-12">
              Challenges We Address
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.challenges.map((challenge, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border">
                  <div className="w-8 h-8 bg-destructive/10 text-destructive rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-sm font-bold">{i + 1}</span>
                  </div>
                  <p className="text-foreground font-medium">{challenge}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Methodology */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal>
            <h2 className="heading-section text-3xl md:text-4xl mb-4">
              Our Methodology
            </h2>
            <p className="text-muted-foreground text-lg mb-16 max-w-3xl">
              A proven, structured approach that combines analytical rigor with
              pragmatic execution to deliver lasting results.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.methodology.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.15}>
                <Card className="h-full border-border card-elevated">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-emerald/10 text-emerald rounded-xl flex items-center justify-center font-serif text-xl font-bold">
                        {step.step}
                      </div>
                      <h3 className="font-serif text-xl font-semibold">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 bg-navy-deep text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal>
            <SectionHeader
              title="Key Deliverables"
              subtitle="Tangible outputs that drive measurable impact and lasting change."
              label="What You Receive"
              light
              align="left"
              className="mb-16"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.deliverables.map((deliverable, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4 border-b border-white/10 pb-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                  <p className="text-slate-200">{deliverable}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <ScrollReveal>
            <h2 className="heading-section text-3xl md:text-4xl mb-6">
              Ready to get started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how our {service.shortTitle.toLowerCase()} expertise
              can help your organization achieve its goals.
            </p>
            <Link href="/booking">
              <CTAButton size="lg" className="h-14 px-8 text-lg">
                Schedule a Discovery Call
              </CTAButton>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
