import Image from "next/image";

export default function Band({
  title, text, img, flip = false
}: { title:string; text:string; img:"/images/bad1.png"|"/images/bad2.png"; flip?:boolean }) {
  return (
    <section className="bg-neutral-50">
      <div className={`mx-auto max-w-6xl px-6 py-14 grid gap-8 items-center ${flip ? "md:grid-cols-[1.1fr_1fr]" : "md:grid-cols-[1fr_1.1fr]"}`}>
        {!flip && (
          <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden shadow-soft">
            <Image src={img} alt={title} fill className="object-cover" />
          </div>
        )}
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-3 opacity-80">{text}</p>
        </div>
        {flip && (
          <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden shadow-soft">
            <Image src={img} alt={title} fill className="object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
