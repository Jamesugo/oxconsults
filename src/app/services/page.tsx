import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { CTAButton } from "@/components/shared/CTAButton";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Ox Consults",
  description: "Comprehensive advisory solutions across the entire business lifecycle.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-background dark:bg-navy-deep dark:gradient-hero relative overflow-hidden">
        <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <SectionHeader 
            title="Our Services" 
            subtitle="We bring deep domain expertise, analytical rigor, and execution capability to your most critical challenges."
            label="Practice Areas"
          />
        </div>
      </section>

      {/* Reusing the home page component, but it can be customized later */}
      <ServicesOverview />

      <section className="py-24 section-alternate border-t border-border">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="heading-section text-3xl md:text-4xl mb-6">Not sure where to start?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Let's discuss your current challenges and explore how we can help you achieve your strategic objectives.
          </p>
          <Link href="/booking">
            <CTAButton size="lg" className="h-14 px-8 text-lg">
              Schedule a Discovery Call
            </CTAButton>
          </Link>
        </div>
      </section>
    </>
  );
}
