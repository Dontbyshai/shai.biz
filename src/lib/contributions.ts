import snapshot from "@/data/contributions.json"

export type Day = { date: string; level: number; count: number }
export type Contributions = {
  user: string
  total: number
  days: Day[]
  source: "live" | "snapshot"
  fetchedAt: string
}

export const GITHUB_USER = "Dontbyshai"

/** Lit la page publique des contributions GitHub (aucun jeton nécessaire). */
export function parseContributions(html: string): { days: Day[]; total: number } {
  const counts = new Map<string, number>()
  for (const m of html.matchAll(/<tool-tip[^>]*\bfor="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g)) {
    const id = m[1] ?? ""
    const text = m[2] ?? ""
    const n = /^(\d[\d,]*) contribution/.exec(text.trim())
    counts.set(id, n ? Number((n[1] ?? "0").replaceAll(",", "")) : 0)
  }
  const days: Day[] = []
  for (const m of html.matchAll(/<td[^>]*>/g)) {
    const tag = m[0]
    const date = /data-date="(\d{4}-\d{2}-\d{2})"/.exec(tag)?.[1]
    const level = /data-level="(\d)"/.exec(tag)?.[1]
    const id = /\bid="([^"]+)"/.exec(tag)?.[1]
    if (!date || level === undefined) continue
    days.push({ date, level: Number(level), count: (id && counts.get(id)) || 0 })
  }
  days.sort((a, b) => a.date.localeCompare(b.date))
  const total = days.reduce((n, d) => n + d.count, 0)
  return { days, total }
}

let cache: Promise<Contributions> | undefined

async function load(): Promise<Contributions> {
  try {
    const res = await fetch(`https://github.com/users/${GITHUB_USER}/contributions`, {
      headers: { "User-Agent": "shai.biz build", Accept: "text/html" },
      signal: AbortSignal.timeout(8000),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const parsed = parseContributions(await res.text())
    if (parsed.days.length < 300) throw new Error("page inattendue")
    return { user: GITHUB_USER, ...parsed, source: "live", fetchedAt: new Date().toISOString() }
  } catch (error) {
    console.warn(`[contributions] GitHub indisponible (${String(error)}), repli sur la copie locale.`)
    return { ...(snapshot as Omit<Contributions, "source">), source: "snapshot" }
  }
}

export function getContributions(): Promise<Contributions> {
  cache ??= load()
  return cache
}
