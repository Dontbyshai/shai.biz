import type { Localized } from "./types"

/** Projets avec leur vraie icône (App Store, dépôts, sites officiels). */
export const apps: { name: string; icon: string; slug: string; note: Localized; pixel?: boolean }[] = [
  { name: "NotiaNote", icon: "/images/notianote-icon.webp", slug: "notianote-app-store", note: { fr: "App Store", en: "App Store" } },
  { name: "Left To Live", icon: "/images/lefttolive-icon.webp", slug: "left-to-live-app-store", note: { fr: "App Store", en: "App Store" } },
  { name: "Bitixe", icon: "/images/bitixe-icon.webp", slug: "bitixe", note: { fr: "8 déc.", en: "8 Dec" } },
  { name: "Love Map", icon: "/images/lovemap-icon.webp", slug: "love-map", note: { fr: "Bientôt", en: "Soon" } },
  { name: "Fuel Tracker", icon: "/images/fuel-tracker-icon.webp", slug: "fuel-tracker", note: { fr: "En cours", en: "In progress" } },
  { name: "ShaiCraft", icon: "/images/shaicraft-icon.webp", slug: "shaicraft-economy", note: { fr: "Mod", en: "Mod" }, pixel: true },
  { name: "SolarScan", icon: "/images/solarscan-icon.webp", slug: "solarscan", note: { fr: "Open source", en: "Open source" } },
  { name: "Shaï Company", icon: "/images/shai-company-mark.webp", slug: "shai-company", note: { fr: "Société", en: "Company" } },
]
