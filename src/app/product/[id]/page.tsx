import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '../../../data/products';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return {
      title: 'Product Not Found — Notion Master Studio',
    };
  }

  const baseUrl = 'https://notion-master-showcase-two.vercel.app';
  const url = `${baseUrl}/product/${product.id}`;
  const title = product.metaTitle || `${product.name} — Commercial Software Toolkit`;
  const description = product.metaDescription || product.tagline;

  return {
    title,
    description,
    keywords: product.seoKeywords || [product.name, 'software boilerplate', 'Next.js 15', 'Gumroad template'],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Notion Master Studio',
      images: [
        {
          url: `${baseUrl}${product.image}`,
          width: 1200,
          height: 675,
          alt: product.name,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}${product.image}`],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const baseUrl = 'https://notion-master-showcase-two.vercel.app';
  const pageUrl = `${baseUrl}/product/${product.id}`;

  // Cross-linking: 3 related or complementary digital assets
  const sameCategory = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category);
  const otherProducts = PRODUCTS.filter((p) => p.id !== product.id && p.category !== product.category);
  const relatedProducts = [...sameCategory, ...otherProducts].slice(0, 3);

  // Structured Data (JSON-LD) for Google Rich Snippets
  const jsonLdProduct = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    description: product.description,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'All (Node.js, Web, Python, Cloud)',
    image: `${baseUrl}${product.image}`,
    url: pageUrl,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: product.gumroadUrl,
      seller: {
        '@type': 'Organization',
        name: 'Notion Master Studio',
      },
    },
  };

  const jsonLdFaq = product.faqs && product.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: product.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  const jsonLdBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Catalog',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: product.name,
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Google Structured Data Script Tags */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />
      {jsonLdFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />

      <Header />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 font-mono text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition">
            Catalog Home
          </Link>
          <span>/</span>
          <span className="text-slate-400">{product.categoryLabel}</span>
          <span>/</span>
          <span className="font-semibold text-slate-900">{product.name}</span>
        </nav>

        {/* Hero Product Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Image & Media */}
          <div className="lg:col-span-7">
            <div className="relative aspect-square w-full max-w-xl mx-auto overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 650px"
              />
              {product.badge && (
                <div className="absolute top-3 left-3">
                  <span className="rounded border border-slate-900 bg-slate-900 px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wider text-white shadow-sm">
                    {product.badge}
                  </span>
                </div>
              )}
              <div className="absolute top-3 right-3">
                <span className="rounded border border-slate-200 bg-white/95 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
                  {product.version}
                </span>
              </div>
            </div>

            {/* Interactive Live Demo Player (Try Before You Buy) */}
            {product.liveDemoUrl && (
              <div className="mt-6 rounded-xl border border-cyan-500/30 bg-slate-950 p-5 shadow-lg">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 animate-ping" />
                    <div>
                      <h3 className="font-sans text-sm font-bold text-white flex items-center gap-2">
                        <span>Interactive System Sandbox</span>
                        <span className="rounded bg-cyan-500/20 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-cyan-300 border border-cyan-500/30">
                          TRY BEFORE YOU BUY
                        </span>
                      </h3>
                      <p className="font-mono text-[11px] text-slate-400">
                        Zero setup required • Interactive browser demo
                      </p>
                    </div>
                  </div>
                  <a
                    href={product.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded bg-cyan-400 px-3 py-1 font-mono text-xs font-bold text-slate-950 hover:bg-cyan-300 transition shadow-sm"
                  >
                    <span>Open Fullscreen ↗</span>
                  </a>
                </div>
                <div className="relative h-[480px] w-full overflow-hidden rounded-lg border border-slate-800 bg-slate-900 shadow-inner">
                  <iframe
                    src={product.liveDemoUrl}
                    title={`${product.name} Live Demo`}
                    className="h-full w-full border-0"
                    allow="autoplay"
                  />
                </div>
                <p className="mt-2.5 text-center font-mono text-[11px] text-slate-400">
                  ⚡ Fully functional starter edition. Upgrade to the complete commercial suite on Gumroad for 100% features.
                </p>
              </div>
            )}

            {/* Flagship Bundle Upsell & Urgency Banner (Recommendation 2) */}
            {product.category === 'gaming' && product.id !== 'vice-city-master-vault' && (
              <div className="mt-6 rounded-xl border border-pink-500/40 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-5 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-pink-500/20 to-transparent w-48 h-full pointer-events-none" />
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="rounded bg-pink-500/20 border border-pink-500/40 px-2 py-0.5 font-mono text-[10px] font-bold text-pink-300 uppercase tracking-wider">
                        🔥 55% OFF Flagship Bundle
                      </span>
                      <span className="font-mono text-xs text-amber-400 font-bold">
                        Save $58.95
                      </span>
                    </div>
                    <h3 className="font-sans text-base font-black text-white">
                      Want All 5 GTA 6 Creator &amp; Streaming Tools?
                    </h3>
                    <p className="mt-1 text-xs text-slate-300 leading-relaxed max-w-xl">
                      Get this system PLUS the Soundboard, Neon Studio, Sync Metronome &amp; Twitch Heist Minigame in the <strong>Vice City Master Vault™</strong> for just <strong>$49.00</strong> (Total value: $107.95).
                    </p>
                  </div>
                  <div className="shrink-0 w-full sm:w-auto">
                    <a
                      href="https://notionmaster001.gumroad.com/l/kwhfsp/LAUNCH20"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-gumroad-single-product="true"
                      className="gumroad-button flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 px-4 py-2.5 text-xs font-bold text-white shadow-md hover:brightness-110 transition w-full sm:w-auto"
                    >
                      <span>Get All 5 in Master Vault ($39.20 with LAUNCH20)</span>
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Master Vault Showcase Header (When viewing the 5-in-1 Vault itself) */}
            {product.id === 'vice-city-master-vault' && (
              <div className="mt-6 rounded-xl border border-pink-500/40 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-5 shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="rounded bg-emerald-500/20 border border-emerald-500/40 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-300 uppercase tracking-wider">
                    ⚡ 5-IN-1 COMPLETE SUITE
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    Individual Total: $107.95 · <strong>You Pay: $49.00 (55% OFF)</strong>
                  </span>
                </div>
                <h3 className="font-sans text-base font-bold text-white mb-2">
                  Includes All 5 Standalone Commercial Systems:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2 bg-slate-900/60 p-2 rounded border border-slate-800">
                    <span className="text-pink-400">✓</span> 🌴 Vice City 100% Master Companion ($14.99)
                  </div>
                  <div className="flex items-center gap-2 bg-slate-900/60 p-2 rounded border border-slate-800">
                    <span className="text-pink-400">✓</span> 🚨 StreamShield Vice Soundboard ($24.99)
                  </div>
                  <div className="flex items-center gap-2 bg-slate-900/60 p-2 rounded border border-slate-800">
                    <span className="text-pink-400">✓</span> 📹 ViceStream Neon Studio Overlays ($19.99)
                  </div>
                  <div className="flex items-center gap-2 bg-slate-900/60 p-2 rounded border border-slate-800">
                    <span className="text-pink-400">✓</span> ⏱️ ConsoleStream Pro Sync Tools ($19.99)
                  </div>
                  <div className="col-span-1 sm:col-span-2 flex items-center gap-2 bg-slate-900/60 p-2 rounded border border-slate-800">
                    <span className="text-pink-400">✓</span> 🏦 ChatHeist Live Twitch Minigame ($27.99) + Master License
                  </div>
                </div>
              </div>
            )}

            {/* Description & Overview */}
            <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="font-sans text-lg font-bold text-slate-900 mb-3">
                System Overview & Engineering Architecture
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 mb-6">
                {product.description}
              </p>

              {/* Highlights Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-slate-100">
                {product.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 rounded border border-slate-100 bg-slate-50/60 p-3">
                    <span className="text-emerald-600 font-bold text-xs mt-0.5">✓</span>
                    <span className="text-xs text-slate-700 font-sans">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Deliverables Manifest */}
            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-sans text-lg font-bold text-slate-900">
                  Verified Deliverables Manifest
                </h2>
                <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-xs text-slate-600">
                  {product.deliverables.length} Verified Files
                </span>
              </div>
              <ul className="space-y-2.5">
                {product.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50/60 p-3.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-slate-900 text-[10px] font-mono font-bold text-white mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-sans text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SEO & Technical FAQ Section */}
            {product.faqs && product.faqs.length > 0 && (
              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
                <h2 className="font-sans text-lg font-bold text-slate-900 mb-4">
                  Frequently Asked Questions (Technical & Licensing)
                </h2>
                <div className="space-y-4">
                  {product.faqs.map((faq, idx) => (
                    <div key={idx} className="rounded-lg border border-slate-100 bg-slate-50/70 p-4">
                      <h3 className="font-sans text-xs font-bold text-slate-900">
                        Q: {faq.question}
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                        A: {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Pricing, Checkout & System Specs Card */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-8">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between font-mono text-[11px] text-slate-500 mb-2">
                <span className="uppercase tracking-wider">{product.categoryLabel}</span>
                <span>SYSTEM #{product.num}</span>
              </div>

              <h1 className="font-sans text-2xl font-bold tracking-tight text-slate-900">
                {product.name}
              </h1>
              <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
                {product.tagline}
              </p>

              {/* Technical Spec Pill */}
              <div className="mt-3 flex flex-wrap items-center gap-2 border-b border-zinc-100 pb-4">
                <span className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 font-mono text-[11px] text-zinc-700">
                  {product.version}
                </span>
                <span className="font-mono text-[11px] text-zinc-500">
                  Commercial License Included
                </span>
              </div>

              {/* Price Banner */}
              <div className="my-5 flex items-baseline justify-between">
                <div>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-sans text-3xl font-semibold text-zinc-950">
                      {product.price === 0 ? 'Free' : product.formattedPrice}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                      {product.price === 0 ? 'MIT / Open Access' : 'USD · One-time'}
                    </span>
                  </div>
                </div>
                <span className="rounded-md bg-zinc-100 px-2.5 py-1 font-mono text-[10px] font-medium text-zinc-700 border border-zinc-200">
                  Instant Access
                </span>
              </div>

              {/* Direct Gumroad Checkout Button */}
              <a
                href={product.gumroadUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-gumroad-single-product="true"
                className="gumroad-button flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 py-3.5 px-4 text-xs font-medium text-white shadow-xs hover:bg-zinc-800 transition"
              >
                <span>
                  {product.price === 0
                    ? 'Download Free ($0)'
                    : `Get Source & Guide (${product.formattedPrice})`}
                </span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <Link
                href="/#hire"
                className="mt-2.5 flex w-full items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 py-2.5 px-4 text-xs font-medium text-zinc-800 hover:bg-zinc-100 transition"
              >
                Need custom setup for your team? ($65–$175) →
              </Link>

              {/* Institutional Guarantees */}
              <div className="mt-5 space-y-2 pt-4 border-t border-slate-100 text-xs font-mono text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Exit Code 0 Compiler Verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Unlimited Personal &amp; Client Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Zero Injected Telemetry or Trackers</span>
                </div>
              </div>
            </div>

            {/* Tech Stack Pills Card */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5">
              <h3 className="font-mono text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-2.5">
                Production Tech Stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {product.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded border border-slate-200 bg-white px-2.5 py-1 font-mono text-xs text-slate-700 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* System Requirements Card */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5">
              <h3 className="font-mono text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-2.5">
                Prerequisites &amp; Environment
              </h3>
              <div className="space-y-1.5 font-mono text-xs text-slate-600">
                {product.systemRequirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-slate-400">›</span>
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products & Internal Link Graph (Boosts Googlebot Crawl Depth & SEO) */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  Related Software Toolkits &amp; Boilerplates
                </h2>
                <p className="mt-1 font-mono text-xs text-slate-500">
                  Production assets frequently engineered together by founders and developers.
                </p>
              </div>
              <Link
                href="/"
                className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-slate-700 hover:text-slate-900 transition"
              >
                <span>View All 26 Assets</span>
                <span>→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/product/${rel.id}`}
                  className="group relative flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-slate-400 hover:shadow-md transition"
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-slate-100 border border-slate-100 mb-3">
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {rel.badge && (
                      <span className="absolute top-2 left-2 rounded bg-slate-900/90 px-2 py-0.5 font-mono text-[10px] font-semibold text-white backdrop-blur">
                        {rel.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-mono text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      {rel.categoryLabel}
                    </span>
                    <span className="font-mono text-xs font-bold text-slate-900">
                      {rel.discountPrice || rel.formattedPrice}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-pink-600 transition line-clamp-1">
                    {rel.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-slate-500 line-clamp-2">
                    {rel.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
