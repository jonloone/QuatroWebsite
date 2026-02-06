import { Container } from '@/components/ui/container'
import { clsx } from 'clsx/lite'
import Image from 'next/image'

type Testimonial = {
  quote: string
  author: string
  title: string
  company: string
  logo?: string
}

export function TestimonialSection({
  heading = 'What Our Customers Say',
  testimonials,
  className,
}: {
  heading?: string
  testimonials: Testimonial[]
  className?: string
}) {
  return (
    <section className={clsx('bg-neutral-900 py-16 sm:py-24', className)}>
      <Container>
        <h2 className="mb-12 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {heading}
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </Container>
    </section>
  )
}

function TestimonialCard({ quote, author, title, company, logo }: Testimonial) {
  return (
    <div className="flex flex-col rounded-xl bg-neutral-800/50 p-6 sm:p-8">
      <svg
        className="mb-4 h-8 w-8 text-brand-400"
        fill="currentColor"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
      <blockquote className="flex-1 text-base leading-relaxed text-neutral-200">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-6 flex items-center gap-4 border-t border-neutral-700 pt-6">
        {logo ? (
          <Image
            src={logo}
            alt={company}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full bg-neutral-700 object-contain"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
            {company.charAt(0)}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-white">{author}</p>
          <p className="text-sm text-neutral-400">
            {title}, {company}
          </p>
        </div>
      </div>
    </div>
  )
}
