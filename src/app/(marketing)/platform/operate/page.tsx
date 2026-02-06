import { CtaBanner } from '@/components/marketing/cta-banner'
import { FeatureGrid } from '@/components/marketing/feature-grid'
import { Hero } from '@/components/marketing/hero'
import { IndustryShowcase } from '@/components/marketing/industry-showcase'
import { Placeholder } from '@/components/marketing/placeholder'
import { ProblemSolution } from '@/components/marketing/problem-solution'
import { ProductProgression } from '@/components/marketing/product-progression'
import { ProofPointCard } from '@/components/marketing/proof-point-card'
import { Section } from '@/components/marketing/section'
import { StatStrip } from '@/components/marketing/stat-strip'
import { CpuIcon } from '@/components/icons/cpu-icon'
import { HardDriveIcon } from '@/components/icons/hard-drive-icon'
import { RepeatIcon } from '@/components/icons/repeat-icon'
import { ShieldExclamationIcon } from '@/components/icons/shield-exclamation-icon'

export const metadata = {
  title: 'Operate — AI-Powered Operational Intelligence Platform',
  description:
    'Transform operational data into intelligence with Quatro Operate. AI analytics, predictive maintenance, unified monitoring, video intelligence, and physical security — one platform for complete operational awareness.',
}

const problems = [
  {
    title: 'Drowning in Data',
    description:
      'Sensors, cameras, and devices flood your team with millions of data points, but no one has time to find the signals that matter. Data volume grows 10x faster than your ability to analyze it.',
  },
  {
    title: 'Fragmented Tools',
    description:
      'Monitoring in one tool, analytics in another, video in a third. Your operators toggle between 5–7 dashboards and still miss critical correlations because the systems never talk to each other.',
  },
  {
    title: 'Reactive, Not Predictive',
    description:
      'You find out about problems after they become incidents. Equipment fails, alarms cascade, and your team scrambles to respond — because your tools were designed for historical reporting, not real-time intelligence.',
  },
  {
    title: 'Manual Analysis',
    description:
      'Your best engineers spend 20+ hours per month manually correlating data, building reports, and chasing false alarms instead of solving the problems that actually move the business forward.',
  },
]

const solutions = [
  {
    title: 'AI-Native Analytics',
    description:
      'Machine learning models trained on your operational data surface patterns, anomalies, and predictions automatically — no data science team required. Intelligence is built in, not bolted on.',
  },
  {
    title: 'Unified Monitoring',
    description:
      'One platform for OT monitoring, IT observability, video analytics, and physical security. Every data stream converges into a single operational view with intelligent cross-domain correlation.',
  },
  {
    title: 'Predictive, Not Reactive',
    description:
      'Forecast equipment failures 2–4 weeks before they happen. Detect anomalies in real time. Correlate events across domains to surface threats before they become incidents.',
  },
  {
    title: 'Video & Physical Security',
    description:
      'AI-powered video analytics, perimeter monitoring, satellite imagery, and incident detection — integrated directly into your operational intelligence layer, not siloed in a separate security system.',
  },
]

const stats = [
  { value: '80%', label: 'Fewer False Alarms' },
  { value: '2–4 Weeks', label: 'Advance Warning' },
  { value: '5–7 Tools', label: 'Replaced' },
  { value: '20+ Hours', label: 'Saved per Month' },
]

const analyticsFeatures = [
  {
    name: 'AI Analytics Engine',
    description:
      'Purpose-built machine learning models that learn your operational baselines and continuously improve. Automatic pattern recognition across millions of data points — no manual threshold tuning or rule configuration.',
    icon: CpuIcon,
  },
  {
    name: 'Predictive Maintenance',
    description:
      'Forecast equipment degradation and failure 2–4 weeks in advance using vibration analysis, thermal profiling, and multi-sensor correlation. Reduce unplanned downtime by up to 60% and extend asset life.',
  },
  {
    name: 'Anomaly Detection',
    description:
      'Continuous analysis of sensor streams, network traffic, and process baselines. Machine learning models detect subtle deviations across multiple variables simultaneously — catching issues that single-threshold alarms miss entirely.',
  },
  {
    name: 'Digital Twin Analytics',
    description:
      'Virtual models of physical assets and processes that mirror real-time conditions. Run what-if scenarios, optimize parameters, and validate changes before deploying them to production.',
  },
]

const monitoringFeatures = [
  {
    name: 'Real-Time Dashboards',
    description:
      'Live operational views with sub-second latency across all connected assets. Configurable layouts for control rooms, executive summaries, and field operations — all driven by the same real-time data.',
    icon: HardDriveIcon,
  },
  {
    name: 'Intelligent Alerting',
    description:
      'Context-aware alerts that correlate events across domains before notifying your team. Reduce alarm fatigue by 80% with ML-driven prioritization that distinguishes genuine threats from background noise.',
  },
  {
    name: 'Multi-Domain Monitoring',
    description:
      'OT systems, IT infrastructure, video feeds, and physical security — monitored from a single pane. Cross-domain correlation reveals relationships that siloed tools can never see.',
    icon: RepeatIcon,
  },
  {
    name: 'KPI Tracking & Benchmarking',
    description:
      'OEE, availability, throughput, energy efficiency, and custom KPIs tracked continuously. Benchmark across sites, shifts, and time periods to drive operational improvement.',
  },
]

const securityFeatures = [
  {
    name: 'AI Video Analytics',
    description:
      'Object detection, behavior analysis, and anomaly recognition at the edge. Process video feeds in real time to identify threats, track assets, and monitor compliance — without streaming raw footage to the cloud.',
    icon: ShieldExclamationIcon,
  },
  {
    name: 'Perimeter Monitoring',
    description:
      'Sensor fusion across cameras, radar, lidar, and access control systems. Automated alert correlation eliminates false positives and provides verified intrusion detection with visual confirmation.',
  },
  {
    name: 'Satellite & Geospatial Intelligence',
    description:
      'Monitor remote assets, pipeline corridors, and facility perimeters using satellite imagery and geospatial analytics. Detect encroachment, environmental changes, and unauthorized activity across vast areas.',
  },
  {
    name: 'Incident Detection & Response',
    description:
      'Automated incident classification and escalation workflows that combine video evidence, sensor data, and operational context. Reduce mean time to detection from hours to seconds.',
  },
]

const integrationExamples = [
  {
    name: 'OT + Video Convergence',
    description:
      'Equipment vibration anomaly triggers automatic camera repositioning to the affected asset. Operators see the data spike and the live visual in a single view — no manual correlation needed.',
  },
  {
    name: 'IT + OT Correlation',
    description:
      'Network latency on an OT segment correlates with SCADA response degradation. Operate surfaces the relationship before operators notice the impact, enabling proactive remediation.',
  },
  {
    name: 'Video + Satellite Overlay',
    description:
      'Perimeter camera alerts cross-reference satellite imagery to confirm or dismiss threats. Geographic context reduces false alarms and provides investigators with layered visual evidence.',
  },
  {
    name: 'Security + OT Fusion',
    description:
      'Physical access events correlate with control system activity to detect unauthorized process changes. Badge-in data meets SCADA commands — closing the gap between physical and cyber security.',
  },
]

const industries = [
  {
    name: 'Energy & Utilities',
    href: '/industries/energy',
    headline: 'Predictive Intelligence for Critical Infrastructure',
    outcomes: [
      'Predict turbine and transformer failures 2–4 weeks in advance',
      'Reduce false alarms by 80% with AI-driven alert correlation',
      'Unified monitoring across generation, transmission, and distribution',
      'Satellite monitoring of pipeline corridors and remote assets',
    ],
  },
  {
    name: 'Telecommunications',
    href: '/industries/infrastructure',
    headline: 'Network-Wide Visibility at Scale',
    outcomes: [
      'Unified monitoring across 900+ tower sites',
      'Predictive maintenance for remote infrastructure',
    ],
  },
  {
    name: 'Industrial & Manufacturing',
    href: '/industries/industrial',
    headline: 'OEE Optimization Meets Predictive Maintenance',
    outcomes: [
      'Real-time OEE tracking across production lines',
      'Equipment health scoring and failure prediction',
    ],
  },
  {
    name: 'Defense & Government',
    href: '/industries/defense',
    headline: 'Multi-Domain Situational Awareness',
    outcomes: [
      'Converged OT, video, and geospatial intelligence',
      'Automated perimeter security with sensor fusion',
    ],
  },
]

const checkmark = (
  <svg className="mx-auto h-5 w-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const dash = <span className="text-neutral-300">&mdash;</span>

const comparisonRows = [
  { capability: 'Universal Data Ingestion', connect: true, operate: true },
  { capability: 'Time-Series Storage', connect: true, operate: true },
  { capability: 'Data Contextualization', connect: true, operate: true },
  { capability: 'Open API Access', connect: true, operate: true },
  { capability: 'Edge Processing', connect: true, operate: true },
  { capability: 'AI Analytics Engine', connect: false, operate: true },
  { capability: 'Predictive Maintenance', connect: false, operate: true },
  { capability: 'Anomaly Detection', connect: false, operate: true },
  { capability: 'Digital Twin Analytics', connect: false, operate: true },
  { capability: 'Real-Time Dashboards', connect: false, operate: true },
  { capability: 'Intelligent Alerting', connect: false, operate: true },
  { capability: 'Multi-Domain Monitoring', connect: false, operate: true },
  { capability: 'KPI Tracking', connect: false, operate: true },
  { capability: 'AI Video Analytics', connect: false, operate: true },
  { capability: 'Perimeter Monitoring', connect: false, operate: true },
  { capability: 'Satellite & Geospatial', connect: false, operate: true },
]

export default function OperatePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <Hero
        eyebrow="Quatro Operate"
        title="From Raw Data to Real Intelligence."
        description="AI-powered analytics, predictive maintenance, unified monitoring, video intelligence, and physical security — one platform that transforms the data Connect collects into the intelligence your operations need."
        primaryCta={{ label: 'Schedule an Operations Assessment', href: '/contact/demo' }}
        secondaryCta={{ label: 'See Platform Capabilities', href: '#analytics' }}
        demo={<Placeholder label="Operations Dashboard — Unified monitoring & AI analytics" className="h-full min-h-[400px]" />}
      />

      {/* Sections 2+3: Problem → Solution */}
      <ProblemSolution
        problemHeading="Data Without Intelligence Is Just Expensive Noise"
        solutionHeading="Operate: Intelligence Built on Connect"
        problems={problems}
        solutions={solutions}
      />

      {/* Stats Strip */}
      <StatStrip stats={stats} />

      {/* Section 4: Analytics & AI */}
      <Section id="analytics">
        <FeatureGrid
          title="The Brain: AI-Powered Analytics"
          subtitle="Machine learning models that learn your operations and get smarter over time — turning millions of data points into actionable intelligence."
          features={analyticsFeatures}
          columns={2}
        />
      </Section>

      {/* Section 5: Monitoring & Visibility */}
      <Section className="bg-neutral-800/2.5">
        <FeatureGrid
          title="The Eyes: Complete Operational Visibility"
          subtitle="Real-time monitoring across every domain — OT, IT, video, and physical security — in a single unified view."
          features={monitoringFeatures}
          columns={2}
        />
      </Section>

      {/* Section 6: Video & Physical Security */}
      <Section>
        <FeatureGrid
          title="The Watch: Video Intelligence & Physical Security"
          subtitle="AI-powered video analytics and physical security capabilities integrated directly into your operational intelligence layer — not siloed in a separate system."
          features={securityFeatures}
          columns={2}
        />
      </Section>

      {/* Section 7: Multi-Domain Integration */}
      <Section className="bg-neutral-800/2.5">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
            Everything Converges in Operate
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            The real power isn&apos;t in any single capability — it&apos;s in what happens when OT data, video feeds, IT metrics, and security events converge into a single intelligence layer.
          </p>
        </div>
        <Placeholder label="Architecture Diagram — Multi-domain convergence: OT + IT + Video + Security" />
        <div className="mt-12">
          <FeatureGrid
            features={integrationExamples}
            columns={2}
          />
        </div>
      </Section>

      {/* Section 8: Industry Applications */}
      <IndustryShowcase
        heading="Built for Your Industry"
        industries={industries}
      />

      {/* Section 9: Industry Proof Points */}
      <Section>
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
            Proven in Production
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <ProofPointCard
            industryLabel="Telecommunications"
            headline="Unified Monitoring Across 900+ Tower Sites"
            narrative="A major telecom operator consolidated fragmented monitoring tools across 900+ cell tower sites into a single Operate deployment. AI-driven alert correlation reduced false alarms by 80%, while predictive maintenance models now forecast equipment failures weeks in advance — cutting emergency truck rolls by 40%."
          />
          <ProofPointCard
            industryLabel="Renewable Energy"
            headline="15,000 Wind Turbines, One Platform"
            narrative="A global renewable energy operator uses Operate to monitor 15,000 wind turbines across three continents. Predictive maintenance models detect bearing degradation and blade anomalies 2–4 weeks before failure, while satellite imagery monitors access roads and environmental conditions across remote wind farms."
          />
        </div>
      </Section>

      {/* Section 10: Connect vs Operate Comparison */}
      <Section className="bg-neutral-800/2.5">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
            Connect or Operate? Choose What You Need.
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Connect is the data foundation. Operate adds intelligence, monitoring, and security on top.
          </p>
        </div>

        <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <table className="mx-auto w-full max-w-3xl border-collapse text-sm">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="py-3 pr-4 text-left font-semibold text-neutral-800">Capability</th>
                <th className="w-28 py-3 text-center font-semibold text-neutral-800">Connect</th>
                <th className="w-28 py-3 text-center font-semibold text-brand-500">Operate</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.capability} className="border-b border-neutral-100">
                  <td className="py-2.5 pr-4 text-neutral-600">{row.capability}</td>
                  <td className="py-2.5 text-center">{row.connect ? checkmark : dash}</td>
                  <td className="py-2.5 text-center">{row.connect ? checkmark : checkmark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-neutral-200 bg-white p-6">
            <h3 className="text-base font-semibold text-neutral-800">Start with Connect if&hellip;</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li>You need to replace or augment a legacy historian</li>
              <li>Your priority is data consolidation and open access</li>
              <li>You want a modern data foundation before adding analytics</li>
              <li>Your team already has monitoring and analytics tools</li>
            </ul>
          </div>
          <div className="rounded-xl border border-brand-200 bg-brand-50 p-6">
            <h3 className="text-base font-semibold text-neutral-800">Add Operate when&hellip;</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li>You need AI analytics and predictive maintenance</li>
              <li>You want unified monitoring across OT, IT, and video</li>
              <li>You&apos;re consolidating 5+ siloed monitoring tools</li>
              <li>Physical security and video analytics are in scope</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Section 11: Path Forward (Upsell) */}
      <Section>
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
            Operate Detects. Command Responds.
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Operate transforms data into intelligence. When you&apos;re ready for automated response and orchestration, Command takes over.
          </p>
        </div>
        <ProductProgression />
      </Section>

      {/* Section 12: Final CTA */}
      <CtaBanner
        title="Ready to Transform Your Operations?"
        description="See how Operate turns your operational data into predictive intelligence — in a live walkthrough tailored to your environment."
        primaryCta={{ label: 'Schedule an Operations Assessment', href: '/contact/demo' }}
        secondaryCta={{ label: 'Talk to an Engineer', href: '/contact/sales' }}
        microcopy="Typical assessment: 30–45 minutes. We'll map your current tools and show you where intelligence replaces manual effort."
      />
    </>
  )
}
