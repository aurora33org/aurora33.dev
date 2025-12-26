'use client';

import { forwardRef, TextareaHTMLAttributes } from 'react';
import { cn } from '@/app/lib/utils';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium" htmlFor={props.id}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            'w-full resize-none rounded-lg border-2 border-[var(--text-muted)]/30 bg-transparent px-4 py-3 text-[var(--text)] transition-colors focus:border-[var(--contrast)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-red-500',
            className
          )}
          rows={6}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
