/* UP Wellness logo · matches design */
export function UPLogo({
  inverted = false,
  size = "md",
}: {
  inverted?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: ["text-base", "text-[10px] tracking-[1.5px]"],
    md: ["text-xl", "text-[11px] tracking-[2px]"],
    lg: ["text-3xl", "text-sm tracking-[2.5px]"],
  };
  const [up, suf] = sizes[size];
  return (
    <span className={`inline-flex items-baseline font-head font-extrabold tracking-tighter leading-none ${inverted ? "text-white" : "text-ink"}`}>
      <span className={up}>UP</span>
      <span className={`ml-1.5 font-normal opacity-70 ${suf} ${inverted ? "text-rose-light" : "text-rose"}`}>
        Wellness
      </span>
    </span>
  );
}
