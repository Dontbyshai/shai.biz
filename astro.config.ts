import sitemap from "@astrojs/sitemap"
import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://shai.biz",
  server: { port: 4321 },
  trailingSlash: "always",
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: "fr", locales: { fr: "fr-FR", en: "en-US" } },
    }),
  ],
  devToolbar: { enabled: false },
  redirects: {
    "/music": "/",
    "/projects": "/work/",
  },
})
