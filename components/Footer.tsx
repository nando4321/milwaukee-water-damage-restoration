import Link from "next/link";
import { Logo } from "@/components/Logo";
import { milwaukeeCities, services, site, waukeshaCities } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-7 text-white/70">
            Water damage restoration, mold remediation, and rebuilding for homes and
            businesses in Milwaukee County and Waukesha County.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan">Services</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80">
            {services.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="hover:text-cyan">
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/about" className="hover:text-cyan">
                About
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-cyan">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan">
            Milwaukee County
          </h2>
          <ul className="mt-4 columns-2 gap-6 text-sm text-white/75">
            {milwaukeeCities.slice(0, 8).map((city) => (
              <li key={city} className="mb-2">
                {city}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan">
            Waukesha County
          </h2>
          <ul className="mt-4 columns-2 gap-6 text-sm text-white/75">
            {waukeshaCities.slice(0, 8).map((city) => (
              <li key={city} className="mb-2">
                {city}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col gap-3 py-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            Office: {site.address.line}
          </p>
          <p>{site.phoneLabel} · Use the estimate form for 24/7 requests</p>
          <p>© {new Date().getFullYear()} {site.name}</p>
        </div>
      </div>
    </footer>
  );
}
