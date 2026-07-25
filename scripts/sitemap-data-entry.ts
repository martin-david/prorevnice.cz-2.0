// Tiny entry module used only by scripts/generate-sitemap.mjs to pull the
// slugs needed to build sitemap.xml. Bundled with Vite (not run directly)
// because src/lib/candidates.ts uses `import.meta.glob`, which only
// resolves inside a Vite build/dev context.
import { candidates, slugify } from "../src/lib/candidates";
import { programTopics } from "../src/lib/program";
import { articles } from "../src/lib/articles";

export const candidateSlugs = candidates.map((c) => slugify(c.name));
export const programSlugs = programTopics.map((t) => slugify(t.title));
export const articleSlugs = articles.filter((a) => a.content).map((a) => a.slug);
