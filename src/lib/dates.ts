import type { Locale } from "@/data/types"

export function parseDay(iso: string): Date {
  return new Date(`${iso}T12:00:00Z`)
}

export function formatDay(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Paris",
  }).format(parseDay(iso))
}
