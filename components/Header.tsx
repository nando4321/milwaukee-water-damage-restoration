"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", menu: true },
  { href: "/about", label: "About" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
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
    <header className="sticky top-0 z-50">
      <div className="bg-navy-deep text-white/85">
        <div className="container-wide flex flex-wrap items-center justify-between gap-2 py-2 text-[13px]">
          <p>24/7 emergency water response across Greater Milwaukee</p>
          <p className="font-medium text-cyan">{site.phoneLabel}</p>
        </div>
      </div>
      <div className="border-b border-white/10 bg-navy text-white">
        <div className="container-wide flex items-center justify-between gap-4 py-3.5">
          <Logo variant="light" compact />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
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
                    className={`text-[15px] font-medium transition hover:text-cyan ${
                      pathname.startsWith("/services") ? "text-cyan" : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {servicesOpen ? (
                    <div className="absolute left-0 top-full z-20 w-72 pt-3">
                      <div className="rounded-lg border border-white/10 bg-navy-deep p-2 shadow-xl">
                        {serviceLinks.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block rounded-md px-3 py-2.5 text-sm text-white/90 hover:bg-white/8 hover:text-cyan"
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
                  className={`text-[15px] font-medium transition hover:text-cyan ${
                    pathname === link.href ? "text-cyan" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="rounded-md bg-cyan px-4 py-2.5 text-sm font-semibold text-navy-deep hover:bg-cyan-hover"
            >
              Request Estimate
            </Link>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
            </span>
          </button>
        </div>
        {open ? (
          <div className="border-t border-white/10 px-4 pb-4 lg:hidden">
            <nav className="flex flex-col gap-1 pt-3" aria-label="Mobile">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2.5 text-white hover:bg-white/8"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm text-white/75 hover:bg-white/8"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 rounded-md bg-cyan px-3 py-2.5 text-center font-semibold text-navy-deep"
                onClick={() => setOpen(false)}
              >
                Request Estimate
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
