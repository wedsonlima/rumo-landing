# Rumo — Landing Page

Site institucional da **Rumo**, plataforma de performance comercial para times de vendas.

Nuxt 4 gerado como site 100% estático e publicado no GitHub Pages.

**No ar:** https://wedsonlima.github.io/rumo-landing/

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Nuxt 4 (saída estática via `nuxt generate`) |
| Estilos | Tailwind CSS v4 via `@tailwindcss/vite` |
| Componentes UI | `shadcn-nuxt` — em `app/components/ui/` |
| Fontes | `@nuxt/fonts` (self-hosted no build) |
| Imagens | `@nuxt/image` com provider `ipxStatic` |
| Animação | `gsap` + `SplitText` (carregado sob demanda) |
| Vídeo | `plyr` + Vimeo (carregado ao aproximar da viewport) |
| SEO | `@nuxtjs/sitemap` + `@nuxtjs/robots` |
| Package manager | **bun** |

---

## Desenvolvimento

```bash
bun install
bun run dev      # http://localhost:8000
```

## Build

```bash
bun run generate   # gera .output/public
bun run preview    # serve o build local
```

O deploy é automático: todo push na `main` dispara
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), que roda
`bun run generate` e publica `.output/public` no GitHub Pages.

---

## Base path e domínio

O site é servido em `/rumo-landing/` (GitHub Pages project site), então **todo
caminho absoluto precisa desse prefixo**. Isso é controlado por dois valores no
topo do [`nuxt.config.ts`](nuxt.config.ts):

```ts
const baseURL    = process.env.NUXT_APP_BASE_URL       || '/rumo-landing/'
const siteOrigin = process.env.NUXT_PUBLIC_SITE_ORIGIN || 'https://wedsonlima.github.io'
```

`siteUrl` (usado em canonical, `og:image` e sitemap) é derivado dos dois.

### Migrando para domínio próprio

1. Crie `public/CNAME` com o domínio (ex.: `userumo.com.br`)
2. Aponte o DNS para o GitHub Pages
3. Defina no workflow:
   ```yaml
   env:
     NUXT_APP_BASE_URL: /
     NUXT_PUBLIC_SITE_ORIGIN: https://userumo.com.br
   ```

Com `NUXT_APP_BASE_URL=/`, o `robots.txt` passa a ser gerado automaticamente —
ele é omitido no subcaminho porque crawlers só leem `robots.txt` na raiz do
domínio.

---

## Estrutura

```
app/
├── app.vue                       # shell (NuxtPage)
├── assets/css/main.css           # design tokens + tipografia base
├── composables/useSeoPage.ts     # canonical + OG/Twitter de cada página
├── components/
│   ├── ui/                       # shadcn (accordion, button)
│   ├── icons/                    # ícones como SFC, sempre currentColor
│   ├── R*.vue                    # navbar, footer, separator
│   └── S*.vue                    # seções da home
└── pages/
    ├── index.vue                 # home (compõe as seções)
    ├── contato.vue               # WhatsApp + e-mail
    └── politica-de-privacidade.vue
public/images/                    # assets estáticos
```

## Contato

A página `/contato` não tem backend: leva direto para WhatsApp e e-mail.
Hospedagem estática não tem servidor para receber um POST nem guardar segredo.
