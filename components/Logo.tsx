import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  compact?: boolean;
};

export function Logo({ variant = "dark", compact = false }: LogoProps) {
  const text = variant === "light" ? "text-white" : "text-navy";
  const sub = variant === "light" ? "text-white/70" : "text-navy/70";
  const mark = variant === "light" ? "text-cyan" : "text-navy";

  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Milwaukee Water Damage Restoration home">
      <span className={`relative flex h-11 w-11 shrink-0 items-center justify-center ${mark}`}>
        <svg viewBox="0 0 40 40" className="h-11 w-11" aria-hidden="true">
          <path
            d="M20 5.5 35 18.2V35H5V18.2L20 5.5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <path
            d="M20 16c-2.8 3.6-4.6 6-4.6 7.9 0 2.5 2.1 4.4 4.6 4.4s4.6-1.9 4.6-4.4c0-1.9-1.8-4.3-4.6-7.9Z"
            fill="#1bbdff"
          />
        </svg>
      </span>
      <span className={`leading-none ${text}`}>
        <span className="block text-[22px] font-extrabold uppercase tracking-[-0.04em]">Milwaukee</span>
        <span className={`mt-0.5 block text-[9px] font-bold uppercase tracking-[0.16em] ${sub}`}>
          {compact ? "Water Restoration" : "Water Damage Restoration"}
        </span>
      </span>
    </Link>
  );
}
