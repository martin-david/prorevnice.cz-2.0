import { createFileRoute, Outlet } from "@tanstack/react-router";

// Layout route for all /clanky/* pages. Must render <Outlet /> so nested
// routes (the article list at /clanky and article detail pages at
// /clanky/$slug) actually render.
export const Route = createFileRoute("/clanky")({
  component: Outlet,
});
