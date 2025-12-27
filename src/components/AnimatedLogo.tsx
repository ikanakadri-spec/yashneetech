import { useState } from 'react';

const AnimatedLogo = ({ className = "", size = 80 }: { className?: string; size?: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: size, height: size }}
    >
      <img 
        src="/lovable-uploads/839b337c-28d8-4c67-a2e3-6bfa8ee1a106.png"
        alt="Yashnee Logo"
        className={`w-full h-full object-contain transition-all duration-500 ease-out ${
          isHovered ? 'animate-spin-slow scale-110' : ''
        }`}
        style={{
          filter: isHovered ? 'drop-shadow(0 0 8px hsl(var(--primary) / 0.5))' : 'none'
        }}
      />
      
      {/* Floating particles effect on hover */}
      {isHovered && (
        <>
          <span className="absolute top-0 left-1/2 w-1 h-1 bg-primary rounded-full animate-float-up opacity-80" style={{ animationDelay: '0ms' }} />
          <span className="absolute top-1/4 right-0 w-1.5 h-1.5 bg-accent rounded-full animate-float-up opacity-60" style={{ animationDelay: '150ms' }} />
          <span className="absolute bottom-1/4 left-0 w-1 h-1 bg-primary rounded-full animate-float-up opacity-70" style={{ animationDelay: '300ms' }} />
        </>
      )}
    </div>
  );
};

export default AnimatedLogo;
