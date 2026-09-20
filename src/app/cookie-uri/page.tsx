import type { Metadata } from "next";
import { PageIntro } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Informare despre cookie-uri", "Informații despre utilizarea cookie-urilor pe website-ul EVEMARSERVICE.", "/cookie-uri");

export default function CookiesPage() {
  return <><PageIntro title="Informare despre cookie-uri" lead="În versiunea actuală, website-ul nu folosește servicii de analiză, publicitate sau marketing și nu setează cookie-uri în aceste scopuri." /><article className="shell legal-content"><h2>Tehnologii utilizate</h2><p>Website-ul livrează pagini și imagini fără a crea profiluri de marketing și fără a înregistra conținutul formularului de ofertă. Linkurile către WhatsApp, Facebook, Instagram și Google Maps deschid servicii externe; acestea pot utiliza propriile tehnologii după accesare.</p><h2>Modificări viitoare</h2><p>Dacă vor fi adăugate instrumente care folosesc cookie-uri opționale sau prelucrează date în scop de analiză ori marketing, această informare va fi actualizată și va fi implementat un mecanism real de consimțământ înainte de activarea lor.</p><div className="legal-warning"><strong>De verificat înainte de lansare</strong><p>Configurația finală de hosting și orice integrare adăugată ulterior trebuie reevaluate pentru a menține această informare corectă.</p></div></article></>;
}
