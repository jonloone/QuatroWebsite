import { QuatroLogo } from '@/components/quatro-logo'
import { Container } from '@/components/ui/container'
import { footerNavigation } from '@/lib/navigation'
import Link from 'next/link'

export function SiteFooter() {
  let columns = Object.values(footerNavigation)

  return (
    <footer className="pt-16">
      <div className="bg-neutral-900 py-16 text-neutral-50">
        <Container className="flex flex-col gap-16">
          {/* Logo and tagline */}
          <div>
            <QuatroLogo className="h-10 w-auto" light />
            <p className="mt-4 max-w-md text-sm text-neutral-400">
              Industrial Intelligence at the Speed of Operations. Connect your data. Operate with intelligence. Command
              with confidence.
            </p>
          </div>

          {/* Link columns */}
          <nav className="grid grid-cols-2 gap-6 text-sm/7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-neutral-50">{column.title}</h3>
                <ul role="list" className="mt-2 flex flex-col gap-2">
                  {column.items.map((item) => (
                    <li key={item.href} className="text-neutral-400 hover:text-neutral-200">
                      <Link href={item.href}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-sm/7 text-neutral-500">
            &copy; {new Date().getFullYear()} Quatro. All rights reserved.
          </div>
        </Container>
      </div>
    </footer>
  )
}
