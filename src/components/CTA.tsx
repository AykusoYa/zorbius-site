import Link from "next/link";
export default function CTA(){
  return (
    <section className="py-16 brand-gradient">
      <div className="mx-auto max-w-6xl px-6 rounded-2xl border bg-white/70 backdrop-blur shadow-soft">
        <div className="p-8 grid gap-4 md:flex md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold">Bereit, Ihr Projekt zu starten?</h3>
            <p className="opacity-80">Wir beraten Sie unverbindlich und finden die beste Lösung.</p>
          </div>
          <Link href="/kontakt" className="inline-flex items-center justify-center rounded-2xl px-6 py-3 shadow-soft bg-primary text-white hover:opacity-90">
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </section>
  );
}
