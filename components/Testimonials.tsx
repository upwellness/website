import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-eyebrow">Voices</p>
          <h2 className="section-title mt-3"><em>คน UP Wellness</em> พูดอะไร</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="liquid liquid-shine rounded-3xl p-6 md:p-7 flex flex-col">
              <Quote size={28} strokeWidth={1.5} className="text-rose/40" />
              <blockquote className="mt-3 font-serif text-[19px] leading-snug text-ink flex-1 italic">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-ink/8">
                <div className="font-thai text-[13px] font-semibold text-ink">{t.name}</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-ink-60 mt-0.5">{t.detail}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
