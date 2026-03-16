'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NAV_LINKS } from '@/lib/constants';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 md:h-20 flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
          scrolled
            ? 'bg-bg-primary/85 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <Link
          href="/"
          className="font-normal text-sm md:text-base tracking-[0.15em]"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-text-primary">Noonan</span>
          <span className="text-accent">Media</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-primary/60 font-poppins font-[200] text-sm tracking-[0.06em] hover:text-text-primary/90 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`block w-5 h-px bg-text-primary/60 transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[3px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-text-primary/60 transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[3px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-bg-primary flex flex-col items-center justify-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-text-primary/60 font-[200] text-2xl tracking-[0.06em] hover:text-text-primary/90 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
