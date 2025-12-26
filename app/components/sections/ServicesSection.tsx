'use client';

import { useLanguage } from '@/app/hooks/useLanguage';
import { useTheme } from '@/app/hooks/useTheme';
import { Card } from '@/app/components/ui/Card';
import { FadeIn } from '@/app/components/animations/FadeIn';
import { SlideIn } from '@/app/components/animations/SlideIn';

export function ServicesSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section id="services" className="border-t border-[var(--text-muted)]/20 py-24">
      <div className="container-custom">
        <FadeIn>
          <div className="mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--contrast)] mb-2">
              {t.services.title}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight font-syne">
              {t.services.subtitle}
            </h3>
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon = service.icon;
            return (
              <SlideIn key={service.id} delay={index * 0.1} direction="up">
                <Card className="group text-center">
                  <div
                    className={`mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-lg transition-colors ${
                      theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-100'
                    } group-hover:bg-[var(--contrast)] group-hover:text-white`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="mb-3 text-xl font-bold font-syne">{service.title}</h4>
                  <p className="leading-relaxed text-[var(--text-muted)]">
                    {service.desc}
                  </p>
                </Card>
              </SlideIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
