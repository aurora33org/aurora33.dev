'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/hooks/useLanguage';
import { Button } from '@/app/components/ui/Button';
import { Badge } from '@/app/components/ui/Badge';
import { FadeIn } from '@/app/components/animations/FadeIn';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[var(--contrast)] opacity-10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[var(--contrast)] opacity-10 blur-3xl"
        />
      </div>

      {/* Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black)]"
        style={{
          backgroundImage: 'radial-gradient(var(--text-muted) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container-custom text-center">
        <FadeIn delay={0.2}>
          <Badge className="mb-8">
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-[var(--contrast)]" />
            {t.hero.badge}
          </Badge>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h1 className="mb-6 text-balance">
            {t.hero.title} <br />
            <span className="bg-gradient-to-r from-[var(--contrast)] to-[#d6301e] bg-clip-text text-transparent">
              {t.hero.highlight}
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-[var(--text-muted)]">
            {t.hero.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#portfolio">
              <Button size="lg" variant="primary" className="gap-2">
                {t.hero.cta} <ArrowRight size={18} />
              </Button>
            </a>
            <a href="#services">
              <Button size="lg" variant="secondary">
                {t.hero.ctaSecondary}
              </Button>
            </a>
          </div>
        </FadeIn>

        {/* Scroll Indicator */}
        <FadeIn delay={1}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-20"
          >
            <div className="mx-auto h-12 w-6 rounded-full border-2 border-[var(--text-muted)] p-1">
              <div className="mx-auto h-2 w-2 animate-pulse rounded-full bg-[var(--contrast)]" />
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
