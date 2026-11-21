import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Engineering Guides & Production Blueprints — Notion Master Studio',
  description: 'Step-by-step architectural guides on Next.js 16 AI SaaS starters, Claude 3.5 n8n agent workflows, Chrome MV3 extensions, and Supabase Edge functions.',
  keywords: [
    'next.js 16 ai saas guide',
    'n8n claude workflows tutorial',
    'chrome extension manifest v3 guide',
    'supabase edge functions tutorial',
    'ai boilerplate blueprints',
  ],
  alternates: {
    canonical: 'https://notion-master-showcase-two.vercel.app/guides',
  },
  openGraph: {
    title: 'Engineering Guides & Production Blueprints — Notion Master Studio',
    description: 'In-depth architecture tutorials for modern full-stack developers and agency founders.',
    url: 'https://notion-master-showcase-two.vercel.app/guides',
    siteName: 'Notion Master Studio',
    type: 'website',
  },
};

const GUIDES = [
  {
    slug: 'nextjs-16-multi-provider-ai-saas',
    title: 'How to Architect a Multi-Provider Failover AI SaaS in Next.js 16 & React 19',
    tagline: 'Eliminate single-provider rate limits and API outages with zero-deduction PostgreSQL credit accounting and turnkey Stripe subscriptions.',
    readTime: '8 min read',
    category: 'Architecture',
    date: 'Updated for Next.js 16.4 & React 19',
    productLink: '/product/ai-saas-pro',
    productName: 'AI SaaS Pro™',
  },
  {
    slug: 'n8n-claude-ai-agent-automation',
    title: '10 Production Claude 3.5 Sonnet & Supabase AI Workflows for n8n in 2026',
    tagline: 'Deploy autonomous RAG document vector pipelines, automated lead scoring, and support triage graphs directly into your n8n instance.',
    readTime: '10 min read',
    category: 'Automation',
    date: 'Verified for n8n v1.0+',
    productLink: '/product/agentforge-n8n-v2',
    productName: 'AgentForge n8n v2™',
  },
  {
    slug: 'chrome-extension-manifest-v3-react-tailwind',
    title: 'How to Build and Monetize a Chrome Extension with Manifest V3, React 19 & Tailwind',
    tagline: 'Modern service worker message routing, secure external API communication, and turnkey monetization with Gumroad license keys.',
    readTime: '7 min read',
    category: 'Browser Tech',
    date: 'Chrome Web Store 2026 Compliant',
    productLink: '/product/extensionforge-mv3',
    productName: 'ExtensionForge MV3™',
  },
];

export default function GuidesHubPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Engineering Guides & Production Blueprints',
    url: 'https://notion-master-showcase-two.vercel.app/guides',
    description: 'In-depth architecture guides for modern AI developers.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: GUIDES.map((g, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: g.title,
        url: `https://notion-master-showcase-two.vercel.app/guides/${g.slug}`,
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
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 rounded border border-indigo-200 bg-indigo-50 px-2.5 py-1 font-mono text-[11px] text-indigo-800 mb-4">
            <span>📚 Engineering Library</span>
            <span>·</span>
            <span>Production Architecture Guides</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Engineering Guides &amp; Blueprints
          </h1>
          <p className="mt-4 font-mono text-sm sm:text-base text-slate-600 leading-relaxed">
            Practical, zero-fluff code architecture guides for developers building institutional AI applications, autonomous agents, and revenue-generating software systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GUIDES.map((guide) => (
            <article
              key={guide.slug}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-slate-400 hover:shadow-md transition"
            >
              <div className="flex items-center justify-between gap-2 mb-4 font-mono text-xs">
                <span className="rounded bg-slate-100 px-2.5 py-0.5 font-semibold text-slate-700 border border-slate-200">
                  {guide.category}
                </span>
                <span className="text-slate-400">{guide.readTime}</span>
              </div>

              <h2 className="text-lg font-bold text-slate-900 mb-3 hover:text-indigo-600 transition">
                <Link href={`/guides/${guide.slug}`}>
                  {guide.title}
                </Link>
              </h2>

              <p className="font-mono text-xs text-slate-600 leading-relaxed mb-6 flex-1">
                {guide.tagline}
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between font-mono text-xs">
                <Link
                  href={`/guides/${guide.slug}`}
                  className="font-bold text-indigo-600 hover:text-indigo-700 transition flex items-center gap-1"
                >
                  <span>Read Guide</span>
                  <span>→</span>
                </Link>
                <Link
                  href={guide.productLink}
                  className="text-slate-500 hover:text-slate-900 transition text-[11px]"
                >
                  {guide.productName}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
