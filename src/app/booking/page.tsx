"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/data/services";
import { Calendar, CheckCircle2, Building, User, Mail, MessageSquare } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    service_id: "",
    engagement_type: "Project Engagement",
    first_name: "",
    last_name: "",
    email: "",
    company: "",
    message: ""
  });

  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      
      try {
        const { error } = await supabase.from('bookings').insert([{
          service_id: formData.service_id,
          engagement_type: formData.engagement_type,
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          company: formData.company,
          message: formData.message
        }]);
        
        if (error) throw error;
        setIsSuccess(true);
      } catch (error) {
        console.error("Error submitting booking:", error);
        alert("There was an error submitting your request. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <section className="pt-32 pb-16 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionHeader 
            title="Book a Consultation" 
            subtitle="Take the first step toward transforming your organization. Schedule a confidential discovery session with a partner."
            label="Get Started"
          />
        </div>
      </section>

      <section className="py-16 bg-secondary/30 min-h-[600px]">
        <div className="container mx-auto px-6 max-w-3xl">
          <ScrollReveal>
            {isSuccess ? (
              <Card className="border-border shadow-xl p-12 text-center card-elevated animate-fade-in-up">
                <div className="w-20 h-20 bg-emerald/10 text-emerald rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-3xl font-bold mb-4">Request Received</h3>
                <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                  Thank you for reaching out. A partner from our team will contact you within 24 hours to schedule your session.
                </p>
                <Button 
                  onClick={() => window.location.href = '/'}
                  variant="outline" 
                  className="h-12 px-8"
                >
                  Return to Home
                </Button>
              </Card>
            ) : (
              <Card className="border-border shadow-xl card-elevated overflow-hidden">
                {/* Progress Bar */}
                <div className="w-full h-1 bg-secondary">
                  <div 
                    className="h-full bg-emerald transition-all duration-500 ease-out"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>
                
                <CardContent className="p-8 md:p-12">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="font-serif text-2xl font-semibold">
                      {step === 1 && "What can we help you with?"}
                      {step === 2 && "About your organization"}
                      {step === 3 && "Additional details"}
                    </h3>
                    <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      Step {step} of 3
                    </span>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {step === 1 && (
                      <div className="space-y-6 animate-fade-in-up">
                        <div className="space-y-3">
                          <Label htmlFor="service">Primary Area of Interest</Label>
                          <Select required onValueChange={(v: string | null) => v && setFormData({...formData, service_id: v})}>
                            <SelectTrigger id="service" className="h-14 text-base">
                              <SelectValue placeholder="Select a practice area" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map(s => (
                                <SelectItem key={s.slug} value={s.slug}>{s.title}</SelectItem>
                              ))}
                              <SelectItem value="other">Other / Not Sure</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="engagement">Preferred Engagement Type</Label>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {['Advisory Session', 'Project Engagement', 'Retainer Partnership'].map((type, i) => (
                              <label key={i} className="cursor-pointer">
                                <input 
                                  type="radio" 
                                  name="engagement" 
                                  className="peer sr-only" 
                                  checked={formData.engagement_type === type}
                                  onChange={() => setFormData({...formData, engagement_type: type})}
                                />
                                <div className="border border-border rounded-lg p-4 text-center hover:bg-secondary transition-colors peer-checked:border-emerald peer-checked:bg-emerald/5 peer-checked:text-emerald font-medium">
                                  {type}
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-6 animate-fade-in-up">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <Label htmlFor="firstName">First Name</Label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                              <Input 
                                id="firstName" 
                                required 
                                className="pl-10 h-12" 
                                placeholder="Jane" 
                                value={formData.first_name}
                                onChange={(e) => setFormData({...formData, first_name: e.target.value})}
                              />
                            </div>
                          </div>
                          <div className="space-y-3">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input 
                              id="lastName" 
                              required 
                              className="h-12" 
                              placeholder="Doe"
                              value={formData.last_name}
                              onChange={(e) => setFormData({...formData, last_name: e.target.value})} 
                            />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="email">Work Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input 
                              id="email" 
                              type="email" 
                              required 
                              className="pl-10 h-12" 
                              placeholder="jane@company.com" 
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="company">Company Name</Label>
                          <div className="relative">
                            <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input 
                              id="company" 
                              required 
                              className="pl-10 h-12" 
                              placeholder="Acme Corp" 
                              value={formData.company}
                              onChange={(e) => setFormData({...formData, company: e.target.value})}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-6 animate-fade-in-up">
                        <div className="space-y-3">
                          <Label htmlFor="message">Briefly describe your challenge (Optional)</Label>
                          <Textarea 
                            id="message" 
                            className="min-h-[150px] resize-none" 
                            placeholder="What are the main objectives you are trying to achieve?" 
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                          />
                        </div>

                        <div className="bg-secondary/50 p-4 rounded-lg flex gap-4 text-sm text-muted-foreground items-start">
                          <Calendar className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                          <p>
                            Upon submission, you will receive an email with a calendar link to select a convenient time for our initial 30-minute discovery call with a Partner. All information shared is kept strictly confidential.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="mt-10 flex justify-between pt-6 border-t border-border">
                      {step > 1 ? (
                        <Button type="button" variant="ghost" onClick={() => setStep(step - 1)}>
                          Back
                        </Button>
                      ) : (
                        <div></div> // Spacer
                      )}
                      
                      <Button 
                        type="submit" 
                        className="bg-emerald hover:bg-emerald-dark text-white px-8 h-12"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Processing...
                          </span>
                        ) : step === 3 ? (
                          "Submit Request"
                        ) : (
                          "Continue"
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
