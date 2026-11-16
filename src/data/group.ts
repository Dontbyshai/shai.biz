import type { Localized } from "./types"

/**
 * Organigramme de la page Plan.
 * Uniquement les informations données par Shaï : nom, pays, type de structure et projets.
 * Aucune donnée légale (immatriculation, date de création, capital…) n'est inventée ici.
 */

export interface GroupProject {
  name: string
  icon?: string
  /** icône en pixel art (agrandie sans lissage) */
  pixel?: boolean
  /** fond sombre derrière l'icône */
  dark?: boolean
  /** article du blog */
  slug?: string
  /** site externe */
  href?: string
  note: Localized
}

export interface Company {
  id: string
  name: string
  flag: "bs" | "us" | "fr"
  country: Localized
  /** type de structure, seulement s'il est connu */
  kind?: Localized
  role: Localized
  projects: GroupProject[]
}

export const companies: Company[] = [
  {
    id: "ltd",
    name: "Shai's Company Ltd",
    flag: "bs",
    country: { fr: "Bahamas", en: "The Bahamas" },
    kind: { fr: "Ltd · société à responsabilité limitée", en: "Ltd · limited company" },
    role: { fr: "Web3 & crypto", en: "Web3 & crypto" },
    projects: [
      {
        name: "Bitixe",
        icon: "/images/bitixe-icon.webp",
        dark: true,
        slug: "bitixe",
        href: "https://bitixe.com",
        note: { fr: "Lancement le 8 déc. 2026", en: "Launching 8 Dec 2026" },
      },
    ],
  },
  {
    id: "llc",
    name: "Shai's Company LLC",
    flag: "us",
    country: { fr: "Nouveau-Mexique, États-Unis", en: "New Mexico, United States" },
    kind: { fr: "LLC · Limited Liability Company", en: "LLC · Limited Liability Company" },
    role: { fr: "Applications mobiles", en: "Mobile apps" },
    projects: [
      {
        name: "NotiaNote",
        icon: "/images/notianote-icon.webp",
        slug: "notianote-app-store",
        href: "https://notianote.fr",
        note: { fr: "App Store · Play Store", en: "App Store · Play Store" },
      },
      {
        name: "Left To Live",
        icon: "/images/lefttolive-icon.webp",
        slug: "left-to-live-app-store",
        note: { fr: "App Store", en: "App Store" },
      },
      {
        name: "Fuel Tracker",
        icon: "/images/fuel-tracker-icon.webp",
        slug: "fuel-tracker",
        note: { fr: "En cours", en: "In progress" },
      },
      {
        name: "Love Map",
        icon: "/images/lovemap-icon.webp",
        slug: "love-map",
        note: { fr: "Pas encore publiée", en: "Not released yet" },
      },
    ],
  },
  {
    id: "fr",
    name: "Shai Company France",
    flag: "fr",
    country: { fr: "France", en: "France" },
    role: { fr: "Boutiques Shopify", en: "Shopify shops" },
    projects: [
      {
        name: "Snowbound",
        slug: "snowbound",
        note: { fr: "Boutique de Noël éphémère", en: "Pop-up Christmas shop" },
      },
    ],
  },
]

/** Projets open source perso, sans lien avec les sociétés. */
export const personalProjects: GroupProject[] = [
  { name: "SolarScan", icon: "/images/solarscan-icon.webp", slug: "solarscan", note: { fr: "Electron · FastAPI", en: "Electron · FastAPI" } },
  { name: "ShaiCraft Economy", icon: "/images/shaicraft-icon.webp", pixel: true, slug: "shaicraft-economy", note: { fr: "Mod Minecraft", en: "Minecraft mod" } },
  { name: "ObsidianRAT", icon: "/images/obsidianrat-logo.webp", slug: "obsidianrat", note: { fr: "Recherche cyber", en: "Security research" } },
  { name: "Serpentix", slug: "serpentix", note: { fr: "Projet NSI", en: "School project" } },
  { name: "QCM interactif", slug: "qcm-interactif", note: { fr: "Projet NSI", en: "School project" } },
  { name: "Animation Manim", slug: "animation-manim", note: { fr: "Python · Manim", en: "Python · Manim" } },
  { name: "shai.biz", icon: "/apple-touch-icon.png", dark: true, slug: "shai-biz", note: { fr: "Ce site", en: "This site" } },
]
