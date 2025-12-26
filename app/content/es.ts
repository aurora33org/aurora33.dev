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
    subtitle: 'Nuestra experiencia en Desarrollo IA',
    items: [
      {
        id: 'custom-ai',
        title: 'Herramientas de IA a Medida',
        desc: 'Soluciones de software personalizadas integrando modelos de OpenAI, Anthropic o de código abierto.',
        icon: Terminal,
      },
      {
        id: 'neural-networks',
        title: 'Redes Neuronales',
        desc: 'Arquitecturas de aprendizaje profundo diseñadas para tareas complejas de reconocimiento de patrones.',
        icon: Cpu,
      },
      {
        id: 'automation',
        title: 'Agentes de Automatización',
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
      {
        id: 4,
        category: 'Salud',
        title: 'Asistente de Diagnóstico',
        desc: 'Modelo de visión por computadora que asiste a radiólogos en la detección temprana de anomalías.',
        featured: false,
      },
    ],
  },
  contact: {
    title: 'Construyamos',
    subtitle: '¿Listo para integrar IA en tu ecosistema?',
    name: 'Nombre',
    email: 'Correo Electrónico',
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
