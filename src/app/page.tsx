'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, ShoppingBag } from 'lucide-react';
import { Header } from '../components/Header';
import { ServicesSection } from '../components/ServicesSection';
import { VerifiedWorkSection } from '../components/VerifiedWorkSection';
import { InquirySection } from '../components/InquirySection';
import { StoreCatalog } from '../components/StoreCatalog';
import { LegalModal } from '../components/LegalModal';
import { EngineeringStandards } from '../components/EngineeringStandards';
import { FAQSection } from '../components/FAQSection';
import { Footer } from '../components/Footer';
import { PRODUCTS } from '../data/products';
import { LegalDocType } from '../types';

export default function Home() {
  const [legalModalType, setLegalModalType] = useState<LegalDocType | null>(null);
  const [selectedTier, setSelectedTier] = useState<string>('Full Custom System Setup ($175)');

  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Notion Master Studio',
    url: 'https://notion-master-showcase-two.vercel.app',
    email: 'notionmaster001@gmail.com',
    sameAs: [
      'https://github.com/notionmaster001-max',
      'https://notionmaster001.gumroad.com',
    ],
    description:
      'Custom Notion operating systems, n8n workflow automation, API integrations, and production Next.js web builds.',
  };

  const jsonLdWebSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Notion Master Studio',
    url: 'https://notion-master-showcase-two.vercel.app',
  };

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
      />

      <Header />

      <main>
        {/* Client-First Apple/Linear Hero (Crisp First-Screen Fit on Mobile) */}
        <section className="border-b border-zinc-200 bg-white py-10 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[10px] sm:text-[11px] font-medium tracking-wide text-zinc-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>NOTION SYSTEMS · N8N AUTOMATION · NEXT.JS</span>
              </div>

              <h1 className="mt-4 sm:mt-5 text-[28px] leading-[1.14] font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                Custom Notion systems, n8n automations &amp; Next.js builds.
              </h1>

              <p className="mt-3.5 sm:mt-5 text-sm sm:text-lg leading-relaxed text-zinc-600 max-w-2xl">
                We help agencies, clinics, founders, and solo operators replace repetitive manual work with reliable Notion workspaces, API-to-Airtable pipelines, and fast web tools—delivered with full source ownership.
              </p>

              {/* Full-width Crisp Mobile CTAs + Direct Products Store Button */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3">
                <a
                  href="#hire"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 py-3 text-sm font-medium text-white shadow-xs transition hover:bg-zinc-800"
                >
                  <span>Start with a $65 Starter Fix</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <div className="grid grid-cols-2 sm:flex items-center gap-2.5 sm:gap-3">
                  <Link
                    href="/store"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-zinc-900/15 bg-zinc-100 px-3.5 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200/80 whitespace-nowrap"
                  >
                    <ShoppingBag className="h-3.5 w-3.5 text-zinc-800" />
                    <span>Products Store ({PRODUCTS.length})</span>
                  </Link>

                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-medium text-zinc-800 transition hover:bg-zinc-50 whitespace-nowrap"
                  >
                    View Scopes
                  </a>
                </div>
              </div>
            </div>

            {/* 100% Verifiable Studio Proof Metrics */}
            <div className="mt-8 sm:mt-14 grid grid-cols-2 gap-4 border-t border-zinc-200 pt-6 sm:pt-8 sm:grid-cols-4">
              <div>
                <div className="text-lg sm:text-2xl font-semibold tracking-tight text-zinc-950">
                  48 Hours
                </div>
                <div className="mt-0.5 text-[11px] sm:text-xs text-zinc-500">
                  Turnaround for starter fixes
                </div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-semibold tracking-tight text-zinc-950">
                  {PRODUCTS.length} Systems
                </div>
                <div className="mt-0.5 text-[11px] sm:text-xs text-zinc-500">
                  Available in Products Store
                </div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-semibold tracking-tight text-zinc-950">
                  VS Code + Notion
                </div>
                <div className="mt-0.5 text-[11px] sm:text-xs text-zinc-500">
                  Published extensions &amp; OS
                </div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-semibold tracking-tight text-zinc-950">
                  100% Yours
                </div>
                <div className="mt-0.5 text-[11px] sm:text-xs text-zinc-500">
                  Zero vendor lock-in
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection onSelectTier={setSelectedTier} />
        <VerifiedWorkSection />
        <InquirySection preselectedTier={selectedTier} />

        {/* Pre-Built Toolkits Store: 2 Cards Per Row on Mobile, 3 on Tablet, 4 Compact on Desktop */}
        <StoreCatalog
          id="catalog"
          headingAs="h2"
          eyebrow="PRODUCTS STORE & SELF-SERVE TOOLKITS"
          title="Ready-to-Deploy Toolkits & Free Utilities"
          subtitle="Grab any self-serve boilerplate or free blueprint below, or hire us to integrate it directly into your stack."
        />

        <EngineeringStandards />
        <FAQSection />
      </main>

      <Footer onOpenLegal={setLegalModalType} />

      {/* Mobile Sticky Bottom Quick-Action Bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-30 border-t border-zinc-200 bg-white/95 backdrop-blur-md px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        <div className="flex items-center gap-2">
          <a
            href="mailto:notionmaster001@gmail.com?subject=Quick%20Project%20Inquiry"
            className="inline-flex items-center justify-center gap-1 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-xs font-medium text-zinc-800"
          >
            <Mail className="h-3.5 w-3.5 text-zinc-600" />
            <span>Email</span>
          </a>
          <Link
            href="/store"
            className="inline-flex items-center justify-center gap-1 rounded-xl border border-zinc-200 bg-zinc-100 px-3 py-2.5 text-xs font-semibold text-zinc-900"
          >
            <ShoppingBag className="h-3.5 w-3.5 text-zinc-700" />
            <span>Store</span>
          </Link>
          <a
            href="#hire"
            className="inline-flex flex-1 items-center justify-center gap-1 rounded-xl bg-zinc-950 px-3 py-2.5 text-xs font-medium text-white shadow-xs whitespace-nowrap"
          >
            <span>$65 Fix</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
        onSelectType={setLegalModalType}
      />
    </div>
  );
}
