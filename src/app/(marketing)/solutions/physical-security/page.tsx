import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'
import { FeatureGrid } from '@/components/marketing/feature-grid'
import { CtaBanner } from '@/components/marketing/cta-banner'

export const metadata = {
  title: 'Physical Security & Surveillance',
  description:
    'Perimeter monitoring, video analytics, access control integration, and incident response automation to protect critical facilities.',
}

const capabilities = [
  {
    name: 'Perimeter Monitoring',
    description:
      'Multi-sensor perimeter detection using radar, lidar, thermal cameras, and fiber-optic sensing to secure facility boundaries around the clock.',
  },
  {
    name: 'Video Analytics & AI',
    description:
      'Intelligent video processing that detects objects, recognizes behaviors, and triggers alerts — reducing false alarms and operator fatigue.',
  },
  {
    name: 'Access Control Integration',
    description:
      'Unified management of physical access credentials, biometrics, and visitor logs integrated with your operational security policies.',
  },
  {
    name: 'Incident Response Automation',
    description:
      'Pre-defined and adaptive response playbooks that coordinate alarms, notifications, and field dispatch for rapid threat mitigation.',
  },
]

export default function PhysicalSecurityPage() {
  return (
    <>
      <PageHeader
        badge="Solutions"
        title="Physical Security & Surveillance"
        description="Perimeter monitoring, video analytics, access control integration, and incident response automation to protect critical facilities."
        primaryCta={{ label: 'Request Demo', href: '/contact/demo' }}
        secondaryCta={{ label: 'Talk to Sales', href: '/contact/sales' }}
      />
      <Section>
        <Placeholder label="Challenge — Expanding facility footprints and evolving threats demand smarter security that goes beyond cameras and guards" />
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
