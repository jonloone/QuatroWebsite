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
  en: {
    capabilities: {
      title: 'Capabilities',
      items: [
        { name: 'Quatro Klarety', href: '/capabilities/quatro-klarety' },
        { name: 'The operational model', href: '/capabilities/operational-intelligence' },
        { name: 'IoT, edge and OT communications', href: '/capabilities/iot-edge' },
        { name: 'Reasoning, agents and evidence', href: '/capabilities/reasoning-and-evidence' },
        { name: 'Intelligence and risk baseline', href: '/capabilities/risk-baseline' },
        { name: 'Managed service and sovereign hosting', href: '/capabilities/managed-service' },
      ],
    },
    industries: {
      title: 'Industries',
      items: [
        { name: 'Energy and pipelines', href: '/industries/energy' },
        { name: 'Environment and protected areas', href: '/industries/environment' },
        { name: 'National Security', href: '/industries/defense' },
        { name: 'Networks', href: '/industries/networks' },
        { name: 'Cities', href: '/industries/cities' },
      ],
    },
    howItWorks: {
      title: 'How it works',
      items: [
        { name: 'The operational picture', href: '/how-it-works' },
        { name: 'How an engagement runs', href: '/how-it-works/engagement' },
        { name: 'Sovereignty, hosting and governance', href: '/how-it-works/sovereignty' },
        { name: 'Insights', href: '/insights' },
      ],
    },
    company: {
      title: 'Company',
      items: [
        { name: 'About', href: '/company/about' },
        { name: 'Leadership', href: '/company/leadership' },
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
        { name: 'Quatro Klarety', href: '/capabilities/quatro-klarety', localize: false },
        { name: 'El modelo operativo', href: '/capabilities/operational-intelligence', localize: false },
        { name: 'IoT, borde y comunicaciones OT', href: '/capabilities/iot-edge', localize: false },
        { name: 'Razonamiento, agentes y evidencia', href: '/capabilities/reasoning-and-evidence', localize: false },
        { name: 'Inteligencia y línea base de riesgo', href: '/capabilities/risk-baseline', localize: false },
        { name: 'Servicio gestionado y alojamiento soberano', href: '/capabilities/managed-service', localize: false },
      ],
    },
    industries: {
      title: 'Industrias',
      items: [
        { name: 'Energía e hidrocarburos', href: '/industries/energy' },
        { name: 'Ambiente y áreas protegidas', href: '/industries/environment', localize: false },
        { name: 'Seguridad Nacional', href: '/industries/defense' },
        { name: 'Redes', href: '/industries/networks', localize: false },
        { name: 'Ciudades', href: '/industries/cities' },
      ],
    },
    howItWorks: {
      title: 'Cómo funciona',
      items: [
        { name: 'El cuadro operativo', href: '/how-it-works' },
        { name: 'Cómo se ejecuta un compromiso', href: '/how-it-works/engagement' },
        { name: 'Soberanía, alojamiento y gobernanza', href: '/how-it-works/sovereignty' },
        { name: 'Artículos', href: '/es/resources/insights' },
      ],
    },
    company: {
      title: 'Empresa',
      items: [
        { name: 'Nosotros', href: '/company/about' },
        { name: 'Liderazgo', href: '/company/leadership' },
        { name: 'Socios', href: '/partners', localize: false },
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
  // REALIGNMENT_2026-10-20 §3.
  // Proof points at Insights until PROOF-1 builds /proof; industries change as IND-* land.
  en: [
    {
      name: 'Capabilities',
      href: '/capabilities',
      variant: 'stacked',
      items: [
        { name: 'Quatro Klarety', description: 'Territorial monitoring from space', href: '/capabilities/quatro-klarety', icon: GlobeAltIcon },
        { name: 'The operational model', description: 'Every system you run, in one live model', href: '/capabilities/operational-intelligence', icon: LinkIcon },
        { name: 'IoT, edge and OT communications', description: 'Hardware and OT communications in the field', href: '/capabilities/iot-edge', icon: SignalIcon },
        { name: 'Reasoning, agents and evidence', description: 'Agents propose; your operators decide', href: '/capabilities/reasoning-and-evidence', icon: CommandLineIcon },
        { name: 'Intelligence and risk baseline', description: 'Know where the risk sits before field capital is committed', href: '/capabilities/risk-baseline', icon: ShieldCheckIcon },
        { name: 'Managed service and sovereign hosting', description: 'Operated in your country, owned by you', href: '/capabilities/managed-service', icon: LockClosedIcon },
      ],
      cta: { name: 'All capabilities', href: '/capabilities' },
    },
    {
      name: 'Industries',
      href: '/industries',
      variant: 'stacked',
      items: [
        { name: 'Energy and pipelines', description: 'Electricity, hydrocarbons, mining and water in one picture', href: '/industries/energy', icon: BoltIcon },
        { name: 'Environment and protected areas', description: 'What moves through a protected area, on the water and on land', href: '/industries/environment', icon: GlobeAltIcon },
        { name: 'National Security', description: 'Sovereign intelligence across community and territorial domains', href: '/industries/defense', icon: ShieldIcon },
        { name: 'Networks', description: 'Ground to orbit, one view of connectivity operations', href: '/industries/networks', icon: SignalIcon },
        { name: 'Cities', description: 'Water, waste and safety in one operational picture', href: '/industries/cities', icon: BuildingLibraryIcon },
      ],
      cta: { name: 'All industries', href: '/industries' },
    },
    {
      name: 'How it works',
      href: '/how-it-works',
      variant: 'stacked',
      items: [
        { name: 'The operational picture', description: 'From satellite to SCADA to the field', href: '/how-it-works', icon: LinkIcon },
        { name: 'How an engagement runs', description: 'From a proof of value to an annual service', href: '/how-it-works/engagement', icon: WrenchScrewdriverIcon },
        { name: 'Sovereignty, hosting and governance', description: 'What stays in your country and what the AI may do', href: '/how-it-works/sovereignty', icon: LockClosedIcon },
      ],
      cta: { name: 'How it works', href: '/how-it-works' },
    },
    {
      name: 'Proof',
      href: '/insights',
      variant: 'stacked',
      items: [
        { name: 'Insights', description: 'Perspectives on operational intelligence', href: '/insights', icon: LightBulbIcon },
      ],
      cta: { name: 'All insights', href: '/insights' },
    },
    {
      name: 'Partners',
      href: '/partners',
      items: [],
      cta: { name: 'Partners', href: '/partners' },
    },
    {
      name: 'Company',
      href: '/company/about',
      variant: 'stacked',
      items: [
        { name: 'About', description: 'Our mission and the team behind Quatro', href: '/company/about', icon: BuildingLibraryIcon },
        { name: 'Leadership', description: 'The people who run Quatro', href: '/company/leadership', icon: BriefcaseIcon },
        { name: 'Contact', description: 'Talk to our team', href: '/contact', icon: NewspaperIcon },
      ],
      cta: { name: 'About Quatro', href: '/company/about' },
    },
  ],
  es: [
    {
      name: 'Capacidades',
      href: '/capabilities',
      localize: false,
      variant: 'stacked',
      items: [
        { name: 'Quatro Klarety', description: 'Monitoreo territorial desde el espacio', href: '/capabilities/quatro-klarety', icon: GlobeAltIcon, localize: false },
        { name: 'El modelo operativo', description: 'Todos sus sistemas, en un solo modelo operativo en vivo', href: '/capabilities/operational-intelligence', icon: LinkIcon, localize: false },
        { name: 'IoT, borde y comunicaciones OT', description: 'Hardware y comunicaciones OT en campo', href: '/capabilities/iot-edge', icon: SignalIcon, localize: false },
        { name: 'Razonamiento, agentes y evidencia', description: 'Los agentes proponen; sus operadores deciden', href: '/capabilities/reasoning-and-evidence', icon: CommandLineIcon, localize: false },
        { name: 'Inteligencia y línea base de riesgo', description: 'Sepa dónde está el riesgo antes de comprometer capital en campo', href: '/capabilities/risk-baseline', icon: ShieldCheckIcon, localize: false },
        { name: 'Servicio gestionado y alojamiento soberano', description: 'Operado en su país, de su propiedad', href: '/capabilities/managed-service', icon: LockClosedIcon, localize: false },
      ],
      cta: { name: 'Todas las capacidades', href: '/capabilities', localize: false },
    },
    {
      name: 'Industrias',
      href: '/industries',
      variant: 'stacked',
      items: [
        { name: 'Energía e hidrocarburos', description: 'Electricidad, hidrocarburos, minería y agua en un solo cuadro', href: '/industries/energy', icon: BoltIcon },
        { name: 'Ambiente y áreas protegidas', description: 'Lo que se mueve en un área protegida, en el agua y en tierra', href: '/industries/environment', icon: GlobeAltIcon, localize: false },
        { name: 'Seguridad Nacional', description: 'Inteligencia soberana para protección comunitaria y territorial', href: '/industries/defense', icon: ShieldIcon },
        { name: 'Redes', description: 'De tierra a órbita, una sola vista de las operaciones de conectividad', href: '/industries/networks', icon: SignalIcon, localize: false },
        { name: 'Ciudades', description: 'Agua, residuos y seguridad en un solo cuadro operativo', href: '/industries/cities', icon: BuildingLibraryIcon },
      ],
      cta: { name: 'Todas las industrias', href: '/industries' },
    },
    {
      name: 'Cómo funciona',
      href: '/how-it-works',
      variant: 'stacked',
      items: [
        { name: 'El cuadro operativo', description: 'Del satélite al SCADA y al campo', href: '/how-it-works', icon: LinkIcon },
        { name: 'Cómo se ejecuta un compromiso', description: 'De una prueba de valor a un servicio anual', href: '/how-it-works/engagement', icon: WrenchScrewdriverIcon },
        { name: 'Soberanía, alojamiento y gobernanza', description: 'Qué se queda en su país y qué puede hacer la IA', href: '/how-it-works/sovereignty', icon: LockClosedIcon },
      ],
      cta: { name: 'Cómo funciona', href: '/how-it-works' },
    },
    {
      name: 'Prueba',
      href: '/es/resources/insights',
      variant: 'stacked',
      items: [
        { name: 'Artículos', description: 'Perspectivas sobre inteligencia operativa', href: '/es/resources/insights', icon: LightBulbIcon },
      ],
      cta: { name: 'Todos los artículos', href: '/es/resources/insights' },
    },
    {
      name: 'Socios',
      href: '/partners',
      localize: false,
      items: [],
      cta: { name: 'Socios', href: '/partners', localize: false },
    },
    {
      name: 'Empresa',
      href: '/company/about',
      variant: 'stacked',
      items: [
        { name: 'Nosotros', description: 'Nuestra misión y el equipo detrás de Quatro', href: '/company/about', icon: BuildingLibraryIcon },
        { name: 'Liderazgo', description: 'Las personas que dirigen Quatro', href: '/company/leadership', icon: BriefcaseIcon },
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
