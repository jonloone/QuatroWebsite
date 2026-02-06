import { ButtonLink } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Subheading } from '@/components/ui/subheading'
import { Text } from '@/components/ui/text'
import Link from 'next/link'

export function CtaBanner({
  title = 'Ready to transform your operations?',
  description = 'See how Quatro can deliver industrial intelligence at the speed of your operations.',
  primaryCta = { label: 'Schedule a Consultation', href: '/contact' },
  secondaryCta = { label: 'Talk to Sales', href: '/contact/sales' } as { label: string; href: string } | null,
  textLink,
  microcopy,
}: {
  title?: string
  description?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string } | null
  textLink?: { label: string; href: string }
  microcopy?: string
}) {
  return (
    <section className="relative overflow-hidden bg-neutral-900">
      <img src="/images/bg-cta.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-neutral-900/80" />
      <div className="relative py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Subheading className="text-white">{title}</Subheading>
          {description && <Text className="max-w-2xl text-neutral-400">{description}</Text>}
          <div className="flex items-center gap-4">
            <ButtonLink href={primaryCta.href} size="lg">
              {primaryCta.label}
            </ButtonLink>
            {secondaryCta && (
              <ButtonLink href={secondaryCta.href} size="lg" color="light">
                {secondaryCta.label}
              </ButtonLink>
            )}
            {!secondaryCta && textLink && (
              <Link href={textLink.href} className="text-sm font-medium text-neutral-400 transition hover:text-white">
                {textLink.label} &rarr;
              </Link>
            )}
          </div>
          {microcopy && <div className="text-sm text-neutral-500">{microcopy}</div>}
        </Container>
      </div>
    </section>
  )
}
