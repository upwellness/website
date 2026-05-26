/* Hero · matches UP Wellness.html design — mesh atmosphere + stacked tilted glass cards */
import Image from "next/image";
import { LANDING_STATS } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Mesh atmosphere · 3 floating colored blurs */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[900px]">
        <div className="mesh-a absolute -top-32 -left-20 h-[500px] w-[500px] rounded-full bg-rose-pale/55 blur-[130px]" />
        <div className="mesh-b absolute top-20 right-0 h-[460px] w-[460px] rounded-full bg-amber-pale/60 blur-[130px]" />
        <div className="mesh-c absolute top-72 left-1/3 h-[560px] w-[560px] rounded-full bg-wellness-pale/55 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-content px-6 lg:px-10 pt-16 lg:pt-24 pb-14 lg:pb-20">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 flex-wrap mb-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose/25 bg-rose-ultra px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-rose">
            <span className="text-sm leading-none">∞</span>
            Health · Wellness · Longevity
          </span>
          <span className="font-mono text-[10px] text-ink-40">— Est. 2558 · Bangkok</span>
        </div>

        {/* Headline + side panel */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16 items-end">
          <div>
            <h1 className="font-display font-light tracking-[-0.02em] text-ink text-[clamp(48px,8vw,108px)] leading-[1.22]">
              อายุยืน <span className="italic font-normal text-rose">ไม่ใช่</span>
              <br />
              <span className="text-ink-80">แค่ตัวเลข</span>
              <br />
              <span className="bg-gradient-to-br from-rose-deep via-rose to-amber bg-clip-text text-transparent">
                แต่คือคุณภาพ.
              </span>
            </h1>
            <p className="mt-8 max-w-xl font-thai text-[17px] leading-[1.75] text-ink-60">
              UP Wellness คือบ้านของคนที่ตั้งใจดูแลสุขภาพอย่างจริงจัง ·
              เราออกแบบเส้นทางสุขภาพและ Longevity Protocol ส่วนบุคคล โดยทีมที่ปรึกษาและโค้ช · พร้อมชุมชนที่จะเดินไปด้วยกัน
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#assessment"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14px] font-bold text-white hover:bg-rose-deep transition-all hover:-translate-y-0.5 shadow-[0_18px_40px_-18px_rgba(24,21,26,0.5)]"
              >
                <span>ประเมินสุขภาพฟรี · 90 วินาที</span>
                <span className="text-base leading-none transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#programs"
                className="inline-flex items-center gap-2 rounded-full border border-ink-20 px-6 py-3.5 text-[14px] font-bold text-ink hover:border-ink hover:bg-white transition-all"
              >
                ดูโปรแกรมทั้งหมด
              </a>
            </div>

            {/* trust line */}
            <div className="mt-9 flex items-center gap-5 font-mono text-[11px] text-ink-40">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-status-optimal" />
                ที่ปรึกษาเฉพาะตัว
              </span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-science" />
                Science-based
              </span>
              <span className="hidden md:inline">·</span>
              <span className="hidden md:flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                Community-led
              </span>
            </div>
          </div>

          {/* Stacked tilted liquid-glass cards */}
          <aside className="relative min-h-[600px] lg:min-h-[640px]">
            {/* Liquid color field behind everything */}
            <div aria-hidden className="absolute -inset-10 pointer-events-none">
              <div className="blob-1 absolute top-0 left-8 h-72 w-72 rounded-full bg-rose-pale/75 blur-[90px]" />
              <div className="blob-2 absolute top-20 right-0 h-80 w-80 rounded-full bg-amber-pale/70 blur-[100px]" />
              <div className="blob-1 absolute bottom-0 left-0 h-72 w-72 rounded-full bg-wellness-pale/65 blur-[90px]" />
            </div>

            {/* ─ Back image card · tilted +5° ─ */}
            <div className="absolute top-0 right-0 w-[78%] h-[300px] lg:h-[340px] rotate-[5deg] origin-bottom-left">
              <div className="relative h-full w-full overflow-hidden rounded-[28px] glass-rose glass-shine">
                <div className="absolute inset-3 rounded-[22px] overflow-hidden">
                  <Image
                    src="/img/hero-lifestyle.jpg"
                    alt="UP Wellness · Run Club at golden hour · Bangkok"
                    fill
                    sizes="(min-width: 1024px) 36vw, 78vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-rose/90 backdrop-blur px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white">
                    <span className="h-1 w-1 rounded-full bg-white" />
                    UP · Lifestyle
                  </span>
                  <span className="font-mono text-[10px] text-white/95 bg-rose-deep/60 backdrop-blur px-2 py-0.5 rounded-full">№ 03</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="inline-block rounded-xl bg-white/85 backdrop-blur px-3 py-1.5 font-thai text-[12.5px] text-ink leading-snug">
                    ภาพชุมชน · กิจกรรม · บรรยากาศจริง
                  </div>
                </div>
              </div>
            </div>

            {/* ─ Front stats glass card · slight -1.5° ─ */}
            <div className="absolute top-[140px] lg:top-[160px] left-0 w-[88%] -rotate-[1.5deg] origin-top-left">
              <div className="relative overflow-hidden rounded-[28px] glass glass-shine p-6 lg:p-7">
                <div className="relative flex items-center justify-between mb-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-60 font-bold">Live · pulse</div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-rose">
                    <span className="relative h-1.5 w-1.5">
                      <span className="absolute inset-0 rounded-full bg-rose" />
                      <span className="absolute inset-0 rounded-full bg-rose animate-ping opacity-70" />
                    </span>
                    47 คนกำลังประเมิน
                  </span>
                </div>
                <div className="relative grid grid-cols-2 gap-x-4 gap-y-5">
                  {LANDING_STATS.map((s, i) => (
                    <div key={s.label} className={i % 2 === 0 ? "" : "pl-4 border-l border-ink-10/60"}>
                      <div className="font-display text-[34px] lg:text-[38px] font-medium tracking-tight text-ink leading-none">
                        {s.value}
                      </div>
                      <div className="mt-2 font-thai text-[11.5px] text-ink-60 leading-snug">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="relative mt-6 pt-5 border-t border-white/60">
                  <div className="flex items-center gap-3">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl img-slot" data-label="run" />
                    <div className="min-w-0">
                      <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-40 mb-0.5">
                        Next Community Event
                      </div>
                      <div className="font-head text-[14px] font-bold text-ink leading-tight">UP Run Club · เสาร์นี้</div>
                      <div className="font-thai text-[11.5px] text-ink-60 leading-snug">6:00 น. · สวนสาธารณะ</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ─ Floating accent card · tilted +3° ─ */}
            <div className="absolute bottom-0 right-2 w-[60%] rotate-[3deg]">
              <div className="relative overflow-hidden rounded-[22px] glass-amber glass-shine p-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl img-slot" data-label="img" />
                  <div className="min-w-0">
                    <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-amber font-bold mb-0.5">Featured</div>
                    <div className="font-head text-[13px] font-bold text-ink leading-tight truncate">Longevity Protocol</div>
                    <div className="font-thai text-[11px] text-ink-60 leading-snug">6 เดือน · biomarker tracking</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Logo marquee */}
      <div className="relative border-y border-ink-10 bg-warm-white">
        <div className="mx-auto max-w-content overflow-hidden">
          <div className="marquee flex w-max items-center gap-14 px-6 py-5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-40">
            {Array.from({ length: 2 }).flatMap((_, k) =>
              [
                "Science-based",
                "Coach-led",
                "Longevity-first",
                "Personalized",
                "Community-driven",
                "Evidence-only",
                "Habit-rooted",
                "Whole-person",
                "Data-informed",
                "Human-first",
              ].map((w, i) => <span key={`${k}-${i}`}>· {w}</span>),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
