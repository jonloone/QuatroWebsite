import { clsx } from 'clsx/lite'
import Link from 'next/link'

function ImagePlaceholder({ className }: { className?: string }) {
  return (
    <div className={clsx('flex items-center justify-center rounded-lg bg-neutral-200', className)}>
      <svg className="h-10 w-10 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
    </div>
  )
}

const products = [
  {
    step: '01',
    name: 'Connect',
    tagline: 'Get your data in.',
    description:
      'Converge any data source into a unified operational fabric. 8,000+ protocol connectors normalize OT, IT, and IoT data at the edge — SCADA, Modbus, OPC-UA, MQTT, and beyond.',
    capabilities: ['OT/IT Convergence', 'Edge Normalization', '8,000+ Connectors', 'Legacy Integration', 'Secure Pipelines'],
    href: '/platform/connect',
    cardBg: 'bg-white',
    border: 'border-brand-200',
    pill: 'bg-brand-100 text-brand-700',
    stepColor: 'text-brand-400',
    nameColor: 'text-neutral-800',
    taglineColor: 'text-brand-500',
    descColor: 'text-neutral-600',
    linkColor: 'text-brand-500 hover:text-brand-600',
  },
  {
    step: '02',
    name: 'Operate',
    tagline: 'Run your operations.',
    description:
      'Real-time monitoring, AI-powered analytics, and predictive intelligence across your entire operation. Fuses video analytics, sensor data, and security monitoring into a single operational view.',
    capabilities: ['Real-Time Monitoring', 'Predictive Maintenance', 'Video Analytics', 'Anomaly Detection', 'Performance Management'],
    href: '/platform/operate',
    cardBg: 'bg-brand-50',
    border: 'border-brand-300',
    pill: 'bg-brand-200 text-brand-800',
    stepColor: 'text-brand-500',
    nameColor: 'text-neutral-800',
    taglineColor: 'text-brand-600',
    descColor: 'text-neutral-600',
    linkColor: 'text-brand-600 hover:text-brand-700',
  },
  {
    step: '03',
    name: 'Command',
    tagline: 'See everything. Act decisively.',
    description:
      'Unified operations center with cross-domain orchestration, threat response, and fleet coordination. Every insight from Connect and Operate converges into decisive action.',
    capabilities: ['Operations Center', 'Cross-Domain Orchestration', 'Fleet Coordination', 'Threat Response', 'AI Decision Support'],
    href: '/platform/command',
    cardBg: 'bg-brand-950',
    border: 'border-brand-800',
    pill: 'bg-brand-800 text-brand-200',
    stepColor: 'text-brand-400',
    nameColor: 'text-white',
    taglineColor: 'text-brand-300',
    descColor: 'text-brand-200',
    linkColor: 'text-brand-300 hover:text-brand-200',
  },
]

function ArrowRight() {
  return (
    <div className="hidden items-center lg:flex">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-brand-300">
        <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

function ArrowDown() {
  return (
    <div className="flex items-center justify-center lg:hidden">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-brand-300">
        <path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export function ProductProgression() {
  return (
    <div>
      <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
        {products.map((product, i) => (
          <div key={product.name} className="contents">
            <div className={`flex flex-col rounded-2xl border p-6 sm:p-8 ${product.cardBg} ${product.border}`}>
              <ImagePlaceholder className="mb-4 h-32" />
              <p className={`text-sm font-semibold ${product.stepColor}`}>{product.step}</p>
              <h3 className={`mt-2 text-2xl font-bold ${product.nameColor}`}>{product.name}</h3>
              <p className={`mt-1 text-sm font-medium ${product.taglineColor}`}>{product.tagline}</p>
              <p className={`mt-4 text-sm leading-relaxed ${product.descColor}`}>{product.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {product.capabilities.map((cap) => (
                  <span key={cap} className={`rounded-full px-3 py-1 text-xs font-medium ${product.pill}`}>
                    {cap}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <Link href={product.href} className={`text-sm font-semibold ${product.linkColor}`}>
                  Learn More &rarr;
                </Link>
              </div>
            </div>
            {i < products.length - 1 && (
              <>
                <ArrowRight />
                <ArrowDown />
              </>
            )}
          </div>
        ))}
      </div>
      <p className="mt-10 text-center text-sm text-neutral-500">
        Every product builds on the last. Start where you need to.
      </p>
    </div>
  )
}
