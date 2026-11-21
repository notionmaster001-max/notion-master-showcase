export interface Product {
  id: string;
  num: string;
  name: string;
  tagline: string;
  category: 'saas' | 'automation' | 'agency' | 'bundle' | 'growth' | 'gaming';
  categoryLabel: string;
  price: number;
  formattedPrice: string;
  originalValue?: string;
  discountPrice?: string;
  gumroadUrl: string;
  image: string;
  galleryImages?: string[];
  version: string;
  techStack: string[];
  deliverables: string[];
  description: string;
  highlights: string[];
  systemRequirements: string[];
  gumroadId: string;
  folder: string;
  badge?: string;
  rating: number;
  reviewsCount: number;
  liveDemoUrl?: string;
  metaTitle?: string;
  metaDescription?: string;
  seoKeywords?: string[];
  faqs?: { question: string; answer: string }[];
}

export type CategoryFilter = 'all' | 'saas' | 'automation' | 'agency' | 'growth' | 'bundle' | 'gaming';

export type LegalDocType = 'terms' | 'privacy' | 'license' | 'refund';
