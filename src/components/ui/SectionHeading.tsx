import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
}) => {
  return (
    <div
      className={cn(
        'max-w-3xl mb-12 sm:mb-16',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            'inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-sm border border-red-500/20 bg-red-950/20 text-[#F04444] text-xs font-semibold uppercase tracking-[0.2em]',
            align === 'center' ? 'mx-auto' : ''
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F04444] animate-pulse"></span>
          {badge}
        </div>
      )}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-wider text-white leading-tight">
        {title}
      </h2>
      <div
        className={cn(
          'w-16 h-1 bg-[#F04444] mt-3 mb-5',
          align === 'center' ? 'mx-auto' : ''
        )}
      />
      {subtitle && (
        <p className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
