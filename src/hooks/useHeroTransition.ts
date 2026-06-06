import { useEffect, useState } from 'react';

export function useHeroTransition(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId = 0;

    const update = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const hero = document.getElementById('section-home');
        if (!hero) {
          setProgress(0);
          return;
        }

        const rect = hero.getBoundingClientRect();
        const range = window.innerHeight * 0.65;
        const scrolled = window.innerHeight * 0.42 - rect.bottom;
        const raw = Math.min(1, Math.max(0, scrolled / range));
        const next = raw * raw * (3 - 2 * raw);
        setProgress(next);
      });
    };

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return progress;
}
