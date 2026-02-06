import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'

export const metadata = {
  title: 'Security',
  description: 'Quatro\'s approach to cybersecurity, data protection, and compliance.',
}

export default function SecurityPage() {
  return (
    <>
      <PageHeader title="Security" />
      <Section>
        <div className="prose prose-zinc mx-auto max-w-3xl">
          <Placeholder label="Security Content" />
        </div>
      </Section>
    </>
  )
}
