import Image from "next/image";
export default function PartnerStrip() {
  return (
    <section className="bg-neutral-100 py-8">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm uppercase tracking-widest opacity-60">Partner & Bezugsquellen</p>
        <div className="mt-4 flex flex-wrap items-center gap-10">
          <Image src="/partners/elements.jpg" alt="ELEMENTS" width={150} height={40} />
          <Image src="/partners/gc-gruppe.jpg" alt="GC Gruppe" width={150} height={40} />
        </div>
      </div>
    </section>
  );
}
