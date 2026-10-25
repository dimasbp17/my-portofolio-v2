import type { Variants } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

// parent: anak-anaknya muncul bergantian
export const stagger = (delayChildren = 0, staggerChildren = 0.12): Variants => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren } },
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

// props untuk section yang animasinya jalan saat di-scroll (sekali saja)
export const revealOnScroll = {
  initial: 'hidden',
  whileInView: 'show',
  viewport: { once: true, amount: 0.2 },
} as const;

export const hoverLift = {
  whileHover: { y: -4 },
  transition: { type: 'spring', stiffness: 300, damping: 20 },
} as const;
