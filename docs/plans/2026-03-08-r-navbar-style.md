# RNavbar Style Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Estilizar o componente RNavbar de acordo com o design do Figma usando BEM + @apply.

**Architecture:** Estilos em `<style scoped>` com nomenclatura BEM. Classes `.r-navbar*` mapeiam 1:1 para os elementos do Figma. Logo usa asset temporário do Figma — precisará ser substituído por arquivo definitivo.

**Tech Stack:** Nuxt 4, Vue 3, @nuxtjs/tailwindcss (Tailwind v3), BEM + @apply

---

### Referência Figma

Logo URL (expira em 7 dias): `https://www.figma.com/api/mcp/asset/0f7dc73c-a553-476e-8dba-47251e5c93af`

| Elemento | Valores |
|---|---|
| Nav bg | `#111111` |
| Border | `#292929` |
| Dots | `#565656`, `5×5px` |
| Logo | `139.895×37px` |
| Links | Inter Regular 12px, `#7d7d7d`, gap 16px, tracking 0.12px |
| CTA bg | `#e55a37` |
| CTA border | `#eeaf9f` (left, right, top) |
| CTA shadow | `0px 10px 40px 0px #592a1f` |
| CTA text | JetBrains Mono 12px uppercase branco |

---

### Task 1: Reescrever RNavbar.vue

**Files:**
- Modify: `app/components/RNavbar.vue`

**Step 1: Substituir conteúdo do componente**

```vue
<template>
  <nav class="r-navbar">
    <div class="r-navbar__container">
      <span class="r-navbar__dot r-navbar__dot--left" />
      <span class="r-navbar__dot r-navbar__dot--right" />

      <a href="/" class="r-navbar__logo">
        <img
          src="https://www.figma.com/api/mcp/asset/0f7dc73c-a553-476e-8dba-47251e5c93af"
          alt="Rumo"
          width="140"
          height="37"
        />
      </a>

      <div class="r-navbar__actions">
        <ul class="r-navbar__nav">
          <li><a href="#o-rumo" class="r-navbar__link">O Rumo</a></li>
          <li><a href="#funcionalidades" class="r-navbar__link">Funcionalidades</a></li>
          <li><a href="#performance" class="r-navbar__link">Performance</a></li>
          <li><a href="#depoimentos" class="r-navbar__link">Depoimentos</a></li>
          <li><a href="#planos" class="r-navbar__link">Ver Planos</a></li>
        </ul>

        <button class="r-navbar__cta">
          Solicitar demonstração
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.r-navbar {
  @apply w-full flex items-center justify-center bg-[#111111] border-b border-[#292929];
}

.r-navbar__container {
  @apply relative flex flex-1 items-center justify-between
         max-w-[1216px] px-8 py-6
         border-l border-r border-[#292929];
}

.r-navbar__dot {
  @apply absolute bottom-[-3px] size-[5px] bg-[#565656];
}

.r-navbar__dot--left  { @apply left-[-3px]; }
.r-navbar__dot--right { @apply right-[-3px]; }

.r-navbar__logo {
  @apply shrink-0 block h-[37px] w-[139.895px];
}

.r-navbar__logo img {
  @apply h-full w-full object-contain;
}

.r-navbar__actions {
  @apply flex items-center gap-6;
}

.r-navbar__nav {
  @apply flex items-center gap-4 list-none m-0 p-0;
}

.r-navbar__link {
  @apply font-sans font-normal text-[12px] text-[#7d7d7d]
         tracking-[0.12px] leading-[1.15] whitespace-nowrap
         no-underline transition-colors hover:text-[#bfbfbf];
}

.r-navbar__cta {
  @apply font-mono font-normal text-[12px] text-white uppercase
         whitespace-nowrap leading-5
         bg-[#e55a37] rounded-[999px]
         px-[18px] py-[10px]
         border-t border-l border-r border-[#eeaf9f]
         shadow-[0px_10px_40px_0px_#592a1f]
         cursor-pointer transition-opacity hover:opacity-90;
}
</style>
```

---

### Task 2: Commit

```bash
git add app/components/RNavbar.vue docs/plans/2026-03-08-r-navbar-style.md
git commit -m "feat: estilizar RNavbar de acordo com Figma (BEM + @apply)"
```
