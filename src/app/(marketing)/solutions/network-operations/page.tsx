import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'
import { FeatureGrid } from '@/components/marketing/feature-grid'
import { CtaBanner } from '@/components/marketing/cta-banner'

export const metadata = {
  title: 'Network Operations',
  description:
    'Infrastructure management, service assurance, provisioning, and fault management for reliable network operations.',
}

const capabilities = [
  {
    name: 'Infrastructure Management',
    description:
      'Comprehensive inventory and topology management for physical and virtual network assets with real-time health monitoring.',
  },
  {
    name: 'Service Assurance & SLA',
    description:
      'Proactive service quality monitoring with SLA tracking, threshold alerting, and automated remediation to maintain uptime commitments.',
  },
  {
    name: 'Provisioning & Orchestration',
    description:
      'Automated provisioning workflows that accelerate service delivery and reduce configuration errors across multi-vendor environments.',
  },
  {
    name: 'Fault Management',
    description:
      'Intelligent alarm correlation, root-cause analysis, and ticket generation that cut mean-time-to-repair and reduce operator workload.',
  },
]

export default function NetworkOperationsPage() {
  return (
    <>
      <PageHeader
        badge="Solutions"
        title="Network Operations"
        description="Infrastructure management, service assurance, provisioning, and fault management for reliable network operations."
        primaryCta={{ label: 'Request Demo', href: '/contact/demo' }}
        secondaryCta={{ label: 'Talk to Sales', href: '/contact/sales' }}
      />
      <Section>
        <Placeholder label="Challenge — Growing network complexity and multi-vendor environments make it harder to maintain visibility and meet service-level commitments" />
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
