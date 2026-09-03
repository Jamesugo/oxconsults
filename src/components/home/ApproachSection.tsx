"use client";

import { SectionHeader } from "../shared/SectionHeader";
import { ScrollReveal } from "../shared/ScrollReveal";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Diagnostic & Discovery",
    description: "We begin with rigorous analysis, combining proprietary data with deep stakeholder interviews to uncover root causes, not just symptoms.",
  },
  {
    number: "02",
    title: "Strategic Design",
    description: "Working alongside your leadership, we co-create actionable strategies that bridge the gap between ambition and operational reality.",
  },
  {
    number: "03",
    title: "Execution Planning",
    description: "A strategy is only as good as its execution. We develop detailed roadmaps with clear accountabilities, milestones, and risk mitigation.",
  },
  {
    number: "04",
    title: "Implementation & Scaling",
    description: "We don't just hand over a deck. Our teams embed with yours to drive change, build internal capabilities, and ensure sustainable results.",
  },
];

export function ApproachSection() {
  return (
    <section className="py-24 section-alternate border-y border-border">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Our Methodology" 
          subtitle="A structured, pragmatic approach to solving complex challenges."
          label="The Ox Consults Way"
          className="mb-16"
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-border z-0">
            <div className="h-full bg-gold w-0 animate-[growWidth_2s_ease-out_forwards]" style={{ animationDelay: "0.5s" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.2}>
                <div className="flex flex-col items-center text-center">
                  <div className={cn(
                    "w-24 h-24 rounded-full flex items-center justify-center mb-6",
                    "bg-background border-[3px] border-border text-2xl font-serif font-bold text-muted-foreground",
                    "transition-colors duration-500 hover:border-gold hover:text-gold"
                  )}>
                    {step.number}
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
      
      {/* Add custom animation for the line */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes growWidth {
          from { width: 0; }
          to { width: 100%; }
        }
      `}} />
    </section>
  );
}
