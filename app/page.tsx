import Image from "next/image";
import { Button } from "@/components/Button";
import { CityGrid } from "@/components/CityGrid";
import { CtaBanner, EmergencyBand } from "@/components/CtaBanner";
import { Gallery } from "@/components/Gallery";
import { ReviewsPlaceholder } from "@/components/ReviewsPlaceholder";
import { ServiceGrid } from "@/components/ServiceCard";
import { TrustChips } from "@/components/TrustChips";
import { coreValues, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[78vh] overflow-hidden bg-navy-deep">
        <Image
          src="/images/hero.jpg"
          alt="Placeholder hero image for a water-damaged interior in Greater Milwaukee"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/72 to-navy/30" />
        <div className="container-site relative py-24 md:py-28">
          <p className="eyebrow">Serving Milwaukee and Greater Milwaukee</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Milwaukee’s #1 water damage restoration team
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            When water hits a home or business, the next steps matter. Milwaukee Water
            Damage Restoration handles extraction, drying, moisture tracking, mold tied
            to water, and rebuilding across Milwaukee County and Waukesha County. The
            work is hands-on, documented, and focused on making spaces usable again.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Request emergency help</Button>
            <Button href="/services" variant="secondary">
              See our services
            </Button>
          </div>
          <p className="mt-5 text-sm text-cyan">{site.phoneLabel} · Use the estimate form anytime</p>
        </div>
      </section>

      <section className="relative z-10 bg-white">
        <div className="container-site -mt-10 pb-10">
          <TrustChips />
        </div>
      </section>

      <section className="bg-white">
        <div className="container-site grid items-center gap-12 py-16 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/water-extraction.jpg"
              alt="Placeholder photo of water extraction equipment on a job"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="eyebrow">Water damage restoration</p>
            <h2 className="section-title mt-3">Water spreads through floors, walls, and framing</h2>
            <p className="mt-4 leading-7 text-muted">
              Water damage spreads quickly through flooring, drywall, and framing. We
              respond with water extraction, drying equipment, moisture tracking, and
              material removal when needed. Each project starts with an inspection and
              documentation so the scope of work is clear from day one.
            </p>
            <blockquote className="mt-6 border-l-4 border-cyan pl-4 text-lg font-medium text-navy">
              Water problems do not fix themselves. Acting early limits the spread.
            </blockquote>
            <Button href="/services/water-damage" variant="ghost" className="mt-8">
              How water restoration works
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-wide py-20">
          <p className="eyebrow">Our services</p>
          <h2 className="section-title mt-3">Water, rebuild, and mold — no extras</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Three services, all tied to water. If a leak, flood, or failed appliance
            has already started mold or torn out finishes, we stay on that scope.
          </p>
          <div className="mt-10">
            <ServiceGrid />
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="container-wide grid items-center gap-12 py-20 lg:grid-cols-2">
          <div>
            <p className="eyebrow">About the team</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Local crews handling real restoration work
            </h2>
            <p className="mt-5 leading-7 text-white/75">
              Milwaukee Water Damage Restoration is built for Greater Milwaukee water
              jobs — not a national call center. From a Brookfield office we dispatch
              to Milwaukee County and Waukesha County only. The focus stays on clear
              scopes, clean documentation, and steady communication through extraction,
              drying, and rebuild.
            </p>
            <Button href="/about" className="mt-8">
              Meet the company
            </Button>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan">
              Core values
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {coreValues.map((value) => (
                <li key={value.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">{value.title}</p>
                  <p className="mt-1 text-sm text-white/65">{value.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ReviewsPlaceholder />
      <Gallery />
      <CtaBanner />

      <section className="bg-white">
        <div className="container-wide py-20">
          <p className="eyebrow">Serving Milwaukee County and Waukesha County</p>
          <h2 className="section-title mt-3">Local water restoration across Greater Milwaukee</h2>
          <p className="mt-4 max-w-2xl text-muted">
            We support residential and commercial properties in Milwaukee County and
            Waukesha County. The office is in Brookfield; the homepage lead and the
            work stay centered on Milwaukee and the western suburbs — not a statewide
            or out-of-state footprint.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src="/images/milwaukee-skyline.jpg"
                alt="Placeholder image representing Milwaukee"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src="/images/waukesha-street.jpg"
                alt="Placeholder image representing Waukesha County"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
          <div className="mt-10">
            <CityGrid />
          </div>
        </div>
      </section>

      <EmergencyBand />
    </>
  );
}
