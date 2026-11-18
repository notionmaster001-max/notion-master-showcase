import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
  onOpenLivePreview: (product: Product) => void;
}

const renderStars = (rating: number) => {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const fill = Math.max(0, Math.min(100, (rating - (star - 1)) * 100));
        return (
          <div key={star} className="relative h-3 w-3">
            <svg className="absolute inset-0 h-3 w-3 text-slate-200 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <div className="absolute inset-0 overflow-hidden text-amber-500 fill-current" style={{ width: `${fill}%` }}>
              <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetails, onOpenLivePreview }) => {
  return (
    <div className="group flex flex-col justify-between rounded-lg border border-slate-200 bg-white transition-all duration-200 hover:border-slate-300 hover:shadow-md">
      {/* Visual Header & Image */}
      <div>
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-lg border-b border-slate-100 bg-slate-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-top transition duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {product.badge && (
            <div className="absolute top-2.5 left-2.5">
              <span className="rounded border border-slate-900 bg-slate-900 px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-white shadow-sm">
                {product.badge}
              </span>
            </div>
          )}
          <div className="absolute top-2.5 right-2.5">
            <span className="rounded border border-slate-200 bg-white/95 px-2 py-0.5 font-mono text-[10px] font-medium text-slate-700 shadow-sm backdrop-blur">
              {product.version}
            </span>
          </div>
        </div>

        {/* Core Specs Body */}
        <div className="p-5">
          {/* Category & Number */}
          <div className="mb-2 flex items-center justify-between font-mono text-[11px] text-slate-500">
            <span className="uppercase tracking-wider">{product.categoryLabel}</span>
            <span>SYSTEM #{product.num}</span>
          </div>

          {/* Title with SEO Link */}
          <h3 className="font-sans text-base font-bold text-slate-900 group-hover:text-slate-800">
            <Link href={`/product/${product.id}`} className="hover:underline">
              {product.name}
            </Link>
          </h3>

          {/* Individual Realistic Star Rating Bar */}
          <div className="mt-1.5 mb-2 flex items-center gap-2">
            {renderStars(product.rating)}
            <span className="font-mono text-xs font-bold text-slate-900">
              {product.rating.toFixed(1)}
            </span>
            <span className="font-mono text-[11px] text-slate-500">
              ({product.reviewsCount} reviews)
            </span>
          </div>

          {/* Tagline */}
          <p className="line-clamp-2 text-xs leading-relaxed text-slate-600">
            {product.tagline}
          </p>

          {/* Tech Stack Pills */}
          <div className="mt-3.5 flex flex-wrap gap-1">
            {product.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[10px] text-slate-700"
              >
                {tech}
              </span>
            ))}
            {product.techStack.length > 4 && (
              <span className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 font-mono text-[10px] text-slate-500">
                +{product.techStack.length - 4}
              </span>
            )}
          </div>

          {/* Deliverables Checklist */}
          <div className="mt-4 border-t border-slate-100 pt-3">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Verified Deliverables:
            </p>
            <ul className="mt-1.5 space-y-1 text-[11px] text-slate-600">
              {product.deliverables.slice(0, 3).map((item, index) => (
                <li key={index} className="flex items-start gap-1.5 line-clamp-1">
                  <svg className="h-3.5 w-3.5 shrink-0 text-slate-900 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Pricing & Actions Footer */}
      <div className="border-t border-slate-100 bg-slate-50/70 p-4 rounded-b-lg">
        <div className="mb-3 flex items-baseline justify-between">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-sans text-xl font-extrabold text-slate-900">
                {product.formattedPrice}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">USD</span>
              {product.originalValue && (
                <span className="ml-1 text-xs text-slate-400 line-through">
                  {product.originalValue}
                </span>
              )}
            </div>
            <p className="font-mono text-[10px] text-slate-500">
              One-Time · Commercial License
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            <Link
              href={`/product/${product.id}`}
              className="rounded border border-slate-300 bg-white px-2 py-1 text-[11px] font-medium text-slate-700 shadow-sm transition hover:bg-slate-100 hover:text-slate-900"
              title="View Complete System Specifications & Overview"
            >
              View Details ↗
            </Link>
            <button
              onClick={() => onOpenLivePreview(product)}
              className="rounded border border-slate-300 bg-white px-2 py-1 text-[11px] font-medium text-slate-700 shadow-sm transition hover:bg-slate-100 hover:text-slate-900"
              title="Interactive Live Demo"
            >
              Demo
            </button>
            <button
              onClick={() => onOpenDetails(product)}
              className="rounded border border-slate-300 bg-white px-2 py-1 text-[11px] font-medium text-slate-700 shadow-sm transition hover:bg-slate-100 hover:text-slate-900"
              title="Inspect Technical Specs"
            >
              Specs
            </button>
          </div>
        </div>

        {/* Direct Gumroad Action Button with Overlay Trigger */}
        <a
          href={product.gumroadUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-gumroad-single-product="true"
          className="gumroad-button flex w-full items-center justify-center gap-1.5 rounded-md border border-slate-900 bg-slate-900 py-2 px-3 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
        >
          <span>Purchase on Gumroad</span>
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};
