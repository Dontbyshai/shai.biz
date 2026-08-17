import { SITE } from "@/consts"
import type { MarkdownHeading } from "astro"
import { getCollection, type CollectionEntry } from "astro:content"
import type { InlineRendered } from "@/lib/markdown/frontmatter-inline"
import { plainInline } from "@/lib/markdown/inline-markdown"
import { isSubpost } from "@/lib/utils"

export const pageTitle = (title: string) =>
  `${plainInline(title)} | ${SITE.title}`

const escapeHtml = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")

export type InlineLabel = string | InlineRendered

export const asInline = (label: InlineLabel): InlineRendered =>
  typeof label === "string" ? { html: escapeHtml(label), text: label } : label

type RenderedFrontmatter = {
  inline?: Partial<Record<"title" | "description", InlineRendered>>
  tocHtml?: Record<string, string>
}

type RenderableEntry = {
  rendered?: { metadata?: Record<string, unknown> }
  data: { title?: unknown; description?: unknown }
}

export function entryInline(
  entry: RenderableEntry,
  field: "title" | "description",
): InlineRendered {
  const frontmatter = entry.rendered?.metadata?.frontmatter as
    | RenderedFrontmatter
    | undefined
  const rendered = frontmatter?.inline?.[field]
  if (rendered) return rendered
  const raw = String(entry.data[field] ?? "")
  return { html: escapeHtml(raw), text: raw }
}

export type TocHeading = MarkdownHeading & { html?: string }

export function enrichHeadings(
  headings: MarkdownHeading[],
  frontmatter: unknown,
): TocHeading[] {
  const inner = (frontmatter as RenderedFrontmatter | undefined)?.tocHtml
  if (!inner) return headings
  return headings.map((heading) => {
    const html = inner[heading.slug]
    return html && html !== heading.text ? { ...heading, html } : heading
  })
}

export async function getPosts(lang: "fr" | "en" = "fr"): Promise<CollectionEntry<"blog">[]> {
  const posts = await getCollection("blog", ({ data }) => !data.draft && (data.lang || "fr") === lang)
  return posts
    .filter((post) => !isSubpost(post.id))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
}

export async function getSubposts(lang: "fr" | "en" = "fr"): Promise<
  Map<string, CollectionEntry<"blog">[]>
> {
  const posts = await getCollection(
    "blog",
    ({ id, data }) => !data.draft && (data.lang || "fr") === lang && id.split("/").length === 2,
  )
  posts.sort(
    (a, b) =>
      (a.data.order ?? Infinity) - (b.data.order ?? Infinity) ||
      a.data.date.getTime() - b.data.date.getTime(),
  )
  return Map.groupBy(posts, (post) => post.id.split("/")[0])
}

export async function getTags(lang: "fr" | "en" = "fr"): Promise<
  Map<string, CollectionEntry<"blog">[]>
> {
  const posts = await getPosts(lang)
  const series = await getSubposts(lang)
  const tags = new Map<string, CollectionEntry<"blog">[]>()
  for (const post of posts) {
    const chain = [post, ...(series.get(post.id) ?? [])]
    for (const tag of new Set(
      chain.flatMap((entry) => entry.data.tags ?? []),
    )) {
      const tagged = tags.get(tag)
      if (tagged) tagged.push(post)
      else tags.set(tag, [post])
    }
  }
  return new Map(
    [...tags].sort(
      ([a, postsA], [b, postsB]) =>
        postsB.length - postsA.length || a.localeCompare(b),
    ),
  )
}
