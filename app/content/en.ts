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
    name: string;
    email: string;
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
    subtitle: 'Our expertise in AI Development',
    items: [
      {
        id: 'custom-ai',
        title: 'Custom AI Tools',
        desc: 'Tailored software solutions integrating OpenAI, Anthropic, or open-source models.',
        icon: Terminal,
      },
      {
        id: 'neural-networks',
        title: 'Neural Networks',
        desc: 'Deep learning architectures designed for complex pattern recognition tasks.',
        icon: Cpu,
      },
      {
        id: 'automation',
        title: 'Automation Agents',
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
      {
        id: 4,
        category: 'Healthcare',
        title: 'Diagnostic Assistant',
        desc: 'Computer vision model assisting radiologists in early anomaly detection.',
        featured: false,
      },
    ],
  },
  contact: {
    title: "Let's Build",
    subtitle: 'Ready to integrate AI into your ecosystem?',
    name: 'Name',
    email: 'Email',
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
