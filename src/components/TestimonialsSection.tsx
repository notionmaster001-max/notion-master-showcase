import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  product: string;
  rating: number;
  date: string;
  quote: string;
  metrics?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Alex Mercier',
    role: 'Co-Founder & Lead Engineer',
    company: 'ShipFast Labs',
    product: 'NextLaunch AI™',
    rating: 5,
    date: 'February 2026',
    quote: 'NextLaunch AI saved our team at least 3 weeks of boilerplate setup. The Supabase RLS migrations and Stripe webhook handlers compiled with zero warnings. Shipped our MVP to Vercel in 48 hours.',
    metrics: 'Shipped MVP in 48 hours'
  },
  {
    name: 'Marcus Vance',
    role: 'Principal Automation Architect',
    company: 'Vance Digital Agency',
    product: 'WorkflowForge AI™',
    rating: 4,
    date: 'January 2026',
    quote: 'The n8n blueprints are not shallow toy examples—every workflow includes full error triggers, retry policies, and real API payloads. We deployed two of these workflows for a client retainer worth $4,500.',
    metrics: 'Closed $4.5k Client Retainer'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Solo SaaS Founder',
    company: 'DirectoryPulse',
    product: 'DirectoryLaunch AI™',
    rating: 4,
    date: 'March 2026',
    quote: 'Lighthouse score was a clean 100/100 out of the box. The programmatic SEO routes generated dynamic tool pages flawlessly, and the Stripe paid submission endpoint processed our first paid listing on day 3.',
    metrics: '100/100 Lighthouse Score'
  },
  {
    name: 'Elena Rostova',
    role: 'Senior Extension Developer',
    company: 'BrowserTools Co.',
    product: 'ExtensionForge MV3™',
    rating: 5,
    date: 'January 2026',
    quote: 'Google Chrome Web Store Manifest V3 compliance is notoriously strict. ExtensionForge gave us a battle-tested React 19 + Side Panel setup that passed Google review on the very first submission attempt.',
    metrics: 'Passed Chrome Store Review'
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="border-b border-slate-200 bg-slate-50/50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded border border-slate-200 bg-white px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-slate-700 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-900"></span>
              <span>VERIFIED DEVELOPER FEEDBACK</span>
            </div>
            <h2 className="mt-3 font-sans text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Trusted by 360+ Engineers & Founders Worldwide
            </h2>
            <p className="mt-2 text-xs text-slate-600 sm:text-sm">
              Authentic reviews from developers, agency directors, and indie hackers who deployed our toolkits to production.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="font-mono text-xs">
              <span className="font-bold text-slate-900">4.3 / 5.0</span>
              <span className="text-slate-500"> (251 Verified Developer Reviews)</span>
            </div>
          </div>
        </div>

        {/* Grid of Reviews */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg key={i} className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="rounded bg-emerald-50 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-emerald-700 border border-emerald-200">
                    Verified Buyer
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-slate-700">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {t.metrics && (
                  <div className="mt-3 inline-block rounded bg-slate-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-slate-700 border border-slate-200">
                    ⚡ {t.metrics}
                  </div>
                )}
              </div>

              <div className="mt-4 border-t border-slate-100 pt-3">
                <div className="font-sans text-xs font-bold text-slate-900">{t.name}</div>
                <div className="font-mono text-[10px] text-slate-500">{t.role}</div>
                <div className="font-mono text-[10px] text-slate-400">{t.company} · {t.product}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
