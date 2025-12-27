'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Video, Mail, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/app/hooks/useLanguage';
import { ContactFormData } from '@/app/types';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
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
    <section id="contact" className="relative overflow-hidden border-t border-[var(--text-muted)]/20 py-24 dark:border-transparent">
      {/* Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-50 [mask-image:linear-gradient(to_top,black,transparent)] dark:opacity-20"
        style={{
          backgroundImage: 'radial-gradient(var(--text-muted) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container-custom max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Columna IZQUIERDA: Video Call CTA */}
          <div className="flex flex-col justify-center">
            <div className="mb-10">
              <h2 className="mb-6 font-syne text-5xl font-bold tracking-tighter md:text-7xl leading-[0.9]">
                {t.contact.title}
              </h2>

              <p className="mb-8 max-w-md font-quicksand text-2xl font-bold text-[var(--text-muted)]">
                {t.contact.subtitle}
              </p>

              {/* Botón Agendar Videollamada */}
              <a
                href="https://calendar.app.google/6pduKuiSuZZPWMvN6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--contrast)] p-5 text-lg font-bold text-white transition-all hover:opacity-90 group md:w-auto"
              >
                <Video size={20} className="transition-transform group-hover:scale-110" />
                {t.contact.scheduleBtn}
              </a>
            </div>

            {/* Email info */}
            <div className="space-y-4 font-quicksand">
              <p className="text-sm uppercase tracking-wide opacity-70 text-[var(--text-muted)]">
                {t.contact.emailLabel}
              </p>
              <a
                href={`mailto:${t.contact.email}`}
                className="flex items-center gap-2 text-xl font-bold transition-colors hover:text-[var(--contrast)]"
              >
                <Mail size={18} />
                {t.contact.email}
              </a>
            </div>
          </div>

          {/* Columna DERECHA: Formulario */}
          <div className="relative overflow-hidden rounded-3xl border border-[var(--text-muted)]/20 bg-[var(--bg)] p-8 md:p-10 dark:border-transparent">
            <form className="relative z-10 flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
              {/* Campo Nombre */}
              <div className="flex flex-col gap-2">
                <label className="ml-1 text-sm font-bold opacity-80 text-[var(--text-muted)]">
                  {t.contact.name}
                </label>
                <input
                  {...register('name')}
                  type="text"
                  placeholder={t.contact.name}
                  disabled={isSubmitting}
                  className="rounded-xl border-2 border-[var(--text-muted)]/50 bg-transparent p-4 font-medium outline-none transition-all focus:border-[var(--contrast)] focus:border-opacity-100 disabled:opacity-50"
                />
                {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
              </div>

              {/* Campo Email */}
              <div className="flex flex-col gap-2">
                <label className="ml-1 text-sm font-bold opacity-80 text-[var(--text-muted)]">
                  {t.contact.email_field}
                </label>
                <input
                  {...register('email')}
                  type="email"
                  placeholder={t.contact.mail_placeholder}
                  disabled={isSubmitting}
                  className="rounded-xl border-2 border-[var(--text-muted)]/50 bg-transparent p-4 font-medium outline-none transition-all focus:border-[var(--contrast)] focus:border-opacity-100 disabled:opacity-50"
                />
                {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
              </div>

              {/* Campo Asunto (NUEVO) */}
              <div className="flex flex-col gap-2">
                <label className="ml-1 text-sm font-bold opacity-80 text-[var(--text-muted)]">
                  {t.contact.subject}
                </label>
                <input
                  {...register('subject')}
                  type="text"
                  placeholder={t.contact.subject}
                  disabled={isSubmitting}
                  className="rounded-xl border-2 border-[var(--text-muted)]/50 bg-transparent p-4 font-medium outline-none transition-all focus:border-[var(--contrast)] focus:border-opacity-100 disabled:opacity-50"
                />
                {errors.subject && <span className="text-sm text-red-500">{errors.subject.message}</span>}
              </div>

              {/* Campo Mensaje */}
              <div className="flex flex-col gap-2">
                <label className="ml-1 text-sm font-bold opacity-80 text-[var(--text-muted)]">
                  {t.contact.message}
                </label>
                <textarea
                  {...register('message')}
                  rows={5}
                  placeholder={t.contact.message}
                  disabled={isSubmitting}
                  className="resize-none rounded-xl border-2 border-[var(--text-muted)]/50 bg-transparent p-4 font-medium outline-none transition-all focus:border-[var(--contrast)] focus:border-opacity-100 disabled:opacity-50"
                />
                {errors.message && <span className="text-sm text-red-500">{errors.message.message}</span>}
              </div>

              {/* Botón Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[var(--contrast)] p-5 text-lg font-bold text-white transition-all hover:opacity-90 group disabled:opacity-50"
              >
                {isSubmitting ? t.contact.sending : t.contact.submit}
                <MessageSquare size={20} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>

              {/* Mensajes de estado */}
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
          </div>
        </div>
      </div>
    </section>
  );
}
