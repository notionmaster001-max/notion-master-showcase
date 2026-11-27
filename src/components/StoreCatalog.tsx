'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Code2, Sparkles } from 'lucide-react';
import { CategoryFilters } from './CategoryFilters';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { LivePreviewModal } from './LivePreviewModal';
import { PRODUCTS } from '../data/products';
import { Product, CategoryFilter } from '../types';

interface StoreCatalogProps {
  id?: string;
  headingAs?: 'h1' | 'h2';
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  showServicesHint?: boolean;
}

export const StoreCatalog: React.FC<StoreCatalogProps> = ({
  id = 'catalog',
  headingAs = 'h2',
  eyebrow = 'DIGITAL PRODUCTS STORE · INSTANT DOWNLOAD',
  title = 'Ready-to-Deploy Toolkits & Blueprints',
  subtitle = 'Grab any self-serve boilerplate, Notion system, or free blueprint below and download immediately—or book us to wire it into your stack.',
  showServicesHint = false,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedLivePreview, setSelectedLivePreview] = useState<Product | null>(null);

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

  const HeadingTag = headingAs;

  return (
    <>
      <section id={id} className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[10px] sm:text-[11px] font-medium tracking-wide text-zinc-600">
                <Code2 className="h-3.5 w-3.5 text-zinc-900" />
                <span>{eyebrow}</span>
              </div>
              <HeadingTag className="mt-3 sm:mt-4 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
                {title}
              </HeadingTag>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-zinc-600">
                {subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              {showServicesHint && (
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-900 bg-zinc-950 px-4 py-2 text-xs font-medium text-white hover:bg-zinc-800 transition"
                >
                  Need Custom Setup? →
                </Link>
              )}
              <Link
                href="/freebies"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-medium text-zinc-800 hover:bg-zinc-100 transition"
              >
                <Sparkles className="h-3.5 w-3.5 text-zinc-600" />
                <span>Explore Free Tools ($0) →</span>
              </Link>
            </div>
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
                Try &quot;Next.js&quot;, &quot;n8n&quot;, or &quot;Notion&quot;—or browse all categories.
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

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <LivePreviewModal
        product={selectedLivePreview}
        onClose={() => setSelectedLivePreview(null)}
        onOpenSpecs={setSelectedProduct}
      />
    </>
  );
};
