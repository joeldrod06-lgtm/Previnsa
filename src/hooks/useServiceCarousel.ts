import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const CARD_GAP_FALLBACK = 20;

function getVisibleCount() {
  if (window.innerWidth >= 1280) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
}

function getCarouselGap(element: HTMLElement) {
  const styles = window.getComputedStyle(element);
  return Number.parseFloat(styles.columnGap || styles.gap) || CARD_GAP_FALLBACK;
}

export function useServiceCarousel(itemCount: number) {
  const servicesViewportRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(() => getVisibleCount());

  const maxIndex = useMemo(
    () => Math.max(0, itemCount - visibleCount),
    [itemCount, visibleCount],
  );

  useEffect(() => {
    let frameId = 0;

    const updateVisibleCount = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        setVisibleCount(getVisibleCount());
      });
    };

    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  useEffect(() => {
    setActiveIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    const viewport = servicesViewportRef.current;
    if (!viewport) return;

    const handleScroll = () => {
      const card = viewport.querySelector<HTMLElement>("[data-service-card]");
      if (!card) return;

      const step = card.offsetWidth + getCarouselGap(viewport);
      if (!step) return;

      const nextIndex = Math.round(viewport.scrollLeft / step);
      setActiveIndex(Math.max(0, Math.min(nextIndex, maxIndex)));
    };

    viewport.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      viewport.removeEventListener("scroll", handleScroll);
    };
  }, [maxIndex]);

  const scrollTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, maxIndex));
      setActiveIndex(clamped);

      const viewport = servicesViewportRef.current;
      if (!viewport) return;

      const card = viewport.querySelector<HTMLElement>("[data-service-card]");
      if (!card) return;

      const left = clamped * (card.offsetWidth + getCarouselGap(viewport));
      viewport.scrollTo({ left, behavior: "smooth" });
    },
    [maxIndex],
  );

  const scrollServices = useCallback(
    (direction: 1 | -1) => {
      const nextIndex = activeIndex + direction;

      if (nextIndex < 0) scrollTo(maxIndex);
      else if (nextIndex > maxIndex) scrollTo(0);
      else scrollTo(nextIndex);
    },
    [activeIndex, maxIndex, scrollTo],
  );

  return {
    activeIndex,
    maxIndex,
    scrollServices,
    scrollTo,
    servicesViewportRef,
  };
}
