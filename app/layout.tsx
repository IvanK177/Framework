import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Рамочная установка дезинфекции автотранспорта КДА",
  description: "Современные системы дезинфекции колес, днища и бортов автомобилей для защиты предприятий, птицефабрик, ферм и карантинных зон от заноса инфекций.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-zinc-900 text-zinc-100 font-sans">{children}</body>
    </html>
  );
}
