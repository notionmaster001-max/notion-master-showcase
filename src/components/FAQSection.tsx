import React, { useState } from 'react';

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      q: 'Can I use these boilerplates and assets for paying client projects?',
      a: 'Yes, absolutely. Every product includes a perpetual, non-exclusive Commercial License allowing you to build and ship unlimited commercial projects, client deliverables, and freelance work without royalties.'
    },
    {
      q: 'How does digital delivery work after checkout?',
      a: 'Delivery is immediate. Upon completing checkout on Gumroad (via Credit Card, Apple Pay, Google Pay, or PayPal), you will be redirected to the instant download dashboard and receive an email with your permanent archive link.'
    },
    {
      q: 'Are updates included if underlying libraries update?',
      a: 'Yes. When we release version updates, framework patches (e.g. Next.js releases), or additional prompt modules, you receive free updates automatically through your Gumroad library.'
    },
    {
      q: 'What is your refund policy?',
      a: 'Due to the immediate-access, irrevocable digital nature of downloadable software source code, proprietary prompt repositories, and legal contract agreements, all sales are 100% final and non-refundable. Please review technical specifications and requirements prior to purchase.'
    },
    {
      q: 'What prerequisites do I need to run these repositories?',
      a: 'Requirements vary by product. For NextLaunch AI and DirectoryLaunch AI, you need Node.js 18+ and a free Supabase account. For ScrapeForge AI, you need Python 3.10+. ExtensionForge requires Google Chrome. Complete prerequisites are outlined in each specification dossier.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="border-t border-slate-200 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
            Commercial Inquiries & Support
          </div>
          <h2 className="mt-1 font-sans text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-xs text-slate-600 sm:text-sm">
            Everything you need to know about licensing, technical delivery, and support.
          </p>
        </div>

        <div className="mt-8 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="p-4 sm:p-5">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-sans text-xs font-semibold text-slate-900 sm:text-sm">
                    {faq.q}
                  </span>
                  <span className="ml-4 shrink-0 text-slate-500">
                    <svg
                      className={`h-4 w-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
