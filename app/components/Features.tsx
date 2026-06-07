"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <>
      {/* SECTION: APPLICATION (БЛОК ПРИМЕНЕНИЯ - АСИММЕТРИЧНЫЙ) */}
      <section id="usage" className="py-36 md:py-48 bg-zinc-900 border-y border-zinc-800 relative">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Title column (Asymmetric layout) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 space-y-6 lg:sticky lg:top-28"
            >
              <span className="text-xs uppercase tracking-widest text-teal-400 font-bold">Назначение оборудования</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Защита Вашего бизнеса от заноса инфекций
              </h2>
              <div className="w-12 h-1 bg-teal-500"></div>
              <p className="text-zinc-400 font-light leading-relaxed">
                Грязные колеса и днище грузовиков — основной путь переноса патогенов. Профессиональная установка рамки для транспорта гарантирует надежный биобарьер 24/7.
              </p>
            </motion.div>

            {/* Right Cards column (Vertical list with divider lines) */}
            <div className="lg:col-span-8 flex flex-col divide-y divide-zinc-800 border-t border-b border-zinc-800 select-none">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.0 }}
                className="py-8 flex flex-col sm:flex-row sm:items-start justify-between gap-6 group hover:bg-zinc-800/5 px-4 transition-colors"
              >
                <div className="flex gap-6 items-start">
                  <span className="text-2xl font-light text-zinc-700 font-mono mt-0.5 shrink-0">01</span>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">Животноводческие комплексы</h3>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-2xl">
                      Исключает занос вирусов АЧС, ящура, птичьего гриппа на свинокомплексы, птицефабрики и молочные ферм.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest self-start sm:self-center shrink-0">
                  Биозащита класса А &rarr;
                </span>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="py-8 flex flex-col sm:flex-row sm:items-start justify-between gap-6 group hover:bg-zinc-800/5 px-4 transition-colors"
              >
                <div className="flex gap-6 items-start">
                  <span className="text-2xl font-light text-zinc-700 font-mono mt-0.5 shrink-0">02</span>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">Пищевые производства</h3>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-2xl">
                      Соблюдение жестких стандартов HACCP и ISO. Дезинфекция транспорта поставщиков сырья перед разгрузкой.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest self-start sm:self-center shrink-0">
                  HACCP стандарты &rarr;
                </span>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="py-8 flex flex-col sm:flex-row sm:items-start justify-between gap-6 group hover:bg-zinc-800/5 px-4 transition-colors"
              >
                <div className="flex gap-6 items-start">
                  <span className="text-2xl font-light text-zinc-700 font-mono mt-0.5 shrink-0">03</span>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">Логистические хабы</h3>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-2xl">
                      Обработка транзитного транспорта в распределительных центрах и морских/речных терминалах с высокой пропускной способностью.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest self-start sm:self-center shrink-0">
                  Высокий трафик &rarr;
                </span>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="py-8 flex flex-col sm:flex-row sm:items-start justify-between gap-6 group hover:bg-zinc-800/5 px-4 transition-colors"
              >
                <div className="flex gap-6 items-start">
                  <span className="text-2xl font-light text-zinc-700 font-mono mt-0.5 shrink-0">04</span>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">Карантинные посты</h3>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-2xl">
                      Установка на границах областей, экологических зон, заповедников в периоды эпидемических угроз.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest self-start sm:self-center shrink-0">
                  Мгновенный контроль &rarr;
                </span>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: FEATURES & DETAILED SPECIFICATIONS (ТЕХНИЧЕСКИЕ ПАРАМЕТРЫ) */}
      <section id="features" className="py-36 md:py-48 bg-zinc-900 relative">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-left max-w-2xl space-y-4 mb-20"
          >
            <span className="text-xs uppercase tracking-widest text-teal-400 font-bold">Характеристики & Технологии</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-none">
              Технические параметры рамки КДА
            </h2>
            <p className="text-zinc-400 font-light text-sm sm:text-base">
              Строго выверенное инженерное решение для безотказной биозащиты вашего предприятия.
            </p>
          </motion.div>

          {/* Advantages Grid (Blueprint style border cells, no icons, large mono numbers) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-zinc-800 mb-16 select-none">
            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.0 }}
              className="p-10 border-b border-r border-zinc-800 space-y-6 hover:bg-zinc-800/5 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="text-5xl font-light text-zinc-700 font-mono block">01</span>
                <h3 className="font-bold text-white text-lg">Энергоэффективность</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Потребляемая мощность помпы высокого давления составляет всего 1.5 - 2.0 кВт. Питание 220 В или 380 В на выбор.
                </p>
              </div>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-10 border-b border-r border-zinc-800 space-y-6 hover:bg-zinc-800/5 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="text-5xl font-light text-zinc-700 font-mono block">02</span>
                <h3 className="font-bold text-white text-lg">Сенсорное управление</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Германские оптические датчики движения регистрируют появление ТС и мгновенно активируют распыление.
                </p>
              </div>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-10 border-b border-r border-zinc-800 space-y-6 hover:bg-zinc-800/5 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="text-5xl font-light text-zinc-700 font-mono block">03</span>
                <h3 className="font-bold text-white text-lg">Всепогодный режим</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Автоматический подогрев форсуночных трасс и насоса. Продувка сжатым воздухом исключает замерзание зимой.
                </p>
              </div>
            </motion.div>

            {/* Stat 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-10 border-b border-r border-zinc-800 space-y-6 hover:bg-zinc-800/5 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="text-5xl font-light text-zinc-700 font-mono block">04</span>
                <h3 className="font-bold text-white text-lg">Химическая стойкость</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Магистрали и форсунки выполнены из премиальной нержавеющей стали AISI 304/316, стойкой к агрессивным дезсредствам.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Full Spec Grid (Blueprint Table style) */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center gap-4 animate-fade-in"
            >
              <h3 className="font-bold text-white text-xl tracking-tight font-mono uppercase text-[15px]">Полные технические параметры КДА</h3>
              <div className="h-px bg-zinc-800 flex-grow"></div>
            </motion.div>
            
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-zinc-800 select-none">
              {/* Spec 1 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.0 }}
                className="p-6 border-b border-r border-zinc-800 space-y-2 hover:bg-zinc-800/5 transition-colors rounded-none"
              >
                <span className="block text-[10px] uppercase font-mono font-bold tracking-widest text-zinc-500">Высота обработки</span>
                <span className="block text-sm font-semibold text-zinc-200">до 1500 мм (колеса + борта)</span>
              </motion.div>
              {/* Spec 2 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="p-6 border-b border-r border-zinc-800 space-y-2 hover:bg-zinc-800/5 transition-colors rounded-none"
              >
                <span className="block text-[10px] uppercase font-mono font-bold tracking-widest text-zinc-500">Ширина проезда</span>
                <span className="block text-sm font-semibold text-zinc-200">от 3500 мм (до 4500 мм под заказ)</span>
              </motion.div>
              {/* Spec 3 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="p-6 border-b border-r border-zinc-800 space-y-2 hover:bg-zinc-800/5 transition-colors rounded-none"
              >
                <span className="block text-[10px] uppercase font-mono font-bold tracking-widest text-zinc-500">Количество форсунок</span>
                <span className="block text-sm font-semibold text-zinc-200">10 высоконапорных форсунок</span>
              </motion.div>
              {/* Spec 4 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="p-6 border-b border-r border-zinc-800 space-y-2 hover:bg-zinc-800/5 transition-colors rounded-none"
              >
                <span className="block text-[10px] uppercase font-mono font-bold tracking-widest text-zinc-500">Рабочее давление</span>
                <span className="block text-sm font-semibold text-zinc-200">30 бар (опционально до 50 бар)</span>
              </motion.div>
              {/* Spec 5 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="p-6 border-b border-r border-zinc-800 space-y-2 hover:bg-zinc-800/5 transition-colors rounded-none"
              >
                <span className="block text-[10px] uppercase font-mono font-bold tracking-widest text-zinc-500">Электропитание</span>
                <span className="block text-sm font-semibold text-zinc-200">220 В / 380 В, 50 Гц</span>
              </motion.div>
              {/* Spec 6 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="p-6 border-b border-r border-zinc-800 space-y-2 hover:bg-zinc-800/5 transition-colors rounded-none"
              >
                <span className="block text-[10px] uppercase font-mono font-bold tracking-widest text-zinc-500">Расход раствора</span>
                <span className="block text-sm font-semibold text-teal-400">3 - 4 л / еврофура</span>
              </motion.div>
              {/* Spec 7 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="p-6 border-b border-r border-zinc-800 space-y-2 hover:bg-zinc-800/5 transition-colors rounded-none"
              >
                <span className="block text-[10px] uppercase font-mono font-bold tracking-widest text-zinc-500">Материал конструкции</span>
                <span className="block text-sm font-semibold text-zinc-200">Нержавеющая сталь AISI 304</span>
              </motion.div>
              {/* Spec 8 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.35 }}
                className="p-6 border-b border-r border-zinc-800 space-y-2 hover:bg-zinc-800/5 transition-colors rounded-none"
              >
                <span className="block text-[10px] uppercase font-mono font-bold tracking-widest text-zinc-500">Влагозащищенность</span>
                <span className="block text-sm font-semibold text-zinc-200">Шкаф управления IP65</span>
              </motion.div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
