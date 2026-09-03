"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { insights } from "@/data/insights";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const categories = ["All", ...Array.from(new Set(insights.map(i => i.category)))];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInsights = insights.filter(insight => {
    const matchesCategory = activeCategory === "All" || insight.category === activeCategory;
    const matchesSearch = insight.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section className="pt-32 pb-16 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <SectionHeader 
              title="Latest Perspectives" 
              subtitle="Our latest thinking on the issues that matter most in business, leadership, and technology."
              label="Insights"
              align="left"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary/30 border-b border-border sticky top-[80px] z-40 backdrop-blur-md">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Categories */}
          <div className="flex flex-wrap gap-6 text-sm font-medium">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`pb-2 border-b-2 transition-colors ${
                  activeCategory === category 
                    ? "border-emerald text-emerald" 
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Search */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-10 bg-background border-border"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-background min-h-[60vh]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.map((insight, index) => (
              <ScrollReveal key={insight.slug} delay={index * 0.1}>
                <Link href={`/insights/${insight.slug}`} className="block group h-full">
                  <Card className="h-full border-border overflow-hidden card-elevated flex flex-col">
                    <div className="w-full h-48 bg-secondary flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                      <span className="text-muted-foreground font-serif italic text-lg">{insight.category} Insight</span>
                    </div>
                    
                    <CardHeader className="pt-6 pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-gold border-gold/30 bg-gold/5">
                          {insight.category}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground gap-3">
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(insight.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                      </div>
                      <h3 className="font-serif text-xl font-semibold leading-tight group-hover:text-emerald transition-colors line-clamp-2">
                        {insight.title}
                      </h3>
                    </CardHeader>
                    
                    <CardContent className="pb-4 flex-1">
                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {insight.excerpt}
                      </p>
                    </CardContent>
                    
                    <CardFooter className="pt-0 border-t border-border mt-4 pt-4 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {insight.readTime}
                      </span>
                      <span className="text-gold text-sm font-semibold flex items-center group-hover:text-emerald transition-colors">
                        Read Article <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardFooter>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          
          {filteredInsights.length === 0 && (
            <div className="text-center py-24 text-muted-foreground">
              No insights found matching your criteria.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
