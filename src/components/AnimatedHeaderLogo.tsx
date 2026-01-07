import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AutoTransparentImage } from "@/components/AutoTransparentImage";
import yashneeLogo from "@/assets/yashnee-logo-new.png";

export const AnimatedHeaderLogo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    if (isHovered) {
      setShowTagline(true);
    } else {
      // Delay hiding to allow fade out animation
      const timer = setTimeout(() => setShowTagline(false), 600);
      return () => clearTimeout(timer);
    }
  }, [isHovered]);

  return (
    <Link 
      to="/" 
      className="flex items-center group transition-transform duration-300 hover:scale-105 -ml-4 lg:-ml-6 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Logo */}
      <div className="relative">
        <AutoTransparentImage 
          src={yashneeLogo} 
          alt="Yashnee - Next Gen Talent Partner" 
          className="h-20 md:h-28 lg:h-32 w-auto object-contain [filter:drop-shadow(0_0_12px_rgba(255,255,255,0.9))_drop-shadow(0_0_6px_rgba(255,255,255,0.8))_drop-shadow(0_0_3px_rgba(255,255,255,1))_drop-shadow(0_2px_4px_rgba(0,0,0,0.3))]" 
          tolerance={90} 
        />
        
        {/* Animated Tagline - Moves around the logo */}
        <AnimatePresence>
          {showTagline && (
            <motion.span
              className="absolute whitespace-nowrap text-[10px] md:text-xs font-bold text-champagne pointer-events-none"
              style={{
                textShadow: '0 0 8px rgba(212, 175, 55, 0.9), 0 0 16px rgba(212, 175, 55, 0.6)',
              }}
              initial={{ 
                opacity: 0,
                top: '100%',
                left: '0%',
                x: 0,
                y: 0,
              }}
              animate={isHovered ? {
                opacity: [0, 1, 1, 1, 1, 0.8, 0],
                top: ['100%', '100%', '50%', '0%', '0%', '50%', '100%'],
                left: ['0%', '100%', '100%', '100%', '0%', '-20%', '0%'],
                x: [0, 0, 0, 0, -100, -100, 0],
                y: [10, 10, 0, -10, -10, 0, 10],
              } : {
                opacity: 0,
              }}
              exit={{ 
                opacity: 0,
                transition: { duration: 0.3 }
              }}
              transition={{
                duration: 4,
                ease: 'easeInOut',
                times: [0, 0.15, 0.35, 0.5, 0.65, 0.85, 1],
              }}
            >
              Next Gen Talent Partner
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </Link>
  );
};
