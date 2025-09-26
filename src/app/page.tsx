import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import Band from "@/components/Band";
import PartnerStrip from "@/components/PartnerStrip";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <Band
        title="Elektro – sicher & smart"
        text="Zählerschränke, Verteiler, Wallboxen, Smart-Home, Fehlersuche – alles aus einer Hand."
        img="/images/bad2.png"
      />
      <Band
        title="Heizung – effizient & modern"
        text="Wärmepumpen, Hybridlösungen, Heizkörper und Fußbodenheizung. Hydraulischer Abgleich & Wartung."
        img="/images/bad1.png"
        flip
      />
      <Band
        title="Sanitär – Bad & Installation"
        text="Badsanierungen (auch barrierefrei), Armaturen & Keramik, Rohrinstallation und Abwassertechnik."
        img="/images/bad2.png"
      />
      <PartnerStrip />
      <CTA />
    </>
  );
}
