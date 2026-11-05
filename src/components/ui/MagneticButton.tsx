import React from 'react';
import { cn } from '@/lib/utils';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
  strength?: number; // Kept for backwards compatibility
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  icon,
  asAnchor = false,
  href,
  strength: _strength,
  ...props
}) => {
  const variantStyles = {
    primary:
      'bg-[#F04444] text-white hover:bg-[#DC2626] border border-red-500/40 shadow-lg shadow-red-950/50 hover:shadow-[0_0_25px_rgba(240,68,68,0.45)] hover:border-red-400',
    secondary:
      'bg-[#141414] text-white hover:bg-[#1E1E1E] border border-[#2B2B2B] hover:border-red-500/60 shadow-md hover:shadow-[0_0_20px_rgba(240,68,68,0.25)]',
    outline:
      'bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]',
    ghost:
      'bg-transparent text-neutral-300 hover:text-white hover:bg-white/5',
  };

  const sizeStyles = {
    sm: 'text-xs uppercase tracking-wider py-2.5 px-4 font-semibold gap-1.5',
    md: 'text-sm uppercase tracking-wider py-3.5 px-6 font-semibold gap-2',
    lg: 'text-base uppercase tracking-wider py-4 px-8 font-bold gap-2.5',
  };

  const baseClasses = cn(
    'group relative inline-flex items-center justify-center font-display rounded-sm select-none cursor-pointer',
    'transition-all duration-200 ease-out transform-gpu',
    'hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]',
    'motion-reduce:transform-none motion-reduce:transition-none',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (asAnchor && href) {
    return (
      <a href={href} className={baseClasses}>
        <span>{children}</span>
        {icon && (
          <span className="inline-flex items-center transition-transform duration-200 ease-out group-hover:translate-x-1 shrink-0">
            {icon}
          </span>
        )}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      <span>{children}</span>
      {icon && (
        <span className="inline-flex items-center transition-transform duration-200 ease-out group-hover:translate-x-1 shrink-0">
          {icon}
        </span>
      )}
    </button>
  );
};
