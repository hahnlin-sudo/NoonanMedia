import Link from 'next/link';
import { cn } from '@/lib/utils';

export function TextLink({
  href,
  children,
  external = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}) {
  const classes = cn(
    'text-text-primary font-poppins font-[300] text-sm tracking-[0.08em] underline decoration-accent/40 underline-offset-4 hover:decoration-accent/80 transition-all duration-200',
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
