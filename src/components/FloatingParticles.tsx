import { useMemo } from 'react';

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  shape: 'circle' | 'square' | 'triangle' | 'diamond';
  opacity: number;
}

export const FloatingParticles = () => {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 20 + 8,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
      shape: (['circle', 'square', 'triangle', 'diamond'] as const)[Math.floor(Math.random() * 4)],
      opacity: Math.random() * 0.3 + 0.1,
    }));
  }, []);

  const renderShape = (particle: Particle) => {
    const baseClasses = "absolute transition-all duration-1000";
    const style = {
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      animationDuration: `${particle.duration}s`,
      animationDelay: `${particle.delay}s`,
    };

    switch (particle.shape) {
      case 'circle':
        return (
          <div
            key={particle.id}
            className={`${baseClasses} rounded-full bg-champagne/20 backdrop-blur-sm animate-float-particle border border-champagne/30`}
            style={{
              ...style,
              width: particle.size,
              height: particle.size,
            }}
          />
        );
      case 'square':
        return (
          <div
            key={particle.id}
            className={`${baseClasses} bg-primary-foreground/10 backdrop-blur-sm animate-float-particle-rotate border border-primary-foreground/20`}
            style={{
              ...style,
              width: particle.size,
              height: particle.size,
            }}
          />
        );
      case 'triangle':
        return (
          <div
            key={particle.id}
            className={`${baseClasses} animate-float-particle`}
            style={{
              ...style,
              width: 0,
              height: 0,
              borderLeft: `${particle.size / 2}px solid transparent`,
              borderRight: `${particle.size / 2}px solid transparent`,
              borderBottom: `${particle.size}px solid hsl(var(--champagne) / 0.2)`,
            }}
          />
        );
      case 'diamond':
        return (
          <div
            key={particle.id}
            className={`${baseClasses} bg-emerald/15 backdrop-blur-sm animate-float-particle-rotate border border-emerald/25`}
            style={{
              ...style,
              width: particle.size,
              height: particle.size,
              transform: 'rotate(45deg)',
            }}
          />
        );
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(renderShape)}
      
      {/* Larger accent shapes */}
      <div 
        className="absolute w-32 h-32 border-2 border-champagne/20 rounded-full animate-float-slow"
        style={{ left: '10%', top: '20%' }}
      />
      <div 
        className="absolute w-24 h-24 border border-primary-foreground/15 animate-float-slow-reverse"
        style={{ right: '15%', top: '30%', transform: 'rotate(45deg)' }}
      />
      <div 
        className="absolute w-16 h-16 bg-gradient-to-br from-champagne/10 to-transparent rounded-full animate-pulse-slow"
        style={{ left: '70%', bottom: '25%' }}
      />
      <div 
        className="absolute w-20 h-20 border-2 border-emerald/15 rounded-full animate-float-slow"
        style={{ left: '25%', bottom: '20%', animationDelay: '2s' }}
      />
    </div>
  );
};
