import { posts } from "@/data/posts"
import type { Post } from "@/data/types"

export function getPost(slug: string): Post {
  const post = posts.find((item) => item.slug === slug)
  if (!post) throw new Error(`Article inconnu : ${slug}`)
  return post
}

export function postsNewestFirst(): Array<Post & { date: string }> {
  return posts
    .map((post, index) => ({ post, index }))
    .filter((item): item is { post: Post & { date: string }; index: number } => item.post.date !== null)
    .sort((a, b) => b.post.date.localeCompare(a.post.date) || b.index - a.index)
    .map((item) => item.post)
}

export function upcomingPosts(): Post[] {
  return posts.filter((post) => post.date === null)
}

export function postsByYear(): { year: string; posts: Array<Post & { date: string }> }[] {
  const groups: { year: string; posts: Array<Post & { date: string }> }[] = []
  for (const post of postsNewestFirst()) {
    const year = post.date.slice(0, 4)
    const last = groups.at(-1)
    if (!last || last.year !== year) groups.push({ year, posts: [post] })
    else last.posts.push(post)
  }
  return groups
}

export function neighbors(slug: string): { older: Post | null; newer: Post | null } {
  const chronological = [...postsNewestFirst()].reverse()
  const index = chronological.findIndex((post) => post.slug === slug)
  if (index < 0) return { older: null, newer: null }
  return {
    older: chronological[index - 1] ?? null,
    newer: chronological[index + 1] ?? null,
  }
}
