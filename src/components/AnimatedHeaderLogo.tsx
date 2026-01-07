import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AutoTransparentImage } from "@/components/AutoTransparentImage";
import yashneeLogo from "@/assets/yashnee-logo-new.png";

export const AnimatedHeaderLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

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
        
        {/* Animated Tagline - Appears below logo and fades away */}
        <AnimatePresence>
          {isHovered && (
            <motion.span
              className="absolute whitespace-nowrap text-[10px] md:text-xs font-bold text-champagne pointer-events-none left-1/2"
              style={{
                textShadow: '0 0 8px rgba(212, 175, 55, 0.9), 0 0 16px rgba(212, 175, 55, 0.6)',
              }}
              initial={{ 
                opacity: 0,
                bottom: '-5px',
                x: '-50%',
                scale: 0.8,
              }}
              animate={{
                opacity: [0, 1, 1, 0],
                bottom: ['-5px', '-2px', '-2px', '5px'],
                scale: [0.8, 1, 1, 0.9],
              }}
              exit={{ 
                opacity: 0,
                scale: 0.8,
                transition: { duration: 0.2 }
              }}
              transition={{
                duration: 2.5,
                ease: 'easeInOut',
                times: [0, 0.2, 0.7, 1],
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
