import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsappFloating } from "@/components/whatsapp-floating";
import { siteConfig } from "@/data/site";
import { getSiteUrl } from "@/lib/seo";
import "./globals.css";

const sora = Sora({ subsets: ["latin", "latin-ext"], variable: "--font-sora", display: "swap" });
const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: { default: "Mobilă la comandă Focșani și Vrancea | EVEMARSERVICE", template: "%s | EVEMARSERVICE" },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  icons: { icon: "/brand/favicon.svg", apple: "/brand/icon-symbol.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f7f6f2" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    ...(siteUrl ? { "@id": `${siteUrl}/#business`, url: siteUrl } : {}),
    name: siteConfig.fullName,
    description: siteConfig.description,
    foundingDate: siteConfig.founded,
    telephone: siteConfig.phoneHref,
    email: siteConfig.email,
    image: siteUrl ? `${siteUrl}/images/landing-4k.jpg` : undefined,
    address: { "@type": "PostalAddress", addressLocality: "Răstoaca", addressRegion: "Vrancea", postalCode: siteConfig.postalCode, addressCountry: "RO" },
    areaServed: "Județul Vrancea și județele învecinate, în funcție de proiect",
    sameAs: [siteConfig.facebook, siteConfig.instagram],
  };

  return (
    <html lang="ro" className={sora.variable}>
      <body>
        <a className="skip-link" href="#main-content">Sari la conținut</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsappFloating />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
