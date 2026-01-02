import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        brand: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        "background-secondary": "hsl(var(--background-secondary))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        emerald: {
          DEFAULT: "hsl(var(--emerald))",
          light: "hsl(var(--emerald-light))",
          dark: "hsl(152 55% 15%)",
        },
        champagne: {
          DEFAULT: "hsl(var(--champagne))",
          light: "hsl(var(--champagne-light))",
        },
        orange: {
          DEFAULT: "hsl(var(--orange))",
          light: "hsl(var(--orange-light))",
        },
        gold: {
          DEFAULT: "hsl(25 95% 53%)",
          light: "hsl(30 90% 65%)",
        },
        cream: "hsl(var(--cream))",
        ivory: "hsl(var(--ivory))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "reveal-text": {
          "0%": { 
            opacity: "0", 
            transform: "translateY(100%)",
            filter: "blur(10px)"
          },
          "100%": { 
            opacity: "1", 
            transform: "translateY(0)",
            filter: "blur(0)"
          },
        },
        "glow-pulse": {
          "0%, 100%": { 
            textShadow: "0 0 20px hsl(var(--orange) / 0.3), 0 0 40px hsl(var(--orange) / 0.1)"
          },
          "50%": { 
            textShadow: "0 0 30px hsl(var(--orange) / 0.5), 0 0 60px hsl(var(--orange) / 0.2)"
          },
        },
        "slide-in-blur": {
          "0%": { 
            opacity: "0", 
            transform: "translateX(-30px)",
            filter: "blur(8px)"
          },
          "100%": { 
            opacity: "1", 
            transform: "translateX(0)",
            filter: "blur(0)"
          },
        },
        "fade-up-zoom": {
          "0%": { opacity: "0", transform: "translateY(20px) scale(0.9)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scaleX": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        "float-particle": {
          "0%, 100%": { 
            transform: "translateY(0) translateX(0)",
            opacity: "0.3"
          },
          "25%": { 
            transform: "translateY(-30px) translateX(10px)",
            opacity: "0.6"
          },
          "50%": { 
            transform: "translateY(-15px) translateX(-15px)",
            opacity: "0.4"
          },
          "75%": { 
            transform: "translateY(-40px) translateX(5px)",
            opacity: "0.5"
          },
        },
        "float-particle-rotate": {
          "0%, 100%": { 
            transform: "translateY(0) rotate(0deg)",
            opacity: "0.2"
          },
          "25%": { 
            transform: "translateY(-25px) rotate(90deg)",
            opacity: "0.5"
          },
          "50%": { 
            transform: "translateY(-10px) rotate(180deg)",
            opacity: "0.3"
          },
          "75%": { 
            transform: "translateY(-35px) rotate(270deg)",
            opacity: "0.4"
          },
        },
        "float-slow": {
          "0%, 100%": { 
            transform: "translateY(0) translateX(0) scale(1)",
          },
          "50%": { 
            transform: "translateY(-20px) translateX(10px) scale(1.05)",
          },
        },
        "float-slow-reverse": {
          "0%, 100%": { 
            transform: "translateY(0) translateX(0) rotate(45deg)",
          },
          "50%": { 
            transform: "translateY(15px) translateX(-15px) rotate(90deg)",
          },
        },
        "pulse-slow": {
          "0%, 100%": { 
            opacity: "0.3",
            transform: "scale(1)",
          },
          "50%": { 
            opacity: "0.6",
            transform: "scale(1.1)",
          },
        },
        "text-shimmer": {
          "0%": { 
            backgroundPosition: "200% center",
          },
          "100%": { 
            backgroundPosition: "-200% center",
          },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "float-up": {
          "0%": { 
            transform: "translateY(0) scale(1)",
            opacity: "0.8"
          },
          "100%": { 
            transform: "translateY(-20px) scale(0)",
            opacity: "0"
          },
        },
        "flip-3d": {
          "0%": { 
            transform: "perspective(400px) rotateY(0deg)",
          },
          "50%": { 
            transform: "perspective(400px) rotateY(180deg)",
          },
          "100%": { 
            transform: "perspective(400px) rotateY(360deg)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-up-zoom": "fade-up-zoom 0.7s ease-out forwards",
        "reveal-text": "reveal-text 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "slide-in-blur": "slide-in-blur 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "float-particle": "float-particle 12s ease-in-out infinite",
        "float-particle-rotate": "float-particle-rotate 15s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "float-slow-reverse": "float-slow-reverse 10s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "text-shimmer": "text-shimmer 8s ease-in-out infinite",
        "spin-slow": "spin-slow 3s linear infinite",
        "float-up": "float-up 0.6s ease-out forwards",
        "flip-3d": "flip-3d 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;