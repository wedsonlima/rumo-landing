<template>
  <section id="performance" class="s-system">
    <div class="s-system__container">

      <!-- Header -->
      <div class="s-system__header">
        <p class="s-system__label">// SISTEMA DE PERFORMANCE</p>
        <AppearWhen split="words" :threshold="0.5">
          <h2 class="s-system__title">Uma engine que treina comportamento</h2>
        </AppearWhen>
      </div>

      <!-- Cards grid -->
      <div class="s-system__grid">
        <div
          v-for="card in cards"
          :key="card.title"
          class="s-system__card"
        >
          <span class="s-system__card-accent" />
          <h3 class="s-system__card-title">{{ card.title }}</h3>
          <p class="s-system__card-body">{{ card.body }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    title: 'Regras claras',
    body: 'Metas, critérios de elegibilidade e mecânicas de campanha configuradas com precisão pela aplicação web, sem depender de TI. O que vale, quando vale e quanto vale.',
  },
  {
    title: 'Execução diária',
    body: 'O vendedor abre o app e sabe exatamente onde está, o que falta e o que precisa fazer hoje. A consistência vira hábito, não urgência de última hora.',
  },
  {
    title: 'Comportamento medido',
    body: 'Frequência, engajamento, evolução no ranking, ofensivas concluídas. O gestor enxerga em tempo real quem está no ritmo, quem está em risco e onde intervir.',
  },
  {
    title: 'Comissão ou Premiação?',
    body: 'Com o Rumo, não importa o modelo. O Rumo adapta o incentivo à sua estratégia. Com transparência, controle e responsabilidade',
  },
]
</script>

<style scoped>
@reference "~/assets/css/main.css";

/* ── Section ─────────────────────────────────────────────── */
.s-system {
  @apply w-full flex items-center justify-center bg-gray-1 border-b border-gray-6;
}

/* ── Container ───────────────────────────────────────────── */
.s-system__container {
  @apply flex flex-col gap-12 items-start
         max-w-[1216px] w-full py-20 px-5
         border-x border-gray-6;
}

/* ── Header ──────────────────────────────────────────────── */
.s-system__header {
  @apply flex flex-col gap-4 lg:items-center justify-center w-full;
}

.s-system__label {
  @apply font-mono font-normal text-xs text-primary tracking-[0.12px] whitespace-nowrap;
}

.s-system__title {
  @apply font-tight font-medium text-[30px] text-gray-12
         leading-[1.15] tracking-[0.3px] lg:text-center lg:w-114;
}

/* ── Grid ────────────────────────────────────────────────── */
.s-system__grid {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-between
         w-full lg:px-[104px];
}

/* ── Card ────────────────────────────────────────────────── */
.s-system__card {
  @apply relative flex flex-col gap-6 items-start
         border border-gray-6 rounded-[8px] p-8
         lg:w-[488px];
}

/* ── Card accent bar (vertical, primary, left edge) ─────── */
.s-system__card-accent {
  @apply absolute bg-primary rounded-full w-[3px] h-10 left-[-2px] top-[25px];
}

/* ── Card text ───────────────────────────────────────────── */
.s-system__card-title {
  @apply font-tight font-medium text-2xl text-gray-12
         leading-[1.15] tracking-[0.24px];
}

.s-system__card-body {
  @apply font-sans font-normal text-sm text-gray-11 leading-[1.4];
}
</style>
