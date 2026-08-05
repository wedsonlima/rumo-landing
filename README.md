# Rumo — Landing Page

Site institucional da **Rumo**, plataforma de performance comercial para times de vendas.

Nuxt 4 gerado como site 100% estático e publicado no GitHub Pages.

**No ar:** https://userumo.com.br

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
| Analytics | GA4 via `gtag.js` (só no build de produção) |
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

O site é servido na raiz de `userumo.com.br`. Isso é controlado por dois valores
no topo do [`nuxt.config.ts`](nuxt.config.ts):

```ts
const baseURL    = process.env.NUXT_APP_BASE_URL       || '/'
const siteOrigin = process.env.NUXT_PUBLIC_SITE_ORIGIN || 'https://userumo.com.br'
```

`siteUrl` (usado em canonical, `og:image` e sitemap) é derivado dos dois.

O domínio em si mora em dois lugares: [`public/CNAME`](public/CNAME) e a
configuração de Pages do repositório (Settings → Pages → Custom domain). O
deploy é feito por workflow, então quem manda de fato é a configuração do
repositório — o `CNAME` fica versionado para o domínio ser rastreável no código.

### Buildando para a URL do github.io

O project site (`https://wedsonlima.github.io/rumo-landing/`) serve a partir de
`/<repo>/`, então **todo caminho absoluto precisa desse prefixo**:

```sh
NUXT_APP_BASE_URL=/rumo-landing/ \
NUXT_PUBLIC_SITE_ORIGIN=https://wedsonlima.github.io \
bun run generate
```

Nesse modo o `robots.txt` deixa de ser gerado — crawlers só leem `robots.txt` na
raiz do domínio, e o módulo se recusa a emiti-lo sob um base path.

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
