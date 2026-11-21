import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://notion-master-showcase-two.vercel.app"),
  title: "Notion Master Studio — Institutional Software Boilerplates & Digital Assets",
  description: "Production-grade Next.js 15 boilerplates, n8n automation blueprints, Chrome MV3 extensions, and high-ticket client acquisition systems for developers and agency founders.",
  keywords: ["Next.js 15 boilerplate", "AI SaaS starter", "Chrome Extension MV3", "n8n automation blueprints", "Python lead scraper", "Client contracts"],
  alternates: {
    canonical: "https://notion-master-showcase-two.vercel.app",
  },
  openGraph: {
    title: "Notion Master Studio — Commercial Digital Assets",
    description: "Production-grade software boilerplates and operational toolkits.",
    url: "https://notion-master-showcase-two.vercel.app",
    siteName: "Notion Master Studio",
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "googlea25a923901d92933",
  },
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
