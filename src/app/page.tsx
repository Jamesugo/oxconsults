import { HeroSection } from "@/components/home/HeroSection";
import { ClientLogos } from "@/components/home/ClientLogos";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ApproachSection } from "@/components/home/ApproachSection";
import { CaseStudyPreview } from "@/components/home/CaseStudyPreview";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { NewsletterSignup } from "@/components/home/NewsletterSignup";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientLogos />
      <ServicesOverview />
      <ApproachSection />
      <CaseStudyPreview />
      <TestimonialCarousel />
      <InsightsPreview />
      <NewsletterSignup />
    </>
  );
}
