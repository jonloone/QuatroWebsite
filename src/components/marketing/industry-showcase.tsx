import { Container } from '@/components/ui/container'
import { clsx } from 'clsx/lite'
import Link from 'next/link'

function ImagePlaceholder({ className }: { className?: string }) {
  return (
    <div className={clsx('flex items-center justify-center rounded-lg bg-neutral-200', className)}>
      <svg className="h-10 w-10 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
    </div>
  )
}

type Industry = {
  name: string
  href: string
  headline: string
  outcomes: string[]
  icon?: React.ReactNode
}

export function IndustryShowcase({
  heading = 'Built for the Industries That Build the World',
  industries,
  className,
}: {
  heading?: string
  industries: Industry[]
  className?: string
}) {
  const [featured, ...rest] = industries

  return (
    <section className={clsx('bg-neutral-100 py-16 sm:py-24', className)}>
      <Container>
        <h2 className="mb-12 text-center text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
          {heading}
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Featured industry - larger card */}
          <FeaturedCard {...featured} />
          {/* Grid of remaining industries */}
          <div className="grid gap-4 sm:grid-cols-2">
            {rest.map((industry) => (
              <IndustryCard key={industry.name} {...industry} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function FeaturedCard({ name, href, headline, outcomes, icon }: Industry) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-8 transition hover:border-brand-300 hover:shadow-md sm:p-10"
    >
      <ImagePlaceholder className="mb-6 h-48" />
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-500">
        {icon || <DefaultIndustryIcon />}
      </div>
      <h3 className="text-xl font-bold text-neutral-800 sm:text-2xl">{name}</h3>
      <p className="mt-2 text-base font-medium text-brand-500">{headline}</p>
      <ul className="mt-6 flex-1 space-y-3">
        {outcomes.map((outcome, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckIcon className="mt-1 h-4 w-4 flex-shrink-0 text-brand-500" />
            <span className="text-sm leading-relaxed text-neutral-600">{outcome}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-sm font-semibold text-brand-500 group-hover:text-brand-600">
        Explore {name} Solutions &rarr;
      </div>
    </Link>
  )
}

function IndustryCard({ name, href, headline, outcomes }: Industry) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-6 transition hover:border-brand-300 hover:shadow-sm"
    >
      <h3 className="text-lg font-bold text-neutral-800">{name}</h3>
      <p className="mt-1 text-sm font-medium text-brand-500">{headline}</p>
      <ul className="mt-4 flex-1 space-y-2">
        {outcomes.slice(0, 2).map((outcome, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckIcon className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-brand-500" />
            <span className="text-xs leading-relaxed text-neutral-600">{outcome}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-xs font-semibold text-brand-500 group-hover:text-brand-600">
        Learn more &rarr;
      </div>
    </Link>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function DefaultIndustryIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
      />
    </svg>
  )
}
