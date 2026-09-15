import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner, EmergencyBand } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Rebuilding After Water Damage in Milwaukee",
  description:
    "Reconstruction after water mitigation — drywall, flooring, framing, and finish work in Milwaukee County and Waukesha County.",
  alternates: { canonical: "/services/rebuilding" },
};

const blocks = [
  {
    title: "Structural repairs",
    lead: "Rebuilding what water weakened",
    points: [
      "Repair or replace framing and load-bearing elements when water compromised them",
      "Reinforce damaged supports",
      "Confirm the structure is safe to close",
      "Coordinate inspections and approvals",
    ],
  },
  {
    title: "Interior restoration",
    lead: "Making rooms functional again",
    points: [
      "Replacing drywall, flooring, and insulation",
      "Repairing or refinishing ceilings",
      "Restoring trim, doors, and fixtures",
      "Cleaning and prepping surfaces for occupancy",
    ],
  },
  {
    title: "Water-recovery rebuilds",
    lead: "Finishing the job after mitigation",
    points: [
      "Removing remaining damaged materials",
      "Repairing walls, floors, and substructures",
      "Sealing areas that were opened for drying",
      "Restoring function room by room",
    ],
  },
];

export default function RebuildPage() {
  return (
    <>
      <PageHero
        eyebrow="Rebuilding"
        title="Restoring homes and businesses after water damage"
        body="When a property has been extracted and dried, rebuilding is the last step to make spaces safe and usable. We repair structure, replace finishes, and close the rooms water opened."
        image="/images/rebuild.jpg"
        imageAlt="Placeholder photo of reconstruction after water damage"
      />
      <section className="bg-white">
        <div className="container-site grid items-center gap-10 py-16 lg:grid-cols-2">
          <div>
            <h2 className="section-title">A clear rebuild after drying</h2>
            <p className="mt-4 leading-7 text-muted">
              Every rebuild is hands-on, documented, and limited to the water scope.
              From structural repairs to interior restoration, the focus stays on
              safety, function, and a finish that matches the rest of the property.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/gallery-4.jpg"
              alt="Placeholder photo of a rebuild in progress"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>
      <section className="bg-paper">
        <div className="container-site grid gap-8 py-16 md:grid-cols-3">
          {blocks.map((block) => (
            <article key={block.title} className="rounded-2xl bg-white p-7 shadow-sm">
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
      <CtaBanner
        title="Schedule a rebuild inspection"
        body="Once mitigation is done, we can walk the rooms, list what has to come back, and sequence the rebuild."
      />
      <EmergencyBand />
    </>
  );
}
