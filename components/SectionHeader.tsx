/* Reusable section header pattern · matches design */
import type { ReactNode } from "react";

export function SectionHeader({
  number,
  label,
  title,
  description,
  dot = "bg-rose",
  accent = "text-rose",
  align = "default",
}: {
  number: string;
  label: string;
  title: ReactNode;
  description?: string;
  dot?: string;
  accent?: string;
  align?: "default" | "stack";
}) {
  return (
    <div className={`mb-12 lg:mb-16 grid items-end gap-6 ${align === "stack" ? "" : "md:grid-cols-[1fr_auto]"}`}>
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[11px] text-ink-40">{number}</span>
          <span className={`h-2 w-2 rounded-full ${dot}`} />
          <span className={`text-[11px] font-bold uppercase tracking-[0.14em] ${accent}`}>{label}</span>
        </div>
        <h2 className="font-display font-light tracking-tight text-ink text-[40px] lg:text-[60px] leading-[1.15]">{title}</h2>
      </div>
      {description && (
        <p className="font-thai text-[15px] leading-[1.75] text-ink-60 max-w-md md:text-right">{description}</p>
      )}
    </div>
  );
}
