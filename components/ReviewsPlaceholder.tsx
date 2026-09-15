import { WelcomeBadge } from "@/components/Brand";

const placeholders = [
  {
    quote:
      "Customer reviews will appear here once we have published, permissioned feedback from completed jobs.",
    name: "Homeowner review",
  },
  {
    quote:
      "These cards are labeled placeholders. We are not showing star ratings or invented testimonials.",
    name: "Commercial review",
  },
  {
    quote:
      "If you recently worked with our crew and want to share a review, mention it when we follow up on your job.",
    name: "Property manager review",
  },
];

export function ReviewsPlaceholder() {
  return (
    <section className="bg-white py-20">
      <div className="container-wide text-center">
        <WelcomeBadge inverted>Welcome to Milwaukee Water Damage Restoration</WelcomeBadge>
        <h2 className="display mx-auto mt-6 max-w-4xl text-[40px] text-charcoal md:text-[64px]">
          Hear from our clients
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          Reviews coming soon. Homeowners and business owners often mention clear
          updates, on-time crews, and detailed documentation. We will only publish
          real reviews — not Google ratings we do not have yet.
        </p>
        <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
          {placeholders.map((item) => (
            <figure key={item.name} className="border border-line bg-white p-7 shadow-sm">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-cyan">
                Reviews coming soon
              </p>
              <blockquote className="mt-4 text-[15px] leading-7 text-muted">{item.quote}</blockquote>
              <figcaption className="mt-6 text-sm font-extrabold uppercase text-charcoal">
                {item.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
