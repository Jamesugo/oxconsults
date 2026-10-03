import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { CTAButton } from "@/components/shared/CTAButton";
import { industries } from "@/data/industries";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Landmark, Heart, Factory, Code, Building, ShoppingBag, Zap } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries | Ox Consults",
  description: "See how we help businesses and organizations in different fields.",
};

const iconMap: Record<string, React.ElementType> = {
  Landmark, Heart, Factory, Code, Building, ShoppingBag, Zap
};

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-background dark:bg-navy-deep dark:gradient-hero relative overflow-hidden">
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-emerald/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <SectionHeader 
            title="Who We Work With"
            subtitle="We work with organizations across many fields to solve challenges and make the most of new opportunities."
            label="Industries"
          />
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = iconMap[industry.icon] || Landmark;
              
              return (
                <ScrollReveal key={industry.slug} delay={index * 0.1}>
                  <Link href={`/industries/${industry.slug}`} className="block h-full group">
                    <Card className="h-full card-elevated border-border flex flex-col hover:border-gold/30">
                      <CardHeader>
                        <div className="w-12 h-12 bg-secondary text-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-2xl font-serif">{industry.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <CardDescription className="text-base text-muted-foreground mb-6">
                          {industry.description}
                        </CardDescription>
                        
                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-gold uppercase tracking-wider">Common Challenges</p>
                          <ul className="text-sm text-muted-foreground space-y-1 pl-4 list-disc marker:text-gold/50">
                            {industry.challenges.slice(0, 3).map((c, i) => (
                              <li key={i} className="line-clamp-1">{c}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                      <div className="p-6 pt-0 mt-auto">
                        <div className="text-gold flex items-center text-sm font-semibold group-hover:text-emerald transition-colors pt-4 border-t border-border">
                          See How We Can Help <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy-deep text-white border-t border-border">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="heading-section text-3xl md:text-4xl mb-6">Need help with a challenge in your industry?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Talk with our team about what is happening in your field and how we may be able to help.
          </p>
          <Link href="/booking">
            <CTAButton size="lg" className="h-14 px-8 text-lg bg-white text-navy hover:bg-slate-200">
              Talk to Our Team
            </CTAButton>
          </Link>
        </div>
      </section>
    </>
  );
}
