import { Button } from "@/components/Button";
import { site } from "@/lib/site";

export function CtaBanner({
  title = "Need help right now?",
  body = "Water damage moves fast. Getting eyes on the problem early limits what has to be torn out later.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-navy">
      <div className="container-site flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
          <p className="mt-3 text-white/75">{body}</p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <Button href="/contact">Request an estimate</Button>
          <p className="text-sm text-cyan">{site.phoneLabel}</p>
        </div>
      </div>
    </section>
  );
}

export function EmergencyBand() {
  return (
    <section className="bg-navy-deep">
      <div className="container-wide grid gap-10 py-16 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Available 24 hours a day</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Water emergencies do not wait for business hours
          </h2>
          <p className="mt-4 max-w-xl text-white/70">
            A burst pipe, failed sump, or backed-up drain can soak floors and walls overnight.
            Request help through the form any time. A dedicated phone line is coming soon —
            until then, the estimate form is the fastest way to reach the team.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan">
            24-hour request line
          </p>
          <p className="mt-3 text-3xl font-semibold text-white">{site.phoneLabel}</p>
          <p className="mt-3 text-white/65">
            Office: {site.address.line}
          </p>
          <Button href="/contact" className="mt-6">
            Send an emergency request
          </Button>
        </div>
      </div>
    </section>
  );
}
