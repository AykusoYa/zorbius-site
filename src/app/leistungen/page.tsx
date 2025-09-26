export default function LeistungenPage(){
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold mb-10">Leistungen</h1>

      {[
        { id:"sanitaer", t:"Sanitär", bullets:[
          "Badsanierung (barrierefrei möglich)",
          "Rohrinstallation & Abwassertechnik",
          "Armaturen & Keramik",
          "Reparatur & Notdienst"
        ]},
        { id:"heizung", t:"Heizung", bullets:[
          "Wärmepumpe / Hybrid",
          "Heizkörper & Fußbodenheizung",
          "Hydraulischer Abgleich",
          "Wartung & Inbetriebnahme"
        ]},
        { id:"elektro", t:"Elektro", bullets:[
          "Neu- & Altbauinstallation",
          "Wallbox & PV-Vorbereitung",
          "Zähler- & Verteilersysteme",
          "Smart-Home & Fehlersuche"
        ]},
      ].map(b => (
        <div key={b.id} id={b.id} className="mb-12">
          <h2 className="text-2xl font-semibold">{b.t}</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            {b.bullets.map(x => <li key={x}>{x}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
