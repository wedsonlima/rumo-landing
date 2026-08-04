# Page Skeleton Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Configurar o esqueleto visual da página com dark mode, fontes e tipografia baseadas no design Figma.

**Architecture:** Instalação do `@nuxtjs/tailwindcss` (Tailwind v3), configuração de dark mode via classe, fontes declaradas no `@nuxt/fonts`, tipografia global por tags HTML via `@layer base` no CSS. O site é 100% dark — sem toggle.

**Tech Stack:** Nuxt 4, @nuxtjs/tailwindcss (Tailwind v3.4), @nuxt/fonts, Inter, Inter Tight, JetBrains Mono

---

## Design Tokens (Figma)

| Token | Hex | Uso |
|---|---|---|
| Neutras/Preto | `#111111` | Fundo da página |
| Gray/1 | `#F2F2F2` | Headings |
| Gray/7 | `#BFBFBF` | Texto corpo (p) |
| Gray/9 | `#7D7D7D` | Texto muted |
| Gray/11 | `#565656` | Decorativo (dots) |
| Orange/9 | `#E55A37` | Laranja principal |
| Border | `#292929` | Bordas |

---

### Task 1: Instalar @nuxtjs/tailwindcss

**Files:**
- Modify: `package.json` (via bun add)

**Step 1: Instalar dependência**

```bash
cd /Users/damisgarcia/projects/rumo.com.br/frontpage
bun add -D @nuxtjs/tailwindcss
```

Expected: `@nuxtjs/tailwindcss` adicionado ao `package.json` como devDependency.

---

### Task 2: Criar tailwind.config.ts

**Files:**
- Create: `tailwind.config.ts`

**Step 1: Criar o arquivo**

```typescript
import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{vue,js,ts}',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#E55A37',
          'orange-dark': '#D74C28',
          'orange-light': '#E57B60',
        },
        page: {
          bg: '#111111',
          border: '#292929',
        },
        text: {
          primary: '#F2F2F2',
          body: '#BFBFBF',
          muted: '#7D7D7D',
          subtle: '#565656',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        tight: ['Inter Tight', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config
```

---

### Task 3: Criar assets/css/main.css

**Files:**
- Create: `assets/css/main.css`

**Step 1: Criar o arquivo com diretivas e tipografia base**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply bg-page-bg text-text-body;
  }

  body {
    @apply bg-page-bg font-sans text-text-body;
  }

  /* Headings — Inter Tight SemiBold */
  h1, h2, h3, h4, h5, h6 {
    @apply font-tight font-semibold text-text-primary leading-tight tracking-tight;
  }

  h1 { @apply text-4xl; }  /* 40px — hero */
  h2 { @apply text-3xl; }  /* 32px */
  h3 { @apply text-2xl; }  /* 24px */
  h4 { @apply text-xl; }   /* 20px */
  h5 { @apply text-lg; }   /* 18px */
  h6 { @apply text-base; } /* 16px */

  /* Parágrafo — Inter Regular */
  p {
    @apply font-sans font-normal text-sm text-text-body leading-[1.4];
  }

  /* Texto pequeno */
  small {
    @apply font-sans font-normal text-xs text-text-muted;
  }

  /* Destaque */
  strong, b {
    @apply font-semibold text-text-primary;
  }

  /* Monospace: datas, captions, legends */
  time,
  [datetime] {
    @apply font-mono font-normal text-xs text-text-muted tracking-[0.12px];
  }

  caption {
    @apply font-mono font-normal text-xs text-text-muted tracking-[0.12px];
  }

  legend {
    @apply font-mono font-normal text-xs text-text-muted tracking-[0.12px];
  }
}
```

---

### Task 4: Atualizar nuxt.config.ts

**Files:**
- Modify: `nuxt.config.ts`

**Step 1: Adicionar módulo Tailwind, CSS global e config de fontes**

```typescript
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/fonts', '@nuxt/icon', '@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  devServer: {
    port: 8000,
  },
  css: ['~/assets/css/main.css'],
  fonts: {
    families: [
      { name: 'Inter', weights: [400, 600] },
      { name: 'Inter Tight', weights: [600] },
      { name: 'JetBrains Mono', weights: [400] },
    ],
  },
})
```

---

### Task 5: Adicionar classe dark no <html>

**Files:**
- Modify: `app/app.vue`

**Step 1: Usar useHead para aplicar dark mode estaticamente**

```vue
<template>
  <NuxtRouteAnnouncer />
  <NuxtPage />
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: 'dark',
  },
})
</script>
```

---

### Task 6: Commit

```bash
git add tailwind.config.ts assets/css/main.css nuxt.config.ts app/app.vue package.json bun.lock
git commit -m "feat: configurar esqueleto da página com dark mode, fontes e tipografia base"
```
