'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
  separator?: React.ReactNode;
  showHome?: boolean;
}

// 路径映射配置
const pathLabels: Record<string, string> = {
  '/': '首页',
  '/about': '关于我们',
  '/services': '服务方案',
  '/products': '产品展示',
  '/cases': '成功案例',
  '/news': '新闻资讯',
  '/contact': '联系我们',
  '/careers': '加入我们',
  '/privacy': '隐私政策',
  '/terms': '服务条款',
};

export function Breadcrumb({
  items,
  className,
  separator = '/',
  showHome = true,
}: BreadcrumbProps) {
  const pathname = usePathname();

  // 如果没有提供 items，则根据当前路径自动生成
  const breadcrumbItems = items || generateBreadcrumbItems(pathname, showHome);

  if (breadcrumbItems.length <= 1 && !showHome) {
    return null;
  }

  return (
    <nav
      className={cn(
        'flex items-center space-x-2 text-sm text-gray-600',
        className
      )}
      aria-label="面包屑导航"
    >
      {breadcrumbItems.map((item, index) => {
        const isLast = index === breadcrumbItems.length - 1;
        
        return (
          <React.Fragment key={index}>
            {index > 0 && (
              <span className="text-gray-400 mx-2" aria-hidden="true">
                {separator}
              </span>
            )}
            
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={cn(
                  isLast ? 'text-gray-900 font-medium' : 'text-gray-600'
                )}
                aria-current={isLast ? 'page' : undefined}
              >
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

// 根据路径自动生成面包屑项目
function generateBreadcrumbItems(pathname: string, showHome: boolean): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [];
  
  // 添加首页
  if (showHome) {
    items.push({ label: '首页', href: '/' });
  }
  
  // 如果是首页，直接返回
  if (pathname === '/') {
    return showHome ? items : [{ label: '首页' }];
  }
  
  // 分割路径并生成面包屑
  const pathSegments = pathname.split('/').filter(Boolean);
  let currentPath = '';
  
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === pathSegments.length - 1;
    
    // 获取标签名称
    const label = pathLabels[currentPath] || formatSegment(segment);
    
    items.push({
      label,
      href: isLast ? undefined : currentPath,
    });
  });
  
  return items;
}

// 格式化路径段为可读标签
function formatSegment(segment: string): string {
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// 预设的面包屑组件变体
export function PageBreadcrumb({ className }: { className?: string }) {
  return (
    <div className={cn('py-4 border-b border-gray-100', className)}>
      <div className="container mx-auto px-4">
        <Breadcrumb />
      </div>
    </div>
  );
}

export default Breadcrumb;