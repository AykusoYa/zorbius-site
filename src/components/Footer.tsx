export default function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-3 md:flex md:items-center md:justify-between text-sm">
        <p>© {new Date().getFullYear()} Zorbius – Elektro · Heizung · Sanitär</p>
        <p className="opacity-80">
          {/* TODO: echte Daten eintragen */}
          E-Mail: <a className="underline" href="mailto:info@zorbius.de">info@zorbius.de</a> ·
          Tel.: <a className="underline" href="tel:+491749149653">+49 174 9149653</a>
        </p>
      </div>
    </footer>
  );
}
