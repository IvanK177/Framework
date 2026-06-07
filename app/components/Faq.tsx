"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Какой транспорт может проходить через рамку КДА?",
    answer: "В зависимости от выбранной базовой модели. КДА-1 рассчитана на легковой и малотоннажный коммерческий транспорт. Модели КДА-2 и КДА-Max спроектированы для обработки крупнотоннажных еврофур, строительной и сельскохозяйственной техники.",
  },
  {
    question: "Возможна ли эксплуатация установки в зимний период?",
    answer: "Да, при выборе опции «Зимний пакет». В этом случае система оснащается автоматическим подогревом форсуночных трасс и накопительной емкости, а также системой автоматической продувки магистралей сжатым воздухом, что исключает замерзание жидкости при отрицательных температурах.",
  },
  {
    question: "Какие требования к площадке для монтажа?",
    answer: "Установка монтируется на ровное твердое основание (бетонная плита или асфальт). Требуется подключение к сети электропитания (220 В или 380 В в зависимости от мощности насоса) и подвод технической воды для наполнения бака.",
  },
  {
    question: "Какое дезинфицирующее средство можно использовать?",
    answer: "Установка совместима с большинством сертифицированных жидких дезинфицирующих средств, не образующих обильной пены. Магистрали и форсунки выполнены из химически стойкой нержавеющей стали, устойчивой к агрессивным средам.",
  },
  {
    question: "Что делать, если потребуется техническая поддержка?",
    answer: "Мы обеспечиваем полную поддержку наших клиентов. При возникновении вопросов по эксплуатации или для заказа комплектующих вы всегда можете связаться с нами по электронной почте или телефону, указанным внизу страницы.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-36 md:py-48 bg-zinc-900 border-t border-zinc-800 relative">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-left max-w-2xl space-y-4 mb-20"
        >
          <span className="text-xs uppercase tracking-widest text-teal-400 font-bold font-mono">FAQ</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-none uppercase font-mono">
            Часто задаваемые вопросы
          </h2>
          <p className="text-base text-zinc-400 font-light">
            Ответы на ключевые вопросы о проектировании, зимней эксплуатации, монтаже и обслуживании рамочных постов.
          </p>
        </motion.div>

        <div className="max-w-4xl space-y-0 divide-y divide-zinc-800 border-t border-b border-zinc-800">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex justify-between items-center text-left py-2 hover:text-white transition-colors cursor-pointer group"
                >
                  <span className="text-lg md:text-xl font-bold text-zinc-200 group-hover:text-white transition-colors pr-8">
                    {item.question}
                  </span>
                  <span className="text-teal-500 text-xl md:text-2xl shrink-0 transition-transform duration-300">
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className="inline-block"
                    >
                      +
                    </motion.span>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
