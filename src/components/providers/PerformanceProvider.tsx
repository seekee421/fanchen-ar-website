'use client';

import React, { ReactNode } from 'react';
import { usePerformanceMonitor } from '@/hooks/usePerformanceMonitor';

interface PerformanceProviderProps {
  children: ReactNode;
}

export const PerformanceProvider: React.FC<PerformanceProviderProps> = ({ children }) => {
  // 启用性能监控
  usePerformanceMonitor();

  return <>{children}</>;
}; 