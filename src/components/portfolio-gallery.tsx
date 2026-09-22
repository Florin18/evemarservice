"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent, type TransitionEvent as ReactTransitionEvent } from "react";
import { categories, portfolioImages, type CategorySlug } from "@/data/portfolio";
import { Icon } from "./icon";

type Filter = "toate" | CategorySlug;

export function PortfolioGallery({ initialFilter = "toate" }: { initialFilter?: Filter }) {
  const [filter, setFilter] = useState<Filter>(initialFilter);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const imageViewportRef = useRef<HTMLDivElement>(null);
  const pendingDirection = useRef<-1 | 1 | null>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const swipeStart = useRef<{ axis: "pending" | "horizontal" | "vertical"; pointerId: number; x: number; y: number } | null>(null);
  const images = useMemo(() => filter === "toate" ? portfolioImages : portfolioImages.filter((image) => image.category === filter), [filter]);
  const activeImage = activeIndex === null ? null : images[activeIndex];
  const carouselImages = activeIndex === null ? [] : ([-1, 0, 1] as const).map((offset) => ({
    image: images[(activeIndex + offset + images.length) % images.length],
    offset,
  }));

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

  const closeLightbox = useCallback(() => {
    pendingDirection.current = null;
    swipeStart.current = null;
    setDragOffset(0);
    setIsAnimating(false);
    setIsDragging(false);
    setActiveIndex(null);
    requestAnimationFrame(() => previousFocus.current?.focus());
  }, []);

  const step = useCallback((direction: -1 | 1) => {
    setActiveIndex((currentIndex) => currentIndex === null ? null : (currentIndex + direction + images.length) % images.length);
  }, [images.length]);

  const animateStep = useCallback((direction: -1 | 1) => {
    if (isAnimating || activeIndex === null) return;
    const viewportWidth = imageViewportRef.current?.clientWidth;
    if (!viewportWidth) {
      step(direction);
      return;
    }

    pendingDirection.current = direction;
    setIsAnimating(true);
    setIsDragging(false);
    setDragOffset(direction === 1 ? -viewportWidth : viewportWidth);
  }, [activeIndex, isAnimating, step]);

  function startSwipe(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" || !event.isPrimary || isAnimating) return;
    swipeStart.current = { axis: "pending", pointerId: event.pointerId, x: event.clientX, y: event.clientY };
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function moveSwipe(event: ReactPointerEvent<HTMLDivElement>) {
    const start = swipeStart.current;
    if (!start || start.pointerId !== event.pointerId) return;

    const horizontalDistance = event.clientX - start.x;
    const verticalDistance = event.clientY - start.y;
    if (start.axis === "pending" && Math.max(Math.abs(horizontalDistance), Math.abs(verticalDistance)) >= 7) {
      start.axis = Math.abs(horizontalDistance) > Math.abs(verticalDistance) * 1.15 ? "horizontal" : "vertical";
      if (start.axis === "vertical") setIsDragging(false);
    }

    if (start.axis !== "horizontal") return;
    event.preventDefault();
    const viewportWidth = event.currentTarget.clientWidth;
    setDragOffset(Math.max(-viewportWidth, Math.min(viewportWidth, horizontalDistance)));
  }

  function finishSwipe(event: ReactPointerEvent<HTMLDivElement>) {
    const start = swipeStart.current;
    swipeStart.current = null;
    if (!start || start.pointerId !== event.pointerId) return;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (start.axis !== "horizontal") {
      setDragOffset(0);
      setIsDragging(false);
      return;
    }

    const horizontalDistance = event.clientX - start.x;
    const viewportWidth = event.currentTarget.clientWidth;
    const shouldAdvance = Math.abs(horizontalDistance) >= Math.max(48, viewportWidth * .12);

    if (shouldAdvance) {
      const direction = horizontalDistance < 0 ? 1 : -1;
      pendingDirection.current = direction;
      setIsAnimating(true);
      setIsDragging(false);
      setDragOffset(direction === 1 ? -viewportWidth : viewportWidth);
      return;
    }

    pendingDirection.current = null;
    setIsAnimating(true);
    setIsDragging(false);
    setDragOffset(0);
  }

  function cancelSwipe(event: ReactPointerEvent<HTMLDivElement>) {
    swipeStart.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    pendingDirection.current = null;
    setIsAnimating(dragOffset !== 0);
    setIsDragging(false);
    setDragOffset(0);
  }

  function finishCarouselTransition(event: ReactTransitionEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") return;
    const direction = pendingDirection.current;
    pendingDirection.current = null;
    setIsAnimating(false);
    setIsDragging(false);
    setDragOffset(0);
    if (direction) step(direction);
  }

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") animateStep(-1);
      if (event.key === "ArrowRight") animateStep(1);
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
  }, [activeIndex, animateStep, closeLightbox]);

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
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 600px) 50vw, (max-width: 820px) and (orientation: landscape) 33vw, (max-width: 1050px) 50vw, 33vw" />
            <span>{categories.find((category) => category.slug === image.category)?.shortLabel}</span>
          </button>
        ))}
      </div>

      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Vizualizare fotografie" onMouseDown={(event) => { if (event.target === event.currentTarget) closeLightbox(); }}>
          <button ref={closeRef} type="button" className="lightbox__close" onClick={closeLightbox} aria-label="Închide fotografia"><Icon name="close" /></button>
          <button type="button" className="lightbox__nav lightbox__nav--previous" onClick={() => animateStep(-1)} aria-label="Fotografia anterioară"><Icon name="chevronLeft" /></button>
          <div ref={imageViewportRef} className="lightbox__image" onPointerDown={startSwipe} onPointerMove={moveSwipe} onPointerUp={finishSwipe} onPointerCancel={cancelSwipe}>
            <div
              className={`lightbox__track${isAnimating ? " lightbox__track--animating" : ""}${isAnimating || isDragging ? " lightbox__track--moving" : ""}`}
              style={{ "--lightbox-drag": `${dragOffset}px` } as CSSProperties}
              onTransitionEnd={finishCarouselTransition}
            >
              {carouselImages.map(({ image, offset }) => (
                <div className="lightbox__slide" aria-hidden={offset !== 0} key={`${image.id}-${offset}`}>
                  <Image src={image.src} alt={offset === 0 ? image.alt : ""} fill sizes="(max-width: 600px) 100vw, calc(100vw - 190px)" quality={92} loading="eager" draggable={false} />
                </div>
              ))}
            </div>
          </div>
          <button type="button" className="lightbox__nav lightbox__nav--next" onClick={() => animateStep(1)} aria-label="Fotografia următoare"><Icon name="chevronRight" /></button>
        </div>
      )}
    </>
  );
}
