import fs from "fs";
import path from "path";

const htmlContent = `<!doctype html>
<html lang="cs">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pro Řevnice — Starostové a nezávislí</title>
    <link rel="stylesheet" href="/assets/styles-BOQJDxFH.css">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/index-BU5ZQljR.js"><\/script>
  </body>
</html>
`;

const publicDir = ".output/public";
const indexPath = path.join(publicDir, "index.html");
const noJekyllPath = path.join(publicDir, ".nojekyll");

try {
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  fs.writeFileSync(indexPath, htmlContent);
  console.log(`Created ${indexPath}`);

  // Create .nojekyll to disable Jekyll on GitHub Pages
  fs.writeFileSync(noJekyllPath, "");
  console.log(`Created ${noJekyllPath}`);
} catch (error) {
  console.error("Error creating index.html or .nojekyll:", error);
  process.exit(1);
}
