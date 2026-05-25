/* Footer · matches UP Wellness.html design */
import { UPLogo } from "./UPLogo";
import { SITE } from "@/lib/content";

const SECTIONS: [string, [string, string][]][] = [
  [
    "Explore",
    [
      ["#about", "About"],
      ["#programs", "Programs"],
      ["#community", "Community"],
      ["#supplements", "Supplements"],
    ],
  ],
  [
    "Tools",
    [
      ["#assessment", "Health Check"],
      ["#assessment", "MetaFlex Quiz"],
      ["#", "Member Portal"],
      ["#", "Coach Login"],
    ],
  ],
];

export function Footer() {
  const contact: [string, string][] = [
    [`mailto:${SITE.email}`, SITE.email],
    [`https://line.me/R/ti/p/~${SITE.lineOA}`, `LINE · ${SITE.lineOA}`],
    ["#", "Bangkok · Thailand"],
    [`https://facebook.com/${SITE.facebook}`, `Facebook · @${SITE.facebook}`],
  ];

  return (
    <footer className="relative bg-ink py-16 text-white/60">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="grid gap-10 pb-12 md:grid-cols-[2fr_1fr_1fr_1fr] border-b border-white/10">
          <div>
            <UPLogo size="lg" inverted />
            <p className="mt-6 max-w-sm font-thai text-sm leading-[1.8] text-white/45">
              Science-based · Coach-led · Community-driven · บ้านของคนที่เลือกจะอยู่ดีอย่างมีคุณภาพ ตลอดชีวิตที่ยืนยาว
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.14em] text-white/60">
              <span className="relative h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-status-optimal" />
                <span className="absolute inset-0 rounded-full bg-status-optimal animate-ping opacity-70" />
              </span>
              Open · Bangkok · 2026
            </div>
          </div>
          {SECTIONS.map(([title, links]) => (
            <div key={title}>
              <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.14em] text-white/30">{title}</div>
              <ul className="space-y-2.5 text-sm text-white/55">
                {links.map(([h, l]) => (
                  <li key={l}>
                    <a href={h} className="hover:text-white transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.14em] text-white/30">Contact</div>
            <ul className="space-y-2.5 text-sm text-white/55">
              {contact.map(([h, l]) => (
                <li key={l}>
                  <a href={h} target={h.startsWith("http") ? "_blank" : undefined} rel={h.startsWith("http") ? "noopener" : undefined} className="hover:text-white transition-colors break-all">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 font-mono text-[11px] text-white/30">
          <span>© {new Date().getFullYear()} UP Wellness Co., Ltd.</span>
          <span>upwellness.co · live longer · live better</span>
        </div>
      </div>
    </footer>
  );
}
