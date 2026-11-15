import type { Locale } from "@/data/types"

export const ui = {
  fr: {
    skip: "Aller au contenu",
    navLabel: "Pages",
    blog: "Blog",
    work: "Projets",
    about: "À propos",
    langLabel: "Langue",
    langOther: "EN",
    langOtherName: "English",
    themeLabel: "Thème",
    themeToDark: "Sombre",
    themeToLight: "Clair",
    homeKicker: "Terminale · Auvergne",
    homeTitle: "Shaï Chomette-Dugat",
    homeLede:
      "Je développe des applications sous Shaï Company, surtout NotiaNote, déjà sur l'App Store. Je vise la cybersécurité après le bac, et j'écris ici au fil des sorties.",
    now: "En ce moment",
    journal: "Derniers articles",
    allPosts: "Tout le journal",
    soon: "Bientôt",
    soonText: "Un projet de Noël personnel. Pas encore de date.",
    blogTitle: "Journal",
    blogLede:
      "Un texte par projet ou par jalon. La date est celle du dépôt, du commit ou de la sortie.",
    undated: "Date non fixée",
    readArticle: "Lire l'article",
    older: "Plus ancien",
    newer: "Plus récent",
    links: "Liens",
    workTitle: "Projets publics",
    workLede:
      "Les dépôts publics, avec leur lien GitHub. NotiaNote, Left To Live, Love Map, Fuel Tracker et Bitixe sont racontés dans le journal : leur code reste privé.",
    annexTitle: "Dépôts annexes",
    annexLede:
      "Deux dépôts publics ne sont pas des logiciels : le README de profil, et le profil de l'organisation.",
    aboutTitle: "À propos",
    elsewhere: "Ailleurs",
    notFoundTitle: "Page introuvable",
    notFoundText: "Ce lien ne mène nulle part sur shai.biz.",
    notFoundHome: "Retour à l'accueil",
    rss: "Flux RSS",
    footerNote: "Auvergne",
  },
  en: {
    skip: "Skip to content",
    navLabel: "Pages",
    blog: "Blog",
    work: "Work",
    about: "About",
    langLabel: "Language",
    langOther: "FR",
    langOtherName: "Français",
    themeLabel: "Theme",
    themeToDark: "Dark",
    themeToLight: "Light",
    homeKicker: "High-school senior · Auvergne",
    homeTitle: "Shaï Chomette-Dugat",
    homeLede:
      "I build apps through Shaï Company, mostly NotiaNote, already on the App Store. I want to study cybersecurity, and I write here as things ship.",
    now: "Right now",
    journal: "Latest posts",
    allPosts: "All posts",
    soon: "Coming up",
    soonText: "A personal Christmas project. No date yet.",
    blogTitle: "Journal",
    blogLede: "One post per project or milestone. The date is the repo, the commit, or the release.",
    undated: "No date yet",
    readArticle: "Read the post",
    older: "Older",
    newer: "Newer",
    links: "Links",
    workTitle: "Public projects",
    workLede:
      "Public repositories, with their GitHub links. NotiaNote, Left To Live, Love Map, Fuel Tracker and Bitixe are in the journal: their code stays private.",
    annexTitle: "Other public repos",
    annexLede: "Two public repositories are not software: the profile README, and the organization profile.",
    aboutTitle: "About",
    elsewhere: "Elsewhere",
    notFoundTitle: "Page not found",
    notFoundText: "This link does not lead anywhere on shai.biz.",
    notFoundHome: "Back home",
    rss: "RSS feed",
    footerNote: "Auvergne, France",
  },
} as const

export type UiKey = keyof typeof ui.fr

export function t(locale: Locale, key: UiKey): string {
  return ui[locale][key]
}
