const placeholders = [
  {
    quote:
      "Customer reviews will appear here once we have published, permissioned feedback from completed jobs.",
    name: "Homeowner review",
  },
  {
    quote:
      "We are not displaying star ratings or invented testimonials. This card is a labeled placeholder.",
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
    <section className="bg-paper">
      <div className="container-site py-20">
        <p className="eyebrow">Hear from our clients</p>
        <h2 className="section-title mt-3 max-w-2xl">Reviews coming soon</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Homeowners and business owners often mention clear updates, on-time crews, and
          detailed documentation. We will only publish real reviews — these cards are
          placeholders, not Google ratings or fabricated quotes.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {placeholders.map((item) => (
            <figure key={item.name} className="rounded-2xl border border-dashed border-navy/20 bg-white p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan">
                Placeholder
              </p>
              <blockquote className="mt-3 text-[15px] leading-7 text-ink">{item.quote}</blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-navy">{item.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
