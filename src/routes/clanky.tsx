import { createFileRoute } from "@tanstack/react-router";
import { FacebookEmbed } from "@/components/FacebookEmbed";
import { Calendar } from "lucide-react";

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

type Article = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

const articles: Article[] = [
  {
    slug: "uvodni-clanek",
    title: "Pokračujeme v práci pro Řevnice",
    date: "2026-05-01",
    excerpt:
      "Krátký úvodní článek — proč znovu kandidujeme, na co navazujeme a co považujeme za nejdůležitější v příštích čtyřech letech.",
  },
  {
    slug: "doprava-2026",
    title: "Doprava v Řevnicích: co dál",
    date: "2026-04-14",
    excerpt:
      "Bezpečnější cesty do škol, parkování v centru a údržba komunikací. Shrnujeme, co se povedlo a co je před námi.",
  },
  {
    slug: "verejny-prostor",
    title: "Veřejný prostor, který má smysl",
    date: "2026-03-28",
    excerpt:
      "Náměstí, okolí nádraží, zeleň a lavičky. Malé věci, které dělají velký rozdíl v každodenním životě města.",
  },
];

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
          {articles.map((a) => (
            <article
              key={a.slug}
              className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                <time dateTime={a.date}>{formatDate(a.date)}</time>
              </div>
              <h2 className="mt-3 font-display text-2xl font-semibold text-foreground">
                {a.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
            </article>
          ))}
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
