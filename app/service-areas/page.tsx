import type { Metadata } from "next";
import { WelcomeBadge } from "@/components/Brand";
import { AreaMap, CityGrid } from "@/components/CityGrid";
import { EmergencyBand } from "@/components/CtaBanner";
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
        title="Serving Milwaukee & Waukesha counties"
        bar="Local crews based in Brookfield, Wisconsin"
        body="When water is in the building, travel time matters. We respond to homes and businesses in these two counties only."
        image="/images/milwaukee-skyline.jpg"
        imageAlt="Placeholder image representing Milwaukee"
      />
      <section className="bg-white">
        <div className="container-wide grid items-start gap-12 py-20 lg:grid-cols-2">
          <div>
            <WelcomeBadge inverted>Welcome to Milwaukee Water Damage Restoration</WelcomeBadge>
            <h2 className="display mt-6 text-[36px] text-charcoal md:text-[48px]">
              Areas we serve
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              Fast response is based on proximity. If a property is in Milwaukee County
              or Waukesha County, we can typically schedule a same-day assessment.
            </p>
            <div className="mt-8">
              <CityGrid />
            </div>
          </div>
          <AreaMap />
        </div>
      </section>
      <ReviewsPlaceholder />
      <EmergencyBand />
    </>
  );
}
