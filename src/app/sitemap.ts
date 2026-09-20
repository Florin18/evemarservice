import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";

const routes = ["", "/portofoliu", "/servicii", "/despre-noi", "/solicita-oferta", "/contact", "/confidentialitate", "/cookie-uri"];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  if (!siteUrl) return [];
  return routes.map((route) => ({ url: `${siteUrl}${route}`, changeFrequency: route === "/portofoliu" ? "monthly" : "yearly", priority: route === "" ? 1 : route === "/portofoliu" ? 0.9 : 0.7 }));
}
