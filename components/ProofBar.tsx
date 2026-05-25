import { PROOF_METRICS } from "@/lib/content";

/**
 * ProofBar · 4 numbers across
 * ────────────────────────────
 * Now uses individual glass cards (no grid divider lines) so it reads as
 * a continuation of the hero's stacked-card language.
 */
export function ProofBar() {
  return (
    <section id="proof" className="px-6 py-14 md:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.22em] text-ink-40 mb-8">
          By the numbers · ตัวเลขจริง
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {PROOF_METRICS.map((m, i) => (
            <article
              key={m.label}
              className="glass-card liquid-hover px-5 py-7 md:px-7 md:py-9 text-center"
            >
              <div
                className="font-serif text-[40px] md:text-[56px] font-bold leading-none tracking-tight"
                style={{ color: i % 2 === 0 ? "var(--rose)" : "var(--green)" }}
              >
                {m.value}
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-ink-60 font-semibold">
                {m.label}
              </div>
              <p className="mt-2 text-[12px] md:text-[13px] text-ink-60 leading-snug">
                {m.context}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
