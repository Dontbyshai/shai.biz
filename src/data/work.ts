import type { WorkGroup } from "./types"

const gh = (href: string) => ({ href, label: { fr: "GitHub", en: "GitHub" } })

export const workGroups: WorkGroup[] = [
  {
    title: { fr: "Actifs", en: "Active" },
    items: [
      {
        name: "NotiaNote Connexion",
        status: { fr: "Actif", en: "Active" },
        summary: {
          fr: "Module JavaScript MIT qui connecte NotiaNote aux plateformes scolaires, universitaires et de cantine : ÉcoleDirecte, Pronote, CAS, Moodle, TurboSelf, et d'autres.",
          en: "An MIT JavaScript module that connects NotiaNote to school, university and cafeteria platforms: ÉcoleDirecte, Pronote, CAS, Moodle, TurboSelf, and others.",
        },
        stack: "JavaScript",
        license: { fr: "MIT", en: "MIT" },
        links: [gh("https://github.com/Shai-Company-Ltd/Notianote-Connexion")],
        blogSlug: "notianote-connexion",
      },
      {
        name: "Shaï Company",
        status: { fr: "Actif", en: "Active" },
        summary: {
          fr: "Site vitrine de l'entreprise : applications, IA, Web3, Shai Music, investissement et trading.",
          en: "The company site: applications, AI, Web3, Shai Music, investment and trading.",
        },
        stack: "React 19, TypeScript, Vite",
        license: { fr: "Non précisée", en: "Not specified" },
        links: [
          gh("https://github.com/Shai-Company-Ltd/Shai-company-website"),
          { href: "https://shaiscompany.com", label: { fr: "Site", en: "Site" } },
        ],
        blogSlug: "shai-company",
      },
      {
        name: "shai.biz",
        status: { fr: "En refonte", en: "Being rewritten" },
        summary: {
          fr: "Ce site : portfolio et journal. Le dépôt date d'août 2026, le code actuel est une réécriture.",
          en: "This site: a portfolio and a journal. The repo is from August 2026, and the current code is a rewrite.",
        },
        stack: "Astro, TypeScript",
        links: [gh("https://github.com/Dontbyshai/shai.biz")],
        blogSlug: "shai-biz",
      },
    ],
  },
  {
    title: { fr: "En cours", en: "In progress" },
    items: [
      {
        name: "SolarScan",
        status: { fr: "En cours", en: "In progress" },
        summary: {
          fr: "Logiciel de bureau pour repérer des panneaux solaires sur l'imagerie IGN et sortir un devis PDF.",
          en: "A desktop app that finds solar panels on IGN imagery and exports a PDF quote.",
        },
        stack: "Electron, FastAPI, Leaflet",
        license: { fr: "Non précisée", en: "Not specified" },
        links: [gh("https://github.com/Dontbyshai/SolarScan")],
        blogSlug: "solarscan",
      },
      {
        name: "ShaiCraft Economy",
        status: { fr: "En cours", en: "In progress" },
        summary: {
          fr: "Mod Fabric 1.21.1 : économie de survie, trading branché sur Binance, hôtel des ventes Cobblemon.",
          en: "A Fabric 1.21.1 mod: survival economy, trading wired to Binance, a Cobblemon auction house.",
        },
        stack: "Java 21, Fabric, Kotlin",
        license: { fr: "Non précisée", en: "Not specified" },
        links: [gh("https://github.com/Dontbyshai/shaicraft-economy")],
        blogSlug: "shaicraft-economy",
      },
    ],
  },
  {
    title: { fr: "Recherche", en: "Research" },
    items: [
      {
        name: "NotiaNote × UCA",
        status: { fr: "Documentation", en: "Documentation" },
        summary: {
          fr: "Notes pour brancher le portail de l'Université Clermont Auvergne : emploi du temps ADE, notes Pégase/Apogée, Moodle.",
          en: "Notes for connecting the Université Clermont Auvergne portal: ADE timetable, Pégase/Apogée grades, Moodle.",
        },
        stack: "TypeScript, React Native WebView",
        license: { fr: "Non précisée", en: "Not specified" },
        links: [gh("https://github.com/Shai-Company-Ltd/notianote-uca-integration")],
        blogSlug: "notianote-uca",
      },
      {
        name: "ObsidianRAT",
        status: { fr: "Recherche", en: "Research" },
        summary: {
          fr: "Projet d'étude : agent Windows et panneau web, fork remanié de win-rat. Le README limite l'usage à un cadre autorisé et éthique.",
          en: "A study project: a Windows agent and a web panel, a reworked fork of win-rat. The README limits use to an authorized, ethical setting.",
        },
        stack: "C#, PHP/Laravel, React",
        license: { fr: "Avertissement légal dans le README", en: "Legal warning in the README" },
        links: [gh("https://github.com/Dontbyshai/ObsidianRAT")],
        blogSlug: "obsidianrat",
      },
    ],
  },
  {
    title: { fr: "Terminés", en: "Finished" },
    items: [
      {
        name: "Serpentix",
        status: { fr: "Projet NSI", en: "NSI project" },
        summary: {
          fr: "Jeu navigateur multijoueur, entre Snake et Slither.io, avec comptes, boutique de skins et parties Socket.IO.",
          en: "A multiplayer browser game, between Snake and Slither.io, with accounts, a skin shop and Socket.IO matches.",
        },
        stack: "Flask, SQLite, Socket.IO",
        license: { fr: "Usage éducatif libre", en: "Free for educational use" },
        links: [gh("https://github.com/Dontbyshai/Serpentix")],
        blogSlug: "serpentix",
      },
      {
        name: "QCM interactif",
        status: { fr: "Projet NSI", en: "NSI project" },
        summary: {
          fr: "QCM en HTML, CSS et JavaScript, questions dans le code, score final, fond d'étoiles.",
          en: "An HTML, CSS and JavaScript quiz, questions in the code, a final score, a starfield.",
        },
        stack: "JavaScript, HTML, CSS",
        license: { fr: "Non précisée", en: "Not specified" },
        links: [gh("https://github.com/Dontbyshai/NSI-site-QCM")],
        blogSlug: "qcm-interactif",
      },
      {
        name: "Animation Manim",
        status: { fr: "Terminé", en: "Finished" },
        summary: {
          fr: "Animations mathématiques verticales, générées en Python avec Manim.",
          en: "Vertical math animations, generated in Python with Manim.",
        },
        stack: "Python, Manim",
        license: { fr: "Non précisée", en: "Not specified" },
        links: [gh("https://github.com/Dontbyshai/Animation")],
        blogSlug: "animation-manim",
      },
    ],
  },
  {
    title: { fr: "Archivé", en: "Archived" },
    items: [
      {
        name: "Kairo",
        status: { fr: "Archivé", en: "Archived" },
        summary: {
          fr: "Moteur de trading crypto, anciennement Trading v4. Public, plus maintenu, licence propriétaire. Le README déconseille les fonds réels.",
          en: "A crypto trading engine, formerly Trading v4. Public, unmaintained, proprietary license. The README advises against real funds.",
        },
        stack: "Python, SQLite",
        license: { fr: "Propriétaire", en: "Proprietary" },
        links: [gh("https://github.com/Shai-Company-Ltd/kairo")],
        blogSlug: "kairo",
      },
    ],
  },
]

export const annexes = [
  {
    name: "README de profil",
    href: "https://github.com/Dontbyshai/dontbyshai",
    blogSlug: "profil-github",
    text: {
      fr: "Le texte du profil GitHub, créé le 18 août 2026.",
      en: "The GitHub profile text, created on 18 August 2026.",
    },
  },
  {
    name: "Shai-Company-Ltd/.github",
    href: "https://github.com/Shai-Company-Ltd/.github",
    text: {
      fr: "Le profil public de l'organisation GitHub.",
      en: "The public GitHub organization profile.",
    },
  },
]
