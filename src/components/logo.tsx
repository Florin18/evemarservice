import Link from "next/link";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className={`brand-logo${inverse ? " brand-logo--inverse" : ""}`} aria-label="EVEMARSERVICE – Acasă">
      <svg className="brand-logo__mark" viewBox="0 0 52 44" aria-hidden="true">
        <path d="M2 17.5h13v24H2zM19.5 2h13v39.5h-13zM37 12h13v29.5H37z" />
        <path d="M6.5 22h4M24 7h4M41.5 16.5h4" className="brand-logo__handles" />
      </svg>
      <span className="brand-logo__type">
        <strong>EVEMARSERVICE</strong>
        <small>Mobilă la comandă</small>
      </span>
    </Link>
  );
}
