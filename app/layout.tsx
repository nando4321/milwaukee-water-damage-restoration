import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HotlineWidget } from "@/components/HotlineWidget";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Water Damage Restoration in Milwaukee | Milwaukee Water Damage Restoration",
    template: `%s | ${site.name}`,
  },
  description:
    "Water damage restoration, mold remediation, and rebuilding for homes and businesses in Milwaukee County and Waukesha County. 24/7 emergency requests via form. Phone coming soon.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Greater Milwaukee’s water damage restoration team",
    description:
      "Extraction, drying, water-related mold remediation, and rebuilds across Milwaukee County and Waukesha County.",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: site.name }],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-charcoal">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <HotlineWidget />
      </body>
    </html>
  );
}
