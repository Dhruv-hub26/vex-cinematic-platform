import React, { useState } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { NAV_SECTION_IDS, SECTION_ORDER } from '../types/sections';
import type { SectionId } from '../types/sections';
import { scrollToSection } from '../utils/scroll';

export const Navbar: React.FC = () => {
  const activeSection = useScrollSpy(SECTION_ORDER);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (sectionId: SectionId) => {
    scrollToSection(sectionId);
    setMobileOpen(false);
  };

  const navLinkClass = (id: SectionId) => {
    const isActive = activeSection === id;
    return [
      'relative text-sm text-white transition-all duration-500 ease-out pb-2.5',
      isActive ? 'opacity-100 font-medium' : 'opacity-40 hover:opacity-100',
      isActive
        ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-white after:transition-all after:duration-500 after:ease-out'
        : '',
    ].join(' ');
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out px-6 md:px-16 lg:px-24 pt-6">
        <nav className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
          <button
            type="button"
            id="logo-vex"
            onClick={() => handleNavClick('home')}
            className="text-2xl font-semibold tracking-tight hover:opacity-80 transition-opacity text-white"
          >
            VEX
          </button>

          <div className="hidden md:flex items-center gap-8 relative">
            <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" aria-hidden />
            {NAV_SECTION_IDS.map((id) => (
              <button
                key={id}
                type="button"
                id={`nav-link-${id}`}
                onClick={() => handleNavClick(id)}
                className={navLinkClass(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              id="nav-btn-chat"
              onClick={() => handleNavClick('advisory')}
              className="hidden sm:block bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 transition-all duration-500 ease-out"
            >
              Start a Chat
            </button>

            <button
              type="button"
              id="nav-mobile-toggle"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span
                className={`block w-5 h-px bg-white transition-all duration-300 origin-center ${
                  mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''
                }`}
              />
              <span
                className={`block w-5 h-px bg-white transition-all duration-300 ${
                  mobileOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-px bg-white transition-all duration-300 origin-center ${
                  mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
        <div
          className={`liquid-glass absolute inset-4 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-10 transition-transform duration-300 ${
            mobileOpen ? 'scale-100' : 'scale-95'
          }`}
        >
          {NAV_SECTION_IDS.map((id) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => handleNavClick(id)}
                className={`relative text-2xl text-white transition-all duration-500 ease-out pb-2 ${
                  isActive ? 'opacity-100 font-medium' : 'opacity-40'
                } ${isActive ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-white' : ''}`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => handleNavClick('advisory')}
            className="bg-white text-black px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors duration-200"
          >
            Start a Chat
          </button>
        </div>
      </div>
    </>
  );
};
