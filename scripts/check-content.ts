import { readdir, readFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { posts } from "../src/data/posts.ts"

const expected: Record<string, string | null> = {
  "kali-linux": "2024-06-19",
  "qcm-interactif": "2025-11-17",
  "notianote-debuts": "2025-11-27",
  "notianote-v1": "2025-12-01",
  "notianote-v2": "2026-01-09",
  "notianote-mobile": "2026-01-21",
  "shai-company": "2026-02-01",
  "notianote-app-store": "2026-03-03",
  "notianote-connexion": "2026-05-21",
  "notianote-code-ferme": "2026-06-01",
  "left-to-live": "2026-08-03",
  "love-map": "2026-08-10",
  solarscan: "2026-08-13",
  "shaicraft-economy": "2026-08-13",
  "animation-manim": "2026-08-18",
  "shai-biz": "2026-08-18",
  "profil-github": "2026-08-18",
  "left-to-live-app-store": "2026-08-20",
  obsidianrat: "2026-09-02",
  "notianote-uca": "2026-09-23",
  "fuel-tracker": "2026-09-23",
  "notianote-2-7-2": "2026-10-07",
  kairo: "2026-10-20",
  bitixe: "2026-10-29",
  "shaiscompany-deploiement": "2026-11-02",
  serpentix: "2026-11-09",
  "notianote-ia": "2026-11-15",
  snowbound: "2026-11-12",
}

const banned = [
  "jktrn",
  "enscribe",
  "astro-erudite",
  "sex-map",
  "sex map",
  "knuth",
  "linebreak",
  "mdlorien",
  "satteri",
  "r2_account",
  "r2_access",
  "r2_secret",
  "manage-private-media",
  "manage-licensed-fonts",
]

const privateGithub = [
  "github.com/dontbyshai/kali-linux-",
  "github.com/shai-company-ltd/notianote\"",
  "github.com/shai-company-ltd/notianote/",
  "github.com/shai-company-ltd/notianote-app",
  "github.com/shai-company-ltd/left-to-life",
  "github.com/shai-company-ltd/love-map",
  "github.com/shai-company-ltd/fuel-tracker",
  "github.com/shai-company-ltd/bitixe",
  "github.com/shai-company-ltd/shaiscompany\"",
  "github.com/shai-company-ltd/shaiscompany/",
  "github.com/dontbyshai/bitcoin",
]

if (posts.length !== Object.keys(expected).length) {
  throw new Error(`Nombre d'articles : ${posts.length}, attendu ${Object.keys(expected).length}`)
}

const seen = new Set<string>()
for (const post of posts) {
  if (seen.has(post.slug)) throw new Error(`Doublon : ${post.slug}`)
  seen.add(post.slug)
  if (!(post.slug in expected)) throw new Error(`Article inattendu : ${post.slug}`)
  if (post.date !== expected[post.slug]) {
    throw new Error(`Date de ${post.slug} : ${post.date}, attendu ${expected[post.slug]}`)
  }
  const blob = JSON.stringify(post).toLowerCase()
  if (post.slug === "love-map" && !post.title.fr.includes("Love Map")) {
    throw new Error("Love Map doit garder son nom")
  }
  if (blob.includes("sex")) throw new Error(`Mot interdit dans ${post.slug}`)
  for (const url of privateGithub) {
    if (blob.includes(url)) throw new Error(`Lien privé dans ${post.slug} : ${url}`)
  }
  for (const word of banned) {
    if (blob.includes(word)) throw new Error(`Mot interdit « ${word} » dans ${post.slug}`)
  }
}

async function walk(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true })
  const files: string[] = []
  for (const entry of entries) {
    if (entry.name === "node_modules" || entry.name === "dist" || entry.name === ".git" || entry.name === ".astro") {
      continue
    }
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...(await walk(full)))
    else if (/\.(ts|astro|css|json|jsonc|md|svg|txt)$/.test(entry.name)) files.push(full)
  }
  return files
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const files = await walk(root)
for (const file of files) {
  if (file.endsWith("scripts/check-content.ts")) continue
  const text = (await readFile(file, "utf8")).toLowerCase()
  for (const word of banned) {
    if (text.includes(word)) throw new Error(`${word} trouvé dans ${path.relative(root, file)}`)
  }
}

console.log(`Contenu ok : ${posts.length} articles.`)
