import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'
import { CtaBanner } from '@/components/marketing/cta-banner'

export const metadata = {
  title: 'About',
  description: 'Learn about Quatro\'s mission to deliver industrial intelligence at the speed of operations.',
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="Company"
        title="About Quatro"
        description="We believe operational intelligence should move at the speed of operations — not the speed of IT procurement."
      />
      <Section>
        <Placeholder label="Mission & Vision" />
      </Section>
      <Section className="bg-neutral-800/2.5">
        <Placeholder label="Founding Story" />
      </Section>
      <Section>
        <Placeholder label="Leadership Principles" />
      </Section>
      <CtaBanner />
    </>
  )
}
