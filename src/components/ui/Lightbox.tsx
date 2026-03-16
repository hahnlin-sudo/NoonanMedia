'use client';

import { useEffect, useCallback } from 'react';
import type { Photo } from '@/data/projects';

interface LightboxProps {
  photo: Photo | null;
  photos: Photo[];
  onClose: () => void;
  onNavigate: (photo: Photo) => void;
}

export function Lightbox({ photo, photos, onClose, onNavigate }: LightboxProps) {
  const currentIndex = photo ? photos.findIndex((p) => p.id === photo.id) : -1;

  const goPrev = useCallback(() => {
    if (currentIndex > 0) onNavigate(photos[currentIndex - 1]);
  }, [currentIndex, photos, onNavigate]);

  const goNext = useCallback(() => {
    if (currentIndex < photos.length - 1) onNavigate(photos[currentIndex + 1]);
  }, [currentIndex, photos, onNavigate]);

  useEffect(() => {
    if (!photo) return;

    document.body.style.overflow = 'hidden';

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    }

    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [photo, onClose, goPrev, goNext]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-bg-primary/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-6 text-text-primary/50 hover:text-text-primary/80 transition-colors duration-200 z-10 cursor-pointer"
        aria-label="Close"
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </button>

      {/* Prev arrow */}
      {currentIndex > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-text-primary/30 hover:text-text-primary/70 transition-colors duration-200 cursor-pointer"
          aria-label="Previous"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {/* Next arrow */}
      {currentIndex < photos.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-text-primary/30 hover:text-text-primary/70 transition-colors duration-200 cursor-pointer"
          aria-label="Next"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        className="max-w-[90vw] max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={`${photo.artist} — ${photo.caption}`}
          className="max-w-full max-h-[75vh] object-contain"
        />
        <div className="mt-4 text-center">
          <p className="text-text-primary font-poppins font-[300] text-sm tracking-[0.02em]">
            {photo.artist}
          </p>
          <p className="text-text-primary/40 font-poppins font-[200] text-xs tracking-[0.04em] mt-1">
            {photo.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
