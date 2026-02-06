import { Container } from '@/components/ui/container'
import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

export function Section({ className, children, ...props }: ComponentProps<'section'>) {
  return (
    <section className={clsx('py-16 sm:py-24', className)} {...props}>
      <Container>{children}</Container>
    </section>
  )
}
