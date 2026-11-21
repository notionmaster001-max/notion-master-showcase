import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';

export const metadata: Metadata = {
  title: '10 Production Claude 3.5 Sonnet & Supabase AI Workflows for n8n in 2026 — Notion Master Studio',
  description: 'Complete architecture guide for production n8n AI workflows: RAG vector document pipelines with Supabase pgvector, automated lead scoring, and support triage with Claude 3.5 Sonnet.',
  keywords: [
    'n8n claude 3.5 sonnet workflows',
    'n8n ai agent blueprints',
    'n8n supabase pgvector rag',
    'n8n automation blueprints free',
    'n8n agency lead qualification',
  ],
  alternates: {
    canonical: 'https://notion-master-showcase-two.vercel.app/guides/n8n-claude-ai-agent-automation',
  },
  openGraph: {
    title: '10 Production Claude 3.5 Sonnet & Supabase AI Workflows for n8n in 2026',
    description: 'Import-tested JSON workflows for n8n: Vector RAG pipelines, lead qualification, and automated triage.',
    url: 'https://notion-master-showcase-two.vercel.app/guides/n8n-claude-ai-agent-automation',
    siteName: 'Notion Master Studio',
    type: 'article',
  },
};

export default function N8nClaudeAiWorkflowsGuide() {
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: '10 Production Claude 3.5 Sonnet & Supabase AI Workflows for n8n in 2026',
    url: 'https://notion-master-showcase-two.vercel.app/guides/n8n-claude-ai-agent-automation',
    description: 'Production-ready AI agent automation graphs with Claude 3.5 Sonnet and Supabase pgvector.',
    author: {
      '@type': 'Organization',
      name: 'Notion Master Studio',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Notion Master Studio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://notion-master-showcase-two.vercel.app/apple-touch-icon.png',
      },
    },
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />

      <Header />

      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <nav className="mb-6 flex items-center gap-2 font-mono text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition">
            Home
          </Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-slate-900 transition">
            Guides
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold truncate">n8n AI Workflows</span>
        </nav>

        <header className="mb-10">
          <div className="inline-flex items-center gap-2 rounded bg-emerald-50 border border-emerald-200 px-2.5 py-1 font-mono text-xs text-emerald-800 font-semibold mb-3">
            <span>n8n v1.0+ · Claude 3.5 Sonnet · Supabase pgvector</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            10 Production Claude 3.5 Sonnet &amp; Supabase AI Workflows for n8n in 2026
          </h1>
          <p className="mt-4 font-mono text-sm sm:text-base text-slate-600 leading-relaxed">
            How modern agencies and technical founders automate high-ticket operational workflows using self-hosted n8n, Claude 3.5 reasoning, and vector embeddings.
          </p>
        </header>

        <div className="prose prose-slate max-w-none font-sans text-slate-800 leading-relaxed space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              1. Why Self-Hosted n8n Outclasses Proprietary Automation Platforms
            </h2>
            <p>
              Traditional SaaS automation tools (such as Zapier or Make) impose strict row and task execution quotas that make high-volume AI data processing financially unfeasible. With self-hosted n8n:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-mono text-xs sm:text-sm text-slate-700">
              <li><strong>Zero Execution Fees:</strong> Run millions of node graph executions on a \$10/mo VPS without per-task surcharges.</li>
              <li><strong>Direct Database Access:</strong> Native SQL nodes connect straight to PostgreSQL without intermediary webhooks.</li>
              <li><strong>Data Sovereignty:</strong> Customer documents and vectors stay within your private cloud perimeter.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              2. Core Workflow Blueprint: RAG Document Pipeline with Supabase pgvector
            </h2>
            <p>
              Retrieval-Augmented Generation (RAG) empowers Claude 3.5 Sonnet to answer questions from proprietary documentation with zero hallucination:
            </p>
            <div className="rounded-xl bg-slate-900 p-5 font-mono text-xs text-slate-200 overflow-x-auto">
              <pre>{`[Trigger: PDF Upload Webhook]
       │
       ▼
[Node 1: Text Extractor & Semantic Chunker (500 tokens, 10% overlap)]
       │
       ▼
[Node 2: OpenAI text-embedding-3-small (1536 dims)]
       │
       ▼
[Node 3: Supabase pgvector Upsert (HNSW Cosine Index)]
       │
       ▼
[Node 4: Claude 3.5 Sonnet Synthesis & Citation Formatter]`}</pre>
            </div>
            <p>
              This pipeline guarantees low latency cosine similarity queries and precise document citations for agency client portals.
            </p>
          </section>

          {/* Download Pack CTA */}
          <section className="mt-12 rounded-2xl border-2 border-emerald-500 bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <span className="rounded bg-emerald-500/20 border border-emerald-500/40 px-2 py-0.5 font-mono text-[11px] font-bold text-emerald-300">
                  100% Free Production Pack
                </span>
                <h3 className="mt-2 text-2xl font-black text-white">
                  Download AgentForge n8n v2™
                </h3>
                <p className="mt-1 font-mono text-xs text-slate-300 max-w-xl">
                  Get 10 pre-connected, import-tested JSON workflows for n8n: RAG vector pipelines, lead scoring, executive summarization, and PR triage with step-by-step setup guide.
                </p>
                <div className="mt-3 flex items-baseline gap-2 font-mono">
                  <span className="text-2xl font-black text-emerald-400">$0 FREE</span>
                  <span className="text-xs text-slate-400 line-through">$89.00</span>
                  <span className="text-xs text-emerald-300 font-semibold">Perpetual Commercial License</span>
                </div>
              </div>
              <a
                href="https://notionmaster001.gumroad.com/l/agentforge-n8n-v2-pack"
                target="_blank"
                rel="noopener noreferrer"
                data-gumroad-single-product="true"
                className="gumroad-button inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3.5 font-mono text-xs font-bold text-white shadow-lg hover:bg-emerald-500 transition whitespace-nowrap"
              >
                <span>Claim Free Download ($0)</span>
                <span>→</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
