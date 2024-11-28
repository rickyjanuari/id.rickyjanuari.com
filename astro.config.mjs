import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// Get repository name for GitHub Pages
const REPO_NAME = 'id.rickyjanuari.com'; // Replace with your repository name

// Determine the base URL based on environment
const SERVER_PORT = 3000;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const GITHUB_PAGES_URL = `https://rickyjanuari.github.io/${REPO_NAME}`; // Replace yourusername
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
const BASE_URL = isBuild ? GITHUB_PAGES_URL : LOCALHOST_URL;

export default defineConfig({
  server: { port: SERVER_PORT },
  site: BASE_URL,
  base: isBuild ? `/${REPO_NAME}` : '', // Add base for GitHub Pages
  integrations: [
    sitemap(),
    tailwind({
      config: { applyBaseStyles: false },
    }),
  ],
});