import type { Metadata } from "next";
import Image from "next/image";
import { EmergencyBand } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Water Damage Restoration in Milwaukee",
  description:
    "Emergency water extraction, structural drying, moisture tracking, and material removal for homes and businesses in Milwaukee County and Waukesha County.",
  alternates: { canonical: "/services/water-damage" },
};

const blocks = [
  {
    title: "Emergency water extraction",
    image: "/images/water-extraction.jpg",
    alt: "Placeholder photo for water extraction",
    lead: "Removing water quickly to limit damage",
    points: [
      "Rapid on-site assessment",
      "Water removal with industrial pumps",
      "Targeted drying of floors, walls, and cavities",
      "Documentation for insurance and property records",
    ],
  },
  {
    title: "Structural drying and moisture monitoring",
    image: "/images/drying-equipment.jpg",
    alt: "Placeholder photo for drying equipment",
    lead: "Stopping hidden water from causing problems",
    points: [
      "Continuous moisture monitoring",
      "Drying walls, floors, and ceilings",
      "Limiting conditions that lead to mold",
      "Inspecting framing and subfloors",
    ],
  },
  {
    title: "Material removal when drying is not enough",
    image: "/images/gallery-3.jpg",
    alt: "Placeholder photo for material removal",
    lead: "Taking out what cannot be saved",
    points: [
      "Selective demolition of saturated drywall and flooring",
      "Protecting unaffected rooms",
      "Bagging and hauling wet debris",
      "Clear photos before and after removal",
    ],
  },
  {
    title: "Hand-off to rebuild",
    image: "/images/rebuild.jpg",
    alt: "Placeholder photo for rebuild after drying",
    lead: "Restoring spaces after water is gone",
    points: [
      "Replacing drywall, flooring, or insulation",
      "Repairing framing when needed",
      "Finishing surfaces for occupancy",
      "Coordinating inspections",
    ],
  },
];

export default function WaterDamagePage() {
  return (
    <>
      <PageHero
        eyebrow="Water damage restoration"
        title="Water damage restoration in Greater Milwaukee"
        bar="Fast, hands-on restoration for homes and businesses"
        body="Water spreads fast, and even a small leak can soak floors, walls, and furniture before anyone notices. We respond across Milwaukee County and Waukesha County with extraction, drying equipment, and a written moisture plan."
        image="/images/water-extraction.jpg"
        imageAlt="Placeholder photo of water extraction"
      />
      {blocks.map((block, index) => (
        <section key={block.title} className={index % 2 === 0 ? "bg-white" : "bg-paper"}>
          <div className="container-site grid items-center gap-10 py-16 lg:grid-cols-2">
            <div className={`relative aspect-[4/3] overflow-hidden ${index % 2 ? "lg:order-2" : ""}`}>
              <Image src={block.image} alt={block.alt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div>
              <h2 className="display text-[32px] text-charcoal">{block.title}</h2>
              <p className="mt-2 font-semibold uppercase tracking-wide text-navy">{block.lead}</p>
              <ul className="prose-restore mt-6">
                {block.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
      <EmergencyBand />
    </>
  );
}
