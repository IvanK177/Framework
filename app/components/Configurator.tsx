"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [comment, setComment] = useState("");

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
      setComment("");
    }, 300);
  };

  return (
    <section id="calculator" className="py-36 md:py-48 bg-zinc-900 border-y border-zinc-800">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-left max-w-2xl space-y-4 mb-20"
        >
          <span className="text-xs uppercase tracking-widest text-teal-400 font-bold font-mono">Конфигуратор</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-none">
            Расчет стоимости КДА
          </h2>
          <p className="text-base text-zinc-400 font-light">
            Соберите индивидуальную комплектацию установки дезинфекции и получите точный сметный расчет.
          </p>
        </motion.div>

        <div className="space-y-16">
          
          {/* Settings panel - full width */}
          <div className="space-y-12">
            {/* Models selection */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold font-mono">Шаг 1. Выберите базовую модель</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {MODELS.map((model, index) => {
                  const isSelected = selectedModel.id === model.id;
                  return (
                    <motion.button
                      key={model.id}
                      onClick={() => setSelectedModel(model)}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-6 sm:p-8 border text-left flex flex-col justify-between min-h-[16rem] h-auto transition-all duration-300 cursor-pointer rounded-none ${
                        isSelected
                          ? "border-teal-500 bg-zinc-800/40"
                          : "border-zinc-800 bg-transparent hover:border-zinc-700"
                      }`}
                    >
                      <div className="space-y-2.5 w-full">
                        <div className="flex justify-between items-start w-full">
                          <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider font-mono">{model.tagline}</span>
                        </div>
                        <h4 className="text-xl md:text-2xl font-extrabold text-white">{model.name}</h4>
                        <p className="text-sm text-zinc-400 leading-relaxed font-light line-clamp-3">{model.description}</p>
                      </div>
                      <div className="text-lg md:text-xl font-bold text-teal-400 mt-4 font-mono">
                        {formatPrice(model.price)}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Options selection */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold font-mono">Шаг 2. Дополнительные опции</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {OPTIONS.map((opt, index) => {
                  const isChecked = selectedOptions.includes(opt.id);
                  return (
                    <motion.button
                      key={opt.id}
                      onClick={() => handleOptionToggle(opt.id)}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 sm:p-6 border text-left flex items-start justify-between gap-4 sm:gap-6 transition-all duration-300 cursor-pointer rounded-none ${
                        isChecked
                          ? "border-teal-500 bg-zinc-800/40"
                          : "border-zinc-800 bg-transparent hover:border-zinc-700"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-6 h-6 rounded-none flex items-center justify-center border transition-all mt-0.5 shrink-0 ${
                            isChecked
                              ? "bg-teal-500 border-teal-500 text-zinc-950"
                              : "border-zinc-800 bg-zinc-900"
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
                      <span className="text-sm font-semibold text-zinc-400 whitespace-nowrap font-mono">
                        +{formatPrice(opt.price)}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Summary Bar - logical completion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-950/20 border border-zinc-800 rounded-none p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 select-none"
          >
            <div className="space-y-2.5 text-center md:text-left flex-grow">
              <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest block font-mono">Сводка по комплектации: {selectedModel.name}</span>
              <div className="text-3xl sm:text-4xl font-extrabold text-teal-400 tracking-tight font-mono">
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
                className="w-full md:w-auto px-6 sm:px-12 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs sm:text-sm uppercase tracking-widest rounded-none transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg text-center"
              >
                Оставить заявку на эту комплектацию
              </button>
              <p className="text-[9px] text-zinc-500 font-light text-center leading-relaxed">
                * Итоговая стоимость рассчитывается индивидуально с учетом доставки и условий монтажа.
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Lead Modal Dialog */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto rounded-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-6 right-6 text-zinc-500 hover:text-zinc-400 transition-colors active:scale-95 cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-6">
                  <div className="w-14 h-14 bg-teal-950/40 text-teal-400 border border-teal-850 rounded-none flex items-center justify-center mb-6">
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
                    className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-900 text-zinc-400 rounded-none text-xs font-bold uppercase tracking-widest border border-zinc-800 transition-colors active:scale-95 cursor-pointer"
                  >
                    Закрыть окно
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest text-teal-400 font-bold font-mono">Оформить заказ</span>
                    <h3 className="text-2xl font-bold text-white">Заявка на спецификацию</h3>
                    <p className="text-xs text-zinc-400 font-light">
                      Вы выбрали базовую модель <strong className="text-white">{selectedModel.name}</strong> c {selectedOptions.length} доп. опциями. Итоговая стоимость: <strong className="text-teal-400 font-mono">{formatPrice(totalPrice)}</strong>.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="modal-name" className="block text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-1.5 font-mono">Контактное лицо *</label>
                      <input
                        type="text"
                        id="modal-name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-teal-500 focus:bg-zinc-950 rounded-none px-4 py-2.5 text-sm text-white focus:outline-none transition-all font-light"
                        placeholder="Иван Иванов"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="modal-phone" className="block text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-1.5 font-mono">Телефон *</label>
                        <input
                          type="tel"
                          id="modal-phone"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-zinc-950 border border-zinc-800 focus:border-teal-500 focus:bg-zinc-950 rounded-none px-4 py-2.5 text-sm text-white focus:outline-none transition-all font-light"
                          placeholder="+7 (999) 000-00-00"
                        />
                      </div>
                      <div>
                        <label htmlFor="modal-email" className="block text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-1.5 font-mono">Email *</label>
                        <input
                          type="email"
                          id="modal-email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-zinc-950 border border-zinc-800 focus:border-teal-500 focus:bg-zinc-950 rounded-none px-4 py-2.5 text-sm text-white focus:outline-none transition-all font-light"
                          placeholder="example@company.ru"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="modal-company" className="block text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-1.5 font-mono">Компания</label>
                      <input
                        type="text"
                        id="modal-company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-teal-500 focus:bg-zinc-950 rounded-none px-4 py-2.5 text-sm text-white focus:outline-none transition-all font-light"
                        placeholder="ООО 'АгроСоюз'"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-comment" className="block text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-1.5 font-mono">КОММЕНТАРИЙ ИЛИ ОСОБЕННОСТИ ОБЪЕКТА</label>
                      <textarea
                        id="modal-comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-teal-500 focus:bg-zinc-950 rounded-none px-4 py-2.5 text-sm text-white focus:outline-none transition-all font-light h-24 resize-none"
                        placeholder="Укажите ширину проезда, особенности въезда, необходимость нестандартного монтажа или другие детали..."
                      />
                    </div>

                    <div className="flex items-start gap-2 pt-2">
                      <input type="checkbox" id="modal-agree" required className="mt-1 w-4 h-4 rounded-none border-zinc-800 text-teal-500 focus:ring-teal-500 bg-zinc-950" />
                      <label htmlFor="modal-agree" className="text-[10px] text-zinc-500 font-light leading-snug">
                        Я согласен на обработку персональных данных и соглашаюсь с политикой конфиденциальности.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-4 py-3.5 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs uppercase tracking-widest rounded-none transition-all duration-300 active:scale-95 text-center shadow-md shadow-black/25 cursor-pointer"
                    >
                      Отправить запрос
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
