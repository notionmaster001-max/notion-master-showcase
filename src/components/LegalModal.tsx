'use client';

import React from 'react';
import { LegalDocType } from '../types';

interface LegalModalProps {
  type: LegalDocType | null;
  onClose: () => void;
  onSelectType: (type: LegalDocType) => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  type,
  onClose,
  onSelectType,
}) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Window */}
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-xl border border-slate-200 bg-white shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-3.5">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-sans text-sm font-bold text-slate-900">
                Notion Master Studio — Institutional Legal Framework
              </span>
              <span className="rounded bg-slate-200 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-slate-700">
                OFFICIAL
              </span>
            </div>
            <p className="font-mono text-[11px] text-slate-500">
              Governing commercial usage, client deployments, and transactions.
            </p>
          </div>

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

        {/* Tab Buttons */}
        <div className="flex flex-wrap border-b border-slate-200 bg-white px-5 text-xs font-mono">
          <button
            onClick={() => onSelectType('license')}
            className={`border-b-2 py-2.5 px-3 font-semibold transition ${
              type === 'license'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Commercial License
          </button>
          <button
            onClick={() => onSelectType('refund')}
            className={`border-b-2 py-2.5 px-3 font-semibold transition ${
              type === 'refund'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Digital Refund Policy
          </button>
          <button
            onClick={() => onSelectType('terms')}
            className={`border-b-2 py-2.5 px-3 font-semibold transition ${
              type === 'terms'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Terms of Service
          </button>
          <button
            onClick={() => onSelectType('privacy')}
            className={`border-b-2 py-2.5 px-3 font-semibold transition ${
              type === 'privacy'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Privacy Policy
          </button>
        </div>

        {/* Document Content */}
        <div className="flex-1 overflow-y-auto p-6 font-sans text-xs text-slate-700 leading-relaxed space-y-4">
          {type === 'license' && (
            <div>
              <h4 className="font-bold text-sm text-slate-900 mb-2">
                1. Commercial & Client Project License (Perpetual, Royalty-Free)
              </h4>
              <p>
                Every software boilerplate, database architecture, legal contract, and automation blueprint purchased from 
                Notion Master Studio grants you a perpetual, non-exclusive, worldwide, royalty-free commercial license.
              </p>

              <div className="mt-3 rounded border border-slate-200 bg-slate-50 p-3.5 space-y-2">
                <p className="font-bold text-slate-900">What You ARE Explicitly Permitted to Do:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Build, deploy, and host unlimited commercial SaaS applications, tools, and websites for yourself.</li>
                  <li>Build, deploy, and charge clients for software solutions, agency automations, and custom workspaces.</li>
                  <li>Charge end-users monthly subscription fees or one-time fees using code built from our boilerplates.</li>
                  <li>Modify, extend, and refactor 100% of the provided source code, prompts, and database schemas.</li>
                  <li>Use client agreements with an unlimited number of commercial clients.</li>
                </ul>
              </div>

              <div className="mt-3 rounded border border-red-200 bg-red-50/50 p-3.5 space-y-2 text-red-900">
                <p className="font-bold">What You Are STRICTLY Prohibited From Doing:</p>
                <ul className="list-disc pl-5 space-y-1 text-red-700">
                  <li>Re-packaging, sub-licensing, or re-selling our source code or blueprints as a competing boilerplate or digital download.</li>
                  <li>Distributing raw source zip files, prompt databases, or contract templates on public repositories or torrent trackers.</li>
                </ul>
              </div>
            </div>
          )}

          {type === 'refund' && (
            <div>
              <h4 className="font-bold text-sm text-slate-900 mb-2">
                2. Digital Goods Refund Policy & Quality Remediation Warranty
              </h4>
              <p>
                Due to the immediate, non-revocable nature of digital source code, prompt databases, and contractual documents, 
                all completed transactions are fundamentally final once the archive is delivered and accessed via Gumroad.
              </p>

              <div className="mt-3 rounded border border-slate-200 bg-slate-50 p-3.5 space-y-2">
                <p className="font-bold text-slate-900">Our 100% Defect-Free Technical Guarantee:</p>
                <p className="text-slate-600">
                  We guarantee that every codebase strictly compiles with 0 errors in its specified environment (e.g., Node.js 18+ for NextLaunch AI, Python 3.10+ for ScrapeForge AI). If you encounter any genuine compiler defect, broken link, or corrupted archive:
                </p>
                <ol className="list-decimal pl-5 space-y-1 text-slate-600">
                  <li>Contact our dedicated engineering desk at <span className="font-mono text-slate-900 font-semibold">support@notionmasterstudio.com</span>.</li>
                  <li>Our software engineers will diagnose the issue and provide a verified patch or replacement within 24 business hours.</li>
                  <li>If an irremediable defect in our deliverables prevents the system from functioning as documented, a full refund will be processed promptly.</li>
                </ol>
              </div>
            </div>
          )}

          {type === 'terms' && (
            <div>
              <h4 className="font-bold text-sm text-slate-900 mb-2">
                3. Terms of Service
              </h4>
              <p>
                By accessing, browsing, or purchasing assets through Notion Master Studio, you agree to be bound by these Terms of Service.
              </p>
              <p>
                <strong>Software Delivery:</strong> Delivery occurs instantaneously through Gumroad’s secure checkout. You will receive an immediate download link and invoice email.
              </p>
              <p>
                <strong>Disclaimer of Warranties:</strong> The software and assets are provided &quot;as is&quot; without warranty of any kind regarding third-party API availability (e.g., OpenAI, Supabase, Google Chrome Web Store policies, or Stripe API updates). Users are responsible for obtaining their own third-party API keys and adhering to external provider policies.
              </p>
            </div>
          )}

          {type === 'privacy' && (
            <div>
              <h4 className="font-bold text-sm text-slate-900 mb-2">
                4. Privacy Policy & Zero Telemetry Standard
              </h4>
              <p>
                At Notion Master Studio, your intellectual property and data sovereignty are paramount.
              </p>
              <div className="mt-3 rounded border border-slate-200 bg-slate-50 p-3.5 space-y-2">
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li><strong>Zero Third-Party Tracking:</strong> This showcase web application does not run Google Analytics, Facebook Pixels, or telemetry trackers.</li>
                  <li><strong>Zero Injected Analytics:</strong> Our boilerplates and scripts contain zero telemetry, remote pings, or tracking beacons. Your local application code communicates only with the services you explicitly configure.</li>
                  <li><strong>Secure Payment Processing:</strong> All financial transactions are securely processed by Gumroad, PCI-DSS compliant with 256-bit SSL encryption. We never see or store your payment card details.</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-5 py-3">
          <span className="font-mono text-[11px] text-slate-500">
            Last Updated: March 2026 · Notion Master Studio
          </span>
          <button
            onClick={onClose}
            className="rounded bg-slate-900 px-3 py-1.5 font-mono text-xs font-semibold text-white shadow-sm hover:bg-slate-800"
          >
            Understood & Close
          </button>
        </div>
      </div>
    </div>
  );
};
