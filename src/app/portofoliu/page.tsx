import type { Metadata } from "next";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { CTASection, PageIntro } from "@/components/ui";
import { categories, type CategorySlug } from "@/data/portfolio";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Portofoliu mobilier la comandă", "Fotografii reale cu bucătării, dressinguri, mobilier de living, baie, hol, dormitor și spații comerciale realizate de EVEMARSERVICE.", "/portofoliu");

export default async function PortfolioPage({ searchParams }: { searchParams: Promise<{ categorie?: string }> }) {
  const { categorie } = await searchParams;
  const valid = categories.some((item) => item.slug === categorie);
  const initialFilter = valid ? categorie as CategorySlug : "toate";
  return <><PageIntro title="Portofoliu" lead="Lucrări reale EVEMARSERVICE, fotografiate după execuție. Filtrează după încăpere și deschide imaginile pentru a vedea mobilierul în detaliu." /><section className="section section--portfolio"><div className="shell"><PortfolioGallery initialFilter={initialFilter} /></div></section><CTASection title="Ți-ai găsit inspirația?" /></>;
}
