'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LegalDocType } from '../types';
import { LegalModal } from './LegalModal';

interface FooterProps {
  onOpenLegal?: (type: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const [internalLegalModal, setInternalLegalModal] = useState<LegalDocType | null>(null);

  const handleLegalClick = (type: LegalDocType) => {
    if (onOpenLegal) {
      onOpenLegal(type);
    } else {
      setInternalLegalModal(type);
    }
  };

  return (
    <>
      <footer className="border-t border-zinc-200 bg-white pt-12 pb-24 md:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold tracking-tight text-zinc-950">
                  Notion Master Studio
                </span>
                <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-600 border border-zinc-200">
                  Systems &amp; Automation
                </span>
              </div>
              <p className="mt-1.5 text-xs text-zinc-500 max-w-md">
                Custom Notion workspaces, n8n workflow engineering, and production Next.js toolkits.
              </p>
            </div>

            {/* Working Real Contact & Links */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="mailto:notionmaster001@gmail.com?subject=Notion%20Master%20Studio%20Project%20Inquiry"
                className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 hover:bg-zinc-100 transition"
              >
                notionmaster001@gmail.com
              </a>

              <Link
                href="/services"
                className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50 transition"
              >
                Services &amp; Pricing
              </Link>

              <a
                href="https://notionmaster001.gumroad.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50 transition"
              >
                Gumroad Archive ↗
              </a>
            </div>
          </div>

          {/* Legal Links Bar */}
          <div className="mt-8 border-t border-zinc-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500">
              <button
                type="button"
                onClick={() => handleLegalClick('license')}
                className="hover:text-zinc-950 cursor-pointer"
              >
                Commercial License
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => handleLegalClick('refund')}
                className="hover:text-zinc-950 cursor-pointer"
              >
                Refund Policy
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => handleLegalClick('terms')}
                className="hover:text-zinc-950 cursor-pointer"
              >
                Terms
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => handleLegalClick('privacy')}
                className="hover:text-zinc-950 cursor-pointer"
              >
                Privacy
              </button>
            </div>

            <div className="text-right text-[11px] text-zinc-400">
              © {new Date().getFullYear()} Notion Master Studio · Built with clean TypeScript &amp; zero telemetry.
            </div>
          </div>
        </div>
      </footer>

      <LegalModal
        type={internalLegalModal}
        onClose={() => setInternalLegalModal(null)}
        onSelectType={setInternalLegalModal}
      />
    </>
  );
};
