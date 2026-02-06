import { ButtonLink } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Eyebrow } from '@/components/ui/eyebrow'
import { Subheading } from '@/components/ui/subheading'
import { Text } from '@/components/ui/text'

export function PageHeader({
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
}: {
  badge?: string
  title: string
  description?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}) {
  return (
    <div className="border-b border-neutral-800/5 bg-neutral-800/2.5">
      <div className="py-16 sm:py-24">
        <Container className="flex flex-col gap-6">
          {badge && <Eyebrow>{badge}</Eyebrow>}
          <Subheading>{title}</Subheading>
          {description && <Text size="lg" className="max-w-2xl text-pretty">{description}</Text>}
          {(primaryCta || secondaryCta) && (
            <div className="flex gap-4">
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
        </Container>
      </div>
    </div>
  )
}
