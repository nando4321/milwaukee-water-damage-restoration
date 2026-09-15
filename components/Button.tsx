import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light";

const styles: Record<Variant, string> = {
  primary:
    "bg-cyan text-navy-deep hover:bg-cyan-hover shadow-[0_8px_24px_rgba(27,189,255,0.28)]",
  secondary:
    "border-2 border-white/80 bg-transparent text-white hover:bg-white hover:text-navy",
  ghost:
    "border-2 border-navy bg-transparent text-navy hover:bg-navy hover:text-white",
  light:
    "bg-white text-navy hover:bg-paper",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-[15px] font-semibold tracking-tight transition ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
