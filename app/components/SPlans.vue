<template>
  <section id="planos" class="s-plans">
    <div class="s-plans__container">

      <!-- Header -->
      <div class="s-plans__header">
        <div class="s-plans__heading">
          <p class="s-plans__label">// PLANOS</p>
          <AppearWhen split="words" :threshold="0.5">
            <h2 class="s-plans__title">
              <span>Sob medida para</span>
              <span>a sua operação</span>
            </h2>
          </AppearWhen>
        </div>
        <div class="s-plans__header-right">
          <p class="s-plans__description">
            O Rumo se adapta ao seu tamanho, maturidade comercial e estratégia de incentivo. Escolha o modelo que faz sentido agora e evolua conforme crescer.
          </p>
          <IconArrowDownLeft class="s-plans__deco-arrow" />
        </div>
      </div>

      <!-- Cards -->
      <div class="s-plans__cards">

        <!-- SaaS Plan -->
        <div class="s-plans__card">
          <div class="s-plans__card-content">
            <div class="s-plans__card-top">
              <IconIdea class="s-plans__card-icon" />
              <div class="s-plans__card-text">
                <h3 class="s-plans__card-title">Plataforma de Performance</h3>
                <p class="s-plans__card-desc">
                  Para empresas que querem parar de improvisar e ter governança real sobre o time comercial.
                </p>
              </div>
            </div>
            <ul class="s-plans__features">
              <li v-for="item in saasFeatures" :key="item" class="s-plans__feature">
                <IconCheckSquare class="s-plans__feature-icon" />
                <span class="s-plans__feature-text">{{ item }}</span>
              </li>
            </ul>
          </div>
          <NuxtLink to="/contato" class="s-plans__btn s-plans__btn--ghost">
            Solicitar demonstração
          </NuxtLink>
        </div>

        <!-- Premium Plan -->
        <div class="s-plans__card s-plans__card--premium">
          <div class="s-plans__card-glow" aria-hidden="true">
            <NuxtImg src="/images/plans-glow-ellipse.svg" alt="" aria-hidden="true" width="400" height="400" loading="lazy" />
          </div>
          <div class="s-plans__card-content">
            <div class="s-plans__card-top">
              <IconEnergy class="s-plans__card-icon" />
              <div class="s-plans__card-text">
                <h3 class="s-plans__card-title">Performance + Infraestrutura financeira</h3>
                <p class="s-plans__card-desc">
                  Para quem quer ir além da gestão e terceirizar a complexidade operacional dos incentivos.
                </p>
              </div>
            </div>
            <ul class="s-plans__features">
              <li v-for="item in premiumFeatures" :key="item" class="s-plans__feature">
                <IconCheckSquare class="s-plans__feature-icon" />
                <span class="s-plans__feature-text">{{ item }}</span>
              </li>
            </ul>
          </div>
          <NuxtLink to="/contato" class="s-plans__btn s-plans__btn--cta">
            Solicitar demonstração
          </NuxtLink>
        </div>

      </div>

      <!-- Footer note -->
      <div class="s-plans__note">
        <span class="s-plans__note-dot" />
        <span class="s-plans__note-line" />
        <p class="s-plans__note-text">
          Todos os planos são sob consulta. Nossos especialistas constroem o modelo ideal para o seu contexto
        </p>
        <span class="s-plans__note-line" />
        <span class="s-plans__note-dot" />
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const saasFeatures = [
  'Gestão completa de campanhas',
  'Controle de orçamento de incentivo',
  'App iOS e Android para o time',
  'Engajamento e gamificação',
  'Integrações com ERP e sistemas de folha',
  'Dashboards e relatórios em tempo real',
]

const premiumFeatures = [
  'Tudo do plano SaaS',
  'Processamento de pagamento de premiações',
  'Gestão financeira dos incentivos',
  'Antecipação de prêmios para o time',
  'Microcrédito e produtos financeiros',
]
</script>

<style scoped>
@reference "~/assets/css/main.css";

/* ── Section ─────────────────────────────────────────────── */
.s-plans {
  @apply w-full flex items-center justify-center bg-page-bg border-b border-page-border;
}

/* ── Container ───────────────────────────────────────────── */
.s-plans__container {
  @apply flex flex-col gap-12 items-center justify-center max-w-[1216px] w-full py-20 px-5;
}

/* ── Header ──────────────────────────────────────────────── */
.s-plans__header {
  @apply lg:flex items-end justify-between w-full;
}

.s-plans__heading {
  @apply flex flex-col gap-4 lg:w-[280px];
}

.s-plans__label {
  @apply font-mono font-normal text-xs text-primary tracking-[0.12px] whitespace-nowrap;
}

.s-plans__title {
  @apply flex flex-col font-tight font-medium text-[36px] text-text-primary
         leading-[1.15] tracking-[0.36px] mb-2;
}

.s-plans__header-right {
  @apply flex items-end justify-between lg:w-[592px];
}

.s-plans__description {
  @apply font-sans font-normal text-sm text-text-body leading-[1.4] lg:w-90;
}

.s-plans__deco-arrow {
  @apply size-12 text-text-subtle shrink-0;
}

/* ── Cards ───────────────────────────────────────────────── */
.s-plans__cards {
  @apply grid grid-cols-1 lg:grid-cols-2 max-lg:flex-col gap-8 items-start w-full;
}

/* ── Card base ───────────────────────────────────────────── */
.s-plans__card {
  @apply relative flex flex-col gap-12 items-start overflow-hidden
         bg-page-bg border border-page-border rounded-[8px]
         p-8 shrink-0 w-full;
}

/* ── Card Premium ────────────────────────────────────────── */
.s-plans__card--premium {
  @apply border-primary;
}

/* ── Card Glow (Premium decorative background) ───────────── */
.s-plans__card-glow {
  @apply absolute size-[400px] pointer-events-none;
  top: -141px;
  left: -141px;
}

/* ── Card content ────────────────────────────────────────── */
.s-plans__card-content {
  @apply flex flex-col gap-10 items-start w-full relative;
}

/* ── Card top (icon + title/desc) ────────────────────────── */
.s-plans__card-top {
  @apply flex flex-col gap-6 items-start w-full;
}

.s-plans__card-icon {
  @apply size-12 text-text-primary shrink-0;
}

.s-plans__card-text {
  @apply flex flex-col gap-4 items-start w-full;
}

.s-plans__card-title {
  @apply font-tight font-medium text-2xl text-text-primary
         leading-[1.15] tracking-[0.24px];
}

.s-plans__card-desc {
  @apply font-sans font-normal text-sm text-text-body leading-[1.4] lg:w-90;
}

/* ── Features list ───────────────────────────────────────── */
.s-plans__features {
  @apply flex flex-col gap-4 items-start w-full list-none p-0 m-0;
}

.s-plans__feature {
  @apply flex gap-3 items-center w-full;
}

.s-plans__feature-icon {
  @apply size-6 text-support shrink-0;
}

.s-plans__feature-text {
  @apply font-sans font-normal text-sm text-text-body leading-[1.4] whitespace-nowrap;
}

/* ── Buttons ─────────────────────────────────────────────── */
.s-plans__btn {
  @apply flex items-center justify-center px-[18px] py-[10px]
         rounded-full cursor-pointer shrink-0
         font-mono font-normal text-xs uppercase tracking-[0.12px] leading-5
         shadow-[var(--shadow-primary-glow)];
}

.s-plans__btn--ghost {
  @apply border border-gray-8 text-gray-8;
}

.s-plans__btn--ghost:hover {
  @apply border-text-primary text-text-primary;
}

.s-plans__btn--cta {
  @apply bg-primary border-t border-l border-r border-primary-border text-white;
}

.s-plans__btn--cta:hover {
  @apply bg-primary-dark;
}

/* ── Footer note ─────────────────────────────────────────── */
.s-plans__note {
  @apply flex flex-wrap gap-4 items-center justify-center w-full;
}

.s-plans__note-dot {
  @apply block size-[5px] bg-page-border shrink-0;
}

.s-plans__note-line {
  @apply flex-1 h-px bg-page-border;
}

.s-plans__note-text {
  @apply font-mono font-normal text-xs text-text-muted
         tracking-[0.12px] leading-[1.15] uppercase max-lg:text-center lg:whitespace-nowrap lg:shrink-0;
}
</style>
