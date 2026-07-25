import { createFileRoute, Outlet } from "@tanstack/react-router";

// Layout route for all /kandidati/* pages. Must render <Outlet /> so nested
// routes (the candidate list at /kandidati and candidate detail pages at
// /kandidati/$slug) actually render.
export const Route = createFileRoute("/kandidati")({
  component: Outlet,
});
