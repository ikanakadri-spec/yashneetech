import { cn } from "@/lib/utils";
import { AutoTransparentImage } from "@/components/AutoTransparentImage";
import yashneeLogo from "@/assets/yashnee-logo-new.png";

interface BrandLogoProps {
  className?: string;
  symbolColor?: string;
  nameColor?: string;
  taglineColor?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
}

export const BrandLogo = ({
  className,
  symbolColor = "brightness-0 invert", // White by default
  nameColor = "text-white",
  taglineColor = "text-gold",
  size = "lg",
  showTagline = true,
}: BrandLogoProps) => {
  const sizeClasses = {
    sm: {
      symbol: "h-10 w-10",
      name: "text-lg",
      tagline: "text-[8px]",
      gap: "gap-2",
    },
    md: {
      symbol: "h-14 w-14",
      name: "text-xl",
      tagline: "text-[10px]",
      gap: "gap-2",
    },
    lg: {
      symbol: "h-16 w-16",
      name: "text-2xl",
      tagline: "text-xs",
      gap: "gap-3",
    },
    xl: {
      symbol: "h-20 w-20",
      name: "text-3xl",
      tagline: "text-sm",
      gap: "gap-3",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={cn("flex items-center", currentSize.gap, className)}>
      {/* Leaf/Y Symbol - Image */}
      <div className={cn("flex-shrink-0", currentSize.symbol)}>
        <AutoTransparentImage
          src={yashneeLogo}
          alt="Yashnee Logo Symbol"
          className={cn(
            "h-full w-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]",
            symbolColor
          )}
          tolerance={90}
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center -space-y-1">
        {/* Brand Name */}
        <span
          className={cn(
            "font-jakarta font-bold tracking-wide leading-tight",
            currentSize.name,
            nameColor
          )}
        >
          YASHNEE TECH
        </span>

        {/* Tagline */}
        {showTagline && (
          <span
            className={cn(
              "font-jakarta font-medium tracking-widest uppercase leading-tight",
              currentSize.tagline,
              taglineColor
            )}
          >
            Next Gen Talent Partner
          </span>
        )}
      </div>
    </div>
  );
};
