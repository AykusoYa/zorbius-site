import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Image src="/images/bad1.jpg" alt="Modernes Bad" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
        <div className="mx-auto max-w-3xl border rounded-2xl p-8 md:p-12 bg-white/5 backdrop-blur">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Professionelle Lösungen im Sanitär-, Heizungs- & Elektrobereich
          </h1>
          <p className="mt-4 text-white/85 text-center">
            Maßgeschneiderte Haustechnik. Planung, Installation & Sanierung. 24/7 Notdienst.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 shadow-soft bg-primary text-white hover:opacity-90"
            >
              Jetzt kontaktieren
            </Link>
            <Link
              href="/leistungen"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 shadow-soft border hover:bg-neutral-50 bg-white/80"
            >
              Leistungen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
