import { createFileRoute, Link } from "@tanstack/react-router";

import { programTopics, programClosingVision, slugify } from "@/lib/program";

export const Route = createFileRoute("/program/")({
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

function ProgramPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Volební program
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
          Řevnice: město, které drží směr
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Naše priority pro další volební období. Jasné, konkrétní, s ohledem na to, co Řevnice
          skutečně potřebují.
        </p>
      </header>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {programTopics.map(({ order, icon: Icon, title, summary }) => (
          <Link
            key={order}
            to="/program/$slug"
            params={{ slug: slugify(title) }}
            className="group rounded-2xl border border-border bg-card p-6 transition hover:border-primary/30 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                {order}. {title}
              </h2>
            </div>
            <ul className="mt-4 space-y-2">
              {summary.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <span className="mt-4 inline-block text-sm font-medium text-primary transition group-hover:text-primary/80">
              Číst celé znění →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-surface p-8 text-center">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          {programClosingVision.title}
        </h2>
        <div className="mx-auto mt-4 max-w-2xl space-y-3 text-base text-muted-foreground">
          {programClosingVision.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
