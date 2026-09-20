export const siteConfig = {
  name: "EVEMARSERVICE",
  fullName: "EVEMARSERVICE – Mobilă la comandă",
  description:
    "Mobilier la comandă realizat în producție proprie, de la măsurători și proiectare 3D până la transport și montaj.",
  founded: "2020",
  phoneDisplay: "0734 918 581",
  phoneHref: "+40734918581",
  whatsappNumber: "40734918581",
  email: "evemarservice@yahoo.com",
  locality: "Răstoaca, județul Vrancea, România",
  postalCode: "627208",
  facebook: "https://www.facebook.com/Mobilalacomandafocsani/",
  messenger: "https://m.me/Mobilalacomandafocsani",
  instagram: "https://www.instagram.com/evemarservice/",
  maps: "https://maps.app.goo.gl/qFqLmmWHKaE34WJ37",
} as const;

export const navigation = [
  { href: "/", label: "Acasă" },
  { href: "/portofoliu", label: "Portofoliu" },
  { href: "/servicii", label: "Servicii" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/contact", label: "Contact" },
] as const;

export const processSteps = [
  { title: "Consultanță", text: "Discutăm telefonic despre spațiu, nevoi și tipul de mobilier dorit." },
  { title: "Măsurători", text: "Venim la locație pentru măsurători și observarea particularităților spațiului." },
  { title: "Proiectare 3D", text: "Stabilim configurația, materialele și finisajele, apoi pregătim randările 3D." },
  { title: "Producție", text: "Realizăm mobilierul în unitatea proprie, conform proiectului agreat." },
  { title: "Transport", text: "Transportăm mobilierul la domiciliu, în condiții potrivite proiectului." },
  { title: "Montaj", text: "Montăm mobilierul și facem verificările necesare pentru finalizarea lucrării." },
] as const;

export const benefits = [
  { title: "Producție proprie", text: "Control atent asupra execuției, de la debitare până la finisaj." },
  { title: "Potrivit spațiului tău", text: "Configurații gândite în jurul dimensiunilor și modului tău de utilizare." },
  { title: "Serviciu complet", text: "Măsurători, proiectare 3D, producție, transport și montaj într-un singur proces." },
  { title: "Alegeri echilibrate", text: "Soluții adaptate preferințelor și bugetului fiecărui client." },
] as const;

export type Review = {
  quote: string;
  author: string;
  sourceUrl: string;
};

// Comentarii publice, verificate pe pagina oficială de Facebook.
export const reviews: Review[] = [
  {
    quote: "Foarte mulțumiți de rezultat! Bucătăria a ieșit exact cum ne-am dorit, iar totul a fost făcut cu atenție și profesionalism. Comunicare foarte bună și montaj impecabil. Recomand cu drag!",
    author: "Pintea Elena",
    sourceUrl: siteConfig.facebook,
  },
  {
    quote: "Recomand! Calitate și design la un loc!",
    author: "Asavei Valentin",
    sourceUrl: siteConfig.facebook,
  },
  {
    quote: "Recomand! O firmă foarte serioasă din toate punctele de vedere. Profesionalismul este cuvântul care caracterizează cel mai elocvent activitatea pe care o desfășoară.",
    author: "Valentin Murgeanu",
    sourceUrl: siteConfig.facebook,
  },
  {
    quote: "Rezultat final mult peste așteptări! Mulțumim!",
    author: "Marian Patrașcu",
    sourceUrl: siteConfig.facebook,
  },
];
