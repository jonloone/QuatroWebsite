import { CtaBanner } from '@/components/marketing/cta-banner'
import { Hero } from '@/components/marketing/hero'
import { IndustryShowcase } from '@/components/marketing/industry-showcase'
import { ProblemSolution } from '@/components/marketing/problem-solution'
import { ProductProgression } from '@/components/marketing/product-progression'
import { ProofPointCard } from '@/components/marketing/proof-point-card'
import { Section } from '@/components/marketing/section'
import { SocialProofStrip } from '@/components/marketing/social-proof-strip'
import { StatStrip } from '@/components/marketing/stat-strip'
import { TestimonialSection } from '@/components/marketing/testimonial-section'
import Image from 'next/image'

export const metadata = {
  title: { absolute: 'Quatro | Industrial Intelligence Platform — OT/IT Convergence' },
  description:
    'Quatro unifies OT and IT into one industrial intelligence platform — connecting assets, operations, security, and logistics across energy, defense, and infrastructure.',
}

const problems = [
  {
    title: 'Vendor Lock-In',
    description: 'Proprietary protocols and closed ecosystems trap your data and limit your choices.',
  },
  {
    title: 'Siloed Data',
    description: 'Operations, security, and logistics run on separate systems that never talk to each other.',
  },
  {
    title: 'Batch-Era Architecture',
    description: 'Legacy platforms poll data in minutes or hours — too slow for real-time operational decisions.',
  },
  {
    title: 'Scaling Pain',
    description: 'Adding a new site, vertical, or use case means another vendor, another integration, another contract.',
  },
]

const solutions = [
  {
    title: 'Open & Modular',
    description: 'Standards-based connectors and open APIs mean you own your data and choose your pace.',
  },
  {
    title: 'Unified Intelligence Layer',
    description: 'One data model spans OT, IT, security, and logistics — every team sees the same truth.',
  },
  {
    title: 'Real-Time by Design',
    description: 'Event-driven architecture delivers sub-second data from edge to enterprise — no polling, no lag.',
  },
  {
    title: 'Scale Without Friction',
    description: 'Add sites, products, and verticals on a single platform — no new vendors, no re-integration.',
  },
]

const industries = [
  {
    name: 'Energy',
    href: '/industries/energy',
    headline: 'Upstream to downstream visibility',
    outcomes: [
      '40% faster incident response across pipeline networks',
      'Unified SCADA, video, and leak detection in one view',
      'Real-time well monitoring across 500+ sites',
    ],
  },
  {
    name: 'Defense',
    href: '/industries/defense',
    headline: 'Mission-ready intelligence',
    outcomes: [
      'Multi-domain situational awareness',
      'Secure cross-classification data fusion',
    ],
  },
  {
    name: 'Industrial',
    href: '/industries/industrial',
    headline: 'Plant floor to supply chain',
    outcomes: [
      '$2.4M saved in unplanned downtime annually',
      'Predictive maintenance across production lines',
    ],
  },
  {
    name: 'Infrastructure',
    href: '/industries/infrastructure',
    headline: 'Always-on networks',
    outcomes: [
      '99.97% uptime across 8,000 cell sites',
      '31% reduction in truck rolls',
    ],
  },
  {
    name: 'Cities',
    href: '/industries/cities',
    headline: 'Smarter urban operations',
    outcomes: [
      'Unified traffic, safety, and infrastructure',
      'Cross-agency operational coordination',
    ],
  },
]

const stats = [
  { value: '40%', label: 'Faster incident response' },
  { value: '2M+', label: 'Assets monitored' },
  { value: '$2.4M', label: 'Avg. annual savings' },
  { value: '99.97%', label: 'Uptime achieved' },
]

const testimonials = [
  {
    quote:
      'Quatro replaced six point solutions and gave us a single view of our entire pipeline network. Incident response went from 22 minutes to under 13.',
    author: 'VP Operations',
    title: 'VP Operations',
    company: 'Major Pipeline Operator',
  },
  {
    quote:
      'We eliminated 6 legacy dashboards and cut truck rolls by 31%. The unified view changed how our NOC operates.',
    author: 'Director of Network Ops',
    title: 'Director of Network Ops',
    company: 'National Telecom Carrier',
  },
  {
    quote:
      'Predictive maintenance caught bearing failures 72 hours before shutdown. That one feature paid for the entire deployment.',
    author: 'Plant Manager',
    title: 'Plant Manager',
    company: 'Tier-1 Automotive Supplier',
  },
]

const proofPoints = [
  {
    industryLabel: 'Energy — Oil & Gas',
    headline: '40% faster incident response across 1,200 km of pipeline',
    narrative:
      'A major pipeline operator consolidated SCADA, video surveillance, and leak detection into a single Quatro deployment — replacing three point solutions and cutting mean-time-to-respond from 22 minutes to under 13.',
    cta: { label: 'Read Case Study', href: '/resources/case-studies' },
  },
  {
    industryLabel: 'Telecom / Infrastructure',
    headline: '99.97% uptime across 8,000 cell sites',
    narrative:
      'A national carrier used Quatro Connect and Operate to unify tower monitoring, power management, and field dispatch — eliminating 6 legacy dashboards and reducing truck rolls by 31%.',
    cta: { label: 'Read Case Study', href: '/resources/case-studies' },
  },
  {
    industryLabel: 'Manufacturing',
    headline: '$2.4M saved in unplanned downtime annually',
    narrative:
      "A Tier-1 automotive supplier deployed Quatro's predictive maintenance models across 14 production lines — catching bearing failures 72 hours before shutdown.",
    cta: { label: 'Read Case Study', href: '/resources/case-studies' },
  },
]

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — New outcome-focused headline, no footer */}
      <Hero
        eyebrow="The Industrial Intelligence Platform"
        title="See Everything. Act Faster. One Platform."
        description="Converge OT and IT into a single platform that connects, operates, and commands your most critical operations — from edge to enterprise."
        primaryCta={{ label: 'Schedule a Demo', href: '/contact/demo' }}
        secondaryCta={{ label: 'Watch Overview', href: '#demo' }}
        microcopy="Talk to an operations specialist. 30 minutes. No commitment."
        demo={
          <Image
            src="/images/platform-screenshot.png"
            alt="Quatro Platform Screenshot"
            width={600}
            height={400}
            className="rounded-lg shadow-2xl"
            priority
          />
        }
      />

      {/* 2. Social Proof Strip — Credibility immediately after hero */}
      <SocialProofStrip
        metric={{ value: '2M+', label: 'assets monitored across 50+ enterprise deployments' }}
      />

      {/* 3. Platform Products — Compact progression */}
      <Section>
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-500">The Platform</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
            Connect. Operate. Command.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-600">
            Three products. One platform. A clear path from raw data to operational intelligence.
          </p>
        </div>
        <ProductProgression />
      </Section>

      {/* 4. Stat Strip — Outcome-focused metrics */}
      <StatStrip stats={stats} />

      {/* 5. Industry Showcase — Higher visual impact */}
      <IndustryShowcase industries={industries} />

      {/* 6. Testimonials — Customer voices */}
      <TestimonialSection
        heading="Trusted by Operations Leaders"
        testimonials={testimonials}
      />

      {/* 7. Problem → Solution — Moved lower */}
      <ProblemSolution
        problemHeading="Why Industrial Operations Are Stuck"
        solutionHeading="The Quatro Approach"
        problems={problems}
        solutions={solutions}
      />

      {/* 8. Proof Points — With CTAs */}
      <Section>
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
            Proven at Scale. Across Industries.
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {proofPoints.map((pp) => (
            <ProofPointCard key={pp.industryLabel} {...pp} />
          ))}
        </div>
      </Section>

      {/* 9. Final CTA — Stronger close */}
      <CtaBanner
        title="Ready to Unify Your Operations?"
        description="See what you've been missing. Schedule a demo and discover how Quatro brings your entire operation into a single view."
        primaryCta={{ label: 'Schedule a Demo', href: '/contact/demo' }}
        secondaryCta={{ label: 'Talk to Sales', href: '/contact/sales' }}
        microcopy="Limited pilot program spots available for qualified enterprises."
      />
    </>
  )
}
