import Link from 'next/link';
import { SOCIAL } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-text-primary/30 font-poppins font-[200] text-xs tracking-[0.06em]">
        &copy; {new Date().getFullYear()}{' '}
        <span className="text-text-primary/30">Noonan</span>
        <span className="text-accent/30">Media</span>
      </p>
      <div className="flex items-center gap-6">
        <a
          href={SOCIAL.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-primary/30 font-poppins font-[200] text-xs tracking-[0.06em] hover:text-text-primary/60 transition-colors duration-200"
        >
          {SOCIAL.instagramHandle}
        </a>
        <Link
          href="/contact"
          className="text-text-primary/30 font-poppins font-[200] text-xs tracking-[0.06em] hover:text-text-primary/60 transition-colors duration-200"
        >
          Contact
        </Link>
      </div>
    </footer>
  );
}
