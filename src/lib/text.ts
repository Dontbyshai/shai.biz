import type { Locale } from "@/data/types"

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}

function localizeHref(href: string, locale: Locale): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href
  if (locale === "fr") return href
  if (href === "/") return "/en/"
  return `/en${href}`
}

export function renderInline(input: string, locale: Locale): string {
  const escaped = escapeHtml(input)
  return escaped
    .replaceAll(/`([^`]+)`/g, "<code>$1</code>")
    .replaceAll(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replaceAll(/\[\[([a-z0-9-]+)\|([^\]]+)\]\]/g, (_match, slug: string, label: string) => {
      const href = localizeHref(`/blog/${slug}/`, locale)
      return `<a href="${href}">${label}</a>`
    })
    .replaceAll(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label: string, href: string) => {
      const external = /^(https?:|mailto:)/.test(href)
      if (external) return `<a href="${href}">${label}</a>`
      return `<a href="${localizeHref(href, locale)}">${label}</a>`
    })
}

export function renderParagraphs(paragraphs: string[], locale: Locale): string {
  return paragraphs
    .map((paragraph) => {
      const lines = paragraph
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
      if (lines.length === 1 && lines[0]?.startsWith("## ")) {
        return `<h2>${renderInline(lines[0].slice(3), locale)}</h2>`
      }
      if (lines.length > 0 && lines.every((line) => line.startsWith("- "))) {
        const items = lines
          .map((line) => `<li>${renderInline(line.slice(2), locale)}</li>`)
          .join("")
        return `<ul>${items}</ul>`
      }
      return `<p>${renderInline(paragraph, locale)}</p>`
    })
    .join("\n")
}
