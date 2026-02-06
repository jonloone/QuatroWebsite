import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'
import { CtaBanner } from '@/components/marketing/cta-banner'

export const metadata = {
  title: 'Careers',
  description: 'Join the team building the future of industrial intelligence.',
}

export default function CareersPage() {
  return (
    <>
      <PageHeader
        badge="Company"
        title="Careers"
        description="Join the team building the future of industrial intelligence."
      />
      <Section>
        <Placeholder label="Culture & Values" />
      </Section>
      <Section className="bg-neutral-800/2.5">
        <Placeholder label="Open Positions" />
      </Section>
      <Section>
        <Placeholder label="Benefits" />
      </Section>
      <CtaBanner />
    </>
  )
}
