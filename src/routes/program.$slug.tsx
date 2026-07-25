import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { getProgramTopicBySlug, slugify } from "@/lib/program";
import type { ProgramBlock } from "@/lib/program";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/program/$slug")({
  loader: ({ params }) => {
    const topic = getProgramTopicBySlug(params.slug);
    if (!topic) {
      throw notFound();
    }
    return topic;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const title = `${loaderData.title} — Volební program — Pro Řevnice`;
    const description = loaderData.summary[0] ?? loaderData.title;
    const url = absoluteUrl(`/program/${slugify(loaderData.title)}`);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: ProgramTopicDetailPage,
});

function ProgramTopicDetailPage() {
  const topic = Route.useLoaderData();
  const Icon = topic.icon;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
      <Link
        to="/program"
        className="text-sm font-medium text-primary transition hover:text-primary/80"
      >
        ← Zpět na volební program
      </Link>

      <div className="mt-8 flex items-center gap-3">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          {topic.order}. {topic.title}
        </h1>
      </div>

      <div className="mt-8 space-y-4 text-base text-muted-foreground">
        {topic.content.map((block: ProgramBlock, i: number) => {
          if (block.type === "heading") {
            return (
              <h2
                key={i}
                className="pt-2 font-display text-lg font-semibold text-foreground"
              >
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
