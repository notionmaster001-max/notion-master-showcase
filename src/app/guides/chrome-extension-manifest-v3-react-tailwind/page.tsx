import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';

export const metadata: Metadata = {
  title: 'How to Build and Monetize a Chrome Extension with Manifest V3, React 19 & Tailwind — Notion Master Studio',
  description: 'Production guide on building Chrome extensions in 2026: Manifest V3 background service workers, content script messaging, and Gumroad license key monetization.',
  keywords: [
    'chrome extension manifest v3 boilerplate',
    'react 19 chrome extension template',
    'tailwind css chrome extension',
    'chrome extension monetization gumroad',
    'chrome extension background service worker messaging',
  ],
  alternates: {
    canonical: 'https://notion-master-showcase-two.vercel.app/guides/chrome-extension-manifest-v3-react-tailwind',
  },
  openGraph: {
    title: 'How to Build and Monetize a Chrome Extension with Manifest V3, React 19 & Tailwind',
    description: 'Complete architecture guide: Manifest V3 service workers, isolated content scripts, and monetization.',
    url: 'https://notion-master-showcase-two.vercel.app/guides/chrome-extension-manifest-v3-react-tailwind',
    siteName: 'Notion Master Studio',
    type: 'article',
  },
};

export default function ChromeExtensionMv3Guide() {
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'How to Build and Monetize a Chrome Extension with Manifest V3, React 19 & Tailwind',
    url: 'https://notion-master-showcase-two.vercel.app/guides/chrome-extension-manifest-v3-react-tailwind',
    description: 'Building and monetizing production Chrome extensions under Manifest V3 specifications.',
    author: {
      '@type': 'Organization',
      name: 'Notion Master Studio',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Notion Master Studio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://notion-master-showcase-two.vercel.app/apple-touch-icon.png',
      },
    },
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />

      <Header />

      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <nav className="mb-6 flex items-center gap-2 font-mono text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition">
            Home
          </Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-slate-900 transition">
            Guides
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold truncate">Chrome Extension MV3</span>
        </nav>

        <header className="mb-10">
          <div className="inline-flex items-center gap-2 rounded bg-amber-50 border border-amber-200 px-2.5 py-1 font-mono text-xs text-amber-800 font-semibold mb-3">
            <span>Chrome Web Store 2026 Compliant · React 19 · Vite</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            How to Build and Monetize a Chrome Extension with Manifest V3, React 19 &amp; Tailwind
          </h1>
          <p className="mt-4 font-mono text-sm sm:text-base text-slate-600 leading-relaxed">
            Architecting modern browser extensions: background service worker message brokers, non-destructive DOM injection, and recurring revenue license validation.
          </p>
        </header>

        <div className="prose prose-slate max-w-none font-sans text-slate-800 leading-relaxed space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              1. The Manifest V3 Shift: Ephemeral Service Workers
            </h2>
            <p>
              Under Manifest V3, background pages no longer remain persistently alive in memory. They are replaced by <em>ephemeral service workers</em> that terminate after 30 seconds of inactivity:
            </p>
            <div className="rounded-xl bg-slate-900 p-5 font-mono text-xs text-slate-200 overflow-x-auto">
              <pre>{`// background.ts - Safe State Persistence
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'VALIDATE_LICENSE') {
    // Read cached state from chrome.storage.local
    chrome.storage.local.get(['licenseKey', 'isPro'], (result) => {
      sendResponse({ isPro: result.isPro });
    });
    return true; // Keep message channel open for async response
  }
});`}</pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              2. Turnkey Monetization with Gumroad License API
            </h2>
            <p>
              Instead of building complex custom billing servers, you can validate customer license keys directly via Gumroad&apos;s cryptographic verification endpoint:
            </p>
            <div className="rounded-xl bg-slate-900 p-5 font-mono text-xs text-slate-200 overflow-x-auto">
              <pre>{`async function verifyGumroadLicense(licenseKey: string, permalink: string) {
  const response = await fetch('https://api.gumroad.com/v2/licenses/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      product_permalink: permalink,
      license_key: licenseKey,
    }),
  });
  const data = await response.json();
  return data.success && !data.purchase.refunded;
}`}</pre>
            </div>
          </section>

          {/* ExtensionForge CTA */}
          <section className="mt-12 rounded-2xl border-2 border-amber-500 bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <span className="rounded bg-amber-500/20 border border-amber-500/40 px-2 py-0.5 font-mono text-[11px] font-bold text-amber-300">
                  Turnkey Extension Boilerplate
                </span>
                <h3 className="mt-2 text-2xl font-black text-white">
                  Get ExtensionForge MV3™
                </h3>
                <p className="mt-1 font-mono text-xs text-slate-300 max-w-xl">
                  Launch in 48 hours. Pre-configured with Manifest V3, React 19, Tailwind CSS, Options page, Content script injection, and turnkey Gumroad license monetization.
                </p>
                <div className="mt-3 flex items-baseline gap-2 font-mono">
                  <span className="text-2xl font-black text-amber-400">$39.20</span>
                  <span className="text-xs text-slate-400 line-through">$149.00</span>
                  <span className="text-xs text-emerald-400 font-semibold">🎉 Code LAUNCH20 auto-applied</span>
                </div>
              </div>
              <a
                href="https://notionmaster001.gumroad.com/l/extensionforge-mv3/LAUNCH20"
                target="_blank"
                rel="noopener noreferrer"
                data-gumroad-single-product="true"
                className="gumroad-button inline-flex items-center justify-center gap-2 rounded-lg bg-amber-600 px-6 py-3.5 font-mono text-xs font-bold text-white shadow-lg hover:bg-amber-500 transition whitespace-nowrap"
              >
                <span>Instant Download on Gumroad</span>
                <span>→</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
