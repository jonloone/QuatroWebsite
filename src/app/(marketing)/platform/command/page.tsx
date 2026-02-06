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
import { CodeSquareIcon } from '@/components/icons/code-square-icon'
import { CpuIcon } from '@/components/icons/cpu-icon'
import { HardDriveIcon } from '@/components/icons/hard-drive-icon'
import { RepeatIcon } from '@/components/icons/repeat-icon'
import { ShieldExclamationIcon } from '@/components/icons/shield-exclamation-icon'
import { TagIcon } from '@/components/icons/tag-icon'

export const metadata = {
  title: 'Command — Unified Operations Center & Cross-Domain Orchestration',
  description:
    'See everything, act decisively. Quatro Command unifies operations centers with cross-domain orchestration, automated response playbooks, fleet coordination, and AI decision support — from a single console across 100+ sites.',
}

const problems = [
  {
    title: 'Awareness Without Action',
    description:
      'Your dashboards show the problem. Your operators see the alert. But translating awareness into coordinated action still requires phone calls, radio chatter, and spreadsheets — losing critical minutes when seconds matter.',
  },
  {
    title: 'Fragmented Response',
    description:
      'Security escalates in one system, operations responds in another, maintenance dispatches from a third. No single view connects the people, assets, and workflows needed for a coordinated response.',
  },
  {
    title: 'Multi-Site Chaos',
    description:
      'Each facility runs its own tools, its own procedures, its own reporting. Corporate has no real-time visibility across sites, and standardizing operations means years of integration projects.',
  },
  {
    title: 'Reactive, Not Orchestrated',
    description:
      'When incidents occur, your team improvises. Playbooks exist in binders, not in systems. Escalation paths depend on who answers the phone, not on automated workflows that execute in seconds.',
  },
]

const solutions = [
  {
    title: 'Unified Command View',
    description:
      'A single operational picture that fuses data from Connect and intelligence from Operate into one real-time command interface — so operators see the full situation, not fragments.',
  },
  {
    title: 'Cross-Domain Orchestration',
    description:
      'Coordinate responses across security, operations, logistics, and maintenance from one console. Automated playbooks trigger the right actions across domains — no phone trees required.',
  },
  {
    title: 'Centralized Multi-Site Control',
    description:
      'Manage 100+ distributed facilities from a centralized or federated command structure. Standardize procedures, enforce policies, and maintain real-time visibility across your entire footprint.',
  },
  {
    title: 'Automated Response Workflows',
    description:
      'Pre-configured playbooks that execute in seconds, not minutes. Automated escalation, resource dispatch, and cross-domain coordination — turning reactive scrambles into orchestrated responses.',
  },
]

const stats = [
  { value: '~60%', label: 'Faster Incident Response' },
  { value: '5→1', label: 'Platforms Consolidated' },
  { value: '24/7', label: 'Automated Orchestration' },
  { value: '100+', label: 'Sites, One Console' },
]

const solutionValueProps = [
  {
    name: 'Cross-Domain Orchestration',
    description:
      'Coordinate security, operations, logistics, and maintenance from a single command interface. Automated playbooks trigger multi-domain actions simultaneously — bridging the gap between detection and response.',
    icon: RepeatIcon,
  },
  {
    name: 'AI Decision Support',
    description:
      'Machine learning models surface recommendations, predict outcomes, and rank response options in real time. Operators make faster, better decisions backed by data — not gut instinct.',
    icon: CpuIcon,
  },
  {
    name: 'Unified Situational Awareness',
    description:
      'Multi-domain operational picture combining sensor feeds, video streams, fleet positions, and AI analytics into a single real-time view. See everything that matters — nothing that doesn\'t.',
    icon: HardDriveIcon,
  },
  {
    name: 'Automated Playbooks',
    description:
      'Pre-configured response workflows that execute in seconds. Escalation protocols, resource mobilization, and notification chains — all automated and auditable, replacing manual runbooks with system-enforced procedures.',
    icon: CodeSquareIcon,
  },
  {
    name: 'Fleet & Asset Coordination',
    description:
      'Real-time fleet tracking, route optimization, and cargo monitoring with centralized dispatch. Coordinate mobile assets across regions from a single command view.',
    icon: TagIcon,
  },
  {
    name: 'Multi-Site Command',
    description:
      'Centralized or federated control across 100+ distributed facilities. Standardized operating procedures, policy enforcement, and real-time cross-site visibility — with role-based access at every level.',
    icon: ShieldExclamationIcon,
  },
]

const operationsCenterFeatures = [
  {
    name: 'Common Operating Picture',
    description:
      'A single, real-time view that integrates all data sources — OT telemetry, video feeds, access control, fleet positions, weather, and third-party intelligence — into one unified situational display.',
  },
  {
    name: 'Multi-Screen Control Room',
    description:
      'Purpose-built for enterprise control rooms with multi-monitor layouts, configurable views per role, and drag-and-drop workspace management. Operators see exactly what they need for their function.',
  },
  {
    name: 'Role-Based Workspaces',
    description:
      'Tailored interfaces for security operators, dispatch coordinators, field supervisors, and executive leadership. Each role gets the information density and action capabilities they need — nothing more, nothing less.',
  },
  {
    name: 'Event Timeline & Audit Trail',
    description:
      'Complete chronological record of every event, action, decision, and communication. Searchable, exportable, and compliance-ready for post-incident review and regulatory reporting.',
  },
]

const responseFeatures = [
  {
    name: 'Automated Playbook Engine',
    description:
      'Define response workflows that trigger automatically on specific conditions. Multi-step playbooks coordinate actions across domains — dispatching crews, locking perimeters, notifying stakeholders, and escalating to leadership — all within seconds.',
  },
  {
    name: 'Escalation Management',
    description:
      'Configurable escalation paths with automatic timeout-based promotion. If a responder doesn\'t acknowledge within the SLA, the system escalates automatically — ensuring no alert goes unactioned.',
  },
  {
    name: 'Resource Dispatch',
    description:
      'Intelligent dispatch that considers crew location, certification, availability, and travel time. Assign the nearest qualified responder and track their progress from dispatch to resolution.',
  },
  {
    name: 'Cross-Domain Correlation',
    description:
      'Automatically correlate events across security, operations, and logistics to identify compound incidents. A power fault plus a perimeter breach isn\'t two separate tickets — it\'s one coordinated response.',
  },
]

const fleetFeatures = [
  {
    name: 'Real-Time Fleet Tracking',
    description:
      'GPS and telematics integration for every vehicle, vessel, and mobile asset in your fleet. Live position, speed, heading, and status — overlaid on your operational map alongside facility data.',
  },
  {
    name: 'Route Optimization',
    description:
      'AI-powered routing that considers distance, traffic, road conditions, delivery windows, and asset priority. Reduce fuel costs and improve response times with dynamically optimized routes.',
  },
  {
    name: 'Cargo & Chain of Custody',
    description:
      'End-to-end cargo tracking from origin to destination with temperature monitoring, tamper detection, and chain-of-custody documentation. Know exactly where every shipment is and what condition it\'s in.',
  },
  {
    name: 'Centralized Dispatch',
    description:
      'Unified dispatch console for field crews, delivery vehicles, and emergency responders. Assign, reassign, and track work orders from a single interface with full visibility into resource availability.',
  },
]

const decisionFeatures = [
  {
    name: 'Predictive Scenario Modeling',
    description:
      'Run what-if scenarios on live operational data. Model the impact of equipment failures, weather events, or security incidents before they happen — and pre-position resources based on predicted outcomes.',
  },
  {
    name: 'Risk Scoring & Prioritization',
    description:
      'ML-driven risk models that continuously score and rank threats, anomalies, and operational events. Operators focus on the highest-impact items first, reducing cognitive overload and improving response quality.',
  },
  {
    name: 'Recommendation Engine',
    description:
      'Context-aware suggestions based on historical patterns, current conditions, and defined policies. The system recommends optimal response actions — operators approve, modify, or override with full audit logging.',
  },
]

const deploymentOptions = [
  {
    name: 'Enterprise Cloud',
    description:
      'Fully managed SaaS deployment for multi-site command and control. Centralized orchestration with automatic scaling, updates, and disaster recovery built in.',
    bestFor: 'Organizations wanting centralized command across distributed sites without infrastructure overhead.',
  },
  {
    name: 'On-Premises Command Center',
    description:
      'Deploy within your secure data center for complete data sovereignty. Purpose-built for classified environments, air-gapped networks, and regulatory requirements.',
    bestFor: 'Defense, government, and critical infrastructure operators requiring data residency and network isolation.',
  },
  {
    name: 'Hybrid Federation',
    description:
      'Federated architecture with local command nodes at each site and centralized oversight at headquarters. Operates independently during connectivity loss with automatic resynchronization.',
    bestFor: 'Distributed operations requiring both local autonomy and centralized visibility.',
  },
]

const industries = [
  {
    name: 'Energy & Utilities',
    href: '/industries/energy',
    headline: 'Orchestrate Response Across Generation, Transmission & Distribution',
    outcomes: [
      'Coordinate automated response across 200+ substations from a single console',
      'Execute storm response playbooks that pre-position crews and materials',
      'Unified command view across generation, transmission, and distribution',
      'Compliance-ready audit trails for NERC CIP and regulatory reporting',
    ],
  },
  {
    name: 'Defense & Government',
    href: '/industries/defense',
    headline: 'Multi-Domain Command & Control',
    outcomes: [
      'Federated command across forward operating bases and garrison facilities',
      'Cross-domain orchestration: physical security, cyber, logistics, and force protection',
    ],
  },
  {
    name: 'Logistics & Transportation',
    href: '/industries/infrastructure',
    headline: 'Fleet Coordination at Continental Scale',
    outcomes: [
      'Centralized dispatch and route optimization across thousands of assets',
      'Real-time cargo tracking with chain-of-custody documentation',
    ],
  },
  {
    name: 'Industrial & Manufacturing',
    href: '/industries/industrial',
    headline: 'Multi-Plant Operations Orchestration',
    outcomes: [
      'Unified command across multiple manufacturing sites and supply chain nodes',
      'Automated incident response with cross-functional coordination',
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
  { capability: 'Universal Data Ingestion', connect: true, operate: true, command: true },
  { capability: 'Time-Series Storage', connect: true, operate: true, command: true },
  { capability: 'Data Contextualization', connect: true, operate: true, command: true },
  { capability: 'Open API Access', connect: true, operate: true, command: true },
  { capability: 'Edge Processing', connect: true, operate: true, command: true },
  { capability: 'AI Analytics Engine', connect: false, operate: true, command: true },
  { capability: 'Predictive Maintenance', connect: false, operate: true, command: true },
  { capability: 'Anomaly Detection', connect: false, operate: true, command: true },
  { capability: 'Real-Time Dashboards', connect: false, operate: true, command: true },
  { capability: 'AI Video Analytics', connect: false, operate: true, command: true },
  { capability: 'Unified Operations Center', connect: false, operate: false, command: true },
  { capability: 'Cross-Domain Orchestration', connect: false, operate: false, command: true },
  { capability: 'Automated Playbooks', connect: false, operate: false, command: true },
  { capability: 'Fleet & Logistics Coordination', connect: false, operate: false, command: true },
  { capability: 'AI Decision Support', connect: false, operate: false, command: true },
  { capability: 'Multi-Site Command', connect: false, operate: false, command: true },
  { capability: 'Resource Dispatch', connect: false, operate: false, command: true },
  { capability: 'Scenario Modeling', connect: false, operate: false, command: true },
]

export default function CommandPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <Hero
        eyebrow="Quatro Command"
        title="See Everything. Act Decisively."
        description="Unified command and control that bridges the gap between awareness and action. Cross-domain orchestration, automated response playbooks, fleet coordination, and AI decision support — from a single console across every site in your enterprise."
        primaryCta={{ label: 'Request an Enterprise Briefing', href: '/contact/demo' }}
        secondaryCta={{ label: 'See the Complete Platform', href: '#complete-platform' }}
        demo={<Placeholder label="Command Center — Unified operations & cross-domain orchestration" className="h-full min-h-[400px]" />}
      />

      {/* Sections 2+3: Problem → Solution */}
      <ProblemSolution
        problemHeading="You Can See the Problem — But You Can't Act Fast Enough"
        solutionHeading="Command: From Awareness to Orchestrated Action"
        problems={problems}
        solutions={solutions}
      />

      {/* Stats Strip */}
      <StatStrip stats={stats} />

      {/* Section 3b: Solution Value Props */}
      <Section>
        <FeatureGrid
          title="The Command Advantage"
          subtitle="Six capabilities that transform how enterprises coordinate response, manage operations, and command distributed assets."
          features={solutionValueProps}
          columns={3}
        />
      </Section>

      {/* Section 4: Unified Operations Center */}
      <Section className="bg-neutral-800/2.5">
        <FeatureGrid
          title="The Nerve Center: Unified Operations"
          subtitle="A purpose-built command environment that gives operators the complete picture — and the tools to act on it."
          features={operationsCenterFeatures}
          columns={2}
        />
      </Section>

      {/* Section 5: Response & Orchestration */}
      <Section>
        <FeatureGrid
          title="The Engine: Response & Orchestration"
          subtitle="Automated workflows that coordinate multi-domain response in seconds — replacing manual escalation with system-enforced playbooks."
          features={responseFeatures}
          columns={2}
        />
      </Section>

      {/* Section 6: Fleet & Logistics */}
      <Section className="bg-neutral-800/2.5">
        <FeatureGrid
          title="The Reach: Fleet & Logistics Coordination"
          subtitle="Real-time tracking, intelligent dispatch, and route optimization for every mobile asset in your operation."
          features={fleetFeatures}
          columns={2}
        />
      </Section>

      {/* Section 7: Decision Support */}
      <Section>
        <FeatureGrid
          title="The Intelligence: AI Decision Support"
          subtitle="Machine learning that helps operators make better decisions faster — with predictive modeling, risk scoring, and context-aware recommendations."
          features={decisionFeatures}
          columns={3}
        />
      </Section>

      {/* Section 8: Enterprise Architecture */}
      <Section className="bg-neutral-800/2.5">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
            Architected for Enterprise Command
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Deploy Command where your operations demand it — cloud, on-premises, or federated across both.
          </p>
        </div>
        <Placeholder label="Architecture Diagram — Federated Command: HQ ↔ Regional Nodes ↔ Site Controllers" />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {deploymentOptions.map((option) => (
            <div key={option.name} className="rounded-xl border border-neutral-800/5 p-6">
              <h3 className="text-base font-semibold text-neutral-800">{option.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{option.description}</p>
              <p className="mt-3 text-sm font-medium text-brand-500">Best for: {option.bestFor}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 9: Industry Applications */}
      <IndustryShowcase
        heading="Command Powers Every Mission"
        industries={industries}
      />

      {/* Section 10: Proof Points */}
      <Section>
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
            Proven in Production
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <ProofPointCard
            industryLabel="Energy & Utilities"
            headline="200+ Substations Orchestrated From a Single Command Center"
            narrative="A major utility operator consolidated five regional control rooms into a unified Command deployment spanning 200+ substations. Automated storm response playbooks now pre-position crews and materials based on weather forecasts, cutting average restoration time by 60%. Cross-domain correlation between SCADA alarms and physical security events eliminated false dispatches — saving an estimated 2,000 truck rolls per year."
          />
          <ProofPointCard
            industryLabel="Defense & Logistics"
            headline="12 Forward Operating Bases, One Federated Command"
            narrative="A defense logistics operation deployed Command across 12 forward operating bases with federated architecture that operates independently during connectivity loss. Centralized fleet coordination reduced convoy planning time from hours to minutes, while automated force protection playbooks cut incident response time by 55%. Full audit trails satisfy chain-of-command reporting requirements with zero manual documentation."
          />
        </div>
      </Section>

      {/* Section 11: Complete Platform Comparison */}
      <Section id="complete-platform" className="bg-neutral-800/2.5">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
            The Complete Platform
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Connect collects. Operate analyzes. Command orchestrates. Choose the level that matches your operational maturity.
          </p>
        </div>

        <ProductProgression />

        <div className="mt-16 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <table className="mx-auto w-full max-w-4xl border-collapse text-sm">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="py-3 pr-4 text-left font-semibold text-neutral-800">Capability</th>
                <th className="w-28 py-3 text-center font-semibold text-neutral-800">Connect</th>
                <th className="w-28 py-3 text-center font-semibold text-neutral-800">Operate</th>
                <th className="w-28 py-3 text-center font-semibold text-brand-500">Command</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.capability} className="border-b border-neutral-100">
                  <td className="py-2.5 pr-4 text-neutral-600">{row.capability}</td>
                  <td className="py-2.5 text-center">{row.connect ? checkmark : dash}</td>
                  <td className="py-2.5 text-center">{row.operate ? checkmark : dash}</td>
                  <td className="py-2.5 text-center">{row.command ? checkmark : dash}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-neutral-200 bg-white p-6">
            <h3 className="text-base font-semibold text-neutral-800">Start with Connect if&hellip;</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li>You need to replace or augment a legacy historian</li>
              <li>Your priority is data consolidation and open access</li>
              <li>You want a modern data foundation before adding intelligence</li>
            </ul>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-6">
            <h3 className="text-base font-semibold text-neutral-800">Add Operate when&hellip;</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li>You need AI analytics and predictive maintenance</li>
              <li>You want unified monitoring across OT, IT, and video</li>
              <li>You&apos;re consolidating siloed monitoring tools</li>
            </ul>
          </div>
          <div className="rounded-xl border border-brand-200 bg-brand-50 p-6">
            <h3 className="text-base font-semibold text-neutral-800">Deploy Command when&hellip;</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li>You need cross-domain orchestration and automated response</li>
              <li>You operate 10+ sites requiring centralized command</li>
              <li>Fleet coordination and dispatch are mission-critical</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Section 12: Final CTA */}
      <CtaBanner
        title="Ready to Take Command?"
        description="See how Command unifies your operations center with cross-domain orchestration — in a live briefing tailored to your operational environment."
        primaryCta={{ label: 'Request an Enterprise Briefing', href: '/contact/demo' }}
        secondaryCta={{ label: 'Talk to a Solutions Architect', href: '/contact/sales' }}
        microcopy="Typical briefing: 45–60 minutes. We'll map your current operations and demonstrate coordinated response across your domains."
      />
    </>
  )
}
