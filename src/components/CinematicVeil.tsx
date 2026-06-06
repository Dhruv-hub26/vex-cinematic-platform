import React from 'react';
import { useHeroTransition } from '../hooks/useHeroTransition';

export const CinematicVeil: React.FC = () => {
  const progress = useHeroTransition();
  const blur = Math.round(progress * 32);
  const darken = 0.25 + progress * 0.75;

  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none z-[2] cinematic-edge-vignette"
        aria-hidden
      />
      <div
        className="fixed inset-0 pointer-events-none z-[3]"
        aria-hidden
        style={{
          opacity: Math.min(1, progress * 1.15),
          background: `linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, ${darken * 0.45}) 30%,
            rgba(0, 0, 0, ${darken * 0.85}) 55%,
            #000000 85%
          )`,
          backdropFilter: `blur(${blur}px) saturate(${100 - progress * 20}%)`,
          WebkitBackdropFilter: `blur(${blur}px) saturate(${100 - progress * 20}%)`,
          mixBlendMode: progress > 0.15 ? 'multiply' : 'normal',
          transition: 'backdrop-filter 500ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-[4]"
        aria-hidden
        style={{
          opacity: progress * 0.6,
          background:
            'radial-gradient(ellipse 120% 70% at 50% 30%, rgba(255,255,255,0.04) 0%, transparent 55%)',
          mixBlendMode: 'soft-light',
        }}
      />
    </>
  );
};
