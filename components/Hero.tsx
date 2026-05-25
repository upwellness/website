import { ArrowRight, ChevronDown } from "lucide-react";
import { SITE, STICKY_METRIC } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative px-6 pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow */}
        <p className="text-center font-mono text-[10.5px] uppercase tracking-[0.24em] text-rose">
          Science-based Longevity · Wellness Community · Est. 2558
        </p>

        {/* Headline · massive editorial · English anchor */}
        <h1 className="mt-8 text-center font-serif font-semibold text-ink leading-[0.96] tracking-[-0.025em] text-[64px] sm:text-[88px] md:text-[112px] lg:text-[128px]">
          Live <em className="not-italic text-rose font-medium italic">Longer</em>.
          <br />
          Live <em className="not-italic text-rose font-medium italic">Better</em>.
        </h1>

        {/* Thai philosophical statement · the heart */}
        <p className="mt-10 mx-auto max-w-3xl text-center font-serif text-[22px] sm:text-[28px] md:text-[34px] font-medium text-ink leading-[1.35] tracking-tight">
          ความรู้ที่ถูกต้อง · ทำให้การดูแลสุขภาพ
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          เป็นเรื่องง่ายของทุกคน
        </p>

        {/* Sub · supporting promise */}
        <p className="mt-7 mx-auto max-w-2xl text-center text-[15px] md:text-[17px] text-ink-60 leading-[1.6]">
          {SITE.promise}
          <br />
          <span className="text-ink-40">
            ลดน้ำหนัก · ดูแลสุขภาพ · Longevity Protocol · Community ที่ยั่งยืน
          </span>
        </p>

        {/* Sticky metric · social proof anchor */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <div className="liquid liquid-shine rounded-3xl px-10 py-8 md:px-16 md:py-10 text-center max-w-xl">
            <div className="font-serif text-[80px] md:text-[112px] font-bold leading-[0.85] text-rose tracking-tight">
              {STICKY_METRIC.value}
            </div>
            <p className="mt-4 font-thai text-[15px] md:text-[17px] font-medium text-ink leading-snug">
              {STICKY_METRIC.label}
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-ink-40">
              {STICKY_METRIC.caveat}
            </p>
          </div>
        </div>

        {/* CTAs · single primary + single ghost */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="#assessment"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[14px] font-semibold text-white hover:bg-rose transition-all hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2">
            ทำแบบประเมิน 1 นาที <ArrowRight size={16} strokeWidth={2.5} />
          </a>
          <a href="#how"
            className="inline-flex items-center gap-2 rounded-full bg-white/60 border border-ink/10 px-7 py-3.5 text-[14px] font-semibold text-ink hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2">
            ดูวิธีการทำงาน
          </a>
        </div>

        {/* Scroll indicator · subtle */}
        <div className="mt-16 md:mt-20 flex justify-center" aria-hidden="true">
          <a href="#proof" className="text-ink-40 hover:text-rose transition animate-bounce" style={{ animationDuration: "2.5s" }}>
            <ChevronDown size={28} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
