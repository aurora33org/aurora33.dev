import { Syne, Quicksand } from 'next/font/google';
// import localFont from 'next/font/local';

// Fuente local Kangge - DESCOMENTARY cuando tengas los archivos de fuente
// IMPORTANTE: El usuario debe proporcionar los archivos kangge-bold.woff y kangge-bold.ttf
// y colocarlos en app/fonts/ y public/fonts/
// export const kangge = localFont({
//   src: [
//     {
//       path: '../fonts/kangge-bold.woff',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-kangge',
//   display: 'swap',
//   fallback: ['system-ui', 'sans-serif'],
// });

// Usando Syne Bold como alternativa temporal a Kangge
export const kangge = Syne({
  subsets: ['latin'],
  weight: ['800'],
  variable: '--font-kangge',
  display: 'swap',
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
