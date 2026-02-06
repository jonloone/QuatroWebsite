import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms governing the use of Quatro products and services.',
}

export default function TermsPage() {
  return (
    <>
      <PageHeader title="Terms of Service" />
      <Section>
        <div className="prose prose-zinc mx-auto max-w-3xl">
          <Placeholder label="Terms of Service Content" />
        </div>
      </Section>
    </>
  )
}
