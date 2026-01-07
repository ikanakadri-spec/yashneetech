import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AutoTransparentImage } from "@/components/AutoTransparentImage";
import yashneeLogo from "@/assets/yashnee-logo-new.png";

export const AnimatedHeaderLogo = () => {
  const [showTagline, setShowTagline] = useState(true);
  const [animationPhase, setAnimationPhase] = useState<'entering' | 'orbiting' | 'exiting'>('entering');

  useEffect(() => {
    // Start orbit animation after entering
    const enterTimer = setTimeout(() => {
      setAnimationPhase('orbiting');
    }, 800);

    // Start exit animation
    const orbitTimer = setTimeout(() => {
      setAnimationPhase('exiting');
    }, 4000);

    // Hide tagline completely
    const exitTimer = setTimeout(() => {
      setShowTagline(false);
    }, 5000);

    // Restart animation cycle
    const restartTimer = setTimeout(() => {
      setShowTagline(true);
      setAnimationPhase('entering');
    }, 8000);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(orbitTimer);
      clearTimeout(exitTimer);
      clearTimeout(restartTimer);
    };
  }, [showTagline]);

  return (
    <Link 
      to="/" 
      className="flex items-center group transition-transform duration-300 hover:scale-105 -ml-4 lg:-ml-6 relative"
    >
      {/* Main Logo */}
      <AutoTransparentImage 
        src={yashneeLogo} 
        alt="Yashnee - Next Gen Talent Partner" 
        className="h-20 md:h-28 lg:h-32 w-auto object-contain [filter:drop-shadow(0_0_12px_rgba(255,255,255,0.9))_drop-shadow(0_0_6px_rgba(255,255,255,0.8))_drop-shadow(0_0_3px_rgba(255,255,255,1))_drop-shadow(0_2px_4px_rgba(0,0,0,0.3))]" 
        tolerance={90} 
      />
      
      {/* Animated Orbiting Tagline */}
      <AnimatePresence>
        {showTagline && (
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
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute"
              style={{
                width: '100%',
                height: '100%',
              }}
              animate={
                animationPhase === 'entering' 
                  ? { rotate: 0 }
                  : animationPhase === 'orbiting'
                  ? { rotate: 360 }
                  : { rotate: 720 }
              }
              transition={{
                duration: animationPhase === 'entering' ? 0 : animationPhase === 'orbiting' ? 3 : 1,
                ease: animationPhase === 'exiting' ? 'easeIn' : 'linear',
                repeat: animationPhase === 'orbiting' ? Infinity : 0,
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
                animate={{ 
                  opacity: animationPhase === 'exiting' ? 0 : 1, 
                  scale: animationPhase === 'exiting' ? 0.5 : 1 
                }}
                transition={{ duration: 0.5 }}
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
