'use client';

import { useState } from 'react';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { Lightbox } from '@/components/ui/Lightbox';
import { ANIMATION } from '@/lib/constants';
import type { Photo } from '@/data/projects';

export function PhotoGrid({ photos }: { photos: Photo[] }) {
  const [activePhoto, setActivePhoto] = useState<Photo | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-[2px]">
        {photos.map((photo, i) => (
          <AnimateIn key={photo.id} delay={i * ANIMATION.staggerChildren} className="flex">
            <button
              onClick={() => setActivePhoto(photo)}
              className="relative w-full aspect-square overflow-hidden group cursor-pointer"
            >
              <img
                src={photo.src}
                alt={`${photo.artist} — ${photo.caption}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                style={photo.crop ? { objectPosition: photo.crop } : undefined}
                loading={i < 6 ? 'eager' : 'lazy'}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-bg-primary/0 group-hover:bg-bg-primary/40 transition-all duration-300 flex items-end p-5 md:p-7">
                <div className="text-left opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <p className="text-text-primary font-poppins font-[300] text-sm tracking-[0.02em]">
                    {photo.artist}
                  </p>
                  <p className="text-text-primary/50 font-poppins font-[200] text-xs tracking-[0.04em] mt-0.5">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </button>
          </AnimateIn>
        ))}
      </div>

      <Lightbox
        photo={activePhoto}
        photos={photos}
        onClose={() => setActivePhoto(null)}
        onNavigate={(photo) => setActivePhoto(photo)}
      />
    </>
  );
}
