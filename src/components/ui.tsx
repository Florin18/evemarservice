import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./icon";

export function SectionHeading({ title, text, centered = false }: { title: string; text?: string; centered?: boolean }) {
  return <div className={`section-heading${centered ? " section-heading--centered" : ""}`}><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link className="text-link" href={href}>{children}<Icon name="arrow" /></Link>;
}

export function PageIntro({ title, lead, children }: { title: string; lead: string; children?: ReactNode }) {
  return <section className="page-intro"><div className="shell page-intro__grid"><h1>{title}</h1><div><p>{lead}</p>{children}</div></div></section>;
}

export function CTASection({ title = "Ai un spațiu în minte?", text = "Povestește-ne ce mobilier îți dorești. Îți răspundem pentru a stabili detaliile și următorii pași." }: { title?: string; text?: string }) {
  return <section className="cta-section"><div className="shell cta-section__inner"><div><h2>{title}</h2><p>{text}</p></div><Link className="button button--light" href="/solicita-oferta">Solicită o ofertă <Icon name="arrow" /></Link></div></section>;
}
