import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'
import { CtaBanner } from '@/components/marketing/cta-banner'

export const metadata = {
  title: 'Case Studies',
  description: 'See how organizations use Quatro to transform their operations.',
}

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        badge="Resources"
        title="Case Studies"
        description="See how organizations use Quatro to transform their operations."
      />
      <Section>
        <Placeholder label="Case Study Grid" />
      </Section>
      <CtaBanner />
    </>
  )
}
