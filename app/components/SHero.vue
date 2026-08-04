<template>
  <section id="o-rumo" class="s-hero">
    <div class="s-hero__container">
      <span class="s-hero__dot s-hero__dot--left" />
      <span class="s-hero__dot s-hero__dot--right" />

      <!-- Coluna esquerda -->
      <div class="s-hero__col-left">
        <div class="s-hero__heading-wrap">
          <p class="s-hero__label">// DO CAOS PARA MÁQUINA DE VENDAS</p>
          <AppearWhen split="words" :threshold="0.3">
            <h1 class="s-hero__heading">
              Pare de torcer para o time vender e comece a governar o resultado!
            </h1>
          </AppearWhen>
          <AppearWhen animation="fade-in" :threshold="0" :delay="400">
            <IconHeadingDeco class="s-hero__heading-deco text-primary" aria-hidden="true" />
          </AppearWhen>
        </div>
      </div>

      <!-- Coluna direita -->
      <div class="s-hero__col-right">
        <div class="s-hero__body-wrap">
          <p class="s-hero__body">
            Somos a camada de inteligência que transforma o caos do time comercial
            em uma máquina de vendas previsível, engajada e de alta performance.
          </p>
          <NuxtLink to="/contato">
            <Button variant="cta" class="s-hero__cta">Solicitar demonstração</Button>
          </NuxtLink>
        </div>

        <div class="s-hero__platforms">
          <span class="s-hero__platforms-label">Plataformas disponíveis:</span>
          <p class="s-hero__platforms-list">
            iOS <span class="s-hero__platforms-sep">/</span>
            Android <span class="s-hero__platforms-sep">/</span>
            Web
          </p>
        </div>
      </div>

      <!-- Phone mockup: static no mobile (último), absolute centralizado no desktop -->
      <div class="s-hero__phone">
        <NuxtImg
          class="s-hero__phone-body"
          src="/images/hero-phone-body.svg"
          alt=""
          aria-hidden="true"
          width="280"
          height="570"
          preload
          fetchpriority="high"
        />
        <div class="s-hero__phone-screen">
          <NuxtImg
            class="s-hero__phone-screenshot"
            src="/images/hero-phone-screenshot.png"
            alt="App Rumo"
            width="252"
            height="545"
            format="webp"
            :modifiers="{ position: 'top' }"
            preload
            fetchpriority="high"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "~/assets/css/main.css";

/* ── Seção ──────────────────────────────────────────── */
.s-hero {
  @apply w-full flex items-center justify-center border-b border-page-border;
  background-image: radial-gradient(circle, var(--color-page-border) 1px, transparent 1px);
  background-size: 24px 24px;
}

/* ── Container ──────────────────────────────────────── */
.s-hero__container {
  @apply relative flex flex-1 flex-col gap-4
         px-5 py-12 overflow-hidden
         border-l border-r border-page-border
         lg:flex-row lg:items-end lg:justify-between
         lg:max-w-304 lg:px-8 lg:pb-8 lg:pt-70
         lg:gap-0 lg:overflow-visible;
}

/* ── Dots decorativos ───────────────────────────────── */
.s-hero__dot {
  @apply absolute bottom-[-3px] size-[5px] bg-text-subtle;
}
.s-hero__dot--left  { @apply left-[-3px]; }
.s-hero__dot--right { @apply right-[-3px]; }

/* ── Coluna esquerda ────────────────────────────────── */
.s-hero__col-left {
  @apply flex flex-col w-full
         lg:w-88 lg:justify-end lg:self-stretch;
}

.s-hero__heading-wrap {
  @apply relative flex flex-col gap-4;
}

.s-hero__label {
  @apply font-mono font-normal text-xs text-primary tracking-[0.12px] whitespace-nowrap;
}

.s-hero__heading {
  @apply font-tight font-semibold text-[30px] text-text-primary
         leading-tight tracking-[0.3px]
         lg:text-[40px] lg:tracking-[0.4px];
}

.s-hero__heading-deco {
  @apply absolute pointer-events-none
         top-8.75 left-27 w-20.25 h-6.75
         lg:top-10 lg:left-36.25 lg:w-28.25 lg:h-9.25;
}

/* ── Coluna direita ─────────────────────────────────── */
.s-hero__col-right {
  @apply flex flex-col gap-10 w-full
         lg:w-88 lg:justify-end lg:self-stretch;
}

.s-hero__body-wrap {
  @apply flex flex-col gap-6;
}

.s-hero__body {
  @apply font-sans font-normal text-sm text-text-body leading-[1.4];
}

.s-hero__cta {
  @apply w-full justify-center lg:w-auto;
}

/* ── Plataformas ────────────────────────────────────── */
.s-hero__platforms {
  @apply flex flex-wrap items-center gap-x-2.5 gap-y-1 border-l border-text-muted pl-2.5;
}

.s-hero__platforms-label {
  @apply font-sans font-normal text-xs text-text-muted tracking-[0.12px] whitespace-nowrap;
}

.s-hero__platforms-list {
  @apply font-mono font-normal text-xs text-text-body tracking-[0.12px] whitespace-nowrap;
}

.s-hero__platforms-sep {
  @apply text-text-subtle;
}

/* ── Phone mockup ───────────────────────────────────── */

/* Mobile: estático, último item, largura contida */
.s-hero__phone {
  @apply relative w-full shrink-0 mt-6;
  max-width: 335px;
  margin-inline: auto;
  aspect-ratio: 280 / 570;
  clip-path: inset(0 0 20% 0);
  filter: drop-shadow(0px 10px 40px var(--color-primary-shadow));
}

/* Desktop: absolute centralizado como no Figma */
@media (min-width: 1024px) {
  .s-hero__phone {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 4rem;
    width: 280px;
    height: 570px;
    max-width: none;
    margin-inline: 0;
    aspect-ratio: auto;
    clip-path: none;
    margin-top: 0;
  }
}

.s-hero__phone-body {
  @apply absolute inset-0 w-full h-full object-contain;
}

.s-hero__phone-screen {
  @apply absolute overflow-hidden rounded-[34px];
  inset: 2.21% 5.09%;
}

.s-hero__phone-screenshot {
  @apply w-full h-full object-cover object-top;
}
</style>
