'use client';

import { useEffect } from 'react';

interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
}

interface WebVitalsMetric extends PerformanceMetric {
  id: string;
  delta: number;
}

// Web Vitals 阈值定义
const THRESHOLDS = {
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  FID: { good: 100, poor: 300 },
  LCP: { good: 2500, poor: 4000 },
  TTFB: { good: 800, poor: 1800 },
};

// 获取评级
function getRating(metric: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = THRESHOLDS[metric as keyof typeof THRESHOLDS];
  if (!threshold) return 'good';
  
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

// 发送分析数据（可以替换为实际的分析服务）
function sendToAnalytics(metric: WebVitalsMetric) {
  // 在开发环境下输出到控制台
  if (process.env.NODE_ENV === 'development') {
    console.group(`🔍 Web Vitals: ${metric.name}`);
    console.log(`Value: ${metric.value}ms`);
    console.log(`Rating: ${metric.rating}`);
    console.log(`Delta: ${metric.delta}ms`);
    console.groupEnd();
  }
  
  // 在生产环境中，可以发送到分析服务
  if (process.env.NODE_ENV === 'production') {
    // 示例：发送到Google Analytics 4
    if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', metric.name, {
        custom_parameter_value: metric.value,
        custom_parameter_rating: metric.rating,
        custom_parameter_delta: metric.delta,
      });
    }
    
    // 或者发送到其他分析服务
    // analytics.track(metric.name, {
    //   value: metric.value,
    //   rating: metric.rating,
    //   delta: metric.delta,
    // });
  }
}

// 获取 Web Vitals
function getCLS(onPerfEntry: (metric: WebVitalsMetric) => void) {
  import('web-vitals').then(({ onCLS }) => {
    onCLS((metric: any) => {
      onPerfEntry({
        name: 'CLS',
        value: metric.value,
        rating: getRating('CLS', metric.value),
        id: metric.id,
        delta: metric.delta,
        timestamp: Date.now(),
      });
    });
  });
}

function getINP(onPerfEntry: (metric: WebVitalsMetric) => void) {
  import('web-vitals').then(({ onINP }) => {
    onINP((metric: any) => {
      onPerfEntry({
        name: 'INP',
        value: metric.value,
        rating: getRating('FID', metric.value), // 使用FID的阈值
        id: metric.id,
        delta: metric.delta,
        timestamp: Date.now(),
      });
    });
  });
}

function getFCP(onPerfEntry: (metric: WebVitalsMetric) => void) {
  import('web-vitals').then(({ onFCP }) => {
    onFCP((metric: any) => {
      onPerfEntry({
        name: 'FCP',
        value: metric.value,
        rating: getRating('FCP', metric.value),
        id: metric.id,
        delta: metric.delta,
        timestamp: Date.now(),
      });
    });
  });
}

function getLCP(onPerfEntry: (metric: WebVitalsMetric) => void) {
  import('web-vitals').then(({ onLCP }) => {
    onLCP((metric: any) => {
      onPerfEntry({
        name: 'LCP',
        value: metric.value,
        rating: getRating('LCP', metric.value),
        id: metric.id,
        delta: metric.delta,
        timestamp: Date.now(),
      });
    });
  });
}

function getTTFB(onPerfEntry: (metric: WebVitalsMetric) => void) {
  import('web-vitals').then(({ onTTFB }) => {
    onTTFB((metric: any) => {
      onPerfEntry({
        name: 'TTFB',
        value: metric.value,
        rating: getRating('TTFB', metric.value),
        id: metric.id,
        delta: metric.delta,
        timestamp: Date.now(),
      });
    });
  });
}

// 自定义性能指标监控
function measureCustomMetrics() {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // 测量 DOM 内容加载时间
    const domContentLoaded = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
    
    // 测量页面完全加载时间
    const pageLoad = performance.timing.loadEventEnd - performance.timing.navigationStart;
    
    // 测量首字节时间
    const ttfb = performance.timing.responseStart - performance.timing.navigationStart;
    
    // 输出自定义指标
    if (process.env.NODE_ENV === 'development') {
      console.group('📊 Custom Performance Metrics');
      console.log(`DOM Content Loaded: ${domContentLoaded}ms`);
      console.log(`Page Load: ${pageLoad}ms`);
      console.log(`Time to First Byte: ${ttfb}ms`);
      console.groupEnd();
    }
    
    return {
      domContentLoaded,
      pageLoad,
      ttfb,
    };
  }
  
  return null;
}

// 内存使用监控
function measureMemoryUsage() {
  if (typeof window !== 'undefined' && 'performance' in window && 'memory' in performance) {
    const memory = (performance as any).memory;
    
    const memoryInfo = {
      usedJSHeapSize: memory.usedJSHeapSize,
      totalJSHeapSize: memory.totalJSHeapSize,
      jsHeapSizeLimit: memory.jsHeapSizeLimit,
    };
    
    if (process.env.NODE_ENV === 'development') {
      console.group('💾 Memory Usage');
      console.log(`Used: ${(memoryInfo.usedJSHeapSize / 1024 / 1024).toFixed(2)} MB`);
      console.log(`Total: ${(memoryInfo.totalJSHeapSize / 1024 / 1024).toFixed(2)} MB`);
      console.log(`Limit: ${(memoryInfo.jsHeapSizeLimit / 1024 / 1024).toFixed(2)} MB`);
      console.groupEnd();
    }
    
    return memoryInfo;
  }
  
  return null;
}

export const usePerformanceMonitor = (enabled: boolean = true) => {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;
    
    // 监控 Web Vitals
    getCLS(sendToAnalytics);
    getINP(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);
    
    // 监控自定义指标
    const customMetrics = measureCustomMetrics();
    
    // 监控内存使用情况
    const memoryUsage = measureMemoryUsage();
    
    // 定期监控内存使用情况（每30秒）
    const memoryMonitorInterval = setInterval(() => {
      measureMemoryUsage();
    }, 30000);
    
    // 页面可见性变化时的性能监控
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        measureCustomMetrics();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // 清理
    return () => {
      clearInterval(memoryMonitorInterval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [enabled]);
};

// 单独的Web Vitals监控Hook
export const useWebVitals = (callback?: (metric: WebVitalsMetric) => void) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleMetric = (metric: WebVitalsMetric) => {
      sendToAnalytics(metric);
      callback?.(metric);
    };
    
    getCLS(handleMetric);
    getINP(handleMetric);
    getFCP(handleMetric);
    getLCP(handleMetric);
    getTTFB(handleMetric);
  }, [callback]);
};

// 性能预算检查
export const checkPerformanceBudget = () => {
  if (typeof window === 'undefined') return;
  
  const budget = {
    maxBundleSize: 250, // KB
    maxImageSize: 500, // KB
    maxFCP: 2000, // ms
    maxLCP: 3000, // ms
  };
  
  // 检查资源大小
  if ('performance' in window) {
    const resources = performance.getEntriesByType('resource');
    
    resources.forEach((resource: any) => {
      if (resource.transferSize) {
        const sizeKB = resource.transferSize / 1024;
        
        if (resource.name.includes('.js') && sizeKB > budget.maxBundleSize) {
          console.warn(`⚠️ Large JS bundle detected: ${resource.name} (${sizeKB.toFixed(2)} KB)`);
        }
        
        if (resource.name.match(/\.(jpg|jpeg|png|gif|webp)/) && sizeKB > budget.maxImageSize) {
          console.warn(`⚠️ Large image detected: ${resource.name} (${sizeKB.toFixed(2)} KB)`);
        }
      }
    });
  }
};

export default usePerformanceMonitor; 