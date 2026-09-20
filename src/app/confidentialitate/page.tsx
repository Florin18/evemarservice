import type { Metadata } from "next";
import { PageIntro } from "@/components/ui";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Informare privind confidențialitatea", "Informații despre datele folosite când contactezi EVEMARSERVICE prin telefon, e-mail sau WhatsApp.", "/confidentialitate");

export default function PrivacyPage() {
  return <><PageIntro title="Informare privind confidențialitatea" lead="Această pagină descrie funcționarea actuală a website-ului. Datele juridice complete ale operatorului trebuie confirmate înainte de lansarea publică." /><article className="shell legal-content"><div className="legal-warning"><strong>De completat înainte de lansare</strong><p>Denumirea juridică, CUI-ul, numărul de înregistrare și adresa juridică nu au fost furnizate și nu sunt inventate în această versiune.</p></div><h2>Cum funcționează formularul de ofertă</h2><p>Informațiile completate în formular nu sunt trimise către și nu sunt stocate pe serverul acestui website. Browserul creează un mesaj și deschide WhatsApp; utilizatorul decide dacă îl trimite.</p><h2>Date comunicate prin servicii externe</h2><p>Când alegi să contactezi EVEMARSERVICE prin WhatsApp, Facebook, Instagram, e-mail, telefon sau Google Maps, interacțiunea este gestionată și de furnizorul serviciului respectiv, conform propriilor politici.</p><h2>Scopul comunicării</h2><p>Datele pe care alegi să le transmiți sunt folosite pentru a răspunde solicitării și pentru a discuta proiectul de mobilier. Website-ul nu include în această versiune un cont de utilizator, o bază de date sau instrumente de profilare.</p><h2>Contact</h2><p>Pentru întrebări despre datele transmise, folosește adresa <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> sau numărul <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}</a>.</p></article></>;
}
