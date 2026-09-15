import { CtaLink } from "@/components/Brand";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light" | "black";

const map: Record<Variant, "cyan" | "black" | "white"> = {
  primary: "cyan",
  secondary: "white",
  ghost: "white",
  light: "white",
  black: "black",
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
    <CtaLink href={href} variant={map[variant]} className={className}>
      {children}
    </CtaLink>
  );
}
