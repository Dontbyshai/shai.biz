import type { Highlight } from "./types"

export const highlights: Highlight[] = [
  {
    name: "NotiaNote",
    blogSlug: "notianote-app-store",
    image: {
      src: "/images/notianote-icon.jpg",
      alt: {
        fr: "Icône NotiaNote",
        en: "NotiaNote icon",
      },
    },
    text: {
      fr: "Notes, emploi du temps, cahier de textes, assistant IA. Web, iOS et Android. Sur l'App Store depuis le 3 mars 2026.",
      en: "Grades, timetable, homework diary, AI assistant. Web, iOS and Android. On the App Store since 3 March 2026.",
    },
    link: { href: "https://notianote.fr", label: "notianote.fr" },
  },
  {
    name: "Left To Live",
    blogSlug: "left-to-live-app-store",
    image: {
      src: "/images/lefttolive-icon.jpg",
      alt: {
        fr: "Icône Left To Live",
        en: "Left To Live icon",
      },
    },
    text: {
      fr: "Compte à rebours des battements de cœur, sur iOS et Apple Watch. Sorti le 20 août 2026.",
      en: "A countdown of remaining heartbeats, on iOS and Apple Watch. Released on 20 August 2026.",
    },
    link: {
      href: "https://apps.apple.com/fr/app/left-to-live/id6793693539",
      label: "App Store",
    },
  },
  {
    name: "Bitixe",
    blogSlug: "bitixe",
    monogram: "B",
    text: {
      fr: "Plateforme de trading crypto, en ligne sur app.bitixe.com. Première bêta le 29 octobre 2026.",
      en: "A crypto trading site, live at app.bitixe.com. First beta on 29 October 2026.",
    },
    link: { href: "https://app.bitixe.com", label: "app.bitixe.com" },
  },
  {
    name: "SolarScan",
    blogSlug: "solarscan",
    monogram: "S",
    text: {
      fr: "Devis de nettoyage de panneaux solaires, à partir de l'imagerie IGN. Dépôt public.",
      en: "Quotes for cleaning solar panels, from IGN imagery. Public repo.",
    },
    link: { href: "https://github.com/Dontbyshai/SolarScan", label: "GitHub" },
  },
  {
    name: "Shaï Company",
    blogSlug: "shai-company",
    image: {
      src: "/images/shaiscompany-logo.png",
      alt: {
        fr: "Logo de Shaï Company",
        en: "Shaï Company logo",
      },
    },
    text: {
      fr: "Le site de l'entreprise : applications, IA, Web3, musique, trading.",
      en: "The company site: apps, AI, Web3, music, trading.",
    },
    link: { href: "https://shaiscompany.com", label: "shaiscompany.com" },
  },
]
