'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '@/app/hooks/useLanguage';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[var(--text-muted)]/20 bg-[var(--bg)] py-12 dark:border-transparent">
      <div className="container-custom">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo/aurora-logo-full-contrast.png"
                alt="Aurora33.dev"
                width={140}
                height={37}
                className="h-9 w-auto"
              />
            </div>
            <p className="max-w-sm leading-relaxed text-[var(--text-muted)]">
              {t.footer.description}
            </p>
          </div>

          {/* Nuestras Herramientas */}
          <div>
            <h4 className="mb-4 font-syne text-lg font-semibold tracking-tight">
              {t.footer.links}
            </h4>
            <a
              href="https://croma.aurora33.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--contrast)]"
            >
              Croma - optimiza, convierte y reescala imagenes
            </a>
          </div>

          {/* Social - Oculto temporalmente */}
          {/* <div>
            <h4 className="mb-4 font-syne text-lg font-semibold tracking-tight">
              {t.footer.social}
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[var(--text-muted)]/30 p-2 transition-all hover:border-[var(--contrast)] hover:text-[var(--contrast)]"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[var(--text-muted)]/30 p-2 transition-all hover:border-[var(--contrast)] hover:text-[var(--contrast)]"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[var(--text-muted)]/30 p-2 transition-all hover:border-[var(--contrast)] hover:text-[var(--contrast)]"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[var(--text-muted)]/30 p-2 transition-all hover:border-[var(--contrast)] hover:text-[var(--contrast)]"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div> */}
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-[var(--text-muted)]/20 pt-8 text-center text-sm text-[var(--text-muted)] dark:border-transparent">
          <p>
            Copyright © 2025 Aurora33. Built with love and AI
          </p>
          {/* Enlaces legales - Ocultos temporalmente */}
          {/* <div className="mt-4 flex justify-center gap-6 font-semibold">
            <a href="#" className="transition-opacity hover:opacity-70">
              {t.footer.privacy}
            </a>
            <a href="#" className="transition-opacity hover:opacity-70">
              {t.footer.terms}
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
