/* Programs · 3 tiers · matches UP Wellness.html design */
import { SectionHeader } from "./SectionHeader";
import { LANDING_PROGRAMS } from "@/lib/content";

const COLORS = {
  wellness: { dot: "bg-wellness", text: "text-wellness-deep", btn: "bg-wellness hover:bg-wellness-deep" },
  rose:     { dot: "bg-rose",     text: "text-rose-deep",     btn: "bg-rose hover:bg-rose-deep" },
  science:  { dot: "bg-science",  text: "text-science-deep",  btn: "bg-science hover:bg-science-deep" },
};

export function Services() {
  return (
    <section id="programs" className="relative mx-auto max-w-content px-6 lg:px-10 py-20 lg:py-28">
      <SectionHeader
        number="02"
        label="Programs"
        title={
          <>
            เริ่มที่ไหนก็ได้ —
            <br />
            <span className="italic text-wellness">เราจะพาไปต่อ.</span>
          </>
        }
        description="3 เส้นทางตามจุดเริ่มต้นของคุณ · เปลี่ยน tier ได้เสมอเมื่อพร้อม"
        dot="bg-wellness"
        accent="text-wellness"
      />
      <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
        {LANDING_PROGRAMS.map((prog) => {
          const c = COLORS[prog.accent];
          return (
            <div
              key={prog.tier}
              className={`relative flex flex-col rounded-3xl border ${
                prog.featured ? "border-rose bg-white" : "border-ink-10 bg-white"
              } p-7 lg:p-8 card-ring`}
            >
              {prog.featured && (
                <div className="absolute -top-3 left-7">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-rose px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                    ⭐ {prog.tag}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
                <span className={`font-mono text-[10px] font-bold uppercase tracking-[0.14em] ${c.text}`}>{prog.tag}</span>
              </div>
              <h3 className="mt-4 font-display text-[32px] lg:text-[36px] font-medium tracking-tight text-ink leading-[1.15]">
                {prog.tier}
              </h3>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-[44px] font-medium tracking-tight text-ink leading-none">{prog.price}</span>
                <span className="font-thai text-[13px] text-ink-60">{prog.cadence}</span>
              </div>
              <div className="mt-6 h-px bg-ink-10" />
              <ul className="mt-6 space-y-3.5 flex-1">
                {prog.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 font-thai text-[14px] text-ink-80 leading-snug">
                    <span className={`mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${c.dot}`} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#assessment"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[13px] font-bold uppercase tracking-[0.1em] text-white transition-all hover:-translate-y-px ${c.btn}`}
              >
                เริ่ม {prog.tier} <span className="text-base">→</span>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
