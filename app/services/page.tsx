import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServiceGrid } from "@/components/ServiceCard";
import { CtaBanner } from "@/components/CtaBanner";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Water Restoration Services in Greater Milwaukee",
  description:
    "Water damage restoration, water-related mold remediation, and rebuilding after drying in Milwaukee County and Waukesha County.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Water restoration for homes and businesses"
        body="Three services, all connected: stop the water, dry the structure, treat water-related mold, then rebuild what cannot be saved."
        image="/images/drying-equipment.jpg"
        imageAlt="Placeholder photo of drying equipment"
      />
      <section className="bg-white">
        <div className="container-wide py-20">
          <ServiceGrid />
        </div>
      </section>
      <section className="bg-paper">
        <div className="container-site py-20">
          <h2 className="section-title">Common questions</h2>
          <dl className="mt-10 divide-y divide-line rounded-2xl border border-line bg-white">
            {faqs.map((item) => (
              <div key={item.q} className="px-6 py-5">
                <dt className="font-semibold text-navy">{item.q}</dt>
                <dd className="mt-2 text-sm leading-6 text-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
