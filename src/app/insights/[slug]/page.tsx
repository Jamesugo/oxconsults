import { notFound } from "next/navigation";
import Image from "next/image";
import { insights } from "@/data/insights";
import { teamMembers } from "@/data/team";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { CTAButton } from "@/components/shared/CTAButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, UserCircle } from "lucide-react";
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
            <ArrowLeft className="w-4 h-4" /> All Articles
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
                  {insight.excerpt} In this article, we share ideas from our
                  work with businesses and organizations.
                </p>

                <h2 className="heading-section text-2xl md:text-3xl !text-foreground mt-12 mb-6">
                  What Is Changing
                </h2>
                <p>
                  Businesses face changes in technology, rules, and what
                  customers expect. Understanding these changes can help teams
                  make better choices and prepare for what comes next.
                </p>
                <p>
                  Businesses are more likely to make progress when they spot
                  problems early, agree on what to do, and follow through. A
                  plan only works when people can put it into practice.
                </p>

                <h2 className="heading-section text-2xl md:text-3xl !text-foreground mt-12 mb-6">
                  What Businesses Can Do
                </h2>
                <p>
                  A few simple habits can help teams respond to change and keep
                  moving forward:
                </p>
                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald mt-2.5 shrink-0" />
                    <span>
                      <strong className="text-foreground">
                        Be ready to adjust:
                      </strong>{" "}
                      Pay attention to what is changing and be willing to update
                      your plans when needed.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald mt-2.5 shrink-0" />
                    <span>
                      <strong className="text-foreground">
                        Use useful information:
                      </strong>{" "}
                      Check the facts and listen to customers and staff before
                      making important decisions.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald mt-2.5 shrink-0" />
                    <span>
                      <strong className="text-foreground">
                        Support your people:
                      </strong>{" "}
                      Give people the skills, tools, and guidance they need to
                      do their jobs well.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald mt-2.5 shrink-0" />
                    <span>
                      <strong className="text-foreground">
                        Think about everyone affected:
                      </strong>{" "}
                      Consider how decisions affect customers, staff, local
                      communities, and the environment.
                    </span>
                  </li>
                </ul>

                <h2 className="heading-section text-2xl md:text-3xl !text-foreground mt-12 mb-6">
                  A Useful Next Step
                </h2>
                <p>
                  Start by choosing one problem you can work on now. Talk with
                  the people affected, agree on a first step, and check whether
                  it is making things better.
                </p>
                <p>
                  At Ox Consults, we help teams understand their challenges,
                  make a practical plan, and put it into action.
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
                More Articles
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedInsights.map((related, i) => (
                <ScrollReveal key={related.slug} delay={i * 0.1}>
                  <Link
                    href={`/insights/${related.slug}`}
                    className="block group h-full"
                  >
                    <Card className="h-full border-border card-elevated overflow-hidden">
                      <div className="w-full h-40 bg-secondary relative overflow-hidden">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
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
              Want help putting these ideas into practice?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Tell us what your business is working on, and we can talk about
              how we may be able to help.
            </p>
            <Link href="/booking">
              <CTAButton
                size="lg"
                className="h-14 px-8 text-lg bg-white text-navy hover:bg-slate-200"
              >
                Book a Call
              </CTAButton>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
