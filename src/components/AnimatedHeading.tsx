import React, { useEffect, useState } from 'react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
}

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ text, className = '' }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // The whole animation starts after 200ms initial delay
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const lines = text.split('\n');
  const charDelay = 30; // 30ms
  const transitionDuration = 500; // 500ms

  return (
    <h1
      className={`font-normal mb-4 select-none ${className}`}
      style={{ letterSpacing: '-0.04em' }}
    >
      {lines.map((line, lineIndex) => {
        const lineLength = line.length;
        return (
          <span key={lineIndex} className="block">
            {line.split('').map((char, charIndex) => {
              // Calculate staggered delay for each character
              const delay = (lineIndex * lineLength * charDelay) + (charIndex * charDelay);
              const displayChar = char === ' ' ? '\u00A0' : char;

              return (
                <span
                  key={charIndex}
                  className="inline-block transition-all ease-out"
                  style={{
                    opacity: isAnimated ? 1 : 0,
                    transform: isAnimated ? 'translateX(0)' : 'translateX(-18px)',
                    transitionDuration: `${transitionDuration}ms`,
                    transitionDelay: `${delay}ms`,
                  }}
                >
                  {displayChar}
                </span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
};
