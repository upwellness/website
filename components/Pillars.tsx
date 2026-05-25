/* About + 3 Pillars + Process strip · matches design */
import { SectionHeader } from "./SectionHeader";
import { LANDING_PILLARS } from "@/lib/content";

const ACCENT_COLORS = {
  wellness: { bg: "bg-wellness-ultra", text: "text-wellness-deep", dot: "bg-wellness" },
  rose:     { bg: "bg-rose-ultra",     text: "text-rose-deep",     dot: "bg-rose" },
  science:  { bg: "bg-science-ultra",  text: "text-science-deep",  dot: "bg-science" },
};

export function Pillars() {
  return (
    <section id="about" className="relative mx-auto max-w-content px-6 lg:px-10 py-20 lg:py-28">
      <SectionHeader
        number="01"
        label="What we do"
        title={
          <>
            เราไม่ขายความผอม.
            <br />
            <span className="italic text-rose">เราออกแบบชีวิต</span> ที่ยืนยาวและสนุก.
          </>
        }
        description="UP Wellness รวมที่ปรึกษาสุขภาพ · โค้ช · นักโภชนาการ · และคอมมูนิตี้ ในที่เดียว — เพื่อพาคนคนหนึ่งจากจุดเริ่ม ไปสู่สุขภาพและอายุที่ยืนยาวอย่างมีคุณภาพ"
      />

      <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">
        {LANDING_PILLARS.map((p) => {
          const c = ACCENT_COLORS[p.accent];
          return (
            <div
              key={p.n}
              className="group relative overflow-hidden rounded-3xl border border-ink-10 bg-white p-7 lg:p-8 transition-all hover:-translate-y-1 hover:border-ink-20 card-ring"
            >
              <div className={`absolute -top-16 -right-16 h-44 w-44 rounded-full ${c.bg} blur-2xl opacity-60`} />
              <div className="relative">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] font-bold text-ink-40">{p.n}</span>
                  <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
                  <span className={`font-mono text-[10px] font-bold uppercase tracking-[0.14em] ${c.text}`}>{p.th}</span>
                </div>
                <h3 className="mt-5 font-display font-medium tracking-tight text-ink text-[30px] leading-[1.2]">
                  {p.title}
                </h3>
                <p className="mt-4 font-thai text-[14.5px] leading-[1.75] text-ink-60">{p.body}</p>
                <div className="mt-7 inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-ink group-hover:text-rose transition-colors">
                  เรียนรู้เพิ่มเติม
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Process strip · 4 steps */}
      <div className="mt-16 lg:mt-20 rounded-3xl border border-ink-10 bg-surface/60 p-8 lg:p-10">
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-40 font-bold mb-6">
          How it works · 4 ขั้นตอน
        </div>
        <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
          {[
            ["01", "ประเมิน", "Health Check + MetaFlex Quiz · ดูจุดเริ่มต้น"],
            ["02", "วัดและวิเคราะห์", "BCA · CGM · เลือด · ทีมที่ปรึกษาอ่านผลให้"],
            ["03", "ออกแบบ Protocol", "Course + Supplement + Lifestyle ตามตัวคุณ"],
            ["04", "ติดตามต่อเนื่อง", "วัดซ้ำทุก 14 วัน · ปรับ · Community · 24/7 support"],
          ].map(([n, t, b]) => (
            <div key={n} className="relative">
              <div className="font-mono text-[11px] text-rose font-bold">{n}</div>
              <div className="mt-2 font-display text-[22px] tracking-tight text-ink leading-[1.2]">{t}</div>
              <div className="mt-1.5 font-thai text-[13px] text-ink-60 leading-relaxed">{b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
