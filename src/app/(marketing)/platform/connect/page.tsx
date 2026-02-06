import { CtaBanner } from '@/components/marketing/cta-banner'
import { FeatureGrid } from '@/components/marketing/feature-grid'
import { Hero } from '@/components/marketing/hero'
import { Placeholder } from '@/components/marketing/placeholder'
import { ProblemSolution } from '@/components/marketing/problem-solution'
import { ProductProgression } from '@/components/marketing/product-progression'
import { ProofPointCard } from '@/components/marketing/proof-point-card'
import { Section } from '@/components/marketing/section'
import { StatStrip } from '@/components/marketing/stat-strip'
import { CodeSquareIcon } from '@/components/icons/code-square-icon'
import { CpuIcon } from '@/components/icons/cpu-icon'
import { HardDriveIcon } from '@/components/icons/hard-drive-icon'
import { RepeatIcon } from '@/components/icons/repeat-icon'
import { ShieldExclamationIcon } from '@/components/icons/shield-exclamation-icon'
import { TagIcon } from '@/components/icons/tag-icon'

export const metadata = {
  title: 'Connect — Industrial Data Platform & Historian Alternative',
  description:
    'Connect bridges your OT infrastructure to modern analytics. 8,000+ connectors, high-performance time-series storage, open APIs, and no tag-based licensing.',
}

const problems = [
  {
    title: 'Tag-Based Licensing Traps',
    description:
      'Every new data point costs more. Legacy historians charge per-tag, punishing you for collecting the data your operations need to improve.',
  },
  {
    title: 'Proprietary Data Prisons',
    description:
      'Your operational data is locked inside closed systems with proprietary formats. Extracting it requires expensive middleware and vendor consultants.',
  },
  {
    title: 'Batch-Era Architecture',
    description:
      'Designed for monthly reports, not real-time decisions. Legacy historians can\'t keep up with the velocity and volume of modern industrial operations.',
  },
  {
    title: 'Integration Nightmares',
    description:
      'Every new device, protocol, or analytics tool requires a custom integration project. Your IT team spends more time connecting systems than improving them.',
  },
]

const solutions = [
  {
    title: 'Open Architecture',
    description:
      'Built on open standards with full API access. Your data belongs to you — export, query, and integrate without vendor lock-in or proprietary formats.',
  },
  {
    title: '8,000+ Connectors',
    description:
      'Out-of-the-box connectivity for industrial protocols, IoT devices, enterprise systems, and cloud platforms. If it generates data, we connect to it.',
  },
  {
    title: 'No Tag-Based Licensing',
    description:
      'Collect every data point your operations generate. Our licensing model scales with your business, not against it. No per-tag fees, ever.',
  },
  {
    title: 'Edge to Cloud',
    description:
      'Process data at the edge for real-time response, store it in high-performance time-series databases, and stream it to cloud analytics — all in one platform.',
  },
]

const stats = [
  { value: '8,000+', label: 'Connectors' },
  { value: '1M+', label: 'Points/Sec' },
  { value: '100%', label: 'Open API Access' },
  { value: '10–20x', label: 'Storage Compression' },
]

const capabilities = [
  {
    name: 'Universal Data Ingestion',
    description:
      'Connect to any industrial protocol, IoT device, or enterprise system through a unified ingestion layer. OPC-UA, Modbus, MQTT, BACnet, DNP3, and thousands more — all normalized into a consistent data model.',
    icon: RepeatIcon,
  },
  {
    name: 'High-Performance Time-Series Storage',
    description:
      'Purpose-built time-series engine handles millions of data points per second with 10–20x compression. Years of operational history at your fingertips, without the storage bloat of traditional historians.',
    icon: HardDriveIcon,
  },
  {
    name: 'Data Contextualization',
    description:
      'Automatically tag, classify, and enrich raw data with operational context. Asset hierarchies, equipment relationships, and process metadata transform raw signals into actionable intelligence.',
    icon: TagIcon,
  },
  {
    name: 'Edge Processing',
    description:
      'Run analytics, filtering, and aggregation at the edge before data ever hits the network. Reduce bandwidth, ensure real-time response, and maintain operations even when connectivity is intermittent.',
    icon: CpuIcon,
  },
  {
    name: 'Open API Access',
    description:
      'Full REST and GraphQL APIs for every data point in the system. Build custom dashboards, feed AI/ML pipelines, or integrate with any analytics tool — no middleware required.',
    icon: CodeSquareIcon,
  },
  {
    name: 'Enterprise Security',
    description:
      'Zero-trust architecture with end-to-end encryption, role-based access control, audit logging, and compliance certifications. Meets the security requirements of critical infrastructure operators.',
    icon: ShieldExclamationIcon,
  },
]

const protocolCategories = [
  {
    name: 'Industrial Protocols',
    protocols: ['OPC-UA / OPC-DA', 'Modbus TCP/RTU', 'EtherNet/IP', 'PROFINET', 'DNP3', 'IEC 61850'],
  },
  {
    name: 'IoT & Messaging',
    protocols: ['MQTT / Sparkplug B', 'AMQP', 'Kafka', 'CoAP', 'HTTP/REST', 'WebSocket'],
  },
  {
    name: 'Building & Infrastructure',
    protocols: ['BACnet', 'KNX', 'LonWorks', 'DALI', 'Modbus (HVAC)', 'SNMP'],
  },
  {
    name: 'IT & Enterprise',
    protocols: ['SQL / NoSQL Databases', 'SAP Interfaces', 'OSIsoft PI (Migration)', 'Aveva Historian', 'REST APIs', 'File Ingest (CSV/XML/JSON)'],
  },
  {
    name: 'Edge & Gateway',
    protocols: ['Siemens S7', 'Allen-Bradley', 'Mitsubishi MELSEC', 'Schneider Electric', 'ABB Controllers', 'GE Fanuc'],
  },
  {
    name: 'Cloud & Analytics',
    protocols: ['AWS IoT Core', 'Azure IoT Hub', 'Google Cloud IoT', 'Snowflake', 'Databricks', 'Power BI Direct Query'],
  },
]

const deploymentOptions = [
  {
    name: 'Cloud',
    description: 'Fully managed SaaS deployment with automatic scaling, updates, and maintenance. Zero infrastructure overhead.',
    bestFor: 'Teams wanting fastest time-to-value with minimal IT involvement.',
  },
  {
    name: 'On-Premises',
    description: 'Deploy within your data center or private cloud for complete data sovereignty and network isolation.',
    bestFor: 'Regulated industries requiring data residency and air-gapped environments.',
  },
  {
    name: 'Edge',
    description: 'Lightweight deployment on edge hardware for local processing, buffering, and real-time response at remote sites.',
    bestFor: 'Distributed operations with intermittent connectivity or latency-sensitive processes.',
  },
  {
    name: 'Hybrid',
    description: 'Combine edge, on-premises, and cloud deployments into a unified architecture with seamless data flow between tiers.',
    bestFor: 'Enterprise operations spanning multiple sites, regions, and network boundaries.',
  },
]

const integrationPatterns = [
  {
    name: 'Legacy Historian Coexistence',
    description:
      'Run alongside existing PI, Aveva, or other historian systems. Mirror data in real-time while you migrate at your own pace — no rip-and-replace required.',
  },
  {
    name: 'SCADA Integration',
    description:
      'Connect directly to SCADA systems from any vendor. Ingest alarms, events, and process data without disrupting existing control loops or operator workflows.',
  },
  {
    name: 'Analytics & BI Tooling',
    description:
      'Native connectors for Power BI, Tableau, Grafana, and custom dashboards. Your operational data flows directly into the visualization tools your teams already use.',
  },
  {
    name: 'Cloud & AI Pipelines',
    description:
      'Stream operational data to cloud data lakes, AI/ML training pipelines, and advanced analytics platforms. Purpose-built connectors for AWS, Azure, GCP, Snowflake, and Databricks.',
  },
]

export default function ConnectPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <Hero
        eyebrow="Quatro Connect"
        title="Every Protocol. Every Source. One Unified Foundation."
        description="Open architecture that bridges your entire OT infrastructure to modern analytics. 8,000+ connectors, high-performance time-series storage, and full API access — with no tag-based licensing, ever."
        primaryCta={{ label: 'Schedule a Data Assessment', href: '/contact/demo' }}
        secondaryCta={{ label: 'Explore 8,000+ Connectors', href: '#protocol-showcase' }}
        demo={<Placeholder label="Data Flow Visualization — Connect ingestion architecture" className="h-full min-h-[400px]" />}
      />

      {/* Sections 2+3: Problem → Solution */}
      <ProblemSolution
        problemHeading="Legacy Historians Are Holding You Back"
        solutionHeading="Connect: The Open Data Foundation"
        problems={problems}
        solutions={solutions}
      />

      {/* Stats Strip */}
      <StatStrip stats={stats} />

      {/* Section 4: Core Capabilities */}
      <Section>
        <FeatureGrid
          title="Core Capabilities"
          subtitle="Everything you need to connect, store, and contextualize industrial data at scale."
          features={capabilities}
          columns={3}
        />
      </Section>

      {/* Section 5: Protocol & Connector Showcase */}
      <Section id="protocol-showcase" className="bg-neutral-800/2.5">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
            8,000+ Connectors. If It Generates Data, We Connect To It.
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Out-of-the-box connectivity for every layer of the industrial stack.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {protocolCategories.map((category) => (
            <div key={category.name} className="rounded-xl border border-neutral-800/5 bg-white p-6">
              <h3 className="text-base font-semibold text-neutral-800">{category.name}</h3>
              <ul className="mt-3 space-y-1.5">
                {category.protocols.map((protocol) => (
                  <li key={protocol} className="text-sm text-neutral-600">
                    {protocol}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-neutral-500">
          And thousands more. Can&apos;t find your protocol? We&apos;ll build the connector.
        </p>
      </Section>

      {/* Section 6: Architecture & Deployment */}
      <Section>
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
            Architected for Real-World Operations
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Deploy anywhere your operations run — cloud, on-premises, edge, or all three.
          </p>
        </div>
        <Placeholder label="Architecture Diagram — Edge → On-Premises → Cloud data flow" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deploymentOptions.map((option) => (
            <div key={option.name} className="rounded-xl border border-neutral-800/5 p-6">
              <h3 className="text-base font-semibold text-neutral-800">{option.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{option.description}</p>
              <p className="mt-3 text-sm font-medium text-brand-500">Best for: {option.bestFor}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 7: Integration Patterns */}
      <Section className="bg-neutral-800/2.5">
        <FeatureGrid
          title="Works With What You Have"
          subtitle="Connect doesn't replace your existing infrastructure — it extends it."
          features={integrationPatterns}
          columns={2}
        />
      </Section>

      {/* Section 8: Industry Proof Point */}
      <Section>
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
            Proven in Production
          </h2>
        </div>
        <div className="mx-auto max-w-2xl">
          <ProofPointCard
            industryLabel="Oil & Gas"
            headline="Global Operator Replaces 40+ Legacy Databases With a Single Platform"
            narrative="A Fortune 500 oil and gas operator consolidated 40+ regional historian databases across upstream, midstream, and downstream operations into a unified Connect deployment. The result: real-time visibility across 200,000+ data points, 60% reduction in integration maintenance, and a foundation for predictive analytics that was impossible with fragmented legacy systems."
          />
        </div>
      </Section>

      {/* Section 9: Path Forward */}
      <Section className="bg-neutral-800/2.5">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
            Connect Is Just the Beginning
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Every Quatro product builds on the data foundation Connect provides.
          </p>
        </div>
        <ProductProgression />
      </Section>

      {/* Section 10: Final CTA */}
      <CtaBanner
        title="Ready to Liberate Your Data?"
        description="See how Connect replaces legacy historians with an open, scalable data foundation — in a live walkthrough tailored to your environment."
        primaryCta={{ label: 'Schedule a Data Assessment', href: '/contact/demo' }}
        secondaryCta={{ label: 'Talk to an Architect', href: '/contact/sales' }}
        microcopy="Typical assessment: 30–45 minutes. No pressure, no generic demo."
      />
    </>
  )
}
