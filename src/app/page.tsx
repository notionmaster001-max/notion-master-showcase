'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Code2, Mail, Sparkles } from 'lucide-react';
import { Header } from '../components/Header';
import { ServicesSection } from '../components/ServicesSection';
import { VerifiedWorkSection } from '../components/VerifiedWorkSection';
import { InquirySection } from '../components/InquirySection';
import { CategoryFilters } from '../components/CategoryFilters';
import { ProductCard } from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';
import { LivePreviewModal } from '../components/LivePreviewModal';
import { LegalModal } from '../components/LegalModal';
import { EngineeringStandards } from '../components/EngineeringStandards';
import { FAQSection } from '../components/FAQSection';
import { Footer } from '../components/Footer';
import { PRODUCTS } from '../data/products';
import { Product, CategoryFilter, LegalDocType } from '../types';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedLivePreview, setSelectedLivePreview] = useState<Product | null>(null);
  const [legalModalType, setLegalModalType] = useState<LegalDocType | null>(null);
  const [selectedTier, setSelectedTier] = useState<string>('Full Custom System Setup ($175)');

  const counts = useMemo(() => {
    return {
      all: PRODUCTS.length,
      saas: PRODUCTS.filter((p) => p.category === 'saas').length,
      automation: PRODUCTS.filter((p) => p.category === 'automation').length,
      agency: PRODUCTS.filter((p) => p.category === 'agency').length,
      growth: PRODUCTS.filter((p) => p.category === 'growth').length,
      bundle: PRODUCTS.filter((p) => p.category === 'bundle').length,
      gaming: 0,
    };
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      if (activeCategory !== 'all' && product.category !== activeCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inName = product.name.toLowerCase().includes(q);
        const inTagline = product.tagline.toLowerCase().includes(q);
        const inTech = product.techStack.some((t) => t.toLowerCase().includes(q));
        const inDeliverables = product.deliverables.some((d) => d.toLowerCase().includes(q));
        return inName || inTagline || inTech || inDeliverables;
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

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

              {/* Full-width Crisp Mobile CTAs, Inline on Desktop */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3">
                <a
                  href="#hire"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 py-3 text-sm font-medium text-white shadow-xs transition hover:bg-zinc-800"
                >
                  <span>Start with a $65 Starter Fix</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <div className="grid grid-cols-2 sm:flex items-center gap-2.5 sm:gap-3">
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
                  >
                    View Scopes
                  </a>

                  <a
                    href="#catalog"
                    className="inline-flex items-center justify-center rounded-xl border border-zinc-200 sm:border-transparent bg-zinc-50 sm:bg-transparent px-3 py-2.5 sm:py-2 text-xs font-medium text-zinc-600 hover:text-zinc-950 transition"
                  >
                    {PRODUCTS.length} Ready Kits ↓
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
                  Architectures ready to adapt
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
        <section id="catalog" className="bg-white py-12 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[10px] sm:text-[11px] font-medium tracking-wide text-zinc-600">
                  <Code2 className="h-3.5 w-3.5 text-zinc-900" />
                  <span>SELF-SERVE TOOLKITS &amp; BLUEPRINTS</span>
                </div>
                <h2 className="mt-3 sm:mt-4 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
                  Ready-to-Deploy Toolkits &amp; Free Utilities
                </h2>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-zinc-600">
                  Grab any self-serve boilerplate or free blueprint below, or hire us to integrate it directly into your stack.
                </p>
              </div>

              <Link
                href="/freebies"
                className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-medium text-zinc-800 hover:bg-zinc-100 transition"
              >
                <Sparkles className="h-3.5 w-3.5 text-zinc-600" />
                <span>Explore Free Tools ($0) →</span>
              </Link>
            </div>

            <CategoryFilters
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              counts={counts}
            />

            {filteredProducts.length > 0 ? (
              <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onOpenDetails={setSelectedProduct}
                    onOpenLivePreview={setSelectedLivePreview}
                  />
                ))}
              </div>
            ) : (
              <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-10 text-center">
                <p className="text-sm font-medium text-zinc-950">
                  No systems found matching &quot;{searchQuery}&quot;
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  Try &quot;Next.js&quot;, &quot;n8n&quot;, or &quot;Notion&quot;—or request a custom build above.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="mt-4 rounded-lg border border-zinc-300 bg-white px-3.5 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-50"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </section>

        <EngineeringStandards />
        <FAQSection />
      </main>

      <Footer onOpenLegal={setLegalModalType} />

      {/* Mobile Sticky Bottom Quick-Action Bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-30 border-t border-zinc-200 bg-white/95 backdrop-blur-md px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        <div className="flex items-center gap-2">
          <a
            href="mailto:notionmaster001@gmail.com?subject=Quick%20Project%20Inquiry"
            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-xs font-medium text-zinc-800"
          >
            <Mail className="h-3.5 w-3.5 text-zinc-600" />
            <span>Email</span>
          </a>
          <a
            href="#hire"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-zinc-950 px-4 py-2.5 text-xs font-medium text-white shadow-xs"
          >
            <span>Start $65 Starter Fix</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <LivePreviewModal
        product={selectedLivePreview}
        onClose={() => setSelectedLivePreview(null)}
        onOpenSpecs={setSelectedProduct}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
        onSelectType={setLegalModalType}
      />
    </div>
  );
}
