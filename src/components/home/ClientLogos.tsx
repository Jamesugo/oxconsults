"use client";

import Image from "next/image";

export function ClientLogos() {
  const companyImages = [
    { src: "/company-1.jpeg", alt: "Ox Consults company image 1" },
    { src: "/company-2.jpeg", alt: "Ox Consults company image 2" },
    { src: "/company-3.jpeg", alt: "Ox Consults company image 3" },
  ];

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
          {[...companyImages, ...companyImages].map((image, index) => (
            <div 
              key={index} 
              className="relative flex items-center justify-center w-56 h-32 overflow-hidden rounded-lg grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="224px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
