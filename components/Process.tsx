import { Search, Compass, Sparkles, ArrowRight } from "lucide-react";
import { PROCESS } from "@/lib/content";

const ICONS = [Search, Compass, Sparkles];

export function Process() {
  return (
    <section id="how" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="section-eyebrow">How It Works</p>
          <h2 className="mt-3 font-serif text-[36px] md:text-[52px] font-semibold text-ink leading-tight tracking-tight">
            3 ขั้น · จาก <em className="text-rose not-italic italic">"ไม่รู้จะเริ่มไหน"</em><br />
            สู่ <em className="text-rose not-italic italic">"กำลังดูแลตัวเองดี"</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Connector line desktop only */}
          <div aria-hidden="true" className="hidden md:block absolute top-[88px] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-rose/30 to-transparent" />

          {PROCESS.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <article key={s.step} className="text-center relative">
                {/* Step number */}
                <div className="inline-flex flex-col items-center relative z-10">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink-40">
                    Step {s.step}
                  </span>
                  <div className="mt-2 flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full liquid liquid-shine">
                    <Icon size={28} strokeWidth={1.75} className="text-rose" aria-hidden="true" />
                  </div>
                </div>

                <h3 className="mt-6 font-serif text-[28px] md:text-[32px] font-semibold text-ink leading-none">
                  {s.title}
                </h3>
                <p className="mt-1 font-thai text-[14px] text-rose font-medium">{s.blurb}</p>

                <p className="mt-4 text-[14px] md:text-[15px] text-ink-60 leading-relaxed max-w-xs mx-auto">
                  {s.detail}
                </p>

                <p className="mt-4 font-mono text-[10.5px] uppercase tracking-widest text-ink-40">
                  ⏱ {s.duration}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a href="#assessment"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[14px] font-semibold text-white hover:bg-rose transition-all hover:shadow-lg">
            เริ่มจาก Step 1 ฟรี <ArrowRight size={16} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
