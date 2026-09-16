import type { Metadata } from "next";
import { Libre_Baskerville, Outfit } from "next/font/google";
import { ConceptNotice } from "@/components/ConceptNotice";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { business } from "@/lib/business";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-baskerville",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://excalibur-renovations.localsiteslab.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Bishop's Stortford renovations concept`,
    template: `%s | ${business.shortName}`,
  },
  description:
    "Local Sites Lab concept site for Excalibur Renovations Ltd — building, plumbing and heating in Bishop's Stortford. Independent redesign; not the official website.",
  robots: { index: false, follow: false },
  icons: { icon: "/images/favicon.png" },
  openGraph: {
    title: `${business.name} — Local Sites Lab concept`,
    description:
      "Independent concept website showcasing a clearer renovation brochure for Excalibur Renovations Ltd.",
    url: siteUrl,
    siteName: "Local Sites Lab",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${outfit.variable} ${baskerville.variable}`}>
      <body style={{ fontFamily: "var(--font-outfit), var(--font)" }}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ConceptNotice />
      </body>
    </html>
  );
}
