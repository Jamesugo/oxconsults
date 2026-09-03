"use client";

import { AnimatedCounter } from "../shared/AnimatedCounter";
import { ScrollReveal } from "../shared/ScrollReveal";

const stats = [
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 12, suffix: "", label: "Industries" },
  { value: 30, suffix: "+", label: "Countries" },
];

export function StatCounters() {
  return (
    <section className="py-24 section-alternate relative border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="text-center flex flex-col items-center justify-center space-y-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2500} />
                </div>
                <div className="w-12 h-1 bg-gold rounded-full my-2" />
                <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
