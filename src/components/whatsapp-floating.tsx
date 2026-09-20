import { siteConfig } from "@/data/site";
import { Icon } from "./icon";

export function WhatsappFloating() {
  const message = encodeURIComponent("Bună ziua! Doresc mai multe informații despre mobilierul la comandă.");
  return (
    <a className="whatsapp-floating" href={`https://wa.me/${siteConfig.whatsappNumber}?text=${message}`} target="_blank" rel="noreferrer" aria-label="Începe o conversație pe WhatsApp">
      <Icon name="whatsapp" />
      <span>WhatsApp</span>
    </a>
  );
}
