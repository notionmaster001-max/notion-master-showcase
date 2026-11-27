import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
  onOpenLivePreview: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetails }) => {
  const versionPill =
    product.price === 0
      ? 'Free'
      : product.version.match(/v\d+(?:\.\d+)?/i)?.[0] || '2026';

  return (
    <div className="group flex flex-col justify-between rounded-xl sm:rounded-2xl border border-zinc-200 bg-white shadow-xs transition-all duration-300 hover:border-zinc-300 hover:shadow-md overflow-hidden">
      {/* Square Thumbnail Frame (fits 2-across cleanly on mobile!) */}
      <div
        className="relative aspect-square w-full overflow-hidden bg-zinc-950 border-b border-zinc-100 cursor-pointer"
        onClick={() => onOpenDetails(product)}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Compact Corner Badges */}
        <div className="absolute top-2 inset-x-2 sm:top-3 sm:inset-x-3 flex items-center justify-between gap-1.5 z-10 pointer-events-none">
          <span className="hidden sm:inline-block rounded-full bg-zinc-950/85 px-2.5 py-0.5 font-mono text-[10px] font-medium text-white backdrop-blur-md border border-white/10 truncate max-w-[60%]">
            {product.badge || `SYSTEM #${product.num}`}
          </span>
          <span className="sm:hidden rounded-full bg-zinc-950/85 px-2 py-0.5 font-mono text-[9px] font-medium text-white backdrop-blur-md border border-white/10">
            #{product.num}
          </span>

          <span className="rounded-full bg-white/95 px-2 py-0.5 font-mono text-[9px] sm:text-[10px] font-medium text-zinc-800 shadow-xs backdrop-blur-md border border-zinc-200/80 whitespace-nowrap">
            {versionPill}
          </span>
        </div>

        {/* Desktop Hover Overlay */}
        <div className="hidden sm:flex absolute inset-0 items-center justify-center bg-zinc-950/25 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <button
            type="button"
            className="pointer-events-auto rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-zinc-950 shadow-lg transition hover:bg-zinc-50 flex items-center gap-1"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(product);
            }}
          >
            <span>Inspect Specs</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* Responsive Content Body (Compact for 2-up Mobile, Rich on Tablet/Desktop) */}
      <div className="p-2.5 sm:p-4 flex flex-col flex-1 justify-between gap-2 sm:gap-3 bg-white">
        <div>
          <div className="mb-1 flex items-center justify-between font-mono text-[9px] sm:text-[10px]">
            <span className="uppercase tracking-wider font-medium text-zinc-500 truncate">
              {product.categoryLabel}
            </span>
            <span className="hidden sm:inline-block text-zinc-500 bg-zinc-100 px-1.5 py-0.5 rounded border border-zinc-200">
              #{product.num}
            </span>
          </div>

          <h3 className="text-xs sm:text-sm font-semibold tracking-tight text-zinc-950 group-hover:text-zinc-700 transition-colors line-clamp-2 sm:line-clamp-1 leading-snug">
            <Link href={`/product/${product.id}`} className="hover:underline">
              {product.name}
            </Link>
          </h3>

          <p className="mt-1 hidden sm:line-clamp-2 text-xs text-zinc-600 leading-relaxed min-h-[2.25rem]">
            {product.tagline}
          </p>

          <div className="mt-2.5 hidden sm:flex flex-wrap gap-1">
            {product.techStack.slice(0, 2).map((tech) => (
              <span
                key={tech}
                className="rounded border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 font-mono text-[10px] text-zinc-600 truncate max-w-[140px]"
              >
                {tech}
              </span>
            ))}
            {product.techStack.length > 2 && (
              <span className="rounded border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 font-mono text-[10px] text-zinc-400">
                +{product.techStack.length - 2}
              </span>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-zinc-100 pt-2 sm:pt-3 flex items-center justify-between gap-1 mt-auto">
          <div className="flex items-baseline gap-1">
            <span className="text-xs sm:text-sm font-semibold text-zinc-950">
              {product.price === 0 ? 'Free' : product.formattedPrice}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => onOpenDetails(product)}
              className="hidden sm:inline-flex rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 px-2 py-1 text-[11px] font-medium text-zinc-700 transition cursor-pointer"
            >
              Specs
            </button>
            <Link
              href={`/product/${product.id}`}
              className="rounded-md sm:rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white px-2 py-1 sm:px-2.5 sm:py-1.5 text-[10px] sm:text-[11px] font-medium transition inline-flex items-center gap-1 whitespace-nowrap"
            >
              <span>{product.price === 0 ? 'Free' : 'Buy'}</span>
              <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
