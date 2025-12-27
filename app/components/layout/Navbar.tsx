'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Globe, Sparkles, Menu, X } from 'lucide-react';
import { useTheme } from '@/app/hooks/useTheme';
import { useLanguage } from '@/app/hooks/useLanguage';
import { Button } from '@/app/components/ui/Button';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-[var(--text-muted)]/20 bg-[var(--bg)]/80 backdrop-blur-md shadow-lg dark:border-transparent'
          : 'bg-transparent'
      }`}
    >
      {/* Skip to main content */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[var(--contrast)] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      {/* Theme & Language Toggles - Fixed Top Right Corner */}
      <div className="fixed right-4 top-4 z-50 hidden items-center gap-3 lg:flex">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="rounded-full p-2 transition-colors hover:bg-[var(--text)]/10"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        {/* Language Toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => setLanguage('en')}
            className={`text-sm font-medium transition-colors ${
              language === 'en'
                ? 'text-[var(--contrast)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text)]'
            }`}
          >
            EN
          </button>
          <span className="text-[var(--text-muted)]">/</span>
          <button
            onClick={() => setLanguage('es')}
            className={`text-sm font-medium transition-colors ${
              language === 'es'
                ? 'text-[var(--contrast)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text)]'
            }`}
          >
            ES
          </button>
        </div>
      </div>

      <div className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/aurora-logo-full-contrast.png"
            alt="Aurora33.dev"
            width={120}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link
            href="#services"
            className="text-[var(--text)] transition-colors hover:text-[var(--contrast)]"
          >
            {t.nav.services}
          </Link>
          <Link
            href="#portfolio"
            className="text-[var(--text)] transition-colors hover:text-[var(--contrast)]"
          >
            {t.nav.portfolio}
          </Link>
          <Link
            href="#contact"
            className="text-[var(--text)] transition-colors hover:text-[var(--contrast)]"
          >
            {t.nav.contact}
          </Link>

          <Link href="#contact">
            <Button size="sm">{t.nav.btn}</Button>
          </Link>
        </div>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[var(--text-muted)]/20 bg-[var(--bg)] lg:hidden dark:border-transparent"
          >
            <div className="container-custom flex flex-col gap-4 py-6">
              <Link
                href="#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold transition-colors hover:text-[var(--contrast)]"
              >
                {t.nav.services}
              </Link>
              <Link
                href="#portfolio"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold transition-colors hover:text-[var(--contrast)]"
              >
                {t.nav.portfolio}
              </Link>
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold transition-colors hover:text-[var(--contrast)]"
              >
                {t.nav.contact}
              </Link>
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button size="sm" className="w-full">{t.nav.btn}</Button>
              </Link>
              <div className="flex items-center justify-between gap-4 border-t border-[var(--text-muted)]/20 pt-4 dark:border-transparent">
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="flex items-center gap-2 rounded-full p-2 transition-colors hover:bg-[var(--text)]/10"
                >
                  {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                  <span className="text-sm font-medium">
                    {theme === 'light' ? 'Dark' : 'Light'}
                  </span>
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`text-sm font-medium transition-colors ${
                      language === 'en'
                        ? 'text-[var(--contrast)]'
                        : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                    }`}
                  >
                    EN
                  </button>
                  <span className="text-[var(--text-muted)]">/</span>
                  <button
                    onClick={() => setLanguage('es')}
                    className={`text-sm font-medium transition-colors ${
                      language === 'es'
                        ? 'text-[var(--contrast)]'
                        : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                    }`}
                  >
                    ES
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
