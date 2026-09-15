import Image from "next/image";
import { CtaLink, CyanBar, WelcomeBadge } from "@/components/Brand";
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
      <div className="container-site flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="display text-3xl text-white md:text-4xl">{title}</h2>
          <p className="mt-3 text-white/75">{body}</p>
        </div>
        <CtaLink href="/contact">Request an estimate</CtaLink>
      </div>
    </section>
  );
}

export function EmergencyBand() {
  return (
    <section className="relative isolate bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Placeholder photo for 24-hour water emergency response"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
      </div>
      <div className="container-site relative flex min-h-[520px] flex-col items-start justify-end pb-20 pt-16">
        <WelcomeBadge>Welcome to Milwaukee Water Damage Restoration</WelcomeBadge>
        <h2 className="display mt-8 max-w-3xl text-[42px] text-white md:text-[68px]">
          Emergency restoration services
        </h2>
        <CyanBar className="mt-6 text-[16px] md:text-[20px]">Available 24 hours a day</CyanBar>
        <p className="mt-6 max-w-xl text-white/80">
          Water does not follow a schedule. Request help through the form any time.
          Crews are dispatched across Milwaukee County and Waukesha County based on
          location and urgency. A live phone line is coming soon.
        </p>
        <p className="mt-4 text-sm font-semibold text-cyan">{site.phoneLabel}</p>
        <CtaLink href="/contact" className="mt-8">
          Get emergency help now
        </CtaLink>
      </div>
    </section>
  );
}
