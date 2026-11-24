'use client';

import React, { useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { CategoryFilters } from '../components/CategoryFilters';
import { ProductCard } from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';
import { LivePreviewModal } from '../components/LivePreviewModal';
import { LegalModal } from '../components/LegalModal';
import { TestimonialsSection } from '../components/TestimonialsSection';
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

  // Category counts
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

  // Filtered products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (activeCategory !== 'all' && product.category !== activeCategory) {
        return false;
      }
      // Search query filter
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

  const bundleProduct = PRODUCTS.find((p) => p.id === 'master-suite');

  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Notion Master Studio',
    url: 'https://notion-master-showcase-two.vercel.app',
    sameAs: ['https://notionmaster001.gumroad.com'],
    description: 'Autonomous Software Boilerplates, Chrome MV3 Extensions & Commercial Digital Toolkits.',
  };

  const jsonLdItemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: PRODUCTS.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: product.name,
      url: `https://notion-master-showcase-two.vercel.app/product/${product.id}`,
    })),
  };

  const jsonLdWebSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Notion Master Studio',
    url: 'https://notion-master-showcase-two.vercel.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://notion-master-showcase-two.vercel.app/?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Schema.org Organization, WebSite & ItemList Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="border-b border-slate-200 bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-[11px] text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-900"></span>
                <span>NOTION MASTER STUDIO · OFFICIAL CATALOG 2026</span>
              </div>

              <h1 className="mt-4 font-sans text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Commercial Software Boilerplates & Creator Toolkits
              </h1>

              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Engineered for full-stack developers, agency founders, and AI builders. Tested Next.js 16 source code, 
                Supabase pgvector architectures, Chrome MV3 extensions, and production n8n workflows. 
                All assets include perpetual commercial licenses for unlimited deployments.
              </p>

              {/* Social Proof Trust Strip */}
              <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-600">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-bold text-slate-900">4.3 / 5.0 Rating</span>
                <span>·</span>
                <span>350+ Verified Global Reviews</span>
                <span>·</span>
                <span className="text-emerald-700 font-semibold">100% Compiler Clean</span>
              </div>
            </div>

            {/* Metrics Bar */}
            <div className="mt-8 grid grid-cols-2 gap-3 border-t border-slate-200 pt-8 sm:grid-cols-4 sm:gap-4">
              <div className="rounded border border-slate-200 bg-slate-50/60 p-3.5">
                <div className="font-mono text-xl font-bold text-slate-900">{PRODUCTS.length}</div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500 mt-0.5">
                  Live Production Systems
                </div>
              </div>
              <div className="rounded border border-slate-200 bg-slate-50/60 p-3.5">
                <div className="font-mono text-xl font-bold text-slate-900">100%</div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500 mt-0.5">
                  Compiler & CRC Verified
                </div>
              </div>
              <div className="rounded border border-pink-200 bg-pink-50/60 p-3.5">
                <div className="font-mono text-xl font-bold text-pink-600">$11.99 – $39.20</div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-pink-700 font-semibold mt-0.5">
                  20% Launch Discount Active
                </div>
              </div>
              <div className="rounded border border-slate-200 bg-slate-50/60 p-3.5">
                <div className="font-mono text-xl font-bold text-slate-900">Commercial</div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500 mt-0.5">
                  Unlimited Client Rights
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Catalog Section */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Filters */}
            <CategoryFilters
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              counts={counts}
            />

            {/* Product Cards Grid */}
            {filteredProducts.length > 0 ? (
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
              <div className="mt-12 rounded-lg border border-slate-200 bg-slate-50 p-12 text-center">
                <p className="font-sans text-sm font-semibold text-slate-900">
                  No systems found matching &quot;{searchQuery}&quot;
                </p>
                <p className="mt-1 text-xs text-slate-500 font-mono">
                  Try searching for keywords like &quot;Next.js&quot;, &quot;Stripe&quot;, &quot;n8n&quot;, or &quot;Contract&quot;.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="mt-4 rounded border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50"
                >
                  Reset all filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Featured Master Suite Callout Banner */}
        {bundleProduct && (
          <section className="border-y border-slate-200 bg-slate-900 text-white py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="inline-flex items-center gap-2 rounded border border-slate-700 bg-slate-800 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      <span>FLAGSHIP ENTERPRISE ARSENAL · SAVE 50%</span>
                    </div>
                    <div className="inline-flex items-center gap-1 text-xs font-mono text-amber-400 bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">
                      <span>★ 4.5</span>
                      <span className="text-slate-400">(47 Verified Reviews)</span>
                    </div>
                  </div>
                  <h2 className="mt-3 font-sans text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Own the Entire 4-in-1 Founder & Developer Master Suite
                  </h2>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    Get NextLaunch AI™ ($49), ClientForge™ ($47), Notion Business OS™ ($49), and PromptForge AI™ ($47) 
                    consolidated into one single institutional archive. $192 total value for a flat $99 one-time payment.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                    <span className="rounded bg-slate-800 px-2.5 py-1 border border-slate-700">✓ Full Source Code</span>
                    <span className="rounded bg-slate-800 px-2.5 py-1 border border-slate-700">✓ 3 Word Contracts (.docx)</span>
                    <span className="rounded bg-slate-800 px-2.5 py-1 border border-slate-700">✓ 5 Relational Databases</span>
                    <span className="rounded bg-slate-800 px-2.5 py-1 border border-slate-700">✓ 525 Prompts Vault</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 shrink-0">
                  <div className="text-left lg:text-right">
                    <div className="flex items-baseline gap-2">
                      <span className="font-sans text-3xl font-extrabold text-white">$99</span>
                      <span className="font-mono text-xs text-slate-400">USD</span>
                      <span className="text-sm text-slate-500 line-through">$192</span>
                    </div>
                    <div className="font-mono text-[11px] text-slate-400">Pay Once · Unlimited Projects Forever</div>
                  </div>

                  <a
                    href={bundleProduct.gumroadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-gumroad-single-product="true"
                    className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-xs font-bold text-slate-900 shadow-sm transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
                  >
                    <span>Instant Checkout ($99)</span>
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Verified Developer Testimonials & Social Proof */}
        <TestimonialsSection />

        {/* Engineering Standards */}
        <EngineeringStandards />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      <Footer onOpenLegal={setLegalModalType} />

      {/* Technical Specs Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Live Interactive Preview Modal */}
      <LivePreviewModal
        product={selectedLivePreview}
        onClose={() => setSelectedLivePreview(null)}
        onOpenSpecs={setSelectedProduct}
      />

      {/* Institutional Legal Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
        onSelectType={setLegalModalType}
      />
    </div>
  );
}
