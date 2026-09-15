import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  compact?: boolean;
};

export function Logo({ variant = "dark", compact = false }: LogoProps) {
  const text = variant === "light" ? "text-white" : "text-navy";
  const sub = variant === "light" ? "text-white/70" : "text-navy/65";

  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Milwaukee Water Damage Restoration home">
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-cyan shadow-[inset_0_0_0_2px_rgba(27,189,255,0.35)]">
        <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
          <path
            d="M16 5c-4.8 6.2-8 10.2-8 13.4 0 4.3 3.6 7.6 8 7.6s8-3.3 8-7.6C24 15.2 20.8 11.2 16 5Z"
            fill="currentColor"
          />
          <path
            d="M16 20.2c-1.7 0-3-1.2-3-2.8 0-1.2.8-2.4 2.3-4.2.3.9.7 1.5 1.4 1.5.6 0 .9-.5 1.2-1.2 1.2 1.6 1.8 2.7 1.8 3.9 0 1.6-1.3 2.8-3.7 2.8Z"
            fill="#061e60"
          />
        </svg>
      </span>
      <span className={`min-w-0 leading-none ${text}`}>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.2em]">Milwaukee</span>
        <span className="mt-1 block whitespace-nowrap text-[15px] font-semibold tracking-tight">
          {compact ? "Water Restoration" : "Water Damage Restoration"}
        </span>
        {compact ? null : (
          <span className={`mt-1 block text-[11px] font-medium tracking-[0.08em] ${sub}`}>
            Milwaukee County · Waukesha County
          </span>
        )}
      </span>
    </Link>
  );
}
