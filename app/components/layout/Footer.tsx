'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '@/app/hooks/useLanguage';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[var(--text-muted)]/20 bg-[var(--bg)] py-12 dark:border-[var(--text-muted)]/5">
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

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-syne text-lg font-semibold tracking-tight">
              {t.footer.links}
            </h4>
            <ul className="space-y-2 text-sm font-medium text-[var(--text-muted)]">
              <li>
                <Link
                  href="#services"
                  className="transition-colors hover:text-[var(--contrast)]"
                >
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="transition-colors hover:text-[var(--contrast)]"
                >
                  {t.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="transition-colors hover:text-[var(--contrast)]"
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
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
        <div className="mt-12 border-t border-[var(--text-muted)]/20 pt-8 text-center text-sm text-[var(--text-muted)] dark:border-[var(--text-muted)]/5">
          <p>
            © {new Date().getFullYear()} Aurora33 Dev. {t.footer.rights}
          </p>
          <div className="mt-4 flex justify-center gap-6 font-semibold">
            <a href="#" className="transition-opacity hover:opacity-70">
              {t.footer.privacy}
            </a>
            <a href="#" className="transition-opacity hover:opacity-70">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
