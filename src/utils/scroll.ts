import type { SectionId } from '../types/sections';

export const SCROLL_OFFSET = 80;

export function scrollToSection(sectionId: SectionId): void {
  const element = document.getElementById(`section-${sectionId}`);
  if (!element) return;

  window.scrollTo({
    top: element.offsetTop - SCROLL_OFFSET,
    behavior: 'smooth',
  });
}
