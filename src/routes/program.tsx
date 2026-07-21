import { createFileRoute } from "@tanstack/react-router";
import { Car, GraduationCap, Leaf, Building2, Landmark, HeartHandshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const Route = createFileRoute("/program")({
  head: () => ({
    meta: [
      { title: "Volební program — Pro Řevnice" },
      {
        name: "description",
        content:
          "Volební program Pro Řevnice — konkrétní priority hnutí Starostové a nezávislí pro další volební období.",
      },
      { property: "og:title", content: "Volební program — Pro Řevnice" },
      { property: "og:description", content: "Konkrétní priority pro další čtyři roky." },
      { property: "og:url", content: "/program" },
    ],
    links: [{ rel: "canonical", href: "/program" }],
  }),
  component: ProgramPage,
});

type Section = {
  icon: LucideIcon;
  title: string;
  points: string[];
};

const sections: Section[] = [
  {
    icon: Car,
    title: "Doprava a bezpečnost",
    points: [
      "Bezpečné pěší a cyklistické trasy, zejména cesty do škol.",
      "Řešení dopravy v klidu a parkování v centru města.",
      "Údržba a systematická obnova místních komunikací a chodníků.",
    ],
  },
  {
    icon: GraduationCap,
    title: "Školství a rodina",
    points: [
      "Dostatečné kapacity mateřských a základních škol.",
      "Modernizace zázemí, podpora učitelů a mimoškolních aktivit.",
      "Podpora spolků a volnočasových aktivit pro děti a mládež.",
    ],
  },
  {
    icon: Leaf,
    title: "Životní prostředí",
    points: [
      "Péče o zeleň, stromořadí a veřejná prostranství.",
      "Hospodaření s dešťovou vodou a adaptace na klimatické změny.",
      "Odpadové hospodářství s důrazem na třídění a prevenci.",
    ],
  },
  {
    icon: Building2,
    title: "Územní rozvoj",
    points: [
      "Vyvážený rozvoj města s ohledem na charakter Řevnic.",
      "Kultivace veřejného prostoru v centru a u nádraží.",
      "Transparentní projednávání stavebních záměrů s občany.",
    ],
  },
  {
    icon: Landmark,
    title: "Radnice a finance",
    points: [
      "Otevřené a přehledné hospodaření města.",
      "Zapojování občanů do rozhodování o důležitých projektech.",
      "Efektivní čerpání dotací a odpovědné investice.",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Kultura a komunita",
    points: [
      "Podpora tradičních akcí, spolků a lokálních iniciativ.",
      "Rozvoj knihovny, kulturního domu a sportovišť.",
      "Sousedské vztahy a otevřené město pro všechny generace.",
    ],
  },
];

function ProgramPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Volební program
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
          Co chceme pro Řevnice
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Naše priority pro další volební období. Jasné, konkrétní, s ohledem na to, co Řevnice
          skutečně potřebují.
        </p>
      </header>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {sections.map(({ icon: Icon, title, points }) => (
          <section
            key={title}
            className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/30 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="font-display text-xl font-semibold text-foreground">{title}</h2>
            </div>
            <ul className="mt-4 space-y-2">
              {points.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-dashed border-border bg-surface p-6 text-sm text-muted-foreground">
        Zástupný obsah — zašlete finální znění volebního programu a text nahradíme.
      </div>
    </div>
  );
}
