import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

export function Wallpaper({
  children,
  color,
  backgroundImage,
  className,
  ...props
}: { color?: 'green' | 'blue' | 'purple' | 'brown'; backgroundImage?: string } & ComponentProps<'div'>) {
  return (
    <div
      data-color={color}
      className={clsx(
        'relative overflow-hidden bg-contain bg-no-repeat bg-center',
        !backgroundImage &&
          'bg-linear-to-b data-[color=blue]:from-[#637c86] data-[color=blue]:to-[#778599] data-[color=brown]:from-[#8d7359] data-[color=brown]:to-[#765959] data-[color=green]:from-[#9ca88f] data-[color=green]:to-[#596352] data-[color=purple]:from-[#7b627d] data-[color=purple]:to-[#8f6976]',
        className,
      )}
      style={backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : undefined}
      {...props}
    >
      <div className="relative">{children}</div>
    </div>
  )
}
