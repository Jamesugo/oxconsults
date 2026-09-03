import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  label?: string;
  align?: "left" | "center" | "right";
  className?: string;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  label,
  align = "center",
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <ScrollReveal direction="up" delay={0.1}>
      <div
        className={cn(
          "flex flex-col space-y-4",
          align === "center" && "items-center text-center",
          align === "left" && "items-start text-left",
          align === "right" && "items-end text-right",
          className
        )}
      >
        {label && (
          <span className={cn("text-label", light ? "text-gold-light" : "text-gold")}>
            {label}
          </span>
        )}
        <h2 className={cn("heading-section text-3xl md:text-4xl lg:text-5xl", light && "text-white")}>
          {title}
        </h2>
        {subtitle && (
          <p className={cn("text-body-lg max-w-2xl", light ? "text-slate-300" : "text-muted-foreground")}>
            {subtitle}
          </p>
        )}
        <div className="accent-line mt-4" />
      </div>
    </ScrollReveal>
  );
}
