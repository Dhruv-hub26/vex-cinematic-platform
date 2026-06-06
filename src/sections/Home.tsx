import React from 'react';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { FadeIn } from '../components/FadeIn';
import { scrollToSection } from '../utils/scroll';

export const Home: React.FC = () => {
  return (
    <section
      id="section-home"
      className="relative min-h-screen w-full flex flex-col z-[5]"
    >
      <div className="relative z-10 flex flex-col min-h-screen w-full pt-28">
        <main className="flex-1 w-full px-6 md:px-16 lg:px-24 pb-20 lg:pb-28 flex flex-col justify-end">
          <div className="w-full lg:grid lg:grid-cols-2 lg:items-end gap-14">
            <div className="flex flex-col items-start max-w-2xl lg:max-w-none">
              <AnimatedHeading
                text={`Shaping tomorrow\nwith vision and action.`}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tighter"
              />

              <FadeIn delay={800} duration={1200} className="w-full">
                <p
                  id="hero-subheading"
                  className="text-base md:text-lg text-gray-300 mb-10 font-light tracking-wide leading-relaxed"
                >
                  We back visionaries and craft ventures that define what comes next.
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1200} className="w-full">
                <div className="flex flex-wrap gap-4">
                  <button
                    type="button"
                    id="hero-btn-chat"
                    onClick={() => scrollToSection('advisory')}
                    className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-300 transition-all duration-500 ease-out"
                  >
                    Start a Chat
                  </button>
                  <button
                    type="button"
                    id="hero-btn-explore"
                    onClick={() => scrollToSection('story')}
                    className="liquid-glass border border-white/15 text-white px-8 py-3 rounded-lg font-light hover:bg-white/10 transition-all duration-500 ease-out"
                  >
                    Explore Now
                  </button>
                </div>
              </FadeIn>
            </div>

            <div className="flex items-end justify-start lg:justify-end mt-14 lg:mt-0">
              <FadeIn delay={1400} duration={1200}>
                <div
                  id="hero-tag-card"
                  className="liquid-glass-float px-8 py-5 rounded-2xl"
                >
                  <span className="text-lg md:text-xl lg:text-2xl font-light tracking-wide text-white">
                    Investing. Building. Advisory.
                  </span>
                </div>
              </FadeIn>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};
