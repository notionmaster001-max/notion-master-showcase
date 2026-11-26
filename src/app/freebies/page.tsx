import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS } from '../../data/products';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Free Developer Tools, System Prompts & AI Blueprints — Notion Master Studio',
  description: 'Download 100% free production n8n AI agent workflows, Cursor rules, Claude.md system prompts, and OpenAPI to MCP converters. Commercial license included.',
  keywords: [
    'free n8n workflows',
    'free cursor rules',
    'claude.md system prompts',
    'free ai boilerplates',
    'free next.js starter',
    'mcp tools free',
  ],
  alternates: {
    canonical: 'https://notion-master-showcase-two.vercel.app/freebies',
  },
  openGraph: {
    title: 'Free Developer Tools & AI Automation Blueprints — Notion Master Studio',
    description: 'Claim production-grade $0 tools: n8n AI workflows, Cursor rules, and Claude system prompt kits.',
    url: 'https://notion-master-showcase-two.vercel.app/freebies',
    siteName: 'Notion Master Studio',
    type: 'website',
    images: [
      {
        url: 'https://notion-master-showcase-two.vercel.app/products/23-agentforge-n8n.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Developer Tools by Notion Master Studio',
      },
    ],
  },
};

export default function FreebiesPage() {
  const freeProducts = PRODUCTS.filter((p) => p.price === 0);
  const featuredFlagship = PRODUCTS.find((p) => p.id === 'ai-saas-pro');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Free Developer Tools & AI Blueprints',
    url: 'https://notion-master-showcase-two.vercel.app/freebies',
    description: '100% free production digital assets, system prompts, and workflows.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: freeProducts.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
        url: `https://notion-master-showcase-two.vercel.app/product/${p.id}`,
      })),
    },
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 rounded border border-emerald-200 bg-emerald-50 px-2.5 py-1 font-mono text-[11px] text-emerald-800 mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>100% Free · Perpetual Commercial License Included</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Free Developer Toolkits &amp; AI Blueprints
          </h1>
          <p className="mt-4 font-mono text-sm sm:text-base text-slate-600 leading-relaxed">
            Battle-tested n8n automation blueprints, Cursor IDE rules, and institutional Claude system prompts engineered to accelerate your production velocity. Zero paywalls.
          </p>
        </div>

        {/* Freebies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {freeProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-slate-300 hover:shadow-md transition"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-50 border border-slate-100 mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className="absolute top-3 left-3 rounded-full bg-emerald-600 px-3 py-1 font-mono text-[10px] font-bold text-white shadow-sm">
                  100% FREE
                </span>
                <span className="absolute top-3 right-3 rounded-full bg-slate-900/80 backdrop-blur px-2.5 py-1 font-mono text-[10px] text-white">
                  Valued at {product.originalValue}
                </span>
              </div>

              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs uppercase font-medium text-zinc-500">
                  {product.categoryLabel}
                </span>
                <span className="rounded-md bg-zinc-100 px-2 py-0.5 font-mono text-[10px] text-zinc-600 border border-zinc-200">
                  {product.version.split('(')[0].trim()}
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 mb-2">
                {product.name}
              </h2>
              <p className="font-mono text-xs text-slate-600 mb-4 line-clamp-2">
                {product.tagline}
              </p>

              {/* Deliverables snippet */}
              <div className="space-y-1.5 mb-6 bg-slate-50 rounded-lg p-3 border border-slate-100 font-mono text-xs text-slate-700 flex-1">
                <div className="font-bold text-slate-800 text-[11px] mb-1">Included in Free Download:</div>
                {product.deliverables.slice(0, 3).map((del, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-[11px]">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{del}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 mt-auto">
                <a
                  href={product.gumroadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-gumroad-single-product="true"
                  className="gumroad-button flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 py-3 px-4 font-mono text-xs font-bold text-white hover:bg-emerald-700 transition shadow-sm"
                >
                  <span>Claim for $0 (Instant Download)</span>
                  <span>→</span>
                </a>
                <Link
                  href={`/product/${product.id}`}
                  className="rounded-lg border border-slate-200 bg-white py-3 px-4 font-mono text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Integration Upgrade Banner */}
        <div className="rounded-2xl border border-zinc-900 bg-zinc-950 text-white p-8 sm:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-800 border border-zinc-700 px-3 py-1 font-mono text-[11px] font-medium text-zinc-200 mb-4">
                <span>CUSTOM ENGINEERING</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3">
                Want any of these workflows wired into your stack?
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl">
                Skip manual configuration. We connect n8n automations, Gumroad/Stripe webhooks, Notion databases, and custom APIs directly into your live business tools within 48 hours to 5 days.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/#hire"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 px-6 text-xs font-semibold text-zinc-950 shadow-sm hover:bg-zinc-100 transition"
              >
                <span>Start a $65 Starter Fix →</span>
              </Link>
              <Link
                href="/services"
                className="text-center font-mono text-xs text-zinc-400 hover:text-white transition py-2"
              >
                View All Service Scopes &amp; Pricing ›
              </Link>
            </div>
          </div>
        </div>
        {false && featuredFlagship && (
          <div className="hidden" />
        )}
      </main>

      <Footer />
    </div>
  );
}
