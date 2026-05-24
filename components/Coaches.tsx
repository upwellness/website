import { COACHES } from "@/lib/content";

export function Coaches() {
  return (
    <section id="coaches" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="section-eyebrow">Built by Practitioners</p>
          <h2 className="mt-3 font-serif text-[36px] md:text-[52px] font-semibold text-ink leading-tight tracking-tight">
            ทีมที่ <em className="text-rose not-italic italic">ดูแลคุณจริงๆ</em>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[15.5px] text-ink-60 leading-relaxed">
            ไม่ใช่ chatbot · ไม่ใช่ third-party coach · ทุก program มีคนของเราตอบ LINE ทุกวัน
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COACHES.map(c => (
            <article key={c.name} className="liquid liquid-shine liquid-hover rounded-3xl p-6 md:p-7 text-center">
              {/* Avatar placeholder · gradient initial */}
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-rose to-rose-deep text-cream font-serif text-3xl font-bold shadow-lg">
                {c.initials}
              </div>
              <h3 className="mt-4 font-serif text-[22px] font-semibold text-ink leading-tight">
                {c.name}
              </h3>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-rose">
                {c.role}
              </p>

              <div className="mt-4 pt-4 border-t border-ink/8 space-y-2 text-left">
                <p className="text-[12px] text-ink-60">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-ink-40 block mb-0.5">Credentials</span>
                  {c.credentials}
                </p>
                <p className="text-[12px] text-ink-60">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-ink-40 block mb-0.5">Focus</span>
                  {c.focus}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
