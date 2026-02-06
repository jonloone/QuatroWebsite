import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'
import { FeatureGrid } from '@/components/marketing/feature-grid'
import { CtaBanner } from '@/components/marketing/cta-banner'

export const metadata = {
  title: 'Energy',
  description: 'Powering the world\'s most critical energy operations',
}

const segments = [
  {
    name: 'Oil & Gas',
    description:
      'Upstream exploration and production, midstream pipeline and transport, and downstream refining and distribution',
  },
  {
    name: 'Power Generation',
    description:
      'Thermal, renewable, and nuclear power plants with real-time monitoring and predictive maintenance',
  },
  {
    name: 'Transmission & Distribution',
    description:
      'Grid management, substation automation, and smart metering across utility networks',
  },
  {
    name: 'Water & Utilities',
    description:
      'Treatment facilities, distribution networks, and regulatory compliance management',
  },
]

export default function EnergyPage() {
  return (
    <>
      <PageHeader
        badge="Industries"
        title="Energy"
        description="Operational intelligence for the entire energy value chain — from upstream exploration to last-mile distribution."
        primaryCta={{ label: 'Request Demo', href: '/contact/demo' }}
        secondaryCta={{ label: 'Talk to Sales', href: '/contact/sales' }}
      />
      <Section>
        <Placeholder label="Market Overview — Global energy operations demand continuous uptime, safety compliance, and real-time visibility across distributed assets" />
      </Section>
      <Section className="bg-neutral-800/2.5">
        <FeatureGrid title="Market Segments" features={segments} />
      </Section>
      <Section>
        <Placeholder label="Solution Stack — Quatro products addressing this industry" />
      </Section>
      <Section>
        <Placeholder label="Case Study — Customer success in Energy" />
      </Section>
      <CtaBanner />
    </>
  )
}
