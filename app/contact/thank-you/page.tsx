import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Estimate request received",
  description: "Thank you for contacting Milwaukee Water Damage Restoration.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/contact/thank-you" },
};

export default function ThankYouPage() {
  return (
    <section className="bg-paper">
      <div className="container-site max-w-2xl py-24 text-center">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-cyan">
          Demo confirmation
        </p>
        <h1 className="display mt-4 text-[40px] text-charcoal">
          We received your estimate request
        </h1>
        <p className="mt-5 leading-8 text-muted">
          This is a working thank-you page for the marketing site. In production the
          form will notify the office. For now, treat this as confirmation that the
          request flow completed. {site.phoneLabel}.
        </p>
        <p className="mt-4 text-sm text-muted">Office: {site.address.line}</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/services" variant="black">
            Review services
          </Button>
        </div>
      </div>
    </section>
  );
}
