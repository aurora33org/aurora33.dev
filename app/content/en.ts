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
    badge: 'AI-Powered Engineering',
    title: 'Building the next generation of',
    highlight: 'AI Tools.',
    subtitle:
      'We specialize in the development of tools with Artificial Intelligence. From custom LLMs to predictive analytics engines.',
    cta: 'Explore Portfolio',
    ctaSecondary: 'Our Process',
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
        desc: 'We design custom digital solutions that optimize processes, connect systems, and empower decision-making. We unite strategic thinking with agile execution to create efficient, flexible tools ready to scale.',
        icon: Cpu,
      },
      {
        id: 'automation',
        title: 'Maintenance and Training',
        desc: 'Autonomous agents that handle workflows and data processing 24/7.',
        icon: Zap,
      },
    ],
  },
  portfolio: {
    title: 'Selected Work',
    subtitle: "Tools we've shipped",
    projects: [
      {
        id: 1,
        category: 'FinTech AI',
        title: 'Predictive Market Analyzer',
        desc: 'An AI tool that processes 5M+ data points daily to forecast market trends with 89% accuracy.',
        featured: true,
      },
      {
        id: 2,
        category: 'Generative AI',
        title: 'Nexus Image Synthesis',
        desc: 'A custom stable-diffusion based engine for architectural rendering generation.',
        featured: false,
      },
      {
        id: 3,
        category: 'NLP Tool',
        title: 'Legal Document Parser',
        desc: 'Automated contract review system reducing manual legal work by 70%.',
        featured: false,
      },
    ],
  },
  contact: {
    title: "Let's Build",
    subtitle: 'Tell us about your project',
    scheduleBtn: 'Schedule Video Call',
    emailLabel: 'Email Us',
    email: 'hello@aurora33.dev',
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
    links: 'Quick Links',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    social: 'Follow Us',
  },
};
