import type { Locale } from './i18n'
import { localizeHref } from './i18n'

export type NavDropdownVariant = 'stacked' | 'two-column' | 'featured'

// Icon function placeholders - these are matched by name in NavDropdown.astro
function LinkIcon() {}
function CogIcon() {}
function CommandLineIcon() {}
function ChartBarIcon() {}
function LightBulbIcon() {}
function TruckIcon() {}
function BoltIcon() {}
function GlobeAltIcon() {}
function ShieldIcon() {}
function BuildingLibraryIcon() {}
function BuildingOffice2Icon() {}
function BriefcaseIcon() {}
function NewspaperIcon() {}
function BeakerIcon() {}

export interface NavItem {
  name: string
  description: string
  href: string
  icon: () => void
  /** false = keep the EN path in ES (no Spanish page yet) */
  localize?: boolean
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
  /** Empty items = plain top-level link (no dropdown) */
  items: NavItem[]
  cta: { name: string; href: string; localize?: boolean }
  localize?: boolean
  variant?: NavDropdownVariant
  featured?: FeaturedContent
}

/* ═══════════════════════════════════════════════════════════════
   Footer Navigation
   ═══════════════════════════════════════════════════════════════ */

const footerNavigationData: Record<Locale, Record<string, { title: string; items: { name: string; href: string; localize?: boolean }[] }>> = {
  // REALIGNMENT_2026-11-02_CULL §B: the footer mirrors the nav (NAV-2)
  en: {
    capabilities: {
      title: 'Capabilities',
      items: [
        { name: 'DataMiner xOps', href: '/capabilities/operational-intelligence' },
        { name: 'Quatro Klarety', href: '/capabilities/quatro-klarety' },
        { name: 'DataOS', href: '/capabilities/dataos-ontology-agents' },
        { name: 'Energy blocks', href: '/capabilities/energy-blocks' },
      ],
    },
    industries: {
      title: 'Industries',
      items: [
        { name: 'Energy and hydrocarbons', href: '/industries/energy' },
        { name: 'Mining and remediation', href: '/industries/mining' },
        { name: 'Environment, forestry and protected areas', href: '/industries/environment' },
        { name: 'Security and critical infrastructure', href: '/industries/security' },
      ],
    },
    howItWorks: {
      title: 'How it works',
      items: [
        { name: 'How it works', href: '/how-it-works' },
        { name: 'Reference work', href: '/proof' },
        { name: 'Insights', href: '/insights' },
      ],
    },
    company: {
      title: 'Company',
      items: [
        { name: 'About', href: '/company/about' },
        { name: 'Partners', href: '/partners' },
        { name: 'Contact', href: '/contact' },
        { name: 'Talk to our team', href: '/contact/demo' },
      ],
    },
  },
  es: {
    capabilities: {
      title: 'Capacidades',
      items: [
        { name: 'DataMiner xOps', href: '/capabilities/operational-intelligence' },
        { name: 'Quatro Klarety', href: '/capabilities/quatro-klarety' },
        { name: 'DataOS', href: '/capabilities/dataos-ontology-agents' },
        // No Spanish energy-blocks page until ES-NRG-BLK-1
        { name: 'Bloques de energía', href: '/capabilities/energy-blocks', localize: false },
      ],
    },
    industries: {
      title: 'Industrias',
      items: [
        { name: 'Energía e hidrocarburos', href: '/industries/energy' },
        { name: 'Minería y remediación', href: '/industries/mining' },
        { name: 'Ambiente, bosques y áreas protegidas', href: '/industries/environment' },
        { name: 'Seguridad e infraestructura crítica', href: '/industries/security' },
      ],
    },
    howItWorks: {
      title: 'Cómo funciona',
      items: [
        { name: 'Cómo funciona', href: '/how-it-works' },
        { name: 'Trabajo de referencia', href: '/proof' },
        { name: 'Artículos', href: '/insights', localize: false },
      ],
    },
    company: {
      title: 'Empresa',
      items: [
        { name: 'Nosotros', href: '/company/about' },
        { name: 'Socios', href: '/partners' },
        { name: 'Contacto', href: '/contact' },
        { name: 'Hable con nuestro equipo', href: '/contact/demo' },
      ],
    },
  },
}

/** Get localized footer navigation with prefixed hrefs */
export function getFooterNavigation(locale: Locale = 'en') {
  const data = footerNavigationData[locale]
  // Prefix hrefs for the locale, except links with no page in that locale yet
  const localized: Record<string, { title: string; items: { name: string; href: string }[] }> = {}
  for (const [key, section] of Object.entries(data)) {
    localized[key] = {
      title: section.title,
      items: section.items.map((item) => ({
        name: item.name,
        href: item.localize === false ? item.href : localizeHref(item.href, locale),
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
  // REALIGNMENT_2026-11-02_CULL §B and COPY_CULL §7 (NAV-2): four capabilities, four industries,
  // How it works as one link, Proof, and Company (About · Partners · Contact).
  en: [
    {
      name: 'Capabilities',
      href: '/capabilities',
      variant: 'stacked',
      items: [
        { name: 'DataMiner xOps', description: 'Every system you run, in one live model', href: '/capabilities/operational-intelligence', icon: LinkIcon },
        { name: 'Quatro Klarety', description: 'Territorial monitoring from space', href: '/capabilities/quatro-klarety', icon: GlobeAltIcon },
        { name: 'DataOS', description: 'Ontology and agents', href: '/capabilities/dataos-ontology-agents', icon: CommandLineIcon },
        { name: 'Energy blocks', description: 'Firm power in 90 to 120 days', href: '/capabilities/energy-blocks', icon: BoltIcon },
      ],
      cta: { name: 'All capabilities', href: '/capabilities' },
    },
    {
      name: 'Industries',
      href: '/industries',
      variant: 'stacked',
      items: [
        { name: 'Energy and hydrocarbons', description: 'Electricity, hydrocarbons, mining and water in one picture', href: '/industries/energy', icon: BoltIcon },
        { name: 'Mining and remediation', description: 'Every concession and the river below it, on one record', href: '/industries/mining', icon: BeakerIcon },
        { name: 'Environment, forestry and protected areas', description: 'What moves through a protected area, on the water and on land', href: '/industries/environment', icon: GlobeAltIcon },
        { name: 'Security and critical infrastructure', description: 'Evidence that holds up after the incident', href: '/industries/security', icon: ShieldIcon },
      ],
      cta: { name: 'All industries', href: '/industries' },
    },
    {
      name: 'How it works',
      href: '/how-it-works',
      items: [],
      cta: { name: 'How it works', href: '/how-it-works' },
    },
    {
      name: 'Proof',
      href: '/proof',
      variant: 'stacked',
      items: [
        { name: 'Reference work', description: 'What the operator saw, what the team did, what it took', href: '/proof', icon: ChartBarIcon },
        { name: 'Insights', description: 'Perspectives on operational intelligence', href: '/insights', icon: LightBulbIcon },
      ],
      cta: { name: 'Reference work', href: '/proof' },
    },
    {
      name: 'Company',
      href: '/company/about',
      variant: 'stacked',
      items: [
        { name: 'About', description: 'Our mission and the team behind Quatro', href: '/company/about', icon: BuildingLibraryIcon },
        { name: 'Partners', description: 'You hold the client relationship and know the market.', href: '/partners', icon: BriefcaseIcon },
        { name: 'Contact', description: 'Talk to our team', href: '/contact', icon: NewspaperIcon },
      ],
      cta: { name: 'About Quatro', href: '/company/about' },
    },
  ],
  es: [
    {
      name: 'Capacidades',
      href: '/capabilities',
      variant: 'stacked',
      items: [
        { name: 'DataMiner xOps', description: 'Todos sus sistemas en un solo modelo en vivo', href: '/capabilities/operational-intelligence', icon: LinkIcon },
        { name: 'Quatro Klarety', description: 'Monitoreo territorial desde el espacio', href: '/capabilities/quatro-klarety', icon: GlobeAltIcon },
        { name: 'DataOS', description: 'Ontología y agentes', href: '/capabilities/dataos-ontology-agents', icon: CommandLineIcon },
        // No Spanish energy-blocks page until ES-NRG-BLK-1
        { name: 'Bloques de energía', description: 'Potencia firme en 90 a 120 días', href: '/capabilities/energy-blocks', icon: BoltIcon, localize: false },
      ],
      cta: { name: 'Todas las capacidades', href: '/capabilities' },
    },
    {
      name: 'Industrias',
      href: '/industries',
      variant: 'stacked',
      items: [
        { name: 'Energía e hidrocarburos', description: 'Electricidad, hidrocarburos, minería y agua en un solo cuadro', href: '/industries/energy', icon: BoltIcon },
        { name: 'Minería y remediación', description: 'Cada concesión y el río de abajo, en un solo registro', href: '/industries/mining', icon: BeakerIcon },
        { name: 'Ambiente, bosques y áreas protegidas', description: 'Lo que se mueve en un área protegida, en el agua y en tierra', href: '/industries/environment', icon: GlobeAltIcon },
        { name: 'Seguridad e infraestructura crítica', description: 'Evidencia que resiste después del incidente', href: '/industries/security', icon: ShieldIcon },
      ],
      cta: { name: 'Todas las industrias', href: '/industries' },
    },
    {
      name: 'Cómo funciona',
      href: '/how-it-works',
      items: [],
      cta: { name: 'Cómo funciona', href: '/how-it-works' },
    },
    {
      name: 'Prueba',
      href: '/proof',
      variant: 'stacked',
      items: [
        { name: 'Trabajo de referencia', description: 'Lo que vio el operador, lo que hizo el equipo, lo que tomó', href: '/proof', icon: ChartBarIcon },
        { name: 'Artículos', description: 'Perspectivas sobre inteligencia operativa', href: '/insights', icon: LightBulbIcon, localize: false },
      ],
      cta: { name: 'Trabajo de referencia', href: '/proof' },
    },
    {
      name: 'Empresa',
      href: '/company/about',
      variant: 'stacked',
      items: [
        { name: 'Nosotros', description: 'Nuestra misión y el equipo detrás de Quatro', href: '/company/about', icon: BuildingLibraryIcon },
        { name: 'Socios', description: 'Usted tiene la relación con el cliente y conoce el mercado.', href: '/partners', icon: BriefcaseIcon },
        { name: 'Contacto', description: 'Hable con nuestro equipo', href: '/contact', icon: NewspaperIcon },
      ],
      cta: { name: 'Sobre Quatro', href: '/company/about' },
    },
  ],
}

/** Get localized primary navigation with prefixed hrefs */
export function getPrimaryNavigation(locale: Locale = 'en'): PrimaryNavItem[] {
  // Links marked localize: false keep the EN path (no Spanish page yet)
  const loc = (href: string, localize?: boolean) => (localize === false ? href : localizeHref(href, locale))
  return primaryNavigationData[locale].map((section) => ({
    ...section,
    href: loc(section.href, section.localize),
    items: section.items.map((item) => ({
      ...item,
      href: loc(item.href, item.localize),
    })),
    cta: {
      ...section.cta,
      href: loc(section.cta.href, section.cta.localize),
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
