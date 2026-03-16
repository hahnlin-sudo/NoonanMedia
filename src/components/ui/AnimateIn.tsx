'use client';

import { motion } from 'framer-motion';
import { ANIMATION } from '@/lib/constants';

export function AnimateIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={ANIMATION.scrollReveal.initial}
      whileInView={ANIMATION.scrollReveal.animate}
      viewport={{ once: true, margin: '-10%' }}
      transition={{
        ...ANIMATION.scrollReveal.transition,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
