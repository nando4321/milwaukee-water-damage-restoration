import Link from "next/link";
import { Logo } from "@/components/Logo";
import { services, site } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
  { href: "/privacy", label: "Privacy" },
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-7 text-white/65">
            Milwaukee Water Damage Restoration serves Milwaukee County and Waukesha
            County with water extraction, drying, mold work after water, and rebuilding.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-extrabold uppercase tracking-tight">Navigation</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-cyan">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-extrabold uppercase tracking-tight">Contact us</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>
              <p className="text-white/50">Our address</p>
              <p>{site.address.street}</p>
              <p>
                {site.address.city}, {site.address.state} {site.address.zip}
              </p>
            </li>
            <li>
              <p className="text-white/50">Phone number</p>
              <p>{site.phoneLabel}</p>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-extrabold uppercase tracking-tight">Services</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {services.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="hover:text-cyan">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col gap-2 py-5 text-xs text-white/45 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>Office: {site.address.line}</p>
        </div>
      </div>
    </footer>
  );
}
