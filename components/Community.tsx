import { Footprints, Bike, Snowflake, Trees, Dice5, Wallet, GraduationCap, Calendar, MapPin } from "lucide-react";
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

const ICON_COLOR: Record<string, string> = {
  run:       "text-rose",
  bike:      "text-green",
  icebath:   "text-sky-700",
  forest:    "text-green-deep",
  board:     "text-bronze",
  finance:   "text-gold",
  education: "text-rose-deep",
};

export function Community() {
  return (
    <section id="community" className="px-6 py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-eyebrow">Community</p>
          <h2 className="section-title mt-3">ไลฟ์สไตล์ <em>ที่ดูแลตัวเองได้ยั่งยืน</em></h2>
          <p className="mt-4 text-ink-60 text-base leading-relaxed">
            สุขภาพดีระยะยาว · เกิดจาก community ที่ส่งเสริมกัน · ไม่ใช่ใจฮึดคนเดียว
            <br />UP Wellness จัดกิจกรรมหลากหลาย · เลือกเข้าร่วมตามความสนใจ · ลอง 1 ครั้งก็ได้
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {COMMUNITY.map(c => {
            const Icon = ICON_MAP[c.key];
            const color = ICON_COLOR[c.key] ?? "text-rose";
            return (
              <article key={c.key} className="liquid liquid-hover rounded-2xl p-5 group">
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70 border border-white/80 ${color} mb-3`}>
                  <Icon size={20} strokeWidth={2.25} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink">{c.title}</h3>
                <p className="mt-1.5 text-[13px] text-ink-60 leading-relaxed">{c.blurb}</p>
                <div className="mt-4 pt-3 border-t border-ink/8 flex flex-wrap gap-3 font-mono text-[10.5px] text-ink-60">
                  <span className="inline-flex items-center gap-1"><Calendar size={11} strokeWidth={2.5} /> {c.schedule}</span>
                  <span className="inline-flex items-center gap-1"><MapPin   size={11} strokeWidth={2.5} /> {c.location}</span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a href="#contact"
            className="inline-flex items-center gap-2 rounded-full liquid liquid-hover border border-ink/8 px-6 py-3 text-sm font-semibold text-ink hover:text-rose">
            สนใจร่วม Community? ทักมาเลย →
          </a>
        </div>
      </div>
    </section>
  );
}
