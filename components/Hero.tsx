import { ArrowRight, ChevronDown } from "lucide-react";
import { SITE, STICKY_METRIC } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative px-6 pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow */}
        <p className="text-center font-mono text-[10.5px] uppercase tracking-[0.24em] text-rose">
          Science-based Longevity · Wellness Community · Est. 2562
        </p>

        {/* Headline · massive editorial */}
        <h1 className="mt-8 text-center font-serif font-semibold text-ink leading-[0.96] tracking-[-0.025em] text-[64px] sm:text-[88px] md:text-[112px] lg:text-[136px]">
          แก่ช้า ไม่ป่วย
          <br />
          <em className="not-italic text-rose font-medium italic">
            ตายเลย<span aria-hidden="true">.</span>
          </em>
        </h1>

        {/* Sub */}
        <p className="mt-10 mx-auto max-w-2xl text-center text-[17px] md:text-[19px] text-ink-60 leading-[1.55]">
          {SITE.promise}
          <br />
          <span className="text-ink-40">
            ลดน้ำหนัก · ดูแลสุขภาพ · Longevity Protocol · Community ที่ยั่งยืน
          </span>
        </p>

        {/* Sticky metric · Whoop-inspired anchor */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <div className="liquid liquid-shine rounded-3xl px-8 py-7 md:px-12 md:py-9 text-center max-w-md">
            <div className="font-serif text-[64px] md:text-[88px] font-bold leading-[0.9] text-rose tracking-tight">
              {STICKY_METRIC.value}
            </div>
            <p className="mt-3 font-thai text-[14px] md:text-[15px] text-ink leading-snug">
              {STICKY_METRIC.label}
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-ink-40">
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
