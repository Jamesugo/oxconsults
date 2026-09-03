"use client";

import { SectionHeader } from "../shared/SectionHeader";
import { ScrollReveal } from "../shared/ScrollReveal";
import { insights } from "@/data/insights";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CTAButton } from "../shared/CTAButton";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export function InsightsPreview() {
  const featured = insights.filter(i => i.featured).slice(0, 3);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <SectionHeader 
            title="Latest Perspectives" 
            subtitle="Thought leadership on the issues shaping tomorrow."
            label="Insights"
            align="left"
            className="mb-0"
          />
          <Link href="/insights">
            <CTAButton variant="outline" showArrow className="border-border">
              View All Insights
            </CTAButton>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((insight, index) => (
            <ScrollReveal key={insight.slug} delay={index * 0.15}>
              <Link href={`/insights/${insight.slug}`} className="block group h-full">
                <Card className="h-full border-border overflow-hidden card-elevated flex flex-col">
                  {/* Image Placeholder */}
                  <div className="w-full h-48 bg-secondary flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <span className="text-muted-foreground font-serif italic text-lg">{insight.category} Insight</span>
                  </div>
                  
                  <CardHeader className="pt-6 pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-gold border-gold/30 bg-gold/5">
                        {insight.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground gap-3">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(insight.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                    </div>
                    <h3 className="font-serif text-xl font-semibold leading-tight group-hover:text-emerald transition-colors line-clamp-2">
                      {insight.title}
                    </h3>
                  </CardHeader>
                  
                  <CardContent className="pb-4 flex-1">
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {insight.excerpt}
                    </p>
                  </CardContent>
                  
                  <CardFooter className="pt-0 border-t border-border mt-4 pt-4 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {insight.readTime}
                    </span>
                    <span className="text-gold text-sm font-semibold flex items-center group-hover:text-emerald transition-colors">
                      Read Article <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
