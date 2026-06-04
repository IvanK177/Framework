"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setEmail("");
    setCompany("");
    setMessage("");
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-zinc-900 relative">
      <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-8">
            <span className="text-xs uppercase tracking-widest text-teal-400 font-bold">Обратная связь</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Закажите расчет стоимости КДА
            </h2>
            <p className="text-zinc-400 font-light leading-relaxed">
              Заполните форму, и наш инженер-технолог свяжется с вами в течение 15 минут для уточнения технических деталей и отправки коммерческого предложения.
            </p>

            {/* Contact Details minimal grid */}
            <div className="space-y-6 pt-4 border-t border-zinc-800">
              <div className="flex items-start gap-4">
                <span className="text-teal-500 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.302a12.017 12.017 0 01-4.507-4.507c-.24-.441-.074-.927.302-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-widest text-zinc-500">Телефон горячей линии</span>
                  <a href="tel:+78005553535" className="text-lg font-bold text-white hover:text-teal-400 hover-underline-animation transition-colors">
                    8 (800) 555-35-35
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-teal-500 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-widest text-zinc-500">Электронная почта</span>
                  <a href="mailto:sale@spda-barrier.ru" className="text-lg font-bold text-white hover:text-teal-400 hover-underline-animation transition-colors">
                    sale@spda-barrier.ru
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-teal-500 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </span>
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-widest text-zinc-500">Наш Telegram-канал</span>
                  <a href="https://t.me/spda_disinfection" target="_blank" className="text-lg font-bold text-white hover:text-teal-400 hover-underline-animation transition-colors">
                    @spda_disinfection
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-800 rounded-[2rem] p-8 sm:p-12 border border-zinc-700 shadow-lg shadow-black/30 relative">
              
              {/* Success Message Overlay */}
              {isSubmitted && (
                <div className="absolute inset-0 bg-zinc-800 rounded-[2rem] flex flex-col items-center justify-center text-center p-8 z-20">
                  <div className="w-14 h-14 bg-teal-950/40 text-teal-400 border border-teal-850 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Заявка отправлена</h3>
                  <p className="text-sm text-zinc-300 max-w-sm mb-6 font-light">
                    Инженер-технолог перезвонит вам в течение 15 минут для уточнения технических деталей.
                  </p>
                  <button onClick={handleReset} className="px-6 py-2.5 bg-zinc-900 hover:bg-zinc-950 text-zinc-400 rounded-full text-xs font-bold uppercase tracking-widest border border-zinc-700 transition-colors">
                    Отправить еще одну форму
                  </button>
                </div>
              )}

              {/* Form fields */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="form-name" className="block text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-2">Имя контактного лица *</label>
                    <input
                      type="text"
                      id="form-name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-700 focus:border-teal-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-200 font-light"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label htmlFor="form-phone" className="block text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-2">Номер телефона *</label>
                    <input
                      type="tel"
                      id="form-phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-700 focus:border-teal-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-200 font-light"
                      placeholder="+7 (999) 000-00-00"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="form-email" className="block text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-2">Email *</label>
                    <input
                      type="email"
                      id="form-email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-700 focus:border-teal-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-200 font-light"
                      placeholder="example@company.ru"
                    />
                  </div>
                  <div>
                    <label htmlFor="form-company" className="block text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-2">Название компании</label>
                    <input
                      type="text"
                      id="form-company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-700 focus:border-teal-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-200 font-light"
                      placeholder="ООО 'АгроСоюз'"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="form-message" className="block text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-2">Сообщение или требования к объекту</label>
                  <textarea
                    id="form-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 focus:border-teal-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-200 font-light"
                    placeholder="Укажите ширину проезда, особенности въезда или необходимые опции (зимний пакет, датчики скорости)..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="form-agree" required className="mt-1 w-4 h-4 rounded border-zinc-700 text-teal-500 focus:ring-teal-500 bg-zinc-900" />
                  <label htmlFor="form-agree" className="text-xs text-zinc-500 font-light leading-relaxed">
                    Я согласен на обработку персональных данных и соглашаюсь с <a href="#" className="underline hover:text-zinc-400 transition-colors">политикой конфиденциальности</a>.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 transform hover:-translate-y-0.5 text-center shadow-md hover:shadow-lg shadow-black/25"
                >
                  Получить коммерческое предложение
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
