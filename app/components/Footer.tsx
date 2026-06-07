import React from "react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 py-16 border-t border-zinc-800">
      <div className="max-w-[1600px] mx-auto w-full px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Brand logo & Copy (Left) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl tracking-tight text-white">КДА</span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
            </div>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">
              &copy; 2026 КДА. Все права защищены.<br />Производство дезинфекционных установок в России.
            </p>
          </div>

          {/* Tagline text (Center) */}
          <div className="md:col-span-4 text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
            Комплексное проектирование, изготовление и монтаж дезбарьеров. Профессиональная установка рамки для транспорта любой тоннажности и габаритов.
          </div>

          {/* Contacts list (Right) */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end gap-3 text-sm">
            <a href="tel:+78005553535" className="font-bold text-white hover:text-teal-400 transition-colors">
              8 (800) 555-35-35
            </a>
            <a href="mailto:sale@spda-barrier.ru" className="text-zinc-400 hover:text-teal-400 transition-colors">
              sale@spda-barrier.ru
            </a>
            <a
              href="#calculator"
              className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold uppercase tracking-widest rounded-none transition-all duration-300 active:scale-95 shadow-sm"
            >
              Заказать
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
