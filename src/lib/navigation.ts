import {
  LinkIcon,
  CogIcon,
  CommandLineIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  LockClosedIcon,
  TruckIcon,
  BoltIcon,
  GlobeAltIcon,
  ShieldIcon,
  WrenchScrewdriverIcon,
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
  BriefcaseIcon,
  NewspaperIcon,
} from '@/components/icons/nav-icons'

export type NavDropdownVariant = 'stacked' | 'two-column' | 'featured'

export interface NavItem {
  name: string
  description: string
  href: string
  icon: React.ComponentType<{ className?: string }>
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

export const footerNavigation = {
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
}

export const primaryNavigation: PrimaryNavItem[] = [
  {
    name: 'Platform',
    href: '/platform',
    variant: 'stacked',
    items: [
      {
        name: 'Connect',
        description: 'Integrate sensors, devices, and data streams',
        href: '/platform/connect',
        icon: LinkIcon,
      },
      {
        name: 'Operate',
        description: 'Monitor and manage operations in real-time',
        href: '/platform/operate',
        icon: CogIcon,
      },
      {
        name: 'Command',
        description: 'Orchestrate responses and automate actions',
        href: '/platform/command',
        icon: CommandLineIcon,
      },
    ],
    cta: { name: 'Platform Overview', href: '/platform' },
  },
  {
    name: 'Solutions',
    href: '/solutions',
    variant: 'two-column',
    items: [
      {
        name: 'Asset Monitoring',
        description: 'Track and monitor critical infrastructure assets',
        href: '/solutions/asset-monitoring',
        icon: ChartBarIcon,
      },
      {
        name: 'Pipeline Security',
        description: 'Protect pipeline networks from threats',
        href: '/solutions/pipeline-security',
        icon: ShieldCheckIcon,
      },
      {
        name: 'Operational Intelligence',
        description: 'Transform data into actionable insights',
        href: '/solutions/operational-intelligence',
        icon: LightBulbIcon,
      },
      {
        name: 'Physical Security',
        description: 'Secure facilities and perimeters',
        href: '/solutions/physical-security',
        icon: LockClosedIcon,
      },
      {
        name: 'Fleet & Logistics',
        description: 'Optimize fleet operations and logistics',
        href: '/solutions/fleet-logistics',
        icon: TruckIcon,
      },
      {
        name: 'Grid Operations',
        description: 'Manage power grid infrastructure',
        href: '/solutions/grid-operations',
        icon: BoltIcon,
      },
      {
        name: 'Network Operations',
        description: 'Monitor distributed network systems',
        href: '/solutions/network-operations',
        icon: GlobeAltIcon,
      },
    ],
    cta: { name: 'All Solutions', href: '/solutions' },
  },
  {
    name: 'Industries',
    href: '/industries',
    variant: 'featured',
    items: [
      {
        name: 'Energy',
        description: 'Oil, gas, and renewable energy operations',
        href: '/industries/energy',
        icon: BoltIcon,
      },
      {
        name: 'Defense',
        description: 'Military and defense applications',
        href: '/industries/defense',
        icon: ShieldIcon,
      },
      {
        name: 'Industrial',
        description: 'Manufacturing and industrial facilities',
        href: '/industries/industrial',
        icon: WrenchScrewdriverIcon,
      },
      {
        name: 'Infrastructure',
        description: 'Critical infrastructure protection',
        href: '/industries/infrastructure',
        icon: BuildingLibraryIcon,
      },
      {
        name: 'Cities',
        description: 'Smart city and municipal operations',
        href: '/industries/cities',
        icon: BuildingOffice2Icon,
      },
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
      {
        name: 'About',
        description: 'Our mission, vision, and values',
        href: '/company/about',
        icon: BuildingLibraryIcon,
      },
      {
        name: 'Leadership',
        description: 'Meet our executive team',
        href: '/company/leadership',
        icon: UserGroupIcon,
      },
      {
        name: 'Careers',
        description: 'Join our growing team',
        href: '/company/careers',
        icon: BriefcaseIcon,
      },
      {
        name: 'News',
        description: 'Latest updates and announcements',
        href: '/company/news',
        icon: NewspaperIcon,
      },
    ],
    cta: { name: 'About Quatro', href: '/company/about' },
  },
]

export const ctaNavigation = [
  { name: 'Schedule a Consultation', href: '/contact/demo', variant: 'solid' as const },
]
