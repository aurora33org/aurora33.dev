'use client';

import { motion } from 'framer-motion';
import { cn } from '@/app/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className={cn(
        'rounded-2xl border border-[var(--text-muted)]/20 bg-[var(--bg)] p-6 transition-shadow',
        hover && 'hover:shadow-xl',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
