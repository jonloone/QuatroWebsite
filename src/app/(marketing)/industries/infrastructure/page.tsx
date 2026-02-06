import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'
import { FeatureGrid } from '@/components/marketing/feature-grid'
import { CtaBanner } from '@/components/marketing/cta-banner'

export const metadata = {
  title: 'Infrastructure',
  description: 'Connected networks, unified operations',
}

const segments = [
  {
    name: 'Telecommunications',
    description:
      'Network monitoring, service assurance, and infrastructure management for telecom operators',
  },
  {
    name: 'Transportation',
    description:
      'Rail, maritime, aviation, and road network operations with real-time tracking and safety management',
  },
  {
    name: 'Logistics & Fleet',
    description:
      'Fleet management, route optimization, and supply chain visibility across logistics networks',
  },
  {
    name: 'Facilities & Venues',
    description:
      'Building management, venue operations, and facility maintenance for large-scale environments',
  },
]

export default function InfrastructurePage() {
  return (
    <>
      <PageHeader
        badge="Industries"
        title="Infrastructure"
        description="Connected networks and unified operations for telecommunications, transportation, logistics, and facilities."
        primaryCta={{ label: 'Request Demo', href: '/contact/demo' }}
        secondaryCta={{ label: 'Talk to Sales', href: '/contact/sales' }}
      />
      <Section>
        <Placeholder label="Market Overview — Modern infrastructure demands seamless connectivity, predictive maintenance, and unified command across distributed networks" />
      </Section>
      <Section className="bg-neutral-800/2.5">
        <FeatureGrid title="Market Segments" features={segments} />
      </Section>
      <Section>
        <Placeholder label="Solution Stack — Quatro products addressing this industry" />
      </Section>
      <Section>
        <Placeholder label="Case Study — Customer success in Infrastructure" />
      </Section>
      <CtaBanner />
    </>
  )
}
