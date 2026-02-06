import { Hero } from '@/components/marketing/hero'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'
import { FeatureGrid } from '@/components/marketing/feature-grid'
import { ProductProgression } from '@/components/marketing/product-progression'
import { CtaBanner } from '@/components/marketing/cta-banner'
import { CpuIcon } from '@/components/icons/cpu-icon'
import { HardDriveIcon } from '@/components/icons/hard-drive-icon'
import { RepeatIcon } from '@/components/icons/repeat-icon'
import { CodeSquareIcon } from '@/components/icons/code-square-icon'
import { ShieldExclamationIcon } from '@/components/icons/shield-exclamation-icon'
import { TagIcon } from '@/components/icons/tag-icon'
import Link from 'next/link'

export const metadata = {
  title: 'Platform',
  description:
    'End-to-end industrial intelligence platform — connect every data source, operate with real-time AI analytics, and command unified operations.',
}

const products = [
  {
    name: 'Connect',
    href: '/platform/connect',
    description:
      'Converge OT, IT, and IoT data through 8,000+ protocol connectors. Open architecture with no tag-based licensing.',
  },
  {
    name: 'Operate',
    href: '/platform/operate',
    description:
      'Real-time monitoring, AI-powered analytics, and predictive intelligence across your entire operation.',
  },
  {
    name: 'Command',
    href: '/platform/command',
    description:
      'Unified operations center with cross-domain orchestration, threat response, and fleet coordination.',
  },
]

const technologyPillars = [
  {
    name: 'Edge Computing',
    description:
      'Distributed compute at the edge for real-time processing, local autonomy, and reduced bandwidth with cloud synchronization.',
    icon: CpuIcon,
  },
  {
    name: 'Time-Series Data Engine',
    description:
      'Purpose-built storage optimized for high-frequency industrial telemetry with long-term retention, fast queries, and 10–20x compression.',
    icon: HardDriveIcon,
  },
  {
    name: 'Semantic Intelligence',
    description:
      'Knowledge graphs and ontologies that contextualize raw data into meaningful operational insights and cross-domain relationships.',
    icon: TagIcon,
  },
  {
    name: 'Satellite & Geospatial',
    description:
      'Integrated geospatial analytics with satellite imagery, terrain modeling, and location intelligence for wide-area operations.',
    icon: RepeatIcon,
  },
  {
    name: 'Integration & APIs',
    description:
      'RESTful and GraphQL APIs, webhooks, and pre-built connectors for ERP, CMMS, GIS, and other enterprise systems.',
    icon: CodeSquareIcon,
  },
  {
    name: 'Enterprise Security',
    description:
      'Zero-trust architecture with end-to-end encryption, role-based access control, audit logging, and compliance certifications.',
    icon: ShieldExclamationIcon,
  },
]

export default function PlatformPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <Hero
        eyebrow="Quatro Platform"
        title="Industrial Intelligence, End to End"
        description="From edge devices to enterprise dashboards, the xOps platform delivers the visibility, analytics, and control that critical operations demand."
        primaryCta={{ label: 'Schedule a Consultation', href: '/contact' }}
        secondaryCta={{ label: 'Request a Demo', href: '/contact/demo' }}
        demo={
          <Placeholder
            label="Architecture Demo — Edge-to-Cloud Platform Overview"
            className="h-full min-h-[400px]"
          />
        }
      />

      {/* Section 2: Product Trio */}
      <Section>
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
            Three Products. One Platform.
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Each product builds on the last — start where you need to, scale to
            full operational command.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="rounded-xl border border-neutral-800/5 p-6 transition hover:border-brand-500/20 hover:bg-brand-50"
            >
              <h3 className="text-base font-semibold text-neutral-800">
                {product.name}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                {product.description}
              </p>
              <p className="mt-4 text-sm font-semibold text-brand-500">
                Learn More &rarr;
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Section 3: xOps Architecture — Technology Pillars */}
      <Section className="bg-neutral-800/2.5">
        <FeatureGrid
          title="xOps Architecture"
          subtitle="A modular, microservices-based architecture designed for high availability, horizontal scaling, and multi-tenant deployment."
          features={technologyPillars}
          columns={3}
        />
      </Section>

      {/* Section 4: Architecture Visual */}
      <Section>
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
            Architected for Real-World Operations
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Deploy anywhere your operations run — cloud, on-premises, edge, or
            all three.
          </p>
        </div>
        <Placeholder label="Architecture Diagram — Edge → On-Premises → Cloud Deployment Overview" />
      </Section>

      {/* Section 5: Product Progression */}
      <Section className="bg-neutral-800/2.5">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
            The Build Path
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Connect your data, operate with intelligence, command with
            confidence.
          </p>
        </div>
        <ProductProgression />
      </Section>

      {/* Section 6: CTA */}
      <CtaBanner
        title="See the Platform in Action"
        description="Walk through the xOps architecture with an engineer — tailored to your infrastructure, your protocols, your operational challenges."
        primaryCta={{ label: 'Schedule a Consultation', href: '/contact' }}
        secondaryCta={{ label: 'Request a Demo', href: '/contact/demo' }}
        microcopy="Typical consultation: 30–45 minutes. No pressure, no generic demo."
      />
    </>
  )
}
