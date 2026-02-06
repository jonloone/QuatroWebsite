import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'
import { CtaBanner } from '@/components/marketing/cta-banner'

export const metadata = {
  title: 'Support',
  description: 'Get help with your existing Quatro deployment.',
}

export default function SupportPage() {
  return (
    <>
      <PageHeader
        badge="Contact"
        title="Support"
        description="Get help with your existing Quatro deployment."
      />
      <Section>
        <Placeholder label="Support Form" />
      </Section>
      <Section className="bg-neutral-800/2.5">
        <Placeholder label="Knowledge Base" />
      </Section>
      <Section>
        <Placeholder label="Customer Portal" />
      </Section>
      <CtaBanner />
    </>
  )
}
