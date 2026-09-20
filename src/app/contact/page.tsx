import type { Metadata } from "next";
import { Icon } from "@/components/icon";
import { CTASection, PageIntro } from "@/components/ui";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Contact", "Contactează EVEMARSERVICE pentru mobilier la comandă în Focșani, Răstoaca și județul Vrancea prin telefon, WhatsApp sau e-mail.", "/contact");

const contacts = [
  { icon: "phone" as const, label: "Telefon", value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phoneHref}` },
  { icon: "whatsapp" as const, label: "WhatsApp", value: "Începe conversația", href: `https://wa.me/${siteConfig.whatsappNumber}` },
  { icon: "mail" as const, label: "E-mail", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: "map" as const, label: "Locație", value: siteConfig.locality, href: siteConfig.maps },
  { icon: "facebook" as const, label: "Facebook", value: "Mobilă la comandă Focșani", href: siteConfig.facebook },
  { icon: "instagram" as const, label: "Instagram", value: "@evemarservice", href: siteConfig.instagram },
];

export default function ContactPage() {
  return <><PageIntro title="Hai să discutăm despre spațiul tău." lead="Ne poți contacta direct pentru o primă discuție despre mobilierul dorit, dimensiuni și particularitățile proiectului." /><section className="section"><div className="shell contact-grid">{contacts.map((contact) => <a key={contact.label} href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noreferrer" : undefined}><Icon name={contact.icon} /><span><small>{contact.label}</small><strong>{contact.value}</strong></span><Icon name="arrow" /></a>)}</div><div className="shell contact-location"><div><h2>Răstoaca, județul Vrancea</h2><p>Cod poștal {siteConfig.postalCode}. Pentru direcții exacte, folosește locația actualizată din Google Maps.</p></div><a className="button button--ghost" href={siteConfig.maps} target="_blank" rel="noreferrer">Deschide în Google Maps <Icon name="map" /></a></div></section><CTASection title="Vrei o ofertă pentru proiectul tău?" /></>;
}
