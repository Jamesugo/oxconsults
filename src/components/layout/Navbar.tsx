"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  BriefcaseBusiness,
  ChartNoAxesCombined,
  ChevronRight,
  Factory,
  Menu,
  MessageCircle,
  Newspaper,
  UsersRound,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../shared/ThemeToggle";
import { CTAButton } from "../shared/CTAButton";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about", icon: UsersRound },
    { name: "Services", href: "/services", icon: BriefcaseBusiness },
    { name: "Industries", href: "/industries", icon: Factory },
    { name: "Case Studies", href: "/case-studies", icon: ChartNoAxesCombined },
    { name: "Insights", href: "/insights", icon: Newspaper },
  ];

  const visibleLinks = navLinks.filter((link) => link.href !== pathname);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm py-2 md:py-3"
          : "bg-transparent py-3 md:py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="flex shrink-0 items-center gap-2 group">
          <Image
            src="/ox-consults-logo.svg"
            alt="Ox Consults"
            width={60}
            height={48}
            className="h-12 w-[60px] object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {visibleLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled 
                  ? "text-muted-foreground hover:text-foreground" 
                  : "text-foreground hover:text-foreground/80 dark:text-white/80 dark:hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className={cn(
            "transition-opacity",
            !scrolled && "opacity-80 hover:opacity-100 dark:text-white"
          )}>
            <ThemeToggle />
          </div>
          {pathname !== "/contact" && (
            <Link href="/contact">
              <Button 
                variant="ghost" 
                className={cn(
                  "font-medium transition-colors",
                  !scrolled && "text-foreground hover:bg-secondary dark:text-white/80 dark:hover:text-white dark:hover:bg-white/10"
                )}
              >
                Contact
              </Button>
            </Link>
          )}
          {pathname !== "/booking" && (
            <Link href="/booking">
              <CTAButton>Book Consultation</CTAButton>
            </Link>
          )}
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-1">
          <div className={cn(
            "transition-opacity",
            !scrolled && "opacity-80 hover:opacity-100 dark:text-white"
          )}>
            <ThemeToggle className="size-10" />
          </div>
          <Sheet>
            <SheetTrigger render={
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label="Open navigation menu"
                className={cn("size-10", !scrolled && "text-foreground hover:bg-secondary dark:text-white dark:hover:bg-white/10 dark:hover:text-white")} 
              />
            }>
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] px-5 pt-8 pb-6">
              <div className="flex items-center gap-3 border-b border-border pb-5 pr-10">
                <Image
                  src="/ox-consults-logo.svg"
                  alt="Ox Consults"
                  width={72}
                  height={58}
                  className="h-[58px] w-[72px] object-contain"
                />
              </div>
              <nav className="mt-6 flex flex-col gap-1">
                {visibleLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="group flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-secondary"
                  >
                    <link.icon aria-hidden="true" className="h-5 w-5 text-muted-foreground" />
                    <span className="flex-1">{link.name}</span>
                    <ChevronRight aria-hidden="true" className="h-4 w-4 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                ))}
                {pathname !== "/contact" && (
                  <Link
                    href="/contact"
                    className="group flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-secondary"
                  >
                    <MessageCircle aria-hidden="true" className="h-5 w-5 text-muted-foreground" />
                    <span className="flex-1">Contact</span>
                    <ChevronRight aria-hidden="true" className="h-4 w-4 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                )}
              </nav>
              {pathname !== "/booking" && (
                <div className="mt-auto border-t border-border pt-5">
                  <Link href="/booking">
                    <CTAButton className="w-full">Book Consultation</CTAButton>
                  </Link>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
