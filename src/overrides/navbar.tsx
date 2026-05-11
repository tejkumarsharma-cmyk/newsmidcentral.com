'use client'

import Link from 'next/link'
import { Search } from 'lucide-react'

export const NAVBAR_OVERRIDE_ENABLED = true

const primaryLinks = [
  { label: 'Press media', href: '/updates' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const wireLinks = [
  { label: 'Latest wire', href: '/updates' },
  { label: 'Business', href: '/updates?category=business' },
  { label: 'Technology', href: '/updates?category=technology' },
  { label: 'News', href: '/updates?category=news' },
  { label: 'Finance', href: '/updates?category=finance' },
]

export function NavbarOverride() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[radial-gradient(circle_at_top,_#3b0f59_0%,_#17052a_48%,_#090312_100%)] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="http://192.168.1.26:3000/" className="flex shrink-0 items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-bold text-white">NM</span>
          <span className="text-xl font-semibold tracking-tight">newsmidcentral</span>
        </Link>

        <div className="hidden items-center gap-6 text-[15px] font-medium lg:flex">
          {primaryLinks.map((item) => (
            <Link key={item.label} href={item.href} className="text-white/85 transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/search" className="hidden h-10 w-10 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/10 sm:flex">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Link>
          <Link href="/login" className="hidden px-2 text-sm font-semibold text-white/90 transition-colors hover:text-white sm:inline-flex">
            Sign in
          </Link>
          <Link
            href="/register"
            className="inline-flex h-10 items-center rounded-full border border-[#f258c7] px-4 text-sm font-semibold text-[#ff7fd8] transition-colors hover:bg-[#f258c7]/12"
          >
            Create account
          </Link>
          <Link
            href="http://192.168.1.26:3000/contact"
            className="inline-flex h-10 items-center rounded-full bg-gradient-to-r from-[#ff3ea9] to-[#ff6abf] px-4 text-sm font-semibold text-white shadow-[0_10px_26px_rgba(255,62,169,0.35)] transition-colors hover:from-[#ff52b2] hover:to-[#ff79c7]"
          >
            Submit release
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/25 text-white backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto text-sm font-semibold whitespace-nowrap text-white/85">
            {wireLinks.map((item) => (
              <Link key={item.label} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>

          <Link href="/updates" className="hidden items-center gap-2 text-xs font-semibold tracking-[0.2em] text-white/80 transition-colors hover:text-white md:inline-flex">
            <span>VIEW WIRE</span>
            <span className="h-px w-8 bg-white/45" />
          </Link>
        </div>
      </div>
    </header>
  )
}
