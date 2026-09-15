import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner, EmergencyBand } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Mold Remediation After Water Damage in Milwaukee",
  description:
    "Water-related mold inspection, containment, removal, and moisture verification in Milwaukee County and Waukesha County.",
  alternates: { canonical: "/services/mold-remediation" },
};

const blocks = [
  {
    title: "Mold inspection and assessment",
    lead: "Finding the source before removal begins",
    points: [
      "Visual and moisture-based inspection",
      "Locating the underlying water source",
      "Mapping the extent of growth",
      "Documentation for insurance and property records",
    ],
  },
  {
    title: "Containment and air filtration",
    lead: "Stopping spores from spreading",
    points: [
      "Sealing and isolating work areas",
      "HEPA air filtration on site",
      "Controlling airflow to limit spread",
      "Protecting unaffected rooms and contents",
    ],
  },
  {
    title: "Mold removal and remediation",
    lead: "Eliminating mold at the source",
    points: [
      "Removal of mold-infested materials",
      "Treating and sanitizing affected surfaces",
      "Addressing the moisture source",
      "Verifying safe moisture levels before closing up",
    ],
  },
  {
    title: "Cleaning and repairs",
    lead: "Restoring clean, usable spaces",
    points: [
      "Deep cleaning and sanitization",
      "Repairing framing and finishing surfaces",
      "Finishing rooms for occupancy",
      "Coordinating inspections",
    ],
  },
];

export default function MoldPage() {
  return (
    <>
      <PageHero
        eyebrow="Mold remediation"
        title="Careful removal after water damage"
        body="Mold grows fast in damp spaces and often takes hold behind walls or under floors. We find the moisture source, contain the area, and remove what water left behind — in Milwaukee County and Waukesha County only."
        image="/images/mold-remediation.jpg"
        imageAlt="Placeholder photo for mold remediation"
      />
      <section className="bg-white">
        <div className="container-site py-16">
          <p className="max-w-3xl text-lg leading-8 text-muted">
            This service is for water-related mold. If a leak, flood, or condensation
            problem started the growth, we treat the moisture first so remediation is not
            a temporary wipe-down.
          </p>
        </div>
      </section>
      <section className="bg-paper">
        <div className="container-site grid gap-8 py-16 md:grid-cols-2">
          {blocks.map((block) => (
            <article key={block.title} className="rounded-2xl border border-line bg-white p-7">
              <h2 className="text-2xl font-semibold text-navy">{block.title}</h2>
              <p className="mt-2 text-sm font-medium text-navy/70">{block.lead}</p>
              <ul className="prose-restore mt-5">
                {block.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-white">
        <div className="container-site grid items-center gap-10 py-16 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/drying-equipment.jpg"
              alt="Placeholder photo of moisture tracking equipment"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <h2 className="section-title">Moisture first, then removal</h2>
            <p className="mt-4 leading-7 text-muted">
              Mold almost always points back to a water problem. We do not close a
              cavity until readings show the structure can stay dry. That is how we
              keep the job from coming back a month later.
            </p>
          </div>
        </div>
      </section>
      <CtaBanner
        title="Schedule a mold inspection"
        body="Hidden growth behind a wet wall is common. An inspection maps the source before anything is opened."
      />
      <EmergencyBand />
    </>
  );
}
