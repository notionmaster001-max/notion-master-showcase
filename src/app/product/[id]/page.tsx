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

  const baseUrl = 'https://notion-master-showcase.vercel.app';
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

  const baseUrl = 'https://notion-master-showcase.vercel.app';
  const pageUrl = `${baseUrl}/product/${product.id}`;

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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating.toFixed(1),
      reviewCount: product.reviewsCount,
      bestRating: '5',
      worstRating: '1',
    },
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
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover object-top"
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
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                {product.tagline}
              </p>

              {/* Individual Realistic Star Rating Bar */}
              <div className="mt-3 flex items-center gap-2 border-b border-slate-100 pb-4">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-mono text-xs font-bold text-slate-900">
                  {product.rating.toFixed(1)} / 5.0
                </span>
                <span className="font-mono text-[11px] text-slate-500">
                  ({product.reviewsCount} verified developer reviews)
                </span>
              </div>

              {/* Price Banner */}
              <div className="my-5 flex items-baseline justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-sans text-3xl font-extrabold text-slate-900">
                      {product.formattedPrice}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-500">USD</span>
                    {product.originalValue && (
                      <span className="text-sm text-slate-400 line-through">
                        {product.originalValue}
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-[11px] text-slate-500 mt-0.5">
                    One-time payment · Perpetual commercial rights
                  </p>
                </div>
                <span className="rounded bg-emerald-50 px-2 py-1 font-mono text-[10px] font-semibold text-emerald-700 border border-emerald-200">
                  Instant Download
                </span>
              </div>

              {/* Direct Gumroad 1-Click Purchase Button */}
              <a
                href={product.gumroadUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-gumroad-single-product="true"
                className="gumroad-button flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 px-4 text-xs font-bold text-white shadow-md hover:bg-slate-800 transition"
              >
                <span>Instant Checkout on Gumroad ({product.formattedPrice})</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

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
      </main>

      <Footer />
    </div>
  );
}
