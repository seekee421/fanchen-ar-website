import React from 'react';
import { cn } from '@/lib/utils';

// Heading Component
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'default' | 'primary' | 'secondary' | 'muted';
  children: React.ReactNode;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, as: Component = 'h2', size = 'lg', weight = 'semibold', color = 'default', children, ...props }, ref) => {
    const baseStyles = 'font-display leading-tight';
    
    const sizes = {
      xs: 'text-lg',
      sm: 'text-xl',
      md: 'text-2xl',
      lg: 'text-3xl',
      xl: 'text-4xl',
      '2xl': 'text-5xl',
      '3xl': 'text-6xl',
      '4xl': 'text-7xl',
    };
    
    const weights = {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    };
    
    const colors = {
      default: 'text-gray-900',
      primary: 'text-primary',
      secondary: 'text-gray-600',
      muted: 'text-gray-500',
    };
    
    return (
      <Component
        className={cn(baseStyles, sizes[size], weights[weight], colors[color], className)}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = 'Heading';

// Paragraph Component
export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'default' | 'primary' | 'secondary' | 'muted';
  children: React.ReactNode;
}

export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size = 'md', color = 'default', children, ...props }, ref) => {
    const baseStyles = 'leading-relaxed';
    
    const sizes = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    };
    
    const colors = {
      default: 'text-gray-700',
      primary: 'text-primary',
      secondary: 'text-gray-600',
      muted: 'text-gray-500',
    };
    
    return (
      <p
        className={cn(baseStyles, sizes[size], colors[color], className)}
        ref={ref}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = 'Paragraph';

// Link Component
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'muted';
  underline?: boolean;
  children: React.ReactNode;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant = 'primary', underline = false, children, ...props }, ref) => {
    const baseStyles = 'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-sm';
    
    const variants = {
      default: 'text-gray-700 hover:text-gray-900 focus:ring-gray-500',
      primary: 'text-primary hover:text-primary-dark focus:ring-primary/50',
      secondary: 'text-gray-600 hover:text-gray-800 focus:ring-gray-500',
      muted: 'text-gray-500 hover:text-gray-700 focus:ring-gray-500',
    };
    
    const underlineStyles = underline ? 'underline underline-offset-2' : 'hover:underline';
    
    return (
      <a
        className={cn(baseStyles, variants[variant], underlineStyles, className)}
        ref={ref}
        {...props}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = 'Link';

// Text Component (for inline text)
export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'default' | 'primary' | 'secondary' | 'muted' | 'white';
  children: React.ReactNode;
}

export const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  ({ className, size = 'md', weight = 'normal', color = 'default', children, ...props }, ref) => {
    const sizes = {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    };
    
    const weights = {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    };
    
    const colors = {
      default: 'text-gray-900',
      primary: 'text-primary',
      secondary: 'text-gray-600',
      muted: 'text-gray-500',
      white: 'text-white',
    };
    
    return (
      <span
        className={cn(sizes[size], weights[weight], colors[color], className)}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Text.displayName = 'Text';