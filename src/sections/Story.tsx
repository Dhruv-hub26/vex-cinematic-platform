import React from 'react';
import { FadeIn } from '../components/FadeIn';
import {
  DESIGNATOR,
  HEADLINE,
  METRIC_DETAIL,
  METRIC_VALUE,
  SECTION_PAD,
} from '../constants/layout';
import { SECTIONS, STORY_METRICS } from '../types/sections';

const METRIC_OFFSETS = [
  'lg:ml-0',
  'lg:ml-[14%] xl:ml-[20%]',
  'lg:ml-[6%] xl:ml-[10%]',
];

export const Story: React.FC = () => {
  const { designator, headline } = SECTIONS.story;

  return (
    <FadeIn whenInView delay={0} duration={1200}>
      <section id="section-story" className={`relative ${SECTION_PAD}`}>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            <FadeIn
              whenInView
              delay={80}
              duration={1100}
              className="lg:col-span-2 lg:col-start-1"
            >
              <p className={`${DESIGNATOR} lg:sticky lg:top-36`}>{designator}</p>
            </FadeIn>

            <div className="lg:col-span-9 lg:col-start-4">
              <FadeIn whenInView delay={160} duration={1200}>
                <h2 className={HEADLINE}>{headline}</h2>
              </FadeIn>

              <div className="flex flex-col gap-20 md:gap-28">
                {STORY_METRICS.map((metric, index) => (
                  <FadeIn
                    key={metric.id}
                    whenInView
                    delay={280 + index * 150}
                    duration={1100}
                    className={METRIC_OFFSETS[index]}
                  >
                    <div className="group max-w-lg">
                      <p className={`${DESIGNATOR} mb-8`}>{metric.label}</p>
                      <p className={`${METRIC_VALUE} mb-8`}>{metric.value}</p>
                      <p className={`${METRIC_DETAIL} max-w-sm`}>{metric.detail}</p>
                      <div className="mt-10 h-px w-12 bg-white/10 transition-all duration-700 ease-out group-hover:w-20" />
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};
