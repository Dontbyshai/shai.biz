import rss from "@astrojs/rss"
import type { APIContext } from "astro"
import { SITE } from "@/data/site"
import { postsNewestFirst } from "@/lib/posts"

export function GET(context: APIContext) {
  return rss({
    title: `${SITE.author} · ${SITE.name}`,
    description: SITE.description.en,
    site: context.site ?? "https://shai.biz",
    trailingSlash: true,
    customData: "<language>en-gb</language>",
    items: postsNewestFirst().map((post) => ({
      title: post.title.en,
      description: post.description.en,
      pubDate: new Date(`${post.date}T12:00:00Z`),
      link: `/en/blog/${post.slug}/`,
    })),
  })
}
