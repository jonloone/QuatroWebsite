import { clsx } from 'clsx/lite'
import Link from 'next/link'
import type { ComponentType } from 'react'

export function FeatureGrid({
  title,
  subtitle,
  features,
  columns = 3,
}: {
  title?: string
  subtitle?: string
  features: {
    icon?: ComponentType<{ className?: string }>
    name: string
    description?: string
    href?: string
    keywords?: string[]
  }[]
  columns?: 2 | 3 | 4
}) {
  return (
    <div>
      {(title || subtitle) && (
        <div className="mb-12 text-center">
          {title && (
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">{title}</h2>
          )}
          {subtitle && <p className="mt-4 text-lg text-neutral-600">{subtitle}</p>}
        </div>
      )}
      <div
        className={clsx(
          'grid gap-8',
          columns === 2 && 'sm:grid-cols-2',
          columns === 3 && 'sm:grid-cols-2 lg:grid-cols-3',
          columns === 4 && 'sm:grid-cols-2 lg:grid-cols-4',
        )}
      >
        {features.map((feature, i) => {
          const Wrapper = feature.href ? Link : 'div'
          const wrapperProps = feature.href
            ? {
                href: feature.href,
                className:
                  'group rounded-2xl border border-neutral-800/5 bg-neutral-800/2.5 p-6 transition hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/5',
              }
            : {
                className:
                  'rounded-2xl border border-neutral-800/5 bg-neutral-800/2.5 p-6',
              }

          return (
            <Wrapper key={i} {...(wrapperProps as any)}>
              {feature.icon && (
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-500">
                  <feature.icon className="size-5" />
                </div>
              )}
              <h3 className="text-base font-semibold text-neutral-800">{feature.name}</h3>
              {feature.description && (
                <p className="mt-2 text-sm text-neutral-600">{feature.description}</p>
              )}
              {feature.keywords && feature.keywords.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5 opacity-0 transition-opacity group-hover:opacity-100">
                  {feature.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="rounded-full bg-brand-500/10 px-2 py-0.5 text-xs font-medium text-brand-600"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              )}
            </Wrapper>
          )
        })}
      </div>
    </div>
  )
}
