import { MessageCircle, Mail, Phone, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-eyebrow">Get in Touch</p>
          <h2 className="section-title mt-3">เริ่มต้นด้วย <em>การคุยกัน</em></h2>
          <p className="mt-4 text-ink-60 leading-relaxed">
            ไม่ต้องตัดสินใจวันนี้ · ทักมาก่อน เรามาดูร่วมกันว่าเส้นทางไหนเหมาะกับคุณ
          </p>
        </div>

        <div className="liquid liquid-shine rounded-3xl p-6 md:p-10 grid md:grid-cols-2 gap-6">
          {/* LINE primary */}
          <a href={`https://line.me/R/ti/p/~${SITE.lineOA}`} target="_blank" rel="noopener"
            className="liquid-hover rounded-2xl p-6 flex items-center gap-4 hover:bg-green/8 transition"
            style={{ background: "rgba(6, 199, 85, 0.08)", border: "1px solid rgba(6, 199, 85, 0.18)" }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white" style={{ background: "#06C755" }}>
              <MessageCircle size={26} strokeWidth={2.25} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-mono text-[10px] uppercase tracking-widest text-ink-60">Preferred</div>
              <div className="font-serif text-xl font-semibold text-ink">LINE Official</div>
              <div className="font-mono text-[12.5px] text-ink-60 mt-0.5">{SITE.lineOA}</div>
            </div>
          </a>

          {/* Email */}
          <a href={`mailto:${SITE.email}`}
            className="liquid-hover rounded-2xl p-6 flex items-center gap-4 bg-white/60 border border-ink/8 hover:bg-white/85 transition"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-mist text-rose">
              <Mail size={24} strokeWidth={2.25} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-mono text-[10px] uppercase tracking-widest text-ink-60">Email</div>
              <div className="font-serif text-xl font-semibold text-ink truncate">{SITE.email}</div>
              <div className="font-mono text-[11px] text-ink-60 mt-0.5">ตอบใน 24 ชม.</div>
            </div>
          </a>
        </div>

        {/* Meta info row */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Mini icon={<Clock size={14} strokeWidth={2.5} />} label="เปิดทุกวัน · LINE 7am-10pm" />
          <Mini icon={<MapPin size={14} strokeWidth={2.5} />} label="กรุงเทพฯ + นัดทาง LINE" />
          <Mini icon={<Phone size={14} strokeWidth={2.5} />} label="โทรนัดผ่าน LINE ก่อน" />
        </div>
      </div>
    </section>
  );
}

function Mini({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="liquid rounded-2xl px-4 py-3 flex items-center gap-2.5">
      <span className="text-rose">{icon}</span>
      <span className="font-thai text-[12.5px] text-ink">{label}</span>
    </div>
  );
}
