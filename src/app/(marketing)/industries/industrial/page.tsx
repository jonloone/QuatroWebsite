import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'
import { FeatureGrid } from '@/components/marketing/feature-grid'
import { CtaBanner } from '@/components/marketing/cta-banner'

export const metadata = {
  title: 'Industrial',
  description: 'Intelligent operations for modern industry',
}

const segments = [
  {
    name: 'Manufacturing',
    description:
      'Discrete, process, and quality-driven manufacturing with real-time production visibility and optimization',
  },
  {
    name: 'Mining & Resources',
    description:
      'Remote asset monitoring, safety compliance, and resource extraction optimization',
  },
  {
    name: 'Processing & Chemicals',
    description:
      'Continuous and batch process control, hazardous material management, and regulatory compliance',
  },
  {
    name: 'Warehousing & Distribution',
    description:
      'Inventory management, order fulfillment, and logistics coordination across distribution networks',
  },
]

export default function IndustrialPage() {
  return (
    <>
      <PageHeader
        badge="Industries"
        title="Industrial"
        description="Intelligent operations for manufacturing, mining, processing, and warehousing environments."
        primaryCta={{ label: 'Request Demo', href: '/contact/demo' }}
        secondaryCta={{ label: 'Talk to Sales', href: '/contact/sales' }}
      />
      <Section>
        <Placeholder label="Market Overview — Industrial operations demand precision, safety, and continuous improvement across complex production environments" />
      </Section>
      <Section className="bg-neutral-800/2.5">
        <FeatureGrid title="Market Segments" features={segments} />
      </Section>
      <Section>
        <Placeholder label="Solution Stack — Quatro products addressing this industry" />
      </Section>
      <Section>
        <Placeholder label="Case Study — Customer success in Industrial" />
      </Section>
      <CtaBanner />
    </>
  )
}
