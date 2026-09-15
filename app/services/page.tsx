import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServiceGrid } from "@/components/ServiceCard";
import { EmergencyBand } from "@/components/CtaBanner";
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
        eyebrow="Our services"
        title="Water restoration for homes and businesses"
        bar="Water, mold, and rebuilding — three services"
        image="/images/drying-equipment.jpg"
        imageAlt="Placeholder photo of drying equipment"
      />
      <ServiceGrid fullBleed />
      <section className="bg-white">
        <div className="container-site py-20">
          <h2 className="display text-[36px] text-charcoal">Common questions</h2>
          <dl className="mt-10 divide-y divide-line">
            {faqs.map((item) => (
              <div key={item.q} className="py-5">
                <dt className="font-extrabold uppercase text-navy">{item.q}</dt>
                <dd className="mt-2 text-sm leading-6 text-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <EmergencyBand />
    </>
  );
}
