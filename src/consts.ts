import type { SvgComponent } from "astro/types"
import Email from "@/assets/icons/email.svg"
import GitHub from "@/assets/icons/github.svg"
import RSS from "@/assets/icons/rss.svg"
import Twitter from "@/assets/icons/twitter.svg"

import Instagram from "@/assets/icons/instagram.svg"
import LinkedIn from "@/assets/icons/linkedin.svg"
import Spotify from "@/assets/icons/spotify.svg"

export const SITE = {
  title: "shai.biz",
  description: "Développeur, Cybersécurité, Crypto, Entrepreneur",
  locale: "en-US",
  dir: "ltr",
  defaultPageImage: "/static/twitter-card.png",
  defaultPostImage: "/static/twitter-card.png",
} as const

export const NAVIGATION = [
  { href: "/blog", label: "Blog" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
]

export const SOCIALS: { href: string; label: string; icon: SvgComponent }[] = [
  { href: "https://github.com/Dontbyshai", label: "GitHub", icon: GitHub },
  { href: "https://twitter.com/Dontbyshai", label: "Twitter", icon: Twitter },
  { href: "https://www.linkedin.com/in/shai-chomette-dugat-276a542a0/", label: "LinkedIn", icon: LinkedIn },
  { href: "https://www.instagram.com/dontbyshai/", label: "Instagram", icon: Instagram },
  { href: "https://open.spotify.com/intl-fr/artist/47Nz6g4SrrfU7kFEjpxP6k", label: "Spotify", icon: Spotify },
  { href: "mailto:dontbyshai@gmail.com", label: "Email", icon: Email },
]
