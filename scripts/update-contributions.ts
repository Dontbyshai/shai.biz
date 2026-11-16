// Met à jour la copie locale des contributions GitHub (repli si le réseau manque au build).
import { writeFile } from "node:fs/promises"
import { GITHUB_USER, parseContributions } from "../src/lib/contributions.ts"

const res = await fetch(`https://github.com/users/${GITHUB_USER}/contributions`, {
  headers: { "User-Agent": "shai.biz build" },
})
if (!res.ok) throw new Error(`HTTP ${res.status}`)
const parsed = parseContributions(await res.text())
if (parsed.days.length < 300) throw new Error("Page inattendue")
const data = { user: GITHUB_USER, ...parsed, fetchedAt: new Date().toISOString() }
await writeFile(new URL("../src/data/contributions.json", import.meta.url), `${JSON.stringify(data)}\n`)
console.log(`${parsed.days.length} jours, ${parsed.total} contributions.`)
