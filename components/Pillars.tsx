import { Check } from "lucide-react";
import { PILLARS } from "@/lib/content";

export function Pillars() {
  return (
    <section id="pillars" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-eyebrow">What We Do</p>
          <h2 className="section-title mt-3">3 มิติ · <em>1 ระบบ</em></h2>
          <p className="mt-4 text-ink-60 text-base leading-relaxed">
            ลดน้ำหนัก · ดูแลสุขภาพ · Longevity ทำงานเชื่อมกัน · ไม่ใช่บริการแยกเรื่อง
            เรา map รายคน เริ่มจากจุดที่คุณอยู่
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PILLARS.map((p, idx) => (
            <article key={p.key} className="liquid liquid-shine liquid-hover rounded-3xl p-6 md:p-7 relative overflow-hidden">
              {/* Soft accent glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: `radial-gradient(circle, ${idx === 1 ? "rgba(57,103,85,0.18)" : idx === 2 ? "rgba(184,150,90,0.18)" : "rgba(140,76,76,0.18)"}, transparent 70%)`, filter: "blur(40px)" }}
              />
              <div className="relative">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-rose">{p.eyebrow}</p>
                <h3 className="mt-2 font-serif text-3xl font-semibold text-ink">{p.title}</h3>
                <p className="mt-3 text-[14px] text-ink-60 leading-relaxed">{p.blurb}</p>
                <ul className="mt-5 space-y-2">
                  {p.points.map(pt => (
                    <li key={pt} className="flex items-start gap-2 text-[13px] text-ink">
                      <Check size={14} strokeWidth={2.5} className="mt-0.5 text-green flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
