import { notFound } from "next/navigation";
import { insights } from "@/data/insights";
import { teamMembers } from "@/data/team";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { CTAButton } from "@/components/shared/CTAButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, UserCircle } from "lucide-react";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) return { title: "Article Not Found | Ox Consults" };
  return {
    title: `${insight.title} | Ox Consults Insights`,
    description: insight.excerpt,
  };
}

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);

  if (!insight) notFound();

  const author = teamMembers.find((t) => t.slug === insight.authorSlug);
  const relatedInsights = insights
    .filter((i) => i.slug !== slug && (i.category === insight.category || i.tags.some((t) => insight.tags.includes(t))))
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background border-b border-border relative overflow-hidden">
        <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge variant="outline" className="text-gold border-gold/30 bg-gold/5">
              {insight.category}
            </Badge>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(insight.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              {insight.readTime}
            </span>
          </div>

          <h1 className="heading-section text-3xl md:text-4xl lg:text-5xl mb-8">
            {insight.title}
          </h1>

          <p className="text-muted-foreground text-xl leading-relaxed">
            {insight.excerpt}
          </p>
        </div>
      </section>

      {/* Author Bar */}
      {author && (
        <section className="py-6 bg-secondary/30 border-b border-border">
          <div className="container mx-auto px-6 max-w-4xl flex items-center gap-4">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
              <UserCircle className="w-6 h-6 text-muted-foreground" />
            </div>
            <div>
              <p className="font-semibold text-sm">{author.name}</p>
              <p className="text-muted-foreground text-xs">{author.title}</p>
            </div>
          </div>
        </section>
      )}

      {/* Article Body */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal>
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  {insight.excerpt} This perspective draws on our extensive
                  experience working with leading organizations across
                  industries to identify the trends and strategies that matter
                  most.
                </p>

                <h2 className="heading-section text-2xl md:text-3xl !text-foreground mt-12 mb-6">
                  The Landscape
                </h2>
                <p>
                  The forces shaping the {insight.category.toLowerCase()} space
                  today are unlike anything we have seen in recent decades. From
                  rapid technological advancement to shifting regulatory
                  frameworks and evolving stakeholder expectations,
                  organizations must navigate an increasingly complex
                  environment.
                </p>
                <p>
                  Our research and client work reveal a consistent pattern:
                  organizations that take a proactive, structured approach to
                  these challenges consistently outperform their peers. The
                  difference lies not just in strategy, but in the speed and
                  quality of execution.
                </p>

                <h2 className="heading-section text-2xl md:text-3xl !text-foreground mt-12 mb-6">
                  Key Insights
                </h2>
                <p>
                  Through our work with C-suite leaders and board directors, we
                  have identified several critical themes that are reshaping how
                  successful organizations operate:
                </p>
                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald mt-2.5 shrink-0" />
                    <span>
                      <strong className="text-foreground">
                        Adaptability as a core competency:
                      </strong>{" "}
                      The ability to sense, respond, and pivot quickly has become
                      a fundamental organizational capability, not just a nice
                      to have.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald mt-2.5 shrink-0" />
                    <span>
                      <strong className="text-foreground">
                        Data-driven decision making:
                      </strong>{" "}
                      Leaders who invest in analytical capabilities and
                      data infrastructure are making better decisions faster—and
                      seeing measurable impact on performance.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald mt-2.5 shrink-0" />
                    <span>
                      <strong className="text-foreground">
                        Talent as a strategic lever:
                      </strong>{" "}
                      The organizations winning the talent war are those that
                      treat their people strategy with the same rigor they apply
                      to financial and operational strategy.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald mt-2.5 shrink-0" />
                    <span>
                      <strong className="text-foreground">
                        Stakeholder value over shareholder value:
                      </strong>{" "}
                      A broader view of value creation—encompassing employees,
                      customers, communities, and the environment—is proving to
                      be a source of durable competitive advantage.
                    </span>
                  </li>
                </ul>

                <h2 className="heading-section text-2xl md:text-3xl !text-foreground mt-12 mb-6">
                  Implications for Leaders
                </h2>
                <p>
                  For executives navigating this landscape, the imperative is
                  clear: invest in understanding these dynamics deeply, build
                  organizational capabilities to respond, and act with both
                  urgency and discipline. The window for competitive advantage is
                  narrowing, and the cost of inaction is rising.
                </p>
                <p>
                  At Ox Consults, we help leadership teams translate these
                  insights into actionable strategies that drive measurable
                  results. Our approach combines analytical rigor with
                  operational pragmatism—ensuring that great strategy does not
                  remain on the shelf.
                </p>
              </div>
            </article>
          </ScrollReveal>

          {/* Tags */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-muted-foreground" />
              {insight.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-muted-foreground border-border"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Insights */}
      {relatedInsights.length > 0 && (
        <section className="py-24 bg-secondary/30 border-t border-border">
          <div className="container mx-auto px-6 max-w-5xl">
            <ScrollReveal>
              <h2 className="heading-section text-3xl md:text-4xl mb-12">
                Related Insights
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedInsights.map((related, i) => (
                <ScrollReveal key={related.slug} delay={i * 0.1}>
                  <Link
                    href={`/insights/${related.slug}`}
                    className="block group h-full"
                  >
                    <Card className="h-full border-border card-elevated">
                      <div className="w-full h-40 bg-secondary flex items-center justify-center">
                        <span className="text-muted-foreground font-serif italic text-sm">
                          {related.category} Insight
                        </span>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge
                            variant="outline"
                            className="text-gold border-gold/30 bg-gold/5 text-xs"
                          >
                            {related.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {related.readTime}
                          </span>
                        </div>
                        <h3 className="font-serif text-lg font-semibold group-hover:text-emerald transition-colors line-clamp-2">
                          {related.title}
                        </h3>
                      </CardContent>
                    </Card>
                  </Link>
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
              Want to discuss these ideas further?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Our team is ready to explore how these insights apply to your
              organization&apos;s specific context and challenges.
            </p>
            <Link href="/booking">
              <CTAButton
                size="lg"
                className="h-14 px-8 text-lg bg-white text-navy hover:bg-slate-200"
              >
                Schedule a Conversation
              </CTAButton>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
