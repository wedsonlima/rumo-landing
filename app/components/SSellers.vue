<template>
  <section class="s-sellers">
    <div class="s-sellers__container">

      <!-- Header -->
      <div class="s-sellers__header">
        <div class="s-sellers__header-text">
          <p class="s-sellers__label">// PERFORMANCE PARA VENDEDORES</p>
          <AppearWhen split="words" :threshold="0.5">
            <h2 class="s-sellers__title">
              Tudo que seu time precisa para performar nas vendas
            </h2>
          </AppearWhen>
        </div>
        <div class="s-sellers__header-deco">
          <span class="s-sellers__deco-line" />
          <span class="s-sellers__deco-line" />
          <span class="s-sellers__deco-line" />
        </div>
      </div>

      <!-- Grid -->
      <div class="s-sellers__grid">

        <!-- Ranking Competitivo -->
        <SellersCard
          title="Ranking Competitivo"
          body="Visibilidade do desempenho para estimular competitividade saudável e senso de urgência. Todos sabem quem lidera, quem está atrás e quem precisa reagir agora."
        >
          <template #image>
            <NuxtImg src="/images/illustration-podium.png" alt="Ranking Competitivo" width="384" height="240" loading="lazy" class="s-sellers__img" />
          </template>
        </SellersCard>

        <!-- Meta Individual -->
        <SellersCard
          title="Meta Individual"
          body="Acompanhamento em tempo real do progresso e gaps. Sem ambiguidade ou desculpas: o vendedor sabe exatamente o que falta para bater a meta antes do fim do mês."
        >
          <template #image>
            <NuxtImg src="/images/illustration-goal.png" alt="Meta Individual" width="384" height="240" loading="lazy" class="s-sellers__img" />
          </template>
        </SellersCard>

        <!-- Ofensiva Semanal -->
        <SellersCard
          title="Ofensiva Semanal"
          body="Micro-metas semanais que criam ritmo e constância comercial. O time age no presente, garantindo presença diária sem esperar o fechamento do mês para reagir."
        >
          <template #image>
            <NuxtImg src="/images/illustration-iniciatives.png" alt="Ofensiva Semanal" width="384" height="240" loading="lazy" class="s-sellers__img" />
          </template>
        </SellersCard>

        <!-- Conteúdo dinâmico -->
        <SellersCard
          title="Conteúdo dinâmico (CMS)"
          body="Centralize a comunicação estratégica. Distribua informações de produtos, treinamentos e atualizações comerciais para quem precisa vender melhor, no momento certo."
        >
          <template #image>
            <NuxtImg src="/images/illustration-cms.png" alt="Conteúdo dinâmico" width="384" height="240" loading="lazy" class="s-sellers__img" />
          </template>
        </SellersCard>

        <!-- Central de Notificações -->
        <SellersCard
          title="Central de Notificações"
          body="Alertas de inatividade e estímulos de performance via push. Notificações diretas, sem ruído ou distrações, focadas em manter o ritmo de execução da equipe."
        >
          <template #image>
            <NuxtImg src="/images/illustration-notifications.png" alt="Central de Notificações" width="384" height="240" loading="lazy" class="s-sellers__img" />
          </template>
        </SellersCard>

        <!-- Feed Social -->
        <SellersCard
          title="Feed Social"
          body="Reconhecimento público baseado em conquistas reais. Um feed focado em motivação social e performance, onde cada post celebra o alcance de objetivos comerciais."
        >
          <template #image>
            <NuxtImg src="/images/illustration-social.png" alt="Feed Social" width="384" height="240" loading="lazy" class="s-sellers__img" />
          </template>
        </SellersCard>

        <!-- Produtos Financeiros (wide) -->
        <SellersCard
          title="Produtos financeiros"
          body="Conecte performance a dinheiro com pagamentos automáticos, antecipação e microcrédito. Gestão de premiações integrada, sem planilhas, retrabalho ou risco."
          :wide="true"
        >
          <template #image>
            <NuxtImg src="/images/illustration-finance.png" alt="Produtos financeiros" format="webp"
              loading="lazy" />
          </template>
        </SellersCard>

        <!-- CTA -->
        <div class="s-sellers__cta">
          <div class="s-sellers__cta-content">
            <NuxtImg src="/images/sellers-card-cta-symbol.svg" alt="" aria-hidden="true" width="38" height="40" loading="lazy"
              class="s-sellers__cta-symbol" />
            <div class="s-sellers__cta-text">
              <h3 class="s-sellers__cta-title">Converse com um consultor</h3>
              <p class="s-sellers__cta-body">Entenda como podemos mudar o seu rumo.</p>
            </div>
          </div>
          <NuxtLink to="/contato" class="s-sellers__cta-btn">
            Solicitar demonstração
            <IconArrowRight class="s-sellers__cta-btn-icon" />
          </NuxtLink>
        </div>

      </div>

      <span class="s-sellers__dot s-sellers__dot--bl" />
      <span class="s-sellers__dot s-sellers__dot--br" />

    </div>
  </section>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.s-sellers {
  @apply w-full flex flex-col items-center bg-gray-1 border-t border-page-border;
}

.s-sellers__container {
  @apply relative flex flex-col gap-12 items-start w-full max-w-304 pt-20 pb-20;
}

.s-sellers__header {
  @apply lg:flex px-5 items-end justify-between w-full;
}

.s-sellers__header-text {
  @apply flex flex-col gap-4 lg:w-[456px];
}

.s-sellers__label {
  @apply font-mono font-normal text-xs text-primary tracking-[0.12px] whitespace-nowrap;
}

.s-sellers__title {
  @apply font-tight font-medium text-[30px] text-gray-12 leading-[1.15] tracking-[0.3px];
}

.s-sellers__header-deco {
  @apply hidden lg:flex flex-col gap-3 shrink-0;
}

.s-sellers__deco-line {
  @apply block h-[2px] w-[100px] bg-primary-dark rounded-full;
}

.s-sellers__grid {
  @apply max-lg:flex max-lg:flex-col lg:grid lg:grid-cols-3 gap-8 w-full px-5;
}

.s-sellers__empty {
  @apply col-span-1;
}

.s-sellers__img {
  @apply absolute inset-0 w-full h-full object-cover;
}

/* ── CTA card ────────────────────────────────────────────── */
.s-sellers__cta {
  @apply flex flex-col justify-between p-8 border border-gray-6
         rounded-xl bg-gray-3 col-span-1;
  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 6px,
    rgba(0, 0, 0, 0.04) 6px,
    rgba(0, 0, 0, 0.04) 7px
  );
}

.s-sellers__cta-content {
  @apply flex flex-col gap-6;
}

.s-sellers__cta-symbol {
  @apply block;
  width: 38px;
  height: 40px;
}

.s-sellers__cta-text {
  @apply flex flex-col gap-2;
}

.s-sellers__cta-title {
  @apply font-tight font-medium text-2xl text-gray-12 leading-[1.15] tracking-[0.24px];
}

.s-sellers__cta-body {
  @apply font-sans font-normal text-sm text-gray-11 leading-[1.4];
}

.s-sellers__cta-btn {
  @apply flex items-center gap-2 min-h-6 font-mono font-normal text-xs text-primary-dark
         uppercase tracking-[0.12px] leading-5 cursor-pointer bg-transparent border-none p-0;
}

.s-sellers__cta-btn-icon {
  @apply size-5;
}

.s-sellers__dot {
  @apply absolute size-[5px] bg-text-subtle;
}
.s-sellers__dot--bl { @apply bottom-[-2px] left-[-3px]; }
.s-sellers__dot--br { @apply bottom-[-2px] right-[-3px]; }
</style>
