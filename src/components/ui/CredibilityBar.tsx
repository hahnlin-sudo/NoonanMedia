'use client';

const LOGOS = [
  { name: 'Warner Music', src: '/images/logos/warner-music.png' },
  { name: 'Grammy U', src: '/images/logos/grammy-u.png' },
  { name: 'Boston Conservatory', src: '/images/logos/boston-conservatory.png' },
  { name: 'Berklee', src: '/images/logos/berklee.svg' },
];

// Repeat logos enough times per set to guarantee it's wider than any viewport
const REPEATED_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS];

function LogoSet({ keyPrefix }: { keyPrefix: string }) {
  return (
    <div className="flex items-center shrink-0">
      {REPEATED_LOGOS.map((logo, i) => (
        <div
          key={`${keyPrefix}-${i}`}
          className="flex-shrink-0 px-10 md:px-16 flex items-center justify-center"
        >
          <img
            src={logo.src}
            alt={logo.name}
            className="h-8 md:h-10 w-auto object-contain opacity-40 brightness-0 invert"
          />
        </div>
      ))}
    </div>
  );
}

export function CredibilityBar() {
  return (
    <div className="relative overflow-hidden py-8">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-primary to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-primary to-transparent z-10" />

      <div className="flex items-center w-max animate-scroll-x">
        <LogoSet keyPrefix="a" />
        <LogoSet keyPrefix="b" />
      </div>
    </div>
  );
}
