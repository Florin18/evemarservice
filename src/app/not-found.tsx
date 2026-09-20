import Link from "next/link";

export default function NotFound() {
  return <section className="not-found"><div className="shell"><p>404</p><h1>Pagina nu a fost găsită.</h1><span>Adresa poate fi greșită sau pagina a fost mutată.</span><Link className="button" href="/">Înapoi la pagina principală</Link></div></section>;
}
