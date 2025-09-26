export default function KontaktPage(){
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold">Kontakt</h1>
      <p className="mt-2 opacity-80">
        {/* TODO: echte Daten */}
        E-Mail: <a className="underline" href="mailto:info@zorbius.de">info@zorbius.de</a><br/>
        Tel.: <a className="underline" href="tel:+491749149653">+49 174 9149653</a>
      </p>

      {/* Optional: Formspree – ACTION_URL ersetzen */}
      <form className="mt-8 grid gap-4 max-w-xl" action="https://formspree.io/f/ACTION_URL" method="POST">
        <input className="border rounded-2xl p-3" name="name" placeholder="Ihr Name" required />
        <input className="border rounded-2xl p-3" type="email" name="email" placeholder="Ihre E-Mail" required />
        <textarea className="border rounded-2xl p-3" name="message" rows={6} placeholder="Ihre Nachricht" required />
        <label className="text-sm opacity-70">
          <input type="checkbox" required className="mr-2" />
          Ich stimme der Speicherung meiner Daten zur Bearbeitung der Anfrage zu.
        </label>
        <button className="inline-flex items-center justify-center rounded-2xl px-6 py-3 shadow-soft bg-primary text-white hover:opacity-90">
          Absenden
        </button>
      </form>
    </section>
  );
}
