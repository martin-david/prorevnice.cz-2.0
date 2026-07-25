import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Calendar } from "lucide-react";

import { getArticleBySlug } from "@/lib/articles";
import type { ArticleBlock } from "@/lib/articles";

export const Route = createFileRoute("/clanky/$slug")({
  loader: ({ params }) => {
    const article = getArticleBySlug(params.slug);
    if (!article || !article.content) {
      throw notFound();
    }
    return article;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const title = `${loaderData.title} — Články — Pro Řevnice`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.excerpt },
        { property: "og:url", content: `/clanky/${loaderData.slug}` },
      ],
      links: [{ rel: "canonical", href: `/clanky/${loaderData.slug}` }],
    };
  },
  component: ArticleDetailPage,
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ArticleDetailPage() {
  const article = Route.useLoaderData();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
      <Link to="/clanky" className="text-sm font-medium text-primary transition hover:text-primary/80">
        ← Zpět na články
      </Link>

      <div className="mt-8 flex items-center gap-2 text-xs font-medium text-muted-foreground">
        <Calendar className="h-3.5 w-3.5" />
        <time dateTime={article.date}>{formatDate(article.date)}</time>
      </div>
      <h1 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
        {article.title}
      </h1>

      <div className="mt-8 space-y-4 text-base text-muted-foreground">
        {article.content?.map((block: ArticleBlock, i: number) => {
          if (block.type === "heading") {
            return (
              <h2 key={i} className="pt-2 font-display text-lg font-semibold text-foreground">
                {block.text}
              </h2>
            );
          }
          if (block.type === "list") {
            return (
              <ul key={i} className="space-y-2">
                {block.items.map((item: string, j: number) => (
                  <li key={j} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          }
          return <p key={i}>{block.text}</p>;
        })}
      </div>
    </div>
  );
}
