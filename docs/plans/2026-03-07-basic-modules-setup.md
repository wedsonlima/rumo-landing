# Basic Modules Setup Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Instalar e configurar `@nuxtjs/tailwindcss`, `@pinia/nuxt` e `@nuxt/scripts` no projeto Nuxt 4.

**Architecture:** Adição dos módulos via bun, configuração mínima no `nuxt.config.ts`, criação dos arquivos de configuração do Tailwind e CSS base.

**Tech Stack:** Nuxt 4, Tailwind CSS v3 (`@nuxtjs/tailwindcss`), Pinia (`@pinia/nuxt`), `@nuxt/scripts`

---

### Task 1: Instalar os pacotes

**Files:**
- Modify: `package.json` (via bun)
- Modify: `bun.lock` (automático)

**Step 1: Instalar os três módulos**

```bash
cd /Users/damisgarcia/projects/rumo.com.br/frontpage
bun add @nuxtjs/tailwindcss @pinia/nuxt @nuxt/scripts
```

Expected: Pacotes adicionados a `dependencies` no `package.json` sem erros.

**Step 2: Verificar instalação**

```bash
cat package.json | grep -E "tailwindcss|pinia|scripts"
```

Expected: Linhas com `@nuxtjs/tailwindcss`, `@pinia/nuxt`, `@nuxt/scripts`.

---

### Task 2: Configurar `nuxt.config.ts`

**Files:**
- Modify: `nuxt.config.ts`

**Step 1: Adicionar os módulos ao array**

Substituir o conteúdo de `nuxt.config.ts` por:

```ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/scripts',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})
```

**Step 2: Verificar sintaxe**

```bash
npx nuxi typecheck
```

Expected: Sem erros de tipo.

---

### Task 3: Criar configuração do Tailwind

**Files:**
- Create: `tailwind.config.ts`
- Create: `assets/css/main.css`

**Step 1: Criar `tailwind.config.ts`**

```ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,ts,tsx}',
    './content/**/*.md',
  ],
} satisfies Config
```

**Step 2: Criar `assets/css/main.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Step 3: Referenciar o CSS no `nuxt.config.ts`**

Adicionar a propriedade `css` ao `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: [...],
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})
```

---

### Task 4: Verificar funcionamento

**Step 1: Rodar o servidor de desenvolvimento**

```bash
bun run dev
```

Expected: Servidor sobe sem erros, sem warnings críticos sobre módulos.

**Step 2: Verificar Tailwind funcionando**

No browser (http://localhost:3000), abrir DevTools → verificar que estilos Tailwind estão sendo aplicados (ex: classes como `text-red-500` funcionam em algum componente de teste).

**Step 3: Verificar Pinia**

Confirmar que `defineStore` e `useStore` estão disponíveis sem import manual em um componente Vue (auto-import pelo `@pinia/nuxt`).

---

### Task 5: Commit

**Step 1: Commit da configuração**

```bash
git add nuxt.config.ts tailwind.config.ts assets/css/main.css package.json bun.lock docs/
git commit -m "feat: instalar e configurar tailwindcss, pinia e nuxt-scripts"
```

Expected: Commit criado com sucesso.
