import Image from "next/image";
import { CtaLink, CyanBar, WelcomeBadge } from "@/components/Brand";

export function PageHero({
  eyebrow,
  title,
  bar,
  body,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  bar?: string;
  body?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate min-h-[58vh] overflow-hidden bg-navy">
      <Image src={image} alt={imageAlt} fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
      <div className="container-site relative flex min-h-[58vh] flex-col justify-end py-16 md:py-20">
        <WelcomeBadge>{eyebrow}</WelcomeBadge>
        <h1 className="display mt-6 max-w-4xl text-[42px] text-white md:text-[64px]">{title}</h1>
        {bar ? <CyanBar className="mt-6 max-w-3xl text-[15px] md:text-[18px]">{bar}</CyanBar> : null}
        {body ? <p className="mt-6 max-w-2xl text-base leading-7 text-white/80">{body}</p> : null}
        <div className="mt-8">
          <CtaLink href="/contact">Get a free quote</CtaLink>
        </div>
      </div>
    </section>
  );
}
