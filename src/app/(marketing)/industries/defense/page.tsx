import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'
import { FeatureGrid } from '@/components/marketing/feature-grid'
import { CtaBanner } from '@/components/marketing/cta-banner'

export const metadata = {
  title: 'Defense',
  description: 'Mission-ready intelligence and operational control',
}

const segments = [
  {
    name: 'Critical Infrastructure Protection',
    description:
      'Securing essential facilities, perimeters, and assets against physical and cyber threats',
  },
  {
    name: 'Intelligence Operations',
    description:
      'Multi-source data fusion, situational awareness, and decision support for intelligence missions',
  },
  {
    name: 'Mission Support',
    description:
      'Logistics, communications, and operational planning for military and government missions',
  },
  {
    name: 'Government & Public Safety',
    description:
      'Interagency coordination, emergency management, and public safety operations',
  },
]

export default function DefensePage() {
  return (
    <>
      <PageHeader
        badge="Industries"
        title="Defense"
        description="Mission-ready intelligence and operational control for military, government, and critical infrastructure protection."
        primaryCta={{ label: 'Request Demo', href: '/contact/demo' }}
        secondaryCta={{ label: 'Talk to Sales', href: '/contact/sales' }}
      />
      <Section>
        <Placeholder label="Market Overview — Defense and government organizations require secure, resilient, and interoperable systems for mission-critical operations" />
      </Section>
      <Section className="bg-neutral-800/2.5">
        <FeatureGrid title="Market Segments" features={segments} />
      </Section>
      <Section>
        <Placeholder label="Solution Stack — Quatro products addressing this industry" />
      </Section>
      <Section>
        <Placeholder label="Case Study — Customer success in Defense" />
      </Section>
      <CtaBanner />
    </>
  )
}
