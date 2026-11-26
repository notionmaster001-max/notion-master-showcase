import React, { useEffect } from 'react';
import Image from 'next/image';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col rounded-lg border border-slate-200 bg-white shadow-2xl overflow-hidden">
        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/80 px-6 py-3.5">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-600">
            <span className="font-semibold uppercase tracking-wider text-slate-900">
              {product.categoryLabel}
            </span>
            <span>·</span>
            <span>SPECIFICATION DOSSIER #{product.num}</span>
          </div>
          <button
            onClick={onClose}
            className="rounded p-1 text-slate-400 transition hover:bg-slate-200 hover:text-slate-700"
            aria-label="Close dialog"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Header & Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <div>
              <div className="inline-block rounded border border-slate-200 bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-700 mb-2">
                {product.version}
              </div>
              <h2 className="font-sans text-xl font-bold text-slate-900">
                {product.name}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                {product.tagline}
              </p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-sans text-2xl font-extrabold text-slate-900">
                  {product.formattedPrice}
                </span>
                <span className="font-mono text-xs text-slate-500">USD (One-time)</span>
                {product.originalValue && (
                  <span className="text-xs text-slate-400 line-through">
                    Value: {product.originalValue}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="rounded-lg border border-slate-200 bg-slate-50/60 p-4">
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-700">
              System Architecture & Purpose
            </h4>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-700">
              {product.description}
            </p>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5">
              Verified Deliverables Included
            </h4>
            <ul className="mt-2.5 space-y-2 text-xs text-slate-700">
              {product.deliverables.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg className="h-4 w-4 shrink-0 text-slate-900 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5">
              Engineering Tech Stack & Standards
            </h4>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {product.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-slate-200 bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* System Requirements */}
          <div>
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5">
              Prerequisites & Compatibility
            </h4>
            <ul className="mt-2 space-y-1 text-xs text-slate-600 font-mono">
              {product.systemRequirements.map((req, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / License Box */}
          <div className="rounded border border-slate-200 bg-slate-50 p-3 text-[11px] text-slate-600 space-y-1">
            <p className="font-semibold text-slate-900 font-mono text-[10px] uppercase tracking-wider">
              Commercial License & Terms of Use:
            </p>
            <p>
              Includes perpetual commercial rights for unlimited personal, agency client, and production applications. 
              Due to the immediate-access digital nature of downloadable software source code, all purchases are final and non-refundable.
            </p>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200 bg-slate-50/80 px-6 py-4">
          <div className="flex items-baseline gap-2">
            <span className="font-sans text-xl font-black text-pink-600">
              {product.discountPrice || product.formattedPrice}
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500">USD</span>
            <span className="text-xs text-slate-400 line-through">
              {product.formattedPrice}
            </span>
            <span className="rounded bg-pink-100 border border-pink-200 px-1.5 py-0.5 font-mono text-[9px] font-bold text-pink-700">
              20% OFF AUTO-APPLIED
            </span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="rounded border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              Close
            </button>
            <a
              href={product.gumroadUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-gumroad-single-product="true"
              className="gumroad-button inline-flex items-center gap-1.5 rounded-md border border-slate-900 bg-slate-900 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              <span>Get on Gumroad ({product.discountPrice || product.formattedPrice})</span>
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
