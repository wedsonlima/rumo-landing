# Tailwind v4 + shadcn-nuxt Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Migrar de Tailwind v3 para v4 e instalar shadcn-nuxt com o componente Button customizado para o Figma.

**Architecture:** Atualizar @nuxtjs/tailwindcss para v7 beta (Tailwind v4), migrar config de JS para CSS (@theme), instalar shadcn-nuxt, adicionar Button e customizar para o design Figma. RNavbar passa a usar o Button do shadcn.

**Tech Stack:** Nuxt 4, @nuxtjs/tailwindcss@7.0.0-beta.1 (Tailwind v4), shadcn-nuxt, shadcn-vue

---

### Task 1: Atualizar @nuxtjs/tailwindcss para v7 beta

**Files:**
- Modify: `package.json` (via bun)

```bash
bun remove @nuxtjs/tailwindcss
bun add -D @nuxtjs/tailwindcss@7.0.0-beta.1
```

---

### Task 2: Migrar app/assets/css/main.css para Tailwind v4

**Files:**
- Modify: `app/assets/css/main.css`

Em v4, as diretivas `@tailwind` são substituídas por `@import "tailwindcss"`.
Cores e fontes customizadas saem do JS e vão para `@theme {}` no CSS.
Dark mode usa `@variant dark`.

```css
@import "tailwindcss";

/* ─── Tema — tokens do Figma ─────────────────────────── */
@theme {
  /* Cores */
  --color-page-bg:        #111111;
  --color-page-border:    #292929;
  --color-text-primary:   #F2F2F2;
  --color-text-body:      #BFBFBF;
  --color-text-muted:     #7D7D7D;
  --color-text-subtle:    #565656;
  --color-brand-orange:   #E55A37;
  --color-brand-orange-dark:  #D74C28;
  --color-brand-orange-light: #E57B60;

  /* Fontes */
  --font-sans:  "Inter", sans-serif;
  --font-tight: "Inter Tight", sans-serif;
  --font-mono:  "JetBrains Mono", monospace;
}

/* ─── Base ────────────────────────────────────────────── */
@layer base {
  html, body {
    @apply bg-page-bg text-text-body font-sans;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-tight);
    @apply font-semibold text-text-primary leading-tight tracking-tight;
  }

  h1 { @apply text-4xl; }
  h2 { @apply text-3xl; }
  h3 { @apply text-2xl; }
  h4 { @apply text-xl; }
  h5 { @apply text-lg; }
  h6 { @apply text-base; }

  p {
    @apply font-sans font-normal text-sm text-text-body leading-[1.4];
  }

  small {
    @apply font-sans font-normal text-xs text-text-muted;
  }

  strong, b {
    @apply font-semibold text-text-primary;
  }

  time, [datetime] {
    font-family: var(--font-mono);
    @apply font-normal text-xs text-text-muted tracking-[0.12px];
  }

  caption, legend {
    font-family: var(--font-mono);
    @apply font-normal text-xs text-text-muted tracking-[0.12px];
  }
}
```

---

### Task 3: Remover tailwind.config.ts

Em Tailwind v4, a configuração JS não é mais necessária — tudo vai para o CSS.

```bash
rm tailwind.config.ts
```

---

### Task 4: Instalar shadcn-nuxt

```bash
bunx nuxi@latest module add shadcn-nuxt
```

Confirmar que `shadcn-nuxt` foi adicionado em `nuxt.config.ts` modules.

---

### Task 5: Configurar shadcn-nuxt no nuxt.config.ts

**Files:**
- Modify: `nuxt.config.ts`

```typescript
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/fonts', '@nuxt/icon', '@nuxtjs/tailwindcss', 'shadcn-nuxt'],
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
  shadcn: {
    prefix: '',
    componentDir: './app/components/ui',
  },
})
```

---

### Task 6: Inicializar shadcn-vue

```bash
bunx shadcn-vue@latest init
```

Selecionar: Zinc como base color (mais próximo do dark palette do Figma).

---

### Task 7: Adicionar componente Button

```bash
bunx shadcn-vue@latest add button
```

Componente gerado em: `app/components/ui/button/index.ts`

---

### Task 8: Customizar Button para o Figma

**Files:**
- Modify: `app/components/ui/button/index.ts` (ou o arquivo .vue gerado)

O shadcn usa `cva` (class-variance-authority) para variantes. Adicionar variante `cta` para o botão laranja do Figma:

```typescript
// Localizar a definição de variants no arquivo gerado e adicionar:
cta: 'font-mono font-normal text-xs text-white uppercase tracking-[0.12px] bg-brand-orange rounded-[999px] px-[18px] py-[10px] border-t border-l border-r border-[#eeaf9f] shadow-[0px_10px_40px_0px_#592a1f] hover:opacity-90 transition-opacity',
```

---

### Task 9: Atualizar RNavbar para usar Button do shadcn

**Files:**
- Modify: `app/components/RNavbar.vue`

Substituir o `<button class="r-navbar__cta">` pelo componente `<Button variant="cta">`:

```vue
<Button variant="cta" as-child>
  <a href="#contato">Solicitar demonstração</a>
</Button>
```

Remover a classe `.r-navbar__cta` do `<style scoped>`.

---

### Task 10: Commit

```bash
git add -A
git commit -m "feat: migrar para Tailwind v4 e instalar shadcn-nuxt com Button"
```
