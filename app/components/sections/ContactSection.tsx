'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLanguage } from '@/app/hooks/useLanguage';
import { Button } from '@/app/components/ui/Button';
import { Input } from '@/app/components/ui/Input';
import { Textarea } from '@/app/components/ui/Textarea';
import { FadeIn } from '@/app/components/animations/FadeIn';
import { ContactFormData } from '@/app/types';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export function ContactSection() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-t border-[var(--text-muted)]/20 py-24">
      <div className="container-custom max-w-3xl">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-syne text-4xl font-bold tracking-tighter md:text-5xl">
              {t.contact.title}
            </h2>
            <p className="text-xl text-[var(--text-muted)]">
              {t.contact.subtitle}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Input
                label={t.contact.name}
                {...register('name')}
                error={errors.name?.message}
                disabled={isSubmitting}
                placeholder="John Doe"
              />

              <Input
                label={t.contact.email}
                type="email"
                {...register('email')}
                error={errors.email?.message}
                disabled={isSubmitting}
                placeholder="john@example.com"
              />
            </div>

            <Textarea
              label={t.contact.message}
              {...register('message')}
              error={errors.message?.message}
              disabled={isSubmitting}
              placeholder={t.contact.message}
            />

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? t.contact.sending : t.contact.submit}
            </Button>

            {submitStatus === 'success' && (
              <p className="rounded-lg bg-green-500/10 p-4 text-center text-green-600 dark:text-green-400">
                {t.contact.success}
              </p>
            )}

            {submitStatus === 'error' && (
              <p className="rounded-lg bg-red-500/10 p-4 text-center text-red-600 dark:text-red-400">
                {t.contact.error}
              </p>
            )}
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
