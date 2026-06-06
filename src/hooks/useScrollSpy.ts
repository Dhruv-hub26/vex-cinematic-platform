import { useEffect, useState } from 'react';
import type { SectionId } from '../types/sections';
import { SCROLL_OFFSET } from '../utils/scroll';

const ACTIVATION_PAD = 40;

interface SectionEntry {
  id: SectionId;
  el: HTMLElement;
}

function getSectionMetrics(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY,
    bottom: rect.top + window.scrollY + rect.height,
  };
}

function resolveActiveSection(
  sectionIds: SectionId[],
  elements: SectionEntry[],
): SectionId {
  const activationLine = window.scrollY + SCROLL_OFFSET + ACTIVATION_PAD;
  let active = sectionIds[0];

  for (const { id, el } of elements) {
    const { top, bottom } = getSectionMetrics(el);

    if (activationLine >= top && activationLine < bottom) {
      return id;
    }

    if (activationLine >= top) {
      active = id;
    }
  }

  const docBottom = window.scrollY + window.innerHeight;
  const last = elements[elements.length - 1];
  if (last) {
    const { bottom } = getSectionMetrics(last.el);
    if (docBottom >= bottom - 2) {
      return last.id;
    }
  }

  return active;
}

export function useScrollSpy(sectionIds: SectionId[]): SectionId {
  const [activeId, setActiveId] = useState<SectionId>(sectionIds[0]);

  useEffect(() => {
    let elements: SectionEntry[] = sectionIds
      .map((id) => ({
        id,
        el: document.getElementById(`section-${id}`),
      }))
      .filter((entry): entry is SectionEntry => entry.el !== null);

    if (elements.length === 0) return;

    let frameId = 0;

    const refreshElements = () => {
      elements = sectionIds
        .map((id) => ({
          id,
          el: document.getElementById(`section-${id}`),
        }))
        .filter((entry): entry is SectionEntry => entry.el !== null);
    };

    const update = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        setActiveId(resolveActiveSection(sectionIds, elements));
      });
    };

    const observer = new IntersectionObserver(update, {
      root: null,
      rootMargin: `-${SCROLL_OFFSET + ACTIVATION_PAD}px 0px -40% 0px`,
      threshold: [0, 0.01, 0.05, 0.1, 0.25, 0.5, 0.75, 1],
    });

    elements.forEach(({ el }) => observer.observe(el));

    const resizeObserver = new ResizeObserver(() => {
      refreshElements();
      update();
    });

    elements.forEach(({ el }) => resizeObserver.observe(el));

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [sectionIds]);

  return activeId;
}
