'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      q: 'How does custom Notion or n8n automation setup work?',
      a: 'Send a short plain-English brief of your bottleneck or pick the $65 Starter Fix tier. For scoped projects, we prototype the core sync first, share a Loom walkthrough video so you can verify it works, and then deploy cleanly into your live stack.',
    },
    {
      q: 'What is included in the $65 Starter Audit & Workflow Fix?',
      a: 'It covers fixing 1 broken webhook/n8n workflow, building a single API-to-Airtable or Notion sync (such as Gumroad or Stripe sales exports), or repairing complex Notion relations and Formulas 2.0 within 48 hours.',
    },
    {
      q: 'Can you migrate expensive Zapier or Make scenarios to self-hosted n8n?',
      a: 'Yes. We audit your active Zaps, rebuild equivalent workflows in n8n with proper error handlers and retries, and document every credential step so your team owns the automation without recurring task-tier bills.',
    },
    {
      q: 'Can I use your pre-built boilerplates and assets for paying client projects?',
      a: 'Yes. Every pre-built toolkit includes a commercial license allowing you to build and deploy unlimited client deliverables and freelance projects without royalties.',
    },
    {
      q: 'What is the policy for custom builds vs. downloadable digital kits?',
      a: 'Custom service builds include milestone verification and 7 days of post-delivery tweaks so everything runs reliably in your environment. Pre-built downloadable source code archives accessed via Gumroad are final once delivered, with 24-hour technical remediation if any documented defect occurs.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-zinc-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-500">
            Questions &amp; Scope Clarity
          </div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            Clear expectations on timelines, custom workflows, and commercial licensing.
          </p>
        </div>

        <div className="mt-10 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="p-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-sm font-medium text-zinc-950">{faq.q}</span>
                  <ChevronDown
                    className={`ml-4 h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">{faq.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
