import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { CtaBanner } from '@/components/marketing/cta-banner'
import Link from 'next/link'

export const metadata = {
  title: 'Resources',
  description: 'Browse case studies, white papers, insights, and documentation.',
}

const resourceCategories = [
  { name: 'Case Studies', href: '/resources/case-studies', description: 'See how organizations use Quatro to transform their operations.' },
  { name: 'White Papers', href: '/resources/white-papers', description: 'In-depth research and analysis on operational intelligence topics.' },
  { name: 'Insights', href: '/resources/insights', description: 'Industry trends, technical articles, and operational intelligence use cases.' },
  { name: 'Documentation', href: '/resources/documentation', description: 'API docs, integration guides, and technical specifications.' },
]

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        badge="Resources"
        title="Resources"
        description="Browse case studies, white papers, insights, and documentation."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resourceCategories.map((cat) => (
            <Link key={cat.name} href={cat.href} className="rounded-xl border border-neutral-800/5 p-6 transition hover:border-brand-500/20 hover:bg-brand-50">
              <h3 className="text-base font-semibold text-neutral-800">{cat.name}</h3>
              <p className="mt-2 text-sm text-neutral-600">{cat.description}</p>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  )
}
