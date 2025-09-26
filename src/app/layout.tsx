import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Zorbius – Elektro · Heizung · Sanitär",
  description: "Haustechnik aus einer Hand – Elektro, Heizung, Sanitär. 24/7 Notdienst.",
  metadataBase: new URL("https://zorbius.de"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="text-ink bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
