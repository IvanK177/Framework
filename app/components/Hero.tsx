"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="about" className="relative pt-40 pb-32 md:pt-52 md:pb-48 bg-zinc-900 overflow-hidden w-full">
      {/* Clean background without grid pattern */}

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 w-full items-center">
          
          {/* Left text content */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start text-left space-y-10">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-zinc-800/40 border-l-2 border-l-teal-500 border-y border-r border-zinc-800 px-4 py-2 rounded-none text-xs font-mono font-medium text-zinc-300 animate-fade-in"
            >
              <span className="w-1.5 h-1.5 rounded-none bg-teal-500 animate-pulse"></span>
              В наличии • Дезбарьер нового поколения
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tighter relative z-20"
            >
              Рамочная установка дезинфекции <span className="text-teal-400 font-extrabold block lg:inline">КДА</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-zinc-400 max-w-2xl font-light leading-relaxed md:leading-loose"
            >
              Автоматическая рамка для транспорта. Эффективно уничтожает патогенные микроорганизмы на колесах, днище и бортах машин при въезде на промышленные и сельскохозяйственные предприятия.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto"
            >
              <a
                href="#calculator"
                className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm tracking-wider uppercase rounded-none transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 text-center"
              >
                Рассчитать стоимость
              </a>
              <a
                href="#features"
                className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold text-sm tracking-wider uppercase rounded-none border border-zinc-800 transition-all duration-300 active:scale-95 text-center"
              >
                Технические параметры
              </a>
            </motion.div>

            {/* Fast specifications stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 w-full max-w-lg border-t border-zinc-800"
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.45 }}
              >
                <span className="block text-3xl font-extrabold text-white tracking-tight">1.5 м</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mt-1 block">Высота рамки</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.55 }}
              >
                <span className="block text-3xl font-extrabold text-white tracking-tight">15 сек</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mt-1 block">Время цикла</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.65 }}
              >
                <span className="block text-3xl font-extrabold text-white tracking-tight">30 bar</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mt-1 block">Давление</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right image column with bleeding edge to screen right border */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 flex justify-end relative mt-6 lg:mt-0 lg:h-full min-h-[300px] lg:min-h-[480px]"
          >
            {/* Main Image Container */}
            <div className="relative w-[calc(100%+3rem)] -mx-6 h-[300px] sm:mx-0 sm:w-full sm:h-[400px] lg:h-full lg:w-[calc(100%+max(0px,(100vw-1600px)/2)+3rem)] lg:-mr-[calc(max(0px,(100vw-1600px)/2)+3rem)] select-none">
              <Image
                src="/assets/kda_frames.png"
                alt="Установка КДА"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 800px"
                className="rounded-none object-cover object-left border-l border-y border-zinc-800"
              />
              
              {/* Minimalist Float Badges */}
              <div className="absolute top-6 left-6 bg-zinc-950/90 backdrop-blur-md px-3.5 py-2 rounded-none border border-zinc-800 text-[10px] uppercase font-mono font-bold tracking-widest text-zinc-300 flex items-center gap-2 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-none bg-zinc-500"></span>
                AISI 304 Сталь
              </div>

              <div className="absolute bottom-6 right-6 bg-zinc-950/90 backdrop-blur-md px-3.5 py-2 rounded-none border border-zinc-800 text-[10px] uppercase font-mono font-bold tracking-widest text-zinc-300 flex items-center gap-2 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-none bg-teal-500 animate-pulse"></span>
                Датчики движения
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
