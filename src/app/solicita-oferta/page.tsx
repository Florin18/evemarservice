import type { Metadata } from "next";
import { OfferForm } from "@/components/offer-form";
import { PageIntro } from "@/components/ui";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Solicită o ofertă", "Descrie proiectul tău de mobilier la comandă și continuă conversația cu EVEMARSERVICE prin WhatsApp.", "/solicita-oferta");

export default function OfferPage() {
  return <><PageIntro title="Spune-ne ce vrei să construim pentru tine." lead="Completează informațiile de bază, iar noi pregătim un mesaj clar pentru WhatsApp. Nu calculăm automat prețuri; fiecare ofertă ține cont de proiectul real." /><section className="section section--offer"><div className="shell offer-layout"><div><OfferForm /></div><aside className="offer-aside"><h2>Ce se întâmplă apoi?</h2><ol><li><span>1</span><p>Se deschide conversația WhatsApp cu datele completate.</p></li><li><span>2</span><p>Verifici mesajul și îl trimiți personal.</p></li><li><span>3</span><p>Discutăm proiectul și stabilim pașii următori.</p></li></ol><div><p>Preferi să discutăm direct?</p><a href={`tel:${siteConfig.phoneHref}`}>Sună la {siteConfig.phoneDisplay}</a></div></aside></div></section></>;
}
