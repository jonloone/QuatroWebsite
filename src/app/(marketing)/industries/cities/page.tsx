import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'
import { FeatureGrid } from '@/components/marketing/feature-grid'
import { CtaBanner } from '@/components/marketing/cta-banner'

export const metadata = {
  title: 'Cities',
  description: 'Smarter cities, safer communities',
}

const segments = [
  {
    name: 'Mobility & Traffic',
    description:
      'Traffic management, public transit optimization, and multimodal mobility coordination',
  },
  {
    name: 'Public Safety',
    description:
      'Emergency response, surveillance, and law enforcement coordination for safer communities',
  },
  {
    name: 'Urban Infrastructure',
    description:
      'Water, waste, lighting, and utility management for resilient urban environments',
  },
  {
    name: 'Environment & Sustainability',
    description:
      'Air quality monitoring, energy efficiency, and sustainability tracking for greener cities',
  },
]

export default function CitiesPage() {
  return (
    <>
      <PageHeader
        badge="Industries"
        title="Cities"
        description="Smarter cities and safer communities through integrated mobility, public safety, and urban infrastructure management."
        primaryCta={{ label: 'Request Demo', href: '/contact/demo' }}
        secondaryCta={{ label: 'Talk to Sales', href: '/contact/sales' }}
      />
      <Section>
        <Placeholder label="Market Overview — Urban environments require integrated platforms that unify mobility, safety, and infrastructure into a single operational picture" />
      </Section>
      <Section className="bg-neutral-800/2.5">
        <FeatureGrid title="Market Segments" features={segments} />
      </Section>
      <Section>
        <Placeholder label="Solution Stack — Quatro products addressing this industry" />
      </Section>
      <Section>
        <Placeholder label="Case Study — Customer success in Cities" />
      </Section>
      <CtaBanner />
    </>
  )
}
