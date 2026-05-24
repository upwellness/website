import type { Metadata } from "next";
import { Cormorant_Garamond, Sarabun, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif-runtime",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
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
  title: "UP Wellness · Science-based Longevity & Wellness Community",
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
      className={`${cormorant.variable} ${sarabun.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="aurora-bg" aria-hidden="true"><div className="aurora-orb-3" /></div>
        {children}
      </body>
    </html>
  );
}
