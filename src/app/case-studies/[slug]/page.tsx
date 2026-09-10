import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { CTAButton } from "@/components/shared/CTAButton";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return { title: "Case Study Not Found | Ox Consults" };
  return {
    title: `${study.title} | Ox Consults`,
    description: study.challenge.slice(0, 160),
  };
}

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);

  if (!study) notFound();

  const otherStudies = caseStudies
    .filter((c) => c.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background dark:bg-navy-deep dark:gradient-hero relative overflow-hidden">
        <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>

          <div className="flex flex-wrap gap-3 mb-6">
            <Badge className="bg-emerald/10 text-emerald border-emerald/20">
              {study.industry}
            </Badge>
            <Badge variant="outline" className="text-gold border-gold/30 bg-gold/5">
              {study.service}
            </Badge>
            <Badge variant="outline" className="text-muted-foreground border-border">
              {study.region}
            </Badge>
          </div>

          <h1 className="heading-section text-3xl md:text-4xl lg:text-5xl mb-6">
            {study.title}
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            {study.client}
          </p>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="py-12 bg-navy-deep text-white border-y border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {study.metrics.map((metric, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-serif font-bold text-gold mb-1">
                    {metric.value}
                    <span className="text-xl">{metric.suffix}</span>
                  </p>
                  <p className="text-slate-400 text-sm uppercase tracking-wider">
                    {metric.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal>
            <h2 className="heading-section text-3xl md:text-4xl mb-8">
              The Challenge
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {study.challenge}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal>
            <h2 className="heading-section text-3xl md:text-4xl mb-8">
              Our Approach
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {study.approach}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal>
            <h2 className="heading-section text-3xl md:text-4xl mb-8">
              The Results
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {study.results}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonial */}
      {study.testimonial && (
        <section className="py-24 bg-navy-deep text-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <ScrollReveal>
              <Quote className="w-12 h-12 text-gold mx-auto mb-8 opacity-50" />
              <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed mb-8 text-slate-100 italic">
                &ldquo;{study.testimonial}&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold text-gold">
                  {study.testimonialAuthor}
                </p>
                <p className="text-slate-400 text-sm">
                  {study.testimonialRole}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Related Case Studies */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal>
            <h2 className="heading-section text-3xl md:text-4xl mb-12">
              More Case Studies
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherStudies.map((other, i) => (
              <ScrollReveal key={other.slug} delay={i * 0.1}>
                <Link
                  href={`/case-studies/${other.slug}`}
                  className="block group h-full"
                >
                  <Card className="h-full border-border card-elevated">
                    <div className="w-full h-40 bg-secondary flex items-center justify-center">
                      <span className="text-muted-foreground font-serif italic text-sm">
                        {other.industry} Visual
                      </span>
                    </div>
                    <CardContent className="p-6">
                      <Badge className="bg-primary/10 text-primary border-none mb-3 text-xs">
                        {other.industry}
                      </Badge>
                      <h3 className="font-serif text-lg font-semibold group-hover:text-emerald transition-colors line-clamp-2">
                        {other.title}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-alternate border-t border-border">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <ScrollReveal>
            <h2 className="heading-section text-3xl md:text-4xl mb-6">
              Ready to achieve similar results?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let&apos;s discuss how we can help your organization drive
              measurable impact.
            </p>
            <Link href="/booking">
              <CTAButton size="lg" className="h-14 px-8 text-lg">
                Start a Conversation
              </CTAButton>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
