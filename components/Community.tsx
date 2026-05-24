import { Footprints, Bike, Snowflake, Trees, Dice5, Wallet, GraduationCap, Calendar, MapPin, ArrowRight } from "lucide-react";
import { COMMUNITY } from "@/lib/content";

const ICON_MAP: Record<string, any> = {
  run:       Footprints,
  bike:      Bike,
  icebath:   Snowflake,
  forest:    Trees,
  board:     Dice5,
  finance:   Wallet,
  education: GraduationCap,
};

// Tint per activity · subtle accent
const TINT: Record<string, string> = {
  run:       "rgba(140, 76, 76, 0.08)",
  bike:      "rgba(57, 103, 85, 0.08)",
  icebath:   "rgba(125, 156, 178, 0.10)",
  forest:    "rgba(42, 77, 64, 0.10)",
  board:     "rgba(184, 150, 90, 0.08)",
  finance:   "rgba(184, 150, 90, 0.08)",
  education: "rgba(110, 56, 56, 0.10)",
};

const ICON_COLOR: Record<string, string> = {
  run:       "text-rose",
  bike:      "text-green",
  icebath:   "text-[#5B7C8C]",
  forest:    "text-green-deep",
  board:     "text-bronze",
  finance:   "text-gold",
  education: "text-rose-deep",
};

export function Community() {
  // First activity = featured · rest = grid
  const [featured, ...rest] = COMMUNITY;
  const FeaturedIcon = ICON_MAP[featured.key];

  return (
    <section id="community" className="px-6 py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-end mb-12">
          <div className="md:col-span-2">
            <p className="section-eyebrow">Community First</p>
            <h2 className="mt-3 font-serif text-[40px] md:text-[64px] font-semibold text-ink leading-[1.05] tracking-tight">
              สุขภาพดี · เกิดจาก <em className="text-rose not-italic italic">community ที่ดี</em>
            </h2>
          </div>
          <p className="text-[15.5px] md:text-[16.5px] text-ink-60 leading-relaxed">
            ใจฮึดคนเดียวอยู่ได้ไม่นาน · มา community ส่งเสริมกัน · ลอง 1 ครั้งก่อนได้ ไม่ต้องสมัครสมาชิก
          </p>
        </div>

        {/* Bento · 1 featured + 6 small */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {/* Featured · spans 2 cols on desktop */}
          <article
            className="md:col-span-2 md:row-span-2 liquid liquid-shine liquid-hover rounded-3xl p-8 md:p-10 lg:p-12 flex flex-col relative overflow-hidden min-h-[280px]"
            style={{ background: `linear-gradient(135deg, ${TINT[featured.key]}, rgba(255,255,255,0.55))` }}
          >
            <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 border border-white/90 ${ICON_COLOR[featured.key]} shadow-sm`}>
              <FeaturedIcon size={26} strokeWidth={2.25} aria-hidden="true" />
            </div>
            <span className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-rose-deep">
              Featured · เริ่มจากตรงนี้ได้
            </span>
            <h3 className="mt-2 font-serif text-[36px] md:text-[44px] font-semibold text-ink leading-[1.05] tracking-tight">
              {featured.title}
            </h3>
            <p className="mt-3 text-[15px] md:text-[16px] text-ink leading-[1.6] flex-1">
              {featured.blurb}
            </p>
            <div className="mt-6 pt-5 border-t border-ink/8 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-4 font-mono text-[11.5px] text-ink-60">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={12} strokeWidth={2.5} /> {featured.schedule}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={12} strokeWidth={2.5} /> {featured.location}
                </span>
              </div>
              <a href="#contact" className="inline-flex items-center gap-1 text-[12px] font-semibold text-rose hover:underline">
                ลองครั้งแรกฟรี <ArrowRight size={12} strokeWidth={2.5} />
              </a>
            </div>
          </article>

          {/* Rest · small cards */}
          {rest.map(c => {
            const Icon = ICON_MAP[c.key];
            return (
              <article
                key={c.key}
                className="liquid liquid-hover rounded-2xl p-5 flex flex-col"
                style={{ background: `linear-gradient(135deg, ${TINT[c.key]}, rgba(255,255,255,0.55))` }}
              >
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 border border-white/90 ${ICON_COLOR[c.key]} shadow-sm`}>
                  <Icon size={18} strokeWidth={2.25} aria-hidden="true" />
                </div>
                <h3 className="mt-3 font-serif text-[20px] font-semibold text-ink leading-tight">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-[12.5px] text-ink-60 leading-relaxed flex-1">
                  {c.blurb}
                </p>
                <div className="mt-3 pt-2 border-t border-ink/8 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] text-ink-60">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={10} strokeWidth={2.5} /> {c.schedule}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[14px] font-semibold text-white hover:bg-rose transition-all"
          >
            สนใจร่วม Community ทักมาเลย <ArrowRight size={16} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
