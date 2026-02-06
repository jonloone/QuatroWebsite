import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Quatro collects, uses, and protects your data.',
}

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" />
      <Section>
        <div className="prose prose-zinc mx-auto max-w-3xl">
          <Placeholder label="Privacy Policy Content" />
        </div>
      </Section>
    </>
  )
}
