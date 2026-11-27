'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail, Menu, ShoppingBag, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/store', label: 'Products Store' },
    { href: '/services', label: 'Services & Pricing' },
    { href: '/#work', label: 'Proof of Work' },
    { href: '/freebies', label: 'Free Tools ($0)' },
    { href: '/calculator', label: 'AI Cost Calculator' },
    { href: '/guides', label: 'Engineering Guides' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 sm:px-6 lg:px-8 py-3">
        {/* Brand Lockup */}
        <Link href="/" className="flex items-center gap-2 sm:gap-2.5 min-w-0 transition hover:opacity-85">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-950 text-white shadow-xs">
            <span className="font-mono text-xs font-semibold tracking-tight">NM</span>
          </div>
          <div className="min-w-0">
            <span className="block text-xs sm:text-sm font-semibold tracking-tight text-zinc-950 truncate">
              Notion Master Studio
            </span>
            <p className="hidden sm:block text-[11px] text-zinc-500">
              Automation, Notion Systems &amp; Web Engineering
            </p>
            <p className="sm:hidden text-[10px] text-zinc-500 truncate">
              Notion · n8n · Next.js
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-600">
          <Link href="/store" className="text-zinc-950 font-semibold hover:text-zinc-700 transition">
            Products Store
          </Link>
          <Link href="/services" className="hover:text-zinc-950 transition">
            Services
          </Link>
          <Link href="/#work" className="hover:text-zinc-950 transition">
            Proof of Work
          </Link>
          <Link href="/freebies" className="hover:text-zinc-950 transition">
            Free Tools
          </Link>
          <Link href="/guides" className="hover:text-zinc-950 transition">
            Guides
          </Link>
        </nav>

        {/* Right Actions — Clear Store Button Visible on Both Mobile & Desktop */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <Link
            href="/store"
            className="inline-flex shrink-0 whitespace-nowrap items-center gap-1 rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 sm:px-3 sm:py-2 text-[11px] sm:text-xs font-semibold text-zinc-900 transition hover:bg-zinc-100"
          >
            <ShoppingBag className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-zinc-700" />
            <span>Store</span>
          </Link>

          <Link
            href="/#hire"
            className="inline-flex shrink-0 whitespace-nowrap items-center gap-1 rounded-lg bg-zinc-950 px-2.5 py-1.5 sm:px-3.5 sm:py-2 text-[11px] sm:text-xs font-medium text-white shadow-xs transition hover:bg-zinc-800"
          >
            <span className="hidden sm:inline">Book Setup</span>
            <span className="sm:hidden">Hire</span>
            <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-zinc-300" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex md:hidden h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Apple-Style Mobile Navigation Sheet */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white/95 backdrop-blur-md px-4 py-4 shadow-lg">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-800 hover:bg-zinc-100 transition"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
              </Link>
            ))}
          </div>

          <div className="mt-3 border-t border-zinc-100 pt-3 flex items-center justify-between gap-2">
            <a
              href="mailto:notionmaster001@gmail.com?subject=Project%20Inquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-xs font-medium text-zinc-800"
            >
              <Mail className="h-3.5 w-3.5 text-zinc-500" />
              <span>notionmaster001@gmail.com</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
