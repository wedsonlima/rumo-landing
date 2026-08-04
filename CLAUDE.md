# CLAUDE.md — rumo.com.br frontpage

Leia este arquivo inteiro antes de qualquer ação. Ele define o contexto do projeto, o stack atual e as regras de workflow.

---

## Sobre o Projeto

Site institucional/frontpage da **Rumo**, construído com Nuxt 4 e gerado como
site **100% estático** (`nuxt generate`), publicado no GitHub Pages em
`https://wedsonlima.github.io/rumo-landing/`.

**Não existe servidor.** Nada de rotas em `server/`, `useRequestURL()` para
montar URL absoluta (no prerender o host é o da máquina de build) ou qualquer
coisa que dependa de runtime. Conteúdo mora nos próprios componentes Vue.

---

## Stack Atual

| Camada | Tecnologia |
|---|---|
| Framework | Nuxt 4 (`nuxt ^4.3.1`), saída estática |
| Estilos | Tailwind CSS v4 via `@tailwindcss/vite` |
| Componentes UI | `shadcn-nuxt@2.4.3` — componentes em `app/components/ui/` |
| Fontes | `@nuxt/fonts 0.14.0` (self-hosted no build) |
| Imagens | `@nuxt/image` com provider `ipxStatic` |
| Animação | `gsap` + `SplitText` (import dinâmico no `onMounted`) |
| Vídeo | `plyr` + Vimeo (só inicializa perto da viewport) |
| SEO | `@nuxtjs/sitemap` + `@nuxtjs/robots` |
| Hospedagem | GitHub Pages via `.github/workflows/deploy.yml` |
| Package manager | **bun** (sempre use bun, nunca npm ou yarn) |

### Regras que vêm do build estático

- **Base path `/rumo-landing/`** — `baseURL` e `siteOrigin` ficam no topo do
  `nuxt.config.ts` e são a única fonte de verdade. Nunca escreva caminho
  absoluto na mão: use `<NuxtLink>`, `<NuxtImg>` ou `useSeoPage()`.
- **SEO por página** — sempre `useSeoPage({ title, description, path })`.
  Ele monta canonical e `og:image` absolutos a partir do `siteUrl`.
- **`typescript` é dependência direta** — o compilador de SFC do Vue precisa
  dele para resolver tipos importados em `defineProps`. Mantenha em `^5`;
  a v7 (reescrita nativa) quebra o `@vue/compiler-sfc`.
- **Peso do JS** — dependências pesadas entram por `import()` dinâmico, não no
  bundle inicial.

---

## Estrutura do Projeto

```
rumo-landing/
├── app/
│   ├── app.vue                    # Shell — só <NuxtPage>
│   ├── assets/css/main.css        # Design tokens + tipografia base
│   ├── lib/utils.ts               # cn() helper (shadcn)
│   ├── composables/
│   │   └── useSeoPage.ts          # canonical + OG/Twitter de cada página
│   ├── pages/
│   │   ├── index.vue              # Home — compõe as seções S*
│   │   ├── contato.vue            # WhatsApp + e-mail (sem backend)
│   │   └── politica-de-privacidade.vue
│   └── components/
│       ├── ui/                    # Componentes shadcn (não editar diretamente)
│       │   ├── button/            # Button com variante "cta"
│       │   └── accordion/
│       ├── icons/                 # Ícones como SFC, sempre currentColor
│       ├── R*.vue                 # RNavbar, RFooter, RSeparator
│       └── S*.vue                 # Seções da home (SHero, SPlans, …)
├── public/images/                 # Assets estáticos
├── .github/workflows/deploy.yml   # Build + publish no GitHub Pages
├── nuxt.config.ts                 # baseURL, siteOrigin, módulos, imagens
├── components.json                # Configuração do shadcn-vue
├── docs/plans/                    # Planos de implementação
└── CLAUDE.md                      # Este arquivo
```

> ⚠️ **A extensão do arquivo precisa bater com o conteúdo.** `logo-rumo` e
> `hero-phone-body` eram SVG com extensão `.png`; hospedagem estática define o
> `Content-Type` pela extensão, e o browser se recusa a renderizar SVG servido
> como `image/png` — as duas imagens quebravam em produção. (WebP dentro de um
> `.png` funciona porque o browser faz sniffing; SVG não.)
>
> WebP é aplicado por imagem (`format="webp"`), só onde medimos ganho — nas
> ilustrações chapadas o PNG fica menor que o WebP.

---

## Regras de Workflow

1. **Sempre use `bun`** — `bun add`, `bun run dev`, nunca `npm` ou `yarn`
2. **Dev server roda na porta 8000** — `http://localhost:8000`
3. **Nunca commite sem perguntar** — proponha o commit, aguarde aprovação
4. **Nunca faça push sem perguntar explicitamente**
5. **Brainstorm antes de implementar** — use `superpowers:brainstorming` para qualquer feature nova
6. **Plano antes de código** — use `superpowers:writing-plans` após o brainstorm
7. **Atualize este arquivo** ao final de cada sessão ou tarefa concluída
8. **Implementação via Figma** — sempre que for implementar um layout ou componente a partir do Figma, use o skill `/figma:implement-design` antes de qualquer ação. Forneça a URL do nó Figma como argumento.

---

## Design Tokens

Todos os tokens estão em `app/assets/css/main.css` dentro do bloco `@theme`.

**Regra absoluta: NUNCA use hexadecimais hardcoded em componentes. Use sempre um token.**

### Escala de Cinza (Figma: Gray/1 → Gray/12)

| Token Tailwind | CSS Var | Hex | Uso |
|---|---|---|---|
| `gray-1` | `--color-gray-1` | `#F2F2F2` | texto mais claro |
| `gray-2` | `--color-gray-2` | `#EDEDED` | |
| `gray-3` | `--color-gray-3` | `#E4E4E4` | |
| `gray-4` | `--color-gray-4` | `#DBDBDB` | |
| `gray-5` | `--color-gray-5` | `#D3D3D3` | |
| `gray-6` | `--color-gray-6` | `#CBCBCB` | |
| `gray-7` | `--color-gray-7` | `#BFBFBF` | texto corpo |
| `gray-8` | `--color-gray-8` | `#ACACAC` | |
| `gray-9` | `--color-gray-9` | `#7D7D7D` | texto muted |
| `gray-10` | `--color-gray-10` | `#737373` | |
| `gray-11` | `--color-gray-11` | `#565656` | decorativo (dots) |
| `gray-12` | `--color-gray-12` | `#111111` | fundo da página |

### Cor Primária (Laranja — Figma: Orange/*)

| Token Tailwind | CSS Var | Hex | Uso |
|---|---|---|---|
| `primary` | `--color-primary` | `#E55A37` | cor principal, botões, CTAs |
| `primary-dark` | `--color-primary-dark` | `#D74C28` | hover / pressed |
| `primary-light` | `--color-primary-light` | `#E57B60` | destaque suave |
| `primary-subtle` | `--color-primary-subtle` | `#F3ECEA` | fundo sutil |
| `primary-border` | `--color-primary-border` | `#EEAF9F` | borda do CTA |
| `primary-shadow` | `--color-primary-shadow` | `#592A1F` | cor do glow |

### Cor de Suporte (Figma: Support/*)

| Token Tailwind | CSS Var | Hex | Uso |
|---|---|---|---|
| `support` | `--color-support` | `#35B177` | sucesso, checkmarks |

### Aliases Semânticos

| Token Tailwind | Aponta para | Uso |
|---|---|---|
| `page-bg` | `gray-12` | fundo da página |
| `page-border` | `#292929` | bordas estruturais |
| `text-primary` | `gray-1` | headings |
| `text-body` | `gray-7` | parágrafos |
| `text-muted` | `gray-9` | texto secundário |
| `text-subtle` | `gray-11` | elementos decorativos |

### Sombras

| CSS Var | Valor | Uso |
|---|---|---|
| `--shadow-primary-glow` | `0px 10px 40px 0px var(--color-primary-shadow)` | glow do CTA |

---

## Convenções de Código

- TypeScript em todos os arquivos de configuração
- Componentes Vue em `app/components/`
- Páginas em `app/pages/`
- Conteúdo Markdown em `content/`
- Planos de implementação em `docs/plans/YYYY-MM-DD-<feature>.md`

### Estilização de Componentes

1. **Verificar shadcn/nuxt primeiro** — antes de criar componente do zero, verifique se existe no `shadcn-nuxt`. Se existir, instale e customize.
   - Ref: https://www.shadcn-vue.com/docs/installation/nuxt
   - Componentes ficam em `app/components/ui/`

2. **Padrão BEM com `@apply`** — nomenclatura BEM, estilos via `@apply` em `<style scoped>`.
   ```css
   /* OBRIGATÓRIO em todo <style scoped>: */
   @reference "~/assets/css/main.css";

   /* BEM: bloco__elemento--modificador */
   .card                { @apply bg-page-bg border border-page-border; }
   .card__title         { @apply font-tight font-semibold text-text-primary; }
   .card__title--hero   { @apply text-4xl; }
   .card__body          { @apply font-sans text-sm text-text-body; }
   ```

3. **Sem hexadecimais hardcoded** — use sempre tokens da tabela acima. Exceção: valores sem equivalente no Figma (use CSS var inline).

4. **shadcn com variantes** — para customizar um componente shadcn, adicione uma variante via `cva` no `index.ts`. Nunca sobrescreva as classes base do shadcn diretamente.

### Imagens e Ícones

**Imagens** (fotos, ilustrações, mockups) — usar sempre `<NuxtImg>`:
```vue
<NuxtImg src="/images/hero-phone-body.png" alt="..." width="280" height="570" />
```
- Assets ficam em `public/images/`
- Sempre informar `width` e `height`
- Nunca usar `<img>` diretamente

**Ícones** — criar componente Vue em `app/components/icons/`:
- Nome do arquivo: PascalCase descritivo, ex: `IconEyeOpen.vue`, `IconArrowRight.vue`
- Copiar o SVG do Figma e colocar no `<template>`
- **Obrigatório:** substituir todas as cores hardcoded (`fill`, `stroke`) por `currentColor`
- O componente herda a cor do pai via CSS `color`

```vue
<!-- app/components/icons/IconEyeOpen.vue -->
<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M..." stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/>
  </svg>
</template>
```

Uso:
```vue
<!-- cor herdada do contexto -->
<IconEyeOpen class="text-primary" />
<IconEyeOpen class="text-text-muted size-5" />
```

---

## Histórico de Decisões

| Data | Decisão |
|---|---|
| 2026-03-07 | `@pinia/nuxt` para state management (auto-imports habilitados) |
| 2026-03-07 | `@nuxt/scripts` para gerenciamento de scripts de terceiros |
| 2026-03-08 | Tailwind v4 via `@tailwindcss/vite` (descartado `@nuxtjs/tailwindcss`) |
| 2026-03-08 | Dark mode via `class` — `<html class="dark">` estático (site 100% dark) |
| 2026-03-08 | Fontes: Inter (sans), Inter Tight (headings), JetBrains Mono (mono/labels) |
| 2026-03-08 | Padrão BEM + `@apply` para estilização; `@reference` obrigatório em scoped styles |
| 2026-03-08 | `shadcn-nuxt@2.4.3` como biblioteca base de componentes UI |
| 2026-03-08 | `--color-primary` = `#E55A37` (laranja Figma Orange/9) — cor principal do projeto |
| 2026-03-08 | Escala de cinza `gray-1` a `gray-12` baseada nos tokens do Figma |
| 2026-03-08 | Hexadecimais hardcoded proibidos — usar sempre tokens de `app/assets/css/main.css` |
| 2026-03-08 | `@nuxt/image` instalado — usar `<NuxtImg>` para todas as imagens |
| 2026-03-08 | Ícones como componentes Vue em `app/components/icons/` com `currentColor` |
| 2026-03-10 | Skill `/figma:implement-design` obrigatório para toda implementação via Figma MCP |
| 2026-03-10 | Token `--color-support` (#35B177) adicionado — Figma Support/5, usado em checkmarks |
| 2026-08-04 | Migrado de Vercel/SSR para **GitHub Pages estático** (`nitro.preset: github_pages`) |
| 2026-08-04 | `@nuxt/content` removido — as 2 páginas Markdown viraram `app/pages/*.vue` |
| 2026-08-04 | `@nuxt/icon` removido (não era usado; ícones já eram SFC próprios) |
| 2026-08-04 | `/contato` sem backend — WhatsApp + mailto no lugar do POST pro Google Sheets |
| 2026-08-04 | `useSeoPage()` é a única fonte de canonical/OG — `useRequestURL()` proibido |
| 2026-08-04 | `gsap`, `plyr` e o iframe do Vimeo saem do bundle inicial via `import()` dinâmico |
| 2026-08-04 | `robots.txt` só é gerado quando `baseURL === '/'` (crawler só lê na raiz do domínio) |
