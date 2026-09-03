"use client";

import { SectionHeader } from "../shared/SectionHeader";
import { ScrollReveal } from "../shared/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { caseStudies } from "@/data/case-studies";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTAButton } from "../shared/CTAButton";

export function CaseStudyPreview() {
  const featured = caseStudies.filter(c => c.featured).slice(0, 3);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <SectionHeader 
            title="Impact In Action" 
            subtitle="Real results for ambitious organizations."
            label="Case Studies"
            align="left"
            className="mb-0"
          />
          <Link href="/case-studies">
            <CTAButton variant="outline" showArrow className="border-border">
              View All Case Studies
            </CTAButton>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((study, index) => (
            <ScrollReveal key={study.slug} delay={index * 0.15}>
              <Link href={`/case-studies/${study.slug}`} className="block group h-full">
                <Card className="h-full border-border overflow-hidden card-elevated rounded-xl">
                  {/* Image Placeholder - since we don't have real images yet */}
                  <div className="w-full h-48 bg-secondary flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <span className="text-muted-foreground font-serif italic text-lg z-0">{study.industry} Visual</span>
                    
                    <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                      <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded font-medium">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex flex-col gap-4">
                    <h3 className="font-serif text-xl font-semibold leading-tight group-hover:text-emerald transition-colors line-clamp-2">
                      {study.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {study.challenge}
                    </p>
                    
                    {/* Key Metric Highlight */}
                    {study.metrics && study.metrics.length > 0 && (
                      <div className="mt-auto pt-4 border-t border-border flex items-end justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{study.metrics[0].label}</p>
                          <p className="text-2xl font-serif font-bold text-foreground">
                            {study.metrics[0].value}{study.metrics[0].suffix}
                          </p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-emerald group-hover:text-white transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
