# SHero Layout Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Implementar o layout do SHero conforme Figma — phone mockup central, colunas esquerda/direita, dot grid background, BEM + @apply.

**Architecture:** Componente Vue com `<style scoped>` + BEM + `@apply`. Assets temporários do Figma via URL (expiram em 7 dias). Sem lógica — layout puro.

**Tech Stack:** Nuxt 4, Vue 3, Tailwind v4 via @tailwindcss/vite, tokens de `app/assets/css/main.css`

---

### Assets Figma (URLs temporárias — substituir por assets definitivos)

| Asset | URL |
|---|---|
| iPhone Body | `https://www.figma.com/api/mcp/asset/ff7282ee-c534-4eb5-af39-6ed8febc3702` |
| Screen mask | `https://www.figma.com/api/mcp/asset/c32499c6-5e8d-41b5-8ff9-5c3e52a61da4` |
| App screenshot | `https://www.figma.com/api/mcp/asset/11380ffb-7b9d-4d26-9ab9-2f8e573a64da` |
| Base wallpaper | `https://www.figma.com/api/mcp/asset/0e21013e-46d7-4be4-9a71-067c0063f28e` |
| SVG decorativo (heading) | `https://www.figma.com/api/mcp/asset/33762e75-6c3e-42f6-90db-8107e7a26802` |
| Ícone Apple | `https://www.figma.com/api/mcp/asset/5c05ba0d-d75d-4303-bedc-aa09627fe9ed` |
| Ícone Web | `https://www.figma.com/api/mcp/asset/e91fbcef-07fe-41d0-ba4a-0bbd4871b89d` |
| Ícone Android | `https://www.figma.com/api/mcp/asset/382f5f74-d94a-4714-99a8-a15274a34f2b` |

---

### Task 1: Reescrever SHero.vue

**Files:**
- Modify: `app/components/SHero.vue`

```vue
<template>
  <section class="s-hero">
    <div class="s-hero__container">
      <span class="s-hero__dot s-hero__dot--left" />
      <span class="s-hero__dot s-hero__dot--right" />

      <!-- Phone mockup — absoluto, centralizado -->
      <div class="s-hero__phone">
        <img
          class="s-hero__phone-body"
          src="https://www.figma.com/api/mcp/asset/ff7282ee-c534-4eb5-af39-6ed8febc3702"
          alt=""
          aria-hidden="true"
        />
        <div class="s-hero__phone-screen">
          <img
            class="s-hero__phone-screenshot"
            src="https://www.figma.com/api/mcp/asset/11380ffb-7b9d-4d26-9ab9-2f8e573a64da"
            alt="App Rumo"
          />
        </div>
      </div>

      <!-- Coluna esquerda -->
      <div class="s-hero__col-left">
        <div class="s-hero__heading-wrap">
          <p class="s-hero__label">// DE CAOS PARA MÁQUINA DE VENDAS</p>
          <h1 class="s-hero__heading">
            Pare de torcer para o time vender e comece a governar o resultado!
          </h1>
          <img
            class="s-hero__heading-deco"
            src="https://www.figma.com/api/mcp/asset/33762e75-6c3e-42f6-90db-8107e7a26802"
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>

      <!-- Coluna direita -->
      <div class="s-hero__col-right">
        <div class="s-hero__body-wrap">
          <p class="s-hero__body">
            Somos a camada de inteligência que transforma o caos do time comercial
            em uma máquina de vendas previsível, engajada e de alta performance.
          </p>
          <Button variant="cta">Solicitar demonstração</Button>
        </div>

        <div class="s-hero__platforms">
          <span class="s-hero__platforms-label">Plataformas disponíveis:</span>
          <div class="s-hero__platforms-icons">
            <img class="s-hero__platform-icon" src="https://www.figma.com/api/mcp/asset/5c05ba0d-d75d-4303-bedc-aa09627fe9ed" alt="iOS" width="24" height="24" />
            <img class="s-hero__platform-icon" src="https://www.figma.com/api/mcp/asset/e91fbcef-07fe-41d0-ba4a-0bbd4871b89d" alt="Web" width="24" height="24" />
            <img class="s-hero__platform-icon" src="https://www.figma.com/api/mcp/asset/382f5f74-d94a-4714-99a8-a15274a34f2b" alt="Android" width="24" height="24" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "~/assets/css/main.css";

/* ── Seção ──────────────────────────────────────────── */
.s-hero {
  @apply w-full flex items-center justify-center border-b border-page-border;
  background-image: radial-gradient(circle, var(--color-page-border) 1px, transparent 1px);
  background-size: 24px 24px;
}

/* ── Container ──────────────────────────────────────── */
.s-hero__container {
  @apply relative flex flex-1 items-end justify-between
         max-w-[1216px] px-8 pb-8 pt-[280px]
         border-l border-r border-page-border;
}

/* ── Dots decorativos ───────────────────────────────── */
.s-hero__dot {
  @apply absolute bottom-[-3px] size-[5px] bg-text-subtle;
}
.s-hero__dot--left  { @apply left-[-3px]; }
.s-hero__dot--right { @apply right-[-3px]; }

/* ── Phone mockup ───────────────────────────────────── */
.s-hero__phone {
  @apply absolute left-1/2 -translate-x-1/2 top-16
         w-[280px] h-[570px];
  filter: drop-shadow(0px 10px 40px var(--color-primary-shadow));
}

.s-hero__phone-body {
  @apply absolute inset-0 w-full h-full object-contain;
}

.s-hero__phone-screen {
  @apply absolute overflow-hidden rounded-[34px];
  inset: 2.21% 5.09%;
}

.s-hero__phone-screenshot {
  @apply w-full h-full object-cover object-top;
}

/* ── Coluna esquerda ────────────────────────────────── */
.s-hero__col-left {
  @apply flex flex-col justify-end w-[352px] self-stretch;
}

.s-hero__heading-wrap {
  @apply relative flex flex-col gap-4;
}

.s-hero__label {
  @apply font-mono font-normal text-xs text-primary tracking-[0.12px] whitespace-nowrap;
}

.s-hero__heading {
  @apply font-tight font-semibold text-[40px] text-text-primary
         leading-tight tracking-[0.4px];
}

.s-hero__heading-deco {
  @apply absolute pointer-events-none;
  top: 40px;
  left: 145px;
  width: 113px;
  height: 37px;
}

/* ── Coluna direita ─────────────────────────────────── */
.s-hero__col-right {
  @apply flex flex-col justify-end gap-10 w-[352px] self-stretch;
}

.s-hero__body-wrap {
  @apply flex flex-col gap-6;
}

.s-hero__body {
  @apply font-sans font-normal text-sm text-text-body leading-[1.4];
}

/* ── Plataformas ────────────────────────────────────── */
.s-hero__platforms {
  @apply flex items-center gap-[10px]
         border-l border-text-muted pl-[10px];
}

.s-hero__platforms-label {
  @apply font-sans font-normal text-xs text-text-muted
         tracking-[0.12px] whitespace-nowrap;
}

.s-hero__platforms-icons {
  @apply flex items-center gap-[10px];
}

.s-hero__platform-icon {
  @apply size-6 object-contain;
}
</style>
```

---

### Task 2: Commit

```bash
git add app/components/SHero.vue docs/plans/2026-03-08-s-hero-layout.md
git commit -m "feat: implementar layout SHero conforme Figma (BEM + @apply)"
```
