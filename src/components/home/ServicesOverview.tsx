"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp, Settings, Cpu, DollarSign, Users, Globe, GitMerge, Award } from "lucide-react";
import { SectionHeader } from "../shared/SectionHeader";
import { ScrollReveal } from "../shared/ScrollReveal";
import { services } from "@/data/services";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Map string icon names to actual Lucide components
const iconMap: Record<string, React.ElementType> = {
  TrendingUp, Settings, Cpu, DollarSign, Users, Globe, GitMerge, Award
};

export function ServicesOverview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Our Expertise" 
          subtitle="Comprehensive advisory solutions across the entire business lifecycle."
          label="Practice Areas"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || TrendingUp;
            
            return (
              <ScrollReveal key={service.slug} delay={index * 0.1} className="h-full">
                <Link href={`/services/${service.slug}`} className="block h-full group">
                  <Card className="h-full card-elevated border-border flex flex-col">
                    <CardHeader>
                      <div className={cn(
                        "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors",
                        "bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                      )}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl font-serif leading-tight">
                        {service.shortTitle}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <CardDescription className="text-sm line-clamp-3">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <div className="text-gold flex items-center text-sm font-semibold group-hover:text-emerald transition-colors">
                        Explore <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
