import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="bg-paper">
      <div className="container-site py-24 text-center">
        <h1 className="display text-[40px] text-charcoal">Page not found</h1>
        <p className="mt-4 text-muted">
          That URL is not part of the Milwaukee Water Damage Restoration site.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/">Return home</Button>
        </div>
      </div>
    </section>
  );
}
