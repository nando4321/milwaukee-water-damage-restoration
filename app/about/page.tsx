import type { Metadata } from "next";
import Image from "next/image";
import { CtaLink, CyanBar, WelcomeBadge } from "@/components/Brand";
import { EmergencyBand } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { coreValues, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Milwaukee Water Damage Restoration",
  description:
    "A Greater Milwaukee water restoration team based in Brookfield, serving Milwaukee County and Waukesha County.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the company"
        title="A local water restoration team for Greater Milwaukee"
        bar="Built on field work and clear job scopes"
        image="/images/moisture-inspection.jpg"
        imageAlt="Moisture inspection on a water damage job"
      />
      <section className="bg-white">
        <div className="container-wide grid items-center gap-12 py-20 lg:grid-cols-2">
          <div>
            <WelcomeBadge inverted>Welcome to Milwaukee Water Damage Restoration</WelcomeBadge>
            <h2 className="display mt-6 text-[36px] text-charcoal md:text-[52px]">
              Built on field experience
            </h2>
            <CyanBar className="mt-6">Local crews handling real restoration work</CyanBar>
            <p className="mt-6 leading-7 text-muted">
              Milwaukee Water Damage Restoration is a local company focused on
              documented water work. We do not advertise outside the two counties we
              can actually reach. Owners get a clear scope, photos, and a crew that
              stays on the same job from extraction through rebuild.
            </p>
            <p className="mt-4 leading-7 text-muted">
              The Brookfield office is an operations base, not the marketing lead.
              Homeowners in Milwaukee, Wauwatosa, West Allis, Waukesha, New Berlin,
              and the rest of the two-county area are the reason the company exists.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border-[10px] border-cyan">
            <Image
              src="/images/waukesha-street.jpg"
              alt="Waukesha County street near the Brookfield office"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>
      <section className="bg-paper">
        <div className="container-wide py-20">
          <h2 className="display text-[36px] text-charcoal md:text-[48px]">Core values</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <article key={value.title} className="bg-white p-6">
                <h3 className="text-xl font-extrabold uppercase text-navy">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container-site py-16">
          <h2 className="display text-[32px] text-charcoal">Office</h2>
          <p className="mt-4 text-muted">{site.address.line}</p>
          <p className="mt-2 text-muted">{site.phoneLabel}</p>
          <CtaLink href="/contact" className="mt-6">
            Request an estimate
          </CtaLink>
        </div>
      </section>
      <EmergencyBand />
    </>
  );
}
