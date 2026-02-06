import { clsx } from 'clsx/lite'
import { Container } from '@/components/ui/container'
import { Link } from '@/components/ui/link'
import { Text } from '@/components/ui/text'
import type { ReactNode } from 'react'

type Feature = {
  eyebrow: string
  headline: string
  description: string
  link: { label: string; href: string }
  demo: ReactNode
}

function FeatureRow({ feature, reverse }: { feature: Feature; reverse: boolean }) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div className={reverse ? 'lg:order-2' : ''}>
        <p className="text-sm/7 font-medium text-brand-500">{feature.eyebrow}</p>
        <h3 className="mt-2 font-display text-[2rem]/10 tracking-tight text-pretty text-neutral-800 sm:text-5xl/14">
          {feature.headline}
        </h3>
        <Text className="mt-4">{feature.description}</Text>
        <div className="mt-6">
          <Link href={feature.link.href}>
            {feature.link.label}
            <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
              <path
                fillRule="evenodd"
                d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className={reverse ? 'lg:order-1' : ''}>{feature.demo}</div>
    </div>
  )
}

export function FeaturesWithDemos({
  eyebrow,
  heading,
  description,
  features,
}: {
  eyebrow?: string
  heading: string
  description?: string
  features: Feature[]
}) {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && <p className="text-sm/7 font-medium text-brand-500">{eyebrow}</p>}
          <h2
            className={clsx(
              'font-display text-5xl/12 tracking-tight text-balance text-neutral-800 sm:text-[5rem]/20',
              eyebrow && 'mt-2',
            )}
          >
            {heading}
          </h2>
          {description && <Text className="mt-6">{description}</Text>}
        </div>
        <div className="mt-16 flex flex-col gap-24 sm:mt-24 sm:gap-32">
          {features.map((feature, index) => (
            <FeatureRow key={feature.eyebrow} feature={feature} reverse={index % 2 === 1} />
          ))}
        </div>
      </Container>
    </section>
  )
}
