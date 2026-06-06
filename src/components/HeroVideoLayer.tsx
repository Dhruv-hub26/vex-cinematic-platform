import React from 'react';
import { useHeroTransition } from '../hooks/useHeroTransition';

export const HeroVideoLayer: React.FC = () => {
  const progress = useHeroTransition();
  const opacity = 1 - progress * 0.97;

  return (
    <div
      className="fixed inset-0 z-[1] pointer-events-none"
      aria-hidden
      style={{
        opacity,
        transition: 'opacity 500ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/70" />
      <div className="absolute inset-x-0 bottom-0 h-[55vh] bg-gradient-to-t from-black via-black/80 to-transparent" />
    </div>
  );
};
