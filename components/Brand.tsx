import Link from "next/link";
import type { ReactNode } from "react";

export function ArrowCircle({
  tone = "cyan",
  size = "md",
}: {
  tone?: "cyan" | "navy" | "white";
  size?: "sm" | "md";
}) {
  const tones = {
    cyan: "bg-cyan text-navy",
    navy: "bg-navy text-white",
    white: "bg-white text-navy",
  };
  const sizes = size === "sm" ? "h-8 w-8" : "h-11 w-11";
  return (
    <span className={`inline-flex shrink-0 items-center justify-center rounded-full ${tones[tone]} ${sizes}`}>
      <svg viewBox="0 0 20 20" className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} aria-hidden="true">
        <path
          d="M5 10h8M10 5l5 5-5 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function CtaLink({
  href,
  children,
  variant = "cyan",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "cyan" | "black" | "white";
  className?: string;
}) {
  const variants = {
    cyan: "bg-cyan text-navy hover:bg-cyan-hover",
    black: "bg-black text-white hover:bg-charcoal",
    white: "bg-white text-navy hover:bg-paper",
  };
  const arrow = variant === "cyan" ? "navy" : "cyan";
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 rounded-full py-1.5 pr-1.5 pl-5 text-[13px] font-extrabold uppercase tracking-[0.06em] transition ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowCircle tone={arrow} />
    </Link>
  );
}

export function WelcomeBadge({
  children,
  inverted = false,
}: {
  children: ReactNode;
  inverted?: boolean;
}) {
  return (
    <span className={inverted ? "welcome-pill is-light" : "welcome-pill"}>
      {children}
      <ArrowCircle tone="cyan" size="sm" />
    </span>
  );
}

export function CyanBar({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`cyan-bar ${className}`}>{children}</p>;
}

export function PhoneIcon() {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cyan text-navy">
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7.2 3.8h3.1l1 4.2-2 1.2a12.6 12.6 0 0 0 5.5 5.5l1.2-2 4.2 1v3.1c0 .7-.5 1.3-1.2 1.4C9.4 19.6 4.4 14.6 3 7c0-.7.6-1.2 1.3-1.2h2.9Z"
        />
      </svg>
    </span>
  );
}
