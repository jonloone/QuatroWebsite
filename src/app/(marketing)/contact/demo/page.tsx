import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'
import { CtaBanner } from '@/components/marketing/cta-banner'

export const metadata = {
  title: 'Request Demo',
  description: 'See Quatro in action with a personalized demo.',
}

export default function DemoPage() {
  return (
    <>
      <PageHeader
        badge="Contact"
        title="Request a Demo"
        description="See Quatro in action with a personalized demo tailored to your operational challenges."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <Placeholder label="Contact Form — Demo Request" />
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
