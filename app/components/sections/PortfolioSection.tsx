'use client';

import { ArrowRight, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/app/hooks/useLanguage';
import { useTheme } from '@/app/hooks/useTheme';
import { FadeIn } from '@/app/components/animations/FadeIn';
import { ScaleIn } from '@/app/components/animations/ScaleIn';

export function PortfolioSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section id="portfolio" className="border-t border-[var(--text-muted)]/20 py-24 dark:border-transparent">
      <div className="container-custom">
        <div className="mb-16 flex flex-col items-end justify-between gap-4 md:flex-row">
          <div>
            <FadeIn>
              <h2 className="mb-2 text-sm font-bold uppercase tracking-widest text-[var(--contrast)]">
                {t.portfolio.title}
              </h2>
              <h3 className="font-syne text-3xl font-bold tracking-tight md:text-4xl">
                {t.portfolio.subtitle}
              </h3>
            </FadeIn>
          </div>
          <a
            href="#"
            className="flex items-center gap-1 text-sm font-bold text-[var(--text-muted)] transition-colors hover:text-[var(--contrast)]"
          >
            View all projects <ArrowRight size={14} />
          </a>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid auto-rows-[300px] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.portfolio.projects.map((project, index) => (
            <ScaleIn
              key={project.id}
              delay={index * 0.1}
              className={project.featured ? 'lg:col-span-2 lg:row-span-2' : ''}
            >
              <Link
                href={project.url || '#'}
                target={project.url ? '_blank' : undefined}
                rel={project.url ? 'noopener noreferrer' : undefined}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[var(--text-muted)]/20 transition-all duration-300 hover:border-[var(--contrast)]/50 dark:border-transparent dark:hover:border-transparent"
                >
                  {project.featured ? (
                    <>
                      {/* Featured Project */}
                      {project.image && (
                        <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-95"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        </div>
                      )}
                      <div className="absolute right-8 top-8 z-10">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/50 backdrop-blur-sm">
                          <ArrowRight
                            size={20}
                            className="-rotate-45 text-white transition-transform duration-300 group-hover:rotate-0"
                          />
                        </div>
                      </div>
                      <div className="relative z-10 flex h-full flex-col justify-end p-8">
                        <span className="mb-2 font-mono text-sm text-[var(--contrast)]">
                          {project.category}
                        </span>
                        <h4 className="mb-4 font-syne text-3xl font-bold text-white">
                          {project.title}
                        </h4>
                        <p className="max-w-md text-white/80">
                          {project.desc}
                        </p>
                      </div>
                      <div
                        className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gradient-to-br from-[var(--contrast)]/20 to-orange-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                      />
                    </>
                  ) : (
                    <>
                      {/* Regular Project */}
                      {project.image && (
                        <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover opacity-70 transition-all duration-300 group-hover:scale-105 group-hover:opacity-95"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
                        </div>
                      )}
                      <div className="relative z-10 flex h-full flex-col justify-between p-8">
                        <div className="flex items-start justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-[var(--contrast)]">
                            {project.category}
                          </span>
                          <ArrowRight className="h-5 w-5 text-white/70 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                        <div>
                          <h4 className="mb-2 font-syne text-xl font-bold text-white transition-colors group-hover:text-[var(--contrast)]">
                            {project.title}
                          </h4>
                          <p className="text-sm text-white/70">
                            {project.desc}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              </Link>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}
