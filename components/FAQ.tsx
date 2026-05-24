"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ as FAQ_DATA } from "@/lib/content";

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-14">
          <p className="section-eyebrow">Questions Honestly</p>
          <h2 className="mt-3 font-serif text-[36px] md:text-[52px] font-semibold text-ink leading-tight tracking-tight">
            คำถามที่ได้ <em className="text-rose not-italic italic">บ่อยที่สุด</em>
          </h2>
        </div>

        <div className="liquid rounded-[28px] overflow-hidden border border-ink/8">
          {FAQ_DATA.map((item, i) => {
            const open = openIdx === i;
            return (
              <div
                key={i}
                className={`border-b border-ink/8 last:border-b-0 transition-colors ${open ? "bg-white/60" : ""}`}
              >
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={`faq-panel-${i}`}
                  className="w-full text-left px-6 md:px-8 py-5 md:py-6 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-inset"
                >
                  <h3 className="font-serif text-[18px] md:text-[20px] font-semibold text-ink leading-snug pr-4">
                    {item.q}
                  </h3>
                  <Plus
                    size={20}
                    strokeWidth={2.25}
                    aria-hidden="true"
                    className={`flex-shrink-0 mt-1 text-rose transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                  />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  hidden={!open}
                  className="px-6 md:px-8 pb-6 md:pb-7"
                >
                  <p className="font-thai text-[15px] md:text-[16px] text-ink-60 leading-[1.75]">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-[14px] text-ink-60">
          คำถามอื่นๆ?{" "}
          <a href="#contact" className="text-rose font-semibold hover:underline">
            ทักทาง LINE มาถามได้เลย →
          </a>
        </p>
      </div>
    </section>
  );
}
