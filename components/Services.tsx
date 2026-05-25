import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/content";

// Show 'บาท' unit only if price contains digits
const hasNumericPrice = (p: string) => /\d/.test(p);

const ACCENT: Record<string, { ring: string; chip: string; chipText: string; popular?: boolean }> = {
  free:   { ring: "ring-1 ring-ink/10",                  chip: "bg-cream-deep",    chipText: "text-ink-60" },
  uplabs: { ring: "ring-1 ring-green/25",                chip: "bg-green",         chipText: "text-cream" },
  cgm:    { ring: "ring-1 ring-gold/30",                 chip: "bg-gold",          chipText: "text-white" },
  full:   { ring: "ring-2 ring-rose shadow-xl shadow-rose/10", chip: "bg-rose",      chipText: "text-cream",  popular: true },
};

export function Services() {
  return (
    <section id="services" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-eyebrow">Service Ladder</p>
          <h2 className="mt-3 font-serif text-[40px] md:text-[64px] font-semibold text-ink leading-[1.05] tracking-tight">
            เริ่มจากเล็ก · <em className="text-rose not-italic italic">ขยับขึ้นได้ตลอด</em>
          </h2>
          <p className="mt-5 text-[16px] md:text-[18px] text-ink-60 leading-relaxed">
            ไม่ต้องตัดสินใจครั้งใหญ่ทันที · เริ่มที่ Health Check ฟรี
            <br />ลอง UP Labs 14 วัน · ก่อนตัดสินใจ Full Course
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {SERVICES.map(s => {
            const accent = ACCENT[s.key];
            return (
              <article
                key={s.key}
                className={`liquid liquid-shine rounded-3xl p-6 md:p-7 flex flex-col relative ${accent.ring}`}
              >
                {accent.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-rose px-3 py-1 font-mono text-[9.5px] uppercase tracking-widest font-bold text-cream shadow-md">
                    ⭐ Most Popular
                  </span>
                )}

                <span
                  className={`inline-block self-start font-mono text-[9.5px] uppercase tracking-[0.16em] px-2.5 py-1 rounded-full font-bold ${accent.chip} ${accent.chipText}`}
                >
                  {s.eyebrow}
                </span>

                <h3 className="mt-3 font-serif text-[24px] md:text-[28px] font-semibold text-ink leading-tight">
                  {s.name}
                </h3>
                <p className="mt-1.5 italic text-[12.5px] text-ink-60 leading-snug">"{s.tagline}"</p>

                <div className="mt-5 pb-5 border-b border-ink/8">
                  <div className="flex items-baseline gap-1.5">
                    <span className={`font-serif font-bold text-ink leading-none tracking-tight ${
                      hasNumericPrice(s.price) ? "text-[32px] md:text-[36px]" : "text-[22px] md:text-[26px]"
                    }`}>
                      {s.price}
                    </span>
                    {hasNumericPrice(s.price) && <span className="text-[11px] text-ink-60">บาท</span>}
                  </div>
                  <p className="mt-1.5 font-mono text-[10px] uppercase tracking-widest text-ink-60">{s.duration}</p>
                </div>

                <ul className="mt-5 space-y-2.5 flex-1">
                  {s.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-[13px] text-ink leading-snug">
                      <Check size={13} strokeWidth={2.5} className="mt-0.5 text-rose flex-shrink-0" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={s.href}
                  className={`mt-6 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-3 text-[13px] font-semibold transition-all ${
                    s.key === "free"
                      ? "bg-ink text-white hover:bg-rose"
                      : `${accent.chip} ${accent.chipText} hover:opacity-90 hover:shadow-md`
                  }`}
                >
                  {s.cta} <ArrowRight size={14} strokeWidth={2.5} />
                </a>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
