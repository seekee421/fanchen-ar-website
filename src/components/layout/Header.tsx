'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Container, Button } from '@/components/ui';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInHeroSection, setIsInHeroSection] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname(); // 添加这行来获取当前路径

  // 确保组件已挂载，避免 hydration 错误
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle scroll effect and detect hero section
  useEffect(() => {
    if (!isMounted) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      setIsScrolled(scrollY > 10);
      // 只有在首页才使用Hero区域检测逻辑
      if (pathname === '/') {
        setIsInHeroSection(scrollY < 200);
      } else {
        // 对于其他页面，始终使用非Hero样式
        setIsInHeroSection(false);
      }
    };

    handleScroll(); // Check initial position
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted, pathname]); // 添加pathname依赖

  // Navigation items
  const navItems = [
    { href: '/', label: '首页' },
    { href: '/about', label: '关于我们' },
    { href: '/services', label: '服务方案' },
    { href: '/products', label: '产品展示' },
    { href: '/cases', label: '成功案例' },
    { href: '/news', label: '新闻资讯' },
    { href: '/contact', label: '联系我们' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Enhanced dynamic styling based on hero section and scroll state
  // 在 Hero 区域保持完全透明，否则使用白色半透明背景
  const headerBg = isInHeroSection 
    ? 'bg-transparent' 
    : 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100';
  
  const textColor = isInHeroSection ? 'text-white' : 'text-gray-800';
  const logoTextColor = isInHeroSection ? 'text-white' : 'text-gray-900';
  const logoSubtextColor = isInHeroSection ? 'text-white/90' : 'text-gray-600';
  const hoverColor = isInHeroSection ? 'hover:text-white/80' : 'hover:text-blue-600';

  // 在组件未挂载时返回静态版本，避免 hydration 错误
  if (!isMounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <Container>
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg lg:text-xl">FC</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl lg:text-2xl font-bold text-white">
                  凡尘合创
                </div>
                <div className="text-xs lg:text-sm -mt-1 font-medium text-white/90">
                  AR Technology
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative font-semibold text-sm lg:text-base text-white hover:text-white/80 transition-all duration-300 py-2 px-3 rounded-lg"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button variant="secondary" size="md" className="font-semibold bg-white/15 text-white border-white/30 hover:bg-white hover:text-blue-600 backdrop-blur-sm">
                免费咨询
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-3 rounded-xl text-white hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className="block h-0.5 w-6 bg-current transition-all duration-300 rounded-full -translate-y-1" />
                <span className="block h-0.5 w-6 bg-current transition-all duration-300 rounded-full" />
                <span className="block h-0.5 w-6 bg-current transition-all duration-300 rounded-full translate-y-1" />
              </div>
            </button>
          </div>
        </Container>
      </header>
    );
  }

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          headerBg
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Container>
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Enhanced Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div 
                className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white font-bold text-lg lg:text-xl">FC</span>
              </motion.div>
              <div className="hidden sm:block">
                <div className={cn(
                  "text-xl lg:text-2xl font-bold transition-all duration-300 group-hover:scale-105",
                  logoTextColor
                )}>
                  凡尘合创
                </div>
                <div className={cn(
                  "text-xs lg:text-sm -mt-1 font-medium transition-all duration-300",
                  logoSubtextColor
                )}>
                  AR Technology
                </div>
              </div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative font-semibold text-sm lg:text-base transition-all duration-300 py-2 px-3 rounded-lg",
                      textColor,
                      hoverColor,
                      "hover:bg-white/10 hover:backdrop-blur-sm"
                    )}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <motion.div
                      className="absolute inset-0 bg-blue-600/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Enhanced CTA Button */}
            <div className="hidden lg:block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant={isInHeroSection ? "secondary" : "primary"} 
                  size="md"
                  className={cn(
                    "font-semibold transition-all duration-300 shadow-lg hover:shadow-xl",
                    isInHeroSection 
                      ? "bg-white/15 text-white border-white/30 hover:bg-white hover:text-blue-600 backdrop-blur-sm"
                      : "bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700"
                  )}
                >
                  免费咨询
                </Button>
              </motion.div>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              onClick={toggleMenu}
              className={cn(
                "lg:hidden p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300",
                textColor,
                hoverColor,
                "hover:bg-white/10 hover:backdrop-blur-sm"
              )}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  className={cn(
                    'block h-0.5 w-6 bg-current transition-all duration-300 rounded-full',
                    isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                  )}
                />
                <motion.span
                  className={cn(
                    'block h-0.5 w-6 bg-current transition-all duration-300 rounded-full',
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  )}
                />
                <motion.span
                  className={cn(
                    'block h-0.5 w-6 bg-current transition-all duration-300 rounded-full',
                    isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                  )}
                />
              </div>
            </motion.button>
          </div>
        </Container>
      </motion.header>

      {/* Enhanced Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Enhanced Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={toggleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Enhanced Menu Panel */}
            <motion.div
              className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-lg shadow-2xl border-b border-gray-200"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Container>
                <nav className="py-8">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      <Link
                        href={item.href}
                        className="block py-4 px-4 text-lg font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 border-b border-gray-100 last:border-b-0"
                        onClick={toggleMenu}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    className="pt-6 mt-6 border-t border-gray-200"
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: navItems.length * 0.1, duration: 0.4 }}
                  >
                    <Button variant="primary" size="lg" className="w-full font-semibold shadow-lg">
                      免费咨询
                    </Button>
                  </motion.div>
                </nav>
              </Container>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;