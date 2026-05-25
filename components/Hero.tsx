import { ArrowRight, ChevronDown, TrendingUp, Activity, Sparkles } from "lucide-react";
import { PROOF_METRICS } from "@/lib/content";

/**
 * Hero · Apple Health × Editorial
 * ─────────────────────────────────
 * - Big editorial headline "Live Longer. Live Better."
 * - Three tilted/stacked glass cards floating between headline and Thai philosophy
 * - The cards visualize the three strongest proof points (people · ton lost · years)
 */
export function Hero() {
  // Pick the 3 strongest signals for the tilted cards
  const [c1, c2, c3] = [PROOF_METRICS[0], PROOF_METRICS[2], PROOF_METRICS[1]];

  return (
    <section id="top" className="relative px-6 pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow */}
        <p className="text-center font-mono text-[10.5px] uppercase tracking-[0.24em] text-rose">
          Science-based Longevity · Wellness Community · Est. 2558
        </p>

        {/* Headline · massive editorial · English anchor */}
        <h1 className="mt-7 text-center font-serif font-semibold text-ink leading-[0.96] tracking-[-0.025em] text-[64px] sm:text-[88px] md:text-[112px] lg:text-[128px]">
          Live <em className="not-italic text-rose font-medium italic">Longer</em>.
          <br />
          Live <em className="not-italic text-rose font-medium italic">Better</em>.
        </h1>

        {/* ─── Tilted Glass Card Stack · the new centerpiece ─── */}
        <div
          className="relative mx-auto mt-16 md:mt-20 mb-12 md:mb-16 h-[300px] sm:h-[320px] md:h-[340px] max-w-4xl"
          aria-label="Key metrics: people transformed, weight lost, years of experience"
        >
          {/* Soft halo behind cards */}
          <div
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto h-[220px] w-[80%] rounded-full blur-3xl opacity-60 pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(184,150,90,0.25), rgba(140,76,76,0.10) 50%, transparent 75%)" }}
            aria-hidden="true"
          />

          {/* Left card · tilted left · slightly behind */}
          <div className="absolute left-0 sm:left-4 md:left-8 top-6 md:top-4 w-[180px] sm:w-[220px] md:w-[260px] z-10">
            <article className="glass-card glass-card-rose tilt-l tilt-hover p-5 md:p-7 cursor-default">
              <div className="flex items-center gap-1.5 text-rose mb-2">
                <Sparkles size={14} strokeWidth={2.5} aria-hidden="true" />
                <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] font-semibold">{c1.label}</span>
              </div>
              <div className="font-serif text-[44px] md:text-[60px] font-bold leading-[0.95] tracking-tight text-rose">
                {c1.value}
              </div>
              <div className="mt-2 spark-line" aria-hidden="true" />
              <p className="mt-3 font-thai text-[11.5px] md:text-[12.5px] text-ink-60 leading-snug">
                {c1.context}
              </p>
            </article>
          </div>

          {/* Center card · upright · in front */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[200px] sm:w-[240px] md:w-[280px] z-20">
            <article className="glass-card glass-card-gold tilt-sl tilt-hover p-5 md:p-7 cursor-default">
              <div className="flex items-center gap-1.5 text-bronze mb-2" style={{ color: "var(--bronze)" }}>
                <TrendingUp size={14} strokeWidth={2.5} aria-hidden="true" />
                <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] font-semibold" style={{ color: "var(--bronze)" }}>
                  {c2.label}
                </span>
              </div>
              <div className="font-serif text-[44px] md:text-[60px] font-bold leading-[0.95] tracking-tight" style={{ color: "var(--bronze)" }}>
                {c2.value}
              </div>
              <div className="mt-2 spark-line" aria-hidden="true" />
              <p className="mt-3 font-thai text-[11.5px] md:text-[12.5px] text-ink-60 leading-snug">
                {c2.context}
              </p>
            </article>
          </div>

          {/* Right card · tilted right · slightly behind */}
          <div className="absolute right-0 sm:right-4 md:right-8 top-6 md:top-4 w-[180px] sm:w-[220px] md:w-[260px] z-10">
            <article className="glass-card glass-card-green tilt-r tilt-hover p-5 md:p-7 cursor-default">
              <div className="flex items-center gap-1.5 text-green mb-2">
                <Activity size={14} strokeWidth={2.5} aria-hidden="true" />
                <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] font-semibold">{c3.label}</span>
              </div>
              <div className="font-serif text-[44px] md:text-[60px] font-bold leading-[0.95] tracking-tight text-green">
                {c3.value}
              </div>
              <div className="mt-2 spark-line" aria-hidden="true" />
              <p className="mt-3 font-thai text-[11.5px] md:text-[12.5px] text-ink-60 leading-snug">
                {c3.context}
              </p>
            </article>
          </div>
        </div>

        {/* Thai philosophical statement · the heart */}
        <p className="mt-6 mx-auto max-w-3xl text-center font-serif text-[22px] sm:text-[28px] md:text-[34px] font-medium text-ink leading-[1.35] tracking-tight">
          ความรู้ที่ถูกต้อง · ทำให้การดูแลสุขภาพ
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          เป็นเรื่องง่ายของทุกคน
        </p>

        {/* Sub · supporting promise */}
        <p className="mt-6 mx-auto max-w-2xl text-center text-[15px] md:text-[17px] text-ink-60 leading-[1.6]">
          ลดน้ำหนัก · ดูแลสุขภาพ · Longevity Protocol · Community ที่ยั่งยืน
          <br />
          <span className="text-ink-40">ที่ปรึกษามืออาชีพ · ดูแลแบบ personalized · evidence-based</span>
        </p>

        {/* CTAs · single primary + single ghost */}
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="#assessment"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[14px] font-semibold text-white hover:bg-rose transition-all hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2"
          >
            ทำแบบประเมิน 1 นาที <ArrowRight size={16} strokeWidth={2.5} />
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-full bg-white/60 border border-ink/10 px-7 py-3.5 text-[14px] font-semibold text-ink hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2"
          >
            ดูวิธีการทำงาน
          </a>
        </div>

        {/* Scroll indicator · subtle */}
        <div className="mt-14 md:mt-16 flex justify-center" aria-hidden="true">
          <a
            href="#proof"
            className="text-ink-40 hover:text-rose transition animate-bounce"
            style={{ animationDuration: "2.5s" }}
          >
            <ChevronDown size={28} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
