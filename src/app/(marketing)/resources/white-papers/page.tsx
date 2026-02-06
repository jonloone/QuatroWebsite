import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'
import { CtaBanner } from '@/components/marketing/cta-banner'

export const metadata = {
  title: 'White Papers',
  description: 'In-depth research and analysis on operational intelligence topics.',
}

export default function WhitePapersPage() {
  return (
    <>
      <PageHeader
        badge="Resources"
        title="White Papers"
        description="In-depth research and analysis on operational intelligence topics."
      />
      <Section>
        <Placeholder label="White Papers List" />
      </Section>
      <CtaBanner />
    </>
  )
}
