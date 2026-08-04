# RNavbar Fixed + Scroll Behavior — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Tornar a RNavbar fixa no topo com hide-on-scroll-down, show-on-scroll-up, backdrop blur ao rolar e smooth scroll com âncoras para as seções.

**Architecture:** Três mudanças independentes: (1) CSS globals para smooth scroll e offset de layout, (2) `id` attributes nas seções-alvo, (3) refactor da `RNavbar.vue` com `position: fixed`, lógica de scroll em `<script setup>` e classes dinâmicas de transição/blur.

**Tech Stack:** Nuxt 4, Vue 3, Tailwind CSS v4, CSS `position: fixed`, `translateY`, `backdrop-blur`

**Spec:** `docs/superpowers/specs/2026-03-10-r-navbar-fixed-scroll.md`

---

## Arquivos

| Ação | Arquivo | Responsabilidade |
|---|---|---|
| Modificar | `app/assets/css/main.css` | `scroll-behavior`, `scroll-padding-top`, `padding-top` no body |
| Modificar | `app/components/SHero.vue` | `id="o-rumo"` na `<section>` |
| Modificar | `app/components/SManagers.vue` | `id="funcionalidades"` na `<section>` |
| Modificar | `app/components/SSystem.vue` | `id="performance"` na `<section>` |
| Modificar | `app/components/STestimonials.vue` | `id="depoimentos"` na `<section>` |
| Modificar | `app/components/SPlans.vue` | `id="planos"` na `<section>` |
| Modificar | `app/components/RNavbar.vue` | `fixed`, scroll listener, classes dinâmicas |

---

## Chunk 1: CSS Globals + Anchor IDs

### Task 1: CSS globals — smooth scroll e layout offset

**Arquivos:**
- Modificar: `app/assets/css/main.css`

O arquivo atual não tem bloco `html { }` nem `body { }`. Com a navbar fixa (`position: fixed`), ela sai do fluxo do documento — o body precisa de `padding-top` para que o primeiro conteúdo não fique escondido atrás dela. A altura da navbar é `~73px` (py-6 = 24px × 2 + logo 37px = ~85px). Usar `80px` como valor seguro.

- [ ] **Step 1: Adicionar bloco `html` e `body` em `main.css`**

  Adicionar ao final do arquivo `app/assets/css/main.css`:

  ```css
  /* ─────────────────────────────────────────────────────────────
     Layout base
  ───────────────────────────────────────────────────────────── */
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 88px; /* navbar height + breathing room */
  }

  body {
    padding-top: 80px; /* compensate fixed navbar height */
  }
  ```

- [ ] **Step 2: Verificar build**

  ```bash
  cd /Users/damisgarcia/projects/rumo.com.br/frontpage && bun run build 2>&1 | grep -E "error|ERROR|✨"
  ```
  Esperado: `✨ Build complete!`

- [ ] **Step 3: Commit**

  ```bash
  git add app/assets/css/main.css
  git commit -m "style: adicionar smooth scroll e padding-top para navbar fixa"
  ```

---

### Task 2: Adicionar `id` nas seções-alvo

**Arquivos:**
- Modificar: `app/components/SHero.vue` (linha 2)
- Modificar: `app/components/SManagers.vue` (linha 2)
- Modificar: `app/components/SSystem.vue` (linha 2)
- Modificar: `app/components/STestimonials.vue` (linha 2)
- Modificar: `app/components/SPlans.vue` (linha 2)

Cada seção tem `<section class="s-xxx">` na linha 2. Basta adicionar o `id` correspondente.

- [ ] **Step 1: Adicionar `id="o-rumo"` em `SHero.vue`**

  Substituir:
  ```vue
  <section class="s-hero">
  ```
  Por:
  ```vue
  <section id="o-rumo" class="s-hero">
  ```

- [ ] **Step 2: Adicionar `id="funcionalidades"` em `SManagers.vue`**

  Substituir:
  ```vue
  <section class="s-managers">
  ```
  Por:
  ```vue
  <section id="funcionalidades" class="s-managers">
  ```

- [ ] **Step 3: Adicionar `id="performance"` em `SSystem.vue`**

  Substituir:
  ```vue
  <section class="s-system">
  ```
  Por:
  ```vue
  <section id="performance" class="s-system">
  ```

- [ ] **Step 4: Adicionar `id="depoimentos"` em `STestimonials.vue`**

  Substituir:
  ```vue
  <section class="s-testimonials">
  ```
  Por:
  ```vue
  <section id="depoimentos" class="s-testimonials">
  ```

- [ ] **Step 5: Adicionar `id="planos"` em `SPlans.vue`**

  Substituir:
  ```vue
  <section class="s-plans">
  ```
  Por:
  ```vue
  <section id="planos" class="s-plans">
  ```

- [ ] **Step 6: Verificar build**

  ```bash
  cd /Users/damisgarcia/projects/rumo.com.br/frontpage && bun run build 2>&1 | grep -E "error|ERROR|✨"
  ```
  Esperado: `✨ Build complete!`

- [ ] **Step 7: Commit**

  ```bash
  git add app/components/SHero.vue app/components/SManagers.vue app/components/SSystem.vue app/components/STestimonials.vue app/components/SPlans.vue
  git commit -m "feat: adicionar id de âncora nas seções de navegação"
  ```

---

## Chunk 2: RNavbar Refactor

### Task 3: Refatorar RNavbar.vue — fixed + scroll behavior + backdrop blur

**Arquivos:**
- Modificar: `app/components/RNavbar.vue`

**Lógica de scroll:**
- `isHidden`: `true` quando rolando para baixo (delta > 10px)
- `isScrolled`: `true` quando `scrollY > 10px` (ativa backdrop blur)
- Listener adicionado em `onMounted`, removido em `onUnmounted`
- `lastScrollY` rastreia posição anterior

**Classes dinâmicas na `<nav>`:**
- Sempre: `fixed top-0 z-50 transition-transform duration-300`
- `isHidden`: adiciona `-translate-y-full`
- `isScrolled`: adiciona `bg-page-bg/80 backdrop-blur-md`, remove `bg-page-bg`

- [ ] **Step 1: Substituir `RNavbar.vue` com implementação completa**

  ```vue
  <template>
    <nav
      class="r-navbar"
      :class="{
        'r-navbar--hidden': isHidden,
        'r-navbar--scrolled': isScrolled,
      }"
    >
      <div class="r-navbar__container">
        <span class="r-navbar__dot r-navbar__dot--left" />
        <span class="r-navbar__dot r-navbar__dot--right" />

        <!-- brand: logo / identidade -->
        <div class="r-navbar__brand">
          <slot name="brand">
            <a href="/" class="r-navbar__logo">
              <NuxtImg
                src="/images/logo-rumo.png"
                alt="Rumo"
                width="140"
                height="37"
              />
            </a>
          </slot>
        </div>

        <!-- start: navegação principal -->
        <div class="r-navbar__start">
          <slot name="start">
            <ul class="r-navbar__nav">
              <li><a href="#o-rumo" class="r-navbar__link">O Rumo</a></li>
              <li><a href="#funcionalidades" class="r-navbar__link">Funcionalidades</a></li>
              <li><a href="#performance" class="r-navbar__link">Performance</a></li>
              <li><a href="#depoimentos" class="r-navbar__link">Depoimentos</a></li>
              <li><a href="#planos" class="r-navbar__link">Ver Planos</a></li>
            </ul>
          </slot>
        </div>

        <!-- end: ação principal -->
        <div class="r-navbar__end">
          <slot name="end">
            <Button variant="cta">
              Solicitar demonstração
            </Button>
          </slot>
        </div>
      </div>
    </nav>
  </template>

  <script setup lang="ts">
  const isHidden = ref(false)
  const isScrolled = ref(false)
  let lastScrollY = 0

  function onScroll() {
    const currentScrollY = window.scrollY
    const delta = currentScrollY - lastScrollY

    if (Math.abs(delta) > 10) {
      isHidden.value = delta > 0 && currentScrollY > 80
      lastScrollY = currentScrollY
    }

    isScrolled.value = currentScrollY > 10
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })
  </script>

  <style scoped>
  @reference "~/assets/css/main.css";

  .r-navbar {
    @apply fixed top-0 left-0 right-0 z-50
           w-full flex items-center justify-center
           bg-page-bg border-b border-page-border
           transition-transform duration-300 ease-in-out;
  }

  .r-navbar--hidden {
    @apply -translate-y-full;
  }

  .r-navbar--scrolled {
    @apply bg-page-bg/80 backdrop-blur-md border-page-border/60;
  }

  .r-navbar__container {
    @apply relative flex flex-1 items-center justify-between
           max-w-[1216px] px-8 py-6
           border-l border-r border-page-border;
  }

  .r-navbar__dot {
    @apply absolute bottom-[-3px] size-[5px] bg-text-subtle;
  }

  .r-navbar__dot--left  { @apply left-[-3px]; }
  .r-navbar__dot--right { @apply right-[-3px]; }

  .r-navbar__brand {
    @apply shrink-0;
  }

  .r-navbar__logo {
    @apply block h-[37px] w-[139.895px];
  }

  .r-navbar__start {
    @apply flex-1 flex items-center justify-center;
  }

  .r-navbar__nav {
    @apply flex items-center gap-4 list-none m-0 p-0;
  }

  .r-navbar__link {
    @apply font-sans font-normal text-[12px] text-text-muted
           tracking-[0.12px] leading-[1.15] whitespace-nowrap
           no-underline transition-colors hover:text-text-body;
  }

  .r-navbar__end {
    @apply shrink-0 flex items-center;
  }
  </style>
  ```

- [ ] **Step 2: Verificar build**

  ```bash
  cd /Users/damisgarcia/projects/rumo.com.br/frontpage && bun run build 2>&1 | grep -E "error|ERROR|✨"
  ```
  Esperado: `✨ Build complete!`

- [ ] **Step 3: Commit**

  ```bash
  git add app/components/RNavbar.vue
  git commit -m "feat: navbar fixa com hide-on-scroll, show-on-scroll-up e backdrop blur"
  ```

---

## Checklist de Validação

- [ ] Navbar permanece fixa ao rolar a página inteira
- [ ] Navbar desliza para fora (`-translate-y-full`) ao rolar para baixo
- [ ] Navbar reaparece ao rolar para cima
- [ ] Blur + opacidade 80% ativados ao sair do topo (scrollY > 10)
- [ ] Blur removido ao voltar ao topo
- [ ] Clicar em "O Rumo" → scroll suave até `#o-rumo` (SHero)
- [ ] Clicar em "Funcionalidades" → scroll suave até `#funcionalidades` (SManagers)
- [ ] Clicar em "Performance" → scroll suave até `#performance` (SSystem)
- [ ] Clicar em "Depoimentos" → scroll suave até `#depoimentos` (STestimonials)
- [ ] Clicar em "Ver Planos" → scroll suave até `#planos` (SPlans)
- [ ] Topo de cada seção não escondido atrás da navbar (`scroll-padding-top: 88px`)
- [ ] Primeiro conteúdo da página não escondido atrás da navbar (`body padding-top: 80px`)
