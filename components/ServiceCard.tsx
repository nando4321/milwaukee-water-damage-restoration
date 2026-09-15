import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";

export function ServiceGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {services.map((service) => (
        <Link
          key={service.href}
          href={service.href}
          className="group overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-navy">{service.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{service.summary}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy">
              Learn more
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
