"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { CTAButton } from "@/components/shared/CTAButton";

const offices = [
  {
    city: "Enugu Office",
    address: "12 Omachiani street Idaw-river layout,Enugu State, Nigeria",
    phone: "+234 8160990533",
    email: "oxconsultsinfo@gmail.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM WAT"
  }
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <>
      <section className="pt-32 pb-16 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <SectionHeader 
            title="Get in Touch" 
            subtitle="Whether you have a specific project in mind or want to explore how we can help your organization, we're ready to listen."
            label="Contact Us"
          />
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <ScrollReveal direction="right">
              <div className="bg-secondary/30 rounded-2xl p-8 md:p-12 border border-border">
                <h2 className="font-serif text-2xl font-bold mb-6">Send us a message</h2>
                
                {isSuccess ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 bg-emerald/10 text-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold mb-2">Message Sent</h3>
                    <p className="text-muted-foreground mb-6">Thank you for contacting us. We will get back to you shortly.</p>
                    <Button onClick={() => setIsSuccess(false)} variant="outline">Send another message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="inquiryType">Type of Inquiry</Label>
                      <Select required defaultValue="general">
                        <SelectTrigger className="h-12 bg-background">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="new_business">New Business / Partnership</SelectItem>
                          <SelectItem value="media">Media & Press</SelectItem>
                          <SelectItem value="careers">Careers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" required className="h-12 bg-background" placeholder="Jane Doe" />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" required className="h-12 bg-background" placeholder="jane@company.com" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" required className="h-12 bg-background" placeholder="How can we help?" />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        required 
                        className="min-h-[150px] resize-none bg-background" 
                        placeholder="Please provide details about your inquiry..."
                      />
                    </div>

                    <CTAButton 
                      type="submit" 
                      className="w-full h-12 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </CTAButton>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Offices & Direct Contact */}
            <ScrollReveal direction="left">
              <div className="space-y-12">
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-8">Our Office</h2>
                  <div className="grid gap-8">
                    {offices.map((office, idx) => (
                      <Card key={idx} className="border-border bg-transparent shadow-none hover:bg-secondary/20 transition-colors">
                        <CardContent className="p-6">
                          <h3 className="font-serif text-xl font-semibold mb-4 text-gold">{office.city}</h3>
                          <div className="space-y-3 text-sm text-muted-foreground">
                            <div className="flex items-start gap-3">
                              <MapPin className="w-5 h-5 text-emerald shrink-0" />
                              <span>{office.address}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Phone className="w-5 h-5 text-emerald shrink-0" />
                              <a href={`tel:${office.phone}`} className="hover:text-foreground transition-colors">{office.phone}</a>
                            </div>
                            <div className="flex items-center gap-3">
                              <Mail className="w-5 h-5 text-emerald shrink-0" />
                              <a href={`mailto:${office.email}`} className="hover:text-foreground transition-colors">{office.email}</a>
                            </div>
                            <div className="flex items-center gap-3">
                              <Clock className="w-5 h-5 text-emerald shrink-0" />
                              <span>{office.hours}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </>
  );
}
