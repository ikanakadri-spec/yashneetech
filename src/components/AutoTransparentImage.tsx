import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { pipeline, env } from "@huggingface/transformers";

// Configure transformers.js to always download models
env.allowLocalModels = false;
env.useBrowserCache = true;

const MAX_IMAGE_DIMENSION = 1024;

// Singleton promise for the segmenter to avoid reinitializing
let segmenterPromise: Promise<any> | null = null;

async function getSegmenter() {
  if (!segmenterPromise) {
    segmenterPromise = pipeline(
      "image-segmentation",
      "Xenova/segformer-b0-finetuned-ade-512-512",
      { device: "webgpu" }
    ).catch((err) => {
      // Fallback to CPU if WebGPU fails
      console.warn("WebGPU not available, falling back to CPU:", err);
      segmenterPromise = null;
      return pipeline(
        "image-segmentation",
        "Xenova/segformer-b0-finetuned-ade-512-512"
      );
    });
  }
  return segmenterPromise;
}

function resizeImageIfNeeded(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  maxDim: number
) {
  let width = image.naturalWidth;
  let height = image.naturalHeight;

  if (width > maxDim || height > maxDim) {
    if (width > height) {
      height = Math.round((height * maxDim) / width);
      width = maxDim;
    } else {
      width = Math.round((width * maxDim) / height);
      height = maxDim;
    }
  }

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0, width, height);
}

async function removeBackground(imageElement: HTMLImageElement, maxDim: number): Promise<string> {
  console.log("Starting AI background removal...");
  
  const segmenter = await getSegmenter();
  
  // Convert HTMLImageElement to canvas
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  
  if (!ctx) throw new Error("Could not get canvas context");
  
  // Resize image if needed and draw it to canvas
  resizeImageIfNeeded(canvas, ctx, imageElement, maxDim);
  console.log(`Image dimensions: ${canvas.width}x${canvas.height}`);
  
  // Get image data as base64
  const imageData = canvas.toDataURL("image/jpeg", 0.9);
  console.log("Processing with AI segmentation model...");
  
  // Process the image with the segmentation model
  const result = await segmenter(imageData);
  
  console.log("Segmentation complete");
  
  if (!result || !Array.isArray(result) || result.length === 0 || !result[0].mask) {
    throw new Error("Invalid segmentation result");
  }
  
  // Create a new canvas for the masked image
  const outputCanvas = document.createElement("canvas");
  outputCanvas.width = canvas.width;
  outputCanvas.height = canvas.height;
  const outputCtx = outputCanvas.getContext("2d");
  
  if (!outputCtx) throw new Error("Could not get output canvas context");
  
  // Draw original image
  outputCtx.drawImage(canvas, 0, 0);
  
  // Apply the mask
  const outputImageData = outputCtx.getImageData(
    0, 0,
    outputCanvas.width,
    outputCanvas.height
  );
  const data = outputImageData.data;
  
  // Apply inverted mask to alpha channel
  for (let i = 0; i < result[0].mask.data.length; i++) {
    // Invert the mask value (1 - value) to keep the subject instead of the background
    const alpha = Math.round((1 - result[0].mask.data[i]) * 255);
    data[i * 4 + 3] = alpha;
  }
  
  outputCtx.putImageData(outputImageData, 0, 0);
  console.log("AI background removal complete");
  
  return outputCanvas.toDataURL("image/png");
}

export function AutoTransparentImage({
  src,
  alt,
  className,
  maxDimension = 768,
}: {
  src: string;
  alt: string;
  className?: string;
  maxDimension?: number;
  tolerance?: number; // Kept for backward compatibility but unused with AI approach
}) {
  const [processedSrc, setProcessedSrc] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const key = useMemo(() => `${src}|${maxDimension}`, [src, maxDimension]);
  
  useEffect(() => {
    let cancelled = false;
    setIsLoaded(false);
    setIsProcessing(true);
    
    const run = async () => {
      try {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.decoding = "async";
        img.src = src;
        await img.decode();
        
        const url = await removeBackground(img, maxDimension);
        
        if (!cancelled) {
          setProcessedSrc(url);
          setIsProcessing(false);
          requestAnimationFrame(() => {
            if (!cancelled) setIsLoaded(true);
          });
        }
      } catch (err) {
        console.error("AI background removal failed, using original:", err);
        // If AI fails, fall back to the original src
        if (!cancelled) {
          setProcessedSrc(src);
          setIsProcessing(false);
          setIsLoaded(true);
        }
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [key, src, maxDimension]);
  
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
