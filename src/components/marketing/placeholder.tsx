import { clsx } from 'clsx/lite'

export function Placeholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={clsx(
        'flex min-h-40 items-center justify-center rounded-xl border-2 border-dashed border-neutral-300 bg-neutral-800/2.5 p-8',
        className,
      )}
    >
      <p className="text-sm font-medium text-neutral-400">{label}</p>
    </div>
  )
}
