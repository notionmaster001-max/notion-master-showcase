'use client';

import React, { useEffect, useState } from 'react';
import { Check, Copy, Mail, Send } from 'lucide-react';

interface InquirySectionProps {
  preselectedTier?: string;
}

const STACK_OPTIONS = [
  'n8n & API Workflows',
  'Notion CRM / Workspace',
  'Gumroad / Stripe to Airtable',
  'Next.js Website / Vercel App',
  'Zapier Migration',
  'Other / Not Sure Yet',
];

export const InquirySection: React.FC<InquirySectionProps> = ({ preselectedTier }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [tier, setTier] = useState(
    preselectedTier || 'Full Custom System Setup ($175)'
  );
  const [stack, setStack] = useState(STACK_OPTIONS[0]);
  const [brief, setBrief] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedTier) {
      setTier(preselectedTier);
    }
  }, [preselectedTier]);

  const formattedMessage = [
    `Hi Talha / Notion Master Studio,`,
    ``,
    `Project Tier: ${tier}`,
    `Primary Stack: ${stack}`,
    name ? `Name: ${name}` : null,
    company ? `Company / Project: ${company}` : null,
    ``,
    `What I need solved:`,
    brief.trim() || `[Describe your workflow bottleneck or Notion/Next.js goal in 2-3 sentences]`,
    ``,
    `Please let me know availability and next steps.`,
  ]
    .filter((line) => line !== null)
    .join('\n');

  const mailtoHref = `mailto:notionmaster001@gmail.com?subject=${encodeURIComponent(
    `Project Inquiry: ${tier} (${stack})`
  )}&body=${encodeURIComponent(formattedMessage)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback ignored in restricted frames
    }
  };

  return (
    <section id="hire" className="border-b border-zinc-200 bg-zinc-950 py-16 sm:py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* Left Side: Clear Trust & Direct Reach */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-[11px] font-medium text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>AVAILABLE FOR NEW PROJECTS</span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Tell us the bottleneck. We&apos;ll reply with a clear plan.
            </h2>

            <p className="text-sm leading-relaxed text-zinc-400">
              Every inquiry goes directly to the builder—never an outsourced sales rep. For qualified scopes, we can share a short Loom prototype walkthrough before you lock in a full build.
            </p>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 space-y-3">
              <div className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                Direct Engineering Contact
              </div>
              <a
                href="mailto:notionmaster001@gmail.com?subject=Custom%20Project%20Inquiry"
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-emerald-400 transition"
              >
                <Mail className="h-4 w-4 text-zinc-400" />
                <span>notionmaster001@gmail.com</span>
              </a>
              <p className="text-xs text-zinc-500">
                Typical response time: under 12 hours · Flexible async updates or scheduled weekly overlap.
              </p>
            </div>
          </div>

          {/* Right Side: Interactive Brief Builder (Zero Backend Needed) */}
          <div className="lg:col-span-7 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex / Jordan"
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-zinc-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Company / Role (Optional)
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Dental Clinic / Agency / Founder"
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-zinc-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Engagement Scope
                </label>
                <select
                  value={tier}
                  onChange={(e) => setTier(e.target.value)}
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3.5 py-2.5 text-sm text-white focus:border-zinc-400 focus:outline-none"
                >
                  <option value="Starter Audit & Workflow Fix ($65)">
                    Starter Audit &amp; Fix ($65 · 48h)
                  </option>
                  <option value="Full Custom System Setup ($175)">
                    Full Custom System ($175 · 3–5d)
                  </option>
                  <option value="Ongoing Automation Partner ($350/mo)">
                    Ongoing Retainer ($350/mo)
                  </option>
                  <option value="Custom Enterprise / Larger Scope">
                    Larger Custom Scope (Quote)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Primary Stack
                </label>
                <select
                  value={stack}
                  onChange={(e) => setStack(e.target.value)}
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3.5 py-2.5 text-sm text-white focus:border-zinc-400 focus:outline-none"
                >
                  {STACK_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                What workflow or system do you want built?
              </label>
              <textarea
                rows={4}
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                placeholder="Example: Sync new Gumroad sales into Airtable cleanly, or set up a custom Notion CRM + automated onboarding email for our clients..."
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-zinc-400 focus:outline-none"
              />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={mailtoHref}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-100"
              >
                <Send className="h-4 w-4" />
                <span>Send Brief via Email</span>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:bg-zinc-800 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-emerald-300">Brief Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-zinc-400" />
                    <span>Copy Brief Text</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
