'use client'

import { QuatroLogo } from '@/components/quatro-logo'
import { ButtonLink, SoftButtonLink } from '@/components/ui/button'
import { ctaNavigation, primaryNavigation } from '@/lib/navigation'
import { ElDialog, ElDialogPanel } from '@tailwindplus/elements/react'
import Link from 'next/link'
import { NavDropdown } from './nav-dropdown'

function MobileNavLink({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <Link
      href={href}
      className="block rounded-lg py-2 text-base font-medium text-neutral-800 hover:bg-neutral-800/5"
    >
      {children}
    </Link>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 bg-neutral-50">
      <style>{`:root { --scroll-padding-top: 5.25rem }`}</style>
      <nav>
        <div className="mx-auto flex h-(--scroll-padding-top) max-w-7xl items-center gap-4 px-6 lg:px-10">
          <div className="flex flex-1 items-center gap-12">
            <Link href="/" className="inline-flex items-stretch">
              <QuatroLogo className="h-10 w-auto" />
            </Link>
            <div className="flex gap-8 max-lg:hidden">
              {primaryNavigation.map((item) => (
                <NavDropdown
                  key={item.name}
                  label={item.name}
                  items={item.items}
                  cta={item.cta}
                  variant={item.variant}
                  featured={item.featured}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-1 items-center justify-end gap-4">
            <div className="flex shrink-0 items-center gap-5 max-lg:hidden">
              {ctaNavigation.map((cta) =>
                cta.variant === 'solid' ? (
                  <ButtonLink key={cta.name} href={cta.href} size="lg">
                    {cta.name}
                  </ButtonLink>
                ) : (
                  <SoftButtonLink key={cta.name} href={cta.href} size="lg">
                    {cta.name}
                  </SoftButtonLink>
                ),
              )}
            </div>

            <button
              command="show-modal"
              commandfor="mobile-menu"
              aria-label="Toggle menu"
              className="inline-flex rounded-full p-1.5 text-neutral-800 hover:bg-neutral-800/10 lg:hidden"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path
                  fillRule="evenodd"
                  d="M3.748 8.248a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75ZM3.748 15.75a.75.75 0 0 1 .75-.751h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <ElDialog className="lg:hidden">
          <dialog id="mobile-menu" className="backdrop:bg-transparent">
            <ElDialogPanel className="fixed inset-0 overflow-y-auto bg-neutral-50 px-6 py-6 lg:px-10">
              <div className="flex justify-end">
                <button
                  command="close"
                  commandfor="mobile-menu"
                  aria-label="Toggle menu"
                  className="inline-flex rounded-full p-1.5 text-neutral-800 hover:bg-neutral-800/10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flex flex-col gap-6">
                {primaryNavigation.map((section) => (
                  <div key={section.name}>
                    <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      {section.name}
                    </div>
                    <div className="mt-2 flex flex-col">
                      {section.items.map((item) => (
                        <MobileNavLink key={item.href} href={item.href}>
                          {item.name}
                        </MobileNavLink>
                      ))}
                      <MobileNavLink href={section.cta.href}>
                        {section.cta.name}
                      </MobileNavLink>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-4">
                {ctaNavigation.map((cta) =>
                  cta.variant === 'solid' ? (
                    <ButtonLink key={cta.name} href={cta.href} size="lg" className="justify-center">
                      {cta.name}
                    </ButtonLink>
                  ) : (
                    <SoftButtonLink key={cta.name} href={cta.href} size="lg" className="justify-center">
                      {cta.name}
                    </SoftButtonLink>
                  ),
                )}
              </div>
            </ElDialogPanel>
          </dialog>
        </ElDialog>
      </nav>
    </header>
  )
}
