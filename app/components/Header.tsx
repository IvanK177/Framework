"use client";

import React, { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800 transition-all duration-300"
    >
      <div className="max-w-[1600px] mx-auto w-full px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-2xl tracking-tight text-white">КДА</span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest hidden sm:inline-block ml-2">
              Биозащита
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-sm font-medium text-zinc-300 hover:text-teal-400 hover-underline-animation transition-colors"
            >
              О системе
            </a>
            <a
              href="#usage"
              className="text-sm font-medium text-zinc-300 hover:text-teal-400 hover-underline-animation transition-colors"
            >
              Применение
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-zinc-300 hover:text-teal-400 hover-underline-animation transition-colors"
            >
              Характеристики
            </a>
            <a
              href="#calculator"
              className="text-sm font-medium text-zinc-300 hover:text-teal-400 hover-underline-animation transition-colors"
            >
              Калькулятор
            </a>
          </nav>

          {/* Desktop Contacts & Button */}
          <div className="hidden sm:flex items-center gap-6">
            <a
              href="tel:+78005553535"
              className="text-sm font-semibold text-zinc-200 hover:text-teal-400 hover-underline-animation transition-colors"
            >
              8 (800) 555-35-35
            </a>
            <a
              href="mailto:sale@spda-barrier.ru"
              className="hidden md:inline-block text-sm font-medium text-zinc-400 hover:text-zinc-200 hover-underline-animation transition-colors"
            >
              sale@spda-barrier.ru
            </a>
            <a
              href="#calculator"
              className="px-5 py-2.5 bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold uppercase tracking-widest rounded-none transition-all duration-300 shadow-sm active:scale-95 text-center"
            >
              Заказать
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="p-2 text-zinc-400 hover:text-zinc-200 focus:outline-none">
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950 px-6 py-8 space-y-6 shadow-xl animate-fade-in">
          <nav className="flex flex-col gap-4">
            <a
              href="#about"
              className="text-base font-semibold text-zinc-300 hover:text-teal-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              О системе
            </a>
            <a
              href="#usage"
              className="text-base font-semibold text-zinc-300 hover:text-teal-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Применение
            </a>
            <a
              href="#features"
              className="text-base font-semibold text-zinc-300 hover:text-teal-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Характеристики
            </a>
            <a
              href="#calculator"
              className="text-base font-semibold text-zinc-300 hover:text-teal-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Калькулятор
            </a>
            <a
              href="#contact"
              className="text-base font-semibold text-zinc-300 hover:text-teal-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </a>
          </nav>
          <div className="h-px bg-zinc-800 my-4"></div>
          <div className="flex flex-col gap-4">
            <a href="tel:+78005553535" className="text-lg font-bold text-teal-400">
              8 (800) 555-35-35
            </a>
            <a href="mailto:sale@spda-barrier.ru" className="text-sm text-zinc-400 hover:text-zinc-200">
              sale@spda-barrier.ru
            </a>
            <a
              href="#calculator"
              className="px-5 py-2.5 bg-teal-600 hover:bg-teal-500 text-white text-center text-xs font-bold uppercase tracking-widest rounded-none transition-all duration-300 active:scale-95 block"
              onClick={() => setIsMenuOpen(false)}
            >
              Заказать
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
