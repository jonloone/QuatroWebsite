import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { CtaBanner } from '@/components/marketing/cta-banner'
import Link from 'next/link'

export const metadata = {
  title: 'Solutions',
  description:
    'Outcome-driven solutions for asset monitoring, pipeline security, operational intelligence, and more.',
}

const solutions = [
  {
    name: 'Asset Monitoring & Management',
    href: '/solutions/asset-monitoring',
    description:
      'Real-time asset visibility, predictive maintenance & lifecycle management',
  },
  {
    name: 'Pipeline Integrity & Security',
    href: '/solutions/pipeline-security',
    description: 'Enhanced RTTM, leak detection & intrusion response',
  },
  {
    name: 'Operational Intelligence',
    href: '/solutions/operational-intelligence',
    description:
      'Unified digital twin, cross-domain data & AI-driven insights',
  },
  {
    name: 'Physical Security & Surveillance',
    href: '/solutions/physical-security',
    description:
      'Perimeter monitoring, video analytics & incident response',
  },
  {
    name: 'Fleet & Logistics',
    href: '/solutions/fleet-logistics',
    description:
      'Vehicle tracking, route optimization & cargo monitoring',
  },
  {
    name: 'Grid Operations',
    href: '/solutions/grid-operations',
    description:
      'Power generation monitoring, distribution & SCADA modernization',
  },
  {
    name: 'Network Operations',
    href: '/solutions/network-operations',
    description:
      'Infrastructure management, service assurance & fault management',
  },
]

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        badge="Solutions"
        title="Solutions for Every Operational Challenge"
        description="Purpose-built solutions that combine Quatro platform capabilities to solve your most pressing operational challenges."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <Link
              key={s.name}
              href={s.href}
              className="rounded-xl border border-neutral-800/5 p-6 transition hover:border-brand-500/20 hover:bg-brand-50"
            >
              <h3 className="text-base font-semibold text-neutral-800">
                {s.name}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                {s.description}
              </p>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  )
}
