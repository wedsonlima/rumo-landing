# SManagers Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implementar a seção `SManagers` com layout de duas colunas, tema claro, accordion à esquerda e mockup do painel admin à direita.

**Architecture:** Seção light-themed (única no site dark) com `bg-gray-1`. Coluna esquerda tem header + shadcn Accordion com 2 itens; o item aberto recebe `border-primary` (laranja), o fechado `border-gray-6`. Coluna direita exibe um card branco estático com logo e badge ADMIN simulando o painel.

**Tech Stack:** Vue 3 / Nuxt 4 · Tailwind CSS v4 + BEM `@apply` · shadcn-nuxt Accordion (reka-ui) · `<NuxtImg>` para imagens · `IconChevronDown.vue` para o ícone do accordion

---

## Referência Visual (Figma)

- **Node:** `1646:7198` — arquivo `i857NtD652l3slSGH0lZUZ`
- **URL:** https://www.figma.com/design/i857NtD652l3slSGH0lZUZ/Rumo?node-id=1646-7198

### Layout geral

```
┌─────────────────────────────────────────────┐
│ bg-gray-1  border-t/b border-gray-6         │
│ ┌─────────────────────────────────────────┐  │
│ │ max-w-[1216px]  py-20  flex items-center│  │
│ │ border-l/r border-gray-6                │  │
│ │                                         │  │
│ │  [col-esquerda 608px] [col-direita flex]│  │
│ └─────────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
```

### Coluna esquerda (608px, gap-20)

```
┌────────────────────────────────────┐
│  p-8                               │
│  // PERFORMANCE PARA GESTORES      │  ← mono, primary, 12px
│  Da estratégia à execução em       │  ← Inter Tight Medium, 30px, gray-12
│  minutos                           │
│  Descubra como transformar...      │  ← Inter Regular, 14px, gray-11
└────────────────────────────────────┘
┌────────────────────────────────────┐
│  border-t border-b border-primary  │  ← ITEM ABERTO
│  px-6 py-8                         │
│  Gestão por campanhas     [↑]       │  ← Inter Tight Medium, 20px, gray-12
│  Através do painel...              │  ← Inter Regular, 14px, gray-11
├────────────────────────────────────┤
│  border-t border-b border-gray-6   │  ← ITEM FECHADO
│  px-6 py-8                         │
│  Controle total em tempo real [↓]  │  ← Inter Tight Medium, 20px, gray-11 (muted)
└────────────────────────────────────┘
```

### Coluna direita (flex-1, self-stretch, overflow-hidden)

```
┌────────────────────────────────────┐
│  border border-gray-6              │
│  bg-gray-1  relative  h-full       │
│                                    │
│  ┌──────────────────────────────┐  │
│  │ bg-white  rounded-tl-[24px]  │  │  ← card absoluto bottom-0
│  │ shadow[-10px_-10px_50px_...]  │  │
│  │ left-[64px]  h-[460px]       │  │
│  │ w-[544px]                    │  │
│  │                              │  │
│  │ [logo rumo]  [ADMIN badge]   │  │  ← top-[97px]
│  │ ─────────────────────────── │  │  ← line top-[145px]
│  │                              │  │
│  └──────────────────────────────┘  │
└────────────────────────────────────┘
```

---

## Tokens de cor — Seção Clara

> Atenção: esta seção **inverte** o tema. Usar a escala de cinzas diretamente (não os aliases semânticos do tema escuro).

| Uso | Token Tailwind | Hex |
|---|---|---|
| Fundo da seção | `bg-gray-1` | `#F2F2F2` |
| Bordas estruturais | `border-gray-6` | `#CBCBCB` |
| Título h2 | `text-gray-12` | `#111111` |
| Corpo / subtítulo aberto | `text-gray-11` | `#565656` |
| Título item fechado | `text-gray-11` | `#565656` |
| Badge ADMIN bg | `bg-gray-4` | `#DBDBDB` |
| Badge ADMIN text | `text-gray-11` | `#565656` |
| Border item aberto | `border-primary` | `#E55A37` |
| Card branco | `bg-white` | `#FFFFFF` |

---

## Mapa de Arquivos

| Arquivo | Ação | Responsabilidade |
|---|---|---|
| `app/components/SManagers.vue` | Modificar | Componente principal da seção |
| `app/components/icons/IconChevronDown.vue` | Criar | Ícone chevron para accordion |
| `public/images/managers-rumo-logo.png` | Download | Logo Rumo para o mockup |

---

## Chunk 1: Assets e Ícone

### Task 1: Download do logo

**Arquivos:**
- Criar: `public/images/managers-rumo-logo.png`

- [ ] Baixar o logo do Figma:

```bash
curl -sL "https://www.figma.com/api/mcp/asset/3c9da1ff-0f26-4c22-ae89-8ec2457dbb74" \
  -o public/images/managers-rumo-logo.png
```

- [ ] Verificar o arquivo:

```bash
ls -lh public/images/managers-rumo-logo.png
```

Esperado: arquivo com alguns KB.

- [ ] Commit:

```bash
git add public/images/managers-rumo-logo.png
git commit -m "feat: adicionar asset logo para s-managers"
```

---

### Task 2: Criar IconChevronDown.vue

**Arquivos:**
- Criar: `app/components/icons/IconChevronDown.vue`

O Figma usa o componente `arrow-down-01` (chevron apontando para baixo). Criar como componente Vue com `currentColor`.

- [ ] Criar o arquivo:

```vue
<!-- app/components/icons/IconChevronDown.vue -->
<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>
```

- [ ] Commit:

```bash
git add app/components/icons/IconChevronDown.vue
git commit -m "feat: adicionar IconChevronDown para accordion"
```

---

## Chunk 2: Componente SManagers

### Task 3: Implementar SManagers.vue

**Arquivos:**
- Modificar: `app/components/SManagers.vue`

#### 3a — Estrutura do template

- [ ] Substituir o skeleton pelo template completo:

```vue
<template>
  <section class="s-managers">
    <div class="s-managers__container">

      <!-- Coluna esquerda -->
      <div class="s-managers__left">
        <div class="s-managers__header">
          <p class="s-managers__label">// PERFORMANCE PARA GESTORES</p>
          <h2 class="s-managers__title">Da estratégia à execução em minutos</h2>
          <p class="s-managers__description">
            Descubra como transformar suas metas comerciais em ações práticas
            sem a burocracia de planilhas ou a dependência de suporte técnico.
          </p>
        </div>

        <Accordion
          type="single"
          default-value="item-1"
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
            <AccordionContent
              v-if="item.body"
              class="s-managers__accordion-content"
            >
              {{ item.body }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <!-- Coluna direita -->
      <div class="s-managers__right">
        <div class="s-managers__panel-wrapper">
          <!-- Dots decorativos -->
          <span class="s-managers__dot s-managers__dot--tl" />
          <span class="s-managers__dot s-managers__dot--tr" />
          <span class="s-managers__dot s-managers__dot--bl" />
          <span class="s-managers__dot s-managers__dot--br" />

          <div class="s-managers__panel-border">
            <!-- Card branco -->
            <div class="s-managers__card">
              <!-- Topbar -->
              <div class="s-managers__card-topbar">
                <NuxtImg
                  src="/images/managers-rumo-logo.png"
                  alt="Rumo"
                  width="91"
                  height="24"
                  class="s-managers__card-logo"
                />
                <span class="s-managers__card-badge">ADMIN</span>
              </div>
              <!-- Separator -->
              <div class="s-managers__card-separator" />
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
```

#### 3b — Script setup

- [ ] Adicionar script:

```vue
<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const accordionItems = [
  {
    value: 'item-1',
    title: 'Gestão por campanhas',
    body: 'Através do painel, o gestor detém autonomia total para definir o objetivo e o período da campanha, estabelecer o orçamento (seja ele de valor fixo ou variável), selecionar as equipes, regras e métricas específicas de performance.',
  },
  {
    value: 'item-2',
    title: 'Controle total em tempo real',
    body: null,
  },
]
</script>
```

#### 3c — Estilos BEM

- [ ] Adicionar `<style scoped>` completo:

```vue
<style scoped>
@reference "~/assets/css/main.css";

/* ── Section ─────────────────────────────────────────────── */
.s-managers {
  @apply w-full flex flex-col items-center
         bg-gray-1 border-t border-b border-gray-6;
}

/* ── Container ───────────────────────────────────────────── */
.s-managers__container {
  @apply flex items-center w-full max-w-[1216px]
         py-20 overflow-hidden
         border-l border-r border-gray-6;
}

/* ── Coluna esquerda ─────────────────────────────────────── */
.s-managers__left {
  @apply flex flex-col gap-20 w-[608px] shrink-0
         border-t border-b border-gray-6;
}

.s-managers__header {
  @apply flex flex-col gap-4 p-8;
}

.s-managers__label {
  @apply font-mono font-normal text-xs text-primary tracking-[0.12px] whitespace-nowrap;
}

.s-managers__title {
  @apply font-tight font-medium text-[30px] text-gray-12
         leading-[1.15] tracking-[0.3px];
}

.s-managers__description {
  @apply font-sans font-normal text-sm text-gray-11 leading-[1.4];
}

/* ── Accordion ───────────────────────────────────────────── */
.s-managers__accordion {
  @apply flex flex-col w-full;
}

.s-managers__accordion-item {
  @apply border-t border-b border-gray-6 rounded-none;
}

/* item aberto: trocar borda para primary */
.s-managers__accordion-item[data-state="open"] {
  @apply border-primary;
}

.s-managers__accordion-trigger {
  @apply flex items-center justify-between gap-[10px]
         w-full px-6 py-8 no-underline hover:no-underline
         font-tight font-medium text-[20px] tracking-[0.2px]
         text-gray-11 leading-[1.15] text-left;
}

/* título do item aberto: cor escura */
.s-managers__accordion-item[data-state="open"] .s-managers__accordion-trigger {
  @apply text-gray-12;
}

.s-managers__accordion-icon {
  @apply size-6 shrink-0 text-gray-11 transition-transform duration-200;
}

/* ícone rotaciona quando aberto */
.s-managers__accordion-item[data-state="open"] .s-managers__accordion-icon {
  @apply rotate-180 text-gray-12;
}

.s-managers__accordion-content {
  @apply font-sans font-normal text-sm text-gray-11 leading-[1.4]
         px-6 pb-8;
}

/* ── Coluna direita ──────────────────────────────────────── */
.s-managers__right {
  @apply flex flex-1 flex-row items-center self-stretch;
}

.s-managers__panel-wrapper {
  @apply relative flex flex-1 h-full bg-gray-1;
}

.s-managers__panel-border {
  @apply relative flex flex-1 flex-col h-full overflow-hidden
         border border-gray-6;
}

/* ── Dots decorativos (coluna direita) ───────────────────── */
.s-managers__dot {
  @apply absolute size-[5px] bg-gray-8 z-10;
}
.s-managers__dot--tl { @apply left-[-3px] top-[-3px]; }
.s-managers__dot--tr { @apply right-[-3px] top-[-3px]; }
.s-managers__dot--bl { @apply left-[-3px] bottom-[-3px]; }
.s-managers__dot--br { @apply right-[-3px] bottom-[-3px]; }

/* ── Card branco (mockup admin) ──────────────────────────── */
.s-managers__card {
  @apply absolute bottom-0 left-16 h-[460px] w-[544px]
         bg-white rounded-tl-[24px] border border-gray-6;
  box-shadow: -10px -10px 50px 0px rgba(0, 0, 0, 0.03);
}

.s-managers__card-topbar {
  @apply absolute flex items-center gap-3
         left-8 top-[calc(97px-80px)];
}

/* ajuste: o top no Figma (97px) é relativo ao container pai.
   O card começa em bottom-0, então calcular a posição correta
   com base na altura total. Usar top-[17px] para aproximar. */
.s-managers__card-topbar {
  @apply top-[17px] left-8;
}

.s-managers__card-logo {
  @apply h-6 w-auto;
}

.s-managers__card-badge {
  @apply bg-gray-4 text-gray-11 font-mono font-bold text-xs
         tracking-[0.48px] leading-[1.15]
         px-[6px] pt-[6px] pb-[5px] rounded-full;
}

.s-managers__card-separator {
  @apply absolute w-full h-px bg-gray-6;
  top: calc(17px + 24px + 16px); /* topbar top + logo height + gap */
}
</style>
```

**Notas de implementação:**
- O `AccordionTrigger` do shadcn usa `hover:underline` por padrão — sobrescrever com `no-underline hover:no-underline` nas classes
- O `AccordionItem` usa `border-b` por padrão — sobrescrever com `rounded-none` e as classes BEM
- O separador do card (linha horizontal) pode ser posicionado com `top` calculado; ajustar visualmente se necessário
- A posição exata do topbar (`top-[17px]`) precisa ser validada visualmente; o Figma especifica `top-[97px]` relativo ao container da imagem inteira, mas o card começa em `bottom-0` com `h-[460px]`, então a posição relativa ao card é `460 - 145 - (container_height - 460) ≈ 17px` — ajustar após verificação visual

- [ ] Salvar o arquivo completo

- [ ] Verificar no browser (`http://localhost:8000`):
  - Fundo cinza claro, seção destacada visualmente do resto da página
  - Coluna esquerda com header e accordion
  - Item 1 aberto por padrão com borda laranja
  - Item 2 fechado com borda cinza
  - Coluna direita com card branco, logo e badge ADMIN visíveis
  - Clicar nos itens do accordion e verificar abrir/fechar com animação

- [ ] Commit:

```bash
git add app/components/SManagers.vue
git commit -m "feat: implementar SManagers conforme Figma"
```

---

## Checklist Final

- [ ] Logo baixado em `public/images/managers-rumo-logo.png`
- [ ] `IconChevronDown.vue` criado em `app/components/icons/`
- [ ] `SManagers.vue` implementado com layout 2 colunas
- [ ] Seção visualmente clara (light theme) em contraste com o resto da página
- [ ] Accordion funcional: item 1 aberto por padrão, borda laranja; item 2 fechado, borda cinza
- [ ] Card branco com logo + badge ADMIN + separator visível
- [ ] Sem hexadecimais hardcoded no template (exceto `box-shadow` do card que não tem token equivalente)
- [ ] Todos os commits realizados
