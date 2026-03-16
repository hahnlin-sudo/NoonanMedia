import { AnimateIn } from '@/components/ui/AnimateIn';
import { GoldRule } from '@/components/ui/GoldRule';
import { YouTubeEmbed } from '@/components/ui/YouTubeEmbed';
import { TextLink } from '@/components/ui/TextLink';
import { CredibilityBar } from '@/components/ui/CredibilityBar';
import { YOUTUBE_SHOWREEL_ID } from '@/lib/constants';
import { photos } from '@/data/projects';
import { PhotoGrid } from '@/components/gallery/PhotoGrid';

export default function HomePage() {
  return (
    <>
      {/* Hero — Showreel */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
        <AnimateIn className="flex flex-col items-center w-full max-w-[960px]">
          <YouTubeEmbed
            videoId={YOUTUBE_SHOWREEL_ID}
            className="w-full"
          />

          <p className="mt-8 text-text-primary/80 font-normal text-base md:text-lg tracking-[0.01em]">
            Professional Photo &amp; Video for Musicians — Boston
          </p>

          <GoldRule className="mt-6 mx-auto" />
        </AnimateIn>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-text-primary/30">
            <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* Credibility Bar */}
      <section className="py-16 md:py-24">
        <AnimateIn className="flex flex-col items-center mb-12 md:mb-16">
          <p className="text-text-primary font-normal text-3xl md:text-5xl tracking-[-0.02em] text-center leading-tight">
            4.4M+ views across platforms
          </p>
          <GoldRule className="mt-4 mx-auto" />
        </AnimateIn>
        <CredibilityBar />
        <div className="flex justify-center mt-10">
          <GoldRule className="mx-auto" />
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-24 md:py-32">
        <div className="px-6 md:px-12 mb-12 md:mb-16">
          <AnimateIn>
            <h2 className="text-text-primary font-normal text-3xl md:text-5xl tracking-[-0.01em]">
              Selected Work
            </h2>
          </AnimateIn>
        </div>

        <PhotoGrid photos={photos} />
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <AnimateIn className="flex flex-col items-center">
          <h2 className="text-accent font-normal text-3xl md:text-4xl tracking-[-0.01em] mb-6">
            Let&apos;s work together
          </h2>
          <TextLink href="/contact" className="text-base">
            Get in touch
          </TextLink>
        </AnimateIn>
      </section>
    </>
  );
}
