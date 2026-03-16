import type { Locale } from './i18n'
import { localizeHref } from './i18n'

export type NavDropdownVariant = 'stacked' | 'two-column' | 'featured'

// Icon function placeholders - these are matched by name in NavDropdown.astro
function LinkIcon() {}
function CogIcon() {}
function CommandLineIcon() {}
function ChartBarIcon() {}
function ShieldCheckIcon() {}
function LightBulbIcon() {}
function LockClosedIcon() {}
function TruckIcon() {}
function BoltIcon() {}
function GlobeAltIcon() {}
function ShieldIcon() {}
function WrenchScrewdriverIcon() {}
function BuildingLibraryIcon() {}
function BuildingOffice2Icon() {}
function UserGroupIcon() {}
function BriefcaseIcon() {}
function NewspaperIcon() {}

export interface NavItem {
  name: string
  description: string
  href: string
  icon: () => void
}

export interface FeaturedCaseStudy {
  type: 'case-study'
  title: string
  quote: string
  author: string
  company: string
  logo?: string
  href: string
}

export interface PrimaryNavItem {
  name: string
  href: string
  items: NavItem[]
  cta: { name: string; href: string }
  variant?: NavDropdownVariant
  featured?: FeaturedCaseStudy
}

/* ═══════════════════════════════════════════════════════════════
   Footer Navigation
   ═══════════════════════════════════════════════════════════════ */

const footerNavigationData = {
  en: {
    products: {
      title: 'Platform',
      items: [
        { name: 'Overview', href: '/platform' },
        { name: 'Connect', href: '/platform/connect' },
        { name: 'Operate', href: '/platform/operate' },
        { name: 'Command', href: '/platform/command' },
      ],
    },
    solutions: {
      title: 'Solutions',
      items: [
        { name: 'Asset Monitoring', href: '/solutions/asset-monitoring' },
        { name: 'Pipeline Security', href: '/solutions/pipeline-security' },
        { name: 'Operational Intelligence', href: '/solutions/operational-intelligence' },
        { name: 'Physical Security', href: '/solutions/physical-security' },
        { name: 'Fleet & Logistics', href: '/solutions/fleet-logistics' },
        { name: 'Grid Operations', href: '/solutions/grid-operations' },
        { name: 'Network Operations', href: '/solutions/network-operations' },
      ],
    },
    industries: {
      title: 'Industries',
      items: [
        { name: 'Energy', href: '/industries/energy' },
        { name: 'Defense', href: '/industries/defense' },
        { name: 'Industrial', href: '/industries/industrial' },
        { name: 'Infrastructure', href: '/industries/infrastructure' },
        { name: 'Cities', href: '/industries/cities' },
      ],
    },
    resources: {
      title: 'Resources',
      items: [
        { name: 'Case Studies', href: '/resources/case-studies' },
        { name: 'White Papers', href: '/resources/white-papers' },
        { name: 'Insights', href: '/resources/insights' },
        { name: 'Documentation', href: '/resources/documentation' },
      ],
    },
    company: {
      title: 'Company',
      items: [
        { name: 'About', href: '/company/about' },
        { name: 'Leadership', href: '/company/leadership' },
        { name: 'Careers', href: '/company/careers' },
        { name: 'News', href: '/company/news' },
      ],
    },
    legal: {
      title: 'Legal',
      items: [
        { name: 'Privacy Policy', href: '/legal/privacy' },
        { name: 'Terms of Service', href: '/legal/terms' },
        { name: 'Security', href: '/legal/security' },
      ],
    },
    contact: {
      title: 'Contact',
      items: [
        { name: 'Request Demo', href: '/contact/demo' },
        { name: 'Sales', href: '/contact/sales' },
        { name: 'Support', href: '/contact/support' },
      ],
    },
  },
  es: {
    products: {
      title: 'Plataforma',
      items: [
        { name: 'Vista General', href: '/platform' },
        { name: 'Connect', href: '/platform/connect' },
        { name: 'Operate', href: '/platform/operate' },
        { name: 'Command', href: '/platform/command' },
      ],
    },
    solutions: {
      title: 'Soluciones',
      items: [
        { name: 'Monitoreo de Activos', href: '/solutions/asset-monitoring' },
        { name: 'Seguridad de Ductos', href: '/solutions/pipeline-security' },
        { name: 'Inteligencia Operacional', href: '/solutions/operational-intelligence' },
        { name: 'Seguridad Física', href: '/solutions/physical-security' },
        { name: 'Flotas y Logística', href: '/solutions/fleet-logistics' },
        { name: 'Operaciones de Red Eléctrica', href: '/solutions/grid-operations' },
        { name: 'Operaciones de Red', href: '/solutions/network-operations' },
      ],
    },
    industries: {
      title: 'Industrias',
      items: [
        { name: 'Energía', href: '/industries/energy' },
        { name: 'Defensa', href: '/industries/defense' },
        { name: 'Industrial', href: '/industries/industrial' },
        { name: 'Infraestructura', href: '/industries/infrastructure' },
        { name: 'Ciudades', href: '/industries/cities' },
      ],
    },
    resources: {
      title: 'Recursos',
      items: [
        { name: 'Casos de Éxito', href: '/resources/case-studies' },
        { name: 'White Papers', href: '/resources/white-papers' },
        { name: 'Artículos', href: '/resources/insights' },
        { name: 'Documentación', href: '/resources/documentation' },
      ],
    },
    company: {
      title: 'Empresa',
      items: [
        { name: 'Nosotros', href: '/company/about' },
        { name: 'Liderazgo', href: '/company/leadership' },
        { name: 'Carreras', href: '/company/careers' },
        { name: 'Noticias', href: '/company/news' },
      ],
    },
    legal: {
      title: 'Legal',
      items: [
        { name: 'Política de Privacidad', href: '/legal/privacy' },
        { name: 'Términos de Servicio', href: '/legal/terms' },
        { name: 'Seguridad', href: '/legal/security' },
      ],
    },
    contact: {
      title: 'Contacto',
      items: [
        { name: 'Solicitar Demo', href: '/contact/demo' },
        { name: 'Ventas', href: '/contact/sales' },
        { name: 'Soporte', href: '/contact/support' },
      ],
    },
  },
}

/** Get localized footer navigation with prefixed hrefs */
export function getFooterNavigation(locale: Locale = 'en') {
  const data = footerNavigationData[locale]
  // Prefix all hrefs for the given locale
  const localized: Record<string, { title: string; items: { name: string; href: string }[] }> = {}
  for (const [key, section] of Object.entries(data)) {
    localized[key] = {
      title: section.title,
      items: section.items.map((item) => ({
        name: item.name,
        href: localizeHref(item.href, locale),
      })),
    }
  }
  return localized
}

// Keep the original export for backwards compatibility (English default)
export const footerNavigation = footerNavigationData.en

/* ═══════════════════════════════════════════════════════════════
   Primary Navigation (Header dropdowns)
   ═══════════════════════════════════════════════════════════════ */

const primaryNavigationData: Record<Locale, PrimaryNavItem[]> = {
  en: [
    {
      name: 'Platform',
      href: '/platform',
      variant: 'stacked',
      items: [
        { name: 'Connect', description: 'Integrate sensors, devices, and data streams', href: '/platform/connect', icon: LinkIcon },
        { name: 'Operate', description: 'Monitor and manage operations in real-time', href: '/platform/operate', icon: CogIcon },
        { name: 'Command', description: 'Orchestrate responses and automate actions', href: '/platform/command', icon: CommandLineIcon },
      ],
      cta: { name: 'Platform Overview', href: '/platform' },
    },
    {
      name: 'Solutions',
      href: '/solutions',
      variant: 'two-column',
      items: [
        { name: 'Asset Monitoring', description: 'Track and monitor critical infrastructure assets', href: '/solutions/asset-monitoring', icon: ChartBarIcon },
        { name: 'Pipeline Security', description: 'Protect pipeline networks from threats', href: '/solutions/pipeline-security', icon: ShieldCheckIcon },
        { name: 'Operational Intelligence', description: 'Transform data into actionable insights', href: '/solutions/operational-intelligence', icon: LightBulbIcon },
        { name: 'Physical Security', description: 'Secure facilities and perimeters', href: '/solutions/physical-security', icon: LockClosedIcon },
        { name: 'Fleet & Logistics', description: 'Optimize fleet operations and logistics', href: '/solutions/fleet-logistics', icon: TruckIcon },
        { name: 'Grid Operations', description: 'Manage power grid infrastructure', href: '/solutions/grid-operations', icon: BoltIcon },
        { name: 'Network Operations', description: 'Monitor distributed network systems', href: '/solutions/network-operations', icon: GlobeAltIcon },
      ],
      cta: { name: 'All Solutions', href: '/solutions' },
    },
    {
      name: 'Industries',
      href: '/industries',
      variant: 'featured',
      items: [
        { name: 'Energy', description: 'Oil, gas, and renewable energy operations', href: '/industries/energy', icon: BoltIcon },
        { name: 'Defense', description: 'Military and defense applications', href: '/industries/defense', icon: ShieldIcon },
        { name: 'Industrial', description: 'Manufacturing and industrial facilities', href: '/industries/industrial', icon: WrenchScrewdriverIcon },
        { name: 'Infrastructure', description: 'Critical infrastructure protection', href: '/industries/infrastructure', icon: BuildingLibraryIcon },
        { name: 'Cities', description: 'Smart city and municipal operations', href: '/industries/cities', icon: BuildingOffice2Icon },
      ],
      cta: { name: 'All Industries', href: '/industries' },
      featured: {
        type: 'case-study',
        title: 'Energy Sector Success',
        quote: 'Quatro reduced our incident response time by 73% and gave us complete visibility across 2,400 miles of pipeline infrastructure.',
        author: 'Sarah Chen',
        company: 'PetroMax Energy',
        href: '/resources/case-studies/petromax',
      },
    },
    {
      name: 'Company',
      href: '/company',
      variant: 'stacked',
      items: [
        { name: 'About', description: 'Our mission, vision, and values', href: '/company/about', icon: BuildingLibraryIcon },
        { name: 'Leadership', description: 'Meet our executive team', href: '/company/leadership', icon: UserGroupIcon },
        { name: 'Careers', description: 'Join our growing team', href: '/company/careers', icon: BriefcaseIcon },
        { name: 'News', description: 'Latest updates and announcements', href: '/company/news', icon: NewspaperIcon },
      ],
      cta: { name: 'About Quatro', href: '/company/about' },
    },
  ],
  es: [
    {
      name: 'Plataforma',
      href: '/platform',
      variant: 'stacked',
      items: [
        { name: 'Connect', description: 'Integrar sensores, dispositivos y flujos de datos', href: '/platform/connect', icon: LinkIcon },
        { name: 'Operate', description: 'Monitorear y gestionar operaciones en tiempo real', href: '/platform/operate', icon: CogIcon },
        { name: 'Command', description: 'Orquestar respuestas y automatizar acciones', href: '/platform/command', icon: CommandLineIcon },
      ],
      cta: { name: 'Vista General', href: '/platform' },
    },
    {
      name: 'Soluciones',
      href: '/solutions',
      variant: 'two-column',
      items: [
        { name: 'Monitoreo de Activos', description: 'Seguimiento y monitoreo de activos de infraestructura crítica', href: '/solutions/asset-monitoring', icon: ChartBarIcon },
        { name: 'Seguridad de Ductos', description: 'Proteger redes de ductos contra amenazas', href: '/solutions/pipeline-security', icon: ShieldCheckIcon },
        { name: 'Inteligencia Operacional', description: 'Transformar datos en información accionable', href: '/solutions/operational-intelligence', icon: LightBulbIcon },
        { name: 'Seguridad Física', description: 'Asegurar instalaciones y perímetros', href: '/solutions/physical-security', icon: LockClosedIcon },
        { name: 'Flotas y Logística', description: 'Optimizar operaciones de flotas y logística', href: '/solutions/fleet-logistics', icon: TruckIcon },
        { name: 'Operaciones de Red Eléctrica', description: 'Gestionar infraestructura de red eléctrica', href: '/solutions/grid-operations', icon: BoltIcon },
        { name: 'Operaciones de Red', description: 'Monitorear sistemas de red distribuidos', href: '/solutions/network-operations', icon: GlobeAltIcon },
      ],
      cta: { name: 'Todas las Soluciones', href: '/solutions' },
    },
    {
      name: 'Industrias',
      href: '/industries',
      variant: 'featured',
      items: [
        { name: 'Energía', description: 'Operaciones de petróleo, gas y energía renovable', href: '/industries/energy', icon: BoltIcon },
        { name: 'Defensa', description: 'Aplicaciones militares y de defensa', href: '/industries/defense', icon: ShieldIcon },
        { name: 'Industrial', description: 'Manufactura e instalaciones industriales', href: '/industries/industrial', icon: WrenchScrewdriverIcon },
        { name: 'Infraestructura', description: 'Protección de infraestructura crítica', href: '/industries/infrastructure', icon: BuildingLibraryIcon },
        { name: 'Ciudades', description: 'Operaciones de ciudades inteligentes y municipales', href: '/industries/cities', icon: BuildingOffice2Icon },
      ],
      cta: { name: 'Todas las Industrias', href: '/industries' },
      featured: {
        type: 'case-study',
        title: 'Éxito en el Sector Energético',
        quote: 'Quatro redujo nuestro tiempo de respuesta a incidentes en un 73% y nos dio visibilidad completa en 3.800 km de infraestructura de ductos.',
        author: 'Sarah Chen',
        company: 'PetroMax Energy',
        href: '/resources/case-studies/petromax',
      },
    },
    {
      name: 'Empresa',
      href: '/company',
      variant: 'stacked',
      items: [
        { name: 'Nosotros', description: 'Nuestra misión, visión y valores', href: '/company/about', icon: BuildingLibraryIcon },
        { name: 'Liderazgo', description: 'Conozca nuestro equipo directivo', href: '/company/leadership', icon: UserGroupIcon },
        { name: 'Carreras', description: 'Únase a nuestro equipo en crecimiento', href: '/company/careers', icon: BriefcaseIcon },
        { name: 'Noticias', description: 'Últimas novedades y anuncios', href: '/company/news', icon: NewspaperIcon },
      ],
      cta: { name: 'Sobre Quatro', href: '/company/about' },
    },
  ],
}

/** Get localized primary navigation with prefixed hrefs */
export function getPrimaryNavigation(locale: Locale = 'en'): PrimaryNavItem[] {
  return primaryNavigationData[locale].map((section) => ({
    ...section,
    href: localizeHref(section.href, locale),
    items: section.items.map((item) => ({
      ...item,
      href: localizeHref(item.href, locale),
    })),
    cta: {
      ...section.cta,
      href: localizeHref(section.cta.href, locale),
    },
    featured: section.featured
      ? { ...section.featured, href: localizeHref(section.featured.href, locale) }
      : undefined,
  }))
}

// Keep the original export for backwards compatibility
export const primaryNavigation: PrimaryNavItem[] = primaryNavigationData.en

export const ctaNavigation = [
  { name: 'Schedule a Consultation', href: '/contact/demo', variant: 'solid' as const },
]
