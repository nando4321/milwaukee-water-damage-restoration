import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner } from "@/components/CtaBanner";
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
        eyebrow="About"
        title="A local water restoration team for Greater Milwaukee"
        body="We exist for one job: get water out, dry the structure, treat moisture-related mold, and rebuild what cannot be saved. The office is in Brookfield. The work stays in Milwaukee County and Waukesha County."
        image="/images/about-crew.jpg"
        imageAlt="Placeholder photo representing a local restoration crew"
      />
      <section className="bg-white">
        <div className="container-site grid items-center gap-12 py-20 lg:grid-cols-2">
          <div>
            <h2 className="section-title">Built for water jobs, not a national script</h2>
            <p className="mt-4 leading-7 text-muted">
              Milwaukee Water Damage Restoration is a local company focused on
              documented water work. We do not advertise outside the two counties we
              can actually reach. Owners get
              a clear scope, photos, and a crew that stays on the same job from
              extraction through rebuild.
            </p>
            <p className="mt-4 leading-7 text-muted">
              The Brookfield office is an operations base, not the marketing lead.
              Homeowners in Milwaukee, Wauwatosa, West Allis, Waukesha, New Berlin,
              and the rest of the two-county area are the reason the company exists.
            </p>
            <blockquote className="mt-6 border-l-4 border-cyan pl-4 text-lg font-medium text-navy">
              Built on field work, clear processes, and a reliable response when water is already in the building.
            </blockquote>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/office.jpg"
              alt="Placeholder photo for the Brookfield office"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>
      <section className="bg-paper">
        <div className="container-wide py-20">
          <p className="eyebrow">Core values</p>
          <h2 className="section-title mt-3">How we run a job</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <article key={value.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-navy">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container-site py-16">
          <h2 className="section-title">Office</h2>
          <p className="mt-4 text-muted">
            {site.address.line}
          </p>
          <p className="mt-2 text-muted">{site.phoneLabel}</p>
          <p className="mt-2 text-sm text-muted">
            We do not publish an email address yet. Use the estimate form on the
            contact page.
          </p>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
