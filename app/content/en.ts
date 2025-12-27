import { Terminal, Cpu, Zap } from 'lucide-react';
import { Service, Project } from '@/app/types';

export interface Content {
  nav: {
    services: string;
    portfolio: string;
    contact: string;
    btn: string;
  };
  hero: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: Service[];
  };
  portfolio: {
    title: string;
    subtitle: string;
    projects: Project[];
  };
  contact: {
    title: string;
    subtitle: string;
    scheduleBtn: string;
    emailLabel: string;
    email: string;
    name: string;
    email_field: string;
    mail_placeholder: string;
    subject: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
  footer: {
    rights: string;
    description: string;
    links: string;
    legal: string;
    privacy: string;
    terms: string;
    social: string;
  };
}

export const content: Content = {
  nav: {
    services: 'Services',
    portfolio: 'Portfolio',
    contact: 'Contact',
    btn: 'Start Project',
  },
  hero: {
    badge: 'Professional web development and design',
    title: 'AI-Powered,',
    highlight: 'Perfected by Humans',
    subtitle: '',
    cta: 'Explore Portfolio',
    ctaSecondary: 'View Tool',
  },
  services: {
    title: 'Capabilities',
    subtitle: 'Our expertise',
    items: [
      {
        id: 'custom-ai',
        title: 'Web Development and Design',
        desc: 'We create solid, modern, and results-driven digital experiences. We combine strategy, design, and technology to build fast, scalable websites ready to grow, integrating artificial intelligence and best practices from the start.',
        icon: Terminal,
      },
      {
        id: 'neural-networks',
        title: 'Tool Development',
        desc: 'We design custom digital solutions that optimize processes and empower decision-making. We unite strategic thinking with agile execution to create efficient, flexible tools ready to scale.',
        icon: Cpu,
      },
      {
        id: 'automation',
        title: 'Maintenance and Training',
        desc: 'We ensure continuous performance of your platforms with proactive support, constant maintenance, and technical guidance. We keep your operation stable, secure, and evolving while your team focuses on growing the business.',
        icon: Zap,
      },
    ],
  },
  portfolio: {
    title: 'Selected Work',
    subtitle: "Projects we've shipped",
    projects: [
      {
        id: 1,
        category: 'Website',
        title: 'Renoir',
        desc: 'Website for a boutique hotel that communicates luxury, art, and hospitality through a refined visual experience.',
        featured: true,
        url: 'https://renoir.aurora33.dev/',
      },
      {
        id: 2,
        category: 'Website',
        title: 'Neon Core',
        desc: 'Fashion website with futuristic aesthetics and a focus on visual identity and urban style.',
        featured: false,
        url: 'https://neon-core.aurora33.site/',
      },
      {
        id: 3,
        category: 'Website',
        title: 'Verso',
        desc: 'Website for an event space, designed to highlight elegance, ambiance, and versatility.',
        featured: false,
        url: 'https://verso.aurora33.site/',
      },
    ],
  },
  contact: {
    title: "Let's Build",
    subtitle: 'Tell us about your project',
    scheduleBtn: 'Schedule Video Call',
    emailLabel: 'Email Us',
    email: 'hello@aurora33.org',
    name: 'Name',
    email_field: 'Email',
    mail_placeholder: 'your@email.com',
    subject: 'Subject',
    message: 'Tell us about your project...',
    submit: 'Send Message',
    sending: 'Sending...',
    success: "Message sent successfully! We'll get back to you soon.",
    error: 'Something went wrong. Please try again.',
  },
  footer: {
    rights: 'All rights reserved.',
    description:
      'Empowering businesses with cutting-edge AI solutions and custom neural architectures.',
    links: 'Our Tools',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    social: 'Follow Us',
  },
};
