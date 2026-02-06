import { Container } from '@/components/ui/container'

export function ProblemSolution({
  problemHeading = 'The Problem',
  solutionHeading = 'The Quatro Approach',
  problems,
  solutions,
}: {
  problemHeading?: string
  solutionHeading?: string
  problems: { title: string; description: string }[]
  solutions: { title: string; description: string }[]
}) {
  return (
    <>
      {/* Problem section */}
      <section className="bg-neutral-800/2.5 py-16 sm:py-24">
        <Container>
          <h2 className="text-center text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
            {problemHeading}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((item, i) => (
              <div key={i} className="rounded-xl border border-neutral-800/5 bg-white p-6">
                <span className="text-sm font-bold text-red-600/70">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-base font-semibold text-neutral-800">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Visual transition */}
      <div className="relative h-16 bg-gradient-to-b from-neutral-800/2.5 to-neutral-100">
        <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center">
          <div className="flex size-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-400">
            <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Solution section */}
      <section className="py-16 sm:py-24">
        <Container>
          <h2 className="text-center text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
            {solutionHeading}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((item, i) => (
              <div key={i} className="rounded-xl border border-neutral-800/5 bg-brand-50/50 p-6">
                <span className="text-sm font-bold text-brand-500">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-base font-semibold text-neutral-800">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
