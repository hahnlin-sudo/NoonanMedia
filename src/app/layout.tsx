import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  display: 'swap',
  variable: '--font-poppins-var',
});

export const metadata: Metadata = {
  title: {
    default: 'Noonan Media',
    template: '%s | Noonan Media',
  },
  description: 'Music video and photography for artists. Based in Boston.',
  openGraph: {
    title: 'Noonan Media',
    description: 'Music video and photography for artists. Based in Boston.',
    url: 'https://noonanmedia.com',
    siteName: 'Noonan Media',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-myungjo antialiased bg-bg-primary text-text-primary`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
