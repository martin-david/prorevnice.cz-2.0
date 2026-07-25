import { createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle2,
  AlertCircle,
  Building2,
  Home,
  Navigation,
  GraduationCap,
  Droplet,
  Zap,
  Coins,
  Music,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/hodnoceni")({
  head: () => ({
    meta: [
      { title: "Hodnocení 2022–2026 — Pro Řevnice" },
      {
        name: "description",
        content:
          "Poctivé ohlédnutí za volebním obdobím 2022–2026 v Řevnicích. Detailní vyhodnocení plnění volebního programu v jednotlivých oblastech.",
      },
      { property: "og:title", content: "Hodnocení 2022–2026 — Pro Řevnice" },
      {
        property: "og:description",
        content: "Detailní vyhodnocení plnění volebního programu 2022–2026.",
      },
      { property: "og:url", content: absoluteUrl("/hodnoceni") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/hodnoceni") }],
  }),
  component: HodnoceniPage,
});

type Section = {
  id: string;
  icon: LucideIcon;
  title: string;
  promised: string[];
  accomplished: string[];
  status: "fulfilled" | "partial" | "beyond";
  statusLabel: string;
  summary: string;
};

const sections: Section[] = [
  {
    id: "territorial",
    icon: Building2,
    title: "Územní plán a regulace",
    promised: [
      "Okamžité zahájení přípravy územních studií a regulačních plánů",
      "Regulační plány pro lokality: Za Vodou, U Zámečku, Pod Lesem, Za nádražím, Pod Vrážkou",
    ],
    accomplished: [
      "Územní plán schválen v září 2022 a stal se závazným rámcem",
      "Komise pro územní rozvoj byla aktivní, probíhala příprava podkladů",
      "Nový Krajinný plán města – nástroj nad rámec programu",
      "Územní studie Za Vodou – město prodloužilo povinnost vypracování do změny č.1 ÚP",
      "Územní studie U Zámečku – město se vypořádalo se zástavbou, bude předcházet debata",
      "Územní studie Pod Lesem – je zpracovávána",
      "Územní studie Za Nádražím – probíhá veřejná debata s vlastníkem",
      "Regulační plán Na Vrážce – zadání připraveno a projednáváno",
    ],
    status: "partial",
    statusLabel: "ČÁSTEČNĚ",
    summary:
      "Územní plán byl schválen, příprava regulačních nástrojů probíhá, ale většina studií není dosud schválena. Město zároveň vytvořilo nové nástroje, které program ani neobsahoval.",
  },
  {
    id: "character",
    icon: Home,
    title: "Charakter města a bytová výstavba",
    promised: [
      "Bránit charakter zahradního města",
      "Nepodporovat bytové domy a developerské projekty",
    ],
    accomplished: [
      "Územní plán 2022 výrazně omezil bytové domy – povoluje je pouze v centru",
      "Projekt Mařákova – město odmítlo postup investora, pozastavilo jednání",
      "Eurovia – město aktivně vstoupilo do debaty, odmítá nepřiměřenou intenzitu",
      "Plánovací smlouvy – výrazné zvýšení příspěvků investora na veřejnou infrastrukturu",
    ],
    status: "fulfilled",
    statusLabel: "PLNĚNO",
    summary:
      "Město postupovalo přesně v duchu programu – striktní regulace, aktivní obrana před nevhodnými projekty.",
  },
  {
    id: "transport",
    icon: Navigation,
    title: "Komunikace a dopravní infrastruktura",
    promised: [
      "Rekonstrukce ulice Pod Vrážkou",
      "Příprava projektů pro další nezpevněné ulice",
      "Koordinace s krajem při rekonstrukci hlavní silnice II/115",
      "Vybudování cyklostezky Na Stránce – Komenského",
    ],
    accomplished: [
      "Pod Vrážkou – kompletně zrekonstruováno (2023–2024)",
      "Vrchlického, Sochorova, J. Veselého, Pod Selcem, Příkrá – rekonstrukce proběhly či probíhají",
      "Parkoviště a chodník u COOPu – zrekonstruován",
      "Krajská silnice II/115 – projekt připraven, vysoutěžen dodavatel, realizace 2027–2028",
      "Cyklostezka Na Stránce – Komenského – příprava probíhá, součást velké rekonstrukce trati",
    ],
    status: "beyond",
    statusLabel: "PLNĚNO / NAD RÁMEC",
    summary: "Rozsah rekonstrukcí výrazně překročil původní program.",
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Školství",
    promised: [
      "Nový pavilon školy bez navyšování kapacity",
      "Architektonická soutěž a participace",
      "Nepřijímat žáky mimo spádové obce",
    ],
    accomplished: [
      "Projekt nového pavilonu – proběhla architektonická soutěž a kompletní dokumentace",
      "Žádosti o dotace podány a projednaны",
      "Participace – opakovaná setkání se zaměstnanci školy",
      "Kapacita školy – město zavedlo opatření proti školní turistice",
      "Rekonstrukce objektu v areálu ZŠ – zateplení, instalace čerpadla a větrací jednotky",
      "Dočasné kontejnery – řešení nedostatku míst pro žáky druhého stupně",
    ],
    status: "fulfilled",
    statusLabel: "PLNĚNO",
    summary: "Pavilon je připraven k realizaci, škola byla zapojena, kapacita je zajištěna.",
  },
  {
    id: "water",
    icon: Droplet,
    title: "Vodovody, kanalizace a odpady",
    promised: [
      "Kontrola efektivity DBD a Pobero",
      "Zlepšování kvality služeb",
      "Změna systému odpadů kvůli rostoucím poplatkům",
    ],
    accomplished: [
      "Door-to-door systém – zaveden 1. 4. 2024, úspěšný, 30% pokles směsného odpadu",
      "Vodní zdroje – rekonstrukce Kejná, Berounka, výměna výtlačného potrubí",
      "Propojení levého břehu – realizováno",
      "Cena vodného a stočného – stále jedna z nejnižších v regionu",
      "Město provedlo rozsáhlé investice mimo původní program",
    ],
    status: "beyond",
    statusLabel: "PLNĚNO / NAD RÁMEC",
    summary: "Město provedlo rozsáhlé investice, které program ani neobsahoval.",
  },
  {
    id: "energy",
    icon: Zap,
    title: "Energetika",
    promised: ["Fotovoltaika na ČOV a prameništi", "Úsporná opatření"],
    accomplished: [
      "FVE na ČOV a úpravně vody – vysoutěženo, realizace 2026",
      "Veřejné osvětlení – kompletní modernizace LED, dvě etapy, dotace 7,3 mil. Kč",
      "Energetický management města – zpracování energetické koncepce",
    ],
    status: "fulfilled",
    statusLabel: "PLNĚNO",
    summary: "Energetické projekty postupují podle plánu.",
  },
  {
    id: "finance",
    icon: Coins,
    title: "Finance",
    promised: ["Nezadlužovat město", "Pečlivě vybírat projekty", "Hledat dotace"],
    accomplished: [
      "Rozpočet stabilní, dluh klesl na 44 mil. Kč (2024)",
      "Dotace schváleny: náměstí, chodníky",
      "Žádosti podány: školní pavilon, FVE",
      "MŠ – dotace 24 mil. Kč",
      "Hasičská zbrojnice – dotace 7,9 mil. Kč (vrácena po odvolání)",
    ],
    status: "fulfilled",
    statusLabel: "PLNĚNO",
    summary: "Město zůstalo finančně stabilní a aktivně čerpá dotace.",
  },
  {
    id: "culture",
    icon: Music,
    title: "Kultura, sport, volný čas",
    promised: ["Pravidla pro Lesní divadlo", "Podpora sportu", "Řešení fotbalového hřiště"],
    accomplished: [
      "Lesní divadlo – pravidelná údržba, kulturní akce, spolupráce ZUŠ, nový ceník",
      "Sport dětí a mládeže – pravidelné navyšování částky do grantového systému",
      "Sportovní hala – dokončena, ocenění Stavba roku",
      "Fotbalové hřiště – problém trvá, řešení nebylo dokončeno",
    ],
    status: "partial",
    statusLabel: "ČÁSTEČNĚ",
    summary: "Podpora kultury a sportu se rozvinula, ale fotbalové hřiště zůstává nevyřešeno.",
  },
  {
    id: "participation",
    icon: Users,
    title: "Zapojování veřejnosti",
    promised: ["Veřejná projednání před projekty", "Otevřená radnice", "Setkání s občany"],
    accomplished: [
      "Veřejná setkání – k pavilonu, rekonstrukcím ulic a náměstí, krajinnému plánu, strategickému plánu",
      "Facebook města – spuštěn 2023",
      "Nové webové stránky města",
      "Strategický plán – široká participace 2026",
    ],
    status: "fulfilled",
    statusLabel: "PLNĚNO",
    summary: "Město pravidelně komunikuje s veřejností a zapojuje ji do rozhodování.",
  },
];

const getStatusIcon = (status: "fulfilled" | "partial" | "beyond") => {
  switch (status) {
    case "fulfilled":
      return <CheckCircle2 className="h-5 w-5 text-green-600" />;
    case "beyond":
      return <CheckCircle2 className="h-5 w-5 text-green-600" />;
    case "partial":
      return <AlertCircle className="h-5 w-5 text-amber-600" />;
  }
};

const getStatusColor = (status: "fulfilled" | "partial" | "beyond") => {
  switch (status) {
    case "fulfilled":
    case "beyond":
      return "bg-green-50 border-green-200";
    case "partial":
      return "bg-amber-50 border-amber-200";
  }
};

function HodnoceniPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-20">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Volební období 2022–2026
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
          Hodnocení uplynulých čtyř let
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Poctivé ohlédnutí za tím, co se v Řevnicích za poslední volební období povedlo, co zůstává
          rozpracované a na čem chceme dál stavět. Detailní vyhodnocení plnění volebního programu v
          jednotlivých oblastech.
        </p>
      </header>

      <div className="mt-16 space-y-8">
        {sections.map((section) => (
          <section
            key={section.id}
            className={`rounded-2xl border p-6 transition hover:shadow-md ${getStatusColor(section.status)}`}
          >
            <div className="flex items-start gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <section.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    {section.title}
                  </h2>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(section.status)}
                    <span
                      className={`text-xs font-semibold ${
                        section.status === "partial" ? "text-amber-700" : "text-green-700"
                      }`}
                    >
                      {section.statusLabel}
                    </span>
                  </div>
                </div>

                <div className="mt-4 space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground">Co bylo slíbeno</h3>
                    <ul className="mt-2 space-y-1">
                      {section.promised.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-muted-foreground before:mr-2 before:content-['•']"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Co se skutečně stalo</h3>
                    <ul className="mt-2 space-y-1">
                      {section.accomplished.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-foreground before:mr-2 before:content-['✓'] before:font-bold before:text-green-600"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white/50 p-3">
                    <p className="text-sm italic text-muted-foreground">{section.summary}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="mt-16 rounded-2xl border-2 border-border bg-card p-8">
        <h2 className="font-display text-2xl font-bold text-foreground">Celkové hodnocení</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            { title: "Plněno", count: 6, color: "bg-green-100 text-green-900" },
            { title: "Plněno / nad rámec", count: 2, color: "bg-green-100 text-green-900" },
            { title: "Částečně", count: 2, color: "bg-amber-100 text-amber-900" },
          ].map((item) => (
            <div key={item.title} className={`rounded-lg ${item.color} p-4`}>
              <div className="text-2xl font-bold">{item.count}</div>
              <div className="text-sm font-medium">{item.title}</div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-muted-foreground">
          Město se zavázalo plnit konkrétní program a postupuje podle svých slibů. Některé projekty
          se realizují pomaleji než plánováno, ale město zároveň podniklo iniciativy, které program
          ani nezahrnoval. Pokračujeme v odpovědné správě Řevnic.
        </p>
      </section>
    </div>
  );
}
