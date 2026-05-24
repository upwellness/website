import { SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="liquid-dark mt-16 px-6 py-12">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8 text-cream">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose text-cream font-bold text-sm">UP</span>
            <span className="font-serif text-xl font-semibold">{SITE.brand}</span>
          </div>
          <p className="text-[12.5px] text-cream/70 leading-relaxed">
            {SITE.tagline}
          </p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-rose-soft">
            Science-based · Personalized · Longevity-first
          </p>
        </div>

        <div>
          <h4 className="font-mono text-[10px] uppercase tracking-widest text-cream/50 mb-3">บริการ</h4>
          <ul className="space-y-1.5 text-[13px]">
            <li><a href="#services" className="hover:text-rose-soft transition">Health Check (ฟรี)</a></li>
            <li><a href="#services" className="hover:text-rose-soft transition">UP Labs 14-day</a></li>
            <li><a href="#services" className="hover:text-rose-soft transition">CGM Reset</a></li>
            <li><a href="#services" className="hover:text-rose-soft transition">Full Course 60-day</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[10px] uppercase tracking-widest text-cream/50 mb-3">Community</h4>
          <ul className="space-y-1.5 text-[13px]">
            <li><a href="#community" className="hover:text-rose-soft transition">Run Club</a></li>
            <li><a href="#community" className="hover:text-rose-soft transition">Bike</a></li>
            <li><a href="#community" className="hover:text-rose-soft transition">Ice Bath</a></li>
            <li><a href="#community" className="hover:text-rose-soft transition">Forest Bathing</a></li>
            <li><a href="#community" className="hover:text-rose-soft transition">Board Game · การเงิน</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[10px] uppercase tracking-widest text-cream/50 mb-3">ติดต่อ</h4>
          <ul className="space-y-1.5 text-[13px]">
            <li><a href={`https://line.me/R/ti/p/~${SITE.lineOA}`} target="_blank" rel="noopener" className="hover:text-rose-soft transition">LINE OA · {SITE.lineOA}</a></li>
            <li><a href={`mailto:${SITE.email}`} className="hover:text-rose-soft transition break-all">{SITE.email}</a></li>
          </ul>
          <p className="mt-4 font-thai text-[11px] text-cream/50 leading-relaxed">
            ⚖️ ข้อมูลใน website เพื่อ wellness coaching · ไม่ทดแทนการวินิจฉัยทางการแพทย์
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-10 pt-6 border-t border-cream/10 flex flex-wrap justify-between items-center gap-3 text-[11px] font-mono text-cream/50">
        <span>© {new Date().getFullYear()} {SITE.brand} · All rights reserved</span>
        <span className="text-cream/30">v1.0 · Built with care</span>
      </div>
    </footer>
  );
}
