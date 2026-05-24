"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, RotateCcw, Sparkles, MessageCircle } from "lucide-react";
import { QUIZ, suggestPath, type QuizAnswers } from "@/lib/content";

export function Assessment() {
  const [step, setStep]       = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [done, setDone]       = useState(false);

  const q = QUIZ.questions[step];
  const isLast = step === QUIZ.questions.length - 1;
  const progressPct = Math.round(((step + (done ? 1 : 0)) / QUIZ.questions.length) * 100);

  const pick = (value: string) => {
    const next = { ...answers, [q.id]: value };
    setAnswers(next);
    if (isLast) {
      setDone(true);
    } else {
      setStep(step + 1);
    }
  };

  const back = () => {
    if (done) { setDone(false); return; }
    if (step > 0) setStep(step - 1);
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setDone(false);
  };

  const result = done ? suggestPath(answers) : null;

  return (
    <section id="assessment" className="px-6 py-20 md:py-28 relative">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <p className="section-eyebrow">Quick Assessment · ฟรี</p>
          <h2 className="section-title mt-3">เริ่มที่ <em>ไหนดี?</em> ให้เราแนะนำ</h2>
          <p className="mt-4 text-ink-60 leading-relaxed">{QUIZ.intro}</p>
        </div>

        <div className="liquid liquid-shine rounded-3xl p-6 md:p-10">
          {!done ? (
            <>
              {/* Progress */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10.5px] uppercase tracking-widest text-ink-60">
                    คำถามที่ {step + 1} / {QUIZ.questions.length}
                  </span>
                  <span className="font-mono text-[10.5px] text-rose font-bold">{progressPct}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
                  <div
                    className="h-full rounded-full bg-rose transition-all duration-500 ease-out"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-ink leading-snug">
                {q.q}
              </h3>

              {/* Options */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {q.options.map(opt => {
                  const selected = answers[q.id] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => pick(opt.value)}
                      className={`text-left rounded-2xl px-5 py-4 border-2 transition-all hover:translate-y-[-2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 ${
                        selected
                          ? "bg-ink text-white border-ink"
                          : "bg-white/60 border-ink/10 text-ink hover:bg-white/85 hover:border-rose/30"
                      }`}
                    >
                      <span className="font-thai text-[14px] font-medium">{opt.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Back */}
              {step > 0 && (
                <button
                  onClick={back}
                  className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-mono text-ink-60 hover:text-rose"
                >
                  <ArrowLeft size={12} strokeWidth={2.5} /> ย้อนกลับ
                </button>
              )}
            </>
          ) : result ? (
            <>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-rose-mist text-rose px-3 py-1 font-mono text-[10.5px] uppercase tracking-wider">
                  <Sparkles size={12} strokeWidth={2.5} /> Suggestion
                </div>
                <h3 className="mt-4 font-serif text-3xl md:text-4xl font-semibold text-ink">
                  เริ่มที่ <em className="not-italic text-rose">{result.recommend}</em>
                </h3>
                <p className="mt-4 text-ink-60 leading-relaxed max-w-xl mx-auto">
                  {result.reason}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href={result.next.href}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-rose transition-all hover:shadow-md">
                  {result.next.label} <ArrowRight size={16} strokeWidth={2.5} />
                </a>
                {result.alt && (
                  <a href={result.alt.href}
                    className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-ink/8 px-6 py-3 text-sm font-semibold text-ink hover:bg-white">
                    {result.alt.label}
                  </a>
                )}
              </div>

              <div className="mt-6 pt-5 border-t border-ink/8 text-center">
                <button onClick={reset}
                  className="inline-flex items-center gap-1.5 text-[12px] font-mono text-ink-60 hover:text-rose">
                  <RotateCcw size={12} strokeWidth={2.5} /> ทำใหม่
                </button>
                <p className="mt-4 font-thai text-[12px] text-ink-60">
                  อยากปรึกษาก่อนตัดสินใจ? <a href="#contact" className="text-rose font-semibold hover:underline">ทักทาง LINE</a>
                </p>
              </div>
            </>
          ) : null}
        </div>

        <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-wider text-ink-40">
          ⚖️ ข้อมูลในแบบประเมินใช้เพื่อ guidance · ไม่ใช่การวินิจฉัยทางการแพทย์
        </p>
      </div>
    </section>
  );
}
