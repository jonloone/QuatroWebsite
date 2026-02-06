import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'
import { FeatureGrid } from '@/components/marketing/feature-grid'
import { CtaBanner } from '@/components/marketing/cta-banner'

export const metadata = {
  title: 'Asset Monitoring & Management',
  description:
    'Real-time asset visibility, predictive maintenance, and lifecycle management to maximize uptime and reduce operational costs.',
}

const capabilities = [
  {
    name: 'Real-Time Asset Visibility',
    description:
      'Continuous monitoring of asset health, location, and status across your entire infrastructure with live dashboards and alerts.',
  },
  {
    name: 'Predictive Maintenance',
    description:
      'AI-powered analytics that forecast equipment failures before they happen, reducing unplanned downtime and maintenance costs.',
  },
  {
    name: 'Asset Lifecycle Management',
    description:
      'End-to-end tracking from commissioning to decommissioning, ensuring optimal utilization and compliance at every stage.',
  },
  {
    name: 'Performance Optimization',
    description:
      'Data-driven insights to fine-tune asset performance, improve efficiency, and extend operational lifespan.',
  },
]

export default function AssetMonitoringPage() {
  return (
    <>
      <PageHeader
        badge="Solutions"
        title="Asset Monitoring & Management"
        description="Real-time asset visibility, predictive maintenance, and lifecycle management to maximize uptime and reduce operational costs."
        primaryCta={{ label: 'Request Demo', href: '/contact/demo' }}
        secondaryCta={{ label: 'Talk to Sales', href: '/contact/sales' }}
      />
      <Section>
        <Placeholder label="Challenge — Unplanned downtime and reactive maintenance drain budgets and put critical infrastructure at risk" />
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
