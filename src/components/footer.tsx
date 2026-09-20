import Link from "next/link";
import { navigation, siteConfig } from "@/data/site";
import { Icon } from "./icon";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-intro">
          <Logo inverse />
          <p>Mobilier personalizat, realizat în producție proprie și adaptat fiecărui spațiu.</p>
        </div>
        <div>
          <h2>Navigare</h2>
          <ul>{navigation.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ul>
            <li><a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}</a></li>
            <li><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
            <li>{siteConfig.locality}</li>
            <li>Cod poștal {siteConfig.postalCode}</li>
          </ul>
        </div>
        <div>
          <h2>Urmărește-ne</h2>
          <div className="social-links">
            <a href={siteConfig.facebook} target="_blank" rel="noreferrer" aria-label="EVEMARSERVICE pe Facebook"><Icon name="facebook" /></a>
            <a href={siteConfig.instagram} target="_blank" rel="noreferrer" aria-label="EVEMARSERVICE pe Instagram"><Icon name="instagram" /></a>
            <a href={siteConfig.maps} target="_blank" rel="noreferrer" aria-label="EVEMARSERVICE în Google Maps"><Icon name="map" /></a>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} EVEMARSERVICE. Toate drepturile rezervate.</p>
        <div><Link href="/confidentialitate">Confidențialitate</Link><Link href="/cookie-uri">Cookie-uri</Link></div>
      </div>
    </footer>
  );
}
