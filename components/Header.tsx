/* Nav · matches UP Wellness.html design exactly */
import { UPLogo } from "./UPLogo";

const LINKS: [string, string][] = [
  ["#about", "About"],
  ["#programs", "Programs"],
  ["#community", "Community"],
  ["#supplements", "Supplements"],
  ["#resources", "Resources"],
  ["#assessment", "Assessment"],
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-10/60 bg-warm-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6 lg:px-10">
        <UPLogo />
        <nav className="hidden lg:flex items-center gap-7">
          {LINKS.map(([href, l]) => (
            <a
              key={href}
              href={href}
              className="font-head text-[13px] font-semibold text-ink-60 hover:text-ink transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#assessment"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-ink-10 px-3.5 py-1.5 text-[12px] font-semibold text-ink hover:border-rose hover:text-rose transition-colors"
          >
            <span className="relative h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-rose" />
              <span className="absolute inset-0 rounded-full bg-rose animate-ping opacity-70" />
            </span>
            Free Check
          </a>
          <a
            href="#assessment"
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[12px] font-bold text-white hover:bg-rose-deep transition-colors"
          >
            เริ่มประเมิน <span>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
