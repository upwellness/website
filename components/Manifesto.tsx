import { MANIFESTO } from "@/lib/content";

export function Manifesto() {
  return (
    <section id="manifesto" className="px-6 py-24 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16 md:mb-20">
          <p className="section-eyebrow">{MANIFESTO.eyebrow}</p>
          <h2 className="mt-4 font-serif text-[40px] md:text-[64px] font-semibold text-ink leading-[1.05] tracking-tight">
            {MANIFESTO.title}
          </h2>
          <p className="mt-5 mx-auto max-w-2xl text-[16px] md:text-[18px] text-ink-60 leading-relaxed">
            {MANIFESTO.subtitle}
          </p>
        </div>

        {/* Bento beliefs · 4 cards · 2x2 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/8 rounded-[28px] overflow-hidden border border-ink/8">
          {MANIFESTO.beliefs.map((b, i) => (
            <article key={b.hed} className="bg-cream/95 backdrop-blur-md p-8 md:p-10 lg:p-12">
              <div className="font-serif text-[64px] md:text-[80px] font-bold leading-none text-rose/15 tracking-tight">
                0{i + 1}
              </div>
              <h3 className="mt-3 font-serif text-[24px] md:text-[30px] font-semibold text-ink leading-snug">
                {b.hed}
              </h3>
              <p className="mt-3 text-[14.5px] md:text-[15.5px] text-ink-60 leading-[1.65]">
                {b.sub}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
