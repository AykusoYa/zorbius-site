export default function Datenschutz() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Verantwortlicher</h2>
      <p>
        Zorbius Solution<br />
        Walramstrasse 17, 65183 Wiesbaden<br />
        Inhaber: Hüseyin Sarikaya<br />
        Telefon: <a href="tel:+491749149653" className="underline">+49 174 9149653</a><br />
        E-Mail: <a href="mailto:info@zorbius.de" className="underline">info@zorbius.de</a>
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. Welche Daten wir verarbeiten</h2>
      <ul className="list-disc ml-6">
        <li>Daten, die Sie im Kontaktformular eingeben (Name, E-Mail, Nachricht)</li>
        <li>Daten, die beim Besuch der Website automatisch anfallen (IP-Adresse, Browser, Zeitpunkt)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. Zwecke der Verarbeitung</h2>
      <p>Wir verarbeiten Ihre Daten ausschließlich zur Bearbeitung Ihrer Anfrage, zur Kommunikation und zur sicheren Bereitstellung dieser Website.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Hosting</h2>
      <p>
        Diese Website wird von Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet.
        Beim Aufruf werden technische Daten (z. B. IP-Adresse) verarbeitet. Vercel setzt Standardvertragsklauseln ein, um ein angemessenes Datenschutzniveau sicherzustellen.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Speicherdauer</h2>
      <p>Daten werden nur so lange gespeichert, wie es für die Bearbeitung Ihrer Anfrage oder zur Erfüllung gesetzlicher Pflichten erforderlich ist.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">6. Ihre Rechte</h2>
      <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch sowie Datenübertragbarkeit. Außerdem haben Sie das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">7. Stand</h2>
      <p>Diese Datenschutzerklärung ist aktuell gültig (Stand: {new Date().toLocaleDateString("de-DE")}).</p>
    </section>
  );
}
