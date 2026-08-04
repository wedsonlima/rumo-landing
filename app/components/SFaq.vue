<script setup lang="ts">
const faqs = [
  {
    id: 'item-1',
    number: '01',
    question: 'Para quem é o Rumo?',
    answer:
      'Para gestores e times comerciais que precisam de clareza total no funil de vendas. O Rumo foi criado para quem quer acompanhar metas, organizar oportunidades e melhorar a performance do time de vendas sem complicação.',
  },
  {
    id: 'item-2',
    number: '02',
    question: 'Quanto tempo leva para implementar?',
    answer:
      'A implementação é rápida. A maioria dos times está operando em até 48 horas. Sem necessidade de integração complexa — basta criar a conta, configurar o funil e convidar o time.',
  },
  {
    id: 'item-3',
    number: '03',
    question: 'O Rumo substitui o meu CRM ou ERP?',
    answer:
      'O Rumo complementa seu CRM existente, focando na gestão de metas e performance comercial. Ele não é um substituto, mas uma camada de visibilidade que dá clareza ao time sobre onde estão e o que precisam fazer para bater a meta.',
  },
  {
    id: 'item-4',
    number: '04',
    question: 'O time comercial precisa de treinamento para usar o app?',
    answer:
      'Não. O Rumo foi pensado para ser intuitivo. A maioria dos vendedores começa a usar sem nenhum treinamento formal. O onboarding é guiado e o suporte está disponível para quem precisar.',
  },
  {
    id: 'item-5',
    number: '05',
    question: 'O Rumo funciona para time de vendas de qualquer tamanho?',
    answer:
      'Sim. Do time de 2 pessoas até operações com dezenas de vendedores. Os planos escalam com o tamanho do time e as funcionalidades se adaptam ao nível de complexidade da operação.',
  },
]
</script>

<template>
  <section class="s-faq">
    <div class="s-faq__container">
      <!-- Lado esquerdo: label + título -->
      <div class="s-faq__header">
        <p class="s-faq__label">// FAQ</p>
        <AppearWhen split="words" :threshold="0.5">
          <h2 class="s-faq__title">
            Perguntas que todo gestor faz antes de contratar o Rumo
          </h2>
        </AppearWhen>
      </div>

      <!-- Lado direito: accordion -->
      <div class="s-faq__list">
        <Accordion
          type="single"
          collapsible
          default-value="item-1"
          class="s-faq__accordion"
        >
          <AccordionItem
            v-for="faq in faqs"
            :key="faq.id"
            :value="faq.id"
            class="s-faq__item"
          >
            <AccordionTrigger class="s-faq__trigger !p-8 !items-center hover:no-underline">
              <div class="s-faq__trigger-inner">
                <span class="s-faq__number">{{ faq.number }}</span>
                <span class="s-faq__question">{{ faq.question }}</span>
              </div>
              <template #icon>
                <svg
                  class="s-faq__chevron"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 12L16 20L24 12"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </template>
            </AccordionTrigger>
            <AccordionContent class="s-faq__content p-8">
              {{ faq.answer }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "~/assets/css/main.css";

/* ── Seção ───────────────────────────────────────────────── */
.s-faq {
  @apply w-full flex items-center justify-center
         bg-page-bg border-t border-b border-page-border
         py-20;
}

.s-faq__container {
  @apply flex max-lg:flex-col items-start justify-between
         max-w-[1216px] w-full px-5;
}

/* ── Cabeçalho (esquerda) ────────────────────────────────── */
.s-faq__header {
  @apply flex flex-col gap-4 lg:w-[384px] shrink-0;
}

.s-faq__label {
  @apply font-mono font-normal text-[12px] text-primary
         tracking-[0.12px] leading-[1.15] whitespace-nowrap;
}

.s-faq__title {
  @apply font-tight font-medium not-italic text-[36px]
         text-text-primary tracking-[0.36px] leading-[1.15];
}

/* ── Lista accordion (direita) ───────────────────────────── */
.s-faq__list {
  @apply lg:w-[698px] max-lg:py-10 shrink-0;
}

.s-faq__accordion {
  @apply flex flex-col gap-8;
}

/* ── Item: card separado com borda e cantos arredondados ─── */
.s-faq__item {
  @apply rounded-[8px] overflow-hidden;
  /* Override do padrão shadcn (border-b / last:border-b-0) */
  border: 1px solid var(--color-page-border) !important;
}

/* ── Trigger ─────────────────────────────────────────────── */
.s-faq__trigger {
  @apply w-full;
}

/* Separador quando aberto */
:deep([data-slot="accordion-item"][data-state="open"] [data-slot="accordion-trigger"]) {
  @apply border-b border-page-border;
}

.s-faq__trigger-inner {
  @apply flex items-center gap-4 leading-[1.15];
}

.s-faq__number {
  @apply font-mono font-normal text-[14px] text-text-muted tracking-[0.14px];
}

.s-faq__question {
  @apply font-tight font-medium not-italic text-base lg:text-[20px]
         text-text-primary tracking-[0.2px];
}

/* ── Chevron ─────────────────────────────────────────────── */
.s-faq__chevron {
  @apply text-text-primary shrink-0 transition-transform duration-200;
}

:deep([data-slot="accordion-item"][data-state="open"] .s-faq__chevron) {
  @apply rotate-180;
}

/* ── Conteúdo ────────────────────────────────────────────── */
/* .s-faq__content é aplicado ao div interno do AccordionContent */
.s-faq__content {
  @apply font-sans font-normal text-[16px] text-gray-6 leading-[24px];
}
</style>
