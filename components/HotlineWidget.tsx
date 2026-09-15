import Link from "next/link";
import { site } from "@/lib/site";

export function HotlineWidget() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-5 right-5 z-40 hidden max-w-[220px] bg-navy px-4 py-3 text-white shadow-xl md:block"
    >
      <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-cyan">
        24 hour emergency hotline
      </p>
      <p className="mt-1 text-sm font-bold">{site.phoneLabel}</p>
    </Link>
  );
}
