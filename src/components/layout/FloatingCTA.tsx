"use client";

import { MessageSquare } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CTAButton } from "../shared/CTAButton";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
      <Link href="/booking">
        <CTAButton className="rounded-full shadow-lg h-14 px-6">
          <MessageSquare className="w-5 h-5 mr-2" />
          Book a Consultation
        </CTAButton>
      </Link>
    </div>
  );
}
