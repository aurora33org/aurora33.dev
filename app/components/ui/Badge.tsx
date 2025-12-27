import { cn } from '@/app/lib/utils';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-[var(--text-muted)]/30 px-4 py-1.5 text-sm font-medium text-[var(--text-muted)]',
        className
      )}
    >
      {children}
    </span>
  );
}
