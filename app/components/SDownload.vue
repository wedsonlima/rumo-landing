<template>
  <section class="s-download">
    <div class="s-download__container">

      <div class="s-download__header">
        <p class="s-download__label">// BAIXE O APP</p>
        <AppearWhen split="words" :threshold="0.5">
          <h2 class="s-download__title">
            <span>O Rumo no bolso</span>
            <span>do seu time</span>
          </h2>
        </AppearWhen>
        <p class="s-download__description">
          Disponível para Android e iOS. O vendedor acompanha metas, ranking e premiações em tempo real, direto do
          celular.
        </p>
      </div>

      <div class="s-download__buttons">

        <!-- Android APK -->
        <a href="https://play.google.com/store/apps/details?id=br.com.apprumo" target="_blank" rel="noopener noreferrer"
          class="s-download__btn s-download__btn--android">
          <svg class="s-download__btn-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84 1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C14.15 1.23 13.1 1 12 1c-1.1 0-2.15.23-3.1.63L7.43.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3C6.14 3.07 5 5.06 5 7h14c0-1.94-1.14-3.93-3.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
          </svg>
          <div class="s-download__btn-text">
            <span class="s-download__btn-sub">Disponível no</span>
            <span class="s-download__btn-main">Google Play</span>
          </div>
        </a>

        <!-- Apple Store -->
        <a href="https://apps.apple.com/us/app/userumo/id6760983611" target="_blank" rel="noopener noreferrer"
          class="s-download__btn s-download__btn--apple">
          <svg class="s-download__btn-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11Z" />
          </svg>
          <div class="s-download__btn-text">
            <span class="s-download__btn-sub">Disponível na</span>
            <span class="s-download__btn-main">App Store</span>
          </div>
        </a>

      </div>

    </div>
  </section>
</template>

<style scoped>
@reference "~/assets/css/main.css";

/* ── Section ─────────────────────────────────────────────── */
.s-download {
  @apply w-full flex items-center justify-center bg-page-bg border-b border-page-border;
}

/* ── Container ───────────────────────────────────────────── */
.s-download__container {
  @apply flex flex-col gap-12 items-center justify-center max-w-304 w-full px-5 py-20;
}

/* ── Header ──────────────────────────────────────────────── */
.s-download__header {
  @apply flex flex-col gap-6 lg:items-center lg:text-center;
}

.s-download__label {
  @apply font-mono font-normal text-xs text-primary tracking-[0.12px] uppercase;
}

.s-download__title {
  @apply flex flex-col font-tight font-medium text-[36px] text-text-primary leading-[1.15] tracking-[0.36px];
}

.s-download__description {
  @apply font-sans font-normal text-sm text-text-body leading-[1.4] max-w-120;
}

/* ── Buttons ─────────────────────────────────────────────── */
.s-download__buttons {
  @apply flex max-lg:flex-col w-full gap-4 lg:items-center justify-center;
}

.s-download__btn {
  @apply flex items-center gap-4 px-6 py-4 rounded-xl border cursor-pointer transition-colors duration-150 no-underline min-w-55;
}

.s-download__btn--android {
  @apply border-primary-border bg-primary text-white hover:bg-primary-dark;
  box-shadow: var(--shadow-primary-glow);
}

.s-download__btn--apple {
  @apply border-page-border text-text-primary hover:border-gray-8;
}

.s-download__btn-icon {
  @apply size-8 shrink-0;
}

.s-download__btn-text {
  @apply flex flex-col gap-0.5;
}

.s-download__btn-sub {
  @apply font-mono text-[10px] uppercase tracking-[0.1px] opacity-70;
}

.s-download__btn-main {
  @apply font-tight font-medium text-base leading-none;
}
</style>
