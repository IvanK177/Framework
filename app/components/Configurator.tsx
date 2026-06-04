"use client";

import React, { useState } from "react";

interface Model {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
}

interface Option {
  id: string;
  name: string;
  price: number;
}

const MODELS: Model[] = [
  {
    id: "kda-1",
    name: "КДА-1",
    tagline: "Базовая рамка",
    description: "Разработана для дезинфекции легковых автомобилей и малотоннажного транспорта на въезде.",
    price: 350000,
  },
  {
    id: "kda-2",
    name: "КДА-2",
    tagline: "Стандартная рамка",
    description: "Оптимальное решение для дезинфекции грузовых автомобилей и еврофур (высота обработки до 1.5м).",
    price: 550000,
  },
  {
    id: "kda-max",
    name: "КДА-Max",
    tagline: "Усиленный портал",
    description: "Мощный комплекс для обработки тяжелой строительной, карьерной и сельскохозяйственной техники.",
    price: 800000,
  },
];

const OPTIONS: Option[] = [
  { id: "winter", name: "Зимний пакет (подогрев форсунок и бака)", price: 85000 },
  { id: "sensors", name: "Автоматические датчики движения", price: 40000 },
  { id: "pump", name: "Усиленный насос высокого давления", price: 60000 },
  { id: "install", name: "Монтаж и пусконаладка", price: 50000 },
];

export default function Configurator() {
  const [selectedModel, setSelectedModel] = useState<Model>(MODELS[1]); // Default to KDA-2
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Form fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const handleOptionToggle = (optionId: string) => {
    setSelectedOptions((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  // Calculate total price
  const basePrice = selectedModel.price;
  const optionsPrice = selectedOptions.reduce((sum, id) => {
    const opt = OPTIONS.find((o) => o.id === id);
    return sum + (opt ? opt.price : 0);
  }, 0);
  const totalPrice = basePrice + optionsPrice;

  // Format currency
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Reset state after transition
    setTimeout(() => {
      setIsSubmitted(false);
      setName("");
      setPhone("");
      setEmail("");
      setCompany("");
    }, 300);
  };

  return (
    <section id="calculator" className="py-28 md:py-36 bg-zinc-900 border-y border-zinc-800">
      <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 xl:px-24">
        
        <div className="text-left max-w-2xl space-y-4 mb-20">
          <span className="text-xs uppercase tracking-widest text-teal-400 font-bold">Конфигуратор</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-none">
            Расчет стоимости КДА
          </h2>
          <p className="text-base text-zinc-400 font-light">
            Соберите индивидуальную комплектацию установки дезинфекции и получите точный сметный расчет.
          </p>
        </div>

        <div className="space-y-16">
          
          {/* Settings panel - full width */}
          <div className="space-y-12">
            {/* Models selection */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-widest text-zinc-500 font-bold">Шаг 1. Выберите базовую модель</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {MODELS.map((model) => {
                  const isSelected = selectedModel.id === model.id;
                  return (
                    <button
                      key={model.id}
                      onClick={() => setSelectedModel(model)}
                      className={`p-8 rounded-2xl border text-left flex flex-col justify-between h-64 transition-all duration-300 ${
                        isSelected
                          ? "border-teal-500 bg-zinc-800 ring-1 ring-teal-500 shadow-md"
                          : "border-zinc-700 bg-zinc-800/60 hover:border-zinc-600 hover:shadow-sm"
                      }`}
                    >
                      <div className="space-y-2.5">
                        <div className="flex justify-between items-start w-full">
                          <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">{model.tagline}</span>
                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                          )}
                        </div>
                        <h4 className="text-xl md:text-2xl font-extrabold text-white">{model.name}</h4>
                        <p className="text-sm text-zinc-400 leading-relaxed font-light line-clamp-3">{model.description}</p>
                      </div>
                      <div className="text-lg md:text-xl font-bold text-teal-400 mt-4">
                        {formatPrice(model.price)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Options selection */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-widest text-zinc-500 font-bold">Шаг 2. Дополнительные опции</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {OPTIONS.map((opt) => {
                  const isChecked = selectedOptions.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleOptionToggle(opt.id)}
                      className={`p-6 rounded-xl border text-left flex items-start justify-between gap-6 transition-all duration-300 ${
                        isChecked
                          ? "border-teal-500 bg-zinc-800"
                          : "border-zinc-700 bg-zinc-800/40 hover:border-zinc-600"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-6 h-6 rounded flex items-center justify-center border transition-all mt-0.5 shrink-0 ${
                            isChecked
                              ? "bg-teal-500 border-teal-500 text-zinc-950"
                              : "border-zinc-600 bg-zinc-900"
                          }`}
                        >
                          {isChecked && (
                            <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          )}
                        </div>
                        <span className="text-base text-zinc-300 font-normal leading-tight">{opt.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-zinc-400 whitespace-nowrap">
                        +{formatPrice(opt.price)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Summary Bar - logical completion */}
          <div className="bg-zinc-800/50 backdrop-blur-md border border-zinc-700 rounded-3xl p-8 sm:p-10 shadow-lg shadow-black/30 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2.5 text-center md:text-left flex-grow">
              <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest block">Сводка по комплектации: {selectedModel.name}</span>
              <div className="text-3xl sm:text-4xl font-extrabold text-teal-400 tracking-tight">
                {formatPrice(totalPrice)}
              </div>
              {selectedOptions.length > 0 ? (
                <p className="text-xs text-zinc-400 font-light max-w-xl">
                  Дополнительно выбрано {selectedOptions.length} {selectedOptions.length === 1 ? 'опция' : (selectedOptions.length < 5 ? 'опции' : 'опций')}:{' '}
                  {selectedOptions.map(id => OPTIONS.find(o => o.id === id)?.name).filter(Boolean).join(', ')}.
                </p>
              ) : (
                <p className="text-xs text-zinc-400 font-light">Дополнительные опции не выбраны.</p>
              )}
            </div>

            <div className="w-full md:w-auto flex flex-col items-center md:items-end gap-2 shrink-0">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full md:w-auto px-12 py-4.5 bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm uppercase tracking-widest rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg text-center whitespace-nowrap"
              >
                Оставить заявку на эту комплектацию
              </button>
              <p className="text-[9px] text-zinc-500 font-light text-center leading-relaxed">
                * Итоговая стоимость рассчитывается индивидуально с учетом доставки и условий монтажа.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Lead Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm">
          <div
            className="relative w-full max-w-lg bg-zinc-800 rounded-[2rem] border border-zinc-700 shadow-2xl shadow-black/45 p-8 sm:p-10 overflow-hidden transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 text-zinc-500 hover:text-zinc-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-6">
                <div className="w-14 h-14 bg-teal-950/40 text-teal-400 border border-teal-850 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Конфигурация отправлена!</h3>
                <p className="text-sm text-zinc-300 max-w-sm mb-6 font-light">
                  Спасибо за обращение. Мы подготовим коммерческое предложение для комплектации <strong>{selectedModel.name}</strong> на сумму <strong>{formatPrice(totalPrice)}</strong> и свяжемся с вами в течение 15 минут.
                </p>
                <button
                  onClick={handleCloseModal}
                  className="px-6 py-2.5 bg-zinc-900 hover:bg-zinc-950 text-zinc-400 rounded-full text-xs font-bold uppercase tracking-widest border border-zinc-700 transition-colors"
                >
                  Закрыть окно
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-teal-400 font-bold">Оформить заказ</span>
                  <h3 className="text-2xl font-bold text-white">Заявка на спецификацию</h3>
                  <p className="text-xs text-zinc-400 font-light">
                    Вы выбрали базовую модель <strong className="text-white">{selectedModel.name}</strong> c {selectedOptions.length} доп. опциями. Итоговая стоимость: <strong className="text-teal-400">{formatPrice(totalPrice)}</strong>.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="modal-name" className="block text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-1.5">Контактное лицо *</label>
                    <input
                      type="text"
                      id="modal-name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-700 focus:border-teal-500 focus:bg-zinc-900 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-all font-light"
                      placeholder="Иван Иванов"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="modal-phone" className="block text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-1.5">Телефон *</label>
                      <input
                        type="tel"
                        id="modal-phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-700 focus:border-teal-500 focus:bg-zinc-900 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-all font-light"
                        placeholder="+7 (999) 000-00-00"
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-email" className="block text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-1.5">Email *</label>
                      <input
                        type="email"
                        id="modal-email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-700 focus:border-teal-500 focus:bg-zinc-900 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-all font-light"
                        placeholder="example@company.ru"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="modal-company" className="block text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-1.5">Компания</label>
                    <input
                      type="text"
                      id="modal-company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-700 focus:border-teal-500 focus:bg-zinc-900 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-all font-light"
                      placeholder="ООО 'АгроСоюз'"
                    />
                  </div>

                  <div className="flex items-start gap-2 pt-2">
                    <input type="checkbox" id="modal-agree" required className="mt-1 w-4 h-4 rounded border-zinc-700 text-teal-500 focus:ring-teal-500 bg-zinc-900" />
                    <label htmlFor="modal-agree" className="text-[10px] text-zinc-500 font-light leading-snug">
                      Я согласен на обработку персональных данных и соглашаюсь с политикой конфиденциальности.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-3.5 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 text-center shadow-md shadow-black/25"
                  >
                    Отправить запрос
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
