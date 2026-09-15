import Image from "next/image";
import { galleryItems } from "@/lib/site";

export function Gallery() {
  return (
    <section className="bg-white">
      <div className="container-wide py-20">
        <p className="eyebrow">Project gallery</p>
        <h2 className="section-title mt-3">Photos from Milwaukee-area water jobs</h2>
        <p className="mt-4 max-w-2xl text-muted">
          These frames are labeled placeholders. A researcher will replace them with real
          project photos. Captions stay generic until then.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <figure key={item.src} className="overflow-hidden rounded-2xl bg-paper">
              <div className="relative aspect-[3/2]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-muted">
                Gallery photo {index + 1} · placeholder
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
