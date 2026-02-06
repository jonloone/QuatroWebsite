import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'
import { CtaBanner } from '@/components/marketing/cta-banner'

export const metadata = {
  title: 'Insights',
  description: 'Industry trends, technical articles, and operational intelligence use cases.',
}

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        badge="Resources"
        title="Insights"
        description="Industry trends, technical articles, and operational intelligence use cases."
      />
      <Section>
        <Placeholder label="Insights Grid" />
      </Section>
      <CtaBanner />
    </>
  )
}
