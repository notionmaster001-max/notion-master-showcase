import React from 'react';
import { Metadata } from 'next';
import { Header } from '../../components/Header';
import { StoreCatalog } from '../../components/StoreCatalog';
import { Footer } from '../../components/Footer';
import { PRODUCTS } from '../../data/products';

export const metadata: Metadata = {
  title: 'Products Store — Notion Systems, n8n Blueprints & Toolkits | Notion Master Studio',
  description:
    'Browse and purchase 28 production Notion operating systems, n8n workflow blueprints, AI FinOps kits, Next.js starters, and free developer utilities.',
  alternates: {
    canonical: 'https://notion-master-showcase-two.vercel.app/store',
  },
  openGraph: {
    title: 'Products Store — Notion Master Studio',
    description:
      'Instant-download Notion CRMs, n8n AI workflows, SaaS starter kits, and free automation utilities.',
    url: 'https://notion-master-showcase-two.vercel.app/store',
    siteName: 'Notion Master Studio',
    type: 'website',
  },
};

export default function StorePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <Header />

      <main>
        <StoreCatalog
          id="store-catalog"
          headingAs="h1"
          eyebrow={`PRODUCTS STORE · ${PRODUCTS.length} SYSTEMS & FREE TOOLS`}
          title="Notion Master Products Store"
          subtitle="Click any system to inspect deliverables or purchase instantly via Gumroad checkout with perpetual commercial license."
          showServicesHint
        />
      </main>

      <Footer />
    </div>
  );
}
