/* Final CTA · matches design */
export function FinalCTA() {
  return (
    <section className="relative mx-auto max-w-content px-6 lg:px-10 py-24 lg:py-32 text-center">
      <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-40 font-bold">Your move</div>
      <h2 className="mt-5 font-display font-light tracking-[-0.02em] text-ink text-[clamp(40px,7vw,84px)] leading-[1.1] max-w-4xl mx-auto">
        เริ่ม <span className="italic text-rose">เมื่อพร้อม.</span>
        <br />
        เราจะรอ — และวิ่งไปด้วยกัน.
      </h2>
      <p className="mt-7 max-w-xl mx-auto font-thai text-[16px] leading-[1.75] text-ink-60">
        แค่ 90 วินาที · ไม่ต้องผูกมัด · เราจะช่วยให้คุณเห็นภาพแรกว่า ควรเริ่มจากตรงไหน
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <a
          href="#assessment"
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-[14px] font-bold text-white hover:bg-rose-deep transition-all hover:-translate-y-0.5 shadow-[0_18px_40px_-18px_rgba(24,21,26,0.5)]"
        >
          เริ่มประเมินฟรี <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
        <a
          href="#community"
          className="inline-flex items-center gap-2 rounded-full border border-ink-20 px-7 py-4 text-[14px] font-bold text-ink hover:bg-white hover:border-ink transition-all"
        >
          มาทำความรู้จักก่อน
        </a>
      </div>
    </section>
  );
}
