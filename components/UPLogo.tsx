/* UP Wellness brand logo · uses /public/UPwellness.png (1400×500 brushstroke wordmark) */
import Image from "next/image";

const SIZES = {
  sm: { w: 96,  h: 34 },
  md: { w: 140, h: 50 },
  lg: { w: 200, h: 72 },
};

export function UPLogo({
  inverted = false,
  size = "md",
}: {
  inverted?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const dims = SIZES[size];
  return (
    <span
      className={`inline-flex items-center ${
        inverted ? "rounded-2xl bg-cream/95 px-3 py-2 shadow-sm" : ""
      }`}
      aria-label="UP Wellness"
    >
      <Image
        src="/UPwellness.png"
        alt="UP Wellness · Ultimate Passion"
        width={dims.w}
        height={dims.h}
        priority={size !== "sm"}
        className="block h-auto w-auto"
        style={{ maxHeight: dims.h, maxWidth: dims.w }}
      />
    </span>
  );
}
