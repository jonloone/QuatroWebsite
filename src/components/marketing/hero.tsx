import { ButtonLink } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { clsx } from 'clsx/lite'
import type { ReactNode } from 'react'

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  microcopy,
  demo,
  footer,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  microcopy?: string
  demo?: ReactNode
  footer?: ReactNode
  className?: string
}) {
  return (
    <section className={clsx('flex flex-col gap-16 px-2 pb-16', className)}>
      <div
        className="relative overflow-hidden rounded-lg bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      >
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-neutral-900/60" />

        <div className="relative -mx-2 sm:px-6 md:px-12 lg:px-0">
          <Container className="flex flex-col gap-16">
            <div className="flex gap-x-10 gap-y-16 max-lg:flex-col sm:gap-y-24">
              <div className="flex shrink-0 flex-col items-start gap-6 pt-16 sm:pt-32 lg:basis-2xl lg:py-40">
                {eyebrow && <div className="text-sm/7 font-semibold text-white/90">{eyebrow}</div>}
                <Heading className="max-w-5xl" color="light">
                  {title}
                </Heading>
                {description && (
                  <div className="flex max-w-3xl flex-col gap-4 text-lg/8 text-white/70">{description}</div>
                )}
                {(primaryCta || secondaryCta) && (
                  <div className="flex items-center gap-4">
                    {primaryCta && (
                      <ButtonLink href={primaryCta.href} size="lg">
                        {primaryCta.label}
                      </ButtonLink>
                    )}
                    {secondaryCta && (
                      <ButtonLink href={secondaryCta.href} size="lg" color="light">
                        {secondaryCta.label}
                      </ButtonLink>
                    )}
                  </div>
                )}
                {microcopy && <div className="text-sm text-white/50">{microcopy}</div>}
              </div>
              {demo && (
                <div className="flex items-center justify-center pb-8 lg:pb-0 lg:pt-24">
                  {demo}
                </div>
              )}
            </div>
          </Container>
        </div>
      </div>
      {footer && <Container>{footer}</Container>}
    </section>
  )
}
