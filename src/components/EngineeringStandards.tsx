import React from 'react';

export const EngineeringStandards: React.FC = () => {
  const standards = [
    {
      title: 'Compiler & Build Verified',
      code: 'npm run build → EXIT 0',
      description: 'Every Next.js 15, Vite, and Python application is compiled and type-checked against production targets with zero syntax warnings or broken exports.'
    },
    {
      title: 'Clean Source & Zero Telemetry',
      code: '100% UNMINIFIED SOURCE',
      description: 'Full uncompiled TypeScript and Python source code. Zero external tracking pixels, zero phone-home scripts, and zero vendor lock-in.'
    },
    {
      title: 'Commercial Operating Rights',
      code: 'UNLIMITED CLIENT USE',
      description: 'Every purchase includes perpetual commercial rights to ship unlimited client deliverables, freelance projects, and commercial software products.'
    },
    {
      title: 'Turnkey Quickstart Manuals',
      code: '00-USER-QUICKSTART.HTML',
      description: 'Every deliverable includes a standalone visual HTML user guide with copy-paste terminal commands, environment variable schemas, and troubleshooting FAQs.'
    }
  ];

  return (
    <section className="border-t border-slate-200 bg-slate-50/70 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
            Institutional Quality Assurance
          </div>
          <h2 className="mt-1 font-sans text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Engineering Standards & Technical Integrity
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
            We build software for serious developers and operators who value clean, maintainable architecture over fragile hype templates.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {standards.map((std, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div>
                <div className="inline-block rounded border border-slate-200 bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-800">
                  {std.code}
                </div>
                <h3 className="mt-3 font-sans text-sm font-bold text-slate-900">
                  {std.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {std.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
