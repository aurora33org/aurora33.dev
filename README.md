# Aurora33.dev - Landing Page

Landing page profesional para Aurora33 construida con Next.js 16, TypeScript, Tailwind CSS v3, Framer Motion y Lenis.

## 🚀 Características

- ✨ Animaciones suaves con Framer Motion
- 🎨 Tema claro/oscuro con persistencia
- 🌐 Bilingüe (EN/ES) con detección automática
- 📱 100% Responsive (mobile-first)
- ♿ Accesible (WCAG AA)
- 🔍 SEO optimizado (metadata, sitemap, structured data)
- 📧 Formulario de contacto funcional con envío de emails (Resend)
- ⚡ Smooth scroll (Lenis)
- 🎯 TypeScript para type-safety
- 🎨 Tailwind CSS v3

## 📋 Requisitos Previos

- Node.js 18+
- pnpm 8+
- Cuenta en [Resend](https://resend.com) para envío de emails

## 🛠️ Instalación

### 1. Instalar dependencias

```bash
pnpm install
```

### 2. Configurar variables de entorno

Edita el archivo `.env.local` con tus credenciales:

```env
RESEND_API_KEY=tu_api_key_de_resend
CONTACT_EMAIL=tu_email_destino@aurora33.dev
FROM_EMAIL=noreply@aurora33.dev
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Para obtener tu API key de Resend:**
1. Crea una cuenta en https://resend.com
2. Verifica tu dominio (aurora33.dev) agregando los DNS records
3. Genera una API key desde el dashboard
4. Copia la API key al archivo `.env.local`

### 3. Instalar fuente Kangge

⚠️ **IMPORTANTE**: Debes proporcionar los archivos de la fuente Kangge.

Copia los archivos de fuente a estas ubicaciones:
- `app/fonts/kangge-bold.woff`
- `public/fonts/kangge-bold.woff`
- `public/fonts/kangge-bold.ttf` (opcional)

Si no tienes la fuente Kangge, puedes usar una alternativa editando `app/lib/fonts.ts`.

## 🏃 Desarrollo

Inicia el servidor de desarrollo:

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Build para Producción

```bash
pnpm build
pnpm start
```

## 📁 Estructura del Proyecto

```
aurora-dev/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts              # API endpoint para emails
│   ├── components/
│   │   ├── animations/               # FadeIn, SlideIn, ScaleIn
│   │   ├── layout/                   # Navbar, Footer
│   │   ├── sections/                 # Hero, Services, Portfolio, Contact
│   │   ├── ui/                       # Button, Input, Card, Badge, Textarea
│   │   └── providers/                # Theme, Language, SmoothScroll
│   ├── content/                      # Traducciones (en.ts, es.ts)
│   ├── hooks/                        # useTheme, useLanguage
│   ├── lib/                          # Utils, fonts, structured-data
│   ├── types/                        # TypeScript types
│   ├── globals.css                   # Estilos globales
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Home page
│   ├── sitemap.ts                    # SEO sitemap
│   └── robots.ts                     # SEO robots
├── public/
│   └── fonts/                        # Fuentes locales
├── .env.local                        # Variables de entorno
├── tailwind.config.ts                # Configuración Tailwind
├── next.config.ts                    # Configuración Next.js
└── package.json
```

## 🎨 Paleta de Colores

### Tema Claro
- Background: `#F8F8F8`
- Text: `#191A1B`
- Text-muted: `#838A8D`
- Contrast: `#F84733`

### Tema Oscuro
- Background: `#191A1B`
- Text: `#F6F6F6`
- Text-muted: `#F3DDCA`
- Contrast: `#F84733`

## 🔤 Tipografías

- **Kangge** (Bold) - Títulos principales (H1)
- **Syne** (400-800) - Headings (H2-H4) y marca
- **Quicksand** (300-700) - Body text y UI

## 📝 Scripts Disponibles

- `pnpm dev` - Servidor de desarrollo con Turbopack
- `pnpm build` - Build para producción
- `pnpm start` - Servidor de producción
- `pnpm lint` - Linting con ESLint

## 🌐 Deployment en Vercel

### 1. Conectar repositorio

```bash
# Instalar Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

### 2. Configurar variables de entorno en Vercel

En el dashboard de Vercel, agrega estas variables:
- `RESEND_API_KEY`
- `CONTACT_EMAIL`
- `FROM_EMAIL`
- `NEXT_PUBLIC_SITE_URL=https://aurora33.dev`

### 3. Deploy a producción

```bash
vercel --prod
```

## ✅ Checklist Post-Instalación

- [ ] Instaladas todas las dependencias con `pnpm install`
- [ ] Configuradas variables de entorno en `.env.local`
- [ ] Cuenta creada en Resend y dominio verificado
- [ ] API key de Resend agregada
- [ ] Archivos de fuente Kangge copiados a las carpetas correctas
- [ ] Servidor de desarrollo corriendo correctamente
- [ ] Formulario de contacto probado y enviando emails
- [ ] Tema claro/oscuro funciona correctamente
- [ ] Toggle de idioma EN/ES funciona
- [ ] Smooth scroll activo
- [ ] Build de producción exitoso

## 🐛 Troubleshooting

### Error: "Cannot find module './fonts/kangge-bold.woff'"
- Asegúrate de haber copiado los archivos de fuente a `app/fonts/`

### Error: "Resend API key not found"
- Verifica que `.env.local` existe y tiene `RESEND_API_KEY`
- Reinicia el servidor de desarrollo después de agregar variables

### El formulario no envía emails
- Verifica tu API key de Resend
- Asegúrate de haber verificado tu dominio en Resend
- Revisa los logs de la consola para errores

### El tema no persiste al recargar
- Verifica que localStorage funciona en tu navegador
- Abre las DevTools → Application → Local Storage

## 📚 Tecnologías Utilizadas

- [Next.js 16](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS v3](https://tailwindcss.com/) - Estilos
- [Framer Motion](https://www.framer.com/motion/) - Animaciones
- [Lenis](https://lenis.darkroom.engineering/) - Smooth scroll
- [Resend](https://resend.com/) - Email API
- [React Hook Form](https://react-hook-form.com/) - Gestión de formularios
- [Zod](https://zod.dev/) - Validación de esquemas
- [Lucide React](https://lucide.dev/) - Iconos

## 📄 Licencia

© 2025 Aurora33. Todos los derechos reservados.

## 🤝 Soporte

Para problemas o preguntas, contacta a hello@aurora33.dev
