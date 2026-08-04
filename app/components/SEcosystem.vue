<template>
  <section class="s-ecosystem">
    <div class="s-ecosystem__container">
      <span class="s-ecosystem__dot s-ecosystem__dot--tl" />
      <span class="s-ecosystem__dot s-ecosystem__dot--tr" />
      <span class="s-ecosystem__dot s-ecosystem__dot--bl" />
      <span class="s-ecosystem__dot s-ecosystem__dot--br" />

      <!-- Header -->
      <div class="s-ecosystem__header">
        <div class="s-ecosystem__header-inner">
          <p class="s-ecosystem__label">// NÃO SOMOS UM SISTEMA DE COMISSÕES</p>
          <AppearWhen split="words" :threshold="0.5">
            <h2 class="s-ecosystem__title">
              Somos um <span class="s-ecosystem__title-accent">/ecossistema/</span> de performance em vendas e metas
            </h2>
          </AppearWhen>
        </div>
      </div>

      <!-- Cards -->
      <div class="s-ecosystem__cards">

        <!-- Card: modelo antigo -->
        <div class="s-ecosystem__card s-ecosystem__card--old">
          <div class="s-ecosystem__card-header">
            <div class="s-ecosystem__badge">
              <IconHourglass class="s-ecosystem__badge-icon text-text-muted" />
              <span class="s-ecosystem__badge-label s-ecosystem__badge-label--muted">MODELO ANTIGO</span>
            </div>
            <h3 class="s-ecosystem__card-title">Onde os sistemas comuns param</h3>
          </div>
          <p class="s-ecosystem__card-body">
            ERP e CRM organizam processos e relacionamentos, mas deixam uma lacuna
            crítica: o foco real na performance comercial. Nenhum impulsiona a
            ponta final da venda.
          </p>
        </div>

        <!-- Card: modelo atual -->
        <div class="s-ecosystem__card s-ecosystem__card--new">

          <!-- Texto -->
          <div class="s-ecosystem__card-content">
            <div class="s-ecosystem__card-header">
              <div class="s-ecosystem__badge">
                <IconEnergy class="s-ecosystem__badge-icon text-primary" />
                <span class="s-ecosystem__badge-label s-ecosystem__badge-label--primary">MODELO ATUAL</span>
              </div>
              <h3 class="s-ecosystem__card-title">A peça que faltava para sua performance</h3>
            </div>
            <p class="s-ecosystem__card-body">
              O Rumo é a camada que faltava para unir planejamento e execução. É onde
              o incentivo se transforma em comportamento e o comportamento gera
              resultados previsíveis para o seu negócio.
            </p>
          </div>

          <!-- Chart -->
          <div class="s-ecosystem__chart">
            <!-- Labels -->
            <div class="s-ecosystem__chart-labels">
              <div class="s-ecosystem__chart-label-group">
                <span class="s-ecosystem__chart-line" />
                <span class="s-ecosystem__chart-label-text s-ecosystem__chart-label-text--old">MÉTODO ANTIGO</span>
              </div>
              <div class="s-ecosystem__chart-label-group s-ecosystem__chart-label-group--new">
                <span class="s-ecosystem__chart-line s-ecosystem__chart-line--new" />
                <span class="s-ecosystem__chart-label-text s-ecosystem__chart-label-text--new">RUMO</span>
              </div>
            </div>

            <!-- Bars -->
            <div class="s-ecosystem__bars">
              <div
                v-for="(bar, i) in chartBars"
                :key="i"
                class="s-ecosystem__bar"
                :class="`s-ecosystem__bar--${bar.type}`"
                :style="{ height: bar.h + 'px' }"
              />
            </div>

            <!-- Gradient overlay -->
            <div class="s-ecosystem__chart-overlay" />
          </div>

        </div>
      </div>

      <!-- CTA Row -->
      <div class="s-ecosystem__cta-row">
        <p class="s-ecosystem__cta-text">
          O Rumo <span class="s-ecosystem__cta-text--normal">implementa o que ERP e CRM não conseguem: </span>
          <span class="s-ecosystem__cta-text--accent">governança de performance comercial.</span>
        </p>
        <div class="s-ecosystem__cta-box">
          <span class="s-ecosystem__cta-box-dot s-ecosystem__cta-box-dot--tl" />
          <span class="s-ecosystem__cta-box-dot s-ecosystem__cta-box-dot--tr" />
          <span class="s-ecosystem__cta-box-dot s-ecosystem__cta-box-dot--bl" />
          <span class="s-ecosystem__cta-box-dot s-ecosystem__cta-box-dot--br" />
          <NuxtLink to="/contato" class="s-ecosystem__cta-btn">Solicitar demonstração</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const chartBars = [
  { h: 84,  type: 'old' },
  { h: 113, type: 'old' },
  { h: 55,  type: 'old' },
  { h: 98,  type: 'old' },
  { h: 84,  type: 'old' },
  { h: 98,  type: 'old' },
  { h: 55,  type: 'new' },
  { h: 69,  type: 'new' },
  { h: 84,  type: 'new' },
  { h: 98,  type: 'new' },
  { h: 113, type: 'new' },
]
</script>

<style scoped>
@reference "~/assets/css/main.css";

/* ── Section ─────────────────────────────────────────────── */
.s-ecosystem {
  @apply w-full flex items-center justify-center border-t border-page-border;
}

/* ── Container ───────────────────────────────────────────── */
.s-ecosystem__container {
  @apply relative flex flex-col flex-1 gap-10 items-start
         px-5 py-20
         border-l border-r border-page-border
         lg:gap-12 lg:max-w-304 lg:px-8 lg:pt-[140px] lg:pb-20;
}

/* ── Dots decorativos ─────────────────────────────────────── */
.s-ecosystem__dot {
  @apply absolute size-[5px] bg-text-subtle;
}
.s-ecosystem__dot--tl { @apply left-[-3px] top-[-3px]; }
.s-ecosystem__dot--tr { @apply right-[-3px] top-[-3px]; }
.s-ecosystem__dot--bl { @apply left-[-3px] bottom-[-2px]; }
.s-ecosystem__dot--br { @apply right-[-3px] bottom-[-2px]; }

/* ── Header ──────────────────────────────────────────────── */
.s-ecosystem__header {
  @apply flex w-full items-center lg:justify-center;
}

.s-ecosystem__header-inner {
  @apply flex flex-col gap-4 lg:items-center w-full lg:w-114;
}

.s-ecosystem__label {
  @apply font-mono font-normal text-xs text-primary tracking-[0.12px] whitespace-nowrap;
}

.s-ecosystem__title {
  @apply font-tight font-semibold text-[30px] text-text-primary
         lg:text-center leading-[1.15] tracking-[0.3px];
}

.s-ecosystem__title-accent {
  @apply text-primary;
}

/* ── CTA Row ─────────────────────────────────────────────── */
.s-ecosystem__cta-row {
  @apply flex flex-col max-lg:gap-6 lg:flex-row lg:items-center justify-between w-full py-12;
}

.s-ecosystem__cta-text {
  @apply font-tight font-medium text-2xl leading-[1.15] tracking-[0.24px]
         text-text-primary lg:w-[695px] whitespace-pre-wrap;
}

.s-ecosystem__cta-text--normal {
  @apply text-text-primary;
}

.s-ecosystem__cta-text--accent {
  @apply text-primary block;
}

.s-ecosystem__cta-box {
  @apply relative bg-[#292929] border border-text-subtle p-3 flex flex-col gap-[10px] items-start shrink-0;
}

.s-ecosystem__cta-box-dot {
  @apply absolute size-[5px] bg-text-subtle;
}
.s-ecosystem__cta-box-dot--tl { @apply left-[-3px] top-[-3px]; }
.s-ecosystem__cta-box-dot--tr { @apply right-[-3px] top-[-3px]; }
.s-ecosystem__cta-box-dot--bl { @apply left-[-3px] bottom-[-3px]; }
.s-ecosystem__cta-box-dot--br { @apply right-[-3px] bottom-[-3px]; }

.s-ecosystem__cta-btn {
  @apply bg-primary border-t border-l border-r border-primary-border
         rounded-full px-[18px] py-[10px]
         font-mono font-normal text-xs text-white uppercase tracking-[0.12px]
         whitespace-nowrap w-full text-center cursor-pointer;
  box-shadow: var(--shadow-primary-glow);
}

/* ── Cards ───────────────────────────────────────────────── */
.s-ecosystem__cards {
  @apply flex flex-col gap-8 w-full items-stretch lg:flex-row;
}

/* Card base */
.s-ecosystem__card {
  @apply bg-surface rounded-[8px] border border-page-border;
}

/* Left card */
.s-ecosystem__card--old {
  @apply flex flex-col gap-12 p-8 w-full lg:w-[384px] shrink-0;
}

/* Right card */
.s-ecosystem__card--new {
  @apply flex-1 relative overflow-hidden flex flex-col lg:flex-row;
}

/* ── Card internals ──────────────────────────────────────── */
.s-ecosystem__card-content {
  @apply flex flex-col gap-12 w-full p-8 z-10 lg:w-90 lg:shrink-0;
}

.s-ecosystem__card-header {
  @apply flex flex-col gap-4;
}

.s-ecosystem__badge {
  @apply flex items-center gap-1;
}

.s-ecosystem__badge-icon {
  @apply size-[14px];
}

.s-ecosystem__badge-label {
  @apply font-mono font-normal text-xs tracking-[0.12px] whitespace-nowrap;
}
.s-ecosystem__badge-label--muted   { @apply text-text-muted; }
.s-ecosystem__badge-label--primary { @apply text-primary; }

.s-ecosystem__card-title {
  @apply font-tight font-semibold text-2xl text-text-primary
         leading-[1.15] tracking-[0.24px];
}

.s-ecosystem__card-body {
  @apply font-sans font-normal text-sm text-gray-8 leading-[1.4];
}

/* ── Chart ───────────────────────────────────────────────── */
.s-ecosystem__chart {
  @apply relative w-full h-58 overflow-hidden
         flex flex-col justify-end pb-8
         lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-70 lg:h-auto lg:overflow-visible;
}

/* Labels row */
.s-ecosystem__chart-labels {
  @apply flex items-end px-[10px] pb-3 gap-[16px];
}

.s-ecosystem__chart-label-group {
  @apply flex flex-col gap-[6px];
}

.s-ecosystem__chart-line {
  @apply block h-px bg-gray-10 opacity-60;
  width: 130px;
}
.s-ecosystem__chart-line--new {
  @apply bg-primary opacity-100;
  width: 104px;
}

.s-ecosystem__chart-label-text {
  @apply font-mono font-normal text-[10px] tracking-[0.1px] leading-[1.15] whitespace-nowrap;
}
.s-ecosystem__chart-label-text--old { @apply text-gray-10; }
.s-ecosystem__chart-label-text--new { @apply text-primary; }

/* Bars */
.s-ecosystem__bars {
  @apply flex items-end gap-[6px] px-[10px];
}

.s-ecosystem__bar {
  @apply w-[20px] shrink-0 rounded-full;
}

.s-ecosystem__bar--old {
  @apply bg-gray-9;
  border: 1.4px solid var(--color-gray-8);
  border-bottom: none;
}

.s-ecosystem__bar--new {
  @apply bg-primary;
  border: 1.4px solid var(--color-primary-border);
  border-bottom: none;
  box-shadow: 0px 14px 58px 0px var(--color-primary-shadow);
}

/* Gradient overlay */
.s-ecosystem__chart-overlay {
  @apply absolute inset-0 pointer-events-none;
  background: radial-gradient(
    ellipse 110% 90% at 50% 40%,
    transparent 0%,
    var(--color-surface) 80%
  );
}
</style>
