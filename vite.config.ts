// For GitHub Pages deployment as a pure client-side SPA, we use vanilla Vite configuration
// instead of @lovable.dev/vite-tanstack-config which builds for SSR by default.
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
plugins: [tailwindcss(), react(), tsconfigPaths()],
resolve: {
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
},
build: {
  outDir: "dist",
  sourcemap: false,
},
});
