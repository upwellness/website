/* Testimonials · dark section · matches UP Wellness.html design */
import { LANDING_TESTIMONIALS } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="relative bg-ink text-white py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 stripe opacity-20 pointer-events-none" />
      <div className="absolute -top-24 -right-24 h-[400px] w-[400px] rounded-full bg-rose/20 blur-[120px]" />
      <div className="absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-wellness/15 blur-[120px]" />
      <div className="relative mx-auto max-w-content px-6 lg:px-10">
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[11px] text-white/40">07</span>
            <span className="h-2 w-2 rounded-full bg-rose-light" />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-rose-light">Real results</span>
          </div>
          <h2 className="font-display font-light tracking-tight text-white text-[40px] lg:text-[60px] leading-[1.15] max-w-3xl">
            ผลลัพธ์ที่ <span className="italic text-amber">วัดได้</span> ในคนจริง.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {LANDING_TESTIMONIALS.map((t, i) => (
            <figure key={i} className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur p-7 lg:p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber font-bold">{t.result}</div>
              <blockquote className="mt-5 font-thai text-[16px] leading-[1.75] text-white/90">
                <span className="font-display text-3xl text-rose-light leading-none">&ldquo;</span>
                {t.quote}
              </blockquote>
              <figcaption className="mt-7 pt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-head text-[14px] font-bold text-white">{t.name}</div>
                  <div className="font-thai text-[12px] text-white/50">
                    {t.role} · {t.age} ปี
                  </div>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 text-sm">★</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
