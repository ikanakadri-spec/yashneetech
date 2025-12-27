import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
type RGB = [number, number, number];
function getPixel(data: Uint8ClampedArray, idx: number): RGB {
  return [data[idx], data[idx + 1], data[idx + 2]];
}
function colorDistance(a: RGB, b: RGB) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2]);
}
function quantize([r, g, b]: RGB, step = 8): RGB {
  const q = (v: number) => Math.round(v / step) * step;
  return [q(r), q(g), q(b)];
}
function rgbKey([r, g, b]: RGB) {
  return `${r},${g},${b}`;
}
function buildCornerPalette(imageData: ImageData) {
  const {
    width: w,
    height: h,
    data
  } = imageData;
  const corners = [0, (w - 1) * 4, (h - 1) * w * 4, ((h - 1) * w + (w - 1)) * 4];
  const palette = new Map<string, RGB>();
  for (const idx of corners) {
    const q = quantize(getPixel(data, idx));
    palette.set(rgbKey(q), q);
  }

  // Add comprehensive light color palette for thorough background removal
  palette.set("255,255,255", [255, 255, 255]); // Pure white
  palette.set("248,248,248", [248, 248, 248]); // Near white
  palette.set("240,240,240", [240, 240, 240]); // Light gray
  palette.set("232,232,232", [232, 232, 232]); // Checkerboard gray
  palette.set("224,224,224", [224, 224, 224]); // Medium light gray
  palette.set("216,216,216", [216, 216, 216]); // Gray
  palette.set("208,208,208", [208, 208, 208]); // Slightly darker
  palette.set("200,200,200", [200, 200, 200]); // Edge gray
  return Array.from(palette.values());
}

// Clean up semi-transparent edge pixels (anti-aliasing artifacts)
function cleanEdges(imageData: ImageData, threshold: number = 200) {
  const { width: w, height: h, data } = imageData;
  
  // Multiple passes to ensure thorough edge cleaning
  for (let pass = 0; pass < 3; pass++) {
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4;
        const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
        
        // Skip already transparent pixels
        if (a === 0) continue;
        
        // If pixel is light colored and near a transparent pixel, make it transparent
        const brightness = (r + g + b) / 3;
        if (brightness > threshold) {
          // Check if any neighbor is transparent (8-neighborhood)
          let hasTransparentNeighbor = false;
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              if (dx === 0 && dy === 0) continue;
              const nx = x + dx, ny = y + dy;
              if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
                const ni = (ny * w + nx) * 4;
                if (data[ni + 3] === 0) {
                  hasTransparentNeighbor = true;
                  break;
                }
              }
            }
            if (hasTransparentNeighbor) break;
          }
          if (hasTransparentNeighbor) {
            data[i + 3] = 0;
          }
        }
        
        // Also make semi-transparent light pixels fully transparent
        if (a > 0 && a < 255 && brightness > 150) {
          data[i + 3] = 0;
        }
      }
    }
  }
  return imageData;
}
function floodFillTransparent(imageData: ImageData, palette: RGB[], tolerance: number) {
  const {
    width: w,
    height: h,
    data
  } = imageData;
  const visited = new Uint8Array(w * h);
  const queue = new Uint32Array(w * h);
  let qh = 0;
  let qt = 0;
  const isBg = (x: number, y: number) => {
    const i = (y * w + x) * 4;
    const c = getPixel(data, i);
    for (const p of palette) {
      if (colorDistance(c, p) <= tolerance) return true;
    }
    return false;
  };
  const push = (x: number, y: number) => {
    const id = y * w + x;
    if (visited[id]) return;
    visited[id] = 1;
    queue[qt++] = id;
  };

  // Seed from edges only (prevents removing white highlights inside the logo)
  for (let x = 0; x < w; x++) {
    if (isBg(x, 0)) push(x, 0);
    if (isBg(x, h - 1)) push(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    if (isBg(0, y)) push(0, y);
    if (isBg(w - 1, y)) push(w - 1, y);
  }
  while (qh < qt) {
    const id = queue[qh++];
    const x = id % w;
    const y = Math.floor(id / w);
    const i = id * 4;
    data[i + 3] = 0; // alpha

    // 4-neighborhood
    if (x > 0 && !visited[id - 1] && isBg(x - 1, y)) push(x - 1, y);
    if (x < w - 1 && !visited[id + 1] && isBg(x + 1, y)) push(x + 1, y);
    if (y > 0 && !visited[id - w] && isBg(x, y - 1)) push(x, y - 1);
    if (y < h - 1 && !visited[id + w] && isBg(x, y + 1)) push(x, y + 1);
  }
  return imageData;
}
export function AutoTransparentImage({
  src,
  alt,
  className,
  maxDimension = 768,
  tolerance = 36
}: {
  src: string;
  alt: string;
  className?: string;
  maxDimension?: number;
  tolerance?: number;
}) {
  const [processedSrc, setProcessedSrc] = useState<string>(src);
  const key = useMemo(() => `${src}|${maxDimension}|${tolerance}`, [src, maxDimension, tolerance]);
  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      try {
        const img = new Image();
        img.decoding = "async";
        img.src = src;
        await img.decode();
        const scale = Math.min(1, maxDimension / Math.max(img.naturalWidth, img.naturalHeight));
        const w = Math.max(1, Math.round(img.naturalWidth * scale));
        const h = Math.max(1, Math.round(img.naturalHeight * scale));
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(img, 0, 0, w, h);
        const imageData = ctx.getImageData(0, 0, w, h);
        const palette = buildCornerPalette(imageData);
        let cleaned = floodFillTransparent(imageData, palette, tolerance);
        // Second pass: clean up edge artifacts
        cleaned = cleanEdges(cleaned, 180);
        ctx.putImageData(cleaned, 0, 0);
        const url = canvas.toDataURL("image/png");
        if (!cancelled) setProcessedSrc(url);
      } catch {
        // If anything fails, fall back to the original src
        if (!cancelled) setProcessedSrc(src);
      }
    };
    setProcessedSrc(src);
    run();
    return () => {
      cancelled = true;
    };
  }, [key, src, maxDimension, tolerance]);
  return <img src={processedSrc} alt={alt} loading="eager" className={cn(className)} />;
}