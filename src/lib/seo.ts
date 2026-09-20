import type { Metadata } from "next";

export const getSiteUrl = () => {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  return vercel ? `https://${vercel}` : undefined;
};

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const siteUrl = getSiteUrl();
  const canonical = siteUrl ? `${siteUrl}${path}` : undefined;
  return {
    title,
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      type: "website",
      locale: "ro_RO",
      title,
      description,
      url: canonical,
      siteName: "EVEMARSERVICE – Mobilă la comandă",
      images: siteUrl ? [{ url: `${siteUrl}/images/landing-4k.jpg`, width: 3840, height: 2160, alt: "Bucătărie realizată la comandă de EVEMARSERVICE" }] : undefined,
    },
    twitter: { card: "summary_large_image", title, description, images: siteUrl ? [`${siteUrl}/images/landing-4k.jpg`] : undefined },
  };
}
