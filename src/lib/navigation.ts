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
        { name: 'The Intelligence Stack', href: '/utility' },
        { name: 'Capabilities', href: '/solutions' },
        { name: 'Capa de implementación xOps', href: '/utility/xops' },
        { name: 'Deployment model', href: '/utility/technology' },
      ],
    },
    industries: {
        title: 'Industries',
        items: [
          { name: 'Smart Cities & Utilities', href: '/industries/cities' },
          { name: 'Oil & Gas / Energy', href: '/industries/energy' },
          { name: 'Maritime / Ports', href: '/solutions/port-operations' },
          { name: 'Logistics / Supply Chain', href: '/industries/transportation' },
          { name: 'Intelligence', href: '/industries/defense' },
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
        { name: 'El stack de inteligencia', href: '/utility' },
        { name: 'Capacidades', href: '/solutions' },
        { name: 'Capa de implementación xOps', href: '/utility/xops' },
        { name: 'Modelo de despliegue', href: '/utility/technology' },
      ],
    },
    industries: {
        title: 'Industrias',
        items: [
          { name: 'Ciudades inteligentes y servicios públicos', href: '/es/industries/cities' },
          { name: 'Petróleo, gas y energía', href: '/es/industries/energy' },
          { name: 'Marítimo y puertos', href: '/es/solutions/port-operations' },
          { name: 'Logística y cadena de suministro', href: '/es/industries/transportation' },
          { name: 'Inteligencia', href: '/es/industries/defense' },
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
        { name: 'Hable con nuestro equipo', href: '/contact/demo' },
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
          { name: 'Smart Cities & Utilities', description: 'City, utility, water, waste, and public infrastructure workflows', href: '/industries/cities', icon: BuildingLibraryIcon },
          { name: 'Oil & Gas / Energy', description: 'Pipeline, grid, production, asset, and environmental operations', href: '/industries/energy', icon: BoltIcon },
          { name: 'Maritime / Ports', description: 'Port operations, maritime awareness, cargo, gates, and customs workflows', href: '/solutions/port-operations', icon: GlobeAltIcon },
          { name: 'Logistics / Supply Chain', description: 'Fleet, freight, cold-chain, exception, and corridor intelligence', href: '/industries/transportation', icon: TruckIcon },
          { name: 'Intelligence', description: 'Source-to-assessment workflows for mission and cross-agency teams', href: '/industries/defense', icon: ShieldIcon }
        ],
      cta: { name: 'All Industries', href: '/industries' },
    },
    {
      name: 'How It Works',
      href: '/utility',
      variant: 'stacked',
      items: [
        { name: 'The Intelligence Stack', description: 'Data, reasoning, agents, and workflows integrated for your operation', href: '/utility', icon: LinkIcon },
        { name: 'Capabilities', description: 'Operational workflows, agents, governance, and proof points', href: '/solutions', icon: WrenchScrewdriverIcon },
        { name: 'Deployment Model', description: 'Architecture, governance, and customer-owned deployment options', href: '/utility/technology', icon: CogIcon },
        { name: 'xOps', description: 'Implementation layer for adaptive workflows and operations surfaces', href: '/utility/xops', icon: CommandLineIcon },
      ],
      cta: { name: 'How It Works', href: '/utility' },
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
          { name: 'Ciudades inteligentes y servicios públicos', description: 'Flujos para ciudad, agua, residuos, servicios e infraestructura pública', href: '/es/industries/cities', icon: BuildingLibraryIcon },
          { name: 'Petróleo, gas y energía', description: 'Operaciones de oleoductos, red eléctrica, producción, activos y ambiente', href: '/es/industries/energy', icon: BoltIcon },
          { name: 'Marítimo y puertos', description: 'Operaciones portuarias, conciencia marítima, carga, accesos y aduanas', href: '/es/solutions/port-operations', icon: GlobeAltIcon },
          { name: 'Logística y cadena de suministro', description: 'Flota, carga, cadena de frío, excepciones y corredores logísticos', href: '/es/industries/transportation', icon: TruckIcon },
          { name: 'Inteligencia', description: 'Flujos de fuente a evaluación para equipos de misión y coordinación', href: '/es/industries/defense', icon: ShieldIcon }
        ],
      cta: { name: 'Todas las Industrias', href: '/industries' },
    },
    {
      name: 'Cómo Trabajamos',
      href: '/utility',
      variant: 'stacked',
      items: [
        { name: 'El stack de inteligencia', description: 'Datos, razonamiento, agentes y flujos integrados para su operación', href: '/utility', icon: LinkIcon },
        { name: 'Capacidades', description: 'Flujos operativos, agentes, gobernanza y resultados', href: '/solutions', icon: WrenchScrewdriverIcon },
        { name: 'Modelo de despliegue', description: 'Arquitectura, gobernanza y opciones bajo control del cliente', href: '/utility/technology', icon: CogIcon },
        { name: 'xOps', description: 'Capa de implementación para flujos y superficies operativas', href: '/utility/xops', icon: CommandLineIcon },
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
