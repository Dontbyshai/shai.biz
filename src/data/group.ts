import type { Localized } from "./types"

/**
 * Organigramme de la page Plan.
 * Uniquement les informations données par Shaï : nom, pays, type de structure, détention et projets.
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
  /** part détenue par Shaï, en % (donnée par Shaï) */
  share: number
  /** détail de la détention */
  owners: Localized
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
    share: 100,
    owners: { fr: "100 % Shaï", en: "100% Shaï" },
    projects: [
      {
        name: "Bitixe",
        icon: "/images/bitixe-icon.webp",
        dark: true,
        slug: "bitixe",
        href: "https://bitixe.com",
        note: { fr: "8 déc. 2026 · BNB Smart Chain", en: "8 Dec 2026 · BNB Smart Chain" },
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
    share: 100,
    owners: { fr: "100 % Shaï", en: "100% Shaï" },
    projects: [
      {
        name: "NotiaNote",
        icon: "/images/notianote-icon.webp",
        slug: "notianote-app-store",
        href: "https://notianote.fr",
        note: { fr: "App Store · IA Notia · Play Store en déc.", en: "App Store · Notia AI · Play Store in Dec" },
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
        note: { fr: "Prototype, soumis à Apple", en: "Prototype, submitted to Apple" },
      },
      {
        name: "Love Map",
        icon: "/images/lovemap-icon.webp",
        slug: "love-map",
        note: { fr: "Pas encore de date de sortie", en: "No release date yet" },
      },
    ],
  },
  {
    id: "fr",
    name: "Shai Company France",
    flag: "fr",
    country: { fr: "France", en: "France" },
    kind: { fr: "SAS · société par actions simplifiée", en: "SAS · French simplified joint-stock company" },
    role: { fr: "Boutiques Shopify", en: "Shopify shops" },
    share: 50,
    owners: { fr: "2 associés à 50 / 50", en: "2 partners, 50 / 50" },
    projects: [
      {
        name: "Snowbound",
        slug: "snowbound",
        href: "https://snowbound.fr",
        note: { fr: "Boutique de Noël éphémère, ouverte", en: "Pop-up Christmas shop, open" },
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
