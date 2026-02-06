import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'
import { CtaBanner } from '@/components/marketing/cta-banner'

export const metadata = {
  title: 'Documentation',
  description: 'API docs, integration guides, and technical specifications.',
}

export default function DocumentationPage() {
  return (
    <>
      <PageHeader
        badge="Resources"
        title="Documentation"
        description="API docs, integration guides, and technical specifications."
      />
      <Section>
        <Placeholder label="Documentation Portal" />
      </Section>
      <CtaBanner />
    </>
  )
}
