import { PROOF_METRICS } from "@/lib/content";

export function ProofBar() {
  return (
    <section id="proof" className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.22em] text-ink-40 mb-8">
          By the numbers
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/8 rounded-3xl overflow-hidden border border-ink/8">
          {PROOF_METRICS.map(m => (
            <div key={m.label} className="bg-cream/95 backdrop-blur-md px-5 py-7 md:px-8 md:py-10 text-center">
              <div className="font-serif text-[40px] md:text-[56px] font-bold leading-none tracking-tight text-rose">
                {m.value}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-ink-60 font-semibold">
                {m.label}
              </div>
              <p className="mt-2 text-[12px] md:text-[13px] text-ink-60 leading-snug">
                {m.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
