import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'
import Link from 'next/link'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Quatro — request a demo, talk to sales, or contact support.',
}

const contactOptions = [
  { name: 'Request a Demo', href: '/contact/demo', description: 'See Quatro in action with a personalized demonstration.' },
  { name: 'Talk to Sales', href: '/contact/sales', description: 'Discuss your operational challenges with our solutions team.' },
  { name: 'Contact Support', href: '/contact/support', description: 'Get help with your existing Quatro deployment.' },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="Contact"
        title="Get in Touch"
        description="Whether you're ready for a demo or just exploring — we're here to help."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-3">
          {contactOptions.map((opt) => (
            <Link key={opt.name} href={opt.href} className="rounded-xl border border-neutral-800/5 p-6 text-center transition hover:border-brand-500/20 hover:bg-brand-50">
              <h3 className="text-base font-semibold text-neutral-800">{opt.name}</h3>
              <p className="mt-2 text-sm text-neutral-600">{opt.description}</p>
            </Link>
          ))}
        </div>
      </Section>
      <Section className="bg-neutral-800/2.5">
        <Placeholder label="Office Locations" />
      </Section>
    </>
  )
}
