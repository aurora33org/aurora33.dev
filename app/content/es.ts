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
    title: 'Impulsado por IA,',
    highlight: 'Perfeccionado por Humanos',
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
    subtitle: 'Proyectos que hemos lanzado',
    projects: [
      {
        id: 1,
        category: 'Sitio Web',
        title: 'Renoir',
        desc: 'Sitio web para un hotel boutique de lujo que fusiona arte, diseño y hospitalidad. La experiencia digital transmite sofisticación a través de una estética cuidada, destacando suites, gastronomía y bienestar como ejes principales.',
        featured: true,
        url: 'https://renoir.aurora33.dev/',
      },
      {
        id: 2,
        category: 'Página Web',
        title: 'Neon Core',
        desc: 'Página web orientada a una marca de moda contemporánea con identidad futurista. Presenta una experiencia visual impactante que comunica estilo, actitud y una propuesta estética enfocada en el streetwear moderno.',
        featured: false,
        url: 'https://neon-core.aurora33.site/',
      },
      {
        id: 3,
        category: 'Página Web',
        title: 'Verso',
        desc: 'Página web diseñada para un espacio de eventos exclusivo. Combina una interfaz elegante con una narrativa visual clara, enfocada en resaltar la arquitectura, el ambiente y la versatilidad del lugar.',
        featured: false,
        url: 'https://verso.aurora33.site/',
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
