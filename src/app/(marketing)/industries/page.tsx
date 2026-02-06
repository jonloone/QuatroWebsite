import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { CtaBanner } from '@/components/marketing/cta-banner'
import Link from 'next/link'

export const metadata = {
  title: 'Industries',
  description:
    'Quatro serves energy, defense, industrial, infrastructure, and smart city environments with purpose-built solutions.',
}

const industries = [
  {
    name: 'Energy',
    href: '/industries/energy',
    description:
      'Powering the world\u2019s most critical energy operations \u2014 oil & gas, power generation, utilities & renewables',
    buyers: 'COO, VP Operations, Plant Manager',
  },
  {
    name: 'Defense',
    href: '/industries/defense',
    description:
      'Mission-ready intelligence and operational control for military, government & critical infrastructure',
    buyers: 'Program Manager, CISO, Mission Lead',
  },
  {
    name: 'Industrial',
    href: '/industries/industrial',
    description:
      'Intelligent operations for manufacturing, mining, processing & warehousing',
    buyers: 'Plant Manager, VP Manufacturing, COO',
  },
  {
    name: 'Infrastructure',
    href: '/industries/infrastructure',
    description:
      'Connected networks, unified operations for telecom, transportation & facilities',
    buyers: 'CTO, VP Network Ops, Facilities Director',
  },
  {
    name: 'Cities',
    href: '/industries/cities',
    description:
      'Smarter cities, safer communities \u2014 mobility, public safety & urban infrastructure',
    buyers: 'City CIO, Public Works Director',
  },
]

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        badge="Industries"
        title="Industries We Serve"
        description="Five outcome-oriented verticals aligned to the organizations that depend on operational intelligence."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <Link
              key={ind.name}
              href={ind.href}
              className="rounded-xl border border-neutral-800/5 p-6 transition hover:border-brand-500/20 hover:bg-brand-50"
            >
              <h3 className="text-lg font-semibold text-neutral-800">
                {ind.name}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                {ind.description}
              </p>
              <p className="mt-3 text-xs font-medium text-neutral-400">
                Key buyers: {ind.buyers}
              </p>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  )
}
