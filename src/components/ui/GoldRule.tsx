import { cn } from '@/lib/utils';

export function GoldRule({
  width = 48,
  className,
}: {
  width?: number;
  className?: string;
}) {
  return (
    <div
      className={cn('h-px bg-accent/40', className)}
      style={{ width }}
    />
  );
}
