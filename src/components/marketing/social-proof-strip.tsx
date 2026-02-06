import { Container } from '@/components/ui/container'
import { clsx } from 'clsx/lite'
import Image from 'next/image'

export function SocialProofStrip({
  logos,
  metric,
  tagline = 'Trusted by operations teams at leading enterprises',
  className,
}: {
  logos?: { src: string; name: string; width?: number; height?: number }[]
  metric?: { value: string; label: string }
  tagline?: string
  className?: string
}) {
  return (
    <section className={clsx('bg-neutral-100 py-10 sm:py-12', className)}>
      <Container>
        <div className="flex flex-col items-center gap-8">
          <p className="text-center text-sm font-medium uppercase tracking-wider text-neutral-500">
            {tagline}
          </p>
          {logos && logos.length > 0 ? (
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {logos.map((logo) => (
                <Image
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width || 120}
                  height={logo.height || 40}
                  className="h-8 w-auto object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
                  loading="lazy"
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              {/* Placeholder logos - grayscale boxes */}
              {['Fortune 500 Energy', 'Global Defense', 'Major Telecom', 'Industrial Leader', 'Infrastructure Co', 'Pipeline Operator'].map((name) => (
                <div
                  key={name}
                  className="flex h-8 w-24 items-center justify-center rounded bg-neutral-200/50"
                  title={name}
                >
                  <span className="text-[10px] font-medium uppercase tracking-wide text-neutral-400">
                    {name.split(' ')[0]}
                  </span>
                </div>
              ))}
            </div>
          )}
          {metric && (
            <div className="mt-2 inline-flex items-center gap-3 rounded-full border border-brand-200 bg-brand-50 px-5 py-2">
              <span className="text-lg font-bold text-brand-700">{metric.value}</span>
              <span className="text-sm font-medium text-brand-500">{metric.label}</span>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
