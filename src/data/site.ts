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
  { href: "mailto:dontbyshai@gmail.com", label: "E-mail" },
] as const
