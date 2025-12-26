'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface SlideInProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
}

export function SlideIn({
  children,
  direction = 'left',
  delay = 0,
  duration = 0.6,
  className,
}: SlideInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const directions = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: -50 },
    down: { x: 0, y: 50 },
  };

  const initial = { opacity: 0, ...directions[direction] };
  const animate = isInView
    ? { opacity: 1, x: 0, y: 0 }
    : { opacity: 0, ...directions[direction] };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
