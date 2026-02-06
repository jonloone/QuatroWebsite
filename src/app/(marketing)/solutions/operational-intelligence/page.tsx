import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'
import { FeatureGrid } from '@/components/marketing/feature-grid'
import { CtaBanner } from '@/components/marketing/cta-banner'

export const metadata = {
  title: 'Operational Intelligence',
  description:
    'Unified digital twin, cross-domain data aggregation, and AI-driven insights to transform raw data into actionable operational decisions.',
}

const capabilities = [
  {
    name: 'Unified Digital Twin',
    description:
      'A living, real-time digital replica of your entire operation that enables simulation, scenario planning, and rapid decision-making.',
  },
  {
    name: 'Cross-Domain Data Aggregation',
    description:
      'Ingest and correlate data from IT, OT, IoT, and third-party systems into a single operational view, breaking down information silos.',
  },
  {
    name: 'AI-Driven Insights & Forecasting',
    description:
      'Machine learning models that surface hidden patterns, predict operational outcomes, and recommend optimal courses of action.',
  },
  {
    name: 'Process Automation',
    description:
      'Rule-based and intelligent automation of repetitive workflows, freeing operators to focus on high-value decisions.',
  },
]

export default function OperationalIntelligencePage() {
  return (
    <>
      <PageHeader
        badge="Solutions"
        title="Operational Intelligence"
        description="Unified digital twin, cross-domain data aggregation, and AI-driven insights to transform raw data into actionable operational decisions."
        primaryCta={{ label: 'Request Demo', href: '/contact/demo' }}
        secondaryCta={{ label: 'Talk to Sales', href: '/contact/sales' }}
      />
      <Section>
        <Placeholder label="Challenge — Siloed data across disparate systems prevents operators from seeing the full picture and making timely decisions" />
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
