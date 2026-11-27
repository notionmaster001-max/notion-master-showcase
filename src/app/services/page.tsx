import React from 'react';
import { Metadata } from 'next';
import { Header } from '../../components/Header';
import { ServicesClient } from '../../components/ServicesClient';
import { Footer } from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Custom Notion CRM, n8n Workflows & Automation Services — Notion Master Studio',
  description:
    'Fixed-scope Notion Business OS setups ($175), n8n webhook & API workflow fixes ($65), Zapier-to-n8n migrations, and monthly automation retainers ($350/mo).',
  keywords: [
    'hire n8n developer',
    'custom notion crm setup',
    'zapier to n8n migration service',
    'n8n webhook fix',
    'notion workspace consultant',
    'ai workflow automation service',
  ],
  alternates: {
    canonical: 'https://notion-master-showcase-two.vercel.app/services',
  },
  openGraph: {
    title: 'Custom Notion Systems & n8n Automation Services — Notion Master Studio',
    description:
      'Fixed-scope builds starting at $65 Starter Fix (48h) and $175 Custom System Setup.',
    url: 'https://notion-master-showcase-two.vercel.app/services',
    siteName: 'Notion Master Studio',
    type: 'website',
  },
};

export default function ServicesPage() {
  const jsonLdService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Notion Systems & n8n Workflow Engineering Services',
    serviceType: 'Workflow Automation & Custom Workspace Development',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Notion Master Studio',
      url: 'https://notion-master-showcase-two.vercel.app',
      email: 'notionmaster001@gmail.com',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Productized Automation Packages',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Starter Audit & Workflow Fix',
          price: '65',
          priceCurrency: 'USD',
          url: 'https://notion-master-showcase-two.vercel.app/services',
        },
        {
          '@type': 'Offer',
          name: 'Full Custom System Setup',
          price: '175',
          priceCurrency: 'USD',
          url: 'https://notion-master-showcase-two.vercel.app/services',
        },
        {
          '@type': 'Offer',
          name: 'Ongoing Automation Partner',
          price: '350',
          priceCurrency: 'USD',
          url: 'https://notion-master-showcase-two.vercel.app/services',
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <Header />
      <ServicesClient />
      <Footer />
    </div>
  );
}
