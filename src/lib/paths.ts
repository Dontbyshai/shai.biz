import type { Locale } from "@/data/types"

export function localizedPath(locale: Locale, pathname: string): string {
  const withSlash = pathname.endsWith("/") ? pathname : `${pathname}/`
  if (locale === "fr") return withSlash
  if (withSlash === "/") return "/en/"
  return `/en${withSlash}`
}

export function otherLocale(locale: Locale): Locale {
  return locale === "fr" ? "en" : "fr"
}

export function isCurrent(pathname: string, href: string): boolean {
  if (href === "/" || href === "/en/") return pathname === href
  return pathname === href || pathname.startsWith(href)
}
