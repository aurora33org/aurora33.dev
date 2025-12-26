'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/app/hooks/useTheme';
import { useLanguage } from '@/app/hooks/useLanguage';

export function FloatingControls() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed right-6 top-6 z-50 flex items-center gap-3">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--bg)] border border-[var(--text-muted)]/20 shadow-lg backdrop-blur-sm transition-all hover:border-[var(--contrast)] hover:shadow-xl"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
      </button>

      {/* Language Toggle */}
      <div className="flex items-center gap-1 rounded-full bg-[var(--bg)] border border-[var(--text-muted)]/20 px-3 py-2 shadow-lg backdrop-blur-sm">
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
  );
}
