"use client";

import { FormEvent, useRef, useState } from "react";
import { categories } from "@/data/portfolio";
import { siteConfig } from "@/data/site";
import { Icon } from "./icon";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  locality: string;
  furniture: string;
  dimensions: string;
  budget: string;
  description: string;
};

type Errors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = { name: "", phone: "", email: "", locality: "", furniture: "", dimensions: "", budget: "", description: "" };

function validate(values: FormValues): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Introdu numele tău.";
  const phoneDigits = values.phone.replace(/\D/g, "");
  if (phoneDigits.length < 9 || phoneDigits.length > 15) errors.phone = "Introdu un număr de telefon valid.";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Introdu o adresă de e-mail validă.";
  if (values.description.trim().length < 15) errors.description = "Descrie proiectul în cel puțin 15 caractere.";
  return errors;
}

export function OfferForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const summaryRef = useRef<HTMLDivElement>(null);

  function update(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    const lines = [
      "Bună ziua!",
      "",
      "Doresc o ofertă pentru mobilier la comandă.",
      "",
      `Nume: ${values.name.trim()}`,
      `Telefon: ${values.phone.trim()}`,
      values.email.trim() && `E-mail: ${values.email.trim()}`,
      values.locality.trim() && `Localitate: ${values.locality.trim()}`,
      values.furniture && `Tip mobilier: ${values.furniture}`,
      values.dimensions.trim() && `Dimensiuni aproximative: ${values.dimensions.trim()}`,
      values.budget.trim() && `Buget estimativ: ${values.budget.trim()}`,
      `Descrierea proiectului: ${values.description.trim()}`,
      "",
      "Voi trimite și fotografii sau schițe ale spațiului, dacă este necesar.",
    ].filter(Boolean);

    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const fieldError = (field: keyof FormValues) => errors[field] ? <span className="field-error" id={`${field}-error`}>{errors[field]}</span> : null;

  return (
    <form className="offer-form" noValidate onSubmit={handleSubmit}>
      {Object.keys(errors).length > 0 && <div className="form-error-summary" role="alert" tabIndex={-1} ref={summaryRef}><strong>Verifică informațiile marcate.</strong><p>Datele completate au fost păstrate.</p></div>}
      <div className="form-grid">
        <label><span>Nume <b>*</b></span><input name="name" autoComplete="name" value={values.name} onChange={(e) => update("name", e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />{fieldError("name")}</label>
        <label><span>Număr de telefon <b>*</b></span><input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="07xx xxx xxx" value={values.phone} onChange={(e) => update("phone", e.target.value)} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />{fieldError("phone")}</label>
        <label><span>Adresă de e-mail</span><input name="email" type="email" inputMode="email" autoComplete="email" spellCheck={false} value={values.email} onChange={(e) => update("email", e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />{fieldError("email")}</label>
        <label><span>Localitate</span><input name="locality" autoComplete="address-level2" value={values.locality} onChange={(e) => update("locality", e.target.value)} /></label>
        <label><span>Tipul mobilierului</span><select name="furniture" value={values.furniture} onChange={(e) => update("furniture", e.target.value)}><option value="">Alege, dacă este cazul</option>{categories.map((category) => <option value={category.shortLabel} key={category.slug}>{category.label}</option>)}<option value="Alt tip de mobilier">Alt tip de mobilier</option></select></label>
        <label><span>Dimensiuni aproximative</span><input name="dimensions" placeholder="Ex.: perete de 3,2 m" value={values.dimensions} onChange={(e) => update("dimensions", e.target.value)} /></label>
        <label className="form-grid__wide"><span>Buget estimativ</span><input name="budget" placeholder="Completează liber, doar dacă dorești" value={values.budget} onChange={(e) => update("budget", e.target.value)} /></label>
        <label className="form-grid__wide"><span>Descrierea proiectului <b>*</b></span><textarea name="description" rows={6} placeholder="Spune-ne ce mobilier îți dorești și ce este important pentru tine." value={values.description} onChange={(e) => update("description", e.target.value)} aria-invalid={!!errors.description} aria-describedby={errors.description ? "description-error" : undefined} />{fieldError("description")}</label>
      </div>
      <div className="form-submit"><button className="button" type="submit">Deschide mesajul în WhatsApp <Icon name="whatsapp" /></button><p>Se deschide WhatsApp cu mesajul pregătit. Solicitarea nu este trimisă automat; tu confirmi trimiterea în aplicație.</p></div>
      <p className="form-photo-note">După deschiderea conversației WhatsApp, ne poți trimite fotografii sau schițe ale spațiului pentru o ofertă cât mai precisă.</p>
    </form>
  );
}
