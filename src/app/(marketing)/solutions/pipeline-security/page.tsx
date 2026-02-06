import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'
import { FeatureGrid } from '@/components/marketing/feature-grid'
import { CtaBanner } from '@/components/marketing/cta-banner'

export const metadata = {
  title: 'Pipeline Integrity & Security',
  description:
    'Enhanced real-time transient modeling, leak detection, and intrusion response to safeguard critical pipeline infrastructure.',
}

const capabilities = [
  {
    name: 'Enhanced Real-Time Transient Model',
    description:
      'Advanced RTTM analytics that continuously model pipeline flow dynamics to detect anomalies and pressure deviations in real time.',
  },
  {
    name: 'Leak Detection & Localization',
    description:
      'Multi-method leak detection combining acoustic, pressure, and flow analysis to pinpoint leak locations with high accuracy.',
  },
  {
    name: 'Intrusion Detection & Response',
    description:
      'Automated perimeter and right-of-way monitoring with instant alerts and coordinated response workflows for unauthorized access.',
  },
  {
    name: 'Intelligence-Led Threat Assessment',
    description:
      'Fuse operational data with external intelligence feeds to proactively identify and mitigate emerging threats to pipeline assets.',
  },
  {
    name: 'Satellite Monitoring Integration',
    description:
      'Leverage satellite imagery and remote sensing to monitor pipeline corridors, detect ground movement, and verify infrastructure integrity.',
  },
]

export default function PipelineSecurityPage() {
  return (
    <>
      <PageHeader
        badge="Solutions"
        title="Pipeline Integrity & Security"
        description="Enhanced real-time transient modeling, leak detection, and intrusion response to safeguard critical pipeline infrastructure."
        primaryCta={{ label: 'Request Demo', href: '/contact/demo' }}
        secondaryCta={{ label: 'Talk to Sales', href: '/contact/sales' }}
      />
      <Section>
        <Placeholder label="Challenge — Pipeline networks span thousands of kilometers across remote terrain, making leak detection and security monitoring extremely difficult" />
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
