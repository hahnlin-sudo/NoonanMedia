export const COLORS = {
  bgPrimary: '#0B0B0B',
  bgElevated: '#111111',
  textPrimary: '#FAFAFA',
  accent: '#C9A84C',
} as const;

export const ANIMATION = {
  scrollReveal: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] },
  },
  staggerChildren: 0.08,
  imageHover: {
    scale: 1.02,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
} as const;

export const YOUTUBE_SHOWREEL_ID = '3C8fJaZ7eQY';

export const SOCIAL = {
  instagram: 'https://instagram.com/hahnlin.music',
  instagramHandle: '@hahnlin.music',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const CREDIBILITY_LOGOS = [
  { name: 'Warner Music', width: 120 },
  { name: 'Grammy U', width: 80 },
  { name: 'Berklee', width: 100 },
  { name: 'Boston Conservatory', width: 140 },
] as const;
