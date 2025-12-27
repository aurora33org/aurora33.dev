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
    title: 'Construyendo la próxima generación de',
    highlight: 'Herramientas con IA.',
    subtitle:
      'Nos especializamos en el desarrollo de herramientas con Inteligencia Artificial. Desde LLMs personalizados hasta motores de análisis predictivo.',
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
        desc: 'Arquitecturas de aprendizaje profundo diseñadas para tareas complejas de reconocimiento de patrones.',
        icon: Cpu,
      },
      {
        id: 'automation',
        title: 'Mantenimiento y capacitación',
        desc: 'Agentes autónomos que manejan flujos de trabajo y procesamiento de datos 24/7.',
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
        category: 'FinTech IA',
        title: 'Analizador Predictivo de Mercado',
        desc: 'Una herramienta de IA que procesa 5M+ puntos de datos diarios para predecir tendencias con 89% de precisión.',
        featured: true,
      },
      {
        id: 2,
        category: 'IA Generativa',
        title: 'Síntesis de Imágenes Nexus',
        desc: 'Motor basado en stable-diffusion personalizado para generación de renders arquitectónicos.',
        featured: false,
      },
      {
        id: 3,
        category: 'Herramienta NLP',
        title: 'Parser de Documentos Legales',
        desc: 'Sistema automatizado de revisión de contratos que reduce el trabajo manual legal en un 70%.',
        featured: false,
      },
    ],
  },
  contact: {
    title: 'Construyamos',
    subtitle: 'Cuéntanos sobre tu proyecto',
    scheduleBtn: 'Agendar Videollamada',
    emailLabel: 'Escríbenos por Email',
    email: 'hello@aurora33.dev',
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
