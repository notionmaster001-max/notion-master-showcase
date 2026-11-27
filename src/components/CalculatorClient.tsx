'use client';

import React, { useState, useMemo } from 'react';

const MODELS = [
  { id: 'opus-5.5', name: 'Claude Opus 5.5 (Flagship)', input: 4.00, cached: 0.20, output: 20.00, provider: 'Anthropic' },
  { id: 'astra-6.2', name: 'GPT-6.2 Astra (Flagship)', input: 8.00, cached: 0.40, output: 40.00, provider: 'OpenAI' },
  { id: 'sonnet-5.5', name: 'Claude Sonnet 5.5 (Balanced)', input: 2.00, cached: 0.10, output: 10.00, provider: 'Anthropic' },
  { id: 'haiku-5.5', name: 'Claude Haiku 5.5 (Fast)', input: 0.10, cached: 0.01, output: 0.50, provider: 'Anthropic' },
  { id: 'deepseek-flash', name: 'DeepSeek Flash V3 (Ultra-Fast)', input: 0.07, cached: 0.014, output: 0.28, provider: 'DeepSeek' },
];

export const CalculatorClient: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState('opus-5.5');
  const [dailyCalls, setDailyCalls] = useState(60);
  const [avgContextTokens, setAvgContextTokens] = useState(85000);
  const [cacheEnabled, setCacheEnabled] = useState(false);
  const [avgOutputTokens] = useState(450);

  const model = useMemo(() => MODELS.find((m) => m.id === selectedModel) || MODELS[0], [selectedModel]);

  const monthlyCalls = dailyCalls * 22;
  const inputRate = cacheEnabled ? (model.cached * 0.75 + model.input * 0.25) : model.input;
  const monthlyInputTokens = (monthlyCalls * avgContextTokens) / 1_000_000;
  const monthlyOutputTokens = (monthlyCalls * avgOutputTokens) / 1_000_000;
  const currentCost = (monthlyInputTokens * inputRate) + (monthlyOutputTokens * model.output);

  const optModel = MODELS.find((m) => m.id === 'sonnet-5.5') || MODELS[2];
  const optRate = (optModel.cached * 0.85 + optModel.input * 0.15);
  const optimizedCost = (monthlyInputTokens * optRate) + (monthlyOutputTokens * optModel.output);

  const monthlySavings = Math.max(0, currentCost - optimizedCost);
  const savingsPct = currentCost > 0 ? Math.round((monthlySavings / currentCost) * 100) : 0;
  const annualSavings = monthlySavings * 12;

  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-mono text-xs text-zinc-700 font-medium mb-4">
          <span>AI Coding Bill Estimator · November 2026 API Rates</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
          AI Coding Cost &amp; Token Waste Calculator
        </h1>
        <p className="mt-4 font-mono text-xs sm:text-sm text-slate-600 leading-relaxed">
          Estimate your monthly Claude Code, Cursor, and OpenAI API bill shock. See how much budget you are burning in uncached prompt bloat and overkill flagship calls.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 space-y-6">
          <h2 className="font-bold text-lg text-slate-900 border-b border-slate-200 pb-3 flex items-center justify-between">
            <span>Your Coding &amp; Assistant Telemetry</span>
            <span className="font-mono text-xs font-normal text-slate-500">Live Simulation</span>
          </h2>

          <div>
            <label className="block font-mono text-xs font-bold text-slate-700 mb-2">
              Primary Coding Model
            </label>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-xs text-slate-800 shadow-xs focus:border-slate-900 focus:outline-none"
            >
              {MODELS.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name} (${m.input}/1M in · ${m.output}/1M out)
                </option>
              ))}
            </select>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="font-mono text-xs font-bold text-slate-700">
                Daily Coding Prompts / Requests
              </label>
              <span className="font-mono text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                {dailyCalls} calls / day (~{monthlyCalls} / mo)
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="300"
              step="5"
              value={dailyCalls}
              onChange={(e) => setDailyCalls(Number(e.target.value))}
              className="w-full accent-indigo-600 cursor-pointer"
            />
            <div className="flex justify-between font-mono text-[10px] text-slate-400 mt-1">
              <span>10 (Casual)</span>
              <span>100 (Heavy Solo)</span>
              <span>300 (Small Team)</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="font-mono text-xs font-bold text-slate-700">
                Average Context Injected (Input Tokens)
              </label>
              <span className="font-mono text-xs font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                {(avgContextTokens / 1000).toFixed(0)}K tokens / call
              </span>
            </div>
            <input
              type="range"
              min="20000"
              max="180000"
              step="5000"
              value={avgContextTokens}
              onChange={(e) => setAvgContextTokens(Number(e.target.value))}
              className="w-full accent-purple-600 cursor-pointer"
            />
            <div className="flex justify-between font-mono text-[10px] text-slate-400 mt-1">
              <span>20K (Small file)</span>
              <span>80K (Cursor codebase loop)</span>
              <span>180K (Claude Code session)</span>
            </div>
          </div>

          <div className="pt-2">
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={cacheEnabled}
                onChange={(e) => setCacheEnabled(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-emerald-600 accent-emerald-600 cursor-pointer"
              />
              <span className="font-mono text-xs text-slate-700">
                Prompt Caching is actively configured on client requests
              </span>
            </label>
            {!cacheEnabled && (
              <p className="font-mono text-[11px] text-rose-600 mt-1 pl-7">
                ⚠️ Uncached requests pay 100% full input pricing ($4-$8/1M) on every single turn!
              </p>
            )}
          </div>
        </div>

        <div className="lg:col-span-5 rounded-2xl border-2 border-slate-900 bg-slate-900 text-white p-6 sm:p-8 shadow-xl flex flex-col justify-between">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
              Monthly AI Bill Breakdown
            </span>

            <div className="mt-4 mb-6">
              <div className="text-slate-400 font-mono text-xs">Estimated Monthly Spend</div>
              <div className="text-4xl sm:text-5xl font-black text-white mt-1">
                ${currentCost.toFixed(2)}
                <span className="text-xs font-mono text-slate-400 font-normal"> / month</span>
              </div>
            </div>

            <div className="rounded-xl bg-rose-950/60 border border-rose-800/80 p-4 mb-6 font-mono text-xs">
              <div className="flex items-center justify-between text-rose-300 font-bold mb-1">
                <span>🚨 Recoverable Waste:</span>
                <span className="text-base text-rose-200">${monthlySavings.toFixed(2)}/mo</span>
              </div>
              <p className="text-rose-300/80 text-[11px]">
                You are overpaying ~<strong>{savingsPct}%</strong> due to uncached context loops and model overkill.
              </p>
            </div>

            <div className="rounded-xl bg-emerald-950/60 border border-emerald-800/80 p-4 mb-6 font-mono text-xs">
              <div className="flex items-center justify-between text-emerald-300 font-bold mb-1">
                <span>Optimized Monthly Bill:</span>
                <span className="text-base text-emerald-200">${optimizedCost.toFixed(2)}/mo</span>
              </div>
              <p className="text-emerald-300/80 text-[11px]">
                Annual savings with TokenAudit: <strong>${annualSavings.toFixed(0)} USD</strong>
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-800">
            <a
              href="https://notionmaster001.gumroad.com/l/tokenaudit-kit/EARLYBIRD"
              target="_blank"
              rel="noopener noreferrer"
              data-gumroad-single-product="true"
              className="gumroad-button flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 px-4 font-mono text-xs font-semibold text-zinc-950 hover:bg-zinc-100 transition shadow-sm"
            >
              <span>Get TokenAudit Pro — $24.50</span>
              <span>→</span>
            </a>

            <a
              href="/downloads/tokenaudit-lite-github.zip"
              download
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800/80 py-2.5 px-4 font-mono text-xs text-slate-300 hover:text-white hover:bg-slate-700 transition"
            >
              <span>Download Free TokenAudit Lite CLI ($0)</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </div>

      <section className="mt-16 pt-12 border-t border-slate-200">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
          How TokenAudit Kit Slashes Your Bill
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-2xs">
            <div className="text-indigo-600 font-bold text-sm mb-1.5">1. Scans Local Logs</div>
            <p className="text-slate-600 leading-relaxed">
              Reads Claude Code JSONL transcripts and Cursor billing CSVs directly on your machine in 2 seconds. 100% offline, zero network telemetry.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-2xs">
            <div className="text-purple-600 font-bold text-sm mb-1.5">2. Spots 80K+ Bloat</div>
            <p className="text-slate-600 leading-relaxed">
              Flags runaway prompt loops where repetitive context was sent uncached, and identifies flagship Opus calls that should have used Sonnet.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-2xs">
            <div className="text-emerald-600 font-bold text-sm mb-1.5">3. Enforces CI Budget</div>
            <p className="text-slate-600 leading-relaxed">
              Includes drop-in GitHub Actions CI workflow to fail pull requests with exit code 1 if team overage budgets are exceeded.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
