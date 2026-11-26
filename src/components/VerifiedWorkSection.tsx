import React from 'react';
import { Code2, Database, ExternalLink, FileCode2, ShieldCheck, Workflow } from 'lucide-react';

interface VerifiedItem {
  category: string;
  title: string;
  proofBadge: string;
  description: string;
  highlights: string[];
  linkLabel?: string;
  linkUrl?: string;
}

const VERIFIED_WORK: VerifiedItem[] = [
  {
    category: 'Marketplace Software',
    title: 'TokenAudit Live — VS Code Extension',
    proofBadge: 'Published on VS Code Marketplace',
    description:
      'Zero-dependency developer extension parsing local Claude Code JSONL and Cursor usage telemetry directly inside the IDE status bar to catch uncached context loops.',
    highlights: ['TypeScript & Node.js Extension Host', 'Live JSONL / CSV Telemetry Parsing', 'Zero external telemetry'],
    linkLabel: 'Inspect Architecture',
    linkUrl: '/product/tokenaudit-kit',
  },
  {
    category: 'Automation & APIs',
    title: 'API-to-CRM & n8n Agent Workflows',
    proofBadge: '20+ Verified JSON Blueprints',
    description:
      'Production n8n workflows bridging Gumroad/Stripe webhooks, REST APIs, Airtable, Supabase pgvector, and Claude/OpenAI routers with structured error retries.',
    highlights: ['Webhook & REST Pagination', 'Airtable / Notion / Postgres Sync', 'Idempotent Error Triggers'],
    linkLabel: 'View Free Blueprints',
    linkUrl: '/product/agentforge-n8n-v2',
  },
  {
    category: 'Vertical Operating Systems',
    title: 'Medical & Business Notion Workspaces',
    proofBadge: '5 Live Notion Marketplace Templates',
    description:
      'High-density Notion databases built for medical students, clinical rotations, and agency CRM pipelines—validated by 22+ paid customer orders on Gumroad.',
    highlights: ['Formulas 2.0 & Relational Rollups', 'Client Portals & Invoice Trackers', 'Turnkey Onboarding Guides'],
    linkLabel: 'View Notion Systems',
    linkUrl: '/product/notion-business-os',
  },
  {
    category: 'Full-Stack Web Apps',
    title: 'Next.js 16 + Supabase + Stripe SaaS',
    proofBadge: 'Compiled Production Codebases',
    description:
      'Modern App Router architectures engineered with PostgreSQL Row-Level Security, atomic credit ledgers, and clean Vercel deployments.',
    highlights: ['Next.js 16 & React 19 Strict TS', 'Supabase Auth & RLS Policies', 'Clean Lighthouse Performance'],
    linkLabel: 'Inspect SaaS Stack',
    linkUrl: '/product/ai-saas-pro',
  },
];

export const VerifiedWorkSection: React.FC = () => {
  return (
    <section id="work" className="border-b border-zinc-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[11px] font-medium tracking-wide text-zinc-600">
              <ShieldCheck className="h-3.5 w-3.5 text-zinc-900" />
              <span>VERIFIED SHIPPED WORK</span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Inspectable builds, zero inflated claims.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-600">
              Every system below is compiled, publicly inspectable, or actively deployed across VS Code Marketplace, Notion Marketplace, GitHub, and Vercel.
            </p>
          </div>

          <a
            href="https://github.com/notionmaster001-max"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-xs font-medium text-zinc-900 shadow-xs transition hover:bg-zinc-50"
          >
            <Code2 className="h-4 w-4 text-zinc-600" />
            <span>GitHub: notionmaster001-max</span>
            <ExternalLink className="h-3.5 w-3.5 text-zinc-400" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {VERIFIED_WORK.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-zinc-300 hover:shadow-md"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    {item.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 font-mono text-[11px] text-zinc-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {item.proofBadge}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-semibold tracking-tight text-zinc-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {item.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 font-mono text-[11px] text-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {item.linkUrl && (
                <div className="mt-6 border-t border-zinc-100 pt-4">
                  <a
                    href={item.linkUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-900 hover:underline"
                  >
                    {idx === 0 && <FileCode2 className="h-3.5 w-3.5 text-zinc-500" />}
                    {idx === 1 && <Workflow className="h-3.5 w-3.5 text-zinc-500" />}
                    {idx === 2 && <Database className="h-3.5 w-3.5 text-zinc-500" />}
                    {idx === 3 && <Code2 className="h-3.5 w-3.5 text-zinc-500" />}
                    <span>{item.linkLabel} →</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
