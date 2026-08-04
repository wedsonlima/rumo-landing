<template>
  <section id="funcionalidades" class="s-managers">
    <div class="s-managers__container">

      <!-- Coluna esquerda -->
      <div class="s-managers__left">
        <div class="s-managers__header">
          <p class="s-managers__label">// PERFORMANCE PARA GESTORES</p>
          <AppearWhen split="words" :threshold="0.5">
            <h2 class="s-managers__title">Da estratégia à execução em minutos</h2>
          </AppearWhen>
          <p class="s-managers__description">
            Descubra como transformar suas metas comerciais em ações práticas
            sem a burocracia de planilhas ou a dependência de suporte técnico.
          </p>
        </div>

        <Accordion
          v-model="activeItem"
          type="single"
          class="s-managers__accordion"
        >
          <AccordionItem
            v-for="item in accordionItems"
            :key="item.value"
            :value="item.value"
            class="s-managers__accordion-item"
          >
            <AccordionTrigger class="s-managers__accordion-trigger">
              <span>{{ item.title }}</span>
              <template #icon>
                <IconChevronDown class="s-managers__accordion-icon" />
              </template>
            </AccordionTrigger>
            <AccordionContent class="s-managers__accordion-content">
              <span v-if="item.body">{{ item.body }}</span>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <!-- Coluna direita -->
      <div class="s-managers__right">
        <div class="s-managers__panel-wrapper">
          <span class="s-managers__dot s-managers__dot--tl" />
          <span class="s-managers__dot s-managers__dot--tr" />
          <span class="s-managers__dot s-managers__dot--bl" />
          <span class="s-managers__dot s-managers__dot--br" />

          <div class="s-managers__panel-border">
            <NuxtImg
              :src="panelImage"
              alt=""
              width="608"
              height="524"
              format="webp"
              loading="lazy"
              class="s-managers__panel-img"
            />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const activeItem = ref<string>('item-1')

const panelImage = computed(() =>
  activeItem.value === 'item-1'
    ? '/images/manager-campaing.png'
    : '/images/manager-dashboard.png'
)

const accordionItems = [
  {
    value: 'item-1',
    title: 'Gestão por campanhas',
    body: 'Através do painel, o gestor detém autonomia total para definir o objetivo e o período da campanha, estabelecer o orçamento (seja ele de valor fixo ou variável), selecionar as equipes, regras e métricas específicas de performance.',
  },
  {
    value: 'item-2',
    title: 'Controle total em tempo real',
    body: 'O gestor visualiza a evolução das metas, o desempenho das equipes e o consumo do orçamento em tempo real, identificando rapidamente desvios e oportunidades de ajuste. Ao mesmo tempo, cada vendedor acompanha seu próprio progresso pelo app, entendendo quanto já avançou, o que falta para bater a meta e como está posicionado no ranking.',
  },
]
</script>

<style scoped>
@reference "~/assets/css/main.css";

/* ── Section ─────────────────────────────────────────────── */
.s-managers {
  @apply w-full flex flex-col items-center bg-gray-1 border-t border-b border-gray-6;
}

.s-managers__container {
  @apply lg:flex items-center w-full max-w-304 py-20 overflow-hidden border-l border-r border-gray-6;
}

/* ── Left column ──────────────────────────────────────────── */
.s-managers__left {
  @apply flex flex-col gap-20 lg:w-[608px] shrink-0 border-t border-b border-gray-6;
}

.s-managers__header {
  @apply flex flex-col gap-4 p-5 lg:p-8;
}

.s-managers__label {
  @apply font-mono font-normal text-xs text-primary tracking-[0.12px] whitespace-nowrap;
}

.s-managers__title {
  @apply font-tight font-medium text-[30px] text-gray-12 leading-[1.15] tracking-[0.3px];
}

.s-managers__description {
  @apply font-sans font-normal text-sm text-gray-11 leading-[1.4];
}

/* ── Accordion ───────────────────────────────────────────── */
.s-managers__accordion {
  @apply flex flex-col w-full;
}

:deep([data-slot="accordion-item"]) {
  @apply border-t border-b border-gray-6 rounded-none;
}

:deep([data-slot="accordion-item"][data-state="open"]) {
  @apply border-t-primary border-b-primary;
}

:deep([data-slot="accordion-trigger"]) {
  @apply flex items-center justify-between gap-[10px] w-full px-6 py-8
         font-tight font-medium text-[20px] tracking-[0.2px] text-gray-11
         leading-[1.15] text-left no-underline hover:no-underline;
}

:deep([data-slot="accordion-item"][data-state="open"] [data-slot="accordion-trigger"]) {
  @apply text-gray-12;
}

.s-managers__accordion-icon {
  @apply size-6 shrink-0 text-gray-11 transition-transform duration-200;
}

:deep([data-slot="accordion-item"][data-state="open"]) .s-managers__accordion-icon {
  @apply rotate-180 text-gray-12;
}

:deep([data-slot="accordion-content"]) {
  @apply font-sans font-normal text-sm text-gray-11 leading-[1.4];
}

:deep([data-slot="accordion-content"] > div) {
  @apply px-6 pt-0 pb-8;
}

/* ── Right column ────────────────────────────────────────── */
.s-managers__right {
  @apply lg:flex flex-1 flex-row items-center self-stretch;
}

.s-managers__panel-wrapper {
  @apply relative lg:flex flex-1 h-full;
}

.s-managers__panel-border {
  @apply relative flex flex-1 flex-col h-full overflow-hidden border border-gray-6;
}

.s-managers__dot {
  @apply absolute size-[5px] bg-gray-8 z-10;
}
.s-managers__dot--tl { @apply left-[-3px] top-[-3px]; }
.s-managers__dot--tr { @apply right-[-3px] top-[-3px]; }
.s-managers__dot--bl { @apply left-[-3px] bottom-[-3px]; }
.s-managers__dot--br { @apply right-[-3px] bottom-[-3px]; }

/* ── Panel image ─────────────────────────────────────────── */
.s-managers__panel-img {
  @apply lg:absolute top-16 left-16 block max-w-none;
  width: clamp(500px, 135%, 900px);
}
</style>
