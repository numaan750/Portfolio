'use client';

import { useState } from 'react';
import Image from 'next/image';

/**
 * Optimized image component for Cloudinary URLs
 * Provides automatic format, quality, and responsive sizing
 */
export default function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  priority = false,
  fallback = null,
  ...props
}) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  if (!src || error) {
    return fallback || (
      <div className={`flex items-center justify-center bg-gradient-to-br from-zinc-800/40 to-zinc-900/40 ${className}`}>
        <span className="text-zinc-600/60 text-center">Image not available</span>
      </div>
    );
  }

  // Optimize Cloudinary URL for responsive images
  const getOptimizedUrl = (url) => {
    if (!url) return url;
    
    // If it's a Cloudinary URL, add responsive parameters
    if (url.includes('cloudinary')) {
      // Remove existing transformation if any
      const baseUrl = url.split('/image/upload/')[0] + '/image/upload/';
      const publicId = url.split('/image/upload/')[1];
      
      // Add responsive transformation: auto format, quality
      return `${baseUrl}f_auto,q_auto/${publicId}`;
    }
    
    return url;
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={getOptimizedUrl(src)}
        alt={alt || 'Image'}
        width={width}
        height={height}
        priority={priority}
        quality={85}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
        className="w-full h-full object-cover"
        onError={(e) => {
          console.error('Image failed to load:', src);
          setError(true);
        }}
        onLoadingComplete={() => setLoading(false)}
        {...props}
      />
      {loading && (
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 to-zinc-900/20 animate-pulse" />
      )}
    </div>
  );
}
