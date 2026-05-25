"use client";

/* HealthAssessment · 6-step quiz + lead capture + recommendation · matches design */
import { useState, useMemo, type ReactNode } from "react";

/* ── Quiz questions ─────────────────────────────────────────────── */
type QuizOption = { v: string; label: string; emoji?: string };
type QuizQuestion = { id: string; q: string; sub: string; options: QuizOption[] };

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "goal",
    q: "เป้าหมายหลักของคุณคืออะไร?",
    sub: "เลือก 1 ข้อที่ตรงที่สุด",
    options: [
      { v: "weight",    label: "ลดน้ำหนัก / ลดไขมัน",        emoji: "⚖️" },
      { v: "energy",    label: "เพิ่มพลังงาน · ลดอ่อนเพลีย",   emoji: "⚡" },
      { v: "metabolic", label: "ดูแล metabolic health",       emoji: "🔥" },
      { v: "longevity", label: "อายุยืน · แข็งแรงระยะยาว",     emoji: "∞" },
    ],
  },
  {
    id: "age",
    q: "ช่วงอายุของคุณ?",
    sub: "ใช้เพื่อแนะนำ protocol ที่เหมาะสม",
    options: [
      { v: "u30", label: "ต่ำกว่า 30" },
      { v: "30s", label: "30 – 39" },
      { v: "40s", label: "40 – 49" },
      { v: "50p", label: "50 ขึ้นไป" },
    ],
  },
  {
    id: "sleep",
    q: "ในเดือนที่ผ่านมา คุณนอนหลับอย่างไร?",
    sub: "เลือกข้อที่ใกล้เคียงที่สุด",
    options: [
      { v: "great", label: "หลับลึก ตื่นมาสดชื่น" },
      { v: "ok",    label: "หลับได้ บางคืนไม่ดี" },
      { v: "poor",  label: "หลับไม่ลึก ตื่นกลางคืน" },
      { v: "bad",   label: "นอนไม่หลับ / ตื่นเหนื่อย" },
    ],
  },
  {
    id: "move",
    q: "ออกกำลังกาย / เคลื่อนไหวสัปดาห์ละกี่ครั้ง?",
    sub: "นับรวมเดินเร็ว · เวท · cardio",
    options: [
      { v: "0",  label: "แทบไม่ออก" },
      { v: "12", label: "1 – 2 ครั้ง" },
      { v: "34", label: "3 – 4 ครั้ง" },
      { v: "5p", label: "5 ครั้งขึ้นไป" },
    ],
  },
  {
    id: "diet",
    q: "วิถีการกินของคุณเป็นอย่างไร?",
    sub: "เลือกข้อที่ใกล้เคียงที่สุด",
    options: [
      { v: "clean", label: "ส่วนใหญ่อาหารสด · กินเองที่บ้าน" },
      { v: "mixed", label: "ผสมผสาน · มีของหวานบ้าง" },
      { v: "out",   label: "นอกบ้านบ่อย · อาหารแปรรูป" },
      { v: "irreg", label: "ไม่เป็นเวลา · อดมื้อ" },
    ],
  },
  {
    id: "stress",
    q: "ระดับความเครียดในชีวิตประจำวัน?",
    sub: "คะแนน 1 (น้อย) ถึง 5 (มาก)",
    options: [
      { v: "1", label: "1 · สบาย ๆ" },
      { v: "2", label: "2 · พอดี" },
      { v: "3", label: "3 · ปานกลาง" },
      { v: "4", label: "4 · ค่อนข้างเครียด" },
      { v: "5", label: "5 · เครียดมาก" },
    ],
  },
];

type Answers = Record<string, string>;
type Priority = { icon: string; title: string; body: string };
type Result = { tier: "Foundation" | "Personalize" | "Longevity Protocol"; score: number; rationale: string; priorities: Priority[] };

function scoreQuiz(a: Answers): Result {
  let score = 0;
  if (["weight", "metabolic"].includes(a.goal)) score += 1;
  if (a.goal === "longevity") score += 3;
  if (a.age === "40s") score += 1;
  if (a.age === "50p") score += 2;
  if (["poor", "bad"].includes(a.sleep)) score += 2;
  if (a.move === "0") score += 2;
  if (a.move === "12") score += 1;
  if (["out", "irreg"].includes(a.diet)) score += 2;
  if (["4", "5"].includes(a.stress)) score += 1;

  let tier: Result["tier"];
  let rationale: string;
  if (score <= 3) {
    tier = "Foundation";
    rationale = "คุณมีพื้นฐานที่ดี — แค่ต้องการระบบเพื่อพาไปต่อ · เริ่มจาก Foundation 8 สัปดาห์เพื่อสร้าง habit ที่ยั่งยืน";
  } else if (score <= 7) {
    tier = "Personalize";
    rationale = "มีหลายจุดที่ควรปรับเฉพาะตัวคุณ — แนะนำ Personalize 12 สัปดาห์ พร้อม BCA + CGM และ 1-on-1 กับที่ปรึกษาสุขภาพ";
  } else {
    tier = "Longevity Protocol";
    rationale = "เป้าหมายของคุณต้องการ data-driven protocol · แนะนำ Longevity Protocol 6 เดือน พร้อม biomarker ครบทุกไตรมาส";
  }

  const priorities: Priority[] = [];
  if (["poor", "bad"].includes(a.sleep))   priorities.push({ icon: "🌙", title: "Sleep Reset",          body: "ปรับ circadian และ sleep hygiene ก่อน — เป็นรากของทุกอย่าง" });
  if (["out", "irreg"].includes(a.diet))   priorities.push({ icon: "🥗", title: "Nutrition Audit",      body: "Food Log + CGM 14 วัน เพื่อเห็น glucose response ของคุณเอง" });
  if (["0", "12"].includes(a.move))         priorities.push({ icon: "🏃", title: "Movement Foundation", body: "เริ่มจาก Zone 2 + เวทพื้นฐาน · เข้า Run Club ทุกเสาร์" });
  if (["4", "5"].includes(a.stress))       priorities.push({ icon: "🧊", title: "Stress Recovery",      body: "Ice Bath และ Forest Bathing เพื่อ down-regulate sympathetic" });
  if (a.goal === "longevity")               priorities.push({ icon: "🧬", title: "Biological Age",       body: "ตรวจ epigenetic age และ ApoB เพื่อ baseline" });
  if (priorities.length === 0) priorities.push({ icon: "✨", title: "Maintain & Optimize", body: "คุณดูแลตัวเองดีอยู่แล้ว — โฟกัสที่ marginal gains" });

  return { tier, score, rationale, priorities: priorities.slice(0, 3) };
}

/* ── Section wrap ────────────────────────────────────────────────── */
export function Assessment() {
  return (
    <section className="relative mx-auto max-w-content px-6 lg:px-10 py-20 lg:py-28">
      <HealthAssessment />
    </section>
  );
}

function HealthAssessment() {
  const total = QUIZ_QUESTIONS.length;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [lead, setLead] = useState({ name: "", contact: "", consent: true });
  const [done, setDone] = useState(false);

  const isQ = step < total;
  const isLead = step === total;
  const isResult = step === total + 1;

  const result = useMemo<Result | null>(() => {
    if (Object.keys(answers).length < total) return null;
    return scoreQuiz(answers);
  }, [answers]);

  const pct = isResult ? 100 : isLead ? 92 : Math.round((step / total) * 90);

  const pickAnswer = (qid: string, v: string) => {
    setAnswers((prev) => ({ ...prev, [qid]: v }));
    setTimeout(() => setStep((s) => s + 1), 200);
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setLead({ name: "", contact: "", consent: true });
    setDone(false);
  };

  return (
    <div id="assessment" className="relative">
      <div className="absolute -top-8 left-0 flex items-center gap-3">
        <span className="font-mono text-[11px] text-ink-40">04</span>
        <span className="h-2 w-2 rounded-full bg-science" />
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-science">Free Assessment · 90 วินาที</span>
      </div>

      <div className="grid lg:grid-cols-[1.05fr_1fr] gap-0 overflow-hidden rounded-3xl border border-ink-10 bg-white card-ring">
        {/* ── Left rail · context ── */}
        <aside className="relative border-b lg:border-b-0 lg:border-r border-ink-10 bg-gradient-to-br from-rose-ultra via-warm-white to-wellness-ultra p-8 lg:p-10">
          <div className="absolute inset-0 stripe pointer-events-none opacity-60" />
          <div className="relative">
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-rose font-bold">UP · Health Compass</div>
            <h3 className="mt-3 font-display font-medium tracking-tight text-ink text-[34px] lg:text-[40px] leading-[1.15]">
              ประเมินจุดเริ่มต้น
              <br />
              <span className="italic text-rose">ในแบบของคุณ</span>
            </h3>
            <p className="mt-5 max-w-sm font-thai text-[14.5px] leading-[1.75] text-ink-60">
              6 คำถามสั้น ๆ · ใช้เวลาไม่เกิน 90 วินาที · เราจะแนะนำเส้นทางที่เหมาะกับคุณ พร้อมจุดที่ควรเริ่มก่อน — ไม่มีค่าใช้จ่าย
            </p>

            <div className="mt-8 space-y-3">
              {[
                ["🔬", "วิเคราะห์โดยทีมที่ปรึกษา", "ทุกคำตอบนำไป map กับ protocol จริง"],
                ["🛡", "ข้อมูลคุณ ปลอดภัย", "เก็บเข้าระบบของเราเท่านั้น · ไม่ส่งต่อ"],
                ["💬", "ตอบกลับภายใน 24 ชม.", "ทีมจะส่งสรุปและแนะนำขั้นถัดไป"],
              ].map(([e, t, b]) => (
                <div key={t} className="flex items-start gap-3 rounded-2xl bg-white/70 backdrop-blur px-4 py-3 border border-white">
                  <span className="text-xl leading-none">{e}</span>
                  <div>
                    <div className="font-head text-[13px] font-bold text-ink leading-tight">{t}</div>
                    <div className="font-thai text-[12.5px] text-ink-60 leading-snug">{b}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-40">
              <span className="h-px w-8 bg-ink-20" />
              อิงจาก MetaFlex · Health Check Protocol
            </div>
          </div>
        </aside>

        {/* ── Right · question / lead / result ── */}
        <div className="relative p-7 lg:p-10 min-h-[560px] flex flex-col">
          <div className="mb-7">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-40">
                {isResult ? "Result" : isLead ? "Almost there" : `Step ${step + 1} / ${total}`}
              </span>
              <span className="font-mono text-[10px] text-ink-40">{pct}%</span>
            </div>
            <div className="h-1 rounded-full bg-ink-5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-rose via-amber to-wellness transition-all duration-500"
                style={{ width: pct + "%" }}
              />
            </div>
          </div>

          {isQ && (
            <QuizQuestionView
              q={QUIZ_QUESTIONS[step]}
              idx={step}
              total={total}
              current={answers[QUIZ_QUESTIONS[step].id]}
              onPick={pickAnswer}
              onBack={step > 0 ? () => setStep((s) => s - 1) : null}
            />
          )}

          {isLead && (
            <LeadCapture
              lead={lead}
              setLead={setLead}
              onBack={() => setStep((s) => s - 1)}
              onSubmit={() => {
                setDone(true);
                setStep((s) => s + 1);
              }}
            />
          )}

          {isResult && result && <ResultPanel result={result} onReset={reset} done={done} />}
        </div>
      </div>
    </div>
  );
}

/* ── individual question ─────────────────────────────────────────── */
function QuizQuestionView({
  q,
  idx,
  total,
  current,
  onPick,
  onBack,
}: {
  q: QuizQuestion;
  idx: number;
  total: number;
  current: string | undefined;
  onPick: (qid: string, v: string) => void;
  onBack: (() => void) | null;
}) {
  return (
    <div className="flex flex-col flex-1">
      <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-rose font-bold mb-3">
        Question {String(idx + 1).padStart(2, "0")}
      </div>
      <h4 className="font-display font-medium tracking-tight text-ink text-[26px] lg:text-[30px] leading-[1.25]">
        {q.q}
      </h4>
      <p className="mt-2 font-thai text-[14px] text-ink-60">{q.sub}</p>

      <div className="mt-7 grid gap-2.5">
        {q.options.map((opt) => {
          const active = current === opt.v;
          return (
            <button
              key={opt.v}
              type="button"
              onClick={() => onPick(q.id, opt.v)}
              className={`group flex items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all duration-200 ${
                active
                  ? "border-rose bg-rose-ultra"
                  : "border-ink-10 bg-white hover:border-rose/40 hover:bg-rose-ultra/40 hover:-translate-y-0.5"
              }`}
            >
              {opt.emoji && <span className="text-xl leading-none">{opt.emoji}</span>}
              <span className="font-thai text-[15px] font-medium text-ink flex-1">{opt.label}</span>
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full border text-[12px] font-bold transition-all ${
                  active
                    ? "border-rose bg-rose text-white"
                    : "border-ink-10 text-ink-40 group-hover:border-rose group-hover:text-rose"
                }`}
              >
                {active ? "✓" : "→"}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-auto pt-7 flex items-center justify-between">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink-40 hover:text-ink"
          >
            ← Back
          </button>
        ) : (
          <span />
        )}
        <span className="font-mono text-[11px] text-ink-40">
          {idx + 1} / {total}
        </span>
      </div>
    </div>
  );
}

/* ── lead capture form ───────────────────────────────────────────── */
function LeadCapture({
  lead,
  setLead,
  onBack,
  onSubmit,
}: {
  lead: { name: string; contact: string; consent: boolean };
  setLead: React.Dispatch<React.SetStateAction<{ name: string; contact: string; consent: boolean }>>;
  onBack: () => void;
  onSubmit: () => void;
}) {
  const ready = lead.name.trim().length > 1 && lead.contact.trim().length > 4;
  return (
    <div className="flex flex-col flex-1">
      <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-rose font-bold mb-3">Last step · ใกล้แล้ว</div>
      <h4 className="font-display font-medium tracking-tight text-ink text-[26px] lg:text-[30px] leading-[1.25]">
        ส่งผลประเมินไปให้คุณที่ไหนดี?
      </h4>
      <p className="mt-2 font-thai text-[14px] text-ink-60 max-w-sm">
        เราจะส่งสรุปเส้นทางที่แนะนำให้คุณ · พร้อมทีมจะติดต่อกลับใน 24 ชม. (ไม่กดดัน)
      </p>

      <div className="mt-7 space-y-4">
        <Field label="ชื่อ-นามสกุล" value={lead.name} onChange={(v) => setLead((l) => ({ ...l, name: v }))} placeholder="เช่น คุณภัทร" />
        <Field
          label="เบอร์ติดต่อ หรือ LINE ID"
          value={lead.contact}
          onChange={(v) => setLead((l) => ({ ...l, contact: v }))}
          placeholder="08x-xxx-xxxx หรือ @upwellness"
        />
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={lead.consent}
            onChange={(e) => setLead((l) => ({ ...l, consent: e.target.checked }))}
            className="mt-0.5 h-4 w-4 accent-rose"
          />
          <span className="font-thai text-[13px] text-ink-60 leading-relaxed">
            ยินยอมให้ UP Wellness เก็บข้อมูลเพื่อติดต่อกลับและส่งเนื้อหาเกี่ยวกับสุขภาพ · ยกเลิกได้ตลอดเวลา
          </span>
        </label>
      </div>

      <div className="mt-auto pt-7 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink-40 hover:text-ink"
        >
          ← Back
        </button>
        <button
          type="button"
          disabled={!ready}
          onClick={onSubmit}
          className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13px] font-bold uppercase tracking-[0.1em] transition-all ${
            ready
              ? "bg-rose text-white hover:bg-rose-deep hover:-translate-y-px shadow-[0_12px_24px_-12px_rgba(140,76,76,0.5)]"
              : "bg-ink-5 text-ink-40 cursor-not-allowed"
          }`}
        >
          ดูผลประเมิน <span className="text-base leading-none">→</span>
        </button>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-40 font-bold">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-ink-10 bg-white px-4 py-3 font-thai text-[15px] text-ink placeholder:text-ink-40 focus:border-rose focus:outline-none transition-colors"
      />
    </div>
  );
}

/* ── result + recommendation ─────────────────────────────────────── */
function ResultPanel({ result, onReset, done }: { result: Result; onReset: () => void; done: boolean }) {
  const tierColor: "wellness" | "rose" | "science" =
    result.tier === "Foundation" ? "wellness" : result.tier === "Personalize" ? "rose" : "science";
  const hex = { wellness: "#396755", rose: "#8C4C4C", science: "#2A7B8F" }[tierColor];
  return (
    <div className="flex flex-col flex-1">
      {done && (
        <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-wellness-ultra px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-wellness-deep">
          <span className="h-1.5 w-1.5 rounded-full bg-status-optimal" />
          ส่งผลประเมินแล้ว · ทีมจะติดต่อกลับใน 24 ชม.
        </div>
      )}
      <div className="font-mono text-[10px] uppercase tracking-[0.14em] font-bold" style={{ color: hex }}>
        Recommended Path
      </div>
      <h4 className="mt-2 font-display font-medium tracking-tight text-ink text-[30px] lg:text-[38px] leading-[1.15]">
        แนะนำ ·{" "}
        <span className="italic" style={{ color: hex }}>
          {result.tier}
        </span>
      </h4>
      <p className="mt-3 font-thai text-[14.5px] text-ink-60 leading-[1.75]">{result.rationale}</p>

      <div className="mt-6 space-y-2.5">
        <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-40 font-bold mb-1">จุดที่ควรเริ่มก่อน</div>
        {result.priorities.map((p, i) => (
          <div key={i} className="flex items-start gap-3 rounded-2xl border border-ink-10 bg-surface/60 px-4 py-3">
            <span className="text-xl leading-none mt-0.5">{p.icon}</span>
            <div>
              <div className="font-head text-[14px] font-bold text-ink">{p.title}</div>
              <div className="font-thai text-[13px] text-ink-60 leading-snug">{p.body}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-7 flex items-center justify-between gap-3 flex-wrap">
        <button
          type="button"
          onClick={onReset}
          className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink-40 hover:text-ink"
        >
          ↻ ทำใหม่
        </button>
        <a
          href="#programs"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13px] font-bold uppercase tracking-[0.1em] text-white transition-all hover:-translate-y-px"
          style={{ background: hex, boxShadow: `0 12px 24px -12px ${hex}80` }}
        >
          ดูรายละเอียด {result.tier} <span className="text-base leading-none">→</span>
        </a>
      </div>
    </div>
  );
}
