<template>
  <section class="s-ecosystem-action">
    <div class="s-ecosystem-action__container">
      <span class="s-ecosystem-action__dot s-ecosystem-action__dot--tl" />
      <span class="s-ecosystem-action__dot s-ecosystem-action__dot--tr" />
      <span class="s-ecosystem-action__dot s-ecosystem-action__dot--bl" />
      <span class="s-ecosystem-action__dot s-ecosystem-action__dot--br" />

      <!-- Top block -->
      <div class="s-ecosystem-action__top">
        <div class="s-ecosystem-action__header">
          <p class="s-ecosystem-action__label">// NOSSO ECOSSISTEMA</p>
          <AppearWhen split="chars" :threshold="0.5">
            <h2 class="s-ecosystem-action__title">Veja o Rumo em ação</h2>
          </AppearWhen>
        </div>

        <div class="s-ecosystem-action__video-frame">
          <div class="s-ecosystem-action__video-inner">
            <div
              ref="playerEl"
              data-plyr-provider="vimeo"
              data-plyr-embed-id="1173890505"
              class="s-ecosystem-action__player"
            />
          </div>
        </div>
      </div>

      <!-- Bottom block -->
      <div class="s-ecosystem-action__bottom">
        <p class="s-ecosystem-action__subtitle">
          Do planejamento ao pagamento, tudo conectado.
        </p>

        <div class="s-ecosystem-action__steps">
          <div
            v-for="step in steps"
            :key="step.n"
            class="s-ecosystem-action__step"
          >
            <div class="s-ecosystem-action__step-header">
              <div class="s-ecosystem-action__step-number-row">
                <span class="s-ecosystem-action__step-number">{{ step.n }}</span>
                <span class="s-ecosystem-action__step-line" />
                <span class="s-ecosystem-action__step-dot" />
              </div>
              <h3 class="s-ecosystem-action__step-title">{{ step.title }}</h3>
            </div>
            <p class="s-ecosystem-action__step-body">{{ step.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const playerEl = ref<HTMLElement | null>(null)
let player: any = null
let observer: IntersectionObserver | null = null
let disposed = false

// Booting the player pulls in Plyr, its stylesheet, Vimeo's player.js and the
// video iframe — all third-party and all irrelevant until the section is
// actually approaching the viewport.
async function initPlayer() {
  if (!playerEl.value) return

  const [plyrModule] = await Promise.all([
    import('plyr'),
    import('plyr/dist/plyr.css'),
  ])
  if (disposed || !playerEl.value) return

  const Plyr = plyrModule.default
  player = new Plyr(playerEl.value, {
    controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
    ratio: '16:9',
    volume: 0.75,
    vimeo: {
      byline: false,
      portrait: false,
      title: false,
      speed: true,
      transparent: false,
    },
  })
}

onMounted(() => {
  if (!playerEl.value) return

  observer = new IntersectionObserver(
    (entries) => {
      if (!entries[0]?.isIntersecting) return
      observer?.disconnect()
      observer = null
      initPlayer()
    },
    { rootMargin: '300px' },
  )

  observer.observe(playerEl.value)
})

onUnmounted(() => {
  disposed = true
  observer?.disconnect()
  player?.destroy()
})

const steps = [
  {
    n: '//01',
    title: 'A empresa define',
    body: 'Metas, orçamento fixo ou variável e regras de campanha. Tudo pela aplicação, com total controle do gestor.',
  },
  {
    n: '//02',
    title: 'O time executa',
    body: 'Vendas, frequência, consistência. O vendedor acompanha seu progresso em tempo real pelo aplicativo.',
  },
  {
    n: '//03',
    title: 'O sistema converte',
    body: 'Ações viram pontos, engajamento vira métricas, performance vira valor tangível. Tudo automático.',
  },
  {
    n: '//04',
    title: 'O Rumo distribui',
    body: 'Bonificações e reconhecimento de forma auditável, rastreável e previsível. Sem planilha, sem erro.',
  },
]
</script>

<style scoped>
@reference "~/assets/css/main.css";

/* ── Section ─────────────────────────────────────────────── */
.s-ecosystem-action {
  @apply w-full flex items-center justify-center border-t border-page-border;
}

/* ── Container ───────────────────────────────────────────── */
.s-ecosystem-action__container {
  @apply relative flex flex-col flex-1 gap-16 items-center
         px-5 py-20
         border-l border-r border-page-border
         lg:max-w-304 lg:px-8;
}

/* ── Corner dots ─────────────────────────────────────────── */
.s-ecosystem-action__dot {
  @apply absolute size-[5px] bg-text-subtle;
}
.s-ecosystem-action__dot--tl { @apply left-[-3px] top-[-3px]; }
.s-ecosystem-action__dot--tr { @apply right-[-3px] top-[-3px]; }
.s-ecosystem-action__dot--bl { @apply left-[-3px] bottom-[-2px]; }
.s-ecosystem-action__dot--br { @apply right-[-3px] bottom-[-2px]; }

/* ── Top block ───────────────────────────────────────────── */
.s-ecosystem-action__top {
  @apply flex flex-col gap-12 lg:items-center w-full;
}

/* ── Header ──────────────────────────────────────────────── */
.s-ecosystem-action__header {
  @apply flex flex-col gap-4 w-full lg:w-114 lg:items-center;
}

.s-ecosystem-action__label {
  @apply font-mono font-normal text-xs text-primary tracking-[0.12px] whitespace-nowrap;
}

.s-ecosystem-action__title {
  @apply font-tight font-medium text-[30px] text-text-primary
         lg:text-center leading-[1.15] tracking-[0.3px];
}

/* ── Video frame ─────────────────────────────────────────── */
.s-ecosystem-action__video-frame {
  @apply p-2 rounded-[24px] border border-page-border w-full;
  max-width: 992px;
  background: color-mix(in srgb, var(--color-page-border) 50%, transparent);
}

.s-ecosystem-action__video-inner {
  @apply relative w-full rounded-2xl overflow-hidden bg-page-bg;
  aspect-ratio: 16 / 9;
  --plyr-color-main: #ffffff;
  --plyr-video-control-background-hover: rgba(255, 255, 255, 0.3);
}

:deep(.plyr__control--overlaid) {
  @apply rounded-xl;
}

/* ── Bottom block ────────────────────────────────────────── */
.s-ecosystem-action__bottom {
  @apply flex flex-col gap-16 items-center w-full;
}

/* ── Subtitle ────────────────────────────────────────────── */
.s-ecosystem-action__subtitle {
  @apply font-mono font-normal text-base text-text-muted
         tracking-[0.16px] uppercase text-center;
}

/* ── Steps grid ──────────────────────────────────────────── */
.s-ecosystem-action__steps {
  @apply flex flex-col gap-8 items-start w-full lg:flex-row;
}

.s-ecosystem-action__step {
  @apply flex flex-col gap-8 w-full lg:flex-1 lg:max-w-80;
}

.s-ecosystem-action__step-header {
  @apply flex flex-col gap-[10px];
}

.s-ecosystem-action__step-number-row {
  @apply flex items-center gap-[10px] w-full;
}

.s-ecosystem-action__step-number {
  @apply font-mono font-normal text-xs text-primary tracking-[0.12px] whitespace-nowrap;
}

.s-ecosystem-action__step-line {
  @apply flex-1 h-px bg-page-border;
}

.s-ecosystem-action__step-dot {
  @apply size-[5px] shrink-0 bg-page-border;
}

.s-ecosystem-action__step-title {
  @apply font-tight font-medium text-2xl text-text-primary
         leading-[1.15] tracking-[0.24px];
}

.s-ecosystem-action__step-body {
  @apply font-sans font-normal text-sm text-text-body leading-[1.4];
}
</style>
