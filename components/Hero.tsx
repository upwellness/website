import Link from "next/link";
import { ArrowRight, Sparkles, Activity, Users } from "lucide-react";
import { SITE, STATS } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="mx-auto max-w-7xl">
        {/* Pill badge */}
        <div className="flex justify-center">
          <span className="liquid inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-rose">
            <Sparkles size={12} strokeWidth={2.5} /> Science-based Longevity & Wellness
          </span>
        </div>

        {/* Headline */}
        <h1 className="mt-6 text-center font-serif text-[44px] sm:text-[56px] md:text-[72px] font-semibold leading-[1.05] tracking-tight text-ink">
          แก่ช้า · ไม่ป่วย<br />
          <em className="not-italic text-rose">ตายเลย</em>
        </h1>

        <p className="mt-6 mx-auto max-w-2xl text-center text-base md:text-lg text-ink-60 leading-relaxed">
          {SITE.promise}
          <br />
          <span className="text-ink-40">ลดน้ำหนัก · ดูแลสุขภาพ · Longevity Protocol · Community ที่ยั่งยืน</span>
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="#assessment"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-rose transition-all hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2">
            ทำแบบประเมิน 1 นาที <ArrowRight size={16} strokeWidth={2.5} />
          </a>
          <a href="#services"
            className="inline-flex items-center gap-2 rounded-full liquid liquid-hover border border-ink/8 px-6 py-3 text-sm font-semibold text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2">
            ดูบริการทั้งหมด
          </a>
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {STATS.map(s => (
            <div key={s.label} className="liquid liquid-shine rounded-2xl px-4 py-5 text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-rose">{s.value}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ink-60">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Pillar preview · 3 columns */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          <PreviewCard
            Icon={Activity}
            title="ลดน้ำหนัก"
            blurb="ลดได้ ไม่ Yo-Yo · กลไกฮอร์โมน + Nutrilite stack"
          />
          <PreviewCard
            Icon={Sparkles}
            title="Longevity"
            blurb="Hallmark of Aging · phytonutrient saturation · evidence-based"
          />
          <PreviewCard
            Icon={Users}
            title="Community"
            blurb="Run · Bike · Ice Bath · Forest Bathing · Board Game · Finance"
          />
        </div>
      </div>
    </section>
  );
}

function PreviewCard({ Icon, title, blurb }: { Icon: any; title: string; blurb: string }) {
  return (
    <div className="liquid liquid-hover rounded-2xl p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-mist text-rose">
        <Icon size={18} strokeWidth={2.25} />
      </div>
      <h3 className="mt-3 font-serif text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-1.5 text-[13.5px] text-ink-60 leading-relaxed">{blurb}</p>
    </div>
  );
}
