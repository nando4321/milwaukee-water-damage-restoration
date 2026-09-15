import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { EmergencyBand } from "@/components/CtaBanner";
import { faqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Free Estimate",
  description:
    "Request a water damage estimate in Milwaukee County or Waukesha County. Phone coming soon — use the form for 24/7 requests.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-deep">
        <div className="container-site py-16 md:py-20">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Need help right now?
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Damage situations move quickly, and an early assessment limits what has to
            be torn out. Share the property details below. A phone number is coming
            soon — until then, this form is the line in.
          </p>
        </div>
      </section>
      <section className="bg-paper">
        <div className="container-wide grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <aside className="space-y-5">
            <div className="rounded-2xl bg-navy p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan">
                24/7 support
              </p>
              <p className="mt-2 text-2xl font-semibold">{site.phoneLabel}</p>
              <p className="mt-2 text-sm text-white/70">
                Open around the clock for form requests. A live phone line will be
                published here when it is ready. Do not use a number copied from
                another company.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-6">
              <h2 className="text-lg font-semibold text-navy">Our office</h2>
              <p className="mt-2 leading-7 text-muted">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-6">
              <h2 className="text-lg font-semibold text-navy">Counties we take</h2>
              <p className="mt-2 text-muted">Milwaukee County and Waukesha County only.</p>
            </div>
          </aside>
        </div>
      </section>
      <section className="bg-white">
        <div className="container-site py-16">
          <h2 className="section-title">Frequently asked questions</h2>
          <dl className="mt-8 divide-y divide-line">
            {faqs.map((item, index) => (
              <div key={item.q} className="py-5">
                <dt className="font-semibold text-navy">
                  {index + 1}. {item.q}
                </dt>
                <dd className="mt-2 leading-7 text-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <EmergencyBand />
    </>
  );
}
