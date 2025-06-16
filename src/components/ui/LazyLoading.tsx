'use client';

import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface LazyLoadingProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  placeholder?: ReactNode;
  fallback?: ReactNode;
  onIntersect?: () => void;
  once?: boolean;
  delay?: number;
}

export const LazyLoading: React.FC<LazyLoadingProps> = ({
  children,
  className,
  threshold = 0.1,
  rootMargin = '50px',
  placeholder,
  fallback,
  onIntersect,
  once = true,
  delay = 0,
}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              setIsIntersecting(true);
              if (once) {
                setHasIntersected(true);
              }
              onIntersect?.();
            }, delay);
          } else {
            setIsIntersecting(true);
            if (once) {
              setHasIntersected(true);
            }
            onIntersect?.();
          }
        } else if (!once) {
          setIsIntersecting(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, once, onIntersect, delay]);

  useEffect(() => {
    if (isIntersecting && !isLoaded) {
      // 模拟加载完成
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isIntersecting, isLoaded]);

  const shouldRender = once ? hasIntersected || isIntersecting : isIntersecting;

  return (
    <div
      ref={ref}
      className={cn(
        'transition-opacity duration-300',
        shouldRender && isLoaded ? 'opacity-100' : 'opacity-0',
        className
      )}
    >
      {shouldRender ? (
        isLoaded ? (
          children
        ) : (
          placeholder || (
            <div className="flex items-center justify-center p-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          )
        )
      ) : (
        fallback || (
          <div className="bg-gray-200 animate-pulse rounded-lg w-full h-48"></div>
        )
      )}
    </div>
  );
};

// 专用于内容区块的懒加载
export const LazySection: React.FC<{
  children: ReactNode;
  className?: string;
  animationClass?: string;
}> = ({ children, className, animationClass = 'animate-fade-in-up' }) => {
  return (
    <LazyLoading
      className={cn('transform transition-all duration-500', className)}
      threshold={0.1}
      rootMargin="100px"
      once={true}
      placeholder={
        <div className="bg-gray-100 animate-pulse rounded-lg w-full min-h-[200px]"></div>
      }
    >
      <div className={animationClass}>{children}</div>
    </LazyLoading>
  );
};

// 专用于图片懒加载
export const LazyImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}> = ({ src, alt, className, width, height }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <LazyLoading
      className={className}
      threshold={0.1}
      rootMargin="50px"
      placeholder={
        <div 
          className="bg-gray-200 animate-pulse rounded"
          style={{ width: width || '100%', height: height || 200 }}
        />
      }
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          'transition-opacity duration-300',
          loaded ? 'opacity-100' : 'opacity-0',
          error ? 'hidden' : 'block',
          className
        )}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        loading="lazy"
      />
      {error && (
        <div className="bg-gray-100 flex items-center justify-center rounded text-gray-400 text-sm">
          图片加载失败
        </div>
      )}
    </LazyLoading>
  );
}; 