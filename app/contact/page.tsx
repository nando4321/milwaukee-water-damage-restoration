import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { EmergencyBand } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
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
      <PageHero
        eyebrow="Contact us"
        title="Need help right now?"
        bar="Share the property details and we will follow up"
        body="A phone number is coming soon — until then, this form is the line in for Milwaukee County and Waukesha County water jobs."
        image="/images/hero.jpg"
        imageAlt="Placeholder contact hero"
      />
      <section className="bg-paper">
        <div className="container-wide grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <aside className="space-y-5">
            <div className="bg-navy p-6 text-white">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-cyan">
                24/7 support
              </p>
              <p className="mt-2 text-2xl font-extrabold uppercase">{site.phoneLabel}</p>
              <p className="mt-2 text-sm text-white/70">
                Open around the clock for form requests. A live phone line will be
                published here when it is ready.
              </p>
            </div>
            <div className="bg-white p-6">
              <h2 className="font-extrabold uppercase text-navy">Our office</h2>
              <p className="mt-2 leading-7 text-muted">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </p>
            </div>
            <div className="bg-white p-6">
              <h2 className="font-extrabold uppercase text-navy">Counties we take</h2>
              <p className="mt-2 text-muted">Milwaukee County and Waukesha County only.</p>
            </div>
          </aside>
        </div>
      </section>
      <section className="bg-white">
        <div className="container-site py-16">
          <h2 className="display text-[36px] text-charcoal">Frequently asked questions</h2>
          <dl className="mt-8 divide-y divide-line">
            {faqs.map((item, index) => (
              <div key={item.q} className="py-5">
                <dt className="font-extrabold uppercase text-navy">
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
