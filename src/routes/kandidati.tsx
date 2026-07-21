import { createFileRoute } from "@tanstack/react-router";
import { User } from "lucide-react";

export const Route = createFileRoute("/kandidati")({
  head: () => ({
    meta: [
      { title: "Kandidáti — Pro Řevnice" },
      {
        name: "description",
        content:
          "Kandidáti hnutí Starostové a nezávislí do zastupitelstva města Řevnice. Seznamte se s lidmi, kteří chtějí pracovat pro naše město.",
      },
      { property: "og:title", content: "Kandidáti — Pro Řevnice" },
      { property: "og:description", content: "Lidé, kteří chtějí pracovat pro Řevnice." },
      { property: "og:url", content: "/kandidati" },
    ],
    links: [{ rel: "canonical", href: "/kandidati" }],
  }),
  component: KandidatiPage,
});

type Candidate = {
  order: number;
  name: string;
  role?: string;
  bio: string;
  photo?: string;
};

// TODO: Nahradit skutečnými kandidáty (jméno, foto, medailonek).
const candidates: Candidate[] = [
  {
    order: 1,
    name: "Jméno Příjmení",
    role: "Lídr kandidátky · starosta",
    bio: "Krátký medailonek kandidáta — profesní zkušenosti, priority pro Řevnice a proč kandiduje.",
  },
  {
    order: 2,
    name: "Jméno Příjmení",
    role: "Místostarosta",
    bio: "Krátký medailonek kandidáta — profesní zkušenosti, priority pro Řevnice a proč kandiduje.",
  },
  {
    order: 3,
    name: "Jméno Příjmení",
    role: "Zastupitel/ka",
    bio: "Krátký medailonek kandidáta — profesní zkušenosti, priority pro Řevnice a proč kandiduje.",
  },
  {
    order: 4,
    name: "Jméno Příjmení",
    bio: "Krátký medailonek kandidáta — profesní zkušenosti, priority pro Řevnice a proč kandiduje.",
  },
];

function KandidatiPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Kandidáti</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
          Lidé pro Řevnice
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Kandidátní listina hnutí Starostové a nezávislí pro nadcházející komunální volby v Řevnicích.
          Spojuje nás zkušenost, znalost místa a chuť pracovat pro město.
        </p>
      </header>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {candidates.map((c) => (
          <article
            key={c.order}
            className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/30 hover:shadow-md"
          >
            <div className="relative aspect-[4/5] w-full bg-surface">
              {c.photo ? (
                <img src={c.photo} alt={c.name} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-muted-foreground/60">
                  <User className="h-16 w-16" />
                </div>
              )}
              <div className="absolute left-3 top-3 inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-primary px-2 text-sm font-semibold text-primary-foreground">
                {c.order}
              </div>
            </div>
            <div className="p-5">
              <div className="font-display text-lg font-semibold text-foreground">{c.name}</div>
              {c.role && (
                <div className="mt-0.5 text-xs font-medium uppercase tracking-wider text-primary">
                  {c.role}
                </div>
              )}
              <p className="mt-3 text-sm text-muted-foreground">{c.bio}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-dashed border-border bg-surface p-6 text-sm text-muted-foreground">
        Toto je zástupný obsah. Zašlete prosím jména, fotky a krátký medailonek každého kandidáta —
        doplníme je sem.
      </div>
    </div>
  );
}
