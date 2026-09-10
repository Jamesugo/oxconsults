"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Insights", href: "/insights" },
  ];

  const visibleLinks = navLinks.filter((link) => link.href !== pathname);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-border shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-emerald rounded flex items-center justify-center text-white font-bold text-xl group-hover:bg-emerald-dark transition-colors">
            O
          </div>
          <span className={cn(
            "font-serif font-bold text-xl tracking-tight transition-colors",
            scrolled ? "text-foreground" : "text-foreground dark:text-white"
          )}>
            Ox Consults
          </span>
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
        <div className="md:hidden flex items-center gap-2">
          <div className={cn(
            "transition-opacity",
            !scrolled && "opacity-80 hover:opacity-100 dark:text-white"
          )}>
            <ThemeToggle />
          </div>
          <Sheet>
            <SheetTrigger render={
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(!scrolled && "text-foreground hover:bg-secondary dark:text-white dark:hover:bg-white/10 dark:hover:text-white")} 
              />
            }>
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {visibleLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium py-2 border-b border-border"
                  >
                    {link.name}
                  </Link>
                ))}
                {pathname !== "/contact" && (
                  <Link href="/contact" className="text-lg font-medium py-2 border-b border-border">
                    Contact
                  </Link>
                )}
                {pathname !== "/booking" && (
                  <div className="mt-4">
                    <Link href="/booking">
                      <CTAButton className="w-full">Book Consultation</CTAButton>
                    </Link>
                  </div>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
