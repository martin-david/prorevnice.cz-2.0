// Generates dist/sitemap.xml after the production build. Run as a postbuild
// step (see package.json's "build" script): `vite build && node
// scripts/generate-sitemap.mjs`.
//
// The site's route data (candidates, program topics, articles) lives in
// plain TypeScript modules under src/lib, but one of them
// (src/lib/candidates.ts) uses Vite's `import.meta.glob`, which only
// resolves inside an actual Vite build/dev context. So instead of trying to
// parse/require those files directly, we ask Vite to bundle a tiny entry
// module (scripts/sitemap-data-entry.ts) that re-exports just the slugs we
// need, then evaluate the bundled output to get plain data.
import { writeFile, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const SITE_URL = "https://prorevnice.cz";

async function loadSitemapData() {
  const result = await build({
    root: projectRoot,
    configFile: false,
    logLevel: "warn",
    build: {
      write: false,
      minify: false,
      lib: {
        entry: path.join(__dirname, "sitemap-data-entry.ts"),
        formats: ["es"],
        fileName: () => "sitemap-data-entry.mjs",
      },
    },
  });

  const output = Array.isArray(result) ? result[0].output : result.output;
  const bundle = output.find((chunk) => chunk.type === "chunk" && chunk.isEntry);

  const tmpDir = await mkdtemp(path.join(tmpdir(), "sitemap-data-"));
  const tmpFile = path.join(tmpDir, "sitemap-data-entry.mjs");
  try {
    await writeFile(tmpFile, bundle.code, "utf8");
    return await import(pathToFileURL(tmpFile).href);
  } finally {
    await rm(tmpDir, { recursive: true, force: true });
  }
}

function absoluteUrl(routePath) {
  return routePath === "/" ? SITE_URL : `${SITE_URL}${routePath}`;
}

function toUrlEntry(routePath) {
  return `  <url><loc>${absoluteUrl(routePath)}</loc></url>`;
}

async function main() {
  const { candidateSlugs, programSlugs, articleSlugs } = await loadSitemapData();

  const routes = [
    "/",
    "/kandidati",
    ...candidateSlugs.map((slug) => `/kandidati/${slug}`),
    "/program",
    ...programSlugs.map((slug) => `/program/${slug}`),
    "/clanky",
    ...articleSlugs.map((slug) => `/clanky/${slug}`),
    "/hodnoceni",
  ];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routes.map(toUrlEntry),
    "</urlset>",
    "",
  ].join("\n");

  const outFile = path.join(projectRoot, "dist", "sitemap.xml");
  await writeFile(outFile, xml, "utf8");
  console.log(`Wrote ${routes.length} URLs to ${path.relative(projectRoot, outFile)}`);
}

main().catch((error) => {
  console.error("Failed to generate sitemap.xml:", error);
  process.exit(1);
});
