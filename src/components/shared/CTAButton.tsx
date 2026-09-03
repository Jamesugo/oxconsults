import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import React from "react";

interface CTAButtonProps extends React.ComponentProps<typeof Button> {
  showArrow?: boolean;
}

export function CTAButton({ children, showArrow = false, className, variant = "default", ...props }: CTAButtonProps) {
  return (
    <Button
      variant={variant}
      className={cn(
        "group relative overflow-hidden font-medium transition-all duration-300",
        variant === "default" && "bg-emerald hover:bg-emerald-dark text-white",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && (
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        )}
      </span>
      {variant === "default" && (
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-emerald-dark to-emerald opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </Button>
  );
}
