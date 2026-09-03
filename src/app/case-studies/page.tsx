"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { caseStudies } from "@/data/case-studies";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const allIndustries = Array.from(new Set(caseStudies.map(c => c.industry)));

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredStudies = activeFilter === "All" 
    ? caseStudies 
    : caseStudies.filter(c => c.industry === activeFilter);

  return (
    <>
      <section className="pt-32 pb-16 bg-background dark:bg-navy-deep dark:gradient-hero relative overflow-hidden">
        <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <SectionHeader 
            title="Impact In Action" 
            subtitle="Explore how we partner with ambitious organizations to solve complex problems and drive measurable results."
            label="Case Studies"
          />
        </div>
      </section>

      <section className="py-12 border-b border-border bg-secondary/30">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground font-medium shrink-0">
            <Filter className="w-4 h-4" />
            <span>Filter by Industry:</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={activeFilter === "All" ? "default" : "outline"}
              onClick={() => setActiveFilter("All")}
              className={activeFilter === "All" ? "bg-emerald text-white" : "bg-transparent"}
              size="sm"
            >
              All
            </Button>
            {allIndustries.map(industry => (
              <Button 
                key={industry}
                variant={activeFilter === industry ? "default" : "outline"}
                onClick={() => setActiveFilter(industry)}
                className={activeFilter === industry ? "bg-emerald text-white" : "bg-transparent"}
                size="sm"
              >
                {industry}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background min-h-[60vh]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study, index) => (
              <ScrollReveal key={study.slug} delay={index * 0.1}>
                <Link href={`/case-studies/${study.slug}`} className="block group h-full">
                  <Card className="h-full border-border overflow-hidden card-elevated rounded-xl flex flex-col">
                    <div className="w-full h-48 bg-secondary flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                      <span className="text-muted-foreground font-serif italic text-lg z-0">{study.industry} Visual</span>
                      
                      <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                        <Badge className="bg-primary text-primary-foreground hover:bg-primary font-medium border-none">
                          {study.industry}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6 flex flex-col gap-4 flex-1">
                      <h3 className="font-serif text-xl font-semibold leading-tight group-hover:text-emerald transition-colors">
                        {study.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-2">
                        {study.challenge}
                      </p>
                      
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
          
          {filteredStudies.length === 0 && (
            <div className="text-center py-24 text-muted-foreground">
              No case studies found for the selected industry.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
