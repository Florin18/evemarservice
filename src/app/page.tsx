import Image from "next/image";
import Link from "next/link";
import { CategoryGrid } from "@/components/category-grid";
import { FeaturedGallery } from "@/components/featured-gallery";
import { Icon } from "@/components/icon";
import { ProcessSteps } from "@/components/process-steps";
import { Reveal } from "@/components/reveal";
import { ReviewsSection } from "@/components/reviews-section";
import { CTASection, SectionHeading, TextLink } from "@/components/ui";
import { benefits } from "@/data/site";

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero__image"><Image src="/images/landing-4k.jpg" alt="Bucătărie la comandă realizată de EVEMARSERVICE" fill priority sizes="100vw" quality={84} /></div>
        <div className="shell home-hero__content">
          <h1>Mobilă la comandă, creată pentru spațiul tău.</h1>
          <p>Transformăm ideile tale în mobilier personalizat. De la măsurători și proiectare 3D până la producție, transport și montaj, ne ocupăm de fiecare etapă.</p>
          <div className="button-row"><Link className="button" href="/solicita-oferta">Solicită o ofertă <Icon name="arrow" /></Link><Link className="button button--ghost" href="/portofoliu">Descoperă proiectele</Link></div>
        </div>
      </section>

      <section className="section intro-band"><div className="shell intro-band__grid"><div><h2>Proiectăm în jurul vieții tale, nu în jurul unor dimensiuni standard.</h2></div><div><p>Fiecare locuință are alte proporții, alte obiceiuri și alt buget. De aceea, pornim de la spațiul real și construim o soluție coerentă, funcțională și bine executată.</p><TextLink href="/despre-noi">Află mai multe despre EVEMARSERVICE</TextLink></div></div></section>

      <section className="section section--line"><div className="shell"><SectionHeading title="Pentru fiecare încăpere" text="Explorează lucrările reale EVEMARSERVICE, organizate după tipul de spațiu." /><CategoryGrid /><p className="category-note">Ai nevoie de alt tip de mobilier? Putem analiza și alte soluții personalizate, în funcție de proiect.</p></div></section>

      <Reveal><section className="section section--dark"><div className="shell"><div className="section-heading-row"><SectionHeading title="Lucrări recente, în detaliu" text="O selecție din portofoliul nostru, fără imagini stock sau randări prezentate drept lucrări realizate." /><TextLink href="/portofoliu">Vezi tot portofoliul</TextLink></div><FeaturedGallery /></div></section></Reveal>

      <section className="section"><div className="shell"><SectionHeading title="De ce EVEMARSERVICE" text="Un proces clar și o soluție adaptată, de la prima discuție până la montaj." /><div className="benefit-grid">{benefits.map((benefit) => <article key={benefit.title}><h3>{benefit.title}</h3><p>{benefit.text}</p></article>)}</div></div></section>

      <section className="section section--sage"><div className="shell process-home"><div className="process-home__intro"><SectionHeading title="De la idee la mobilier montat" text="Șase etape care țin proiectul coerent și ușor de urmărit." /><p>Termenul orientativ de execuție este de 4–6 săptămâni, în funcție de complexitatea proiectului. Mobilierul beneficiază de garanție 24 de luni.</p><TextLink href="/servicii">Descoperă procesul complet</TextLink></div><ProcessSteps compact /></div></section>

      <ReviewsSection />
      <CTASection />
    </div>
  );
}
