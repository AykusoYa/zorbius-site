"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/brand/zorbius-logo.jpg" alt="Zorbius" width={42} height={42} />
          <span className="font-semibold">Zorbius</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV.map(n => (
            <Link
              key={n.href}
              href={n.href}
              className={`hover:opacity-80 ${pathname.startsWith(n.href) ? "text-primary font-semibold" : ""}`}
            >
              {n.label}
            </Link>
          ))}
          <a
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-2xl px-6 py-3 shadow-soft bg-primary text-white hover:opacity-90 ml-2"
          >
            Jetzt anfragen
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded border" aria-label="Menü">
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            {NAV.map(n => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2">
                {n.label}
              </Link>
            ))}
            <a
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 shadow-soft bg-primary text-white hover:opacity-90"
            >
              Jetzt anfragen
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
