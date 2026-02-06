import { Container } from '@/components/ui/container'
import { clsx } from 'clsx/lite'
import Image from 'next/image'

export function TrustBar({
  logos,
  fallbackText = 'Trusted by operations teams across Energy, Defense, and Infrastructure',
  standalone = true,
}: {
  logos?: { src: string; name: string; width?: number; height?: number }[]
  fallbackText?: string
  standalone?: boolean
}) {
  const content =
    logos && logos.length > 0 ? (
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {logos.map((logo) => (
          <Image
            key={logo.name}
            src={logo.src}
            alt={logo.name}
            width={logo.width || 120}
            height={logo.height || 40}
            className="h-8 w-auto object-contain grayscale transition hover:grayscale-0"
            loading="lazy"
          />
        ))}
      </div>
    ) : (
      <p className="text-center text-sm font-medium tracking-wide text-neutral-500 uppercase">{fallbackText}</p>
    )

  if (!standalone) {
    return content
  }

  return (
    <section className={clsx('border-y border-neutral-800/5 bg-neutral-800/2.5 py-8')}>
      <Container>{content}</Container>
    </section>
  )
}
