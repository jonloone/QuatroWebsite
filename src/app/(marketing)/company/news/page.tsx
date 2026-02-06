import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'
import { CtaBanner } from '@/components/marketing/cta-banner'

export const metadata = {
  title: 'News',
  description: 'Latest press releases, media coverage, and announcements from Quatro.',
}

export default function NewsPage() {
  return (
    <>
      <PageHeader
        badge="Company"
        title="News"
        description="Latest press releases, media coverage, and announcements from Quatro."
      />
      <Section>
        <Placeholder label="Press Releases" />
      </Section>
      <Section className="bg-neutral-800/2.5">
        <Placeholder label="Media Coverage" />
      </Section>
      <CtaBanner />
    </>
  )
}
