import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <>
      {/* Top Launch Promo Strip */}
      <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 px-4 py-1.5 text-center text-[11px] font-mono font-bold text-white tracking-wide shadow-sm flex items-center justify-center gap-2">
        <span className="rounded bg-black/30 px-1.5 py-0.2 text-[9px] uppercase tracking-wider">Launch Offer</span>
        <span>🎉 Get an extra 20% OFF with code <strong className="underline underline-offset-2">LAUNCH20</strong> at Gumroad checkout (Auto-applied!)</span>
      </div>

      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Lockup */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
          <div className="flex h-9 w-9 items-center justify-center rounded border border-slate-900 bg-slate-900 text-white shadow-sm">
            <span className="font-mono text-xs font-bold tracking-tight">NM</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-sans text-sm font-bold tracking-tight text-slate-900">NOTION MASTER</span>
              <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-slate-600 border border-slate-200">
                STUDIO
              </span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
              Institutional Digital Assets &amp; Software
            </p>
          </div>
        </Link>

        {/* Center Nav: Catalog, Free Tools, Guides */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs font-medium text-slate-600">
          <Link href="/" className="hover:text-slate-900 transition">
            Catalog
          </Link>
          <Link href="/freebies" className="flex items-center gap-1.5 text-emerald-700 font-semibold hover:text-emerald-800 transition">
            <span>🎁</span>
            <span>Free Tools</span>
            <span className="rounded-full bg-emerald-100 px-1.5 py-0.2 text-[9px] font-bold text-emerald-800">4 FREE</span>
          </Link>
          <Link href="/guides" className="flex items-center gap-1.5 hover:text-slate-900 transition">
            <span>📚</span>
            <span>Guides</span>
          </Link>
        </nav>

        {/* Status & Storefront Action */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/freebies"
            className="md:hidden inline-flex items-center gap-1 rounded bg-emerald-50 border border-emerald-200 px-2 py-1 font-mono text-[11px] font-bold text-emerald-700"
          >
            <span>🎁 Free</span>
          </Link>

          <div className="hidden lg:flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-mono text-xs font-medium text-slate-600">
              26 Verified Systems Live
            </span>
          </div>

          <a
            href="https://notionmaster001.gumroad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-slate-900 bg-slate-900 px-3.5 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
          >
            <span>Gumroad Store</span>
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </header>
    </>
  );
};
