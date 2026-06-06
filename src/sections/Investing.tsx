import React from 'react';
import { FadeIn } from '../components/FadeIn';
import {
  DESIGNATOR,
  HEADLINE,
  METRIC_DETAIL,
  METRIC_VALUE,
  SECTION_PAD,
} from '../constants/layout';
import { INVESTING_NODES, SECTIONS } from '../types/sections';

const CARD_LAYOUT = [
  'lg:col-span-5 lg:col-start-1 lg:row-start-1',
  'lg:col-span-5 lg:col-start-7 lg:row-start-2 lg:mt-8',
  'lg:col-span-5 lg:col-start-2 lg:row-start-3 lg:mt-4',
];

export const Investing: React.FC = () => {
  const { designator, headline } = SECTIONS.investing;

  return (
    <FadeIn whenInView delay={0} duration={1200}>
      <section id="section-investing" className={`relative ${SECTION_PAD}`}>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-28 lg:mb-40">
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-x-12 lg:gap-y-6">
            {INVESTING_NODES.map((node, index) => (
              <FadeIn
                key={node.id}
                whenInView
                delay={280 + index * 150}
                duration={1100}
                className={CARD_LAYOUT[index]}
              >
                <div className="liquid-glass-float rounded-3xl p-10 md:p-12 transition-all duration-700 ease-out hover:-translate-y-1.5 h-full">
                  <p className={`${DESIGNATOR} mb-12`}>{node.title}</p>
                  <p className={`${METRIC_VALUE} text-4xl md:text-5xl mb-10`}>
                    {node.metric}
                  </p>
                  <p className={`${METRIC_DETAIL} max-w-sm`}>{node.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
};
