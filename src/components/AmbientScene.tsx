import React from 'react';

export const AmbientScene: React.FC = () => (
  <div className="ambient-scene" aria-hidden>
    <div className="ambient-mesh" />
    <div className="ambient-glow ambient-glow--primary" />
    <div className="ambient-glow ambient-glow--secondary" />
  </div>
);
