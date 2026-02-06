import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'
import { CtaBanner } from '@/components/marketing/cta-banner'

export const metadata = {
  title: 'Talk to Sales',
  description: 'Discuss your operational challenges with our solutions team.',
}

export default function SalesPage() {
  return (
    <>
      <PageHeader
        badge="Contact"
        title="Talk to Sales"
        description="Discuss your operational challenges with our solutions team."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <Placeholder label="Contact Form — Sales Inquiry" />
          <div className="space-y-8">
            <Placeholder label="Contact Information" />
            <Placeholder label="FAQ / What to Expect" />
          </div>
        </div>
      </Section>
      <CtaBanner />
    </>
  )
}
