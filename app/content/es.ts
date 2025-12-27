import { Terminal, Cpu, Zap } from 'lucide-react';
import { Service, Project } from '@/app/types';
import { Content } from './en';

export const content: Content = {
  nav: {
    services: 'Servicios',
    portfolio: 'Portafolio',
    contact: 'Contacto',
    btn: 'Iniciar Proyecto',
  },
  hero: {
    badge: 'Ingeniería Potenciada por IA',
    title: 'Impulsado por IA, Perfeccionado',
    highlight: 'por Humanos',
    subtitle: 'Desarrollo y diseño web profesional',
    cta: 'Ver Portafolio',
    ctaSecondary: 'Nuestro Proceso',
  },
  services: {
    title: 'Capacidades',
    subtitle: 'Nuestra experiencia',
    items: [
      {
        id: 'custom-ai',
        title: 'Desarrollo y diseño web',
        desc: 'Creamos experiencias digitales sólidas, modernas y orientadas a resultados. Combinamos estrategia, diseño y tecnología para desarrollar sitios web rápidos, escalables y listos para crecer, integrando inteligencia artificial y buenas prácticas desde el inicio.',
        icon: Terminal,
      },
      {
        id: 'neural-networks',
        title: 'Desarrollo de Herramientas',
        desc: 'Diseñamos soluciones digitales a medida que optimizan procesos, conectan sistemas y potencian la toma de decisiones. Unimos pensamiento estratégico con ejecución ágil para crear herramientas eficientes, flexibles y preparadas para escalar.',
        icon: Cpu,
      },
      {
        id: 'automation',
        title: 'Mantenimiento y capacitación',
        desc: 'Aseguramos el rendimiento continuo de tus plataformas con soporte proactivo, optimización constante y acompañamiento técnico. Mantenemos tu operación estable, segura y en evolución, mientras tu equipo se enfoca en hacer crecer el negocio.',
        icon: Zap,
      },
    ],
  },
  portfolio: {
    title: 'Trabajos Seleccionados',
    subtitle: 'Herramientas que hemos lanzado',
    projects: [
      {
        id: 1,
        category: 'Web Development',
        title: 'Renoir',
        desc: 'Plataforma web moderna diseñada con las últimas tecnologías y mejores prácticas de desarrollo.',
        featured: true,
      },
      {
        id: 2,
        category: 'Digital Tool',
        title: 'Neon Core',
        desc: 'Herramienta digital robusta que optimiza procesos y conecta sistemas de manera eficiente.',
        featured: false,
      },
      {
        id: 3,
        category: 'Web Platform',
        title: 'Verso',
        desc: 'Solución web escalable que combina diseño intuitivo con funcionalidad avanzada.',
        featured: false,
      },
    ],
  },
  contact: {
    title: 'Construyamos',
    subtitle: 'Cuéntanos sobre tu proyecto',
    scheduleBtn: 'Agendar Videollamada',
    emailLabel: 'Escríbenos por Email',
    email: 'contacto@aurora33.org',
    name: 'Nombre',
    email_field: 'Correo Electrónico',
    mail_placeholder: 'tu@email.com',
    subject: 'Asunto',
    message: 'Cuéntanos sobre tu proyecto...',
    submit: 'Enviar Mensaje',
    sending: 'Enviando...',
    success: '¡Mensaje enviado! Te contactaremos pronto.',
    error: 'Algo salió mal. Por favor intenta de nuevo.',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
    description:
      'Potenciando empresas con soluciones de IA de vanguardia y arquitecturas neuronales personalizadas.',
    links: 'Enlaces Rápidos',
    legal: 'Legal',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Servicio',
    social: 'Síguenos',
  },
};
