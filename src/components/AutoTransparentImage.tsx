import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type RGB = [number, number, number];

function getPixel(data: Uint8ClampedArray, idx: number): RGB {
  return [data[idx], data[idx + 1], data[idx + 2]];
}

function colorDistance(a: RGB, b: RGB) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2]);
}

function isGrayish(r: number, g: number, b: number, tolerance: number = 30): boolean {
  // Check if the color is grayish (R, G, B values are close to each other)
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return (max - min) < tolerance;
}

function isSimilarToBackground(r: number, g: number, b: number, bgColors: RGB[], tolerance: number): boolean {
  const pixel: RGB = [r, g, b];
  for (const bg of bgColors) {
    if (colorDistance(pixel, bg) <= tolerance) return true;
  }
  return false;
}

// Detect background colors from image corners and edges
function detectBackgroundColors(imageData: ImageData): RGB[] {
  const { width: w, height: h, data } = imageData;
  const colorCounts = new Map<string, { color: RGB; count: number }>();
  
  // Sample from edges
  const samplePixel = (x: number, y: number) => {
    const i = (y * w + x) * 4;
    const r = data[i], g = data[i + 1], b = data[i + 2];
    // Quantize to reduce variations
    const qr = Math.round(r / 16) * 16;
    const qg = Math.round(g / 16) * 16;
    const qb = Math.round(b / 16) * 16;
    const key = `${qr},${qg},${qb}`;
    const existing = colorCounts.get(key);
    if (existing) {
      existing.count++;
    } else {
      colorCounts.set(key, { color: [qr, qg, qb], count: 1 });
    }
  };
  
  // Sample from all edges
  for (let x = 0; x < w; x++) {
    samplePixel(x, 0);
    samplePixel(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    samplePixel(0, y);
    samplePixel(w - 1, y);
  }
  
  // Get the most common colors (likely backgrounds)
  const sorted = Array.from(colorCounts.values()).sort((a, b) => b.count - a.count);
  const bgColors: RGB[] = sorted.slice(0, 5).map(item => item.color);
  
  // Also add common gray/white backgrounds
  bgColors.push([255, 255, 255]); // White
  bgColors.push([248, 248, 248]);
  bgColors.push([240, 240, 240]);
  bgColors.push([128, 128, 128]); // Gray
  bgColors.push([64, 64, 64]); // Dark gray
  bgColors.push([96, 96, 96]);
  
  return bgColors;
}

// Smart flood fill that preserves colored content (like orange tagline)
function smartFloodFill(imageData: ImageData, bgColors: RGB[], tolerance: number) {
  const { width: w, height: h, data } = imageData;
  const visited = new Uint8Array(w * h);
  const queue: number[] = [];
  
  const isBackground = (x: number, y: number): boolean => {
    const i = (y * w + x) * 4;
    const r = data[i], g = data[i + 1], b = data[i + 2];
    
    // If pixel has strong color saturation (like orange), it's NOT background
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const saturation = max === 0 ? 0 : (max - min) / max;
    
    // High saturation colored pixels are content, not background
    if (saturation > 0.3 && max > 100) {
      return false;
    }
    
    // Check against detected background colors
    return isSimilarToBackground(r, g, b, bgColors, tolerance);
  };
  
  const push = (x: number, y: number) => {
    const id = y * w + x;
    if (visited[id]) return;
    visited[id] = 1;
    queue.push(id);
  };
  
  // Seed from edges
  for (let x = 0; x < w; x++) {
    if (isBackground(x, 0)) push(x, 0);
    if (isBackground(x, h - 1)) push(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    if (isBackground(0, y)) push(0, y);
    if (isBackground(w - 1, y)) push(w - 1, y);
  }
  
  // Process queue
  while (queue.length > 0) {
    const id = queue.shift()!;
    const x = id % w;
    const y = Math.floor(id / w);
    const i = id * 4;
    data[i + 3] = 0; // Make transparent
    
    // 4-neighborhood
    if (x > 0 && !visited[id - 1] && isBackground(x - 1, y)) push(x - 1, y);
    if (x < w - 1 && !visited[id + 1] && isBackground(x + 1, y)) push(x + 1, y);
    if (y > 0 && !visited[id - w] && isBackground(x, y - 1)) push(x, y - 1);
    if (y < h - 1 && !visited[id + w] && isBackground(x, y + 1)) push(x, y + 1);
  }
  
  return imageData;
}

// Gentle edge refinement that preserves content
function refineEdges(imageData: ImageData) {
  const { width: w, height: h, data } = imageData;
  const copy = new Uint8ClampedArray(data);
  
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const i = (y * w + x) * 4;
      const alpha = copy[i + 3];
      
      if (alpha === 0) continue;
      
      const r = copy[i], g = copy[i + 1], b = copy[i + 2];
      
      // Count transparent neighbors
      let transparentCount = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (dx === 0 && dy === 0) continue;
          const ni = ((y + dy) * w + (x + dx)) * 4;
          if (copy[ni + 3] === 0) transparentCount++;
        }
      }
      
      // Only clean truly grayish edge pixels, preserve colored ones
      if (transparentCount > 0 && isGrayish(r, g, b, 25)) {
        const brightness = (r + g + b) / 3;
        // Only remove very light gray edge pixels
        if (brightness > 180 && transparentCount >= 3) {
          data[i + 3] = 0;
        }
      }
    }
  }
  
  return imageData;
}

// Apply smooth anti-aliasing to edges
function antialiasEdges(imageData: ImageData) {
  const { width: w, height: h, data } = imageData;
  const copy = new Uint8ClampedArray(data);
  
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const i = (y * w + x) * 4;
      const alpha = copy[i + 3];
      
      if (alpha === 0) continue;
      
      // Check if this is an edge pixel
      let hasTransparent = false;
      let alphaSum = 0;
      let count = 0;
      
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (dx === 0 && dy === 0) continue;
          const ni = ((y + dy) * w + (x + dx)) * 4;
          const na = copy[ni + 3];
          alphaSum += na;
          count++;
          if (na === 0) hasTransparent = true;
        }
      }
      
      // Apply soft anti-aliasing to edge pixels
      if (hasTransparent) {
        const avgAlpha = alphaSum / count;
        // Blend current alpha with average for smoother edges
        data[i + 3] = Math.round(alpha * 0.7 + avgAlpha * 0.3);
      }
    }
  }
  
  return imageData;
}

// Enhance colors - boost saturation and contrast for better visibility
function enhanceVisibility(imageData: ImageData) {
  const { data } = imageData;
  
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3];
    if (a === 0) continue;
    
    let r = data[i], g = data[i + 1], b = data[i + 2];
    
    // Calculate current color properties
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    
    // Boost contrast
    const contrastFactor = 1.3;
    r = Math.min(255, Math.max(0, Math.round(128 + (r - 128) * contrastFactor)));
    g = Math.min(255, Math.max(0, Math.round(128 + (g - 128) * contrastFactor)));
    b = Math.min(255, Math.max(0, Math.round(128 + (b - 128) * contrastFactor)));
    
    // Boost saturation for colored pixels
    const newMax = Math.max(r, g, b);
    const newMin = Math.min(r, g, b);
    if (newMax !== newMin && newMax > 50) {
      const satBoost = 1.4;
      const gray = (r + g + b) / 3;
      r = Math.min(255, Math.max(0, Math.round(gray + (r - gray) * satBoost)));
      g = Math.min(255, Math.max(0, Math.round(gray + (g - gray) * satBoost)));
      b = Math.min(255, Math.max(0, Math.round(gray + (b - gray) * satBoost)));
    }
    
    data[i] = r;
    data[i + 1] = g;
    data[i + 2] = b;
  }
  
  return imageData;
}

export function AutoTransparentImage({
  src,
  alt,
  className,
  maxDimension = 1024,
  tolerance = 50
}: {
  src: string;
  alt: string;
  className?: string;
  maxDimension?: number;
  tolerance?: number;
}) {
  const [processedSrc, setProcessedSrc] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const key = useMemo(() => `${src}|${maxDimension}|${tolerance}`, [src, maxDimension, tolerance]);
  
  useEffect(() => {
    let cancelled = false;
    setIsLoaded(false);
    
    const run = async () => {
      try {
        const img = new Image();
        img.decoding = "async";
        img.src = src;
        await img.decode();
        
        // Use higher resolution for better quality
        const scale = Math.min(1, maxDimension / Math.max(img.naturalWidth, img.naturalHeight));
        const w = Math.max(1, Math.round(img.naturalWidth * scale));
        const h = Math.max(1, Math.round(img.naturalHeight * scale));
        
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return;
        
        // Enable image smoothing for better quality
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0, w, h);
        
        const imageData = ctx.getImageData(0, 0, w, h);
        
        // Step 1: Detect background colors
        const bgColors = detectBackgroundColors(imageData);
        
        // Step 2: Smart flood fill (preserves colored content like orange tagline)
        let processed = smartFloodFill(imageData, bgColors, tolerance);
        
        // Step 3: Gentle edge refinement
        processed = refineEdges(processed);
        
        // Step 4: Apply anti-aliasing for smooth edges
        processed = antialiasEdges(processed);
        
        // Step 5: Enhance color visibility
        processed = enhanceVisibility(processed);
        
        ctx.putImageData(processed, 0, 0);
        const url = canvas.toDataURL("image/png");
        
        if (!cancelled) {
          setProcessedSrc(url);
          requestAnimationFrame(() => {
            if (!cancelled) setIsLoaded(true);
          });
        }
      } catch {
        if (!cancelled) {
          setProcessedSrc(src);
          setIsLoaded(true);
        }
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [key, src, maxDimension, tolerance]);
  
  return (
    <img 
      src={processedSrc || src} 
      alt={alt} 
      loading="eager" 
      className={cn(
        className,
        "transition-opacity duration-500 ease-out",
        isLoaded ? "opacity-100" : "opacity-0"
      )} 
    />
  );
}