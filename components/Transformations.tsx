/* Transformations · 3 story rows · matches UP Wellness.html design */
import { SectionHeader } from "./SectionHeader";
import { LANDING_TRANSFORMATIONS } from "@/lib/content";

const TONES = {
  rose:     { card: "glass-rose",     dotBg: "bg-rose",     text: "text-rose-deep" },
  wellness: { card: "glass-wellness", dotBg: "bg-wellness", text: "text-wellness-deep" },
  amber:    { card: "glass-amber",    dotBg: "bg-amber",    text: "text-amber" },
};

export function Transformations() {
  return (
    <section id="stories" className="relative mx-auto max-w-content px-6 lg:px-10 py-20 lg:py-28">
      <SectionHeader
        number="05"
        label="Stories that show"
        title={
          <>
            เห็นด้วย<span className="italic text-rose">ตา.</span>{" "}
            วัดด้วย<span className="italic text-wellness">ตัวเลข.</span>
          </>
        }
        description="คนจริง · ระยะเวลาจริง · ภาพและ biomarkers ที่บอกเรื่องราวได้ดีกว่าคำพูด"
        dot="bg-rose"
        accent="text-rose"
      />
      <div className="relative space-y-6 lg:space-y-8">
        {/* Liquid drift backdrop */}
        <div aria-hidden className="absolute -inset-12 pointer-events-none -z-10">
          <div className="blob-1 absolute top-10 left-1/4 h-72 w-72 rounded-full bg-rose-pale/55 blur-[110px]" />
          <div className="blob-2 absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-amber-pale/55 blur-[110px]" />
          <div className="blob-1 absolute top-1/2 left-1/2 h-80 w-80 rounded-full bg-wellness-pale/45 blur-[120px]" />
        </div>
        {LANDING_TRANSFORMATIONS.map((tr, i) => {
          const tn = TONES[tr.tone];
          return (
            <article key={i} className="relative">
              <div className={`relative overflow-hidden rounded-[32px] ${tn.card} glass-shine`}>
                <div className="grid lg:grid-cols-12 items-stretch gap-0">
                  {/* Image A · start */}
                  <div className="lg:col-span-3 p-5">
                    <div
                      className="relative h-full overflow-hidden rounded-2xl aspect-[16/10] lg:aspect-[4/5] img-slot rotate-[-1.5deg] origin-bottom-right"
                      data-label={`${tr.name} · ${tr.startLabel}`}
                    >
                      <div className="absolute top-3 left-3">
                        <span className="rounded-full bg-white/90 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-ink-80 font-bold">
                          {tr.startLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Story / metrics */}
                  <div className="lg:col-span-6 relative flex flex-col justify-between p-7 lg:p-9 border-y lg:border-y-0 lg:border-x border-white/55">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="font-mono text-[10px] font-bold text-ink-60">N° {String(i + 1).padStart(2, "0")}</span>
                        <span className={`h-1.5 w-1.5 rounded-full ${tn.dotBg}`} />
                        <span className={`font-mono text-[10px] font-bold uppercase tracking-[0.14em] ${tn.text}`}>
                          {tr.program} · {tr.period}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-5">
                        {tr.metrics.map((m, j) => (
                          <div key={j} className={j > 0 ? "pl-4 border-l border-white/50" : ""}>
                            <div className="font-display text-[22px] lg:text-[28px] font-medium tracking-tight text-ink leading-none whitespace-nowrap">
                              {m.v}
                            </div>
                            <div className="mt-2 font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-60">{m.l}</div>
                          </div>
                        ))}
                      </div>
                      <blockquote className="mt-7 font-thai text-[14.5px] leading-[1.75] text-ink-80 italic max-w-md">
                        &ldquo;{tr.quote}&rdquo;
                      </blockquote>
                    </div>
                    <div className="mt-6 pt-5 border-t border-white/55 flex flex-wrap items-center justify-between gap-3 text-[12px]">
                      <div className="font-thai text-ink-80">
                        <span className="font-bold text-ink">{tr.name}</span> · {tr.age} · {tr.role}
                      </div>
                      <a
                        href="#assessment"
                        className={`font-mono text-[10px] font-bold uppercase tracking-[0.14em] ${tn.text} hover:opacity-70 transition-opacity`}
                      >
                        เริ่มของคุณ →
                      </a>
                    </div>
                  </div>
                  {/* Image B · end */}
                  <div className="lg:col-span-3 p-5">
                    <div
                      className="relative h-full overflow-hidden rounded-2xl aspect-[16/10] lg:aspect-[4/5] img-slot rotate-[1.5deg] origin-bottom-left"
                      data-label={`${tr.name} · ${tr.endLabel}`}
                    >
                      <div className="absolute top-3 right-3">
                        <span className={`rounded-full ${tn.dotBg} px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white font-bold`}>
                          {tr.endLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
