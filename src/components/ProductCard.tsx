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
    <div className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-950 shadow-sm transition-all duration-300 hover:border-pink-500/50 hover:shadow-2xl hover:-translate-y-1">
      {/* 1:1 Square Cover Thumbnail */}
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
      />

      {/* Top Floating Glass Badges */}
      <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10 pointer-events-none">
        <span className="rounded-lg bg-slate-950/85 px-2.5 py-1 font-mono text-[10px] font-semibold text-white shadow-md backdrop-blur-md border border-white/10 tracking-wider">
          {product.badge || `SYSTEM #${product.num}`}
        </span>

        <div className="flex items-center gap-1 rounded-lg bg-slate-950/85 px-2 py-1 font-mono text-[11px] font-bold text-amber-400 shadow-md backdrop-blur-md border border-white/10">
          <svg className="h-3 w-3 fill-current text-amber-400" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>{product.rating.toFixed(1)}</span>
          <span className="text-[10px] text-slate-400 font-normal">({product.reviewsCount})</span>
        </div>
      </div>

      {/* Bottom Information Scrim & Controls */}
      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent pt-16 pb-3.5 px-3.5 flex flex-col justify-end">
        {/* Category Label & Version */}
        <div className="mb-1 flex items-center justify-between font-mono text-[10px]">
          <span className="uppercase tracking-wider font-semibold text-pink-400 truncate max-w-[70%]">
            {product.categoryLabel}
          </span>
          <span className="text-slate-400 font-medium">v{product.version.split(' ')[0]}</span>
        </div>

        {/* Product Title */}
        <h3 className="font-sans text-sm sm:text-base font-bold text-white line-clamp-1 group-hover:text-pink-300 transition-colors">
          <Link href={`/product/${product.id}`} className="hover:underline">
            {product.name}
          </Link>
        </h3>

        {/* Tagline snippet */}
        <p className="mt-0.5 line-clamp-1 text-[11px] text-slate-300 leading-tight">
          {product.tagline}
        </p>

        {/* Pricing & Actions Row */}
        <div className="mt-2.5 flex items-center justify-between border-t border-white/10 pt-2">
          {/* Price & Discount */}
          <div className="flex items-baseline gap-1.5">
            <span className="font-sans text-base sm:text-lg font-black text-white">
              {product.discountPrice || product.formattedPrice}
            </span>
            {product.discountPrice && (
              <span className="text-[11px] text-slate-400 line-through">
                {product.formattedPrice}
              </span>
            )}
            {product.price > 0 && (
              <span className="rounded bg-pink-500/20 border border-pink-500/40 px-1.5 py-0.2 font-mono text-[9px] font-bold text-pink-300">
                20% OFF
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetails(product);
              }}
              className="rounded-md border border-white/20 bg-white/10 hover:bg-white/20 px-2 py-1 text-[11px] font-semibold text-white shadow-sm backdrop-blur-md transition cursor-pointer"
              title="Inspect Technical Specs"
            >
              Specs
            </button>
            <a
              href={product.gumroadUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-gumroad-single-product="true"
              className="gumroad-button rounded-md bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white text-[11px] font-bold px-2.5 py-1 shadow-md transition flex items-center gap-1"
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
