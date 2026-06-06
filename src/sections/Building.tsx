import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { DESIGNATOR, HEADLINE, SECTION_PAD } from '../constants/layout';
import { SECTIONS, VENTURE_STREAMS } from '../types/sections';
import type { VentureStream } from '../types/sections';

const StatusChipRow: React.FC<{ stream: VentureStream }> = ({ stream }) => (
  <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono tracking-widest">
    <span className="liquid-glass rounded-full px-3 py-1.5 text-gray-400">
      [SYS.STATUS: <span className="text-white">{stream.status}</span>]
    </span>
    <span className="text-white/15 hidden sm:inline" aria-hidden>
      |
    </span>
    <span className="liquid-glass rounded-full px-3 py-1.5 text-gray-400">
      [DEPLOY.PHASE: <span className="text-white">{stream.phaseLabel}</span>]
    </span>
  </div>
);

const ShowcasePanel: React.FC<{
  stream: VentureStream;
  aspectClass: string;
}> = ({ stream, aspectClass }) => (
  <div
    className={`relative w-full ${aspectClass} rounded-3xl overflow-hidden liquid-glass-float transition-all duration-700 ease-out group-hover:scale-[1.008]`}
  >
    <img
      src={stream.imageUrl}
      alt={stream.imageAlt}
      loading="lazy"
      decoding="async"
      className="absolute inset-0 w-full h-full object-cover grayscale contrast-110"
    />
    <div className="absolute inset-0 bg-black/45" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

    <div className="absolute inset-x-0 bottom-0 p-6">
      <StatusChipRow stream={stream} />
    </div>
  </div>
);

export const Building: React.FC = () => {
  const { designator, headline } = SECTIONS.building;

  return (
    <FadeIn whenInView delay={0} duration={1200}>
      <section id="section-building" className={`relative ${SECTION_PAD}`}>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 lg:mb-44">
            <FadeIn whenInView delay={80} duration={1100} className="lg:col-span-3">
              <p className={DESIGNATOR}>{designator}</p>
            </FadeIn>
            <FadeIn
              whenInView
              delay={160}
              duration={1200}
              className="lg:col-span-8 lg:col-start-5"
            >
              <h2 className={HEADLINE}>{headline}</h2>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-48 lg:gap-64">
            {VENTURE_STREAMS.map((stream, index) => {
              const isReversed = index % 2 === 1;
              const aspectClass = index === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]';

              return (
                <FadeIn
                  key={stream.id}
                  whenInView
                  delay={200 + index * 180}
                  duration={1200}
                >
                  <article className="group relative lg:min-h-[580px]">
                    <div
                      className={`relative lg:absolute lg:w-[64%] lg:top-0 z-10 transition-all duration-700 ease-out ${
                        isReversed
                          ? 'lg:right-0 lg:-mr-6 xl:-mr-10'
                          : 'lg:left-0 lg:-ml-6 xl:-ml-10'
                      }`}
                    >
                      <ShowcasePanel stream={stream} aspectClass={aspectClass} />
                    </div>

                    <div
                      className={`relative mt-12 lg:mt-0 lg:absolute lg:w-[50%] z-20 transition-all duration-700 ease-out group-hover:-translate-y-1 ${
                        isReversed
                          ? 'lg:left-0 lg:top-24 lg:pl-0 lg:pr-10'
                          : 'lg:right-0 lg:top-28 lg:pl-10'
                      }`}
                    >
                      <div className="liquid-glass-float rounded-3xl p-10 md:p-12">
                        <div className="flex items-center gap-4 mb-10">
                          <span className={DESIGNATOR}>{stream.phase}</span>
                          <span className="h-px flex-1 bg-white/10" />
                          <span
                            className={`text-[10px] font-thin tracking-[0.3em] uppercase px-3 py-1 border rounded-full ${
                              stream.status === 'LIVE'
                                ? 'border-white/20 text-white'
                                : 'border-white/10 text-gray-400'
                            }`}
                          >
                            {stream.status}
                          </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-white tracking-tighter leading-[1.1] mb-8">
                          {stream.title}
                        </h3>

                        <p className="text-gray-400 text-sm font-light leading-relaxed mb-12 max-w-md">
                          {stream.description}
                        </p>

                        <div className="font-mono text-[11px] tracking-widest text-gray-400 space-y-2 border-t border-white/10 pt-8">
                          <p>
                            [SYS.STATUS:{' '}
                            <span className="text-white">{stream.status}</span>]
                          </p>
                          <p>
                            [DEPLOY.PHASE:{' '}
                            <span className="text-white">{stream.phaseLabel}</span>]
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </FadeIn>
  );
};
