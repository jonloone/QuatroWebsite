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

export interface FeaturedInsight {
  type: 'insight'
  title: string
  excerpt: string
  category: string
  href: string
}

export type FeaturedContent = FeaturedCaseStudy | FeaturedInsight

export interface PrimaryNavItem {
  name: string
  href: string
  items: NavItem[]
  cta: { name: string; href: string }
  variant?: NavDropdownVariant
  featured?: FeaturedContent
}

/* ═══════════════════════════════════════════════════════════════
   Footer Navigation
   ═══════════════════════════════════════════════════════════════ */

const footerNavigationData = {
  en: {
    products: {
      title: 'How It Works',
      items: [
        { name: 'What Is It', href: '/utility' },
        { name: 'What You Get', href: '/utility/what-you-get' },
        { name: 'xOps', href: '/utility/xops' },
        { name: 'How It Starts', href: '/utility/how-it-starts' },
        { name: 'Technology', href: '/utility/technology' },
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
    resources: {
      title: 'Resources',
      items: [
        { name: 'White Papers', href: '/resources/white-papers' },
        { name: 'Insights', href: '/insights' },
        { name: 'Documentation', href: '/resources/documentation' },
      ],
    },
    company: {
      title: 'Company',
      items: [
        { name: 'About', href: '/company/about' },
        { name: 'Careers', href: '/company/careers' },
        { name: 'News', href: '/company/news' },
        { name: 'Request Demo', href: '/contact/demo' },
        { name: 'Sales', href: '/contact/sales' },
        { name: 'Support', href: '/contact/support' },
      ],
    },
  },
  es: {
    products: {
      title: 'Cómo Funciona',
      items: [
        { name: 'Qué Es', href: '/utility' },
        { name: 'Qué Obtiene', href: '/utility/what-you-get' },
        { name: 'xOps', href: '/utility/xops' },
        { name: 'Cómo Empieza', href: '/utility/how-it-starts' },
        { name: 'Tecnología', href: '/utility/technology' },
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
    resources: {
      title: 'Recursos',
      items: [
        { name: 'White Papers', href: '/resources/white-papers' },
        { name: 'Artículos', href: '/insights' },
        { name: 'Documentación', href: '/resources/documentation' },
      ],
    },
    company: {
      title: 'Empresa',
      items: [
        { name: 'Nosotros', href: '/company/about' },
        { name: 'Carreras', href: '/company/careers' },
        { name: 'Noticias', href: '/company/news' },
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
      name: 'How It Works',
      href: '/utility',
      variant: 'stacked',
      items: [
        { name: 'What Is It', description: 'One operational model from every system you run', href: '/utility', icon: LinkIcon },
        { name: 'What You Get', description: 'Adaptive workflows, agents, automations, and APIs', href: '/utility/what-you-get', icon: CogIcon },
        { name: 'How It Starts', description: 'Tell us the outcome. We connect the systems.', href: '/utility/how-it-starts', icon: CommandLineIcon },
      ],
      cta: { name: 'See How It Works', href: '/utility' },
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
      name: 'Insights',
      href: '/insights',
      variant: 'featured',
      items: [
        { name: 'Industry Trends', description: 'Analysis of operational patterns across sectors', href: '/insights/industry-trends', icon: LightBulbIcon },
        { name: 'Use Cases', description: 'Real deployment scenarios and outcomes', href: '/insights/use-cases', icon: BeakerIcon },
        { name: 'Platform', description: 'Technical deep-dives on the utility', href: '/insights/platform', icon: CogIcon },
      ],
      cta: { name: 'All Insights', href: '/insights' },
      featured: {
        type: 'insight' as const,
        title: 'Pipeline Intelligence Beyond SCADA',
        excerpt: 'Why the next decade of oil and gas belongs to operational intelligence — not more sensors.',
        category: 'industry-trends',
        href: '/insights/pipeline-intelligence-beyond-scada',
      },
    },
    {
      name: 'Company',
      href: '/company',
      variant: 'stacked',
      items: [
        { name: 'About', description: 'Our mission, vision, and values', href: '/company/about', icon: BuildingLibraryIcon },
        { name: 'Careers', description: 'Join our growing team', href: '/company/careers', icon: BriefcaseIcon },
        { name: 'News', description: 'Latest updates and announcements', href: '/company/news', icon: NewspaperIcon },
      ],
      cta: { name: 'About Quatro', href: '/company/about' },
    },
  ],
  es: [
    {
      name: 'Cómo Funciona',
      href: '/utility',
      variant: 'stacked',
      items: [
        { name: 'Qué Es', description: 'Un modelo operacional de todos sus sistemas', href: '/utility', icon: LinkIcon },
        { name: 'Qué Obtiene', description: 'Flujos de trabajo adaptativos, agentes, automatizaciones y APIs', href: '/utility/what-you-get', icon: CogIcon },
        { name: 'Cómo Empieza', description: 'Díganos el resultado. Conectamos los sistemas.', href: '/utility/how-it-starts', icon: CommandLineIcon },
      ],
      cta: { name: 'Ver Cómo Funciona', href: '/utility' },
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
      name: 'Artículos',
      href: '/insights',
      variant: 'featured',
      items: [
        { name: 'Tendencias', description: 'Análisis de patrones operacionales por sector', href: '/insights/industry-trends', icon: LightBulbIcon },
        { name: 'Casos de Uso', description: 'Escenarios reales de despliegue y resultados', href: '/insights/use-cases', icon: BeakerIcon },
        { name: 'Plataforma', description: 'Análisis técnicos de la utilidad', href: '/insights/platform', icon: CogIcon },
      ],
      cta: { name: 'Todos los Artículos', href: '/insights' },
      featured: {
        type: 'insight' as const,
        title: 'Pipeline Intelligence Beyond SCADA',
        excerpt: 'Why the next decade of oil and gas belongs to operational intelligence — not more sensors.',
        category: 'industry-trends',
        href: '/insights/pipeline-intelligence-beyond-scada',
      },
    },
    {
      name: 'Empresa',
      href: '/company',
      variant: 'stacked',
      items: [
        { name: 'Nosotros', description: 'Nuestra misión, visión y valores', href: '/company/about', icon: BuildingLibraryIcon },
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
