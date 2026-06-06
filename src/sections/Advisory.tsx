import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { DESIGNATOR, HEADLINE, SECTION_PAD } from '../constants/layout';
import { ADVISORY_PRACTICES, SECTIONS } from '../types/sections';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Advisory: React.FC = () => {
  const { designator, headline } = SECTIONS.advisory;
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const trimmedEmail = email.trim();
  const isValid = EMAIL_PATTERN.test(trimmedEmail);
  const showError = touched && trimmedEmail.length > 0 && !isValid;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched(true);
    if (!trimmedEmail || !isValid) return;

    setSubmitted(true);
    window.location.href = `mailto:contact@vex.com?subject=Strategic%20Dialogue&body=${encodeURIComponent(trimmedEmail)}`;
  };

  return (
    <FadeIn whenInView delay={0} duration={1200}>
      <section
        id="section-advisory"
        className={`relative ${SECTION_PAD} pb-44 lg:pb-60`}
      >
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 mb-36 lg:mb-52">
            {ADVISORY_PRACTICES.map((practice, index) => (
              <FadeIn
                key={practice.id}
                whenInView
                delay={280 + index * 120}
                duration={1100}
                className={`transition-transform duration-700 ease-out ${
                  index % 2 === 1 ? 'md:translate-y-8' : ''
                }`}
              >
                <div className="liquid-glass-float rounded-3xl p-10 md:p-12 h-full transition-all duration-700 ease-out hover:-translate-y-1.5">
                  <p className="text-5xl md:text-6xl font-thin text-gray-400/35 mb-10 leading-none tracking-tighter">
                    0{index + 1}
                  </p>
                  <h3 className="text-xl md:text-2xl font-normal text-white mb-6 tracking-tight leading-snug">
                    {practice.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    {practice.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn whenInView delay={480} duration={1200}>
            <div className="liquid-glass-float rounded-3xl p-10 md:p-14 lg:p-20">
              <p className={`${DESIGNATOR} mb-12 lg:mb-16`}>05 / INITIATE CONTACT</p>

              <form onSubmit={handleSubmit} noValidate className="max-w-4xl">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
                  <div className="flex-1 liquid-glass rounded-2xl border border-white/12 px-6 md:px-8 py-5 md:py-6 min-h-[64px] flex items-center">
                    <span className="text-gray-400 mr-3 select-none font-mono text-sm tracking-widest shrink-0">
                      &gt;
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (submitted) setSubmitted(false);
                      }}
                      onBlur={() => setTouched(true)}
                      placeholder="institutional@domain.com"
                      autoComplete="email"
                      aria-label="Email address"
                      aria-invalid={showError}
                      aria-describedby={showError ? 'advisory-email-error' : undefined}
                      className="w-full bg-transparent text-white placeholder:text-gray-400 outline-none font-mono text-sm md:text-base font-light tracking-wide"
                    />
                  </div>
                  <button
                    type="submit"
                    id="advisory-btn-contact"
                    className="shrink-0 bg-white text-black px-10 md:px-14 py-5 md:py-6 text-sm md:text-base font-semibold tracking-tight hover:bg-gray-300 transition-all duration-500 ease-out rounded-2xl"
                  >
                    Initiate Strategic Dialogue
                  </button>
                </div>

                {showError && (
                  <p
                    id="advisory-email-error"
                    className="mt-6 text-xs text-gray-400 font-mono font-light tracking-widest"
                    role="alert"
                  >
                    Enter a valid institutional email address.
                  </p>
                )}

                {submitted && isValid && (
                  <p
                    className="mt-6 text-xs text-gray-300 font-mono font-light tracking-widest"
                    role="status"
                  >
                    Dialogue channel initiated. Redirecting to secure correspondence.
                  </p>
                )}
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </FadeIn>
  );
};
