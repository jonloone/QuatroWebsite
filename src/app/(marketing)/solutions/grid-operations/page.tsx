import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'
import { FeatureGrid } from '@/components/marketing/feature-grid'
import { CtaBanner } from '@/components/marketing/cta-banner'

export const metadata = {
  title: 'Grid Operations',
  description:
    'Power generation monitoring, distribution management, DER integration, and SCADA modernization for resilient grid operations.',
}

const capabilities = [
  {
    name: 'Power Generation Monitoring',
    description:
      'Real-time visibility into generation assets including turbines, solar arrays, and substations with performance analytics and anomaly detection.',
  },
  {
    name: 'Distribution Management',
    description:
      'End-to-end monitoring of distribution networks with automated fault isolation, load balancing, and outage management.',
  },
  {
    name: 'DER Integration',
    description:
      'Seamless onboarding and management of distributed energy resources including solar, wind, storage, and EV charging infrastructure.',
  },
  {
    name: 'SCADA Modernization',
    description:
      'Upgrade legacy SCADA systems with modern, IP-based architectures that deliver enhanced security, scalability, and interoperability.',
  },
]

export default function GridOperationsPage() {
  return (
    <>
      <PageHeader
        badge="Solutions"
        title="Grid Operations"
        description="Power generation monitoring, distribution management, DER integration, and SCADA modernization for resilient grid operations."
        primaryCta={{ label: 'Request Demo', href: '/contact/demo' }}
        secondaryCta={{ label: 'Talk to Sales', href: '/contact/sales' }}
      />
      <Section>
        <Placeholder label="Challenge — Aging grid infrastructure and the rapid growth of distributed energy resources demand a modern, unified operations platform" />
      </Section>
      <Section className="bg-neutral-800/2.5">
        <FeatureGrid title="Key Capabilities" features={capabilities} />
      </Section>
      <Section>
        <Placeholder label="Related Products — Platform components powering this solution" />
      </Section>
      <Section>
        <Placeholder label="Case Study — Customer success story" />
      </Section>
      <CtaBanner />
    </>
  )
}
