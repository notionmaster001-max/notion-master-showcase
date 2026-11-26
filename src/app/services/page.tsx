'use client';

import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Header } from '../../components/Header';
import { ServicesSection } from '../../components/ServicesSection';
import { VerifiedWorkSection } from '../../components/VerifiedWorkSection';
import { InquirySection } from '../../components/InquirySection';
import { FAQSection } from '../../components/FAQSection';
import { Footer } from '../../components/Footer';

export default function ServicesPage() {
  const [selectedTier, setSelectedTier] = useState<string>('Full Custom System Setup ($175)');

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <Header />

      <main>
        <div className="border-b border-zinc-200 bg-white py-10 sm:py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-950 transition"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Studio Home</span>
            </Link>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Custom Automation &amp; Systems Services
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600">
              Clear, fixed-price engineering scopes for Notion operating systems, n8n workflows, API pipelines, and Next.js deployments.
            </p>
          </div>
        </div>

        <ServicesSection onSelectTier={setSelectedTier} />
        <VerifiedWorkSection />
        <InquirySection preselectedTier={selectedTier} />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
