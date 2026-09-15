import Image from "next/image";
import { Button } from "@/components/Button";

export function PageHero({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/94 via-navy-deep/75 to-navy/40" />
      <div className="container-site relative py-20 md:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">{body}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact">Get a free quote</Button>
          <Button href="/services" variant="secondary">
            View services
          </Button>
        </div>
      </div>
    </section>
  );
}
