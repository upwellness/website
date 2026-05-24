"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "วิธีทำงาน",  href: "#how" },
  { label: "Community",  href: "#community" },
  { label: "บริการ",     href: "#services" },
  { label: "ทีมเรา",     href: "#coaches" },
  { label: "FAQ",        href: "#faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`liquid-header sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-[0_4px_24px_rgba(31,30,27,0.05)]" : ""}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="#top" className="flex items-center gap-2.5 font-serif text-xl font-semibold text-ink hover:text-rose transition">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose text-cream font-bold text-sm shadow-sm">UP</span>
          <span className="hidden sm:inline">Wellness</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV.map(item => (
            <li key={item.href}>
              <a href={item.href} className="rounded-full px-4 py-2 text-[13px] font-medium text-ink-60 hover:text-rose hover:bg-white/60 transition">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#assessment"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2 text-[13px] font-semibold text-white hover:bg-rose transition-all hover:shadow-md">
          เริ่มประเมิน
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
          aria-expanded={open}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-white/60 border border-white/70"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-ink-10 bg-white/85 backdrop-blur-xl px-6 py-4">
          <ul className="flex flex-col gap-1">
            {NAV.map(item => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-ink hover:bg-rose-mist hover:text-rose">
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a href="#assessment" onClick={() => setOpen(false)}
                className="block w-full text-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white">
                เริ่มประเมินสุขภาพ
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
