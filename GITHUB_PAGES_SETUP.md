# GitHub Pages Configuration for prorevnice.cz

## Current Status
- ✅ Build workflow is configured and working
- ✅ React app builds successfully to `.output/public`
- ✅ Built files are automatically deployed to `gh-pages` branch by the workflow
- ✅ Custom domain CNAME is configured
- ⚠️  GitHub Pages still needs to be configured to use the `gh-pages` branch

## Manual Configuration Required

To complete the setup, you need to configure GitHub Pages to serve from the `gh-pages` branch:

1. Go to your repository on GitHub: https://github.com/martin-david/prorevnice.cz-2.0
2. Click on **Settings** (top navigation)
3. In the left sidebar, click on **Pages**
4. Under "Source", change:
   - **Branch**: from "develop" to "gh-pages"
   - **Folder**: keep as "/ (root)"
5. Click **Save**

## Why This Is Needed

GitHub Pages by default treats the `develop` branch as a Jekyll site (because it contains `README.md`). The `gh-pages` branch contains only the built React application files and has a `.nojekyll` file that disables Jekyll processing.

Once you configure Pages to use the `gh-pages` branch, the website will serve the React app instead of README content.

## Verification

After configuring GitHub Pages:
1. Wait 2-3 minutes for the deployment to complete
2. Visit https://prorevnice.cz in your browser
3. You should see the React app loading instead of the README content

## Deployment Workflow

After the initial configuration:
1. All future pushes to the `develop` branch will trigger the build workflow
2. The workflow will build the React app and automatically deploy to the `gh-pages` branch
3. GitHub Pages will serve the latest version from `gh-pages`

No additional manual steps are needed after the initial Pages configuration.
