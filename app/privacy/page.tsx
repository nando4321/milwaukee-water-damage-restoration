import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Milwaukee Water Damage Restoration handles information submitted through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="bg-white">
      <div className="container-site max-w-3xl py-16 prose-restore">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-cyan">Legal</p>
        <h1 className="display mt-3 text-[40px] text-charcoal">Privacy policy</h1>
        <p className="mt-6">
          Milwaukee Water Damage Restoration operates this website at {site.url}.
          The office address is {site.address.line}. We do not publish a phone
          number or email address on this site yet.
        </p>
        <h2 className="mt-10 text-2xl font-semibold text-navy">Information we collect</h2>
        <p className="mt-3">
          The estimate form asks for your name, callback number, email, city, county,
          service type, and a short description of the water problem. Those fields
          exist so we can follow up on a restoration request. This demo site does
          not store submissions in a database; a production deployment should route
          them to the office through a form backend you control.
        </p>
        <h2 className="mt-10 text-2xl font-semibold text-navy">How we use it</h2>
        <p className="mt-3">
          Contact details are used only to respond to the request you sent — to
          schedule an inspection, discuss scope, or coordinate insurance
          documentation. We do not sell form data.
        </p>
        <h2 className="mt-10 text-2xl font-semibold text-navy">Cookies and analytics</h2>
        <p className="mt-3">
          This marketing site does not ship a third-party analytics pixel in the
          current build. If analytics are added later, this page will be updated
          to name the provider.
        </p>
        <h2 className="mt-10 text-2xl font-semibold text-navy">Questions</h2>
        <p className="mt-3">
          Use the contact form on this website. {site.phoneLabel}. Do not send
          sensitive medical or financial information through the estimate form.
        </p>
      </div>
    </article>
  );
}
