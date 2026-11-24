import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
  onOpenLivePreview: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetails, onOpenLivePreview }) => {
  return (
    <div className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
      {/* 1. Square Thumbnail Showcase Frame */}
      <div
        className="relative aspect-square w-full overflow-hidden bg-slate-950 border-b border-slate-100 cursor-pointer"
        onClick={() => onOpenDetails(product)}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />

        {/* Top Badges (Floating Frosted Glass) */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10 pointer-events-none">
          <span className="rounded-full bg-slate-950/85 px-2.5 py-1 font-mono text-[10px] font-semibold text-white shadow-md backdrop-blur-md border border-white/10 tracking-wider">
            {product.badge || `SYSTEM #${product.num}`}
          </span>

          <div className="flex items-center gap-1 rounded-full bg-slate-950/85 px-2.5 py-1 font-mono text-[11px] font-bold text-amber-400 shadow-md backdrop-blur-md border border-white/10">
            <svg className="h-3 w-3 fill-current text-amber-400" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{product.rating.toFixed(1)}</span>
            <span className="text-[10px] text-slate-300 font-normal">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Hover Quick Action Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <button
            type="button"
            className="pointer-events-auto rounded-lg bg-white px-3.5 py-2 text-xs font-bold text-slate-900 shadow-xl transition hover:bg-slate-50 flex items-center gap-1.5"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(product);
            }}
          >
            <span>Inspect Specs &amp; Highlights</span>
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* 2. Structured Content Body: Short Details & Specs */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3 bg-white">
        <div>
          {/* Category & System # */}
          <div className="mb-1.5 flex items-center justify-between font-mono text-[10px]">
            <span className="uppercase tracking-wider font-semibold text-pink-600 truncate max-w-[70%]">
              {product.categoryLabel}
            </span>
            <span className="text-slate-500 font-medium bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
              SYSTEM #{product.num}
            </span>
          </div>

          {/* Product Title */}
          <h3 className="font-sans text-base font-bold text-slate-900 group-hover:text-pink-600 transition-colors line-clamp-1">
            <Link href={`/product/${product.id}`} className="hover:underline">
              {product.name}
            </Link>
          </h3>

          {/* Short Details (The Value Pitch / Tagline) */}
          <p className="mt-1.5 text-xs text-slate-600 leading-relaxed line-clamp-2 min-h-[2.5rem]">
            {product.tagline}
          </p>

          {/* Micro Feature / Tech Stack Pills */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-slate-200/90 bg-slate-50 px-2 py-0.5 font-mono text-[10px] text-slate-600 line-clamp-1"
              >
                {tech}
              </span>
            ))}
            {product.techStack.length > 3 && (
              <span className="rounded-md border border-slate-200/90 bg-slate-50 px-1.5 py-0.5 font-mono text-[10px] text-slate-400">
                +{product.techStack.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* 3. Pricing & Actions Footer */}
        <div className="border-t border-slate-100 pt-3 flex items-center justify-between mt-auto">
          {/* Price & Code */}
          <div>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span className="font-sans text-lg font-black text-slate-900">
                {product.discountPrice || product.formattedPrice}
              </span>
              {product.discountPrice && (
                <span className="text-xs text-slate-400 line-through">
                  {product.formattedPrice}
                </span>
              )}
              {product.price > 0 && (
                <span className="rounded bg-pink-500/10 border border-pink-500/20 px-1.5 py-0.2 font-mono text-[9px] font-bold text-pink-600">
                  20% OFF
                </span>
              )}
            </div>
            <p className="font-mono text-[9px] text-emerald-600 font-semibold mt-0.5">
              Code LAUNCH20 Applied
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => onOpenDetails(product)}
              className="rounded-lg border border-slate-300 bg-white hover:bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition cursor-pointer"
              title="Inspect Technical Specs"
            >
              Specs
            </button>
            <a
              href={product.gumroadUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-gumroad-single-product="true"
              className="gumroad-button rounded-lg bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 text-xs font-bold shadow-sm transition flex items-center gap-1"
              title="Purchase on Gumroad"
            >
              <span>Buy</span>
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
