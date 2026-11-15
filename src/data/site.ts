import type { Locale } from "@/data/types"

export const SITE = {
  name: "shai.biz",
  author: "Shaï Chomette-Dugat",
  email: "dontbyshai@gmail.com",
  description: {
    fr: "Développeur, cybersécurité, crypto, entrepreneur.",
    en: "Developer, cybersecurity, crypto, entrepreneur.",
  } satisfies Record<Locale, string>,
}

export const SOCIALS = [
  { href: "https://github.com/Dontbyshai", label: "GitHub" },
  { href: "https://twitter.com/Dontbyshai", label: "X" },
  {
    href: "https://www.linkedin.com/in/shai-chomette-dugat-276a542a0/",
    label: "LinkedIn",
  },
  { href: "https://www.instagram.com/dontbyshai/", label: "Instagram" },
  {
    href: "https://open.spotify.com/intl-fr/artist/47Nz6g4SrrfU7kFEjpxP6k",
    label: "Spotify",
  },
  { href: "mailto:dontbyshai@gmail.com", label: "E-mail" },
] as const
