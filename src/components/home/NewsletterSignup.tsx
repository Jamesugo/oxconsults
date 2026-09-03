"use client";

import { ScrollReveal } from "../shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export function NewsletterSignup() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-emerald opacity-10 dark:opacity-20 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto bg-card border border-border shadow-lg rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <div className="w-12 h-12 bg-emerald/10 text-emerald rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-2">Subscribe to our Insights</h3>
              <p className="text-muted-foreground text-sm">
                Get our latest thinking on strategy, leadership, and digital transformation delivered to your inbox monthly.
              </p>
            </div>
            
            <div className="md:w-1/2 w-full">
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <Input 
                  type="email" 
                  placeholder="Your business email" 
                  className="h-12 flex-1 border-muted-foreground/20"
                  required
                />
                <Button type="submit" className="h-12 px-8 bg-emerald hover:bg-emerald-dark text-white">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-3 text-center md:text-left">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
