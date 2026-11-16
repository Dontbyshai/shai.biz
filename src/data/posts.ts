import type { Post, PostImage } from "./types"

const notianoteIcon: PostImage = {
  src: "/images/notianote-icon.webp",
  width: 512,
  height: 512,
  alt: {
    fr: "Icône NotiaNote : un livre ouvert bleu nuit et un éclair violet.",
    en: "NotiaNote icon: an open navy book and a purple lightning bolt.",
  },
  caption: {
    fr: "Icône App Store de NotiaNote.",
    en: "NotiaNote App Store icon.",
  },
}

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

const notianoteApp: PostImage = {
  src: "/images/notianote-accueil.webp",
  width: 780,
  height: 1688,
  alt: {
    fr: "Écran d'accueil de l'application NotiaNote : moyenne générale et cours du jour.",
    en: "NotiaNote app home screen: overall average and today's classes.",
  },
  caption: { fr: "L'accueil de l'application mobile.", en: "The mobile app home screen." },
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
    title: {
      fr: "Un labo Kali pour apprendre",
      en: "A Kali lab for learning",
    },
    description: {
      fr: "Notes et configs de pentest, dans un dépôt privé ouvert le 19 juin 2024.",
      en: "Pentest notes and configs, in a private repo opened on 19 June 2024.",
    },
    paragraphs: {
      fr: [
        "Le 19 juin 2024, j'ouvre KALI-LINUX- sur GitHub. C'est un dépôt privé, un des premiers que j'ai gardés. La description dit « Metasploit reverse shell (Contrôle à distance) ».",
        "Dedans, des dossiers d'outils et de notes : Ettercap, Metasploit, Wireshark, aircrack, evil portal, nmap, wifiphisher, et un dossier doc. C'est un cahier de labo autour du pentest.",
        "Dernier push le 2 août 2025. Depuis, plus d'activité. Le dépôt reste privé, et je le considère archivé. C'est par la cybersécurité que je suis entré dans le code.",
      ],
      en: [
        "On 19 June 2024 I opened KALI-LINUX- on GitHub. It is a private repo, one of the earliest I still have. The description reads “Metasploit reverse shell (Contrôle à distance)”.",
        "Inside, folders of tools and notes: Ettercap, Metasploit, Wireshark, aircrack, evil portal, nmap, wifiphisher, and a doc folder. It is a lab notebook around pentesting.",
        "Last push on 2 August 2025. Nothing since. The repo stays private, and I treat it as archived. Cybersecurity is how I got into writing code.",
      ],
    },
  },
  {
    slug: "qcm-interactif",
    date: "2025-11-17",
    title: {
      fr: "QCM interactif, projet NSI",
      en: "Interactive quiz, an NSI school project",
    },
    description: {
      fr: "Un QCM en HTML, CSS et JavaScript, avec un fond d'étoiles. Huit commits, du 17 au 27 novembre 2025.",
      en: "An HTML, CSS and JavaScript quiz with a starfield. Eight commits, from 17 to 27 November 2025.",
    },
    links: [
      {
        href: "https://github.com/Dontbyshai/NSI-site-QCM",
        label: { fr: "Dépôt GitHub", en: "GitHub repo" },
      },
    ],
    paragraphs: {
      fr: [
        "Projet d'école, pour la spécialité NSI. Le dépôt public Dontbyshai/NSI-site-QCM est créé le 17 novembre 2025, le premier commit est du même jour, le dernier du 27 novembre. Huit commits. Le projet est terminé.",
        "Le site affiche des questions écrites dans le code, valide les réponses, calcule un score et propose de recommencer. Le fond est un canvas d'étoiles animées.",
        "La répartition lue dans le dépôt : JavaScript 37,5 %, HTML 32,1 %, CSS 17,7 %, Python 12,7 %. La licence n'est pas précisée.",
      ],
      en: [
        "A school project for the NSI computer-science class. The public repo Dontbyshai/NSI-site-QCM was created on 17 November 2025, with the first commit the same day and the last on 27 November. Eight commits. It is finished.",
        "The site shows questions defined in the code, checks the answers, computes a score and offers to start again. The background is an animated starfield on a canvas.",
        "Languages in the repo: JavaScript 37.5%, HTML 32.1%, CSS 17.7%, Python 12.7%. No license is specified.",
      ],
    },
  },
  {
    slug: "notianote-debuts",
    date: "2025-11-27",
    title: {
      fr: "NotiaNote commence",
      en: "NotiaNote starts",
    },
    description: {
      fr: "Le dépôt web ouvre le 27 novembre 2025. L'idée : un espace scolaire, à côté d'ÉcoleDirecte.",
      en: "The web repo opens on 27 November 2025. The idea: a school workspace, alongside ÉcoleDirecte.",
    },
    links: [
      {
        href: "https://notianote.fr",
        label: { fr: "notianote.fr", en: "notianote.fr" },
      },
    ],
    paragraphs: {
      fr: [
        "Le 27 novembre 2025, je crée le dépôt Shai-Company-Ltd/NotiaNote, la partie web et le proxy. Le code est privé. NotiaNote est mon premier projet public, et il tourne toujours.",
        "L'idée, dès le départ : un espace scolaire numérique, présenté comme l'alternative stable et sécurisée à ÉcoleDirecte. Notes, emploi du temps, cahier de textes. La version 1.0.0 arrive quatre jours plus tard : [[notianote-v1|NotiaNote v1.0.0]].",
        "Le site est [notianote.fr](https://notianote.fr). NotiaNote n'est pas affilié à ÉcoleDirecte ni à Pronote. L'éditeur est Shai's Company.",
      ],
      en: [
        "On 27 November 2025 I created the Shai-Company-Ltd/NotiaNote repo, the web app and its proxy. The code is private. NotiaNote is my first public project, and it is still running.",
        "The idea from day one: a digital school space, presented as a stable and secure alternative to ÉcoleDirecte. Grades, timetable, homework diary. Version 1.0.0 lands four days later: [[notianote-v1|NotiaNote v1.0.0]].",
        "The site is [notianote.fr](https://notianote.fr). NotiaNote is not affiliated with ÉcoleDirecte or Pronote. The publisher is Shai's Company.",
      ],
    },
  },
  {
    slug: "notianote-v1",
    date: "2025-12-01",
    title: {
      fr: "NotiaNote v1.0.0",
      en: "NotiaNote v1.0.0",
    },
    description: {
      fr: "Premier commit le 1er décembre 2025 : notes, emploi du temps, cahier de textes, assistant IA.",
      en: "First commit on 1 December 2025: grades, timetable, homework diary, AI assistant.",
    },
    paragraphs: {
      fr: [
        "Le commit du 1er décembre 2025 s'intitule « Initial commit - NotiaNote v1.0.0 by dontbyshai ».",
        "Cette v1 couvre le quotidien d'un élève : moyennes, simulateur de notes, graphiques d'évolution, emploi du temps avec détection d'absences, alertes de contrôles et gestion des trous, cahier de textes, et un assistant IA.",
        "Le dépôt porte aussi les tags v1.1.3, v1.2.3, v1.3.0 et v1.4.0. Je n'ai pas leurs dates exactes. La refonte suivante est la [[notianote-v2|v2.0.0, le 9 janvier 2026]].",
        "Côté technique, la partie web est en JavaScript et Node. Le proxy backend se lance avec `npm run backend:dev`.",
      ],
      en: [
        "The 1 December 2025 commit is titled “Initial commit - NotiaNote v1.0.0 by dontbyshai”.",
        "This v1 covers a student's day: averages, a grade simulator, progress charts, a timetable that detects absences, test alerts and free periods, a homework diary, and an AI assistant.",
        "The repo also has tags v1.1.3, v1.2.3, v1.3.0 and v1.4.0. I don't have their exact dates. The next rewrite is [[notianote-v2|v2.0.0, on 9 January 2026]].",
        "The web side is JavaScript and Node. The backend proxy starts with `npm run backend:dev`.",
      ],
    },
  },
  {
    slug: "notianote-v2",
    date: "2026-01-09",
    title: {
      fr: "NotiaNote v2, le design Galaxy",
      en: "NotiaNote v2, the Galaxy design",
    },
    description: {
      fr: "Le 9 janvier 2026 : refonte, chiffrement AES-256 local, et double authentification.",
      en: "9 January 2026: a rewrite, local AES-256 encryption, and two-factor authentication.",
    },
    paragraphs: {
      fr: [
        "Le 9 janvier 2026, le commit « Update README for V2 release & Final Security Fixes » marque la v2.0.0.",
        "La refonte apporte le design appelé Galaxy, un chiffrement local AES-256, une passerelle qui ne conserve pas les données sur le serveur, et le support de l'A2F.",
        "Un tag V2.1.0 existe ensuite. Sa date exacte ne figure pas dans mes notes. L'application mobile démarre le [[notianote-mobile|20 janvier 2026]].",
        "NotiaNote est édité par Shai's Company et hébergé chez OuiHeberg, à Paris. L'IA et les publicités sont optionnelles, avec un consentement. Au 15 novembre 2026, le dernier commit du dépôt web porte sur les mentions légales, les CGV et la confidentialité : Shaï Company ltd., Bahamas et Nouveau-Mexique, États-Unis.",
      ],
      en: [
        "On 9 January 2026, the commit “Update README for V2 release & Final Security Fixes” marks v2.0.0.",
        "The rewrite brings the design called Galaxy, local AES-256 encryption, a gateway that does not keep data on the server, and two-factor authentication.",
        "A V2.1.0 tag exists after that. Its exact date is not in my notes. The mobile app starts on [[notianote-mobile|20 January 2026]].",
        "NotiaNote is published by Shai's Company and hosted at OuiHeberg, in Paris. The AI and the ads are optional, with consent. As of 15 November 2026, the latest commit on the web repo covers the legal notice, terms of sale and privacy policy: Shaï Company ltd., the Bahamas and New Mexico, United States.",
      ],
    },
  },
  {
    slug: "notianote-mobile",
    date: "2026-01-20",
    title: {
      fr: "NotiaNote passe sur le téléphone",
      en: "NotiaNote moves to the phone",
    },
    description: {
      fr: "Dépôt iOS et Android ouvert le 20 janvier 2026. React Native et Expo.",
      en: "iOS and Android repo opened on 20 January 2026. React Native and Expo.",
    },
    image: notianoteApp,
    paragraphs: {
      fr: [
        "Le 20 janvier 2026, premier commit de Shai-Company-Ltd/NotiaNote-app. Le dépôt est privé. L'application vise iOS et Android.",
        "On y retrouve le mode sombre Galaxy, les notes (moyennes, simulation, graphiques), l'emploi du temps synchronisé, le cahier de texte avec le fait et l'à faire, les pièces jointes, la vie scolaire et la messagerie. Android a un widget de moyenne sur l'écran d'accueil. La connexion peut passer par Face ID ou Touch ID.",
        "La stack est React Native avec Expo SDK 54, un prebuild natif, et Java 17 pour Android. Le README du dépôt indique une licence CC BY-NC-SA 4.0. La sortie App Store est le [[notianote-app-store|3 mars 2026]].",
      ],
      en: [
        "On 20 January 2026, the first commit lands in Shai-Company-Ltd/NotiaNote-app. The repo is private. The app targets iOS and Android.",
        "It includes the Galaxy dark mode, grades (averages, simulation, charts), a synced timetable, a homework diary with done and to-do, attachments, school life and messaging. Android has a home-screen widget for the average. Sign-in can use Face ID or Touch ID.",
        "The stack is React Native with Expo SDK 54, a native prebuild, and Java 17 for Android. The repo README states a CC BY-NC-SA 4.0 license. The App Store release is [[notianote-app-store|3 March 2026]].",
      ],
    },
  },
  {
    slug: "shai-company",
    date: "2026-02-01",
    title: {
      fr: "Le site de Shaï Company",
      en: "The Shaï Company website",
    },
    description: {
      fr: "Le dépôt du site vitrine est créé le 1er février 2026. Le premier commit date du 3 août.",
      en: "The showcase site repo is created on 1 February 2026. The first commit is on 3 August.",
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
        "Shaï Company est l'entreprise sous laquelle je range mes produits. Le dépôt public Shai-Company-Ltd/Shai-company-website est créé le 1er février 2026. Le premier commit, « Initial clean commit », est du 3 août 2026. Sept commits en tout, le dernier le 13 novembre 2026.",
        "Le site [shaiscompany.com](https://shaiscompany.com) présente les divisions : Applications (NotiaNote, Left To Live), IA (NotiaNote IA), Web3 (un wallet annoncé) et Investissement & Trading, avec du copy trading.",
        "La stack du site : React 19, TypeScript, Vite, Framer Motion, ShaderGradient, React Three Fiber. Les mentions légales récentes situent la société aux Bahamas et au Nouveau-Mexique, aux États-Unis.",
      ],
      en: [
        "Shaï Company is the business I keep my products under. The public repo Shai-Company-Ltd/Shai-company-website was created on 1 February 2026. The first commit, “Initial clean commit”, is from 3 August 2026. Seven commits in total, the last on 13 November 2026.",
        "The site [shaiscompany.com](https://shaiscompany.com) presents the divisions: Applications (NotiaNote, Left To Live), AI (NotiaNote IA), Web3 (a wallet announced) and Investment & Trading, including copy trading.",
        "The site stack: React 19, TypeScript, Vite, Framer Motion, ShaderGradient, React Three Fiber. Recent legal notices place the company in the Bahamas and in New Mexico, United States.",
      ],
    },
  },
  {
    slug: "notianote-app-store",
    date: "2026-03-03",
    title: {
      fr: "NotiaNote arrive sur l'App Store",
      en: "NotiaNote lands on the App Store",
    },
    description: {
      fr: "Sortie iOS le 3 mars 2026. L'application Android existe aussi, sous com.dontbyshai.notianote.",
      en: "iOS release on 3 March 2026. The Android app also exists, as com.dontbyshai.notianote.",
    },
    image: notianoteIcon,
    links: [
      {
        href: "https://apps.apple.com/fr/app/notianote/id6758548199",
        label: { fr: "App Store", en: "App Store" },
      },
      {
        href: "https://play.google.com/store/apps/details?id=com.dontbyshai.notianote",
        label: { fr: "Play Store", en: "Play Store" },
      },
      {
        href: "https://notianote.fr",
        label: { fr: "notianote.fr", en: "notianote.fr" },
      },
    ],
    paragraphs: {
      fr: [
        "Le 3 mars 2026, NotiaNote est sur l'App Store français. L'identifiant est 6758548199. L'éditeur indiqué sur la fiche est « laure dugat ».",
        "Le paquet Android est `com.dontbyshai.notianote`. Je n'ai pas de date de mise en ligne Play Store à citer. La version 2.7.2 de la fiche App Store est datée du [[notianote-2-7-2|7 octobre 2026]].",
        "L'application mobile elle-même a démarré le [[notianote-mobile|20 janvier]]. Le dépôt reste privé.",
      ],
      en: [
        "On 3 March 2026, NotiaNote is on the French App Store. The id is 6758548199. The publisher shown on the listing is “laure dugat”.",
        "The Android package is `com.dontbyshai.notianote`. I don't have a Play Store release date to cite. Version 2.7.2 on the App Store listing is dated [[notianote-2-7-2|7 October 2026]].",
        "The mobile app itself started on [[notianote-mobile|20 January]]. The repo stays private.",
      ],
    },
  },
  {
    slug: "notianote-connexion",
    date: "2026-05-21",
    title: {
      fr: "NotiaNote Connexion, en licence MIT",
      en: "NotiaNote Connexion, under the MIT license",
    },
    description: {
      fr: "Le connecteur universel, seul morceau de NotiaNote resté open source. Dépôt ouvert le 21 mai 2026.",
      en: "The universal connector, the only part of NotiaNote still open source. Repo opened on 21 May 2026.",
    },
    links: [
      {
        href: "https://github.com/Shai-Company-Ltd/Notianote-Connexion",
        label: { fr: "Dépôt GitHub", en: "GitHub repo" },
      },
    ],
    paragraphs: {
      fr: [
        "Le 21 mai 2026, j'ouvre le dépôt public Shai-Company-Ltd/Notianote-Connexion. Six commits, le dernier le 23 septembre 2026. Licence MIT. C'est un module JavaScript, `NotiaNote-app-publique.js`, sans interface.",
        "Il gère l'authentification vers des plateformes scolaires, universitaires et de restauration.",
        "La v1.0.0, archivée, couvrait ÉcoleDirecte, Pronote, Smartschool, WebUntis, PowerSchool et Infinite Campus.",
        "La v2.0.0, actuelle, ajoute l'enseignement supérieur et le CAS (UCA, Moodle, AppScho, Multi-ENT), la restauration (TurboSelf, Izly, Alise & ARD), et met à jour Skolengo et Pronote. Edsby et Skyward sont aussi dans le périmètre secondaire et international.",
        "Le [[notianote-uca|travail sur l'UCA]], le 23 septembre, alimente ce connecteur. Depuis les [[notianote-code-ferme|CGU du 1er juin 2026]], c'est le seul composant de NotiaNote dont le code reste public.",
      ],
      en: [
        "On 21 May 2026 I opened the public repo Shai-Company-Ltd/Notianote-Connexion. Six commits, the last on 23 September 2026. MIT license. It is a JavaScript module, `NotiaNote-app-publique.js`, with no UI.",
        "It handles sign-in to school, university and cafeteria platforms.",
        "v1.0.0, now archived, covered ÉcoleDirecte, Pronote, Smartschool, WebUntis, PowerSchool and Infinite Campus.",
        "v2.0.0, the current one, adds higher education and CAS (UCA, Moodle, AppScho, Multi-ENT), school catering (TurboSelf, Izly, Alise & ARD), and updates Skolengo and Pronote. Edsby and Skyward are in the secondary and international set too.",
        "The [[notianote-uca|UCA work]], on 23 September, feeds this connector. Since the [[notianote-code-ferme|terms of 1 June 2026]], it is the only NotiaNote component whose code stays public.",
      ],
    },
  },
  {
    slug: "notianote-code-ferme",
    date: "2026-06-01",
    title: {
      fr: "Le code de NotiaNote devient propriétaire",
      en: "NotiaNote's code becomes proprietary",
    },
    description: {
      fr: "Depuis les CGU du 1er juin 2026, l'application est privée. Le connecteur reste en MIT.",
      en: "Since the terms of 1 June 2026, the app is private. The connector stays MIT.",
    },
    paragraphs: {
      fr: [
        "Le 1er juin 2026, les conditions de notianote.fr ferment le code de NotiaNote. L'application web et l'application mobile sont des dépôts privés. [[notianote-connexion|NotiaNote Connexion]] reste publié, en licence MIT.",
        "Je continue de développer le produit. Le site [notianote.fr](https://notianote.fr) et les stores restent en ligne. Le code complet n'est plus un dépôt public.",
      ],
      en: [
        "On 1 June 2026, the terms on notianote.fr close the NotiaNote source. The web app and the mobile app are private repos. [[notianote-connexion|NotiaNote Connexion]] stays published, under the MIT license.",
        "I keep building the product. The site [notianote.fr](https://notianote.fr) and the stores stay up. The full source is no longer a public repo.",
      ],
    },
  },
  {
    slug: "left-to-live",
    date: "2026-08-02",
    title: {
      fr: "Left To Live, premiers commits",
      en: "Left To Live, first commits",
    },
    description: {
      fr: "Une application iOS et Apple Watch qui compte les battements restants. Dépôt ouvert le 2 août 2026.",
      en: "An iOS and Apple Watch app that counts the heartbeats left. Repo opened on 2 August 2026.",
    },
    image: leftIcon,
    paragraphs: {
      fr: [
        "Le 2 août 2026, le dépôt privé Shai-Company-Ltd/left-to-life reçoit deux commits : « Add legal documents », puis « Initial commit of the Left To Live iOS App ». Le dépôt a été créé le même jour.",
        "Left To Live est un memento mori. À partir de HealthKit, l'application estime le nombre de battements qu'il reste, sur la base de l'espérance de vie, et lance un compte à rebours, battement après battement. Il y a un graphique de fréquence cardiaque en direct, des statistiques, une lecture en années, jours et heures, des complications pour l'Apple Watch, un mode hors ligne, et les langues français et anglais.",
        "Elle ne lit que la fréquence cardiaque. Rien n'est envoyé sur un serveur.",
        "Stack : Swift, Xcode 26, iOS 18 et plus, watchOS 26, HealthKit, App Group. Le README indique une licence MIT. Le dépôt, lui, est privé. La sortie App Store est le [[left-to-live-app-store|20 août 2026]].",
      ],
      en: [
        "On 2 August 2026, the private repo Shai-Company-Ltd/left-to-life gets two commits: “Add legal documents”, then “Initial commit of the Left To Live iOS App”. The repo was created the same day.",
        "Left To Live is a memento mori. From HealthKit, the app estimates how many heartbeats are left, based on life expectancy, and starts a countdown, beat after beat. There is a live heart-rate chart, statistics, a reading in years, days and hours, Apple Watch complications, an offline mode, and French and English.",
        "It only reads heart rate. Nothing is sent to a server.",
        "Stack: Swift, Xcode 26, iOS 18 and later, watchOS 26, HealthKit, App Group. The README states an MIT license. The repo itself is private. The App Store release is [[left-to-live-app-store|20 August 2026]].",
      ],
    },
  },
  {
    slug: "love-map",
    date: "2026-08-10",
    title: {
      fr: "Love Map",
      en: "Love Map",
    },
    description: {
      fr: "Une application mobile de cartographie. Dépôt privé ouvert le 10 août 2026. Pas de date de sortie publique.",
      en: "A mobile mapping app. Private repo opened on 10 August 2026. No public release date.",
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
        "Le 10 août 2026, premier commit du dépôt privé Shai-Company-Ltd/love-map. Le langage principal est Swift, et un build Android est présent.",
        "Love Map est une application de cartographie. Le dépôt contient des icônes de store, une image de présentation, des conditions d'utilisation, une politique de confidentialité, et des builds iOS et Android. Le site de Shaï Company a des pages dédiées pour la confidentialité et les CGU.",
        "Je n'ai pas de date de sortie. Aucune fiche App Store ou Play Store à ce nom. Love Map n'est pas publié.",
      ],
      en: [
        "On 10 August 2026, the first commit of the private repo Shai-Company-Ltd/love-map. The main language is Swift, and an Android build is there too.",
        "Love Map is a mapping app. The repo holds store icons, a presentation image, terms of use, a privacy policy, and iOS and Android builds. The Shaï Company site has dedicated privacy and terms pages.",
        "I have no release date. No App Store or Play Store listing under this name. Love Map is not published.",
      ],
    },
  },
  {
    slug: "solarscan",
    date: "2026-08-13",
    title: { fr: "SolarScan", en: "SolarScan" },
    description: {
      fr: "Logiciel de bureau pour chiffrer le nettoyage de panneaux solaires. Premier commit le 13 août 2026.",
      en: "A desktop app for quoting solar-panel cleaning. First commit on 13 August 2026.",
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
        "Le dépôt public Dontbyshai/SolarScan est créé le 12 août 2026. Le premier commit est du 13 août. Huit commits, le dernier le 7 septembre 2026. Projet en cours. La licence n'est pas précisée.",
        "SolarScan s'adresse aux professionnels du nettoyage de panneaux photovoltaïques, sur Windows, macOS et Linux. Il utilise l'imagerie satellite de l'IGN et une IA pour repérer les panneaux sur les toits, calculer la surface en mètres carrés et produire un devis PDF : tarifs par paliers, géocodage inverse, aperçu satellite annoté, filigrane. L'export CSV vise Excel en français. La couverture est la France, parce que la source est l'IGN.",
        "La partie bureau est en Electron, HTML, CSS et JavaScript, avec Leaflet. Le backend est un FastAPI en Python, le géocodage passe par Nominatim (OpenStreetMap), et le PDF est produit par Chromium via `printToPDF`.",
      ],
      en: [
        "The public repo Dontbyshai/SolarScan was created on 12 August 2026. The first commit is from 13 August. Eight commits, the last on 7 September 2026. Still in progress. No license is specified.",
        "SolarScan is for people who clean photovoltaic panels, on Windows, macOS and Linux. It uses IGN satellite imagery and an AI model to find panels on roofs, compute the area in square metres and produce a PDF quote: tiered pricing, reverse geocoding, an annotated satellite preview, a watermark. The CSV export targets French Excel. Coverage is France, because the source is IGN.",
        "The desktop side is Electron, HTML, CSS and JavaScript, with Leaflet. The backend is FastAPI in Python, geocoding goes through Nominatim (OpenStreetMap), and the PDF is produced by Chromium via `printToPDF`.",
      ],
    },
  },
  {
    slug: "shaicraft-economy",
    date: "2026-08-13",
    title: { fr: "ShaiCraft Economy", en: "ShaiCraft Economy" },
    description: {
      fr: "Mod Minecraft Fabric 1.21.1 : économie de survie et trading branché sur Binance. Commit unique le 13 août 2026.",
      en: "A Fabric 1.21.1 Minecraft mod: survival economy and trading wired to Binance. Single commit on 13 August 2026.",
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
        "Le dépôt public Dontbyshai/shaicraft-economy est créé le 12 août 2026. Un seul commit, le 13 août. Projet en cours. Licence non précisée.",
        "C'est un mod pour Minecraft 1.21.1, sous Fabric. Deux parties : une économie de survie, et un simulateur de trading crypto relié à l'API Binance. Les prix arrivent toutes les 5 secondes. On peut prendre une position long ou short, avec levier, liquidations, suivi des gains et des pertes, et des portefeuilles. Cobblemon ajoute un hôtel des ventes pour les Pokémon.",
        "Les commandes sont `/balance`, `/pay`, `/shop`, `/trading`, `/hdv` et `/trade`.",
        "Stack : Java 21, Fabric Loader 0.16 ou plus, Fabric API, Fabric Language Kotlin, Cobblemon, Gradle, journaux SLF4J.",
      ],
      en: [
        "The public repo Dontbyshai/shaicraft-economy was created on 12 August 2026. A single commit, on 13 August. Still in progress. No license is specified.",
        "It is a mod for Minecraft 1.21.1, on Fabric. Two parts: a survival economy, and a crypto trading simulator wired to the Binance API. Prices arrive every 5 seconds. You can open a long or short position, with leverage, liquidations, profit and loss tracking, and wallets. Cobblemon adds a Pokémon auction house.",
        "The commands are `/balance`, `/pay`, `/shop`, `/trading`, `/hdv` and `/trade`.",
        "Stack: Java 21, Fabric Loader 0.16 or newer, Fabric API, Fabric Language Kotlin, Cobblemon, Gradle, SLF4J logs.",
      ],
    },
  },
  {
    slug: "animation-manim",
    date: "2026-08-18",
    title: {
      fr: "Animations mathématiques avec Manim",
      en: "Math animations with Manim",
    },
    description: {
      fr: "Deux commits Python, du 18 au 20 août 2026. Des maths en format vertical.",
      en: "Two Python commits, from 18 to 20 August 2026. Maths in a vertical format.",
    },
    links: [
      {
        href: "https://github.com/Dontbyshai/Animation",
        label: { fr: "Dépôt GitHub", en: "GitHub repo" },
      },
    ],
    paragraphs: {
      fr: [
        "Le dépôt public Dontbyshai/Animation est créé le 17 août 2026. Premier commit le 18, dernier le 20. Deux commits. Petit projet, terminé.",
        "Ce sont des animations mathématiques au format vertical, générées en Python avec Manim.",
      ],
      en: [
        "The public repo Dontbyshai/Animation was created on 17 August 2026. First commit on the 18th, last on the 20th. Two commits. A small project, finished.",
        "Vertical math animations, generated in Python with Manim.",
      ],
    },
  },
  {
    slug: "shai-biz",
    date: "2026-08-18",
    title: { fr: "shai.biz", en: "shai.biz" },
    description: {
      fr: "Le dépôt du site personnel. Créé le 17 août 2026, commit du 18 août.",
      en: "The personal site repo. Created on 17 August 2026, commit on 18 August.",
    },
    links: [
      {
        href: "https://github.com/Dontbyshai/shai.biz",
        label: { fr: "Dépôt GitHub", en: "GitHub repo" },
      },
    ],
    paragraphs: {
      fr: [
        "Le dépôt public Dontbyshai/shai.biz est créé le 17 août 2026. Le commit du 18 août pose la première version : un portfolio et un journal, avec l'accueil, le blog, les projets et la page à propos.",
        "Cette version du site est une réécriture. Le code et le design de départ ont été remplacés.",
      ],
      en: [
        "The public repo Dontbyshai/shai.biz was created on 17 August 2026. The 18 August commit puts down the first version: a portfolio and a journal, with a home page, a blog, projects and an about page.",
        "This version of the site is a rewrite. The original code and design have been replaced.",
      ],
    },
  },
  {
    slug: "profil-github",
    date: "2026-08-18",
    title: {
      fr: "Le README du profil GitHub",
      en: "The GitHub profile README",
    },
    description: {
      fr: "Dontbyshai/dontbyshai, créé le 18 août 2026.",
      en: "Dontbyshai/dontbyshai, created on 18 August 2026.",
    },
    links: [
      {
        href: "https://github.com/Dontbyshai/dontbyshai",
        label: { fr: "Dépôt du profil", en: "Profile repo" },
      },
    ],
    paragraphs: {
      fr: [
        "Le 18 août 2026, je crée le dépôt de profil Dontbyshai/dontbyshai. Huit commits, le dernier le 24 octobre 2026.",
        "Le texte me présente comme développeur full-stack, intéressé par le hacking éthique et la cybersécurité. Les technos affichées : JavaScript, TypeScript, React, Vue, Swift, Kotlin, Linux, Windows, HTML, CSS, Git, GitHub, Node.js, PHP, Astro, Kali, C++.",
        "Les contacts du README : [dontbyshai@gmail.com](mailto:dontbyshai@gmail.com), [X](https://twitter.com/Dontbyshai), [LinkedIn](https://www.linkedin.com/in/shai-chomette-dugat-276a542a0/) et [Instagram](https://www.instagram.com/dontbyshai/).",
      ],
      en: [
        "On 18 August 2026 I created the profile repo Dontbyshai/dontbyshai. Eight commits, the last on 24 October 2026.",
        "The text introduces me as a full-stack developer, interested in ethical hacking and cybersecurity. The listed tools: JavaScript, TypeScript, React, Vue, Swift, Kotlin, Linux, Windows, HTML, CSS, Git, GitHub, Node.js, PHP, Astro, Kali, C++.",
        "Contacts on the README: [dontbyshai@gmail.com](mailto:dontbyshai@gmail.com), [X](https://twitter.com/Dontbyshai), [LinkedIn](https://www.linkedin.com/in/shai-chomette-dugat-276a542a0/) and [Instagram](https://www.instagram.com/dontbyshai/).",
      ],
    },
  },
  {
    slug: "left-to-live-app-store",
    date: "2026-08-20",
    title: {
      fr: "Left To Live sort sur l'App Store",
      en: "Left To Live ships on the App Store",
    },
    description: {
      fr: "Version 1.0, le 20 août 2026, sur iOS. L'application vise aussi l'Apple Watch.",
      en: "Version 1.0, on 20 August 2026, on iOS. The app also targets Apple Watch.",
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
        "Le 20 août 2026, Left To Live est sur l'App Store. Identifiant 6793693539, version 1.0, éditeur indiqué « laure dugat ».",
        "L'application tourne sur iOS et sur Apple Watch, à partir de watchOS 26. Le développement a commencé le [[left-to-live|2 août]] : compte à rebours des battements, HealthKit, mode hors ligne, français et anglais. Le dépôt reste privé.",
      ],
      en: [
        "On 20 August 2026, Left To Live is on the App Store. Id 6793693539, version 1.0, publisher shown as “laure dugat”.",
        "The app runs on iOS and on Apple Watch, from watchOS 26. Development started on [[left-to-live|2 August]]: a heartbeat countdown, HealthKit, offline mode, French and English. The repo stays private.",
      ],
    },
  },
  {
    slug: "obsidianrat",
    date: "2026-09-02",
    title: {
      fr: "ObsidianRAT, un travail de recherche",
      en: "ObsidianRAT, a research project",
    },
    description: {
      fr: "Outil d'accès à distance pour Windows et panneau web, publié pour l'étude. Dépôt ouvert le 2 septembre 2026.",
      en: "A Windows remote-access tool and a web panel, published for study. Repo opened on 2 September 2026.",
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
        "Le 2 septembre 2026, j'ouvre le dépôt public Dontbyshai/ObsidianRAT, en version 1.0.0. Les commits vont du 2 au 7 septembre, quarante-six en tout.",
        "C'est un travail de recherche en cybersécurité : un fork très remanié de win-rat. Il comprend un agent Windows, écrit en C# sur .NET 4.7.2, et un panneau de commande web, en PHP/Laravel et React. L'intégration continue passe par GitHub Actions, avec MSBuild et ILRepack.",
        "Le README porte un avertissement : l'usage doit rester autorisé et éthique. Je le présente ici comme un projet d'étude.",
      ],
      en: [
        "On 2 September 2026 I opened the public repo Dontbyshai/ObsidianRAT, at v1.0.0. Commits run from 2 to 7 September, forty-six in all.",
        "It is cybersecurity research: a heavily reworked fork of win-rat. There is a Windows agent, written in C# on .NET 4.7.2, and a web command panel, in PHP/Laravel and React. Continuous integration goes through GitHub Actions, with MSBuild and ILRepack.",
        "The README carries a warning: use has to stay authorized and ethical. I present it here as a study project.",
      ],
    },
  },
  {
    slug: "notianote-uca",
    date: "2026-09-23",
    title: {
      fr: "NotiaNote et le portail de l'UCA",
      en: "NotiaNote and the UCA student portal",
    },
    description: {
      fr: "Notes et code de recherche pour l'Université Clermont Auvergne. Quatre commits le 23 septembre 2026.",
      en: "Research notes and code for Université Clermont Auvergne. Four commits on 23 September 2026.",
    },
    links: [
      {
        href: "https://github.com/Shai-Company-Ltd/notianote-uca-integration",
        label: { fr: "Dépôt GitHub", en: "GitHub repo" },
      },
    ],
    paragraphs: {
      fr: [
        "Le dépôt public Shai-Company-Ltd/notianote-uca-integration est créé le 23 septembre 2026. Quatre commits, le même jour.",
        "Le sujet : faire entrer le portail étudiant de l'Université Clermont Auvergne dans NotiaNote. Emploi du temps ADE, notes Pégase et Apogée, cours Moodle.",
        "L'approche écrite dans le dépôt : une WebView récupère les cookies CAS (CASTGC et JSESSIONID), puis un driver `UCADriver.ts` les réinjecte. Stack : TypeScript, JavaScript, React Native WebView. C'est de la documentation et de la recherche, au service de [[notianote-connexion|NotiaNote Connexion]].",
      ],
      en: [
        "The public repo Shai-Company-Ltd/notianote-uca-integration was created on 23 September 2026. Four commits, the same day.",
        "The subject: bring the Université Clermont Auvergne student portal into NotiaNote. ADE timetable, Pégase and Apogée grades, Moodle courses.",
        "The approach written in the repo: a WebView collects the CAS cookies (CASTGC and JSESSIONID), then a `UCADriver.ts` driver injects them again. Stack: TypeScript, JavaScript, React Native WebView. Documentation and research, in service of [[notianote-connexion|NotiaNote Connexion]].",
      ],
    },
  },
  {
    slug: "fuel-tracker",
    date: "2026-09-23",
    title: { fr: "Fuel Tracker", en: "Fuel Tracker" },
    description: {
      fr: "Application pour trouver le plein ou la recharge au meilleur prix. Premier commit le 23 septembre 2026. Dépôt privé.",
      en: "An app for finding the cheapest fill-up or charge. First commit on 23 September 2026. Private repo.",
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
        "Le premier commit, « Initial commit, create-expo », date du 23 septembre 2026. Le dépôt Shai-Company-Ltd/Fuel-Tracker est poussé le 2 novembre 2026. Dernier commit le 15 novembre 2026. Il est privé, et le projet est en cours. Je n'ai pas trouvé de fiche App Store ou Play Store à ce nom. Des pages légales sont sur le site de Shaï Company.",
        "L'application, en Expo et React Native, montre une carte des stations-service, des bornes de recharge et des stations hydrogène, avec les prix en direct. Les sources sont des données ouvertes officielles : France, Espagne, Portugal, Andorre, Autriche, Allemagne, Royaume-Uni. Elle calcule le coût d'un plein, garde un historique, des favoris, des alertes de prix, et un signalement communautaire. Les comptes passent par Apple, Google ou l'e-mail, via Firebase. Cinq langues : français, anglais, espagnol, italien, portugais.",
        "Il y a de la publicité AdMob. Une partie de la couche données est adaptée de Plein, le projet open source de Zadkiel Aharonian, en licence MIT.",
      ],
      en: [
        "The first commit, “Initial commit, create-expo”, is from 23 September 2026. The Shai-Company-Ltd/Fuel-Tracker repo was pushed on 2 November 2026. Last commit on 15 November 2026. It is private, and the project is in progress. I have not found an App Store or Play Store listing under this name. Legal pages live on the Shaï Company site.",
        "The app, in Expo and React Native, shows a map of petrol stations, charging points and hydrogen stations, with live prices. The sources are official open data: France, Spain, Portugal, Andorra, Austria, Germany, the United Kingdom. It computes the cost of a fill-up, keeps a history, favourites, price alerts, and community reports. Accounts go through Apple, Google or email, via Firebase. Five languages: French, English, Spanish, Italian, Portuguese.",
        "There are AdMob ads. Part of the data layer is adapted from Plein, the open-source project by Zadkiel Aharonian, under the MIT license.",
      ],
    },
  },
  {
    slug: "notianote-2-7-2",
    date: "2026-10-07",
    title: {
      fr: "NotiaNote 2.7.2 sur l'App Store",
      en: "NotiaNote 2.7.2 on the App Store",
    },
    description: {
      fr: "La fiche iOS indique la version 2.7.2 le 7 octobre 2026.",
      en: "The iOS listing shows version 2.7.2 on 7 October 2026.",
    },
    links: [
      {
        href: "https://apps.apple.com/fr/app/notianote/id6758548199",
        label: { fr: "App Store", en: "App Store" },
      },
      {
        href: "https://play.google.com/store/apps/details?id=com.dontbyshai.notianote",
        label: { fr: "Play Store", en: "Play Store" },
      },
    ],
    paragraphs: {
      fr: [
        "Le 7 octobre 2026, la fiche App Store de NotiaNote affiche la version 2.7.2. Je n'ai pas le détail des changements de cette version.",
        "Côté dépôt mobile, privé, les tags vont jusqu'à v2.7 et v2.7.1. Le dernier push date du 27 septembre 2026. L'application reste sur l'App Store et le Play Store. La sortie initiale est racontée le [[notianote-app-store|3 mars]].",
      ],
      en: [
        "On 7 October 2026, the NotiaNote App Store listing shows version 2.7.2. I don't have the changelog for that version.",
        "On the private mobile repo, tags go up to v2.7 and v2.7.1. The last push is dated 27 September 2026. The app stays on the App Store and the Play Store. The original release is written up on [[notianote-app-store|3 March]].",
      ],
    },
  },
  {
    slug: "kairo",
    date: "2026-10-21",
    title: {
      fr: "Kairo, moteur de trading, puis pause",
      en: "Kairo, a trading engine, then a pause",
    },
    description: {
      fr: "Premier commit le 21 octobre 2026. Dépôt public, archivé, licence propriétaire.",
      en: "First commit on 21 October 2026. Public repo, archived, proprietary license.",
    },
    links: [
      {
        href: "https://github.com/Shai-Company-Ltd/kairo",
        label: { fr: "Dépôt GitHub", en: "GitHub repo" },
      },
    ],
    paragraphs: {
      fr: [
        "Le 21 octobre 2026, le commit « v4.0 : premier moteur, paper par défaut » ouvre Shai-Company-Ltd/kairo. Le projet s'appelait Trading v4. Kairo 1 en v1.0.0 correspond à Trading v4.3.0.",
        "Entre le 21 et le 25 octobre 2026, les tags vont de v4.0 à v4.2.5. Le README date cette fourchette. Vingt commits, le dernier le 15 novembre 2026. Le dépôt est public, archivé, et il n'est plus maintenu. La licence est propriétaire.",
        "Kairo est un moteur Python qui tourne en continu sur un VPS et passe des ordres sur Bitunix, sur BTCUSDT, avec six unités de temps. Il rend compte à plusieurs agents : Scalpeur, Intraday, Swing, Risk, Journal. Les indicateurs cités sont EMA, RSI, ATR, VWAP, ADX et OBV. Les setups décrits : breakout, pullback, RSI. La gestion du risque prévue : levier x20 isolé, kill switch, stop et take profit par trade. Un module d'observation s'appelle Kronos. Les récaps sont espacés de trois heures.",
        "Stack : Python 3.10 ou plus, SQLite, systemd, API Bitunix Futures. Le README demande de ne pas l'utiliser avec des fonds réels. Je le laisse archivé.",
      ],
      en: [
        "On 21 October 2026, the commit “v4.0 : premier moteur, paper par défaut” opens Shai-Company-Ltd/kairo. The project used to be called Trading v4. Kairo 1 v1.0.0 corresponds to Trading v4.3.0.",
        "Between 21 and 25 October 2026, tags run from v4.0 to v4.2.5. The README dates that range. Twenty commits, the last on 15 November 2026. The repo is public, archived, and no longer maintained. The license is proprietary.",
        "Kairo is a Python engine that runs continuously on a VPS and places orders on Bitunix, on BTCUSDT, across six timeframes. It reports to several agents: Scalper, Intraday, Swing, Risk, Journal. Indicators named in the README: EMA, RSI, ATR, VWAP, ADX and OBV. Setups described: breakout, pullback, RSI. The planned risk handling: isolated x20 leverage, a kill switch, a stop and a take profit per trade. An observation module is called Kronos. Recaps are spaced three hours apart.",
        "Stack: Python 3.10 or newer, SQLite, systemd, the Bitunix Futures API. The README says not to use it with real funds. I leave it archived.",
      ],
    },
  },
  {
    slug: "bitixe",
    date: "2026-10-29",
    title: { fr: "Bitixe, première bêta", en: "Bitixe, first beta" },
    description: {
      fr: "Plateforme web de trading crypto. Le tag v0.9.0-beta date du 29 octobre 2026. Le service est en ligne.",
      en: "A crypto trading website. Tag v0.9.0-beta is from 29 October 2026. The service is online.",
    },
    links: [
      {
        href: "https://app.bitixe.com",
        label: { fr: "app.bitixe.com", en: "app.bitixe.com" },
      },
    ],
    image: bitixeShot,
    paragraphs: {
      fr: [
        "Le dépôt privé Shai-Company-Ltd/bitixe est créé le 28 octobre 2026. Le 29 octobre, le tag v0.9.0-beta. Les tags continuent jusqu'à v0.13.6. Je n'ai pas la date de chaque palier. Dernier push le 12 novembre 2026.",
        "Bitixe est une plateforme web. Une base de code, deux modes : mainnet et testnet. L'instance [app.bitixe.com](https://app.bitixe.com) est en argent réel, sur des perpétuels. Le site est en français, avec l'anglais en option. On y trouve des résultats live Bitunix pour le copy-trading, des comptes (scrypt, sessions, vérification e-mail), une offre A de copy-trading Bitunix, et une offre B : un abonnement avec une instance paper du moteur, par abonné. Un espace « Kairo chat » est dans le socle, et il est désactivé. Le moteur [[kairo|Kairo]] n'est pas inclus dans l'application officielle.",
        "Stack : Flask, SQLite, waitress, Nginx, API publiques Bitunix. Stripe est désactivé. Shaï Company range Bitixe dans Web3 & Crypto.",
      ],
      en: [
        "The private repo Shai-Company-Ltd/bitixe was created on 28 October 2026. On 29 October, tag v0.9.0-beta. Tags continue up to v0.13.6. I don't have the date of each step. Last push on 12 November 2026.",
        "Bitixe is a website. One codebase, two modes: mainnet and testnet. The [app.bitixe.com](https://app.bitixe.com) instance uses real money, on perpetuals. The site is in French, with English as an option. It shows live Bitunix results for copy trading, accounts (scrypt, sessions, email verification), an offer A of Bitunix copy trading, and an offer B: a subscription with a paper instance of the engine, per subscriber. A “Kairo chat” space sits in the base and is switched off. The [[kairo|Kairo]] engine is not included in the official app.",
        "Stack: Flask, SQLite, waitress, Nginx, public Bitunix APIs. Stripe is disabled. Shaï Company files Bitixe under Web3 & Crypto.",
      ],
    },
  },
  {
    slug: "shaiscompany-deploiement",
    date: "2026-11-02",
    title: {
      fr: "L'outil qui déploie shaiscompany.com",
      en: "The tool that deploys shaiscompany.com",
    },
    description: {
      fr: "Dépôt privé de scripts, ouvert le 2 novembre 2026. Le code React d'origine n'y est pas.",
      en: "A private repo of scripts, opened on 2 November 2026. The original React source is not in it.",
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
        "Shai-Company-Ltd/shaiscompany est créé le 2 novembre 2026. Dernier commit le 9 novembre. Usage interne, dépôt privé.",
        "Le code source React du site n'est pas dans ce dépôt. Un script `patch.py` applique des changements au bundle déjà compilé : ajustements de contenu autour de Love Map, de Bitixe présenté en Web3 & Crypto, de Fuel Tracker, et des correctifs. Le dossier `dist/` est ce qui part en production. La config Nginx porte des redirections 301.",
        "Le site public reste [shaiscompany.com](https://shaiscompany.com). L'histoire du site vitrine est dans l'article du [[shai-company|1er février]].",
      ],
      en: [
        "Shai-Company-Ltd/shaiscompany was created on 2 November 2026. Last commit on 9 November. Internal use, private repo.",
        "The React source of the site is not in this repo. A `patch.py` script applies changes to the already compiled bundle: content adjustments around Love Map, Bitixe presented as Web3 & Crypto, Fuel Tracker, and fixes. The `dist/` folder is what goes to production. The Nginx config carries 301 redirects.",
        "The public site remains [shaiscompany.com](https://shaiscompany.com). The story of the showcase site is in the [[shai-company|1 February]] post.",
      ],
    },
  },
  {
    slug: "serpentix",
    date: "2026-11-09",
    title: { fr: "Serpentix, projet NSI", en: "Serpentix, an NSI project" },
    description: {
      fr: "Snake multijoueur dans le navigateur, Flask et SQLite. Premier commit le 9 novembre 2026.",
      en: "Multiplayer Snake in the browser, Flask and SQLite. First commit on 9 November 2026.",
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
        "Le dépôt public Dontbyshai/Serpentix est créé le 6 novembre 2026. Premier commit le 9 novembre, dernier le même jour. Quatorze commits. Projet d'école, usage libre pour une démo éducative.",
        "C'est un site Flask, une base SQLite, et un jeu dans le navigateur pour 2 ou 3 joueurs, entre Snake et Slither.io. Inscription et connexion avec mots de passe hachés, fiche joueur, boutique de skins, classement, mode solo, parties en temps réel avec Socket.IO, six bonus, arène dessinée en canvas. Trente et un tests unitaires. L'interface est noir et blanc.",
        "Stack : Python, Flask, Socket.IO, SQLite, HTML, CSS, JavaScript, Jinja, Werkzeug.",
      ],
      en: [
        "The public repo Dontbyshai/Serpentix was created on 6 November 2026. First commit on 9 November, last the same day. Fourteen commits. A school project, free to use for an educational demo.",
        "A Flask site, a SQLite database, and a browser game for 2 or 3 players, somewhere between Snake and Slither.io. Sign-up and sign-in with hashed passwords, a player profile, a skin shop, a leaderboard, a solo mode, real-time matches with Socket.IO, six bonuses, an arena drawn on a canvas. Thirty-one unit tests. The interface is black and white.",
        "Stack: Python, Flask, Socket.IO, SQLite, HTML, CSS, JavaScript, Jinja, Werkzeug.",
      ],
    },
  },
  {
    slug: "snowbound",
    date: null,
    title: { fr: "Snowbound arrive", en: "Snowbound is on the way" },
    description: {
      fr: "Projet de Noël personnel. Pas encore publié, et pas de date.",
      en: "A personal Christmas project. Not published yet, and no date.",
    },
    paragraphs: {
      fr: [
        "Snowbound est un projet perso pour Noël, à côté des autres. Il n'est pas publié.",
        "Je n'ai pas trouvé de dépôt GitHub à ce nom, ni chez Dontbyshai ni dans Shaï Company. Je n'ai donc ni stack ni date. Je les ajouterai ici quand le projet sortira.",
      ],
      en: [
        "Snowbound is a personal project for Christmas, separate from the others. It is not published.",
        "I have not found a GitHub repo by that name, neither under Dontbyshai nor under Shaï Company. So I have neither a stack nor a date. I will add them here when it ships.",
      ],
    },
  },
]
