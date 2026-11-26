import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://notion-master-showcase-two.vercel.app"),
  title: "Notion Master Studio — Custom Notion Systems, n8n Automations & Web Engineering",
  description: "Productized Notion workspaces, n8n workflow automations, API integrations, and Next.js web builds for agencies, clinics, and indie operators.",
  keywords: ["custom notion system", "n8n workflow automation developer", "zapier to n8n migration", "gumroad airtable sync", "Next.js 16 boilerplate", "Notion CRM setup"],
  alternates: {
    canonical: "https://notion-master-showcase-two.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Notion Master Studio — Commercial Digital Assets",
    description: "Production-grade software boilerplates and operational toolkits.",
    url: "https://notion-master-showcase-two.vercel.app",
    siteName: "Notion Master Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://notion-master-showcase-two.vercel.app/products/26-ai-saas-pro.jpg",
        width: 1200,
        height: 630,
        alt: "Notion Master Studio — Institutional Software Boilerplates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notion Master Studio — Commercial Digital Assets",
    description: "Production-grade Next.js 16 boilerplates, n8n automation blueprints, and developer toolkits.",
    images: ["https://notion-master-showcase-two.vercel.app/products/26-ai-saas-pro.jpg"],
  },
  verification: {
    google: "googlea25a923901d92933",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-white text-slate-900">
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-slate-900 selection:text-white">
        {children}
        {/* Gumroad Official 1-Click Checkout Modal Overlay Script */}
        <Script src="https://gumroad.com/js/gumroad.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
