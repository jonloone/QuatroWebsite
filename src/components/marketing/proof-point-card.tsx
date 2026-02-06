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

export function ProofPointCard({
  industryLabel,
  headline,
  narrative,
  cta,
}: {
  industryLabel: string
  headline: string
  narrative: string
  cta?: { label: string; href: string }
}) {
  return (
    <div className="flex flex-col rounded-xl border border-neutral-800/5 p-6 sm:p-8">
      <ImagePlaceholder className="mb-4 h-36" />
      <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">{industryLabel}</p>
      <h3 className="mt-3 text-lg font-bold text-neutral-800">{headline}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{narrative}</p>
      {cta && (
        <Link
          href={cta.href}
          className="mt-4 inline-flex text-sm font-semibold text-brand-500 hover:text-brand-600"
        >
          {cta.label} &rarr;
        </Link>
      )}
    </div>
  )
}
