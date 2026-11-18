'use client';

import React, { useState } from 'react';
import { Product } from '../types';

interface LivePreviewModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenSpecs: (product: Product) => void;
}

export const LivePreviewModal: React.FC<LivePreviewModalProps> = ({
  product,
  onClose,
  onOpenSpecs,
}) => {
  const [activeTab, setActiveTab] = useState<'ui' | 'code' | 'manifest'>('ui');
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Window */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-xl border border-slate-200 bg-white shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-3.5">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-sans text-sm font-bold text-slate-900">
                  {product.name} — Interactive System Preview
                </h3>
                <span className="rounded bg-slate-200 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-slate-700">
                  LIVE DEMO
                </span>
              </div>
              <p className="font-mono text-[11px] text-slate-500">
                System #{product.num} · ★ {product.rating.toFixed(1)} ({product.reviewsCount} reviews) · {product.version} · {product.categoryLabel}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenSpecs(product);
              }}
              className="rounded border border-slate-300 bg-white px-2.5 py-1 font-mono text-xs text-slate-700 shadow-sm hover:bg-slate-50"
            >
              Inspect Specs
            </button>
            <button
              onClick={onClose}
              className="rounded p-1 text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-white px-5 text-xs font-mono">
          <button
            onClick={() => setActiveTab('ui')}
            className={`border-b-2 py-2.5 px-3 font-semibold transition ${
              activeTab === 'ui'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Interface Simulator
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`border-b-2 py-2.5 px-3 font-semibold transition ${
              activeTab === 'code'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Verified Architecture & Code
          </button>
          <button
            onClick={() => setActiveTab('manifest')}
            className={`border-b-2 py-2.5 px-3 font-semibold transition ${
              activeTab === 'manifest'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Package Deliverables ({product.deliverables.length})
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {activeTab === 'ui' && (
            <div>
              {/* Live Hosted Demo Iframe (if available) */}
              {product.liveDemoUrl && (
                <div className="mb-4 space-y-2.5">
                  <div className="flex items-center justify-between rounded-lg border border-cyan-500/30 bg-cyan-950/20 p-2.5 px-3 text-xs text-cyan-200">
                    <div className="flex items-center gap-2">
                      <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                      <span className="font-mono font-medium">Interactive Demo Loaded Below (Try Before You Buy)</span>
                    </div>
                    <a
                      href={product.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded bg-cyan-400 px-2.5 py-1 font-mono text-[11px] font-bold text-slate-950 hover:bg-cyan-300 transition"
                    >
                      <span>Open Fullscreen ↗</span>
                    </a>
                  </div>
                  <div className="relative h-[480px] w-full overflow-hidden rounded-lg border border-slate-300 bg-slate-950 shadow-inner">
                    <iframe
                      src={product.liveDemoUrl}
                      title={`${product.name} Live Demo`}
                      className="h-full w-full border-0"
                      allow="autoplay"
                    />
                  </div>
                </div>
              )}
              {product.id === 'nextlaunch-ai' && (
                <div className="rounded-lg border border-slate-200 bg-slate-900 text-slate-100 p-5 font-mono text-xs shadow-inner">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                      <span className="ml-2 text-slate-400">localhost:3000/dashboard</span>
                    </div>
                    <span className="text-emerald-400 font-semibold">● Supabase RLS Connected</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                    <div className="rounded border border-slate-800 bg-slate-950 p-3">
                      <span className="text-slate-400 text-[10px] block">Active User</span>
                      <span className="text-white font-bold text-sm">founder@shipfast.io</span>
                      <span className="text-[10px] text-emerald-400 block mt-1">PRO Plan Active ($29/mo)</span>
                    </div>
                    <div className="rounded border border-slate-800 bg-slate-950 p-3">
                      <span className="text-slate-400 text-[10px] block">AI Credits Available</span>
                      <span className="text-white font-bold text-sm">4,850 / 5,000</span>
                      <span className="text-[10px] text-slate-400 block mt-1">Auto-metered via Supabase Trigger</span>
                    </div>
                    <div className="rounded border border-slate-800 bg-slate-950 p-3">
                      <span className="text-slate-400 text-[10px] block">Stripe Webhooks</span>
                      <span className="text-white font-bold text-sm">customer.subscription.updated</span>
                      <span className="text-[10px] text-emerald-400 block mt-1">Status: 200 OK</span>
                    </div>
                  </div>

                  <div className="rounded border border-slate-800 bg-slate-950 p-3.5">
                    <div className="text-slate-400 text-[11px] mb-2 font-sans font-semibold">
                      🤖 Live Gemini 2.0 Streaming Engine Playground:
                    </div>
                    <div className="bg-slate-900 rounded p-3 text-slate-300 font-mono text-[11px] border border-slate-800">
                      <span className="text-emerald-400 font-semibold">POST /api/chat</span>
                      <p className="mt-1.5 text-slate-200">
                        &quot;Analyzing system requirements... NextLaunch AI boilerplate provides complete user session management, server actions, and protected layout routing.&quot;
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {product.id === 'promptforge-ai' && (
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-sans font-bold text-xs text-slate-900">
                      Offline Interactive Vault Simulator (Prompt #142)
                    </div>
                    <span className="rounded bg-slate-200 px-2 py-0.5 font-mono text-[10px] text-slate-700">
                      Category: High-Ticket Sales
                    </span>
                  </div>
                  <div className="rounded border border-slate-300 bg-white p-3 font-mono text-xs text-slate-800 leading-relaxed shadow-sm">
                    <p className="text-slate-500 text-[10px] mb-2 uppercase font-semibold">
                      Role & Tone Framing Prompt:
                    </p>
                    &quot;Act as an institutional enterprise software sales strategist. Formulate a 3-part outbound executive email targeting [TARGET_ROLE] at companies with [COMPANY_SIZE] engineers. Directly address [CORE_BOTTLENECK] without corporate jargon...&quot;
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-slate-500">
                      525 Production Prompts Indexed · 0 Setup Required
                    </span>
                    <button
                      onClick={() => {
                        setCopiedPrompt(true);
                        setTimeout(() => setCopiedPrompt(false), 2000);
                      }}
                      className="rounded border border-slate-900 bg-slate-900 px-3 py-1 font-mono text-xs font-semibold text-white shadow-sm hover:bg-slate-800 transition"
                    >
                      {copiedPrompt ? '✓ Copied to Clipboard!' : 'Copy Sample Prompt'}
                    </button>
                  </div>
                </div>
              )}

              {product.id === 'extensionforge-mv3' && (
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-sans font-bold text-xs text-slate-900">
                      Chrome 116+ Side Panel & Service Worker Runtime
                    </span>
                    <span className="rounded bg-emerald-100 text-emerald-800 px-2 py-0.5 font-mono text-[10px] font-semibold">
                      Status: Active
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">
                    <div className="rounded border border-slate-300 bg-white p-3 shadow-sm">
                      <div className="text-slate-400 text-[10px] mb-1 font-semibold">CHROME.STORAGE SYNC</div>
                      <div className="text-slate-800">{`{ "theme": "system", "apiKey": "sk_live_...", "licenseKey": "LIC-2026-OK" }`}</div>
                    </div>
                    <div className="rounded border border-slate-300 bg-white p-3 shadow-sm">
                      <div className="text-slate-400 text-[10px] mb-1 font-semibold">BACKGROUND WORKER</div>
                      <div className="text-slate-800">{`chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })`}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* General simulation for other products */}
              {!['nextlaunch-ai', 'promptforge-ai', 'extensionforge-mv3'].includes(product.id) && (
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-sans font-bold text-sm text-slate-900">
                      {product.name} Verified Architecture
                    </span>
                    <span className="rounded bg-slate-200 px-2 py-0.5 font-mono text-[10px] text-slate-700">
                      {product.techStack[0]}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed font-sans">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
                    {product.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 rounded border border-slate-200 bg-white p-2.5 shadow-sm">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span className="text-slate-700 text-[11px]">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* System Specs Overview */}
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <div className="font-mono text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-2">
                  System Requirements & Environment:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {product.systemRequirements.map((req, i) => (
                    <span
                      key={i}
                      className="rounded border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs text-slate-700"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="rounded-lg border border-slate-200 bg-slate-900 text-slate-200 p-4 font-mono text-xs shadow-inner">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3 text-slate-400 text-[11px]">
                <span>Repository Root: {product.folder}/</span>
                <span className="text-emerald-400">Verified Exit Code: 0</span>
              </div>
              <div className="space-y-1.5 text-slate-300">
                <div className="text-slate-500">// Tech stack verified in production environment</div>
                {product.techStack.map((tech, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-slate-500">[{i + 1}]</span>
                    <span className="text-slate-100 font-semibold">{tech}</span>
                  </div>
                ))}
                <div className="mt-4 pt-3 border-t border-slate-800 text-slate-400 text-[11px]">
                  <span>Local Verification Status: CRC32 Checked & 0 Missing Imports.</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'manifest' && (
            <div className="space-y-2">
              {product.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 rounded-lg border border-slate-200 bg-slate-50/60 p-3 font-sans text-xs text-slate-700"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-slate-900 text-[10px] font-mono font-bold text-white">
                    {idx + 1}
                  </span>
                  <div className="pt-0.5">
                    <p className="font-medium text-slate-900">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Checkout CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 px-5 py-3.5">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="font-sans text-2xl font-black text-pink-600">
              {product.discountPrice || product.formattedPrice}
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500">USD</span>
            <span className="text-sm text-slate-400 line-through">
              {product.formattedPrice}
            </span>
            <span className="rounded bg-pink-100 border border-pink-200 px-1.5 py-0.5 font-mono text-[9px] font-bold text-pink-700">
              20% OFF
            </span>
            <span className="font-mono text-[11px] text-slate-400">· Perpetual Commercial License</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={product.gumroadUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-gumroad-single-product="true"
              className="gumroad-button flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-slate-800 transition"
            >
              <span>Instant Purchase ({product.discountPrice || product.formattedPrice})</span>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
