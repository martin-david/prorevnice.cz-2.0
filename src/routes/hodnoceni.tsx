import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, CircleDashed } from "lucide-react";

export const Route = createFileRoute("/hodnoceni")({
  head: () => ({
    meta: [
      { title: "Hodnocení 2022–2026 — Pro Řevnice" },
      {
        name: "description",
        content:
          "Ohlédnutí za volebním obdobím 2022–2026 v Řevnicích. Co se povedlo, co zůstává rozpracované a kam chceme pokračovat.",
      },
      { property: "og:title", content: "Hodnocení 2022–2026 — Pro Řevnice" },
      {
        property: "og:description",
        content: "Co se v Řevnicích za poslední čtyři roky povedlo — a co zůstává.",
      },
      { property: "og:url", content: "/hodnoceni" },
    ],
    links: [{ rel: "canonical", href: "/hodnoceni" }],
  }),
  component: HodnoceniPage,
});

const done = [
  "Rekonstrukce vybraných úseků místních komunikací a chodníků.",
  "Investice do školských budov a modernizace zázemí ZŠ a MŠ.",
  "Podpora kulturních a komunitních akcí ve městě.",
  "Zlepšení hospodaření města a transparentní rozpočet.",
];

const inProgress = [
  "Dlouhodobá koncepce dopravy v klidu a bezpečné pěší trasy.",
  "Postupná obnova veřejného prostoru v centru města.",
  "Projekty v oblasti nakládání s dešťovou vodou a zeleně.",
];

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
          Poctivé ohlédnutí za tím, co se v Řevnicích za poslední volební období povedlo,
          co zůstává rozpracované a na čem chceme dál stavět.
        </p>
      </header>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-foreground">Co se povedlo</h2>
        <ul className="mt-4 space-y-3">
          {done.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-xl border border-border bg-card p-4 text-foreground"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-semibold text-foreground">Na čem pokračujeme</h2>
        <ul className="mt-4 space-y-3">
          {inProgress.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-xl border border-border bg-surface p-4 text-foreground"
            >
              <CircleDashed className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
              <span className="text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-12 rounded-xl border border-dashed border-border bg-surface p-6 text-sm text-muted-foreground">
        Zástupný text — pošlete nám konkrétní hodnocení jednotlivých oblastí (doprava, školství,
        životní prostředí, územní rozvoj, kultura, finance) a doplníme je sem.
      </div>
    </div>
  );
}
