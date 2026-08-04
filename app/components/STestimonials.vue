<template>
  <section id="depoimentos" class="s-testimonials">
    <div class="s-testimonials__container">

      <!-- Left Panel -->
      <div class="s-testimonials__left">
        <div class="s-testimonials__heading">
          <p class="s-testimonials__label">// DEPOIMENTOS</p>
          <AppearWhen split="words" :threshold="0.5">
            <h2 class="s-testimonials__title">Quem usa não volta para as planilhas</h2>
          </AppearWhen>
        </div>
        <div class="s-testimonials__excerpt">
          <p class="s-testimonials__excerpt-text">O Braduca iniciou o uso do Rumo no meio de uma campanha ativa. Em
            poucos dias, o comportamento do time mudou e o ritmo de vendas se tornou visivelmente mais consistente.</p>
        </div>
      </div>

      <!-- Card -->
      <div class="s-testimonials__card">
        <div class="s-testimonials__card-body">
          <div class="s-testimonials__card-quote">
            <p>Antes do Rumo, tínhamos metas definidas, mas pouca visibilidade sobre o que realmente
              estava acontecendo durante o mês. As vendas aconteciam de forma irregular e muitas
              decisões seriam tomadas no fechamento, quando já era tarde para corrigir o rumo.</p>

            <p>Quando iniciamos o uso do Rumo no meio do mês, a mudança foi imediata. O time passou
              a acompanhar suas metas diariamente, o ritmo aumentou e as vendas se tornaram
              consistentes. Pela primeira vez tivemos clareza para agir durante a campanha — e não
              depois dela.</p>
          </div>
          <div class="text-white">Cleber Sena</div>
          <div class="mb-4 text-white">Diretor — Braduca</div>
          <NuxtImg src="https://www.braduca.com.br/logo-white.svg" alt="Braduca" width="172" height="32"
            class="s-testimonials__card-logo" />
        </div>
        <div class="s-testimonials__card-stats">
          <div class="s-testimonials__stat s-testimonials__stat--bordered">
            <p class="s-testimonials__stat-value">+32%</p>
            <p class="s-testimonials__stat-label">Aumento de vendas do produto</p>
          </div>
          <div class="s-testimonials__stat">
            <p class="s-testimonials__stat-value">+7 dias</p>
            <p class="s-testimonials__stat-label">Sequência contínua de vendas após adoção do Rumo</p>
          </div>
        </div>
      </div>

      <!-- Decorative quote mark -->
      <div class="s-testimonials__deco" aria-hidden="true">
        <NuxtImg src="/images/testimonials-quote-deco.svg" alt="" aria-hidden="true" width="108" height="87" loading="lazy" />
      </div>

    </div>
  </section>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.s-testimonials {
  @apply w-full flex items-center justify-center bg-page-bg border-t border-b border-page-border;
}

.s-testimonials__container {
  @apply relative lg:flex items-start justify-between max-w-[1216px] w-full py-20 px-5;
}

.s-testimonials__left {
  @apply flex flex-col gap-6 items-start self-stretch shrink-0 lg:gap-12 lg:w-[384px];
}

.s-testimonials__excerpt {
  @apply flex items-center justify-center py-6 w-full border-t border-b border-text-subtle;
}

.s-testimonials__excerpt-text {
  @apply font-sans font-normal text-sm text-text-body leading-[1.4];
}

.s-testimonials__heading {
  @apply flex flex-col gap-4 w-full;
}

.s-testimonials__label {
  @apply font-mono font-normal text-xs text-primary tracking-[0.12px] whitespace-nowrap;
}

.s-testimonials__title {
  @apply font-tight font-medium text-[36px] text-text-primary leading-[1.15] tracking-[0.36px];
}

.s-testimonials__card {
  @apply flex flex-col gap-10 items-start bg-page-bg border border-page-border rounded-[8px] p-10 shrink-0 lg:w-[696px];
}

.s-testimonials__card-body {
  @apply flex flex-col items-start justify-between flex-1 lg:min-h-0 w-full;
}

.s-testimonials__card-quote {
  @apply font-tight font-medium text-2xl text-text-primary leading-[1.3] tracking-[0.24px] mb-4 flex flex-col gap-4;
}

.s-testimonials__card-logo {
  @apply block shrink-0;
}

.s-testimonials__card-stats {
  @apply flex flex-wrap gap-10 items-start pt-6 pr-10 w-full border-t border-page-border shrink-0;
}

.s-testimonials__stat {
  @apply flex flex-col items-start justify-between h-20;
}

.s-testimonials__stat--bordered {
  @apply border-r border-page-border pr-10 lg:w-54 shrink-0;
}

.s-testimonials__stat-value {
  @apply font-tight font-medium text-[32px] text-primary-light leading-[1.2] tracking-[0.32px] w-full;
}

.s-testimonials__stat-label {
  @apply font-mono font-normal text-base text-text-primary leading-[1.15] tracking-[0.16px] w-full;
}

.s-testimonials__deco {
  @apply hidden lg:block lg:absolute lg:right-0 lg:bottom-22 pointer-events-none;
}
</style>
