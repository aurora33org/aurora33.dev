'use client';

import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '@/app/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium" htmlFor={props.id}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full rounded-lg border-2 border-[var(--text-muted)]/30 bg-transparent px-4 py-3 text-[var(--text)] transition-colors focus:border-[var(--contrast)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-red-500',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
