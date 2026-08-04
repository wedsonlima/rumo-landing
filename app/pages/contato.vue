<template>
  <div class="p-contato">
    <RNavbar :minimal="true" />

    <main class="p-contato__main">
      <div class="p-contato__container">

        <!-- Left column -->
        <div class="p-contato__left">
          <p class="p-contato__label">// FALE COM A GENTE</p>
          <h1 class="p-contato__title">Solicite uma demonstração</h1>
          <p class="p-contato__subtitle">
            Veja como o Rumo transforma a gestão comercial da sua empresa em menos de 48h.
          </p>
        </div>

        <!-- Right column -->
        <div class="p-contato__right">
          <div class="p-contato__card">
            <p class="p-contato__card-intro">
              Escolha o canal que preferir. Nossa equipe responde em até um dia útil.
            </p>

            <div class="p-contato__channels">
              <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer"
                class="p-contato__channel p-contato__channel--whatsapp">
                <IconWhatsapp class="p-contato__channel-icon" />
                <span class="p-contato__channel-text">
                  <span class="p-contato__channel-sub">Resposta mais rápida</span>
                  <span class="p-contato__channel-main">Falar no WhatsApp</span>
                </span>
              </a>

              <a :href="mailUrl" class="p-contato__channel p-contato__channel--mail">
                <IconMail class="p-contato__channel-icon" />
                <span class="p-contato__channel-text">
                  <span class="p-contato__channel-sub">Prefere escrever?</span>
                  <span class="p-contato__channel-main">Enviar um e-mail</span>
                </span>
              </a>
            </div>

            <dl class="p-contato__details">
              <div class="p-contato__detail">
                <dt class="p-contato__detail-label">TELEFONE</dt>
                <dd class="p-contato__detail-value">{{ phoneDisplay }}</dd>
              </div>
              <div class="p-contato__detail">
                <dt class="p-contato__detail-label">E-MAIL</dt>
                <dd class="p-contato__detail-value">{{ email }}</dd>
              </div>
            </dl>

            <p class="p-contato__terms">
              Ao entrar em contato você concorda com os
              <NuxtLink to="/politica-de-privacidade" class="p-contato__terms-link">Termos e Políticas</NuxtLink>.
            </p>
          </div>
        </div>

      </div>
    </main>

    <RFooter />
  </div>
</template>

<script setup lang="ts">
const phoneDisplay = '+55 85 98178-4072'
const email = 'admin@userumo.com.br'

const message = 'Olá! Gostaria de solicitar uma demonstração do Rumo.'
const whatsappUrl = `https://wa.me/5585981784072?text=${encodeURIComponent(message)}`
const mailUrl = `mailto:${email}?subject=${encodeURIComponent('Solicitação de demonstração — Rumo')}&body=${encodeURIComponent(message)}`

useSeoPage({
  title: 'Solicite uma Demonstração — Rumo',
  description: 'Veja como o Rumo transforma a gestão comercial da sua empresa em menos de 48h. Fale com nossa equipe pelo WhatsApp ou por e-mail.',
  path: '/contato',
})
</script>

<style scoped>
@reference "~/assets/css/main.css";

.p-contato {
  @apply min-h-screen bg-page-bg;
}

.p-contato__main {
  @apply flex items-start justify-center px-5 pt-10 pb-20;
}

.p-contato__container {
  @apply flex flex-col gap-12 w-full max-w-[1216px] lg:flex-row lg:gap-20 lg:items-start;
}

.p-contato__left {
  @apply flex flex-col gap-6 lg:w-96 lg:pt-2 shrink-0;
}

.p-contato__label {
  @apply font-mono font-normal text-xs text-primary tracking-[0.12px];
}

.p-contato__title {
  @apply font-tight font-medium text-[36px] text-text-primary leading-[1.15] tracking-[0.36px];
}

.p-contato__subtitle {
  @apply font-sans font-normal text-sm text-text-body leading-[1.6];
}

.p-contato__right {
  @apply flex-1;
}

.p-contato__card {
  @apply flex flex-col gap-8 bg-surface border border-page-border rounded-xl p-8;
}

.p-contato__card-intro {
  @apply font-sans font-normal text-sm text-text-body leading-[1.6];
}

/* ── Canais de contato ───────────────────────────────────── */
.p-contato__channels {
  @apply flex flex-col gap-4;
}

.p-contato__channel {
  @apply flex items-center gap-4 px-6 py-4 rounded-xl border no-underline
         cursor-pointer transition-colors duration-150;
}

.p-contato__channel--whatsapp {
  @apply border-primary-border bg-primary text-white hover:bg-primary-dark;
  box-shadow: var(--shadow-primary-glow);
}

.p-contato__channel--mail {
  @apply border-page-border text-text-primary hover:border-gray-8;
}

.p-contato__channel-icon {
  @apply size-8 shrink-0;
}

.p-contato__channel-text {
  @apply flex flex-col gap-0.5;
}

.p-contato__channel-sub {
  @apply font-mono text-[10px] uppercase tracking-[0.1px] opacity-70;
}

.p-contato__channel-main {
  @apply font-tight font-medium text-base leading-none;
}

/* ── Dados diretos ───────────────────────────────────────── */
.p-contato__details {
  @apply flex flex-col gap-4 m-0 sm:flex-row sm:gap-12;
}

.p-contato__detail {
  @apply flex flex-col gap-2;
}

.p-contato__detail-label {
  @apply font-mono font-normal text-xs text-primary tracking-[0.12px] leading-[1.15];
}

.p-contato__detail-value {
  @apply font-sans font-normal text-base text-text-body leading-6 m-0;
}

.p-contato__terms {
  @apply font-sans font-normal text-xs text-text-muted leading-[1.6];
}

.p-contato__terms-link {
  @apply text-primary underline underline-offset-2 hover:text-primary-light;
}
</style>
