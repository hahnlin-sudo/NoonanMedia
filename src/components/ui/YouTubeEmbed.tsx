'use client';

import { useState } from 'react';

export function YouTubeEmbed({
  videoId,
  className,
}: {
  videoId: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className={className}>
        <div className="relative w-full aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&color=white`}
            title="Noonan Media Showreel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border border-text-primary/[0.08] rounded-sm"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <button
        onClick={() => setPlaying(true)}
        className="relative w-full aspect-video group cursor-pointer"
        aria-label="Play showreel"
      >
        {/* YouTube thumbnail — use native img to avoid Next.js image optimization issues with YouTube */}
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt="Noonan Media Showreel"
          className="absolute inset-0 w-full h-full object-cover rounded-sm"
        />
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-bg-primary/20 group-hover:bg-bg-primary/10 transition-all duration-300 rounded-sm" />
        {/* Play button — thin white triangle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-text-primary/30 flex items-center justify-center group-hover:border-text-primary/60 transition-all duration-300">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 h-6 md:w-7 md:h-7 ml-1"
            >
              <path
                d="M8 5.14v13.72a.5.5 0 00.76.43l11.02-6.86a.5.5 0 000-.86L8.76 4.71a.5.5 0 00-.76.43z"
                fill="currentColor"
                className="text-text-primary/60 group-hover:text-text-primary/90 transition-colors duration-300"
              />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}
