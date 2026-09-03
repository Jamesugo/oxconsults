"use client";

import Link from "next/link";
import { ScrollReveal } from "../shared/ScrollReveal";
import { CTAButton } from "../shared/CTAButton";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background dark:bg-navy-deep dark:gradient-hero grid-pattern">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-emerald/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal delay={0.2} duration={0.8}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary dark:bg-white/5 border border-border dark:border-white/10 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse-soft" />
              <span className="text-sm font-medium text-muted-foreground dark:text-slate-300">Global Strategy & Advisory Firm</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4} duration={0.8}>
            <h1 className="heading-display text-5xl md:text-7xl lg:text-8xl text-foreground dark:text-white mb-8">
              Strategy That Moves{" "}
              <span className="gradient-text-gold italic">Business Forward</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.6} duration={0.8}>
            <p className="text-xl md:text-2xl text-muted-foreground dark:text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              We partner with ambitious organizations to solve complex problems, unlock growth, and execute with confidence.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.8} duration={0.8}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/booking">
                <CTAButton size="lg" className="h-14 px-8 text-lg w-full sm:w-auto">
                  Book a Consultation
                </CTAButton>
              </Link>
              <Link href="/services">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-14 px-8 text-lg w-full sm:w-auto border-border text-foreground hover:bg-secondary dark:border-white/20 dark:text-white dark:hover:bg-white/10 dark:hover:text-white glass"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
