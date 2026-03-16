import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { ContactForm } from '@/components/ui/ContactForm';
import { SOCIAL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Noonan Media for video, photo, and creative projects.',
};

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <Container className="max-w-[560px]">
        <AnimateIn className="text-center mb-12 md:mb-16">
          <h1 className="text-text-primary font-normal text-3xl md:text-5xl tracking-[-0.01em]">
            Let&apos;s work together
          </h1>
          <p className="mt-4 text-text-primary/60 font-normal text-base">
            Tell me about your project.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <ContactForm />
        </AnimateIn>

        {/* Alternative contact */}
        <AnimateIn delay={0.2}>
          <div className="mt-20 text-center">
            <p className="text-text-primary/40 font-poppins font-[200] text-[13px] mb-4">
              Or reach out directly
            </p>
            <div className="flex flex-col items-center gap-3">
              <a
                href="mailto:hahnlinnoonan@gmail.com"
                className="text-text-primary font-[300] text-base underline decoration-accent/40 underline-offset-4 hover:decoration-accent/80 transition-all duration-200"
              >
                hahnlinnoonan@gmail.com
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary font-[300] text-base underline decoration-accent/40 underline-offset-4 hover:decoration-accent/80 transition-all duration-200"
              >
                {SOCIAL.instagramHandle}
              </a>
            </div>
          </div>
        </AnimateIn>
      </Container>
    </div>
  );
}
