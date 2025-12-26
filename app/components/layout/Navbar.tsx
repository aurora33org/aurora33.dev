'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Sparkles, Menu, X } from 'lucide-react';
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
          ? 'border-b border-[var(--text-muted)]/20 bg-[var(--bg)]/80 backdrop-blur-md shadow-lg'
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

      <div className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-syne font-bold">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--contrast)] text-white transition-colors">
            <Sparkles size={18} fill="currentColor" />
          </div>
          <span>
            AURORA33<span className="text-[var(--text-muted)]">.DEV</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
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
          className="md:hidden"
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
            className="border-t border-[var(--text-muted)]/20 bg-[var(--bg)] md:hidden"
          >
            <div className="container-custom flex flex-col gap-4 py-6">
              <Link
                href="#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold"
              >
                {t.nav.services}
              </Link>
              <Link
                href="#portfolio"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold"
              >
                {t.nav.portfolio}
              </Link>
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold"
              >
                {t.nav.contact}
              </Link>
              <div className="flex items-center gap-4 border-t border-[var(--text-muted)]/20 pt-4">
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="flex items-center gap-2"
                >
                  {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                  <span className="text-sm">Theme</span>
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLanguage('en')}
                    className={language === 'en' ? 'font-bold' : ''}
                  >
                    EN
                  </button>
                  <span>/</span>
                  <button
                    onClick={() => setLanguage('es')}
                    className={language === 'es' ? 'font-bold' : ''}
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
