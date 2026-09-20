"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/data/site";
import { Icon } from "./icon";
import { Logo } from "./logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Navigare principală">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
          ))}
        </nav>
        <Link className="button button--small desktop-cta" href="/solicita-oferta">Solicită o ofertă</Link>
        <button className="menu-button" type="button" aria-label={open ? "Închide meniul" : "Deschide meniul"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
      <div className={`mobile-nav${open ? " mobile-nav--open" : ""}`} id="mobile-navigation" aria-hidden={!open} inert={!open}>
        <nav className="shell" aria-label="Navigare mobilă">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
          ))}
          <Link className="button" href="/solicita-oferta" onClick={() => setOpen(false)}>Solicită o ofertă</Link>
        </nav>
      </div>
    </header>
  );
}
