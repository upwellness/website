import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/content";

const ACCENT: Record<string, { bg: string; border: string; text: string; pill: string }> = {
  free:   { bg: "bg-white/55",     border: "border-ink/8",          text: "text-ink",       pill: "bg-cream-deep text-ink-60" },
  uplabs: { bg: "bg-green-mist",   border: "border-green/20",       text: "text-green-deep",pill: "bg-green text-cream" },
  cgm:    { bg: "bg-[#FFF6E5]",    border: "border-gold/25",        text: "text-bronze",    pill: "bg-gold text-white" },
  full:   { bg: "bg-rose-mist",    border: "border-rose/20",        text: "text-rose-deep", pill: "bg-rose text-cream" },
};

export function Services() {
  return (
    <section id="services" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-eyebrow">Service Ladder</p>
          <h2 className="section-title mt-3">เริ่มจากเล็ก · <em>ขยับขึ้นได้ตลอด</em></h2>
          <p className="mt-4 text-ink-60 text-base leading-relaxed">
            ไม่ต้องตัดสินใจครั้งใหญ่ทันที · เริ่มที่ Health Check ฟรี · ลอง UP Labs 14 วัน · ก่อนตัดสินใจ Full Course
            <br />ทุก tier มี coach ทีมเดียวกันดูแล
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map(s => {
            const accent = ACCENT[s.key];
            return (
              <article key={s.key} className={`liquid liquid-shine rounded-3xl p-6 border-2 ${accent.border} flex flex-col`}>
                <span className={`inline-block self-start font-mono text-[9.5px] uppercase tracking-[0.16em] px-2.5 py-1 rounded-full font-bold ${accent.pill}`}>
                  {s.eyebrow}
                </span>

                <h3 className="mt-3 font-serif text-2xl font-semibold text-ink">{s.name}</h3>
                <p className="mt-1 italic text-[13px] text-ink-60">"{s.tagline}"</p>

                <div className="mt-4 pb-4 border-b border-ink/8">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-3xl font-bold text-ink">{s.price}</span>
                    {s.price !== "ฟรี" && <span className="text-[11px] text-ink-60">บาท</span>}
                  </div>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-60">{s.duration}</p>
                </div>

                <ul className="mt-4 space-y-2 flex-1">
                  {s.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-[12.5px] text-ink leading-snug">
                      <Check size={13} strokeWidth={2.5} className="mt-0.5 text-green flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a href={s.href}
                  className={`mt-5 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-[13px] font-semibold transition-all ${
                    s.key === "free"
                      ? "bg-ink text-white hover:bg-rose"
                      : `${accent.pill} hover:opacity-90`
                  }`}>
                  {s.cta} <ArrowRight size={14} strokeWidth={2.5} />
                </a>
              </article>
            );
          })}
        </div>

        {/* Supplement note */}
        <div className="mt-10 liquid liquid-shine rounded-3xl p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="section-eyebrow">Nutrilite Supplements</p>
            <h3 className="mt-2 font-serif text-2xl md:text-3xl font-semibold text-ink">เสริมตรงจุด · จัด Stack ตามแผน</h3>
            <p className="mt-3 text-ink-60 leading-relaxed text-[14.5px]">
              Nutrilite global #1 vitamin brand by sales · เรามี catalog Thailand 30+ SKUs ที่ verified ราคา + ส่วนผสมแล้ว
              · ทีม coach จะ recommend stack ตามผลตรวจของคุณ · ไม่ใช่ขายแบบ MLM ทั่วไป
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-2 text-[12.5px]">
            {[
              ["Triple Omega", "หัวใจ · สมอง"],
              ["Double X", "Multivitamin พรีเมียม"],
              ["Vitamin B Plus", "พลังงาน"],
              ["Bio C Plus", "ภูมิคุ้มกัน"],
              ["Cal Mag D", "กระดูก"],
              ["Probiotic W", "ลำไส้"],
            ].map(([name, role]) => (
              <li key={name} className="rounded-xl bg-white/60 border border-ink/8 px-3 py-2">
                <div className="font-semibold text-ink">{name}</div>
                <div className="text-ink-60 text-[11px]">{role}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
