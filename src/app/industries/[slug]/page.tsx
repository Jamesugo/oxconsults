import { notFound } from "next/navigation";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { teamMembers } from "@/data/team";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { CTAButton } from "@/components/shared/CTAButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, ArrowRight, AlertTriangle, UserCircle } from "lucide-react";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return { title: "Industry Not Found | Ox Consults" };
  return {
    title: `${industry.title} | Ox Consults`,
    description: industry.description,
  };
}

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) notFound();

  const relatedServices = services.filter((s) =>
    industry.relatedServices.includes(s.slug)
  );
  const relatedTeam = teamMembers.filter((t) =>
    industry.teamMembers.includes(t.slug)
  );

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background dark:bg-navy-deep dark:gradient-hero relative overflow-hidden">
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-emerald/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Industries
          </Link>

          <SectionHeader
            title={industry.title}
            subtitle={industry.description}
            label="Industry Expertise"
            align="left"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy-deep text-white border-y border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industry.stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="text-center md:text-left">
                  <p className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">
                    {stat.value}
                  </p>
                  <p className="text-slate-400 text-sm uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal>
            <h2 className="heading-section text-3xl md:text-4xl mb-4">
              Key Industry Challenges
            </h2>
            <p className="text-muted-foreground text-lg mb-16 max-w-3xl">
              The {industry.title.toLowerCase()} sector faces a unique set of
              challenges that require specialized expertise and proven
              approaches.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.challenges.map((challenge, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Card className="h-full border-border card-elevated">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 text-gold rounded-lg flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <p className="text-foreground font-medium leading-relaxed">
                      {challenge}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal>
            <h2 className="heading-section text-3xl md:text-4xl mb-4">
              How We Help
            </h2>
            <p className="text-muted-foreground text-lg mb-16 max-w-3xl">
              Our capabilities tailored to the {industry.title.toLowerCase()}{" "}
              sector.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedServices.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 0.1}>
                <Link
                  href={`/services/${service.slug}`}
                  className="block group h-full"
                >
                  <Card className="h-full border-border card-elevated hover:border-gold/30">
                    <CardContent className="p-8">
                      <Badge
                        variant="outline"
                        className="text-gold border-gold/30 bg-gold/5 mb-4"
                      >
                        {service.shortTitle}
                      </Badge>
                      <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-emerald transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <span className="text-gold text-sm font-semibold flex items-center group-hover:text-emerald transition-colors">
                        Learn More{" "}
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Team */}
      {relatedTeam.length > 0 && (
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <ScrollReveal>
              <h2 className="heading-section text-3xl md:text-4xl mb-4">
                Your Industry Leaders
              </h2>
              <p className="text-muted-foreground text-lg mb-16 max-w-3xl">
                Seasoned professionals with deep expertise in{" "}
                {industry.title.toLowerCase()}.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedTeam.map((member, i) => (
                <ScrollReveal key={member.slug} delay={i * 0.1}>
                  <Card className="h-full border-border card-elevated">
                    <div className="w-full aspect-square bg-secondary flex items-center justify-center">
                      <span className="text-muted-foreground font-serif italic">
                        {member.name} Photo
                      </span>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-serif text-xl font-semibold mb-1">
                        {member.name}
                      </h3>
                      <p className="text-emerald font-medium text-sm mb-3">
                        {member.title}
                      </p>
                      <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                        {member.bio}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-navy-deep text-white border-t border-border">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <ScrollReveal>
            <h2 className="heading-section text-3xl md:text-4xl mb-6 text-white">
              Let&apos;s discuss your {industry.title.toLowerCase()} challenges
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Connect with one of our industry specialists to explore how we can
              help your organization navigate complexity and capture
              opportunities.
            </p>
            <Link href="/booking">
              <CTAButton
                size="lg"
                className="h-14 px-8 text-lg bg-white text-navy hover:bg-slate-200"
              >
                Speak with a Specialist
              </CTAButton>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
