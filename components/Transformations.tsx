import { ArrowRight, ArrowUpRight } from "lucide-react";
import { JOURNEYS } from "@/lib/content";

const ACCENT: Record<string, { card: string; chip: string; ring: string; ink: string }> = {
  rose:  { card: "glass-card-rose",  chip: "bg-rose/10 text-rose",       ring: "ring-rose/15",   ink: "text-rose" },
  green: { card: "glass-card-green", chip: "bg-green/10 text-green",     ring: "ring-green/15",  ink: "text-green" },
  gold:  { card: "glass-card-gold",  chip: "bg-[#B8965A]/12 text-[#A67849]", ring: "ring-[#B8965A]/20", ink: "text-[#A67849]" },
};

/**
 * Transformations · "Journeys" strip
 * ─────────────────────────────────
 * Horizontal scroll on mobile, 3-up grid on desktop.
 * Never uses the word "before/after" — frames each story as a path forward.
 */
export function Transformations() {
  return (
    <section id="journeys" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow + title */}
        <div className="max-w-3xl">
          <p className="section-eyebrow">ผู้คนที่เดินทางกับเรา</p>
          <h2 className="mt-3 font-serif text-[40px] md:text-[64px] font-semibold text-ink leading-[1.05] tracking-tight">
            ทุกคนเริ่มจากจุดที่ <em className="text-rose not-italic italic">ไม่เหมือนกัน</em>
            <br className="hidden md:block" />
            แต่จุดหมายเหมือนกัน — <em className="text-green not-italic italic">สุขภาพที่ยั่งยืน</em>
          </h2>
          <p className="mt-5 text-[16px] md:text-[18px] text-ink-60 leading-relaxed max-w-2xl">
            ตัวเลขจริง · เคสจริง · เก็บจากลูกค้าตลอด 11 ปี
            <span className="block mt-1 text-ink-40 text-[14px]">
              *ภาพและรายละเอียดเปลี่ยนเพื่อรักษาความเป็นส่วนตัว · ผลขึ้นกับแต่ละบุคคล
            </span>
          </p>
        </div>

        {/* Strip: horizontal scroll on mobile, 3-up grid on md+ */}
        <div className="mt-12 md:mt-16 journey-strip flex md:grid md:grid-cols-3 gap-5 md:gap-6 overflow-x-auto md:overflow-visible -mx-6 px-6 md:mx-0 md:px-0 pb-4 md:pb-0">
          {JOURNEYS.map((j, i) => {
            const a = ACCENT[j.accent] ?? ACCENT.rose;
            return (
              <article
                key={i}
                className={`journey-card glass-card ${a.card} liquid-hover flex-shrink-0 w-[78vw] sm:w-[60vw] md:w-auto p-7 md:p-8 flex flex-col`}
              >
                {/* Image placeholder · symbolic, not literal portrait */}
                <div
                  className={`relative h-44 md:h-52 rounded-2xl mb-6 ring-1 ${a.ring} overflow-hidden flex items-center justify-center`}
                  style={{
                    background:
                      j.accent === "rose"
                        ? "linear-gradient(135deg, #F4ECEC 0%, #E9DBDB 50%, #F4ECEC 100%)"
                        : j.accent === "green"
                        ? "linear-gradient(135deg, #E5EDEA 0%, #D6E3DE 50%, #E5EDEA 100%)"
                        : "linear-gradient(135deg, #F5E9D1 0%, #ECD9B5 50%, #F5E9D1 100%)",
                  }}
                  aria-hidden="true"
                >
                  {/* Abstract progress arc — never a literal face */}
                  <svg viewBox="0 0 200 120" className="w-3/4 h-3/4 opacity-90" aria-hidden="true">
                    <defs>
                      <linearGradient id={`grad-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={j.accent === "rose" ? "#B57878" : j.accent === "green" ? "#5A8472" : "#B8965A"} stopOpacity="0.4" />
                        <stop offset="100%" stopColor={j.accent === "rose" ? "#8C4C4C" : j.accent === "green" ? "#396755" : "#A67849"} stopOpacity="1" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 20 90 Q 60 30, 100 50 T 180 30"
                      fill="none"
                      stroke={`url(#grad-${i})`}
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <circle cx="20" cy="90" r="5" fill={j.accent === "rose" ? "#B57878" : j.accent === "green" ? "#5A8472" : "#B8965A"} opacity="0.5" />
                    <circle cx="180" cy="30" r="6" fill={j.accent === "rose" ? "#8C4C4C" : j.accent === "green" ? "#396755" : "#A67849"} />
                  </svg>
                  <span className={`absolute top-3 left-3 font-mono text-[9.5px] uppercase tracking-[0.18em] font-semibold ${a.chip} px-2.5 py-1 rounded-full`}>
                    {j.period}
                  </span>
                </div>

                {/* Metric · the headline number */}
                <div className={`font-serif text-[44px] md:text-[52px] font-bold leading-[0.95] tracking-tight ${a.ink}`}>
                  {j.metric}
                </div>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ink-40">{j.persona}</p>

                {/* Story */}
                <h3 className="mt-5 font-serif text-[20px] md:text-[22px] font-semibold text-ink leading-snug">
                  {j.headline}
                </h3>
                <p className="mt-3 font-thai text-[13.5px] text-ink-60 leading-relaxed flex-1">
                  {j.detail}
                </p>

                {/* Tag chips */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {j.tags.map(t => (
                    <span key={t} className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full ${a.chip}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Outro CTA */}
        <div className="mt-10 md:mt-12 flex justify-center">
          <a
            href="#assessment"
            className="group inline-flex items-center gap-2 rounded-full bg-ink/5 hover:bg-ink px-6 py-3 text-[14px] font-semibold text-ink hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2"
          >
            <span>เริ่มเดินทางของคุณ · ทำแบบประเมิน 1 นาที</span>
            <ArrowUpRight size={16} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
