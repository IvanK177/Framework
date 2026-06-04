import React from "react";

export default function Features() {
  return (
    <>
      {/* SECTION: APPLICATION (БЛОК ПРИМЕНЕНИЯ - АСИММЕТРИЧНЫЙ) */}
      <section id="usage" className="py-28 md:py-36 bg-zinc-900 border-y border-zinc-800 relative">
        <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 xl:px-24 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Title column (Asymmetric layout) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              <span className="text-xs uppercase tracking-widest text-teal-400 font-bold">Назначение оборудования</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Защита Вашего бизнеса от заноса инфекций
              </h2>
              <div className="w-12 h-1 bg-teal-500 rounded-full"></div>
              <p className="text-zinc-400 font-light leading-relaxed">
                Грязные колеса и днище грузовиков — основной путь переноса патогенов. Профессиональная установка рамки для транспорта гарантирует надежный биобарьер 24/7.
              </p>
            </div>

            {/* Right Cards column (Grid) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700 hover:border-zinc-600 hover:shadow-lg shadow-md shadow-black/30 hover:shadow-black/45 transition-all duration-300 flex flex-col justify-between space-y-6 group">
                <div className="space-y-4">
                  <span className="text-sm font-extrabold text-zinc-600 group-hover:text-teal-400 transition-colors">01</span>
                  <h3 className="text-xl font-bold text-white">Животноводческие комплексы</h3>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed">
                    Исключает занос вирусов АЧС, ящура, птичьего гриппа на территорию свинокомплексов, птицефабрик и молочных ферм.
                  </p>
                </div>
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest">Биозащита класса А &rarr;</span>
              </div>

              {/* Card 2 */}
              <div className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700 hover:border-zinc-600 hover:shadow-lg shadow-md shadow-black/30 hover:shadow-black/45 transition-all duration-300 flex flex-col justify-between space-y-6 group">
                <div className="space-y-4">
                  <span className="text-sm font-extrabold text-zinc-600 group-hover:text-teal-400 transition-colors">02</span>
                  <h3 className="text-xl font-bold text-white">Пищевые производства</h3>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed">
                    Соблюдение жестких стандартов HACCP и ISO. Дезинфекция транспорта поставщиков сырья перед разгрузкой.
                  </p>
                </div>
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest">HACCP стандарты &rarr;</span>
              </div>

              {/* Card 3 */}
              <div className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700 hover:border-zinc-600 hover:shadow-lg shadow-md shadow-black/30 hover:shadow-black/45 transition-all duration-300 flex flex-col justify-between space-y-6 group">
                <div className="space-y-4">
                  <span className="text-sm font-extrabold text-zinc-600 group-hover:text-teal-400 transition-colors">03</span>
                  <h3 className="text-xl font-bold text-white">Логистические хабы</h3>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed">
                    Обработка транзитного транспорта в распределительных центрах и морских/речных терминалах с высокой пропускной способностью.
                  </p>
                </div>
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest">Высокий трафик &rarr;</span>
              </div>

              {/* Card 4 */}
              <div className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700 hover:border-zinc-600 hover:shadow-lg shadow-md shadow-black/30 hover:shadow-black/45 transition-all duration-300 flex flex-col justify-between space-y-6 group">
                <div className="space-y-4">
                  <span className="text-sm font-extrabold text-zinc-600 group-hover:text-teal-400 transition-colors">04</span>
                  <h3 className="text-xl font-bold text-white">Карантинные посты</h3>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed">
                    Установка на границах областей, экологических зон, заповедников в периоды эпидемических угроз.
                  </p>
                </div>
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest">Мгновенный контроль &rarr;</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: FEATURES & DETAILED SPECIFICATIONS (ТЕХНИЧЕСКИЕ ПАРАМЕТРЫ) */}
      <section id="features" className="py-28 md:py-36 bg-zinc-900 relative">
        <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 xl:px-24 relative z-10">
          
          <div className="text-left max-w-2xl space-y-4 mb-20">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-bold">Характеристики & Технологии</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-none">
              Технические параметры рамки КДА
            </h2>
            <p className="text-zinc-400 font-light text-sm sm:text-base">
              Строго выверенное инженерное решение для безотказной биозащиты вашего предприятия.
            </p>
          </div>

          {/* Advantages Grid (Bento Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 auto-rows-fr">
            {/* Stat 1 */}
            <div className="md:col-span-2 bg-zinc-800/50 backdrop-blur-md p-10 rounded-3xl border border-zinc-700 space-y-4 shadow-md shadow-black/30 hover:shadow-lg hover:shadow-black/45 transition-all duration-300">
              <div className="text-teal-500">
                {/* Icon: Bolt */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="font-bold text-white text-lg">Энергоэффективность</h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                Потребляемая мощность помпы высокого давления составляет всего 1.5 - 2.0 кВт. Питание 220 В или 380 В на выбор.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="md:col-span-2 md:row-span-2 bg-zinc-800/50 backdrop-blur-md p-10 rounded-3xl border border-zinc-700 flex flex-col justify-between space-y-6 shadow-md shadow-black/30 hover:shadow-lg hover:shadow-black/45 transition-all duration-300">
              <div className="text-teal-500">
                {/* Icon: Radar/Arrows */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-white text-lg">Сенсорное управление</h3>
                <p className="text-sm text-zinc-300 leading-relaxed font-light">
                  Германские оптические датчики движения регистрируют появление ТС и мгновенно активируют распыление.
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="md:col-span-2 bg-zinc-800/50 backdrop-blur-md p-10 rounded-3xl border border-zinc-700 space-y-4 shadow-md shadow-black/30 hover:shadow-lg hover:shadow-black/45 transition-all duration-300">
              <div className="text-teal-500">
                {/* Icon: Cloud-snow */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M3.75 12h1.5m15 0h1.5M5.25 5.25l1.06 1.06m11.38 11.38l1.06 1.06M5.25 18.75l1.06-1.06m11.38-11.38l1.06-1.06M12 9a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
              </div>
              <h3 className="font-bold text-white text-lg">Всепогодный режим</h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                Автоматический подогрев форсуночных трасс и насоса. Продувка сжатым воздухом исключает замерзание зимой.
              </p>
            </div>

            {/* Stat 4 */}
            <div className="md:col-span-4 bg-zinc-800/50 backdrop-blur-md p-10 rounded-3xl border border-zinc-700 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-md shadow-black/30 hover:shadow-lg hover:shadow-black/45 transition-all duration-300">
              <div className="flex items-start md:items-center gap-4">
                <div className="text-teal-500 shrink-0">
                  {/* Icon: Shield */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Химическая стойкость</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-light mt-1">
                    Магистрали и форсунки выполнены из премиальной нержавеющей стали AISI 304/316, стойкой к агрессивным дезсредствам.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Full Spec Grid (REPLACES THE OLD TABLE) */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <h3 className="font-bold text-white text-xl tracking-tight">Полные технические параметры КДА</h3>
              <div className="h-px bg-zinc-800 flex-grow"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Spec 1 */}
              <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 space-y-2">
                <span className="block text-[10px] uppercase font-bold tracking-widest text-zinc-500">Высота обработки</span>
                <span className="block text-sm font-semibold text-zinc-200">до 1500 мм (колеса + борта)</span>
              </div>
              {/* Spec 2 */}
              <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 space-y-2">
                <span className="block text-[10px] uppercase font-bold tracking-widest text-zinc-500">Ширина проезда</span>
                <span className="block text-sm font-semibold text-zinc-200">от 3500 мм (до 4500 мм под заказ)</span>
              </div>
              {/* Spec 3 */}
              <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 space-y-2">
                <span className="block text-[10px] uppercase font-bold tracking-widest text-zinc-500">Количество форсунок</span>
                <span className="block text-sm font-semibold text-zinc-200">10 высоконапорных форсунок</span>
              </div>
              {/* Spec 4 */}
              <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 space-y-2">
                <span className="block text-[10px] uppercase font-bold tracking-widest text-zinc-500">Рабочее давление</span>
                <span className="block text-sm font-semibold text-zinc-200">30 бар (опционально до 50 бар)</span>
              </div>
              {/* Spec 5 */}
              <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 space-y-2">
                <span className="block text-[10px] uppercase font-bold tracking-widest text-zinc-500">Электропитание</span>
                <span className="block text-sm font-semibold text-zinc-200">220 В / 380 В, 50 Гц</span>
              </div>
              {/* Spec 6 */}
              <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 space-y-2">
                <span className="block text-[10px] uppercase font-bold tracking-widest text-zinc-500">Расход раствора</span>
                <span className="block text-sm font-semibold text-teal-400">3 - 4 л / еврофура</span>
              </div>
              {/* Spec 7 */}
              <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 space-y-2">
                <span className="block text-[10px] uppercase font-bold tracking-widest text-zinc-500">Материал конструкции</span>
                <span className="block text-sm font-semibold text-zinc-200">Нержавеющая сталь AISI 304</span>
              </div>
              {/* Spec 8 */}
              <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 space-y-2">
                <span className="block text-[10px] uppercase font-bold tracking-widest text-zinc-500">Влагозащищенность</span>
                <span className="block text-sm font-semibold text-zinc-200">Шкаф управления IP65</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
