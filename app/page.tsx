import Image from "next/image";
import { CtaLink, CyanBar, WelcomeBadge } from "@/components/Brand";
import { AreaMap, CityGrid } from "@/components/CityGrid";
import { EmergencyBand } from "@/components/CtaBanner";
import { Gallery } from "@/components/Gallery";
import { ReviewsPlaceholder } from "@/components/ReviewsPlaceholder";
import { ServiceGrid } from "@/components/ServiceCard";
import { coreValues } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[86vh] overflow-hidden bg-black">
        <Image
          src="/images/hero.jpg"
          alt="Placeholder hero image for a water-damaged interior in Greater Milwaukee"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="container-site relative flex min-h-[86vh] flex-col justify-end pb-20 pt-24">
          <WelcomeBadge>Welcome to Milwaukee Water Damage Restoration</WelcomeBadge>
          <h1 className="display mt-6 max-w-5xl text-[46px] text-white md:text-[78px]">
            Milwaukee’s #1 water damage restoration team
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            When water hits a home or business, the next steps matter. We handle
            extraction, drying, moisture tracking, mold tied to water, and rebuilding
            across Milwaukee County and Waukesha County.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href="/contact">Request emergency help</CtaLink>
            <CtaLink href="/services" variant="white">
              See our services
            </CtaLink>
          </div>
        </div>
      </section>

      <ServiceGrid fullBleed />

      <section className="bg-white">
        <div className="container-wide grid items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <WelcomeBadge inverted>Welcome to Milwaukee Water Damage Restoration</WelcomeBadge>
            <h2 className="display mt-6 text-[40px] text-charcoal md:text-[62px]">
              Built on field experience
            </h2>
            <CyanBar className="mt-6 text-[16px] md:text-[20px]">
              Local crews handling real restoration work
            </CyanBar>
            <p className="mt-6 max-w-xl leading-7 text-muted">
              Milwaukee Water Damage Restoration is built for Greater Milwaukee water
              jobs. From a Brookfield office we dispatch to Milwaukee County and
              Waukesha County only. The focus stays on clear scopes, clean
              documentation, and steady communication through extraction, drying, and
              rebuild.
            </p>
            <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.12em] text-charcoal">
              Core values
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {coreValues.map((value) => (
                <li key={value.title} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-0.5 text-cyan">▸</span>
                  <span>
                    <strong className="text-charcoal">{value.title}.</strong> {value.body}
                  </span>
                </li>
              ))}
            </ul>
            <CtaLink href="/about" className="mt-8">
              Meet the company
            </CtaLink>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden border-[10px] border-cyan md:aspect-[5/6]">
            <Image
              src="/images/about-crew.jpg"
              alt="Placeholder photo representing a local restoration crew"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </div>
      </section>

      <ReviewsPlaceholder />
      <Gallery />

      <section className="bg-white">
        <div className="container-wide grid items-start gap-12 py-20 lg:grid-cols-2">
          <div>
            <WelcomeBadge inverted>Welcome to Milwaukee Water Damage Restoration</WelcomeBadge>
            <h2 className="display mt-6 text-[40px] text-charcoal md:text-[56px]">
              Serving Milwaukee & Waukesha counties
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-muted">
              We support residential and commercial properties in Milwaukee County and
              Waukesha County. The office is in Brookfield; the work stays centered on
              Greater Milwaukee.
            </p>
            <div className="mt-8">
              <CityGrid />
            </div>
          </div>
          <AreaMap />
        </div>
      </section>

      <EmergencyBand />
    </>
  );
}
