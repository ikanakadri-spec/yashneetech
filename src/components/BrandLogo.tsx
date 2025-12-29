import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  symbolClassName?: string;
  nameClassName?: string;
  taglineClassName?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function BrandLogo({
  className,
  symbolClassName,
  nameClassName,
  taglineClassName,
  size = "lg"
}: BrandLogoProps) {
  const sizeStyles = {
    sm: { symbol: "w-8 h-8", name: "text-lg", tagline: "text-[8px]", gap: "gap-1.5" },
    md: { symbol: "w-10 h-10", name: "text-xl", tagline: "text-[9px]", gap: "gap-2" },
    lg: { symbol: "w-14 h-14", name: "text-2xl", tagline: "text-[10px]", gap: "gap-2.5" },
    xl: { symbol: "w-20 h-20", name: "text-3xl", tagline: "text-xs", gap: "gap-3" }
  };

  const styles = sizeStyles[size];

  return (
    <div className={cn("flex items-center", styles.gap, className)}>
      {/* Y-Symbol with Leaf - Orange */}
      <div className={cn("flex-shrink-0", symbolClassName)}>
        <svg 
          viewBox="0 0 64 64" 
          className={cn(styles.symbol, "text-[#F57C00]")}
          fill="currentColor"
        >
          {/* Y-shaped symbol with leaf */}
          <path d="M32 8c-2 0-3 1-4 2L18 22c-1 1-1.5 2.5-1 4 .5 1.5 2 2.5 3.5 2.5h4l-8 20c-.5 1.5 0 3 1 4s2.5 1 4 .5l4-2v5c0 2 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5v-8l4 2c1.5.5 3 0 4-.5s1.5-2.5 1-4l-8-17h4c1.5 0 3-1 3.5-2.5s0-3-1-4L36 10c-1-1-2-2-4-2z"/>
          {/* Leaf detail */}
          <path d="M32 14c-1 2-2 4-1.5 6 .5 2 2 3.5 4 4 2 .5 4-.5 5-2s1-4 0-5.5c-1-1.5-3-2.5-5-2.5-1 0-2 0-2.5 0z" opacity="0.7"/>
        </svg>
      </div>

      {/* Text Block */}
      <div className="flex flex-col">
        {/* Company Name - White */}
        <span 
          className={cn(
            "font-bold tracking-[0.3em] leading-none",
            styles.name,
            "text-white",
            nameClassName
          )}
        >
          YASHNEE
        </span>
        {/* Tagline - Orange */}
        <span 
          className={cn(
            "tracking-[0.15em] leading-tight mt-0.5",
            styles.tagline,
            "text-[#F57C00]",
            taglineClassName
          )}
        >
          Next Gen Talent Partner
        </span>
      </div>
    </div>
  );
}
