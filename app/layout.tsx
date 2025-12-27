import type { Metadata } from 'next';
import { kangge, syne, quicksand } from './lib/fonts';
import './globals.css';
import { ThemeProvider } from './components/providers/ThemeProvider';
import { SmoothScrollProvider } from './components/providers/SmoothScrollProvider';
import { LanguageProvider } from './components/providers/LanguageProvider';
import { organizationSchema, websiteSchema } from './lib/structured-data';

export const metadata: Metadata = {
  metadataBase: new URL('https://aurora33.dev'),
  title: {
    default: 'Aurora33 | AI-Powered Engineering Solutions',
    template: '%s | Aurora33',
  },
  description:
    'We specialize in the development of tools with Artificial Intelligence. From custom LLMs to predictive analytics engines.',
  keywords: [
    'AI development',
    'artificial intelligence',
    'custom LLMs',
    'neural networks',
    'machine learning',
    'predictive analytics',
    'automation agents',
    'AI tools',
  ],
  authors: [{ name: 'Aurora33' }],
  creator: 'Aurora33',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_ES',
    url: 'https://aurora33.dev',
    siteName: 'Aurora33',
    title: 'Aurora33 | AI-Powered Engineering Solutions',
    description:
      'We specialize in the development of tools with Artificial Intelligence. From custom LLMs to predictive analytics engines.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aurora33',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurora33 | AI-Powered Engineering Solutions',
    description:
      'We specialize in the development of tools with Artificial Intelligence. From custom LLMs to predictive analytics engines.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${kangge.variable} ${syne.variable} ${quicksand.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <SmoothScrollProvider>{children}</SmoothScrollProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
