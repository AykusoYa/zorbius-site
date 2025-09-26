import Image from "next/image";

const cards = [
  { id:"sanitaer", title:"Sanitär", img:"/images/bad1.png", pos:"center" },
  { id:"heizung",  title:"Heizung", img:"/images/bad2.png", pos:"center" },
  { id:"elektro",  title:"Elektro", img:"/images/bad2.png", pos:"right"  },
];

export default function ServiceGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-bold mb-8">Unsere Leistungen</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map(c => (
          <a key={c.id} href={`/leistungen#${c.id}`} className="rounded-2xl border overflow-hidden shadow-soft hover:shadow-lg transition">
            <div className="relative h-44">
              <Image src={c.img} alt={c.title} fill className={`object-cover`} />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 opacity-80">Planung, Installation, Wartung – zuverlässig aus einer Hand.</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
