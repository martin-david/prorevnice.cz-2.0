import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { User } from "lucide-react";

import { getCandidateBySlug, getCandidatePhoto, slugify } from "@/lib/candidates";

export const Route = createFileRoute("/kandidati/$slug")({
  loader: ({ params }) => {
    const candidate = getCandidateBySlug(params.slug);
    if (!candidate) {
      throw notFound();
    }
    return candidate;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const title = `${loaderData.name} — Pro Řevnice`;
    const description = loaderData.fullBio[0] ?? loaderData.bio;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `/kandidati/${slugify(loaderData.name)}` },
      ],
      links: [{ rel: "canonical", href: `/kandidati/${slugify(loaderData.name)}` }],
    };
  },
  component: KandidatDetailPage,
});

function KandidatDetailPage() {
  const candidate = Route.useLoaderData();
  const photoUrl = getCandidatePhoto(candidate.photo);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
      <Link
        to="/kandidati"
        className="text-sm font-medium text-primary transition hover:text-primary/80"
      >
        ← Zpět na kandidáty
      </Link>

      <div className="mt-8 grid gap-8 sm:grid-cols-[220px_1fr]">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-surface">
          {photoUrl ? (
            <img
              src={photoUrl}
              alt={candidate.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-muted-foreground/60">
              <User className="h-16 w-16" />
            </div>
          )}
          <div className="absolute left-3 top-3 inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-primary px-2 text-sm font-semibold text-primary-foreground">
            {candidate.order}
          </div>
        </div>

        <div>
          <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            {candidate.name}
          </h1>
          {candidate.role && (
            <div className="mt-2 text-sm font-medium uppercase tracking-wider text-primary">
              {candidate.role}
            </div>
          )}
          <div className="mt-6 space-y-4 text-base text-muted-foreground">
            {candidate.fullBio.map((paragraph: string, i: number) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
