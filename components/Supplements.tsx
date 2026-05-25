/* Supplements · 4 categories + Personalized Protocol aside · matches design */
import { SectionHeader } from "./SectionHeader";
import { LANDING_SUPPLEMENT_CATEGORIES } from "@/lib/content";

const COLORS = {
  wellness: { dot: "bg-wellness", text: "text-wellness-deep", glass: "glass-wellness" },
  rose:     { dot: "bg-rose",     text: "text-rose-deep",     glass: "glass-rose" },
  science:  { dot: "bg-science",  text: "text-science-deep",  glass: "glass-science" },
  amber:    { dot: "bg-amber",    text: "text-amber",         glass: "glass-amber" },
};

export function Supplements() {
  return (
    <section id="supplements" className="relative mx-auto max-w-content px-6 lg:px-10 py-20 lg:py-28">
      <SectionHeader
        number="06"
        label="Supplements"
        title={
          <>
            คัดเฉพาะที่ <span className="italic text-rose">Evidence รับรอง</span> ให้คุณ.
          </>
        }
        description="ทุก SKU มีงานวิจัยรองรับ · dose ที่ใช้จริง · ไม่ใช่แค่โฆษณา"
      />
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-10 items-start">
        <div className="grid sm:grid-cols-2 gap-4">
          {LANDING_SUPPLEMENT_CATEGORIES.map((cat) => {
            const c = COLORS[cat.accent];
            return (
              <div
                key={cat.name}
                className={`group relative overflow-hidden rounded-3xl ${c.glass} glass-shine p-5 transition-all duration-500 hover:-translate-y-1`}
              >
                <div className="relative h-24 overflow-hidden rounded-2xl img-slot mb-5" data-label={`${cat.name.toLowerCase()} · product`}>
                  <div className="absolute top-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur">
                    <span className={`h-2 w-2 rounded-full ${c.dot}`} />
                  </div>
                </div>
                <div className={`font-mono text-[10px] font-bold uppercase tracking-[0.14em] ${c.text}`}>{cat.name}</div>
                <p className="mt-2 font-thai text-[13.5px] text-ink-80 leading-[1.65]">{cat.items}</p>
                <div className="mt-5 pt-3 border-t border-white/55 font-mono text-[10.5px] text-ink-60 group-hover:text-ink transition-colors">
                  ดูรายละเอียด →
                </div>
              </div>
            );
          })}
        </div>

        <aside className="relative overflow-hidden rounded-3xl glass-rose glass-shine p-7 lg:p-8">
          <div aria-hidden className="pointer-events-none absolute -inset-4">
            <div className="blob-1 absolute top-0 right-0 h-44 w-44 rounded-full bg-amber-pale/60 blur-3xl" />
          </div>
          <div className="relative">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-rose mb-3">
              Personalized Protocol
            </div>
            <h3 className="font-display text-[30px] lg:text-[34px] font-medium tracking-tight text-ink leading-[1.2]">
              ไม่รู้ควรกินตัวไหน?
              <br />
              <span className="italic text-rose">ให้ทีมช่วยออกแบบ.</span>
            </h3>
            <p className="mt-4 font-thai text-[14.5px] leading-[1.75] text-ink-60">
              เริ่มจาก Health Check ฟรี · เราจะแนะนำ supplement protocol ที่เหมาะกับเป้าหมายและ biomarker ของคุณ ไม่ขายเกินจำเป็น
            </p>
            <a
              href="#assessment"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[13px] font-bold text-white hover:bg-rose-deep transition-all hover:-translate-y-px"
            >
              ขอ Protocol ฟรี <span>→</span>
            </a>

            <div className="mt-7 pt-6 border-t border-ink-10 grid grid-cols-3 gap-4">
              {[
                ["100%", "ของแท้ Nutrilite"],
                ["40+", "SKUs คัดสรร"],
                ["Free", "ปรึกษา 1-on-1"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-[22px] font-medium text-ink leading-none">{v}</div>
                  <div className="mt-1 font-thai text-[11.5px] text-ink-60 leading-tight">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
