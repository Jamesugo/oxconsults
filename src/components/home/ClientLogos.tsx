"use client";

import Image from "next/image";

export function ClientLogos() {
  // We'll use placeholders for now, these would typically be SVGs
  const logos = Array.from({ length: 8 }, (_, i) => `Company ${i + 1}`);

  return (
    <div className="py-12 bg-background border-b border-border overflow-hidden">
      <div className="container mx-auto px-6 mb-6">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Trusted by leading global organizations
        </p>
      </div>
      
      <div className="relative w-full flex overflow-x-hidden">
        {/* Transparent gradients for smooth fade effect at edges */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="marquee-track flex whitespace-nowrap items-center gap-16 py-4 px-8">
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center w-40 h-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <span className="font-serif font-bold text-xl text-foreground">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
