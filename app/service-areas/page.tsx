import type { Metadata } from "next";
import Image from "next/image";
import { CityGrid } from "@/components/CityGrid";
import { CtaBanner, EmergencyBand } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { ReviewsPlaceholder } from "@/components/ReviewsPlaceholder";

export const metadata: Metadata = {
  title: "Service Areas — Milwaukee County and Waukesha County",
  description:
    "Water damage restoration throughout Milwaukee County and Waukesha County, dispatched from Brookfield.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title="Local crews across Milwaukee County and Waukesha County"
        body="When water is in the building, travel time matters. We respond to homes and businesses in these two counties only, from a Brookfield office, with licensed crews and a documented scope."
        image="/images/milwaukee-skyline.jpg"
        imageAlt="Placeholder image representing Milwaukee"
      />
      <section className="bg-white">
        <div className="container-wide py-20">
          <p className="eyebrow">Two counties, not a statewide map</p>
          <h2 className="section-title mt-3">Areas we serve</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Fast response is based on proximity. If a property is in Milwaukee County
            or Waukesha County, we can typically schedule a same-day assessment. We
            do not list cities outside those counties.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src="/images/milwaukee-skyline.jpg"
                alt="Placeholder photo for Milwaukee County"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src="/images/waukesha-street.jpg"
                alt="Placeholder photo for Waukesha County"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
          <div className="mt-12">
            <CityGrid />
          </div>
        </div>
      </section>
      <section className="bg-paper">
        <div className="container-site py-16">
          <h2 className="section-title">Local restoration you can verify</h2>
          <ul className="prose-restore mt-6 max-w-xl">
            <li>Local response teams</li>
            <li>Licensed restoration crews</li>
            <li>Residential and commercial</li>
            <li>Clear project documentation</li>
          </ul>
        </div>
      </section>
      <ReviewsPlaceholder />
      <CtaBanner />
      <EmergencyBand />
    </>
  );
}
