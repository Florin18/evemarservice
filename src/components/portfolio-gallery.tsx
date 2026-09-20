"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { categories, portfolioImages, type CategorySlug } from "@/data/portfolio";
import { Icon } from "./icon";

type Filter = "toate" | CategorySlug;

export function PortfolioGallery({ initialFilter = "toate" }: { initialFilter?: Filter }) {
  const [filter, setFilter] = useState<Filter>(initialFilter);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const images = useMemo(() => filter === "toate" ? portfolioImages : portfolioImages.filter((image) => image.category === filter), [filter]);
  const activeImage = activeIndex === null ? null : images[activeIndex];

  useEffect(() => {
    const syncFilterFromUrl = () => {
      const category = new URLSearchParams(window.location.search).get("categorie");
      const isValid = categories.some((item) => item.slug === category);
      setFilter(isValid ? category as CategorySlug : "toate");
      setActiveIndex(null);
    };
    window.addEventListener("popstate", syncFilterFromUrl);
    return () => window.removeEventListener("popstate", syncFilterFromUrl);
  }, []);

  function closeLightbox() {
    setActiveIndex(null);
    requestAnimationFrame(() => previousFocus.current?.focus());
  }

  function step(direction: -1 | 1) {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + direction + images.length) % images.length);
  }

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "Tab") {
        const controls = document.querySelectorAll<HTMLElement>(".lightbox button");
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  // step uses the current render values while the dialog is open.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, images.length]);

  function selectFilter(nextFilter: Filter) {
    setFilter(nextFilter);
    setActiveIndex(null);
    const url = nextFilter === "toate" ? "/portofoliu" : `/portofoliu?categorie=${nextFilter}`;
    window.history.replaceState(null, "", url);
  }

  return (
    <>
      <div className="gallery-filters" role="group" aria-label="Filtrează fotografiile">
        <button type="button" aria-pressed={filter === "toate"} onClick={() => selectFilter("toate")}>Toate <span>{portfolioImages.length}</span></button>
        {categories.map((category) => {
          const count = portfolioImages.filter((image) => image.category === category.slug).length;
          return <button type="button" aria-pressed={filter === category.slug} onClick={() => selectFilter(category.slug)} key={category.slug}>{category.shortLabel} <span>{count}</span></button>;
        })}
      </div>

      <p className="gallery-count" aria-live="polite">{images.length} {images.length === 1 ? "fotografie" : "fotografii"}</p>
      <div className="portfolio-masonry">
        {images.map((image, index) => (
          <button className="portfolio-photo" type="button" key={image.id} onClick={(event) => { previousFocus.current = event.currentTarget; setActiveIndex(index); }} aria-label={`Deschide: ${image.alt}`}>
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 660px) 100vw, (max-width: 1050px) 50vw, 33vw" />
            <span>{categories.find((category) => category.slug === image.category)?.shortLabel}</span>
          </button>
        ))}
      </div>

      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Vizualizare fotografie" onMouseDown={(event) => { if (event.target === event.currentTarget) closeLightbox(); }}>
          <button ref={closeRef} type="button" className="lightbox__close" onClick={closeLightbox} aria-label="Închide fotografia"><Icon name="close" /></button>
          <button type="button" className="lightbox__nav lightbox__nav--previous" onClick={() => step(-1)} aria-label="Fotografia anterioară"><Icon name="chevronLeft" /></button>
          <div className="lightbox__image">
            <Image src={activeImage.src} alt={activeImage.alt} fill sizes="(max-width: 600px) 100vw, calc(100vw - 190px)" quality={92} priority />
          </div>
          <button type="button" className="lightbox__nav lightbox__nav--next" onClick={() => step(1)} aria-label="Fotografia următoare"><Icon name="chevronRight" /></button>
        </div>
      )}
    </>
  );
}
