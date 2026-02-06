import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'
import { CtaBanner } from '@/components/marketing/cta-banner'

export const metadata = {
  title: 'Leadership',
  description: 'Meet Quatro\'s executive team and advisory board.',
}

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        badge="Company"
        title="Leadership"
        description="Meet Quatro's executive team and advisory board."
      />
      <Section>
        <Placeholder label="Executive Team" />
      </Section>
      <Section className="bg-neutral-800/2.5">
        <Placeholder label="Advisory Board" />
      </Section>
      <CtaBanner />
    </>
  )
}
