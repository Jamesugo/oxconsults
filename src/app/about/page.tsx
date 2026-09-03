import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { teamMembers } from "@/data/team";
import { Card, CardContent } from "@/components/ui/card";
import { UserCircle } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Ox Consults",
  description: "Learn about our founding story, mission, and leadership team.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <SectionHeader 
            title="Clarity in Strategy. Confidence in Execution." 
            subtitle="We exist to help ambitious organizations navigate complex challenges and realize their full potential."
            label="About Ox Consults"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <div className="aspect-[4/3] bg-secondary rounded-2xl relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 grid-pattern opacity-50" />
                <span className="text-muted-foreground font-serif italic text-lg relative z-10">Our Story Visual</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left">
              <h2 className="heading-section text-3xl md:text-4xl mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Ox Consults was founded on a simple premise: traditional consulting models were broken. They either offered high-level strategy that failed in execution, or operational implementation lacking strategic vision.
                </p>
                <p>
                  We built a firm that bridges that gap. Our team combines the rigorous analytical frameworks of top-tier strategy houses with the pragmatic, roll-up-your-sleeves execution capabilities required to actually drive change.
                </p>
                <p>
                  Today, we partner with C-suite executives, founders, and government leaders across the globe, providing the clarity and confidence they need to move their organizations forward.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-navy-deep text-white">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Our Values" 
            label="What Drives Us"
            light
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Intellectual Honesty", desc: "We tell our clients what they need to hear, not what they want to hear. We follow the data, even when it challenges assumptions." },
              { title: "Pragmatic Impact", desc: "We don't believe in strategy for strategy's sake. Every recommendation we make is grounded in operational reality and executable action." },
              { title: "Enduring Partnership", desc: "We invest in long-term relationships over short-term transactions. Our success is measured solely by our clients' success." }
            ].map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.2}>
                <div className="border-t border-white/20 pt-6">
                  <h3 className="font-serif text-2xl font-bold mb-4 text-gold">{value.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Leadership Team" 
            subtitle="A diverse team of seasoned experts dedicated to your success."
            label="Our People"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={member.slug} delay={index * 0.1}>
                <Card className="h-full border-border overflow-hidden card-elevated group border-transparent bg-transparent shadow-none hover:bg-card">
                  <div className="w-full aspect-square bg-secondary relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <a href={member.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-navy transition-colors">
                        <UserCircle className="w-5 h-5" />
                      </a>
                    </div>
                    {/* Placeholder for Photo */}
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-serif italic">
                      {member.name} Photo
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-serif text-2xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-emerald font-medium text-sm mb-4">{member.title}</p>
                    <p className="text-muted-foreground text-sm line-clamp-4 leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
