import type { Post, PostImage } from "./types"

const leftIcon: PostImage = {
  src: "/images/lefttolive-icon.webp",
  width: 512,
  height: 512,
  alt: {
    fr: "Icône Left To Live : un sablier rouge avec un cœur.",
    en: "Left To Live icon: a red hourglass with a heart.",
  },
  caption: {
    fr: "Icône App Store de Left To Live.",
    en: "Left To Live App Store icon.",
  },
}


const loveMapIcon: PostImage = {
  src: "/images/lovemap-icon.webp",
  width: 512,
  height: 512,
  alt: {
    fr: "Icône Love Map : un cœur rose et violet en forme de repère de carte.",
    en: "Love Map icon: a pink and purple heart shaped like a map pin.",
  },
  caption: { fr: "Icône de Love Map.", en: "Love Map icon." },
}

const fuelIcon: PostImage = {
  src: "/images/fuel-tracker-icon.webp",
  width: 512,
  height: 512,
  alt: {
    fr: "Icône Fuel Tracker : une pompe à essence dans un repère de carte vert.",
    en: "Fuel Tracker icon: a fuel pump inside a green map pin.",
  },
  caption: { fr: "Icône de Fuel Tracker.", en: "Fuel Tracker icon." },
}

const notianoteIa: PostImage = {
  src: "/images/notianote-ia.webp",
  width: 1920,
  height: 1140,
  wide: true,
  alt: {
    fr: "L'accueil de Notia sur ia.notianote.fr : « Salut, je suis Notia », un champ pour poser sa question et des suggestions.",
    en: "Notia's home on ia.notianote.fr: “Salut, je suis Notia”, a field to ask a question and suggestions.",
  },
  caption: { fr: "La nouvelle Notia, sur ia.notianote.fr", en: "The new Notia, on ia.notianote.fr" },
}

const notianoteApp: PostImage = {
  src: "/images/notianote-accueil.webp",
  width: 720,
  height: 1563,
  alt: {
    fr: "Écran d'accueil de l'application NotiaNote : moyenne du trimestre, devoirs, cours, messages et cours du lendemain.",
    en: "NotiaNote app home screen: term average, homework, classes, messages and tomorrow's lessons.",
  },
  caption: { fr: "L'accueil de l'application, sur iPhone.", en: "The app home screen, on iPhone." },
}

const notianoteNotes: PostImage = {
  src: "/images/notianote-notes.webp",
  width: 720,
  height: 1563,
  alt: {
    fr: "Écran Notes de NotiaNote : moyenne générale, moyenne de classe et notes par matière.",
    en: "NotiaNote grades screen: overall average, class average and grades per subject.",
  },
  caption: { fr: "L'écran des notes, sur iPhone.", en: "The grades screen, on iPhone." },
}

const notianoteEdt: PostImage = {
  src: "/images/notianote-edt.webp",
  width: 720,
  height: 1563,
  alt: {
    fr: "Écran Emploi du temps de NotiaNote : les cours de la journée, avec salles et professeurs.",
    en: "NotiaNote timetable screen: the day's classes, with rooms and teachers.",
  },
  caption: { fr: "L'emploi du temps, sur iPhone.", en: "The timetable, on iPhone." },
}

const serpentixShot: PostImage = {
  src: "/images/serpentix-solo.webp",
  width: 1440,
  height: 960,
  wide: true,
  alt: {
    fr: "Serpentix en mode solo : une grille sombre et des points à manger.",
    en: "Serpentix solo mode: a dark grid and dots to eat.",
  },
  caption: { fr: "Une partie solo de Serpentix.", en: "A Serpentix solo game." },
}

const bitixeShot: PostImage = {
  src: "/images/bitixe-marches.webp",
  width: 1440,
  height: 900,
  wide: true,
  alt: {
    fr: "Bitixe en mode sombre : la fenêtre de choix du marché, avec des actions.",
    en: "Bitixe in dark mode: the market picker, with stocks.",
  },
  caption: { fr: "Le choix du marché dans Bitixe.", en: "Picking a market in Bitixe." },
}

const shaiscompanySite: PostImage = {
  src: "/images/shaiscompany-site.webp",
  width: 1440,
  height: 900,
  wide: true,
  alt: {
    fr: "Haut de la page d'accueil de shaiscompany.com.",
    en: "Top of the shaiscompany.com home page.",
  },
  caption: { fr: "L'accueil de shaiscompany.com.", en: "The shaiscompany.com home page." },
}

const shaicraftIcon: PostImage = {
  src: "/images/shaicraft-icon.webp",
  width: 256,
  height: 256,
  alt: {
    fr: "Icône ShaiCraft Economy : une pièce dorée en pixel art.",
    en: "ShaiCraft Economy icon: a gold pixel-art coin.",
  },
  caption: { fr: "Icône du mod, tirée du dépôt.", en: "The mod icon, from the repo." },
}

export const posts: Post[] = [
  {
    slug: "kali-linux",
    date: "2024-06-19",
    title: { fr: "Mon labo Kali", en: "My Kali lab" },
    description: {
      fr: "Mon tout premier dépôt : des notes et des commandes de pentest, rangées outil par outil.",
      en: "My very first repo: pentest notes and commands, sorted tool by tool.",
    },
    paragraphs: {
      fr: [
        "Tout a commencé par la cybersécurité. Le 19 juin 2024, j'ouvre KALI-LINUX- sur GitHub, en privé. Le premier fichier s'appelle « Comande », je le renomme tout de suite en Metasploit.",
        "Ensuite le dépôt grossit par dossiers, un par outil : Metasploit, Ettercap, Wireshark, aircrack, nmap, evil portal, wifiphisher, plus un dossier doc. C'est mon cahier de labo : ce que je teste sur Kali, je le note là.",
        "Les dernières retouches datent de l'été 2025 (wifiphisher fin juillet, Ettercap et Wireshark début août). 27 commits en tout. Je ne l'ai plus touché depuis, mais c'est le point de départ de tout le reste.",
      ],
      en: [
        "It all started with cybersecurity. On 19 June 2024 I opened KALI-LINUX- on GitHub, as a private repo. The first file was called “Comande”; I renamed it Metasploit right away.",
        "Then the repo grew folder by folder, one per tool: Metasploit, Ettercap, Wireshark, aircrack, nmap, evil portal, wifiphisher, plus a doc folder. It's my lab notebook: whatever I try on Kali, I write it down there.",
        "The last edits are from summer 2025 (wifiphisher at the end of July, Ettercap and Wireshark in early August). 27 commits in all. I haven't touched it since, but it's where everything else started.",
      ],
    },
  },
  {
    slug: "qcm-interactif",
    date: "2025-11-17",
    title: { fr: "QCM interactif, projet NSI", en: "Interactive quiz, a school project" },
    description: {
      fr: "Mon premier projet public : un QCM en JavaScript avec un fond d'étoiles animé.",
      en: "My first public repo: a JavaScript quiz with an animated starfield.",
    },
    links: [
      {
        href: "https://github.com/Dontbyshai/NSI-site-QCM",
        label: { fr: "Dépôt GitHub", en: "GitHub repo" },
      },
    ],
    paragraphs: {
      fr: [
        "Projet de NSI, rendu en novembre 2025. Le dépôt NSI-site-QCM est créé le 17 novembre, les derniers commits (le README) datent du 27.",
        "Le principe : les questions sont écrites dans le code, le site les affiche une par une, valide la réponse, calcule le score à la fin et propose de recommencer. Le fond est un canvas avec des étoiles qui bougent.",
        "C'est du HTML, du CSS et du JavaScript, avec un petit peu de Python. 8 commits, projet terminé.",
      ],
      en: [
        "A computer-science class project, handed in in November 2025. The NSI-site-QCM repo was created on 17 November; the last commits (the README) are from the 27th.",
        "How it works: questions are written in the code, the site shows them one by one, checks the answer, computes the score at the end and lets you start again. The background is a canvas with moving stars.",
        "It's HTML, CSS and JavaScript, with a little Python. 8 commits, finished.",
      ],
    },
  },
  {
    slug: "notianote-debuts",
    date: "2025-11-27",
    title: { fr: "NotiaNote commence", en: "NotiaNote begins" },
    description: {
      fr: "Le 27 novembre 2025, j'ouvre le dépôt de NotiaNote : mon espace scolaire, en alternative à ÉcoleDirecte.",
      en: "On 27 November 2025 I opened the NotiaNote repo: my school workspace, an alternative to ÉcoleDirecte.",
    },
    links: [
      {
        href: "https://notianote.fr",
        label: { fr: "notianote.fr", en: "notianote.fr" },
      },
    ],
    paragraphs: {
      fr: [
        "Le 27 novembre 2025, je crée le dépôt NotiaNote. L'idée : réunir notes, emploi du temps et devoirs dans une appli plus agréable que ce qu'on utilise au lycée, une alternative à ÉcoleDirecte.",
        "La partie web est en JavaScript, avec un petit serveur Node qui sert de passerelle vers les plateformes scolaires. Quatre jours plus tard, je sors la [[notianote-v1|v1.0.0]].",
        "C'est devenu mon projet principal : il a maintenant son site, [notianote.fr](https://notianote.fr), et une appli iOS et Android.",
      ],
      en: [
        "On 27 November 2025 I created the NotiaNote repo. The idea: bring grades, timetable and homework together in an app that's nicer than what we use at school, an alternative to ÉcoleDirecte.",
        "The web side is JavaScript, with a small Node server acting as a gateway to the school platforms. Four days later I shipped [[notianote-v1|v1.0.0]].",
        "It became my main project: it now has its own site, [notianote.fr](https://notianote.fr), and an iOS and Android app.",
      ],
    },
  },
  {
    slug: "notianote-v1",
    date: "2025-12-01",
    title: { fr: "NotiaNote v1 : cinq versions en quatre jours", en: "NotiaNote v1: five versions in four days" },
    description: {
      fr: "Du 1er au 4 décembre 2025 : la v1.0.0, puis l'emploi du temps, la vie scolaire et l'export calendrier.",
      en: "From 1 to 4 December 2025: v1.0.0, then the timetable, school life and calendar export.",
    },
    paragraphs: {
      fr: [
        "Le 1er décembre 2025, premier commit : « Initial commit - NotiaNote v1.0.0 by dontbyshai ».",
        "Puis ça s'enchaîne :",
        "- 3 décembre, v1.1.3 : nettoyage et corrections.\n- 4 décembre, v1.2.3 : l'emploi du temps complet.\n- 4 décembre, v1.3.0 : la vie scolaire, et un tour sur la sécurité.\n- 4 décembre au soir, v1.4.0 : notes et devoirs améliorés, export vers le calendrier, connexion plus simple.",
        "Cinq versions en quatre jours. La suivante est une refonte complète : la [[notianote-v2|v2]].",
      ],
      en: [
        "On 1 December 2025, first commit: “Initial commit - NotiaNote v1.0.0 by dontbyshai”.",
        "Then it moved fast:",
        "- 3 December, v1.1.3: clean-up and fixes.\n- 4 December, v1.2.3: the full timetable.\n- 4 December, v1.3.0: school life, plus a security pass.\n- 4 December, evening, v1.4.0: better grades and homework, calendar export, simpler sign-in.",
        "Five versions in four days. The next one is a full rewrite: [[notianote-v2|v2]].",
      ],
    },
  },
  {
    slug: "notianote-v2",
    date: "2026-01-09",
    title: { fr: "NotiaNote v2, le design Galaxy", en: "NotiaNote v2, the Galaxy design" },
    description: {
      fr: "Le 9 janvier 2026 : nouveau design, chiffrement local AES-256 et double authentification.",
      en: "9 January 2026: a new design, local AES-256 encryption and two-factor authentication.",
    },
    paragraphs: {
      fr: [
        "Le 9 janvier 2026, je publie la v2.0.0. Tout le design change : c'est le thème « Galaxy », sombre, que je garde encore aujourd'hui sur l'appli.",
        "Côté sécurité : les données sont chiffrées en local en AES-256, la passerelle ne garde rien sur le serveur, et la double authentification est prise en charge.",
        "Trois jours après, la v2.0.1 corrige les réglages qui se réinitialisaient, le chargement de l'apparence et un bug d'affichage du graphique des notes.",
        "Fin janvier, je travaille le référencement (titres, sitemap, données structurées). Début février, j'ajoute un système de signalement de bugs et j'annonce l'[[notianote-mobile|appli mobile]] sur la page d'accueil.",
      ],
      en: [
        "On 9 January 2026 I released v2.0.0. The whole design changed: it's the dark “Galaxy” theme, which the app still uses today.",
        "On security: data is encrypted locally with AES-256, the gateway keeps nothing on the server, and two-factor authentication is supported.",
        "Three days later, v2.0.1 fixed settings that kept resetting, appearance loading and a display bug in the grades chart.",
        "At the end of January I worked on SEO (titles, sitemap, structured data). In early February I added a bug-report system and announced the [[notianote-mobile|mobile app]] on the home page.",
      ],
    },
  },
  {
    slug: "notianote-mobile",
    date: "2026-01-21",
    title: { fr: "NotiaNote passe sur le téléphone", en: "NotiaNote moves to the phone" },
    description: {
      fr: "Dans la nuit du 20 au 21 janvier 2026, je crée le dépôt de l'appli iOS et Android, en React Native.",
      en: "On the night of 20 to 21 January 2026 I created the repo for the iOS and Android app, in React Native.",
    },
    image: notianoteApp,
    paragraphs: {
      fr: [
        "Dans la nuit du 20 au 21 janvier 2026, je crée NotiaNote-app : la version téléphone de NotiaNote, pour iOS et Android.",
        "Elle est faite en React Native avec Expo, en TypeScript et JavaScript. Il y a aussi du Swift et du Java pour les parties natives (widgets, activité en direct).",
        "Ce qu'on y trouve : les notes avec moyennes, simulation et graphiques, l'emploi du temps synchronisé, le cahier de texte (fait / à faire) avec les pièces jointes, la vie scolaire et la messagerie. Sur Android, un widget affiche la moyenne sur l'écran d'accueil. On peut verrouiller l'appli avec Face ID ou Touch ID.",
        "La sortie sur l'App Store arrive le [[notianote-app-store|3 mars]]. Mi-mars, je prépare déjà le passage à Expo SDK 55.",
      ],
      en: [
        "On the night of 20 to 21 January 2026 I created NotiaNote-app: the phone version of NotiaNote, for iOS and Android.",
        "It's built with React Native and Expo, in TypeScript and JavaScript. There's also Swift and Java for the native parts (widgets, Live Activity).",
        "What's inside: grades with averages, simulation and charts, a synced timetable, a homework diary (done / to do) with attachments, school life and messaging. On Android, a widget shows your average on the home screen. You can lock the app with Face ID or Touch ID.",
        "The App Store release came on [[notianote-app-store|3 March]]. By mid-March I was already preparing the move to Expo SDK 55.",
      ],
    },
  },
  {
    slug: "shai-company",
    date: "2026-02-01",
    title: { fr: "Le site de Shaï Company", en: "The Shaï Company website" },
    description: {
      fr: "Le site vitrine de ma société, en React 19 avec de la 3D. Public sur GitHub.",
      en: "My company's showcase site, in React 19 with some 3D. Public on GitHub.",
    },
    image: {
      src: "/images/shaiscompany-og.png",
      width: 1200,
      height: 630,
      wide: true,
      alt: {
        fr: "Image du site Shaï Company : logo et le texte Shai Company ltd.",
        en: "Shaï Company site image: the logo and the words Shai Company ltd.",
      },
      caption: {
        fr: "Image d'aperçu de shaiscompany.com.",
        en: "Preview image of shaiscompany.com.",
      },
    },
    links: [
      {
        href: "https://shaiscompany.com",
        label: { fr: "shaiscompany.com", en: "shaiscompany.com" },
      },
      {
        href: "https://github.com/Shai-Company-Ltd/Shai-company-website",
        label: { fr: "Dépôt GitHub", en: "GitHub repo" },
      },
    ],
    paragraphs: {
      fr: [
        "Shaï Company, c'est le nom sous lequel je sors mes apps. Le dépôt du site vitrine, Shai-company-website, est créé le 1er février 2026, et le code propre arrive dans la nuit du 2 au 3 août.",
        "Le site est en React 19 et TypeScript avec Vite. Les animations passent par Framer Motion, le fond dégradé par ShaderGradient, et la 3D par React Three Fiber.",
        "Les mises à jour :",
        "- 10 août : pages IA, Web3 et Investissement.\n- 30 août : v1.1, le site devient vraiment lisible sur mobile.\n- 9 octobre : pages légales de Fuel Tracker.\n- 13 novembre : politique de confidentialité complète de Fuel Tracker.",
        "Le site est en ligne sur [shaiscompany.com](https://shaiscompany.com). Pour savoir quelle société porte quel projet, j'ai fait la page [Plan](/plan/).",
      ],
      en: [
        "Shaï Company is the name I ship my apps under. The showcase site repo, Shai-company-website, was created on 1 February 2026, and the clean code landed on the night of 2 to 3 August.",
        "The site is React 19 and TypeScript with Vite. Animations use Framer Motion, the gradient background uses ShaderGradient, and the 3D uses React Three Fiber.",
        "Updates:",
        "- 10 August: AI, Web3 and Investment pages.\n- 30 August: v1.1, the site becomes properly readable on mobile.\n- 9 October: Fuel Tracker legal pages.\n- 13 November: Fuel Tracker's full privacy policy.",
        "The site is live at [shaiscompany.com](https://shaiscompany.com). To see which company runs which project, I made the [Map](/plan/) page.",
      ],
    },
  },
  {
    slug: "notianote-app-store",
    date: "2026-03-03",
    title: { fr: "NotiaNote sort sur l'App Store", en: "NotiaNote is out on the App Store" },
    description: {
      fr: "Le 3 mars 2026, NotiaNote est sur l'App Store, dans la catégorie Éducation. Gratuite.",
      en: "On 3 March 2026 NotiaNote went live on the App Store, in the Education category. Free.",
    },
    links: [
      {
        href: "https://apps.apple.com/fr/app/notianote/id6758548199",
        label: { fr: "App Store", en: "App Store" },
      },
      {
        href: "https://notianote.fr",
        label: { fr: "notianote.fr", en: "notianote.fr" },
      },
    ],
    image: notianoteNotes,
    paragraphs: {
      fr: [
        "Le 3 mars 2026, NotiaNote sort sur l'App Store français. Elle est gratuite, rangée dans Éducation, et tourne à partir d'iOS 15.1. La version Android arrive sur le Play Store début décembre 2026.",
        "Le principe ne change pas : on connecte son compte scolaire, et on retrouve au même endroit les notes, l'emploi du temps et les devoirs. L'écran d'accueil résume la journée : moyenne, devoirs, cours et messages.",
        "Depuis, l'appli continue d'avancer : la [[notianote-uca|connexion à l'UCA]] en septembre, puis la [[notianote-2-7-2|2.7.2]] en octobre. Mi-novembre 2026, elle a une note de 4,5 sur 5 sur l'App Store, avec 16 avis.",
        "Je n'ai pas de chiffres à montrer, mais depuis la rentrée, l'appli grandit fort. Et son IA, [[notianote-ia|Notia]], revient cette semaine, refaite de zéro.",
      ],
      en: [
        "On 3 March 2026 NotiaNote went live on the French App Store. It's free, listed under Education, and runs on iOS 15.1 and later. The Android version is coming to the Play Store in early December 2026.",
        "The idea stays the same: you connect your school account and find your grades, timetable and homework in one place. The home screen sums up the day: average, homework, classes and messages.",
        "Since then the app has kept moving: the [[notianote-uca|UCA sign-in]] in September, then [[notianote-2-7-2|2.7.2]] in October. In mid-November 2026 it's rated 4.5 out of 5 on the App Store, from 16 ratings.",
        "I don't have numbers to show, but since the start of the school year the app has been growing fast. And its AI, [[notianote-ia|Notia]], comes back this week, rebuilt from scratch.",
      ],
    },
  },
  {
    slug: "notianote-connexion",
    date: "2026-05-21",
    title: { fr: "NotiaNote Connexion, en open source", en: "NotiaNote Connexion, open source" },
    description: {
      fr: "Le module qui connecte NotiaNote aux plateformes scolaires, publié en MIT le 21 mai 2026.",
      en: "The module that connects NotiaNote to school platforms, published under MIT on 21 May 2026.",
    },
    links: [
      {
        href: "https://github.com/Shai-Company-Ltd/Notianote-Connexion",
        label: { fr: "Dépôt GitHub", en: "GitHub repo" },
      },
    ],
    paragraphs: {
      fr: [
        "Le 21 mai 2026, je sors de l'appli la partie qui gère les connexions et je la publie à part : Notianote-Connexion, en licence MIT. C'est un module JavaScript, sans interface, que n'importe qui peut réutiliser.",
        "La v1.0.0 couvrait ÉcoleDirecte, Pronote, Smartschool, WebUntis, PowerSchool et Infinite Campus.",
        "Le 23 septembre, je le synchronise avec la dernière version de l'appli et je sors la v2.0.0. Elle ajoute les universités et le CAS (UCA, Moodle, AppScho, Multi-ENT), les cantines (TurboSelf, Izly, Alise) et met à jour Skolengo et Pronote.",
        "C'est la seule partie de NotiaNote dont le code est public : le reste est [[notianote-code-ferme|fermé depuis juin]].",
      ],
      en: [
        "On 21 May 2026 I pulled the part of the app that handles sign-in out and published it on its own: Notianote-Connexion, under the MIT license. It's a JavaScript module, with no UI, that anyone can reuse.",
        "v1.0.0 covered ÉcoleDirecte, Pronote, Smartschool, WebUntis, PowerSchool and Infinite Campus.",
        "On 23 September I synced it with the latest app and released v2.0.0. It adds universities and CAS (UCA, Moodle, AppScho, Multi-ENT), school canteens (TurboSelf, Izly, Alise) and updates Skolengo and Pronote.",
        "It's the only part of NotiaNote whose code is public: the rest has been [[notianote-code-ferme|closed since June]].",
      ],
    },
  },
  {
    slug: "notianote-code-ferme",
    date: "2026-06-01",
    title: { fr: "Le code de NotiaNote devient privé", en: "NotiaNote's code goes private" },
    description: {
      fr: "Avec les CGU du 1er juin 2026, le code de NotiaNote n'est plus open source. Seul le connecteur reste public.",
      en: "With the terms of 1 June 2026, NotiaNote's code is no longer open source. Only the connector stays public.",
    },
    paragraphs: {
      fr: [
        "Depuis les CGU du 1er juin 2026 sur notianote.fr, le code de NotiaNote est propriétaire. L'appli web et l'appli mobile sont dans des dépôts privés.",
        "Une partie reste ouverte : [[notianote-connexion|NotiaNote Connexion]], le module de connexion aux plateformes scolaires, toujours en licence MIT.",
      ],
      en: [
        "Since the terms of 1 June 2026 on notianote.fr, NotiaNote's code is proprietary. The web app and the mobile app live in private repos.",
        "One part stays open: [[notianote-connexion|NotiaNote Connexion]], the module that signs in to school platforms, still under the MIT license.",
      ],
    },
  },
  {
    slug: "left-to-live",
    date: "2026-08-03",
    title: { fr: "Left To Live : le compte à rebours", en: "Left To Live: the countdown" },
    description: {
      fr: "Une appli iPhone et Apple Watch en Swift qui transforme ton espérance de vie en compte à rebours.",
      en: "An iPhone and Apple Watch app in Swift that turns your life expectancy into a countdown.",
    },
    image: leftIcon,
    paragraphs: {
      fr: [
        "Dans la nuit du 2 au 3 août 2026, je pousse Left To Live sur GitHub, dans le dépôt privé left-to-life : d'abord les documents légaux, puis l'appli, puis le README.",
        "C'est un memento mori. À partir des données de santé (HealthKit), l'appli estime ton espérance de vie et l'affiche en compte à rebours, en années, en jours et en battements de cœur restants. Le compte tourne aussi sur l'Apple Watch.",
        "Elle montre aussi l'effet de tes habitudes (sommeil, nutrition, sédentarité) et propose un testament numérique : un coffre protégé par Face ID pour laisser des messages à tes proches.",
        "Tout est en Swift, avec HealthKit et un App Group pour partager les données avec la montre. Elle sort sur l'App Store le [[left-to-live-app-store|20 août]].",
      ],
      en: [
        "On the night of 2 to 3 August 2026 I pushed Left To Live to GitHub, in the private left-to-life repo: first the legal documents, then the app, then the README.",
        "It's a memento mori. From your health data (HealthKit), the app estimates your life expectancy and shows it as a countdown, in years, days and heartbeats left. The countdown also runs on Apple Watch.",
        "It also shows the effect of your habits (sleep, nutrition, sitting) and offers a digital will: a vault locked with Face ID to leave messages for the people close to you.",
        "It's all Swift, with HealthKit and an App Group to share data with the watch. It hit the App Store on [[left-to-live-app-store|20 August]].",
      ],
    },
  },
  {
    slug: "love-map",
    date: "2026-08-10",
    title: { fr: "Love Map", en: "Love Map" },
    description: {
      fr: "Une appli pour noter mes relations et mes souvenirs sur une carte, et les partager avec mes potes. Pas encore sortie.",
      en: "An app to put your relationships and memories on a map, and share them with your friends. Not out yet.",
    },
    links: [
      {
        href: "https://shaiscompany.com/love-map/privacy",
        label: { fr: "Confidentialité", en: "Privacy" },
      },
      {
        href: "https://shaiscompany.com/love-map/cgu",
        label: { fr: "CGU", en: "Terms" },
      },
    ],
    image: loveMapIcon,
    paragraphs: {
      fr: [
        "Love Map, c'est une carte où tu notes tes relations et tes souvenirs, et que tu peux partager avec tes potes. Une sorte de réseau social : tu ajoutes tes amis, ta copine ou ton copain, et tu vois ce qu'ils vivent côté cœur. L'idée, c'est de partager ta vie amoureuse et ta vie entre amis.",
        "Le 10 août 2026, je pousse le premier commit, dans un dépôt privé. Il y a une partie iOS en Swift et une partie Android en Kotlin.",
        "Le 9 novembre, Love Map a ses pages de confidentialité et de CGU sur le site de Shaï Company. L'appli n'est pas encore sur les stores, et je n'ai pas encore fixé de date de sortie.",
      ],
      en: [
        "Love Map is a map where you note your relationships and your memories, and that you can share with your friends. A kind of social network: you add your friends, your girlfriend or boyfriend, and you see what's going on in their love lives. The idea is to share your love life and your life with friends.",
        "On 10 August 2026 I pushed the first commit, in a private repo. There's an iOS side in Swift and an Android side in Kotlin.",
        "On 9 November Love Map got its privacy and terms pages on the Shaï Company site. The app isn't in the stores yet, and I haven't set a release date.",
      ],
    },
  },
  {
    slug: "solarscan",
    date: "2026-08-13",
    title: { fr: "SolarScan : des devis à partir d'images satellite", en: "SolarScan: quotes from satellite images" },
    description: {
      fr: "Un logiciel pour les nettoyeurs de panneaux solaires : il repère les panneaux sur les toits et sort un devis PDF.",
      en: "Software for solar-panel cleaners: it spots panels on roofs and produces a PDF quote.",
    },
    image: {
      src: "/images/solarscan-logo.webp",
      width: 640,
      height: 427,
      wide: true,
      alt: {
        fr: "Logo SolarScan : un soleil jaune, le mot SOLAR en jaune et SCAN en noir.",
        en: "SolarScan logo: a yellow sun, SOLAR in yellow and SCAN in black.",
      },
      caption: { fr: "Logo de SolarScan.", en: "SolarScan logo." },
    },
    links: [
      {
        href: "https://github.com/Dontbyshai/SolarScan",
        label: { fr: "Dépôt GitHub", en: "GitHub repo" },
      },
    ],
    paragraphs: {
      fr: [
        "SolarScan, c'est un logiciel pour les pros du nettoyage de panneaux solaires. Tu tapes une adresse, il charge l'image satellite de l'IGN, repère les panneaux sur le toit, calcule leur surface en m² et génère un devis PDF avec l'aperçu annoté. Il y a aussi un export CSV pour Excel. Comme les images viennent de l'IGN, ça ne marche qu'en France.",
        "C'est une app Electron (HTML, CSS, JavaScript et Leaflet pour la carte) avec un backend FastAPI en Python. Les adresses passent par Nominatim (OpenStreetMap), et le PDF est rendu par Chromium.",
        "## Les versions",
        "- 13 août 2026, v1.0.0 : la première version, avec l'icône et un workflow GitHub qui fabrique l'installeur Mac.\n- 6 septembre : proxy pour Nominatim (moins de blocages), sauvegarde de la session entre deux ouvertures, PDF découpé en modules.\n- 15 novembre, v1.5 : dossier utilisateur, moteur local plus solide, devis revus, meilleure gestion des erreurs réseau, et des installeurs Mac et Windows construits automatiquement.",
        "Le code est public, en licence MIT.",
      ],
      en: [
        "SolarScan is software for people who clean solar panels. You type an address, it loads the IGN satellite image, spots the panels on the roof, computes their area in m² and generates a PDF quote with an annotated preview. There's also a CSV export for Excel. Since the images come from IGN, it only works in France.",
        "It's an Electron app (HTML, CSS, JavaScript and Leaflet for the map) with a FastAPI backend in Python. Addresses go through Nominatim (OpenStreetMap), and the PDF is rendered by Chromium.",
        "## Versions",
        "- 13 August 2026, v1.0.0: the first version, with the icon and a GitHub workflow that builds the Mac installer.\n- 6 September: a proxy for Nominatim (fewer blocks), the session saved between launches, PDF generation split into modules.\n- 15 November, v1.5: a user folder, a sturdier local engine, reworked quotes, better network-error handling, and Mac and Windows installers built automatically.",
        "The code is public, under the MIT license.",
      ],
    },
  },
  {
    slug: "shaicraft-economy",
    date: "2026-08-13",
    title: { fr: "ShaiCraft Economy, mon mod Minecraft", en: "ShaiCraft Economy, my Minecraft mod" },
    description: {
      fr: "Un mod Fabric pour Minecraft 1.21.1 : économie de survie et trading crypto en jeu, avec les prix Binance.",
      en: "A Fabric mod for Minecraft 1.21.1: a survival economy and in-game crypto trading, with Binance prices.",
    },
    links: [
      {
        href: "https://github.com/Dontbyshai/shaicraft-economy",
        label: { fr: "Dépôt GitHub", en: "GitHub repo" },
      },
    ],
    image: shaicraftIcon,
    paragraphs: {
      fr: [
        "ShaiCraft Economy, c'est mon mod pour Minecraft 1.21.1, sous Fabric. Il ajoute une vraie économie en survie (`/balance`, `/pay`, `/shop`) et un simulateur de trading crypto branché sur les prix réels de Binance : positions long ou short, levier, liquidations, suivi des gains. Avec Cobblemon, il y a aussi un hôtel des ventes pour les Pokémon (`/hdv`).",
        "## Les versions",
        "- 13 août 2026, v1.0.0 : la première version.\n- 15 novembre, v1.1.0 : les prix crypto sont lus côté serveur (plus moyen d'acheter du Bitcoin à 1 € avec un client modifié), la sauvegarde des soldes est fiabilisée, les commandes admin demandent la permission opérateur, et le mod se compile partout avec une CI GitHub. Trois nouveautés : `/historique`, une taxe réglable sur `/pay` (2 % par défaut) et `/baltop`.",
        "C'est du Java 21, avec Gradle. Le code est public, en licence MIT.",
      ],
      en: [
        "ShaiCraft Economy is my mod for Minecraft 1.21.1, on Fabric. It adds a real survival economy (`/balance`, `/pay`, `/shop`) and a crypto trading simulator wired to live Binance prices: long or short positions, leverage, liquidations, profit tracking. With Cobblemon there's also a Pokémon auction house (`/hdv`).",
        "## Versions",
        "- 13 August 2026, v1.0.0: the first version.\n- 15 November, v1.1.0: crypto prices are read server-side (no more buying Bitcoin for €1 with a modded client), balance saving is more reliable, admin commands need operator permission, and the mod builds anywhere with GitHub CI. Three new things: `/historique`, an adjustable tax on `/pay` (2% by default) and `/baltop`.",
        "It's Java 21, with Gradle. The code is public, under the MIT license.",
      ],
    },
  },
  {
    slug: "animation-manim",
    date: "2026-08-18",
    title: { fr: "Des animations maths avec Manim", en: "Math animations with Manim" },
    description: {
      fr: "Des vidéos verticales de maths générées en Python, dont une pizza en 3D.",
      en: "Vertical math videos generated in Python, including a 3D pizza.",
    },
    links: [
      {
        href: "https://github.com/Dontbyshai/Animation",
        label: { fr: "Dépôt GitHub", en: "GitHub repo" },
      },
    ],
    paragraphs: {
      fr: [
        "Petit projet de fin d'été : des animations mathématiques au format vertical, codées en Python avec la librairie Manim.",
        "Le dépôt Animation est créé dans la nuit du 17 au 18 août 2026. Le 20 août, j'ajoute une animation de pizza en 3D pensée pour TikTok. Deux commits, c'est tout : c'était surtout pour tester Manim.",
      ],
      en: [
        "A small end-of-summer project: vertical math animations, coded in Python with the Manim library.",
        "The Animation repo was created on the night of 17 to 18 August 2026. On 20 August I added a 3D pizza animation made for TikTok. Two commits, that's it: it was mostly to try Manim.",
      ],
    },
  },
  {
    slug: "shai-biz",
    date: "2026-08-18",
    title: { fr: "shai.biz, ce site", en: "shai.biz, this site" },
    description: {
      fr: "Mon site perso et mon blog, en Astro. Lancé en août 2026, refonte en cours depuis novembre.",
      en: "My personal site and blog, in Astro. Started in August 2026, redesign in progress since November.",
    },
    links: [
      {
        href: "https://github.com/Dontbyshai/shai.biz",
        label: { fr: "Dépôt GitHub", en: "GitHub repo" },
      },
    ],
    paragraphs: {
      fr: [
        "Le dépôt shai.biz est créé le 17 août 2026, et la première version arrive le lendemain : accueil, blog, projets et page à propos.",
        "En novembre 2026, je commence à le réécrire entièrement. Cette refonte est encore en développement, elle n'est pas en ligne. C'est toujours de l'Astro en TypeScript, et tout le reste est neuf : l'accueil en tuiles, la carte de la Chaîne des Puys, le calendrier de contributions GitHub récupéré au moment du build, le thème clair et sombre, la version anglaise, et la page [Plan](/plan/).",
      ],
      en: [
        "The shai.biz repo was created on 17 August 2026, and the first version landed the next day: home, blog, projects and an about page.",
        "In November 2026 I started rewriting it completely. The redesign is still in development and isn't live. It's still Astro in TypeScript, and everything else is new: the tiled home page, the Chaîne des Puys map, the GitHub contributions calendar fetched at build time, light and dark themes, the English version, and the [Map](/plan/) page.",
      ],
    },
  },
  {
    slug: "profil-github",
    date: "2026-08-18",
    title: { fr: "Mon README GitHub", en: "My GitHub README" },
    description: {
      fr: "La page qui me présente sur github.com/Dontbyshai, créée le 18 août 2026.",
      en: "The page that introduces me on github.com/Dontbyshai, created on 18 August 2026.",
    },
    links: [
      {
        href: "https://github.com/Dontbyshai/dontbyshai",
        label: { fr: "Dépôt du profil", en: "Profile repo" },
      },
    ],
    paragraphs: {
      fr: [
        "Le 18 août 2026, je crée le dépôt Dontbyshai/dontbyshai : c'est le README qui s'affiche en haut de mon profil GitHub. Je le règle dans la nuit, puis je le retouche fin octobre. 8 commits.",
        "Il me présente comme développeur full-stack, intéressé par le hacking éthique et la cybersécurité, avec les technos que j'utilise : JavaScript, TypeScript, React, Vue, Swift, Kotlin, Node.js, PHP, Astro, C++, Linux et Kali.",
      ],
      en: [
        "On 18 August 2026 I created the Dontbyshai/dontbyshai repo: it's the README shown at the top of my GitHub profile. I set it up that same night, then tweaked it at the end of October. 8 commits.",
        "It introduces me as a full-stack developer into ethical hacking and cybersecurity, with the tools I use: JavaScript, TypeScript, React, Vue, Swift, Kotlin, Node.js, PHP, Astro, C++, Linux and Kali.",
      ],
    },
  },
  {
    slug: "left-to-live-app-store",
    date: "2026-08-20",
    title: { fr: "Left To Live sort sur l'App Store", en: "Left To Live is out on the App Store" },
    description: {
      fr: "Le 20 août 2026, la version 1.0 de Left To Live est sur l'App Store, avec l'Apple Watch.",
      en: "On 20 August 2026, Left To Live 1.0 went live on the App Store, with Apple Watch.",
    },
    image: leftIcon,
    links: [
      {
        href: "https://apps.apple.com/fr/app/left-to-live/id6793693539",
        label: { fr: "App Store", en: "App Store" },
      },
      {
        href: "https://shaiscompany.com/left-to-live/privacy",
        label: { fr: "Confidentialité", en: "Privacy" },
      },
    ],
    paragraphs: {
      fr: [
        "Le 20 août 2026, Left To Live 1.0 sort sur l'App Store, dans la catégorie Santé et forme. Elle est gratuite et demande iOS 26.1.",
        "Sur l'iPhone et sur l'Apple Watch, elle affiche le temps qu'il te reste en années, en jours et en battements de cœur. J'ai raconté sa construction dans l'article du [[left-to-live|3 août]].",
        "Des mises à jour sont prévues pour la fin de l'année.",
      ],
      en: [
        "On 20 August 2026, Left To Live 1.0 went live on the App Store, under Health & Fitness. It's free and needs iOS 26.1.",
        "On iPhone and Apple Watch it shows the time you have left in years, days and heartbeats. I wrote about building it in the [[left-to-live|3 August]] post.",
        "Updates are planned for the end of the year.",
      ],
    },
  },
  {
    slug: "obsidianrat",
    date: "2026-09-02",
    title: { fr: "ObsidianRAT, un projet de recherche", en: "ObsidianRAT, a research project" },
    description: {
      fr: "Un outil d'accès à distance pour Windows avec son panneau web, publié pour l'étude. 46 commits en cinq jours.",
      en: "A Windows remote-access tool with a web panel, published for study. 46 commits in five days.",
    },
    image: {
      src: "/images/obsidianrat-logo.webp",
      width: 512,
      height: 512,
      alt: {
        fr: "Logo ObsidianRAT : un rat stylisé devant une forme violette.",
        en: "ObsidianRAT logo: a stylised rat in front of a purple shape.",
      },
      caption: { fr: "Logo d'ObsidianRAT.", en: "ObsidianRAT logo." },
    },
    links: [
      {
        href: "https://github.com/Dontbyshai/ObsidianRAT",
        label: { fr: "Dépôt GitHub", en: "GitHub repo" },
      },
    ],
    paragraphs: {
      fr: [
        "Début septembre 2026, je bosse sur ObsidianRAT, un projet de recherche en cybersécurité. C'est un fork très retravaillé de win-rat : un agent Windows en C# (.NET 4.7.2) et un panneau de contrôle web en PHP/Laravel et React.",
        "Le dépôt est ouvert le 2 septembre, et j'enchaîne 46 commits jusqu'au 6 : corrections de l'agent, CI GitHub Actions qui compile tout (MSBuild et ILRepack), puis le nom ObsidianRAT et un déploiement propre sur VPS.",
        "Le README le dit clairement : c'est pour apprendre et tester dans un cadre autorisé, pas pour s'en servir contre quelqu'un.",
      ],
      en: [
        "In early September 2026 I worked on ObsidianRAT, a cybersecurity research project. It's a heavily reworked fork of win-rat: a Windows agent in C# (.NET 4.7.2) and a web control panel in PHP/Laravel and React.",
        "The repo opened on 2 September, and I pushed 46 commits up to the 6th: agent fixes, a GitHub Actions CI that builds everything (MSBuild and ILRepack), then the ObsidianRAT name and a clean VPS deployment.",
        "The README says it plainly: it's for learning and testing in an authorised setting, not for use against anyone.",
      ],
    },
  },
  {
    slug: "notianote-uca",
    date: "2026-09-23",
    title: { fr: "NotiaNote et le portail de l'UCA", en: "NotiaNote and the UCA student portal" },
    description: {
      fr: "Le 23 septembre 2026, NotiaNote se connecte au portail de l'Université Clermont Auvergne.",
      en: "On 23 September 2026, NotiaNote learns to sign in to the Université Clermont Auvergne portal.",
    },
    links: [
      {
        href: "https://github.com/Shai-Company-Ltd/notianote-uca-integration",
        label: { fr: "Dépôt GitHub", en: "GitHub repo" },
      },
    ],
    paragraphs: {
      fr: [
        "Le 23 septembre 2026, je publie notianote-uca-integration : comment j'ai branché le portail de l'Université Clermont Auvergne dans NotiaNote. Emploi du temps ADE, notes Pégase et Apogée, cours Moodle.",
        "La technique : l'étudiant se connecte dans une WebView, l'appli récupère les cookies CAS, puis un driver en TypeScript, `UCADriver.ts`, les réutilise pour lire les mails, l'emploi du temps, les notes et les devoirs.",
        "Dans l'appli, ça sort avec la v2.7 le 11 septembre (« UCA Integration »). Le code part aussi dans [[notianote-connexion|NotiaNote Connexion]].",
      ],
      en: [
        "On 23 September 2026 I published notianote-uca-integration: how I plugged the Université Clermont Auvergne portal into NotiaNote. ADE timetable, Pégase and Apogée grades, Moodle courses.",
        "How it works: the student signs in inside a WebView, the app picks up the CAS cookies, then a TypeScript driver, `UCADriver.ts`, reuses them to read emails, the timetable, grades and homework.",
        "In the app, it shipped with v2.7 on 11 September (“UCA Integration”). The code also went into [[notianote-connexion|NotiaNote Connexion]].",
      ],
    },
  },
  {
    slug: "fuel-tracker",
    date: "2026-09-23",
    title: { fr: "Fuel Tracker", en: "Fuel Tracker" },
    description: {
      fr: "Une appli pour trouver le carburant ou la recharge au meilleur prix, en Expo et React Native. Encore un prototype.",
      en: "An app to find fuel or charging at the best price, in Expo and React Native. Still a prototype.",
    },
    links: [
      {
        href: "https://shaiscompany.com/fuel-tracker/privacy",
        label: { fr: "Confidentialité", en: "Privacy" },
      },
    ],
    image: fuelIcon,
    paragraphs: {
      fr: [
        "Fuel Tracker, c'est une appli iOS et Android pour savoir où faire le plein ou recharger au meilleur prix. Elle affiche sur une carte les stations-service, les bornes de recharge et les stations hydrogène avec les prix en direct, à partir des données ouvertes officielles : France, Espagne, Portugal, Andorre, Autriche, Allemagne et Royaume-Uni.",
        "On peut calculer le coût d'un plein, voir l'historique des prix, garder des favoris, recevoir des alertes et signaler un prix. Les comptes passent par Apple, Google ou l'e-mail (Firebase), et l'appli existe en cinq langues. Une partie de la couche données vient du projet open source Plein (licence MIT), crédité dans l'appli.",
        "## Le chemin",
        "- 23 septembre 2026 : premier commit, avec create-expo.\n- 5 octobre : publicités AdMob et connexion Google native.\n- 2 novembre : plus de pays, préparation de la sortie Play Store.\n- 13 novembre : corrections demandées par la review d'Apple (règles 4.3 et 4.2.6) : suppression de compte dans les réglages, localisation seulement pendant l'utilisation, publicités qui respectent le suivi (ATT), manifeste de confidentialité. Et des règles de sécurité Firestore.\n- 15 novembre : tag v1.0.0-release.",
        "C'est du TypeScript, avec Expo, Firebase et AdMob. Pour l'instant, Fuel Tracker est un prototype : le dossier est soumis à Apple, mais l'appli n'est pas encore sur l'App Store.",
      ],
      en: [
        "Fuel Tracker is an iOS and Android app to find where to fill up or charge for the best price. It maps petrol stations, charging points and hydrogen stations with live prices, from official open data: France, Spain, Portugal, Andorra, Austria, Germany and the UK.",
        "You can work out the cost of a fill-up, see price history, keep favourites, get alerts and report a price. Accounts go through Apple, Google or email (Firebase), and the app comes in five languages. Part of the data layer comes from the open-source project Plein (MIT), credited in the app.",
        "## The road so far",
        "- 23 September 2026: first commit, with create-expo.\n- 5 October: AdMob ads and native Google sign-in.\n- 2 November: more countries, getting ready for the Play Store.\n- 13 November: fixes asked for by Apple's review (guidelines 4.3 and 4.2.6): account deletion in settings, location only while in use, ads that respect tracking (ATT), a privacy manifest. Plus Firestore security rules.\n- 15 November: tag v1.0.0-release.",
        "It's TypeScript, with Expo, Firebase and AdMob. For now Fuel Tracker is a prototype: it has been submitted to Apple, but the app isn't on the App Store yet.",
      ],
    },
  },
  {
    slug: "notianote-2-7-2",
    date: "2026-10-07",
    title: { fr: "NotiaNote 2.7.2", en: "NotiaNote 2.7.2" },
    description: {
      fr: "Le 7 octobre 2026 : un gros correctif pour les connexions Pronote et ÉcoleDirecte.",
      en: "7 October 2026: a big fix for Pronote and ÉcoleDirecte sign-ins.",
    },
    links: [
      {
        href: "https://apps.apple.com/fr/app/notianote/id6758548199",
        label: { fr: "App Store", en: "App Store" },
      },
    ],
    image: notianoteEdt,
    paragraphs: {
      fr: [
        "Le 7 octobre 2026, la version 2.7.2 de NotiaNote sort sur l'App Store. C'est un correctif : les connexions à Pronote et à ÉcoleDirecte posaient problème, elles remarchent normalement. Il y a aussi des corrections de stabilité.",
        "## Les versions d'avant",
        "- 20 mai, 2.5 : grosse mise à jour, avec l'appli Apple Watch, les widgets iOS, les icônes sombres et teintées d'iOS 18, une connexion Pronote plus rapide, et la première version de [[notianote-ia|Notia]], l'IA (ratée, je l'ai refaite depuis).\n- 21 mai, 2.5.1 : téléchargement des pièces jointes des devoirs réparé, plus de plantage du verrouillage biométrique, graphique de l'accueil corrigé.\n- 11 août, 2.5.2 : corrections sur les achats intégrés, la moyenne et les devoirs.\n- 11 septembre, 2.7 : la [[notianote-uca|connexion à l'UCA]] et des retouches d'interface.\n- 27 septembre, 2.7.1 : correction du lien de l'activité en direct dans la Dynamic Island.",
      ],
      en: [
        "On 7 October 2026, NotiaNote 2.7.2 went out on the App Store. It's a fix: sign-ins to Pronote and ÉcoleDirecte were failing, and they work again. There are stability fixes too.",
        "## Earlier versions",
        "- 20 May, 2.5: a big update, with the Apple Watch app, iOS widgets, iOS 18 dark and tinted icons, faster Pronote sign-in, and the first version of [[notianote-ia|Notia]], the AI (a miss, I've rebuilt it since).\n- 21 May, 2.5.1: homework attachment downloads fixed, no more biometric-lock crash, home chart fixed.\n- 11 August, 2.5.2: fixes for in-app purchases, the average and homework.\n- 11 September, 2.7: the [[notianote-uca|UCA sign-in]] and UI touch-ups.\n- 27 September, 2.7.1: fixed the Live Activity link in the Dynamic Island.",
      ],
    },
  },
  {
    slug: "kairo",
    date: "2026-10-20",
    title: { fr: "Kairo, mon moteur de trading", en: "Kairo, my trading engine" },
    description: {
      fr: "Un bot de trading crypto en Python, 18 versions en huit jours, puis archivé. Il a mené à Bitixe.",
      en: "A crypto trading bot in Python, 18 versions in eight days, then archived. It led to Bitixe.",
    },
    links: [
      {
        href: "https://github.com/Shai-Company-Ltd/kairo",
        label: { fr: "Dépôt GitHub", en: "GitHub repo" },
      },
    ],
    paragraphs: {
      fr: [
        "Le 20 octobre 2026 au soir, je lance la v4.0 de mon moteur de trading, d'abord en mode papier (sans argent réel). Il s'appelle encore Trading v4. Il tourne en Python sur un VPS, 24 h sur 24, et trade le BTCUSDT sur Bitunix.",
        "Il calcule des indicateurs (EMA, RSI, ATR, VWAP, ADX, OBV), cherche des setups (cassure, pullback, RSI), et fait des comptes rendus à une équipe d'agents IA : scalpeur, intraday, swing, risque et journal.",
        "## Huit jours de versions",
        "- 21 octobre, v4.0.1 : passage en réel.\n- 22 octobre, v4.0-stable puis v4.1 : stop et take profit par trade avec réparation automatique, récap toutes les 3 heures, filtre ADX.\n- 23 au 25 octobre, v4.2 à v4.2.6 : prise de gain partielle, suivi des ordres par identifiant, entrées limite avec délai, calcul du capital total pour le kill switch.\n- 28 octobre, v4.2.7 puis v4.3.0 : le moteur ne touche plus jamais aux positions manuelles, filtres de tendance, risque à 3 %. Je le renomme Kairo 1.",
        "Le même jour, je commence [[bitixe|Bitixe]], et Kairo s'arrête là. Le 15 novembre, je fais le ménage dans le dépôt et je l'archive. Le README le précise : ce n'est pas fait pour trader de l'argent réel.",
      ],
      en: [
        "On the evening of 20 October 2026 I started v4.0 of my trading engine, first in paper mode (no real money). It was still called Trading v4. It runs in Python on a VPS, around the clock, and trades BTCUSDT on Bitunix.",
        "It computes indicators (EMA, RSI, ATR, VWAP, ADX, OBV), looks for setups (breakout, pullback, RSI), and reports to a team of AI agents: scalper, intraday, swing, risk and journal.",
        "## Eight days of versions",
        "- 21 October, v4.0.1: going live.\n- 22 October, v4.0-stable then v4.1: per-trade stop and take profit with automatic repair, a recap every 3 hours, an ADX filter.\n- 23 to 25 October, v4.2 to v4.2.6: partial profit-taking, order tracking by ID, limit entries with a timeout, total equity for the kill switch.\n- 28 October, v4.2.7 then v4.3.0: the engine never touches manual positions, trend filters, 3% risk. I renamed it Kairo 1.",
        "That same day I started [[bitixe|Bitixe]], and Kairo stopped there. On 15 November I cleaned up the repo and archived it. The README says so: it's not meant for trading real money.",
      ],
    },
  },
  {
    slug: "bitixe",
    date: "2026-10-29",
    title: { fr: "Bitixe, ma plateforme de trading", en: "Bitixe, my trading platform" },
    description: {
      fr: "Commencée le 28 octobre 2026, plus de 60 versions en deux semaines. Ouverture le 8 décembre, prévue sur BNB Smart Chain.",
      en: "Started on 28 October 2026, more than 60 versions in two weeks. Launching on 8 December, planned on BNB Smart Chain.",
    },
    links: [
      {
        href: "https://bitixe.com",
        label: { fr: "bitixe.com", en: "bitixe.com" },
      },
    ],
    image: bitixeShot,
    paragraphs: {
      fr: [
        "Le 28 octobre 2026 au matin, je commence un nouveau projet, qui s'appelle d'abord Essaim. Un peu plus d'une heure après, je le renomme Bitixe. L'idée : rendre le trading crypto simple, en français.",
        "Le serveur est en Python (Flask, SQLite, waitress, derrière Nginx), et l'interface en JavaScript, HTML et CSS. Le compte se crée avec Google, Apple ou un e-mail, et c'est un portefeuille non custodial : les fonds restent à l'utilisateur.",
        "## Deux semaines de versions",
        "- 29 octobre, v0.9.0-beta : nouvel accueil et première bêta. Le soir même, v0.10 et v0.11 : connexion des portefeuilles (EIP-6963, WalletConnect), copy trading avec page détail, parrainage, classement, prix de liquidation estimé.\n- 30 octobre, de la v0.11.5 à la v0.12.28 : graphiques avec les positions, portefeuille complet, compte Bitixe avec portefeuille intégré, achat par carte ou virement, échanges entre réseaux, et les actions, matières premières et obligations en plus des cryptos.\n- 2 et 3 novembre : nouvelle page d'accueil, l'appli passe sur app.bitixe.com, et des tests de frais de réseau offerts sur le réseau de test.\n- 11 novembre, v0.13 : TP/SL simplifiés, gain estimé, partage d'un trade avec une carte de résultat, appli installable sur le téléphone.",
        "Pour l'instant, le site est fermé au public : [bitixe.com](https://bitixe.com) affiche un compte à rebours jusqu'au lancement, le 8 décembre 2026. La date est confirmée, et le lancement est prévu sur BNB Smart Chain. Il est né juste après [[kairo|Kairo]], mais le moteur Kairo n'est pas dedans.",
      ],
      en: [
        "On the morning of 28 October 2026 I started a new project, first called Essaim. A little over an hour later I renamed it Bitixe. The idea: make crypto trading simple, in French.",
        "The server is Python (Flask, SQLite, waitress, behind Nginx), and the interface is JavaScript, HTML and CSS. You sign up with Google, Apple or an email, and it's a non-custodial wallet: the funds stay with the user.",
        "## Two weeks of versions",
        "- 29 October, v0.9.0-beta: a new home page and the first beta. That same evening, v0.10 and v0.11: wallet connection (EIP-6963, WalletConnect), copy trading with a detail page, referrals, a leaderboard, estimated liquidation price.\n- 30 October, v0.11.5 to v0.12.28: charts showing positions, a full portfolio, a Bitixe account with a built-in wallet, buying by card or bank transfer, cross-chain swaps, and stocks, commodities and bonds on top of crypto.\n- 2 and 3 November: a new home page, the app moves to app.bitixe.com, and tests of sponsored network fees on the testnet.\n- 11 November, v0.13: simpler TP/SL, estimated profit, sharing a trade as a result card, an app you can install on your phone.",
        "For now the site is closed to the public: [bitixe.com](https://bitixe.com) shows a countdown to the launch, on 8 December 2026. The date is confirmed, and the launch is planned on BNB Smart Chain. It was born right after [[kairo|Kairo]], but the Kairo engine isn't in it.",
      ],
    },
  },
  {
    slug: "shaiscompany-deploiement",
    date: "2026-11-02",
    title: { fr: "Le petit outil qui met à jour shaiscompany.com", en: "The little tool that updates shaiscompany.com" },
    description: {
      fr: "Des scripts Python pour modifier et déployer le site de Shaï Company, en novembre 2026.",
      en: "Python scripts to edit and deploy the Shaï Company site, in November 2026.",
    },
    links: [
      {
        href: "https://shaiscompany.com",
        label: { fr: "shaiscompany.com", en: "shaiscompany.com" },
      },
    ],
    image: shaiscompanySite,
    paragraphs: {
      fr: [
        "Le 2 novembre 2026, je crée un dépôt privé, shaiscompany, pour mettre à jour le site de [[shai-company|Shaï Company]] sans repartir du code React : un script Python, `patch.py`, modifie directement le site compilé, puis le dossier `dist/` part en ligne derrière Nginx.",
        "Le soir même, je passe le site en version statique optimisée, j'ajoute les nouvelles apps, le vrai logo de Bitixe (le B avec une bougie) et un aperçu de l'appli Bitixe en trois captures. Le 9 novembre, Love Map a ses propres pages de confidentialité et de CGU.",
      ],
      en: [
        "On 2 November 2026 I created a private repo, shaiscompany, to update the [[shai-company|Shaï Company]] site without going back to the React code: a Python script, `patch.py`, edits the built site directly, then the `dist/` folder goes live behind Nginx.",
        "That evening I switched the site to an optimised static build, added the new apps, the real Bitixe logo (the B with a candle) and a three-screenshot preview of the Bitixe app. On 9 November, Love Map got its own privacy and terms pages.",
      ],
    },
  },
  {
    slug: "serpentix",
    date: "2026-11-09",
    title: { fr: "Serpentix, un Snake multijoueur pour la NSI", en: "Serpentix, a multiplayer Snake for school" },
    description: {
      fr: "Projet NSI : un site Flask avec une base SQLite et un jeu entre Snake et Slither.io, jusqu'à 3 joueurs.",
      en: "School project: a Flask site with a SQLite database and a game between Snake and Slither.io, up to 3 players.",
    },
    links: [
      {
        href: "https://github.com/Dontbyshai/Serpentix",
        label: { fr: "Dépôt GitHub", en: "GitHub repo" },
      },
    ],
    image: serpentixShot,
    paragraphs: {
      fr: [
        "Serpentix, c'est mon projet de NSI de novembre 2026 : un site web en Flask avec une base SQLite, et un jeu dans le navigateur entre Snake et Slither.io.",
        "Le 9 novembre, je pousse tout en 14 commits. Il y a les comptes (mots de passe hachés, jeton CSRF), une boutique de skins avec des pièces, un classement en SQL qu'on peut trier, un mode solo et des parties en temps réel à 2 ou 3 joueurs avec Socket.IO.",
        "Pour le jeu : collisions case par case, bouclier, compte à rebours et des bonus comme le fantôme, l'aimant, les ciseaux ou le gel. Le tout est couvert par 31 tests unitaires, avec une interface entièrement en noir et blanc et des contrôles tactiles.",
      ],
      en: [
        "Serpentix is my November 2026 computer-science project: a Flask website with a SQLite database, and a browser game somewhere between Snake and Slither.io.",
        "On 9 November I pushed it all in 14 commits. There are accounts (hashed passwords, CSRF token), a skin shop with coins, a sortable SQL leaderboard, a solo mode and real-time matches for 2 or 3 players with Socket.IO.",
        "For the game: cell-by-cell collisions, a shield, a countdown and power-ups like ghost, magnet, scissors or freeze. It's covered by 31 unit tests, with a fully black-and-white interface and touch controls.",
      ],
    },
  },
  {
    slug: "notianote-ia",
    date: "2026-11-16",
    title: { fr: "Notia 2 : j'ai refait l'IA de NotiaNote", en: "Notia 2: I rebuilt NotiaNote's AI" },
    description: {
      fr: "La première version de mon IA était ratée. Je l'ai refaite de zéro : la nouvelle Notia sort cette semaine.",
      en: "The first version of my AI was a miss. I rebuilt it from scratch: the new Notia comes out this week.",
    },
    image: notianoteIa,
    links: [
      {
        href: "https://ia.notianote.fr",
        label: { fr: "ia.notianote.fr", en: "ia.notianote.fr" },
      },
      {
        href: "https://notianote.fr/ia",
        label: { fr: "notianote.fr/ia", en: "notianote.fr/ia" },
      },
    ],
    paragraphs: {
      fr: [
        "Je vais être honnête sur Notia, l'IA de NotiaNote. La première version est sortie le 20 mai 2026, avec la [[notianote-2-7-2|2.5]] de l'appli mobile, la deuxième version publiée sur l'App Store. Et elle était nulle : franchement décevante.",
        "Alors je l'ai refaite de zéro. La nouvelle version, qui tourne avec le modèle Tia 2, sort cette semaine sur [ia.notianote.fr](https://ia.notianote.fr). Mon idée cette fois : une IA qui t'aide sans faire à ta place.",
        "Par défaut, elle est en mode guide. Tu poses ta question ou tu envoies la photo de ton exercice (photo, PDF, Word ou PowerPoint). Elle te dit ce qui est demandé, te pose une question, puis te donne un indice à la fois, et elle vérifie chaque étape que tu proposes. La solution complète, c'est seulement si tu la demandes. Pour un devoir noté, elle corrige ce que tu as écrit, sans rédiger à ta place.",
        "## Ce qu'elle sait faire",
        "- Des fiches de révision toujours sur le même plan : l'essentiel, la méthode, un exemple corrigé, les pièges à éviter, et 5 questions pour te tester.\n- Des QCM qui expliquent chaque réponse, des flashcards, et tes erreurs qui reviennent dans « À revoir » à 1, 3, 7 puis 14 jours.\n- Un planning de révision avant un contrôle ou un examen.\n- La correction d'une copie critère par critère, avec une note indicative sur 20 : contrôles, brevet, bac de français, bac général et technologique.\n- L'entraînement à l'oral du bac de français, déroulé comme devant le jury, et au grand oral.\n- La lecture à voix haute et la dictée au micro. L'audio passe par le navigateur, il n'est pas envoyé sur nos serveurs.",
        "## Pour qui, et combien",
        "Notia est pensée pour l'école, du collège à la fac, dès 11 ans avec l'accord des parents. Elle marche dans le navigateur, sur le téléphone comme sur l'ordinateur : rien à installer. L'offre gratuite donne accès à Tia 2 Lite, avec 15 messages par jour et 2 fiches par semaine. Les offres NotiaNote IA (Tia 2) et Pro (Tia 2 Pro) ajoutent des messages, des fiches et un modèle plus puissant.",
        "Fin septembre, j'avais mis un module « bientôt » sur le site de NotiaNote. Le 15 novembre, j'ai refait la page [notianote.fr/ia](https://notianote.fr/ia) qui présente la nouvelle Notia. L'appli [[notianote-app-store|NotiaNote]], elle, reste là pour les notes, les devoirs et l'emploi du temps.",
      ],
      en: [
        "I'll be honest about Notia, NotiaNote's AI. The first version came out on 20 May 2026, with [[notianote-2-7-2|2.5]] of the mobile app, the second version published on the App Store. And it was bad: honestly disappointing.",
        "So I rebuilt it from scratch. The new version, running on the Tia 2 model, comes out this week at [ia.notianote.fr](https://ia.notianote.fr). My idea this time: an AI that helps you without doing the work for you.",
        "By default it's in guide mode. You ask your question or send a photo of your exercise (photo, PDF, Word or PowerPoint). It tells you what's being asked, asks you a question, then gives you one hint at a time, and checks every step you suggest. The full solution only comes if you ask for it. For graded homework, it corrects what you wrote without writing it for you.",
        "## What it can do",
        "- Revision sheets that always follow the same plan: the key points, the method, a worked example, the traps to avoid, and 5 questions to test yourself.\n- Quizzes that explain every answer, flashcards, and your mistakes coming back in “To review” after 1, 3, 7 and 14 days.\n- A revision schedule before a test or an exam.\n- Marking a paper criterion by criterion, with an indicative grade out of 20: tests, the brevet, the French bac, the general and technological bac.\n- Practice for the French bac oral, run like the real jury, and for the grand oral.\n- Read-aloud and mic dictation. The audio goes through the browser and isn't sent to our servers.",
        "## Who it's for, and the price",
        "Notia is built for school, from middle school to university, from age 11 with parental consent. It runs in the browser, on phone or computer: nothing to install. The free plan gives access to Tia 2 Lite, with 15 messages a day and 2 revision sheets a week. The NotiaNote IA (Tia 2) and Pro (Tia 2 Pro) plans add more messages, more sheets and a more powerful model.",
        "At the end of September I had put a “coming soon” module on the NotiaNote site. On 15 November I rebuilt the [notianote.fr/ia](https://notianote.fr/ia) page that presents the new Notia. The [[notianote-app-store|NotiaNote]] app itself is still where your grades, homework and timetable live.",
      ],
    },
  },
  {
    slug: "snowbound",
    date: "2026-11-12",
    links: [
      {
        href: "https://snowbound.fr",
        label: { fr: "snowbound.fr", en: "snowbound.fr" },
      },
    ],
    title: { fr: "Snowbound, ma boutique de Noël", en: "Snowbound, my Christmas shop" },
    description: {
      fr: "Ma boutique Shopify éphémère est ouverte sur snowbound.fr : une guirlande lumineuse saule et des petites décos de Noël.",
      en: "My pop-up Shopify shop is open at snowbound.fr: a willow light garland and small Christmas decorations.",
    },
    paragraphs: {
      fr: [
        "Snowbound, c'est ma boutique de Noël éphémère, faite avec Shopify. Elle ouvre seulement pour les fêtes, puis elle disparaît. Et elle est ouverte : c'est sur [snowbound.fr](https://snowbound.fr).",
        "Le produit phare, c'est la guirlande lumineuse saule : une branche de saule couverte de petites LED blanc chaud, à poser au mur, au-dessus d'un lit, d'une cheminée ou d'un miroir. Il y a trois tailles : 72, 96 ou 144 LED.",
        "Autour, j'ai ajouté des petites décos à accrocher sur les branches : des mini boules dorées, des flocons en bois naturel et des mini pommes de pin.",
        "Le premier produit est entré dans la boutique le 12 novembre 2026. C'est Shai Company France qui porte Snowbound (voir le [Plan](/plan/)).",
      ],
      en: [
        "Snowbound is my pop-up Christmas shop, built with Shopify. It opens only for the holidays, then it disappears. And it's open: it's at [snowbound.fr](https://snowbound.fr).",
        "The main product is the willow light garland: a willow branch covered in small warm-white LEDs, to put on a wall, above a bed, a fireplace or a mirror. It comes in three sizes: 72, 96 or 144 LEDs.",
        "Around it, I added small decorations to hang on the branches: mini gold baubles, natural wood snowflakes and mini pine cones.",
        "The first product went into the shop on 12 November 2026. Snowbound is run by Shai Company France (see the [Map](/plan/)).",
      ],
    },
  },
]
