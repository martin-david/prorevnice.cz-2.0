import { createFileRoute, Outlet } from "@tanstack/react-router";

// Layout route for all /program/* pages. Must render <Outlet /> so nested
// routes (the topic list at /program and topic detail pages at
// /program/$slug) actually render.
export const Route = createFileRoute("/program")({
  component: Outlet,
});
