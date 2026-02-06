import { Container } from '@/components/ui/container'
import { clsx } from 'clsx/lite'

export function StatStrip({
  stats,
  className,
}: {
  stats: { value: string; label: string }[]
  className?: string
}) {
  return (
    <section className={clsx('bg-neutral-900 py-12 sm:py-16', className)}>
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-neutral-400 sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
