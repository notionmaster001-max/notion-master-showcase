'use client';

import React, { useState } from 'react';
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
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-sans text-xs font-bold tracking-tight text-slate-900">
                  NOTION MASTER STUDIO
                </span>
                <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[9px] text-slate-600 border border-slate-200">
                  ENTERPRISE CATALOG 2026
                </span>
              </div>
              <p className="mt-1 font-mono text-[11px] text-slate-500 max-w-md">
                Autonomous Software Boilerplates, Chrome MV3 Extensions & Commercial Digital Toolkits.
              </p>
            </div>

            {/* Institutional Contact Desk */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="rounded border border-slate-200 bg-slate-50 px-3 py-1.5 font-mono text-xs text-slate-700">
                <span className="text-slate-400 mr-1.5">Desk:</span>
                <a
                  href="mailto:support@notionmasterstudio.com?subject=Notion%20Master%20Studio%20Support%20Inquiry"
                  className="font-semibold text-slate-900 hover:underline"
                >
                  support@notionmasterstudio.com
                </a>
              </div>

              <a
                href="https://notionmaster001.gumroad.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-slate-300 bg-white px-3 py-1.5 font-mono text-xs text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition"
              >
                Gumroad Storefront ↗
              </a>
            </div>
          </div>

          {/* Legal Links Bar */}
          <div className="mt-8 border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] text-slate-500">
              <button
                type="button"
                onClick={() => handleLegalClick('license')}
                className="hover:text-slate-900 hover:underline cursor-pointer"
              >
                Commercial License Agreement
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => handleLegalClick('refund')}
                className="hover:text-slate-900 hover:underline cursor-pointer"
              >
                Digital Refund Policy
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => handleLegalClick('terms')}
                className="hover:text-slate-900 hover:underline cursor-pointer"
              >
                Terms of Service
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => handleLegalClick('privacy')}
                className="hover:text-slate-900 hover:underline cursor-pointer"
              >
                Privacy Policy
              </button>
            </div>

            <div className="text-right text-[10px] text-slate-400 font-mono">
              © {new Date().getFullYear()} Notion Master Studio. All rights reserved. Zero telemetry recorded.
            </div>
          </div>
        </div>
      </footer>

      {/* Internal Legal Modal Fallback */}
      <LegalModal
        type={internalLegalModal}
        onClose={() => setInternalLegalModal(null)}
        onSelectType={setInternalLegalModal}
      />
    </>
  );
};
