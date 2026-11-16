export type Locale = "fr" | "en"

export type Localized = Record<Locale, string>

export type PostImage = {
  src: string
  width: number
  height: number
  wide?: boolean
  alt: Localized
  caption: Localized
}

export type PostLink = {
  href: string
  label: Localized
}

export type Post = {
  slug: string
  date: string | null
  title: Localized
  description: Localized
  image?: PostImage
  links?: PostLink[]
  paragraphs: Record<Locale, string[]>
}

export type Highlight = {
  name: string
  blogSlug: string
  monogram?: string
  image?: { src: string; alt: Localized }
  text: Localized
  link?: { href: string; label: string }
}

export type WorkLink = {
  href: string
  label: Localized
}

export type WorkItem = {
  name: string
  status: Localized
  summary: Localized
  stack?: string
  license?: Localized
  links: WorkLink[]
  blogSlug?: string
}

export type WorkGroup = {
  title: Localized
  items: WorkItem[]
}
