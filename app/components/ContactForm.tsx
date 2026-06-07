"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section id="contact" className="py-36 md:py-48 bg-zinc-900 border-t border-zinc-800 relative">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto space-y-12"
        >
          <span className="text-xs uppercase tracking-widest text-teal-400 font-bold font-mono block">Контакты</span>
          
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight uppercase font-mono">
            Связь с нами
          </h2>

          <div className="flex flex-col gap-6 md:gap-10 py-6">
            <a
              href="tel:+78005553535"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white hover:text-teal-400 transition-colors font-mono tracking-tight"
            >
              8 (800) 555-35-35
            </a>
            
            <a
              href="mailto:sale@spda-barrier.ru"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-300 hover:text-teal-400 hover-underline-animation transition-colors font-mono"
            >
              sale@spda-barrier.ru
            </a>
          </div>

          <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Для заказа оборудования используйте конфигуратор выше. По всем техническим вопросам и для расчета нестандартных проектов пишите на нашу электронную почту.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
