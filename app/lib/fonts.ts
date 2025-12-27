import { Syne, Quicksand } from 'next/font/google';
import localFont from 'next/font/local';

// Fuente local Kangge
export const kangge = localFont({
  src: [
    {
      path: '../fonts/Kangge.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-kangge',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});

// Google Fonts - Syne
export const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

// Google Fonts - Quicksand
export const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
  display: 'swap',
});
