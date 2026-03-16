import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { GoldRule } from '@/components/ui/GoldRule';
import { TextLink } from '@/components/ui/TextLink';

export const metadata: Metadata = {
  title: 'About',
  description: 'Hahnlin Noonan — musician, videographer, and photographer based in Boston.',
};

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <Container className="max-w-[680px]">
        <AnimateIn>
          <p className="text-accent/60 font-poppins font-[200] text-xs uppercase tracking-[0.12em] mb-4">
            About
          </p>
          <h1 className="text-text-primary font-normal text-3xl md:text-[40px] tracking-[-0.01em] leading-tight">
            Hahnlin Noonan
          </h1>
          <GoldRule className="mt-5 mb-10" />
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="space-y-5 text-text-primary/75 font-normal text-[15px] md:text-base leading-[1.8] tracking-[0.01em]">
            <p>
              I&apos;m a musician first. Fifteen years of piano and 6 years of
              guitar mean I understand the music I&apos;m filming—which means I
              know which moments matter the most and how to capture them best.
            </p>
            <p>
              At NoonanMedia, I bring my musical expertise behind the camera. I
              shoot studio sessions and live performances, and I create artist
              portraits for independent musicians who care about how their work
              looks as much as they care about how it sounds. Over the past three
              years, I&apos;ve completed over 50 professional sessions and built
              a body of work that&apos;s reached millions of viewers.
            </p>
            <p>
              I&apos;m currently a senior at Berklee College of Music studying
              Music Business. When I&apos;m not behind the lens or on stage,
              I&apos;m probably on my computer, building something new.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="mt-12 pt-8 border-t border-text-primary/[0.06]">
            <p className="text-text-primary/40 font-poppins font-[200] text-sm mb-6">
              Based in Boston
            </p>
            <TextLink href="/contact">Get in touch</TextLink>
          </div>
        </AnimateIn>
      </Container>
    </div>
  );
}
