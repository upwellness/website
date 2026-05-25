import { PHILOSOPHY } from "@/lib/content";

export function Philosophy() {
  return (
    <section id="philosophy" className="px-6 py-24 md:py-36">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-14 md:mb-16">
          <p className="section-eyebrow">{PHILOSOPHY.eyebrow}</p>
          <h2 className="mt-4 font-serif text-[40px] md:text-[64px] font-semibold text-ink leading-[1.05] tracking-tight">
            {PHILOSOPHY.title}
          </h2>
          <p className="mt-5 mx-auto max-w-2xl text-[16px] md:text-[18px] text-ink-60 leading-[1.65]">
            {PHILOSOPHY.subtitle}
          </p>
        </div>

        {/* 4 principles · stacked editorial · numbered */}
        <div className="space-y-px bg-ink/8 rounded-[28px] overflow-hidden border border-ink/8">
          {PHILOSOPHY.principles.map((p, i) => (
            <article
              key={p.hed}
              className="bg-cream/95 backdrop-blur-md p-8 md:p-12 grid md:grid-cols-[120px_1fr] gap-6 md:gap-12 items-start"
            >
              <div className="font-serif text-[64px] md:text-[88px] font-bold leading-[0.85] text-rose/20 tracking-tight">
                0{i + 1}
              </div>
              <div>
                <h3 className="font-serif text-[26px] md:text-[34px] font-semibold text-ink leading-[1.15] tracking-tight">
                  {p.hed}
                </h3>
                <p className="mt-4 text-[15px] md:text-[17px] text-ink-60 leading-[1.7]">
                  {p.sub}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
