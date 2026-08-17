import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import { satteri } from "@astrojs/markdown-satteri"
import { hastPlugins, mdastPlugins } from "./src/lib/markdown"

export default defineConfig({
  site: "https://shai.biz",
  server: { port: 4321 },
  compressHTML: true,
  prefetch: { prefetchAll: true },
  vite: { resolve: { tsconfigPaths: true } },
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !/\/blog\/[^/]+\/[^/]+\/?$/.test(page) &&
        !/\/authors\/[^/]+\/?$/.test(page) &&
        !page.includes("/tags/") &&
        !page.includes("/fixtures/") &&
        !/\/music\/?$/.test(page) &&
        !/\.(md|txt|xml)\/?$/.test(page),
    }),
  ],
  markdown: {
    syntaxHighlight: false,
    processor: satteri({
      features: { directive: true, math: true, smartPunctuation: true },
      mdastPlugins,
      hastPlugins,
    }),
  },
})
