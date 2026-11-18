import React from 'react';
import { CategoryFilter } from '../types';

interface CategoryFiltersProps {
  activeCategory: CategoryFilter;
  onSelectCategory: (category: CategoryFilter) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  counts: Record<CategoryFilter, number>;
}

export const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  counts,
}) => {
  const tabs: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: 'All Products' },
    { key: 'gaming', label: 'GTA 6 & Creator Suite' },
    { key: 'saas', label: 'Full-Stack SaaS' },
    { key: 'automation', label: 'AI & Automations' },
    { key: 'agency', label: 'Operations & Legal' },
    { key: 'growth', label: 'Lead Generation' },
    { key: 'bundle', label: 'Flagship Bundle' },
  ];

  return (
    <div className="space-y-4">
      {/* Search Input & Metric Bar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search boilerplates, GTA 6 tools, OBS overlays, Next.js, n8n, Stripe..."
            className="w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 placeholder-slate-400 shadow-sm transition focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-xs text-slate-400 hover:text-slate-600"
            >
              Clear
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <span>Showing <strong className="text-slate-900 font-semibold">{counts[activeCategory]}</strong> systems</span>
          <span>·</span>
          <span>Instant Download</span>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-1.5 border-b border-slate-200 pb-3">
        {tabs.map((tab) => {
          const isActive = activeCategory === tab.key;
          const count = counts[tab.key];
          return (
            <button
              key={tab.key}
              onClick={() => onSelectCategory(tab.key)}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition ${
                isActive
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`rounded px-1.5 py-0.2 font-mono text-[10px] ${
                  isActive
                    ? 'bg-slate-800 text-slate-200'
                    : 'bg-slate-100 text-slate-600 border border-slate-200'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
