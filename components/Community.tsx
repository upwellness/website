/* Community bento · 8 items · matches UP Wellness.html design */
import { SectionHeader } from "./SectionHeader";
import { LANDING_COMMUNITY } from "@/lib/content";

const TONES = {
  wellness: { dot: "bg-wellness", text: "text-wellness-deep", glass: "glass-wellness" },
  rose:     { dot: "bg-rose",     text: "text-rose-deep",     glass: "glass-rose" },
  science:  { dot: "bg-science",  text: "text-science-deep",  glass: "glass-science" },
  amber:    { dot: "bg-amber",    text: "text-amber",         glass: "glass-amber" },
};

// Bento col spans for visual rhythm (must match item order in LANDING_COMMUNITY)
const SPANS = [
  "lg:col-span-5", // run
  "lg:col-span-4", // bike
  "lg:col-span-3", // ice
  "lg:col-span-4", // forest
  "lg:col-span-3", // board
  "lg:col-span-5", // money
  "lg:col-span-5", // knowledge
  "lg:col-span-7", // cooking (wide)
];

export function Community() {
  return (
    <section id="community" className="relative bg-surface/60 py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <SectionHeader
          number="03"
          label="Community"
          title={
            <>
              วิ่งคนเดียวไกล <span className="italic text-amber">วิ่งด้วยกัน</span> ไปไกลกว่า.
            </>
          }
          description="คลับและกิจกรรมที่ทำให้สุขภาพไม่ใช่ภาระ — เปลี่ยนเป็นไลฟ์สไตล์ที่รอคอย"
          dot="bg-amber"
          accent="text-amber"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 auto-rows-fr">
          {LANDING_COMMUNITY.map((c, i) => {
            const t = TONES[c.tone];
            return (
              <article
                key={c.title}
                className={`${SPANS[i]} group relative overflow-hidden rounded-3xl ${t.glass} glass-shine p-5 lg:p-6 transition-all duration-500 hover:-translate-y-1 hover:rotate-[-0.4deg]`}
              >
                {/* Image slot strip at top */}
                <div className="relative h-28 lg:h-32 overflow-hidden rounded-2xl img-slot mb-5" data-label={c.title.toLowerCase()}>
                  <div className="absolute top-2.5 left-2.5">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/85 backdrop-blur px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] font-bold text-ink-80">
                      <span className={`h-1 w-1 rounded-full ${t.dot}`} />
                      {c.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur text-lg shadow-sm">
                    {c.emoji}
                  </div>
                </div>
                <h3 className="font-display text-[22px] lg:text-[24px] font-medium tracking-tight text-ink leading-[1.2]">
                  {c.title}
                </h3>
                <p className="mt-2 font-thai text-[13px] leading-[1.65] text-ink-80 line-clamp-3">{c.blurb}</p>
                <div className="mt-5 pt-4 border-t border-white/55 flex items-center justify-between font-mono text-[10px] text-ink-60">
                  <span className="uppercase tracking-[0.1em]">{c.time}</span>
                  <span className="uppercase tracking-[0.1em]">{c.where}</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Membership CTA strip */}
        <div className="mt-10 flex items-center justify-between rounded-3xl bg-ink p-7 lg:p-8 text-white">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/40 font-bold mb-2">
              Membership · ฟรีสำหรับลูกค้าทุกเลเวล
            </div>
            <div className="font-display text-[24px] lg:text-[28px] font-medium tracking-tight leading-snug">
              เข้าร่วมได้ทุก event · ไม่จำกัด
            </div>
          </div>
          <a
            href="#assessment"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-bold text-ink hover:-translate-y-px transition-all"
          >
            เข้าร่วม <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
