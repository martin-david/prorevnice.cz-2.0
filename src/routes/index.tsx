import { createFileRoute, Link } from "@tanstack/react-router";
import panorama from "@/assets/main logo.jpg";
import { FacebookEmbed } from "@/components/FacebookEmbed";
import { ArrowRight, Users, ClipboardCheck, FileText, Newspaper } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pro Řevnice — Starostové a nezávislí" },
      {
        name: "description",
        content:
          "Kandidátka hnutí Starostové a nezávislí do zastupitelstva města Řevnice. Seznamte se s našimi kandidáty a volebním programem.",
      },
      { property: "og:title", content: "Pro Řevnice — Starostové a nezávislí" },
      {
        property: "og:description",
        content: "Otevřená a odpovědná politika pro Řevnice.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: panorama },
      { name: "twitter:image", content: panorama },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${panorama})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80"
          aria-hidden
        />

        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32 lg:py-40">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/85">
            Starostové a nezávislí
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold text-white drop-shadow-sm sm:text-6xl md:text-7xl">
            Pro Řevnice
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">
            Otevřená, věcná a odpovědná politika pro naše město. Pokračujeme v práci pro Řevnice — s
            respektem k místu, ve kterém žijeme.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/kandidati"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-primary shadow-lg transition hover:bg-white/90"
            >
              Naši kandidáti <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/program"
              className="inline-flex items-center gap-2 rounded-md border border-white/50 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Volební program
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Řevnice si zaslouží pokračování dobré správy
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Jsme kandidátka <strong className="text-foreground">Starostové a nezávislí</strong>{" "}
              pro komunální volby v Řevnicích. Nabízíme pokračování v projektech, které rozběhly
              minulé čtyři roky, a jasnou vizi rozvoje města — s důrazem na dopravu, školství,
              veřejný prostor a životní prostředí.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Na následujících stránkách najdete naše kandidáty, hodnocení uplynulého volebního
              období 2022–2026 i konkrétní body volebního programu.
            </p>
          </div>
          <div className="flex items-center rounded-2xl border border-border bg-surface p-6">
            <div className="text-sm">
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                Kontakt
              </div>
              <div className="mt-2 font-semibold text-foreground">Pro Řevnice</div>
              <div className="mt-1 text-muted-foreground">
                Sledujte nás na{" "}
                <a
                  href="https://www.facebook.com/prorevnice/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  Facebooku
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              to: "/kandidati" as const,
              icon: Users,
              title: "Kandidáti",
              text: "Lidé, kteří chtějí pracovat pro Řevnice.",
            },
            {
              to: "/hodnoceni" as const,
              icon: ClipboardCheck,
              title: "Hodnocení 2022–2026",
              text: "Co se v uplynulém období povedlo a co ne.",
            },
            {
              to: "/program" as const,
              icon: FileText,
              title: "Volební program",
              text: "Konkrétní priority pro další čtyři roky.",
            },
            {
              to: "/clanky" as const,
              icon: Newspaper,
              title: "Články",
              text: "Aktuality a komentáře z dění ve městě.",
            },
          ].map(({ to, icon: Icon, title, text }) => (
            <Link
              key={to}
              to={to}
              className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display text-lg font-semibold text-foreground">{title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Zobrazit <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Facebook */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="grid gap-8 rounded-2xl border border-border bg-surface p-6 md:grid-cols-2 md:p-10">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground">
              Sledujte nás na Facebooku
            </h2>
            <p className="mt-3 text-muted-foreground">
              Nejaktuálnější dění, pozvánky na setkání s občany a reakce na to, co se v Řevnicích
              právě děje — sdílíme na naší facebookové stránce.
            </p>
            <a
              href="https://www.facebook.com/prorevnice/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Otevřít Facebook <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="flex justify-center md:justify-end">
            <FacebookEmbed height={600} />
          </div>
        </div>
      </section>
    </>
  );
}
