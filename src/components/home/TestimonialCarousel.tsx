"use client";

import { useState, useEffect } from "react";
import { SectionHeader } from "../shared/SectionHeader";
import { ScrollReveal } from "../shared/ScrollReveal";
import { testimonials } from "@/data/testimonials";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-navy-deep text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Client Perspectives" 
          label="Testimonials"
          light
          className="mb-16"
        />

        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={0.2}>
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
              <Quote className="w-12 h-12 text-gold/40 absolute top-8 left-8" />
              
              <div className="relative z-10 pt-8">
                <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8 text-slate-200 italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-lg text-white">{testimonials[currentIndex].author}</h4>
                    <p className="text-sm text-slate-400">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={prev}
                      className="border-white/20 bg-transparent text-white hover:bg-white/10"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={next}
                      className="border-white/20 bg-transparent text-white hover:bg-white/10"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    i === currentIndex ? "w-6 bg-gold" : "bg-white/20 hover:bg-white/40"
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
