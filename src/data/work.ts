import type { Localized } from "./types"

export type Repo = {
  name: string
  repo: string
  status: "active" | "wip" | "research" | "done"
  summary: Localized
  stack: string[]
  language: string
  license?: string
  created: string
  site?: string
  blogSlug?: string
  image?: string
}

export const statusLabel: Record<Repo["status"], Localized> = {
  active: { fr: "Actif", en: "Active" },
  wip: { fr: "En cours", en: "In progress" },
  research: { fr: "Recherche", en: "Research" },
  done: { fr: "Terminé", en: "Finished" },
}

export const languageColor: Record<string, string> = {
  TypeScript: "#3a78c4",
  JavaScript: "#d9b31f",
  Python: "#3f7fb5",
  Java: "#c1652f",
}

export const repos: Repo[] = [
  {
    name: "NotiaNote Connexion",
    repo: "Shai-Company-Ltd/Notianote-Connexion",
    status: "active",
    summary: {
      fr: "Le module qui connecte NotiaNote aux plateformes scolaires, universitaires et de cantine : ÉcoleDirecte, Pronote, CAS, Moodle, TurboSelf, et d'autres.",
      en: "The module that connects NotiaNote to school, university and cafeteria platforms: ÉcoleDirecte, Pronote, CAS, Moodle, TurboSelf, and more.",
    },
    stack: ["JavaScript", "Node"],
    language: "JavaScript",
    license: "MIT",
    created: "2026-05-21",
    blogSlug: "notianote-connexion",
    image: "/images/notianote-icon.webp",
  },
  {
    name: "SolarScan",
    repo: "Dontbyshai/SolarScan",
    status: "wip",
    summary: {
      fr: "Logiciel de bureau qui repère les panneaux solaires sur l'imagerie IGN et sort un devis PDF de nettoyage.",
      en: "A desktop app that spots solar panels on IGN imagery and exports a PDF cleaning quote.",
    },
    stack: ["Electron", "FastAPI", "Leaflet"],
    language: "JavaScript",
    license: "MIT",
    created: "2026-08-12",
    blogSlug: "solarscan",
    image: "/images/solarscan-logo.webp",
  },
  {
    name: "ShaiCraft Economy",
    repo: "Dontbyshai/shaicraft-economy",
    status: "wip",
    summary: {
      fr: "Mod Minecraft Fabric 1.21.1 : économie de survie, trading branché sur Binance, hôtel des ventes Cobblemon.",
      en: "A Minecraft Fabric 1.21.1 mod: survival economy, trading wired to Binance, a Cobblemon auction house.",
    },
    stack: ["Java 21", "Fabric", "Kotlin"],
    language: "Java",
    license: "MIT",
    created: "2026-08-12",
    blogSlug: "shaicraft-economy",
  },
  {
    name: "Shaï Company",
    repo: "Shai-Company-Ltd/Shai-company-website",
    status: "active",
    summary: {
      fr: "Le site de l'entreprise : applications, IA, Web3, Shai Music, investissement et trading.",
      en: "The company site: apps, AI, Web3, Shai Music, investment and trading.",
    },
    stack: ["React 19", "TypeScript", "Vite"],
    language: "TypeScript",
    created: "2026-02-01",
    site: "https://shaiscompany.com",
    blogSlug: "shai-company",
    image: "/images/shai-company-mark.webp",
  },
  {
    name: "shai.biz",
    repo: "Dontbyshai/shai.biz",
    status: "active",
    summary: {
      fr: "Ce site. Portfolio et blog, réécrit de zéro en novembre 2026.",
      en: "This site. Portfolio and blog, rewritten from scratch in November 2026.",
    },
    stack: ["Astro", "TypeScript", "CSS"],
    language: "TypeScript",
    created: "2026-08-17",
    site: "https://shai.biz",
    blogSlug: "shai-biz",
  },
  {
    name: "Serpentix",
    repo: "Dontbyshai/Serpentix",
    status: "done",
    summary: {
      fr: "Projet NSI : jeu multijoueur dans le navigateur, entre Snake et Slither.io, avec comptes, boutique de skins et parties en temps réel.",
      en: "School CS project: a multiplayer browser game, between Snake and Slither.io, with accounts, a skin shop and real-time matches.",
    },
    stack: ["Flask", "SQLite", "Socket.IO"],
    language: "Python",
    created: "2026-11-06",
    blogSlug: "serpentix",
  },
  {
    name: "NotiaNote × UCA",
    repo: "Shai-Company-Ltd/notianote-uca-integration",
    status: "research",
    summary: {
      fr: "Notes pour brancher le portail de l'Université Clermont Auvergne : emploi du temps ADE, notes Pégase/Apogée, Moodle.",
      en: "Notes for wiring the Université Clermont Auvergne portal: ADE timetable, Pégase/Apogée grades, Moodle.",
    },
    stack: ["TypeScript", "React Native"],
    language: "TypeScript",
    created: "2026-09-23",
    blogSlug: "notianote-uca",
  },
  {
    name: "ObsidianRAT",
    repo: "Dontbyshai/ObsidianRAT",
    status: "research",
    summary: {
      fr: "Projet d'étude en cybersécurité : un agent Windows et un panneau web. Usage limité à un cadre autorisé et éthique.",
      en: "A cybersecurity study project: a Windows agent and a web panel. Use limited to an authorized, ethical setting.",
    },
    stack: ["C#", "Laravel", "React"],
    language: "JavaScript",
    created: "2026-09-02",
    blogSlug: "obsidianrat",
    image: "/images/obsidianrat-logo.webp",
  },
  {
    name: "Animation Manim",
    repo: "Dontbyshai/Animation",
    status: "done",
    summary: {
      fr: "Animations mathématiques verticales, générées en Python avec Manim.",
      en: "Vertical math animations, generated in Python with Manim.",
    },
    stack: ["Python", "Manim"],
    language: "Python",
    created: "2026-08-17",
    blogSlug: "animation-manim",
  },
  {
    name: "QCM interactif",
    repo: "Dontbyshai/NSI-site-QCM",
    status: "done",
    summary: {
      fr: "Projet NSI : un QCM en HTML, CSS et JavaScript, avec score final et fond étoilé.",
      en: "School CS project: an HTML, CSS and JavaScript quiz, with a final score and a starfield.",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    language: "JavaScript",
    created: "2025-11-17",
    blogSlug: "qcm-interactif",
  },
]

export const otherRepos = [
  {
    name: "Dontbyshai/dontbyshai",
    href: "https://github.com/Dontbyshai/dontbyshai",
    text: { fr: "Le README de mon profil GitHub.", en: "My GitHub profile README." },
  },
  {
    name: "Shai-Company-Ltd/.github",
    href: "https://github.com/Shai-Company-Ltd/.github",
    text: { fr: "Le profil de l'organisation.", en: "The organization profile." },
  },
]

export const languages = [
  { name: "TypeScript", share: 51.7 },
  { name: "Python", share: 14.6 },
  { name: "JavaScript", share: 14.6 },
  { name: "Java", share: 3.6 },
  { name: "Autres", share: 15.5 },
]
