'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'dark';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  withContainer?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ 
    className, 
    variant = 'default', 
    padding = 'lg', 
    containerSize = 'lg',
    withContainer = true,
    children, 
    ...props 
  }, ref) => {
    const baseStyles = 'relative';
    
    const variants = {
      default: 'bg-white',
      primary: 'bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 text-white',
      secondary: 'bg-secondary',
      dark: 'bg-gray-900 text-white',
    };
    
    const paddings = {
      none: '',
      sm: 'py-8 sm:py-10',
      md: 'py-12 sm:py-14 md:py-16',
      lg: 'py-16 sm:py-20 lg:py-24',
      xl: 'py-24 sm:py-32 lg:py-40',
    };
    
    const content = withContainer ? (
      <Container size={containerSize}>
        {children}
      </Container>
    ) : children;
    
    return (
      <section
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          paddings[padding],
          className
        )}
        {...props}
      >
        {content}
      </section>
    );
  }
);

Section.displayName = 'Section';

export { Section };
export default Section;