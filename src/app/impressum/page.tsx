export default function Impressum() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">Impressum</h1>

      <div className="space-y-4">
        <p>
          <strong>Zorbius Solution</strong><br />
          Walramstrasse 17<br />
          65183 Wiesbaden<br />
          Deutschland
        </p>

        <p>
          Telefon: <a className="underline" href="tel:+491749149653">+49 174 9149653</a><br />
          E-Mail: <a className="underline" href="mailto:info@zorbius.de">info@zorbius.de</a>
        </p>

        <p>
          Geschäftsführung / Inhaber: <strong>Hüseyin Sarikaya</strong><br />
          Rechtsform: Einzelunternehmen
        </p>

        {/* Hinweis: In Deutschland wird üblicherweise die USt-IdNr. (falls vorhanden) veröffentlicht,
           nicht die allgemeine Steuernummer. Wenn ihr aber explizit die Steuernummer nennen wollt,
           lasst die folgende Zeile stehen. Ansonsten lieber durch eine USt-IdNr. ersetzen. */}
        <p>Steuernummer: 0086360896</p>

        <h2 className="text-xl font-semibold mt-8">Haftungsausschluss</h2>
        <p className="opacity-80">
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
          externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
        </p>

        <h2 className="text-xl font-semibold mt-8">Urheberrecht</h2>
        <p className="opacity-80">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
          dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.
        </p>

        <h2 className="text-xl font-semibold mt-8">Online-Streitbeilegung</h2>
        <p className="opacity-80">
          Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
          <a className="underline ml-1" href="https://ec.europa.eu/consumers/odr" target="_blank">ec.europa.eu/consumers/odr</a>.
          Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    </section>
  );
}
