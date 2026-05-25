import type { Metadata } from "next";
import { Manrope, Fraunces, Inter, Sarabun, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-head-runtime",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const fraunces = Fraunces({
  variable: "--font-display-runtime",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-body-runtime",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});
const sarabun = Sarabun({
  variable: "--font-thai-runtime",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
});
const jetbrains = JetBrains_Mono({
  variable: "--font-mono-runtime",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UP Wellness — Live longer. Live better. ดูแลสุขภาพ ดูแลชีวิต ดูแลอายุขัย",
  description: "ที่ปรึกษาสุขภาพมืออาชีพ · โปรแกรมลดน้ำหนัก · Longevity Protocol · Community วิ่ง ปั่น Ice Bath และอื่นๆ · evidence-based · personalized",
  keywords: ["UP Wellness", "longevity", "wellness", "ลดน้ำหนัก", "ดูแลสุขภาพ", "Nutrilite", "biohacking", "community"],
  openGraph: {
    title: "UP Wellness · Longevity & Wellness Community",
    description: "Science-based longevity · personalized wellness program · vibrant community",
    type: "website",
    locale: "th_TH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="th"
      className={`${manrope.variable} ${fraunces.variable} ${inter.variable} ${sarabun.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-warm-white text-ink">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
