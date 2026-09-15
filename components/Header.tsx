"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowCircle, CtaLink, PhoneIcon } from "@/components/Brand";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", menu: true },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

const serviceLinks = [
  { href: "/services/water-damage", label: "Water Damage Restoration" },
  { href: "/services/mold-remediation", label: "Mold Remediation" },
  { href: "/services/rebuilding", label: "Rebuilding" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-t-[6px] border-navy bg-white shadow-[0_1px_0_#eee]">
      <div className="flex items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <Logo compact />
        <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
          {links.map((link) =>
            link.menu ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`inline-flex items-center gap-1 text-[15px] font-medium ${
                    pathname.startsWith("/services") ? "text-navy" : "text-charcoal hover:text-navy"
                  }`}
                >
                  {link.label}
                  <span className="text-[10px]">▾</span>
                </Link>
                {servicesOpen ? (
                  <div className="absolute left-0 top-full z-20 w-72 pt-3">
                    <div className="rounded-xl border border-line bg-white p-2 shadow-xl">
                      {serviceLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block rounded-lg px-3 py-2.5 text-sm text-charcoal hover:bg-paper hover:text-navy"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] font-medium ${
                  pathname === link.href ? "text-navy" : "text-charcoal hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <div className="flex items-center gap-3">
            <PhoneIcon />
            <div className="leading-tight">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-navy">Call us now</p>
              <p className="text-sm font-semibold text-charcoal">{site.phoneLabel}</p>
            </div>
          </div>
          <CtaLink href="/contact" variant="black">
            Get in touch
          </CtaLink>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-navy" />
            <span className="block h-0.5 w-5 bg-navy" />
            <span className="block h-0.5 w-5 bg-navy" />
          </span>
        </button>
      </div>
      {open ? (
        <div className="border-t border-line px-4 pb-4 lg:hidden">
          <nav className="flex flex-col gap-1 pt-3" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2.5 text-charcoal"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {serviceLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-muted"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <p className="px-3 pt-2 text-sm font-semibold text-navy">{site.phoneLabel}</p>
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-3 py-2.5 font-extrabold uppercase text-navy"
              onClick={() => setOpen(false)}
            >
              Get in touch
              <ArrowCircle tone="navy" size="sm" />
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
