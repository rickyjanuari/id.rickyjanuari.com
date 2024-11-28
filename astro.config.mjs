import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

const SITE_URL = "https://id.rickyjanuari.com";

export default defineConfig({
  site: SITE_URL,
  base: '/', // Ensures assets use root path
  integrations: [
    sitemap(),
    tailwind({
      config: { applyBaseStyles: false },
    }),
  ],
});