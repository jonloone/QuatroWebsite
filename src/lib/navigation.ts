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
function SignalIcon() {}
function BeakerIcon() {}

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
      title: 'The Utility',
      items: [
        { name: 'How It Works', href: '/network' },
        { name: 'Integrations', href: '/network#integrations' },
        { name: 'Deployment', href: '/network#deployment' },
        { name: 'Security', href: '/network#trust' },
      ],
    },
    industries: {
      title: 'Industries',
      items: [
        { name: 'Energy', href: '/industries/energy' },
        { name: 'National Security', href: '/industries/national-security' },
        { name: 'Networks', href: '/industries/networks' },
        { name: 'Critical Infrastructure', href: '/industries/critical-infrastructure' },
        { name: 'Finance', href: '/industries/finance' },
      ],
    },
    solutions: {
      title: 'Solutions',
      items: [
        { name: 'Asset Health', href: '/solutions/asset-health' },
        { name: 'Pipeline Integrity', href: '/solutions/pipeline-integrity' },
        { name: 'Operational Intelligence', href: '/solutions/operational-intelligence' },
        { name: 'Physical Security', href: '/solutions/physical-security' },
        { name: 'Fleet & Logistics', href: '/solutions/fleet-logistics' },
        { name: 'Grid Health', href: '/solutions/grid-health' },
        { name: 'Network Operations', href: '/solutions/network-operations' },
        { name: 'Teleport Operations', href: '/solutions/teleport-operations' },
        { name: 'Fleet Health', href: '/solutions/fleet-health' },
        { name: 'Service Assurance', href: '/solutions/service-assurance' },
        { name: 'Space Domain Awareness', href: '/solutions/space-domain-awareness' },
        { name: 'Port Operations', href: '/solutions/port-operations' },
        { name: 'Airport Operations', href: '/solutions/airport-operations' },
        { name: 'Corridor Intelligence', href: '/solutions/corridor-intelligence' },
        { name: 'Water Systems', href: '/solutions/water-systems' },
        { name: 'Environmental Compliance', href: '/solutions/environmental-compliance' },
      ],
    },
    resources: {
      title: 'Resources',
      items: [
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
      title: 'La Utilidad',
      items: [
        { name: 'Cómo Funciona', href: '/network' },
        { name: 'Integraciones', href: '/network#integrations' },
        { name: 'Despliegue', href: '/network#deployment' },
        { name: 'Seguridad', href: '/network#trust' },
      ],
    },
    industries: {
      title: 'Industrias',
      items: [
        { name: 'Energía', href: '/industries/energy' },
        { name: 'Seguridad Nacional', href: '/industries/national-security' },
        { name: 'Redes', href: '/industries/networks' },
        { name: 'Infraestructura Crítica', href: '/industries/critical-infrastructure' },
        { name: 'Finanzas', href: '/industries/finance' },
      ],
    },
    solutions: {
      title: 'Soluciones',
      items: [
        { name: 'Salud de Activos', href: '/solutions/asset-health' },
        { name: 'Integridad de Ductos', href: '/solutions/pipeline-integrity' },
        { name: 'Inteligencia Operacional', href: '/solutions/operational-intelligence' },
        { name: 'Seguridad Física', href: '/solutions/physical-security' },
        { name: 'Flotas y Logística', href: '/solutions/fleet-logistics' },
        { name: 'Salud de Red', href: '/solutions/grid-health' },
        { name: 'Operaciones de Red', href: '/solutions/network-operations' },
        { name: 'Operaciones Teleport', href: '/solutions/teleport-operations' },
        { name: 'Salud de Flota', href: '/solutions/fleet-health' },
        { name: 'Aseguramiento de Servicio', href: '/solutions/service-assurance' },
        { name: 'Conciencia Espacial', href: '/solutions/space-domain-awareness' },
        { name: 'Operaciones Portuarias', href: '/solutions/port-operations' },
        { name: 'Operaciones Aeroportuarias', href: '/solutions/airport-operations' },
        { name: 'Inteligencia de Corredor', href: '/solutions/corridor-intelligence' },
        { name: 'Sistemas de Agua', href: '/solutions/water-systems' },
        { name: 'Cumplimiento Ambiental', href: '/solutions/environmental-compliance' },
      ],
    },
    resources: {
      title: 'Recursos',
      items: [
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
      name: 'The Utility',
      href: '/network',
      variant: 'stacked',
      items: [
        { name: 'How It Works', description: 'Two properties of the intelligence utility', href: '/network', icon: LinkIcon },
        { name: 'Integrations', description: '8,000+ integrations across 1,000+ vendors', href: '/network#integrations', icon: CogIcon },
        { name: 'Deployment', description: 'Cloud, on-premises, edge, air-gapped, or hybrid', href: '/network#deployment', icon: CommandLineIcon },
        { name: 'Security', description: 'Sovereign deployment. Your data never leaves your control', href: '/network#trust', icon: ShieldCheckIcon },
      ],
      cta: { name: 'Explore the Utility', href: '/network' },
    },
    {
      name: 'Industries',
      href: '/industries',
      variant: 'stacked',
      items: [
        { name: 'Energy', description: 'Oil, gas, renewables, grid, and industrial operations', href: '/industries/energy', icon: BoltIcon },
        { name: 'National Security', description: 'Defense and sovereign intelligence operations', href: '/industries/national-security', icon: ShieldIcon },
        { name: 'Networks', description: 'Terrestrial, satellite, and hybrid connectivity operations', href: '/industries/networks', icon: SignalIcon },
        { name: 'Critical Infrastructure', description: 'Cities, water, transportation, and built environment', href: '/industries/critical-infrastructure', icon: BuildingLibraryIcon },
        { name: 'Finance', description: 'Banking, insurance, and regulatory compliance', href: '/industries/finance', icon: ChartBarIcon },
      ],
      cta: { name: 'All Industries', href: '/industries' },
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
      name: 'La Utilidad',
      href: '/network',
      variant: 'stacked',
      items: [
        { name: 'Cómo Funciona', description: 'Dos propiedades de la utilidad de inteligencia', href: '/network', icon: LinkIcon },
        { name: 'Integraciones', description: '8.000+ integraciones de 1.000+ proveedores', href: '/network#integrations', icon: CogIcon },
        { name: 'Despliegue', description: 'Nube, on-premises, edge, air-gapped o híbrido', href: '/network#deployment', icon: CommandLineIcon },
        { name: 'Seguridad', description: 'Despliegue soberano. Sus datos nunca salen de su control', href: '/network#trust', icon: ShieldCheckIcon },
      ],
      cta: { name: 'Explorar la Utilidad', href: '/network' },
    },
    {
      name: 'Industrias',
      href: '/industries',
      variant: 'stacked',
      items: [
        { name: 'Energía', description: 'Petróleo, gas, renovables, red eléctrica e industrial', href: '/industries/energy', icon: BoltIcon },
        { name: 'Seguridad Nacional', description: 'Defensa e inteligencia soberana', href: '/industries/national-security', icon: ShieldIcon },
        { name: 'Redes', description: 'Operaciones terrestres, satelitales y conectividad híbrida', href: '/industries/networks', icon: SignalIcon },
        { name: 'Infraestructura Crítica', description: 'Ciudades, agua, transporte y entorno construido', href: '/industries/critical-infrastructure', icon: BuildingLibraryIcon },
        { name: 'Finanzas', description: 'Banca, seguros y cumplimiento regulatorio', href: '/industries/finance', icon: ChartBarIcon },
      ],
      cta: { name: 'Todas las Industrias', href: '/industries' },
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
