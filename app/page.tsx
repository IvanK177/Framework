import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Configurator from "./components/Configurator";
import Faq from "./components/Faq";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full flex-grow">
        <Hero />
        <Features />
        <Configurator />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
