# shai.biz

Site perso de Shaï : accueil, blog, projets open source et à propos.

- `bun install`
- `bun run dev` : site local sur http://localhost:4321
- `bun run build` : vérifie le contenu, les types, puis génère `dist/`
- `bun run deploy:cloudflare` : build puis mise en ligne (Cloudflare)

Le contenu est dans `src/data/` (articles, projets, à propos). Les images sont dans `public/images/`.
Aucun secret dans le dépôt : les fichiers `.env` sont ignorés.
