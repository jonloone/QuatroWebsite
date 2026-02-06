import { PageHeader } from '@/components/marketing/page-header'
import { Section } from '@/components/marketing/section'
import { Placeholder } from '@/components/marketing/placeholder'
import { FeatureGrid } from '@/components/marketing/feature-grid'
import { CtaBanner } from '@/components/marketing/cta-banner'

export const metadata = {
  title: 'Fleet & Logistics',
  description:
    'Real-time vehicle tracking, route optimization, cargo monitoring, and driver safety to streamline fleet operations.',
}

const capabilities = [
  {
    name: 'Real-Time Vehicle Tracking',
    description:
      'GPS and telemetry-powered tracking that provides live location, speed, and status for every vehicle in your fleet on a unified map.',
  },
  {
    name: 'Route Optimization',
    description:
      'Dynamic routing algorithms that factor in traffic, weather, load constraints, and delivery windows to minimize fuel costs and transit time.',
  },
  {
    name: 'Cargo Monitoring',
    description:
      'Continuous monitoring of cargo conditions including temperature, humidity, and shock — ensuring compliance and protecting high-value shipments.',
  },
  {
    name: 'Driver Safety & Compliance',
    description:
      'Behavior scoring, fatigue detection, and hours-of-service tracking to improve driver safety and meet regulatory requirements.',
  },
]

export default function FleetLogisticsPage() {
  return (
    <>
      <PageHeader
        badge="Solutions"
        title="Fleet & Logistics"
        description="Real-time vehicle tracking, route optimization, cargo monitoring, and driver safety to streamline fleet operations."
        primaryCta={{ label: 'Request Demo', href: '/contact/demo' }}
        secondaryCta={{ label: 'Talk to Sales', href: '/contact/sales' }}
      />
      <Section>
        <Placeholder label="Challenge — Managing large, distributed fleets across vast distances with limited visibility into vehicle status and cargo integrity" />
      </Section>
      <Section className="bg-neutral-800/2.5">
        <FeatureGrid title="Key Capabilities" features={capabilities} />
      </Section>
      <Section>
        <Placeholder label="Related Products — Platform components powering this solution" />
      </Section>
      <Section>
        <Placeholder label="Case Study — Customer success story" />
      </Section>
      <CtaBanner />
    </>
  )
}
