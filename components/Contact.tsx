import { MessageCircle, Mail, Phone, Clock, MapPin } from "lucide-react";
import { SITE } from "@/lib/content";

// Brand icons (inline SVG · Lucide v1 doesn't ship brand icons)
const FacebookIcon = (props: { size?: number }) => (
  <svg width={props.size ?? 20} height={props.size ?? 20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.412c0-3.027 1.792-4.7 4.533-4.7 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
  </svg>
);
const InstagramIcon = (props: { size?: number }) => (
  <svg width={props.size ?? 20} height={props.size ?? 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-eyebrow">Get in Touch</p>
          <h2 className="mt-3 font-serif text-[40px] md:text-[64px] font-semibold text-ink leading-[1.05] tracking-tight">
            เริ่มต้นด้วย <em className="text-rose not-italic italic">การคุยกัน</em>
          </h2>
          <p className="mt-4 text-[16px] md:text-[18px] text-ink-60 leading-relaxed">
            ไม่ต้องตัดสินใจวันนี้ · ทักมาก่อน เรามาดูร่วมกันว่าเส้นทางไหนเหมาะกับคุณ
          </p>
        </div>

        {/* Primary · LINE (full width hero CTA) */}
        <a
          href={`https://line.me/R/ti/p/~${SITE.lineOA}`}
          target="_blank"
          rel="noopener"
          aria-label="Open LINE Official Account"
          className="liquid liquid-shine liquid-hover rounded-3xl p-6 md:p-8 flex items-center gap-5 mb-4"
          style={{ background: "linear-gradient(135deg, rgba(6, 199, 85, 0.10), rgba(255, 255, 255, 0.55))", border: "1px solid rgba(6, 199, 85, 0.22)" }}
        >
          <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl text-white flex-shrink-0 shadow-md" style={{ background: "#06C755" }}>
            <MessageCircle size={32} strokeWidth={2.25} aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-60">Preferred channel</div>
            <div className="mt-1 font-serif text-[24px] md:text-[28px] font-semibold text-ink leading-tight">
              LINE Official · {SITE.lineOA}
            </div>
            <div className="mt-1 text-[13px] text-ink-60">เปิดทุกวัน 7:00 – 22:00 · ตอบเร็วที่สุด</div>
          </div>
        </a>

        {/* Secondary channels · 4 in grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <ChannelCard
            icon={<Phone size={20} strokeWidth={2.25} aria-hidden="true" />}
            color="#8C4C4C"
            label="โทร"
            value={SITE.phone}
            href={SITE.phone !== "TODO" ? `tel:${SITE.phone.replace(/[^0-9+]/g, "")}` : undefined}
          />
          <ChannelCard
            icon={<Mail size={20} strokeWidth={2.25} aria-hidden="true" />}
            color="#A16207"
            label="Email"
            value={SITE.email}
            href={`mailto:${SITE.email}`}
          />
          <ChannelCard
            icon={<FacebookIcon size={20} />}
            color="#1877F2"
            label="Facebook"
            value={`@${SITE.facebook}`}
            href={`https://facebook.com/${SITE.facebook}`}
            external
          />
          <ChannelCard
            icon={<InstagramIcon size={20} />}
            color="#E1306C"
            label="Instagram"
            value={`@${SITE.instagram}`}
            href={`https://instagram.com/${SITE.instagram}`}
            external
          />
        </div>

        {/* Meta · 2 info chips */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Mini icon={<Clock size={14} strokeWidth={2.5} />} label="เปิดทุกวัน · LINE 7:00 – 22:00" />
          <Mini icon={<MapPin size={14} strokeWidth={2.5} />} label="กรุงเทพฯ + นัดทาง LINE" />
        </div>
      </div>
    </section>
  );
}

function ChannelCard({
  icon, color, label, value, href, external,
}: {
  icon: React.ReactNode;
  color: string;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <div className="liquid liquid-hover rounded-2xl p-4 flex flex-col items-center text-center h-full">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl mb-2" style={{ background: `${color}18`, color }}>
        {icon}
      </div>
      <div className="font-mono text-[9px] uppercase tracking-widest text-ink-60">{label}</div>
      <div className="mt-0.5 font-serif text-[15px] font-semibold text-ink truncate max-w-full">{value}</div>
    </div>
  );
  if (!href) return <div className="opacity-60 cursor-not-allowed">{inner}</div>;
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener" : undefined}
      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 rounded-2xl">
      {inner}
    </a>
  );
}

function Mini({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="liquid rounded-2xl px-4 py-3 flex items-center gap-2.5">
      <span className="text-rose">{icon}</span>
      <span className="font-thai text-[13px] text-ink">{label}</span>
    </div>
  );
}
