import React from 'react';
import { Metadata } from 'next';
import { Header } from '../../components/Header';
import { CalculatorClient } from '../../components/CalculatorClient';
import { Footer } from '../../components/Footer';

export const metadata: Metadata = {
  title: 'AI Coding Cost & Token Waste Calculator — Notion Master Studio',
  description:
    'Estimate your monthly Claude Code, Cursor, OpenAI, and DeepSeek API spend. Calculate prompt caching savings and recoverable token waste.',
  keywords: [
    'ai token cost calculator',
    'claude code billing calculator',
    'cursor api token estimator',
    'llm prompt caching savings',
  ],
  alternates: {
    canonical: 'https://notion-master-showcase-two.vercel.app/calculator',
  },
  openGraph: {
    title: 'AI Coding Cost & Token Waste Calculator — Notion Master Studio',
    description:
      'Interactive simulator to detect uncached LLM prompt bloat and calculate monthly API savings.',
    url: 'https://notion-master-showcase-two.vercel.app/calculator',
    siteName: 'Notion Master Studio',
    type: 'website',
  },
};

export default function AiCostCalculatorPage() {
  const jsonLdApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AI Coding Cost & Token Waste Calculator',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    url: 'https://notion-master-showcase-two.vercel.app/calculator',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }}
      />
      <Header />
      <CalculatorClient />
      <Footer />
    </div>
  );
}
