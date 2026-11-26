import React from 'react';

export const EngineeringStandards: React.FC = () => {
  const standards = [
    {
      title: 'Production-Verified Builds',
      code: 'STRICT COMPILER & RUNTIME CHECKS',
      description:
        'Custom builds and TypeScript apps are verified cleanly against real inputs, edge cases, and build checks before handoff.',
    },
    {
      title: 'Zero Vendor Lock-In',
      code: 'FULL SOURCE & WORKFLOW OWNERSHIP',
      description:
        'Every n8n JSON workflow, Notion database, and Next.js codebase stays 100% under your own accounts with zero hidden telemetry.',
    },
    {
      title: 'Explicit Error Handling',
      code: 'RETRIES, LOGGING & ALERTS',
      description:
        'Automations include failure notifications, pagination handling, and clean validation instead of fragile happy-path scripts.',
    },
    {
      title: 'Loom + Written Handover',
      code: 'DOCUMENTED SETUP GUIDES',
      description:
        'Every delivery ships with clear setup instructions and a short walkthrough video so your team can operate it independently.',
    },
  ];

  return (
    <section className="border-t border-zinc-200 bg-zinc-50/70 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-500">
            Delivery Standards
          </div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">
            Built to keep running after handoff.
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            Whether we set up a custom client automation or you deploy one of our toolkits, reliability comes before shortcuts.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {standards.map((std, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5"
            >
              <div>
                <div className="inline-block rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-mono text-[10px] text-zinc-700">
                  {std.code}
                </div>
                <h3 className="mt-3 text-sm font-semibold text-zinc-950">{std.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-600">{std.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
