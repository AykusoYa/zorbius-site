import Image from "next/image";

const items = [
  {
    id: "elektro",
    title: "Elektro",
    desc: "Neuinstallation, Altbausanierung, Wallboxen, Zähler/Verteiler, Smart Home.",
    img: "/images/elektro.jpg",      // ⬅️ eigenes Bild
  },
  {
    id: "heizung",
    title: "Heizung",
    desc: "Wärmepumpe, Gas/Hybrid, Heizkörper & Fußbodenheizung, hydraulischer Abgleich.",
    img: "/images/heizung.jpg",      // ⬅️ eigenes Bild
  },
  {
    id: "sanitaer",
    title: "Sanitär",
    desc: "Badsanierung, barrierefreie Lösungen, Installation & Reparatur, Abwasser.",
    img: "/images/sanitaer.jpg",     // ⬅️ eigenes Bild
  },
];

export default function FeatureGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-bold mb-8">Unsere Leistungen</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <a key={it.id} href={`/leistungen#${it.id}`} className="rounded-xxl border overflow-hidden shadow-soft hover:shadow-lg transition">
            <div className="relative h-40">
              <Image src={it.img} alt={it.title} fill className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 opacity-80">{it.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
