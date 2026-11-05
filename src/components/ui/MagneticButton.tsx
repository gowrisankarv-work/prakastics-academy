import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  strength?: number;
  icon?: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  strength = 0.35,
  icon,
  asAnchor = false,
  href,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const x = (clientX - centerX) * strength;
    const y = (clientY - centerY) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary:
      'bg-[#F04444] text-white hover:bg-[#DC2626] shadow-lg shadow-red-950/40 hover:shadow-red-600/30 border border-red-500/30',
    secondary:
      'bg-[#171717] text-white hover:bg-[#202020] border border-[#2B2B2B] hover:border-red-500/50 shadow-md',
    outline:
      'bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/5',
    ghost:
      'bg-transparent text-neutral-300 hover:text-white hover:bg-white/5',
  };

  const sizeStyles = {
    sm: 'text-xs uppercase tracking-wider py-2 px-4 font-semibold gap-1.5',
    md: 'text-sm uppercase tracking-wider py-3.5 px-6 font-semibold gap-2',
    lg: 'text-base uppercase tracking-wider py-4 px-8 font-bold gap-2.5',
  };

  const baseClasses = cn(
    'relative inline-flex items-center justify-center font-display rounded-sm transition-all duration-200 cursor-pointer select-none active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const motionProps = {
    animate: { x: position.x, y: position.y },
    transition: { type: 'spring' as const, stiffness: 220, damping: 14, mass: 0.1 },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };

  if (asAnchor && href) {
    return (
      <motion.a
        ref={buttonRef as React.Ref<HTMLAnchorElement>}
        href={href}
        className={baseClasses}
        {...motionProps}
      >
        <span>{children}</span>
        {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={buttonRef as React.Ref<HTMLButtonElement>}
      className={baseClasses}
      {...motionProps}
      {...(props as any)}
    >
      <span>{children}</span>
      {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
    </motion.button>
  );
};
