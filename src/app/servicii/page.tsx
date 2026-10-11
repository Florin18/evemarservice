import type { Metadata } from "next";
import Image from "next/image";
import { ProcessSteps } from "@/components/process-steps";
import { CTASection, PageIntro, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Servicii și proces de lucru", "Consultanță, măsurători, proiectare și randări 3D, producție proprie, transport și montaj pentru mobilier la comandă în Vrancea.", "/servicii");

export default function ServicesPage() {
  return <><PageIntro title="Un singur proces, de la măsurători la montaj." lead="Coordonăm fiecare etapă a proiectului, astfel încât soluția finală să respecte spațiul, nevoile și alegerile agreate." /><section className="section"><div className="shell service-layout"><div className="service-layout__image"><Image src="/images/portfolio/dressing/490652270_1249648887165583_7017335515888324529_n.jpg" alt="Detaliu de organizare într-un dressing realizat la comandă" fill sizes="(max-width: 850px) 100vw, 38vw" /></div><ProcessSteps /></div></section><section className="section section--sage"><div className="shell service-details"><SectionHeading title="Ce este inclus" text="Fiecare ofertă este personalizată după proiect; nu folosim prețuri standard sau estimări automate." /><div className="service-facts"><article><h3>Proiectare și randări 3D</h3><p>Vizualizezi configurația și stabilim împreună materialele, finisajele și soluțiile funcționale înainte de producție.</p></article><article><h3>Transport și montaj</h3><p>Sunt incluse în ofertele EVEMARSERVICE, pentru ca lucrarea să fie gestionată până la final.</p></article><article><h3>Termen orientativ</h3><p>4–6 săptămâni, în funcție de complexitatea proiectului. Termenul exact se stabilește pentru fiecare comandă.</p></article><article><h3>Garanție</h3><p>Mobilierul realizat beneficiază de garanție 24 de luni.</p></article></div></div></section><CTASection /></>;
}
