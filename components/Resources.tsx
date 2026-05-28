/* Resources · agent + customer training tools · matches design language */
import { SectionHeader } from "./SectionHeader";

type Resource = {
  tag: string;
  title: string;
  blurb: string;
  meta: string;
  cta: string;
  href: string;
  tone: "rose" | "wellness" | "amber" | "science";
  emoji: string;
};

const RESOURCES: Resource[] = [
  {
    tag: "Library",
    title: "Nutrilite Marketing Cards",
    blurb: "45 สินค้า · ดู spec · target · opener · บีบปุ่ม ⬇ SAVE ดาวน์โหลดเป็นรูปส่งลูกค้าทาง LINE ได้ทันที",
    meta: "45 SKUs · search ได้ · 13 categories",
    cta: "เปิด Library",
    href: "https://personal-eight-taupe.vercel.app/nutrilite_marketing_cards.html",
    tone: "rose",
    emoji: "📇",
  },
  {
    tag: "Game · Training",
    title: "Flashcard Game",
    blurb: "ฝึกพูดเป็นคู่ · จับคู่ความจำ · Quiz Battle 3 modes · เล่นกับเพื่อนได้ · มี deck overview ไม่ซ้ำ",
    meta: "3 modes · 20 flagship products · keyboard nav",
    cta: "เริ่มฝึก",
    href: "https://personal-eight-taupe.vercel.app/nutrilite_flashcard_game.html",
    tone: "wellness",
    emoji: "🃏",
  },
  {
    tag: "Slides",
    title: "Product Marathon",
    blurb: "32 slides · IMAGE + SPARK framework + Nutrilite stack · เปิด full-screen presentation",
    meta: "32 slides · keyboard nav · index overlay",
    cta: "เปิด Slides",
    href: "https://personal-eight-taupe.vercel.app/UP%20Agents%20Product%20Marathon.html",
    tone: "amber",
    emoji: "🎯",
  },
];

const TONES = {
  rose:     { dot: "bg-rose",     text: "text-rose-deep",     glass: "glass-rose",     btn: "bg-rose hover:bg-rose-deep" },
  wellness: { dot: "bg-wellness", text: "text-wellness-deep", glass: "glass-wellness", btn: "bg-wellness hover:bg-wellness-deep" },
  amber:    { dot: "bg-amber",    text: "text-amber",         glass: "glass-amber",    btn: "bg-amber hover:bg-amber" },
  science:  { dot: "bg-science",  text: "text-science-deep",  glass: "glass-science",  btn: "bg-science hover:bg-science-deep" },
} as const;

export function Resources() {
  return (
    <section id="resources" className="relative bg-surface/40 py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <SectionHeader
          number="08"
          label="For agents · For customers"
          title={
            <>
              เครื่องมือสำหรับ <span className="italic text-rose">ลูกค้าและทีม.</span>
            </>
          }
          description="เปิดได้ทันที · ใช้งานบนมือถือได้ · ส่งให้ลูกค้าทาง LINE หรือ FB ได้ง่ายๆ"
          dot="bg-rose"
          accent="text-rose"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {RESOURCES.map((r) => {
            const t = TONES[r.tone];
            return (
              <a
                key={r.title}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-3xl ${t.glass} glass-shine p-6 lg:p-7 transition-all duration-500 hover:-translate-y-1 hover:rotate-[-0.4deg] flex flex-col`}
              >
                <div className="flex items-start justify-between mb-5">
                  <span className={`inline-flex items-center gap-1.5 rounded-full bg-white/80 backdrop-blur px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] font-bold text-ink-80`}>
                    <span className={`h-1 w-1 rounded-full ${t.dot}`} />
                    {r.tag}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/85 backdrop-blur text-2xl shadow-sm">
                    {r.emoji}
                  </div>
                </div>

                <h3 className="font-display text-[26px] lg:text-[28px] font-medium tracking-tight text-ink leading-[1.2]">
                  {r.title}
                </h3>
                <p className="mt-3 font-thai text-[13.5px] leading-[1.7] text-ink-80 flex-1">
                  {r.blurb}
                </p>

                <div className="mt-5 pt-4 border-t border-white/55 flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-60">{r.meta}</span>
                  <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-white transition-all group-hover:-translate-y-px ${t.btn}`}>
                    {r.cta} <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex items-center justify-center gap-3 font-mono text-[11px] text-ink-40">
          <span className="h-px w-12 bg-ink-20" />
          <span className="uppercase tracking-[0.2em]">เปิดในแท็บใหม่ · ใช้งานได้ฟรี</span>
          <span className="h-px w-12 bg-ink-20" />
        </div>
      </div>
    </section>
  );
}
