import { Container } from '@/components/layout/Container';
import { TextLink } from '@/components/ui/TextLink';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container className="text-center">
        <h1 className="text-text-primary font-[200] text-5xl md:text-7xl tracking-[-0.02em]">
          404
        </h1>
        <p className="mt-4 text-text-primary/50 font-[300] text-base">
          This page doesn&apos;t exist.
        </p>
        <div className="mt-8">
          <TextLink href="/">Back to home</TextLink>
        </div>
      </Container>
    </div>
  );
}
