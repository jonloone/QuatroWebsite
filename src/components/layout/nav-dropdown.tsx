'use client'

import { ChevronDownIcon } from '@/components/icons/chevron-down'
import { ArrowRightIcon } from '@/components/icons/nav-icons'
import type { FeaturedCaseStudy, NavDropdownVariant, NavItem } from '@/lib/navigation'
import { ElPopover } from '@tailwindplus/elements/react'
import Link from 'next/link'
import { useId } from 'react'

interface NavDropdownProps {
  label: string
  items: NavItem[]
  cta: { name: string; href: string }
  variant?: NavDropdownVariant
  featured?: FeaturedCaseStudy
}

function NavItemLink({ item }: { item: NavItem }) {
  return (
    <Link
      href={item.href}
      className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-neutral-100"
    >
      <div className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-lg bg-neutral-100 group-hover:bg-white">
        <item.icon aria-hidden="true" className="size-6 text-neutral-600 group-hover:text-brand-500" />
      </div>
      <div>
        <span className="font-semibold text-neutral-800">
          {item.name}
          <span className="absolute inset-0" />
        </span>
        <p className="mt-1 text-sm text-neutral-600">{item.description}</p>
      </div>
    </Link>
  )
}

function StackedLayout({ items, cta }: { items: NavItem[]; cta: { name: string; href: string } }) {
  return (
    <>
      <div className="p-4">
        {items.map((item) => (
          <NavItemLink key={item.href} item={item} />
        ))}
      </div>
      <div className="bg-neutral-100 px-8 py-6">
        <Link
          href={cta.href}
          className="inline-flex items-center gap-x-2.5 text-sm/6 font-semibold text-neutral-800 hover:text-brand-500"
        >
          {cta.name}
          <ArrowRightIcon className="size-5" />
        </Link>
      </div>
    </>
  )
}

function TwoColumnLayout({ items, cta }: { items: NavItem[]; cta: { name: string; href: string } }) {
  const midpoint = Math.ceil(items.length / 2)
  const leftColumn = items.slice(0, midpoint)
  const rightColumn = items.slice(midpoint)

  return (
    <>
      <div className="grid grid-cols-2 gap-x-4 p-4">
        <div>
          {leftColumn.map((item) => (
            <NavItemLink key={item.href} item={item} />
          ))}
        </div>
        <div>
          {rightColumn.map((item) => (
            <NavItemLink key={item.href} item={item} />
          ))}
        </div>
      </div>
      <div className="bg-neutral-100 px-8 py-6">
        <Link
          href={cta.href}
          className="inline-flex items-center gap-x-2.5 text-sm/6 font-semibold text-neutral-800 hover:text-brand-500"
        >
          {cta.name}
          <ArrowRightIcon className="size-5" />
        </Link>
      </div>
    </>
  )
}

function FeaturedLayout({
  items,
  cta,
  featured,
}: {
  items: NavItem[]
  cta: { name: string; href: string }
  featured: FeaturedCaseStudy
}) {
  return (
    <div className="grid grid-cols-2">
      <div className="p-4">
        {items.map((item) => (
          <NavItemLink key={item.href} item={item} />
        ))}
        <div className="mt-2 px-4">
          <Link
            href={cta.href}
            className="inline-flex items-center gap-x-2.5 text-sm/6 font-semibold text-neutral-800 hover:text-brand-500"
          >
            {cta.name}
            <ArrowRightIcon className="size-5" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center bg-neutral-100 p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
          Case Study
        </p>
        <p className="mt-2 font-display text-lg font-semibold text-neutral-800">
          {featured.title}
        </p>
        <blockquote className="mt-3 text-sm/6 text-neutral-600">
          &ldquo;{featured.quote}&rdquo;
        </blockquote>
        <p className="mt-3 text-sm font-medium text-neutral-800">
          {featured.author}
          <span className="text-neutral-500"> &mdash; {featured.company}</span>
        </p>
        <Link
          href={featured.href}
          className="mt-4 inline-flex items-center gap-x-2 text-sm/6 font-semibold text-brand-600 hover:text-brand-500"
        >
          Read case study
          <ArrowRightIcon className="size-4" />
        </Link>
      </div>
    </div>
  )
}

export function NavDropdown({ label, items, cta, variant = 'stacked', featured }: NavDropdownProps) {
  const id = useId()
  const popoverId = `nav-popover-${id}`

  const getPopoverWidth = () => {
    switch (variant) {
      case 'two-column':
        return 'w-screen max-w-2xl'
      case 'featured':
        return 'w-screen max-w-3xl'
      default:
        return 'w-screen max-w-md'
    }
  }

  return (
    <div className="relative">
      <button
        popoverTarget={popoverId}
        className="inline-flex items-center gap-1 text-sm/7 font-medium text-neutral-800"
      >
        {label}
        <ChevronDownIcon className="size-4" />
      </button>

      <ElPopover
        id={popoverId}
        popover="auto"
        anchor="bottom start"
        className={`mt-3 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-neutral-900/5 ${getPopoverWidth()}`}
      >
        {variant === 'stacked' && <StackedLayout items={items} cta={cta} />}
        {variant === 'two-column' && <TwoColumnLayout items={items} cta={cta} />}
        {variant === 'featured' && featured && (
          <FeaturedLayout items={items} cta={cta} featured={featured} />
        )}
      </ElPopover>
    </div>
  )
}
