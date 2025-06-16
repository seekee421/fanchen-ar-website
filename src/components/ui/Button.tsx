import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, asChild = false, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary/50 shadow-md hover:shadow-lg',
      secondary: 'bg-secondary text-primary hover:bg-secondary-dark focus:ring-secondary/50',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary/50',
      ghost: 'text-primary hover:bg-primary/10 focus:ring-primary/50',
    };
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
      xl: 'px-8 py-4 text-xl',
    };
    
    const classNames = cn(baseStyles, variants[variant], sizes[size], className);
    
    if (asChild) {
      return React.cloneElement(
        React.Children.only(children) as React.ReactElement,
        {
          className: cn(classNames, (children as React.ReactElement).props?.className as string),
          ref,
          ...props,
        }
      );
    }
    
    return (
      <button
        className={classNames}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;