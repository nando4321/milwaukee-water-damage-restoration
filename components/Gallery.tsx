import Image from "next/image";
import { WelcomeBadge } from "@/components/Brand";
import { galleryItems } from "@/lib/site";

const spans = [
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[16/10]",
  "aspect-[3/2]",
];

export function Gallery() {
  return (
    <section className="bg-white">
      <div className="container-wide py-20 text-center">
        <WelcomeBadge inverted>Welcome to Milwaukee Water Damage Restoration</WelcomeBadge>
        <h2 className="display mx-auto mt-6 max-w-4xl text-[40px] text-charcoal md:text-[64px]">
          Project gallery
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          Placeholder frames from Milwaukee-area water jobs. Real project photos will
          replace these files — filenames stay the same.
        </p>
      </div>
      <div className="columns-2 gap-3 px-3 md:columns-3 lg:columns-4 lg:px-4">
        {galleryItems.map((item, index) => (
          <figure key={item.src} className="mb-3 break-inside-avoid">
            <div className={`relative overflow-hidden ${spans[index % spans.length]}`}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
