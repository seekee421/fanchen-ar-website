'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '../../lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  loading?: 'eager' | 'lazy';
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  fill = false,
  priority = false,
  sizes,
  quality = 85,
  placeholder = 'blur',
  blurDataURL,
  objectFit = 'cover',
  loading = 'lazy',
  onLoad,
  onError,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // 生成模糊占位符数据URL
  const generateBlurDataURL = (w: number, h: number) => {
    if (blurDataURL) return blurDataURL;
    
    const canvas = document.createElement('canvas');
    canvas.width = w || 10;
    canvas.height = h || 10;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // 创建渐变背景
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#f3f4f6');
      gradient.addColorStop(1, '#e5e7eb');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    return canvas.toDataURL();
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  // 错误状态组件
  if (hasError) {
    return (
      <div 
        className={cn(
          "flex items-center justify-center bg-gray-100 text-gray-400",
          className
        )}
        style={fill ? undefined : { width, height }}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    );
  }

  const imageProps = {
    src,
    alt,
    onLoad: handleLoadingComplete,
    onError: handleError,
    priority,
    quality,
    loading: priority ? 'eager' : loading,
    placeholder,
    blurDataURL: placeholder === 'blur' ? generateBlurDataURL(width || 10, height || 10) : undefined,
    sizes: sizes || (fill ? '100vw' : undefined),
    style: {
      objectFit,
    },
    className: cn(
      'transition-opacity duration-300',
      isLoading ? 'opacity-0' : 'opacity-100',
      className
    ),
    ...props,
  };

  return (
    <div className={cn("relative overflow-hidden", fill ? "w-full h-full" : "")}>
      {/* 加载状态占位符 */}
      {isLoading && (
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse",
            fill ? "w-full h-full" : ""
          )}
          style={fill ? undefined : { width, height }}
        />
      )}
      
      {/* 优化的图片 */}
      {fill ? (
        <Image
          {...imageProps}
          fill
        />
      ) : (
        <Image
          {...imageProps}
          width={width!}
          height={height!}
        />
      )}
    </div>
  );
};

// 预设尺寸的便捷组件
export const HeroImage: React.FC<Omit<OptimizedImageProps, 'width' | 'height' | 'priority'>> = (props) => (
  <OptimizedImage
    {...props}
    width={1920}
    height={1080}
    priority
    sizes="100vw"
    placeholder="blur"
  />
);

export const CardImage: React.FC<Omit<OptimizedImageProps, 'width' | 'height'>> = (props) => (
  <OptimizedImage
    {...props}
    width={400}
    height={300}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
);

export const ThumbnailImage: React.FC<Omit<OptimizedImageProps, 'width' | 'height'>> = (props) => (
  <OptimizedImage
    {...props}
    width={150}
    height={150}
    sizes="150px"
  />
);

export default OptimizedImage; 