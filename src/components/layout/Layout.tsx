'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import { PageBreadcrumb } from '../ui/Breadcrumb';
import { Container } from '../ui';

interface LayoutProps {
  children: React.ReactNode;
  showBreadcrumb?: boolean;
}

export function Layout({ children, showBreadcrumb = true }: LayoutProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isMounted, setIsMounted] = useState(false);
  
  // 确保组件已挂载，避免 hydration 错误
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 在组件未挂载时返回静态版本
  if (!isMounted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <motion.main
        className="flex-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
      
      <Footer />
    </div>
  );
}

export default Layout;