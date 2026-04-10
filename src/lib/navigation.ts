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
      title: 'How We Work',
      items: [
        { name: 'The Intelligence Utility', href: '/utility' },
        { name: 'Capabilities', href: '/solutions' },
        { name: 'xOps', href: '/utility/xops' },
        { name: 'Technology', href: '/utility/technology' },
      ],
    },
    industries: {
      title: 'Industries',
      items: [
        { name: 'Energy', href: '/industries/energy' },
        { name: 'National Security', href: '/industries/defense' },
        { name: 'Networks', href: '/industries/networks' },
        { name: 'Cities', href: '/industries/cities' },
      ],
    },
    resources: {
      title: 'Resources',
      items: [
        { name: 'Insights', href: '/insights' },
        { name: 'Partners', href: '/partners' },
      ],
    },
    company: {
      title: 'Company',
      items: [
        { name: 'About', href: '/company/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Talk to Our Team', href: '/contact/demo' },
      ],
    },
  },
  es: {
    products: {
      title: 'Cómo Trabajamos',
      items: [
        { name: 'La Utilidad de Inteligencia', href: '/utility' },
        { name: 'Capacidades', href: '/solutions' },
        { name: 'xOps', href: '/utility/xops' },
        { name: 'Tecnología', href: '/utility/technology' },
      ],
    },
    industries: {
      title: 'Industrias',
      items: [
        { name: 'Energía', href: '/industries/energy' },
        { name: 'Seguridad Nacional', href: '/industries/defense' },
        { name: 'Redes', href: '/industries/networks' },
        { name: 'Ciudades', href: '/industries/cities' },
      ],
    },
    resources: {
      title: 'Recursos',
      items: [
        { name: 'Artículos', href: '/insights' },
        { name: 'Socios', href: '/partners' },
      ],
    },
    company: {
      title: 'Empresa',
      items: [
        { name: 'Nosotros', href: '/company/about' },
        { name: 'Contacto', href: '/contact' },
        { name: 'Hablar con Nuestro Equipo', href: '/contact/demo' },
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
      name: 'Industries',
      href: '/industries',
      variant: 'stacked',
      items: [
        { name: 'Energy', description: 'Grid, pipeline, and production intelligence', href: '/industries/energy', icon: BoltIcon },
        { name: 'National Security', description: 'Sovereign intelligence across community and territorial domains', href: '/industries/defense', icon: ShieldIcon },
        { name: 'Networks', description: 'Ground to orbit — unified connectivity operations', href: '/industries/networks', icon: SignalIcon },
        { name: 'Cities', description: 'Water, waste, safety — one operational picture', href: '/industries/cities', icon: BuildingLibraryIcon },
      ],
      cta: { name: 'All Industries', href: '/industries' },
    },
    {
      name: 'How We Work',
      href: '/utility',
      variant: 'stacked',
      items: [
        { name: 'The Intelligence Utility', description: 'One operational model from every system you run', href: '/utility', icon: LinkIcon },
        { name: 'Capabilities', description: 'What your team gets — visibility, prediction, governed action', href: '/solutions', icon: WrenchScrewdriverIcon },
        { name: 'Technology', description: 'Architecture deep-dive for technical teams', href: '/utility/technology', icon: CogIcon },
        { name: 'xOps', description: 'Adaptive workflows, agents, automations, and APIs', href: '/utility/xops', icon: CommandLineIcon },
      ],
      cta: { name: 'How We Work', href: '/utility' },
    },
    {
      name: 'Company',
      href: '/company',
      variant: 'stacked',
      items: [
        { name: 'About', description: 'Our mission and the team behind Quatro', href: '/company/about', icon: BuildingLibraryIcon },
        { name: 'Partners', description: 'Deliver intelligence in your market', href: '/partners', icon: BriefcaseIcon },
        { name: 'Insights', description: 'Perspectives on operational intelligence', href: '/insights', icon: LightBulbIcon },
      ],
      cta: { name: 'About Quatro', href: '/company/about' },
    },
  ],
  es: [
    {
      name: 'Industrias',
      href: '/industries',
      variant: 'stacked',
      items: [
        { name: 'Energía', description: 'Inteligencia para red eléctrica, oleoductos y producción', href: '/industries/energy', icon: BoltIcon },
        { name: 'Seguridad Nacional', description: 'Inteligencia soberana para protección comunitaria y territorial', href: '/industries/defense', icon: ShieldIcon },
        { name: 'Redes', description: 'Tierra a órbita — operaciones de conectividad unificadas', href: '/industries/networks', icon: SignalIcon },
        { name: 'Ciudades', description: 'Agua, residuos, seguridad — un modelo operacional', href: '/industries/cities', icon: BuildingLibraryIcon },
      ],
      cta: { name: 'Todas las Industrias', href: '/industries' },
    },
    {
      name: 'Cómo Trabajamos',
      href: '/utility',
      variant: 'stacked',
      items: [
        { name: 'La Utilidad de Inteligencia', description: 'Un modelo operacional de todos sus sistemas', href: '/utility', icon: LinkIcon },
        { name: 'Capacidades', description: 'Visibilidad, predicción, acción gobernada', href: '/solutions', icon: WrenchScrewdriverIcon },
        { name: 'Tecnología', description: 'Arquitectura en detalle para equipos técnicos', href: '/utility/technology', icon: CogIcon },
        { name: 'xOps', description: 'Flujos adaptativos, agentes, automatizaciones y APIs', href: '/utility/xops', icon: CommandLineIcon },
      ],
      cta: { name: 'Cómo Trabajamos', href: '/utility' },
    },
    {
      name: 'Empresa',
      href: '/company',
      variant: 'stacked',
      items: [
        { name: 'Nosotros', description: 'Nuestra misión y el equipo detrás de Quatro', href: '/company/about', icon: BuildingLibraryIcon },
        { name: 'Socios', description: 'Entrega inteligencia en tu mercado', href: '/partners', icon: BriefcaseIcon },
        { name: 'Artículos', description: 'Perspectivas sobre inteligencia operacional', href: '/insights', icon: LightBulbIcon },
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
  { name: 'Talk to Our Team', href: '/contact/demo', variant: 'solid' as const },
]
