'use client';

import React, { useState } from 'react';
import { ArrowRight, Check, Clock, Cpu, Layers } from 'lucide-react';

export interface ServiceTier {
  id: string;
  shortTab: string;
  name: string;
  price: string;
  cadence: string;
  turnaround: string;
  summary: string;
  featured?: boolean;
  deliverables: string[];
  ctaLabel: string;
}

export const SERVICE_TIERS: ServiceTier[] = [
  {
    id: 'starter-fix',
    shortTab: '$65 Fix',
    name: 'Starter Audit & Workflow Fix',
    price: '$65',
    cadence: 'Fixed price · Low-risk trial',
    turnaround: '48-Hour Delivery',
    summary:
      'Ideal when you want to verify our speed and code quality on one focused bottleneck before committing to a larger build.',
    deliverables: [
      'Debug 1 broken n8n, Zapier, or webhook integration',
      'Single API sync (e.g. Gumroad / Stripe to Airtable or Notion)',
      'Fix Notion database relations, rollups, or Formulas 2.0',
      'Recorded walkthrough video + clean handoff notes',
    ],
    ctaLabel: 'Start with $65 Fix',
  },
  {
    id: 'custom-system',
    shortTab: '$175 Build ★',
    name: 'Full Custom System Setup',
    price: '$175',
    cadence: 'Fixed scope · Most requested',
    turnaround: '3–5 Days Delivery',
    featured: true,
    summary:
      'End-to-end engineering of a custom Notion Operating System, Zapier-to-n8n cost-cutting migration, or production Next.js landing page.',
    deliverables: [
      'Custom Notion CRM, Clinic / Agency OS, or Operations Hub',
      'Multi-step n8n + AI workflow with retry & error triggers',
      'Or responsive Next.js landing site deployed to Vercel',
      'Full documentation + 7 days of post-launch adjustments',
    ],
    ctaLabel: 'Scope $175 Custom Build',
  },
  {
    id: 'monthly-partner',
    shortTab: '$350/mo',
    name: 'Ongoing Automation Partner',
    price: '$350',
    cadence: 'Per month · Cancel anytime',
    turnaround: 'Async Weekly Sprints',
    summary:
      'For agencies, clinics, and operators who need a reliable builder maintaining live workflows and shipping new automations every week.',
    deliverables: [
      'Continuous monitoring & fast API breakage fixes',
      'Up to 4 new n8n workflows or Notion modules per month',
      'Webhook, rate-limit, and AI prompt cost optimization',
      'Weekly progress Loom videos & direct email/chat updates',
    ],
    ctaLabel: 'Inquire Monthly Retainer',
  },
];

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Plain-English Brief',
    detail: 'Tell us what is breaking or manual. No technical spec needed.',
  },
  {
    step: '02',
    title: 'Working Preview',
    detail: 'We prototype the core sync first and share a quick screen recording.',
  },
  {
    step: '03',
    title: 'Live Stack Setup',
    detail: 'Wired inside your real Notion, Airtable, n8n, or Vercel with error handling.',
  },
  {
    step: '04',
    title: 'Clean Handoff',
    detail: 'Setup guide, walkthrough video, and 7-day support included.',
  },
];

interface ServicesSectionProps {
  onSelectTier?: (tierName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectTier }) => {
  const [mobileActiveTierId, setMobileActiveTierId] = useState<string>('custom-system');

  const handleSelect = (tier: ServiceTier) => {
    if (onSelectTier) {
      onSelectTier(`${tier.name} (${tier.price})`);
    }
    const el = document.getElementById('hire');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="border-b border-zinc-200 bg-zinc-50/70 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] sm:text-[11px] font-medium tracking-wide text-zinc-600">
            <Layers className="h-3.5 w-3.5 text-zinc-900" />
            <span>PRODUCTIZED ENGINEERING SERVICES</span>
          </div>
          <h2 className="mt-3 sm:mt-4 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Fixed-scope builds that eliminate manual work.
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-zinc-600">
            Pick a clear scope and get a working system delivered straight into your stack—zero hourly surprises.
          </p>
        </div>

        {/* Apple-style Segmented Switcher on Mobile (< lg) */}
        <div className="mt-6 lg:hidden">
          <div className="grid grid-cols-3 gap-1 rounded-xl border border-zinc-200 bg-zinc-200/60 p-1">
            {SERVICE_TIERS.map((tier) => {
              const active = mobileActiveTierId === tier.id;
              return (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setMobileActiveTierId(tier.id)}
                  className={`rounded-lg py-2 px-2 text-xs font-medium transition cursor-pointer ${
                    active
                      ? 'bg-white text-zinc-950 shadow-xs font-semibold'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  {tier.shortTab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards: 1 focused card at a time on mobile, all 3 side-by-side on desktop (lg+) */}
        <div className="mt-4 lg:mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SERVICE_TIERS.map((tier) => {
            const visibleOnMobile = mobileActiveTierId === tier.id;
            return (
              <div
                key={tier.id}
                className={`${
                  visibleOnMobile ? 'flex' : 'hidden lg:flex'
                } flex-col justify-between rounded-2xl p-6 sm:p-7 transition ${
                  tier.featured
                    ? 'border border-zinc-900 bg-zinc-950 text-white shadow-xl'
                    : 'border border-zinc-200 bg-white text-zinc-950 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                        tier.featured
                          ? 'bg-zinc-800 text-zinc-200 border border-zinc-700'
                          : 'bg-zinc-100 text-zinc-700 border border-zinc-200'
                      }`}
                    >
                      <Clock className="h-3 w-3" />
                      {tier.turnaround}
                    </span>
                    {tier.featured && (
                      <span className="text-[11px] font-medium uppercase tracking-wider text-emerald-400">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 text-lg font-semibold tracking-tight">{tier.name}</h3>

                  <div className="mt-2.5 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-semibold tracking-tight">
                      {tier.price}
                    </span>
                    <span
                      className={`text-xs ${tier.featured ? 'text-zinc-400' : 'text-zinc-500'}`}
                    >
                      {tier.cadence}
                    </span>
                  </div>

                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      tier.featured ? 'text-zinc-300' : 'text-zinc-600'
                    }`}
                  >
                    {tier.summary}
                  </p>

                  <ul
                    className={`mt-5 space-y-2.5 border-t pt-4 text-xs sm:text-sm ${
                      tier.featured
                        ? 'border-zinc-800 text-zinc-200'
                        : 'border-zinc-100 text-zinc-700'
                    }`}
                  >
                    {tier.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            tier.featured ? 'text-emerald-400' : 'text-zinc-900'
                          }`}
                        />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => handleSelect(tier)}
                  className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition cursor-pointer ${
                    tier.featured
                      ? 'bg-white text-zinc-950 hover:bg-zinc-100'
                      : 'bg-zinc-950 text-white hover:bg-zinc-800'
                  }`}
                >
                  <span>{tier.ctaLabel}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* 2x2 Compact Mobile / 4-col Desktop Process Bar */}
        <div className="mt-8 sm:mt-14 rounded-2xl border border-zinc-200 bg-white p-5 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-zinc-100 pb-3.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-zinc-950">
              <Cpu className="h-4 w-4 text-zinc-700" />
              <span>How Engagement Works</span>
            </div>
            <span className="text-[11px] sm:text-xs text-zinc-500">
              Demo preview before major commitment
            </span>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {WORKFLOW_STEPS.map((item) => (
              <div key={item.step} className="space-y-1">
                <span className="font-mono text-[11px] font-medium text-zinc-400">{item.step}</span>
                <h4 className="text-xs sm:text-sm font-semibold text-zinc-950">{item.title}</h4>
                <p className="text-[11px] sm:text-xs leading-relaxed text-zinc-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
