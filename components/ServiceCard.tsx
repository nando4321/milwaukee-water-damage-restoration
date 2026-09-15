import Image from "next/image";
import Link from "next/link";
import { ArrowCircle } from "@/components/Brand";
import { services } from "@/lib/site";

function ServiceIcon({ slug }: { slug: string }) {
  if (slug === "water-damage") {
    return (
      <svg viewBox="0 0 48 48" className="h-12 w-12 text-white" aria-hidden="true">
        <path d="M6 22h36" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <path d="M10 22v-6h8v6M30 22v-6h8v6" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <path d="M24 26c-3 4-5 6.6-5 8.6 0 2.7 2.2 4.8 5 4.8s5-2.1 5-4.8c0-2-2-4.6-5-8.6Z" fill="currentColor" />
      </svg>
    );
  }
  if (slug === "rebuilding") {
    return (
      <svg viewBox="0 0 48 48" className="h-12 w-12 text-white" aria-hidden="true">
        <path d="M14 34 34 14M18 10l8 8-4 4-8-8 4-4Zm16 16 8 8-4 4-8-8 4-4Z" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12 text-white" aria-hidden="true">
      <circle cx="24" cy="24" r="4" fill="currentColor" />
      <circle cx="14" cy="18" r="3" fill="currentColor" />
      <circle cx="34" cy="18" r="3" fill="currentColor" />
      <circle cx="16" cy="32" r="3" fill="currentColor" />
      <circle cx="32" cy="32" r="3" fill="currentColor" />
      <path d="M24 20v-6M21 22l-6-3M27 22l6-3M21 26l-6 4M27 26l6 4" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function ServiceGrid({ fullBleed = false }: { fullBleed?: boolean }) {
  return (
    <div className={`grid md:grid-cols-3 ${fullBleed ? "" : "gap-3"}`}>
      {services.map((service) => (
        <Link
          key={service.href}
          href={service.href}
          className={`group relative block min-h-[420px] overflow-hidden ${fullBleed ? "" : "rounded-sm"}`}
        >
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-between px-6 py-10 text-center">
            <ServiceIcon slug={service.slug} />
            <div className="flex w-full flex-col items-center gap-6">
              <h3 className="display text-[28px] text-white md:text-[30px]">{service.title}</h3>
              <ArrowCircle tone="cyan" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
