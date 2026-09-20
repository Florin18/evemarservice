# EVEMARSERVICE – Mobilă la comandă

Website de prezentare pentru EVEMARSERVICE, realizat cu Next.js 16, React 19 și TypeScript. Proiectul folosește App Router, componente server implicit și componente client doar pentru meniul mobil, formular, reveal și galeria interactivă.

## Funcționalități

- homepage editorial construit în jurul fotografiilor reale EVEMARSERVICE;
- șapte categorii de mobilier și portofoliu cu filtre;
- lightbox cu navigare din tastatură, Escape și controale tactile;
- formular validat care pregătește un mesaj WhatsApp fără a stoca date;
- buton WhatsApp permanent, linkuri de contact și rețele sociale;
- pagini pentru servicii, despre, ofertă, contact și informări legale;
- metadata per pagină, date structurate Schema.org, sitemap și robots;
- logo și favicon SVG;
- imagini responsive prin `next/image`, lazy loading implicit și prioritate pentru hero.

## Rulare locală

Necesită Node.js 20.9 sau o versiune mai nouă.

```bash
npm install
npm run dev
```

Deschide `http://localhost:3000`.

Verificări de calitate:

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Structură

```text
src/
  app/                 pagini, metadata, sitemap, robots și stiluri globale
  components/          componente reutilizabile și componente interactive
  data/site.ts         datele firmei, navigare, beneficii, proces, recenzii
  data/portfolio.ts    categorii și manifestul fotografiilor
  lib/seo.ts           metadata și configurarea domeniului
public/
  brand/               variantele SVG ale logo-ului și faviconului
  images/landing-4k.jpg fotografia principală 4K
  images/portfolio/    copii web ale fotografiilor, organizate pe categorii
design-system/evemar/  reguli vizuale și token-uri
```

Directoarele originale cu fotografii din rădăcina proiectului sunt păstrate intacte. Website-ul citește copiile din `public/images`.

## Administrarea conținutului

### Date de contact și social media

Editează o singură dată valorile din `src/data/site.ts`. Numărul de telefon, WhatsApp, e-mailul, locația și linkurile sociale sunt reutilizate în toate componentele.

### Texte

Textele specifice unei pagini se află în fișierul `page.tsx` al rutei respective. Textele reutilizate pentru proces, beneficii și firmă sunt centralizate în `src/data/site.ts`.

### Fotografii noi

1. Păstrează originalul în directorul-sursă corespunzător.
2. Copiază versiunea pentru website în `public/images/portfolio/<categorie>/`.
3. Adaugă fișierul, dimensiunile originale și textul alternativ în `portfolioImages` din `src/data/portfolio.ts`.
4. Rulează `npm run build` pentru a detecta căi greșite.

Nu folosi nume de fișiere cu informații personale. Next.js generează automat variante WebP/AVIF la cerere.

### Fotografiile reprezentative

- Imaginea principală: înlocuiește `public/images/landing-4k.jpg` cu o copie optimizată care păstrează același nume sau actualizează sursa din `src/app/page.tsx` și metadata din `src/lib/seo.ts`.
- Coperta unei categorii: actualizează proprietatea `cover` din `categories`.
- Selecția de pe homepage: actualizează `featuredImages` folosind ID-uri existente din manifest.

### Categorie nouă

1. Extinde tipul `CategorySlug`.
2. Adaugă categoria în `categories`.
3. Creează directorul din `public/images/portfolio/`.
4. Adaugă imaginile prin `makeImages` în `portfolioImages`.

Filtrele, selectorul din formular și cardurile de categorie folosesc automat această structură.

### Recenzii reale

Adaugă numai recenzii verificate în array-ul `reviews` din `src/data/site.ts`:

```ts
{
  quote: "Textul verificat al recenziei",
  author: "Numele public confirmat",
  sourceUrl: "https://..."
}
```

Cât timp array-ul este gol, website-ul afișează un mesaj neutru și un link către pagina oficială Facebook.

## Configurarea domeniului și SEO

Copiază `.env.example` în `.env.local` și setează domeniul oficial după confirmare:

```env
NEXT_PUBLIC_SITE_URL=https://domeniul-confirmat.ro
```

Fără această valoare, dezvoltarea locală funcționează, dar canonical-urile și URL-urile absolute din sitemap nu sunt inventate. Pe Vercel, proiectul poate folosi automat URL-ul de producție furnizat de platformă până la configurarea domeniului oficial.

## Publicare pe Vercel

1. Importă repository-ul în Vercel.
2. Framework preset: Next.js (detectat automat).
3. Build command: `npm run build`.
4. Adaugă `NEXT_PUBLIC_SITE_URL` în Production după conectarea domeniului.
5. Rulează un deployment și verifică rutele, imaginile, formularul WhatsApp, `/robots.txt` și `/sitemap.xml`.

Nu este necesară o bază de date sau un serviciu extern pentru această versiune.

## Informații de confirmat înainte de lansare

- domeniul oficial;
- denumirea juridică completă a operatorului;
- CUI-ul și numărul de înregistrare;
- adresa juridică;
- validarea finală a textelor de confidențialitate de către persoana responsabilă;
- recenziile reale care pot fi publicate și modul exact de atribuire;
- verificarea finală a fotografiilor aprobate pentru publicare.

Nu au fost introduse date juridice, recenzii, ratinguri, program de lucru, premii, certificări sau parteneriate neconfirmate.
