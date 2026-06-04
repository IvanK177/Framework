import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="about" className="relative pt-40 pb-32 md:pt-52 md:pb-40 bg-zinc-900 overflow-hidden">
      {/* Clean background without grid pattern */}

      <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 xl:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left text content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-full text-xs font-medium text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              В наличии • Дезбарьер нового поколения
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tighter relative z-20">
              Рамочная установка дезинфекции <span className="text-teal-400 font-extrabold block lg:inline">КДА</span>
            </h1>
            
            <p className="text-base md:text-lg text-zinc-400 max-w-2xl font-light leading-relaxed">
              Автоматическая рамка для транспорта. Эффективно уничтожает патогенные микроорганизмы на колесах, днище и бортах машин при въезде на промышленные и сельскохозяйственные предприятия.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#calculator"
                className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm tracking-wider uppercase rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-center"
              >
                Рассчитать стоимость
              </a>
              <a
                href="#features"
                className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold text-sm tracking-wider uppercase rounded-full border border-zinc-700 transition-all duration-300 text-center"
              >
                Технические параметры
              </a>
            </div>

            {/* Fast specifications stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 max-w-lg border-t border-zinc-800">
              <div>
                <span className="block text-3xl font-extrabold text-white tracking-tight">1.5 м</span>
                <span className="text-xs text-zinc-400 uppercase tracking-widest font-semibold mt-1 block">Высота рамки</span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-white tracking-tight">15 сек</span>
                <span className="text-xs text-zinc-400 uppercase tracking-widest font-semibold mt-1 block">Время цикла</span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-white tracking-tight">30 bar</span>
                <span className="text-xs text-zinc-400 uppercase tracking-widest font-semibold mt-1 block">Давление</span>
              </div>
            </div>
          </div>

          {/* Right image column */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-end">
            {/* Image Card Wrapper with rounded corners and light shadow */}
            <div className="relative group w-full max-w-md lg:max-w-none">
              {/* Soft decorative glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/10 to-teal-400/10 rounded-2xl blur-xl opacity-35 group-hover:opacity-50 transition duration-700 pointer-events-none"></div>
              
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-800 p-3 shadow-xl shadow-black/35">
                <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px]">
                  <Image
                    src="/assets/kda_frames.png"
                    alt="Установка КДА"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="rounded-xl object-cover hover:scale-[1.01] transition-transform duration-700"
                  />
                </div>
                
                {/* Minimalist Float Badges */}
                <div className="absolute top-6 left-6 bg-zinc-900/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-zinc-700 text-[10px] uppercase font-bold tracking-widest text-zinc-300 flex items-center gap-2 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                  AISI 304 Сталь
                </div>

                <div className="absolute bottom-6 right-6 bg-zinc-900/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-zinc-700 text-[10px] uppercase font-bold tracking-widest text-zinc-300 flex items-center gap-2 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
                  Датчики движения
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
