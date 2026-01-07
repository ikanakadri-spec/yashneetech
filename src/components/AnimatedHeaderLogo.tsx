import { useState } from "react";
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
      <AutoTransparentImage 
        src={yashneeLogo} 
        alt="Yashnee - Next Gen Talent Partner" 
        className="h-20 md:h-28 lg:h-32 w-auto object-contain [filter:drop-shadow(0_0_12px_rgba(255,255,255,0.9))_drop-shadow(0_0_6px_rgba(255,255,255,0.8))_drop-shadow(0_0_3px_rgba(255,255,255,1))_drop-shadow(0_2px_4px_rgba(0,0,0,0.3))]" 
        tolerance={90} 
      />
      
      {/* Animated Orbiting Tagline - Appears on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute pointer-events-none"
            style={{
              width: '200%',
              height: '200%',
              top: '-50%',
              left: '-50%',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute"
              style={{
                width: '100%',
                height: '100%',
              }}
              initial={{ rotate: -90 }}
              animate={{ rotate: 270 }}
              exit={{ rotate: 360 }}
              transition={{
                duration: 2,
                ease: 'linear',
                repeat: Infinity,
              }}
            >
              {/* Tagline positioned at the orbit path */}
              <motion.span
                className="absolute whitespace-nowrap text-xs md:text-sm font-bold text-champagne"
                style={{
                  top: '50%',
                  left: '100%',
                  transform: 'translateY(-50%)',
                  textShadow: '0 0 10px rgba(212, 175, 55, 0.8), 0 0 20px rgba(212, 175, 55, 0.5)',
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                Next Gen Talent Partner
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
};
