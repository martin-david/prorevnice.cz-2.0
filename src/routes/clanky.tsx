import { createFileRoute, Link } from "@tanstack/react-router";
import { FacebookEmbed } from "@/components/FacebookEmbed";
import { Calendar } from "lucide-react";

import { articles } from "@/lib/articles";

export const Route = createFileRoute("/clanky")({
  head: () => ({
    meta: [
      { title: "Články — Pro Řevnice" },
      {
        name: "description",
        content: "Aktuality, komentáře a příspěvky hnutí Pro Řevnice k dění ve městě.",
      },
      { property: "og:title", content: "Články — Pro Řevnice" },
      { property: "og:description", content: "Aktuality a komentáře z dění ve městě." },
      { property: "og:url", content: "/clanky" },
    ],
    links: [{ rel: "canonical", href: "/clanky" }],
  }),
  component: ClankyPage,
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ClankyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Články</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
          Co píšeme a komentujeme
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Naše pohledy na dění v Řevnicích, komentáře k projektům města a pozvánky na setkání s
          občany.
        </p>
      </header>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {articles.map((a) => {
            const hasDetail = Boolean(a.content);
            const card = (
              <>
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  <time dateTime={a.date}>{formatDate(a.date)}</time>
                </div>
                <h2 className="mt-3 font-display text-2xl font-semibold text-foreground">
                  {a.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                {hasDetail && (
                  <span className="mt-4 inline-block text-sm font-medium text-primary">
                    Číst celý článek →
                  </span>
                )}
              </>
            );

            if (hasDetail) {
              return (
                <Link
                  key={a.slug}
                  to="/clanky/$slug"
                  params={{ slug: a.slug }}
                  className="block rounded-2xl border border-border bg-card p-6 transition hover:border-primary/30 hover:shadow-md"
                >
                  {card}
                </Link>
              );
            }

            return (
              <article
                key={a.slug}
                className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/30 hover:shadow-md"
              >
                {card}
              </article>
            );
          })}
          <div className="rounded-xl border border-dashed border-border bg-surface p-6 text-sm text-muted-foreground">
            Zástupné články — pošlete texty (titulek, datum, perex, obsah) a doplníme je sem.
            Případně můžeme převzít starší články z původního webu.
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-border bg-surface p-4">
            <div className="mb-3 px-2 text-sm font-semibold text-foreground">
              Aktuálně na Facebooku
            </div>
            <FacebookEmbed height={700} />
          </div>
        </aside>
      </div>
    </div>
  );
}
