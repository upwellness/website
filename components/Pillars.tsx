import { Check, Activity, Sparkles, Users } from "lucide-react";
import { PILLARS } from "@/lib/content";

const ICONS = [Activity, Sparkles, Users];

export function Pillars() {
  return (
    <section id="pillars" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="section-eyebrow">What We Do</p>
          <h2 className="mt-4 font-serif text-[40px] md:text-[64px] font-semibold text-ink leading-[1.05] tracking-tight">
            3 มิติ · <em className="text-rose not-italic italic">1 ระบบ</em>
          </h2>
          <p className="mt-5 text-[16px] md:text-[18px] text-ink-60 leading-relaxed">
            ลดน้ำหนัก · ดูแลสุขภาพ · Longevity ทำงานเชื่อมกัน · ไม่ใช่บริการแยกเรื่อง
            <br />
            เรา map รายคน เริ่มจากจุดที่คุณอยู่
          </p>
        </div>

        {/* Bento layout · Big primary + 2 medium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/8 rounded-[28px] overflow-hidden border border-ink/8">
          {PILLARS.map((p, idx) => {
            const Icon = ICONS[idx];
            const isFeatured = idx === 0; // Weight (ลดน้ำหนัก) is the lead pillar
            return (
              <article
                key={p.key}
                className={`bg-cream/95 backdrop-blur-md p-8 md:p-10 lg:p-12 ${
                  isFeatured ? "md:col-span-3 lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-mist text-rose">
                    <Icon size={22} strokeWidth={2.25} aria-hidden="true" />
                  </div>
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink-40 mt-2">
                    0{idx + 1} / 03
                  </span>
                </div>

                <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-rose font-medium">
                  {p.eyebrow}
                </p>
                <h3 className="mt-2 font-serif text-[32px] md:text-[40px] font-semibold text-ink leading-[1.1] tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-4 text-[15px] md:text-[16px] text-ink leading-[1.7]">
                  {p.blurb}
                </p>

                <ul className="mt-7 space-y-3 pt-6 border-t border-ink/8">
                  {p.points.map(pt => (
                    <li key={pt} className="flex items-start gap-3 text-[14px] text-ink-60 leading-relaxed">
                      <Check size={15} strokeWidth={2.5} className="mt-0.5 text-rose flex-shrink-0" aria-hidden="true" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
