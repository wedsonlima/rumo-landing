<template>
  <footer class="r-footer">
    <div class="r-footer__container">
      <span class="r-footer__dot r-footer__dot--tl" />
      <span class="r-footer__dot r-footer__dot--tr" />

      <!-- Top: colunas -->
      <div class="r-footer__top">

        <!-- Símbolo -->
        <div class="r-footer__brand">
          <NuxtImg src="/images/logo-rumo-symbol.svg" alt="Rumo" width="35" height="37" loading="lazy" />
        </div>

        <!-- NAVEGAR -->
        <div class="r-footer__col">
          <p class="r-footer__col-label">NAVEGAR</p>
          <ul class="r-footer__col-links">
            <li><a href="#o-rumo" class="r-footer__link">O Rumo</a></li>
            <li><a href="#funcionalidades" class="r-footer__link">Funcionalidades</a></li>
            <li><a href="#performance" class="r-footer__link">Performance</a></li>
            <li><a href="#depoimentos" class="r-footer__link">Depoimentos</a></li>
            <li><a href="#planos" class="r-footer__link">Ver Planos</a></li>
          </ul>
        </div>

        <!-- SOCIAL -->
        <div class="r-footer__col">
          <p class="r-footer__col-label">SOCIAL</p>
          <ul class="r-footer__col-links">
            <li>
              <a href="https://instagram.com/userumo.oficial" target="_blank" rel="noopener"
                class="r-footer__social-link">
                <IconInstagram class="r-footer__social-icon" />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener" class="r-footer__social-link">
                <IconLinkedin class="r-footer__social-icon" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="mailto:admin@userumo.com.br" class="r-footer__social-link">
                <IconMail class="r-footer__social-icon" />
                <span>E-mail</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- CNPJ + LOCAL -->
        <div class="r-footer__col">
          <div class="r-footer__meta-group">
            <p class="r-footer__col-label">CONTATO</p>
            <p class="r-footer__meta-value">admin@userumo.com.br</p>
          </div>
          <div class="r-footer__meta-group">
            <p class="r-footer__col-label">TELEFONE</p>
            <p class="r-footer__meta-value">+55 85 98178-4072</p>
          </div>
          <div class="r-footer__meta-group">
            <p class="r-footer__col-label">CNPJ</p>
            <p class="r-footer__meta-value">24.217.073/0001-06</p>
          </div>
        </div>

      </div>

      <!-- Barra inferior -->
      <div class="r-footer__bottom">
        <p class="r-footer__bottom-text">Todos os direitos reservados</p>
        <p class="r-footer__bottom-text">{{ year }} // Rumo</p>
        <NuxtLink to="/politica-de-privacidade" class="r-footer__bottom-text r-footer__bottom-link">Política de
          privacidade</NuxtLink>
      </div>

      <!-- Lettering decorativo "rumo" -->
      <div class="r-footer__deco" aria-hidden="true">
        <NuxtImg src="/images/footer-deco-r.svg" alt="" width="191" height="270" loading="lazy" class="r-footer__deco-letter" />
        <NuxtImg src="/images/footer-deco-u.svg" alt="" width="246" height="270" loading="lazy" class="r-footer__deco-letter" />
        <NuxtImg src="/images/footer-deco-m.svg" alt="" width="410" height="270" loading="lazy" class="r-footer__deco-letter" />
        <NuxtImg src="/images/footer-deco-o.svg" alt="" width="260" height="270" loading="lazy" class="r-footer__deco-letter" />
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
const time = ref('')

function updateTime() {
  time.value = new Date().toLocaleTimeString('pt-BR', {
    timeZone: 'America/Fortaleza',
    hour: '2-digit',
    minute: '2-digit',
  })
}

onMounted(() => {
  updateTime()
  const interval = setInterval(updateTime, 60_000)
  onUnmounted(() => clearInterval(interval))
})
</script>

<style scoped>
@reference "~/assets/css/main.css";

/* ── Footer ──────────────────────────────────────────────── */
.r-footer {
  @apply w-full flex items-center justify-center bg-page-bg border-t border-page-border overflow-hidden;
}

/* ── Container ───────────────────────────────────────────── */
.r-footer__container {
  @apply relative flex flex-col flex-1 px-5 pt-12 pb-0 border-l border-r border-page-border lg:max-w-304 lg:px-8;
}

/* ── Dots decorativos ─────────────────────────────────────── */
.r-footer__dot {
  @apply absolute size-1.25 bg-text-subtle;
}

.r-footer__dot--tl {
  @apply -left-0.75 -top-0.75;
}

.r-footer__dot--tr {
  @apply -right-0.75 -top-0.75;
}

/* ── Top (colunas) ───────────────────────────────────────── */
.r-footer__top {
  @apply flex flex-wrap gap-8 lg:flex-nowrap lg:gap-8 pb-12 justify-center;
}

/* Símbolo */
.r-footer__brand {
  @apply shrink-0 max-lg:hidden;
}

/* Coluna genérica */
.r-footer__col {
  @apply flex flex-col gap-4 w-full lg:w-44 shrink-0;
}

.r-footer__col-label {
  @apply font-mono font-normal text-xs text-primary tracking-[0.12px] leading-[1.15];
}

.r-footer__col-links {
  @apply flex flex-col gap-2 list-none m-0 p-0;
}

.r-footer__link {
  @apply font-sans font-normal text-base text-text-body leading-6 no-underline whitespace-nowrap transition-colors hover:text-text-primary;
}

/* Links sociais */
.r-footer__social-link {
  @apply flex items-center gap-2.5 no-underline font-sans font-normal text-base text-text-body leading-6 transition-colors hover:text-text-primary;
}

.r-footer__social-icon {
  @apply size-6 shrink-0;
}

/* Meta (CNPJ / LOCAL) */
.r-footer__meta-group {
  @apply flex flex-col gap-2;
}

.r-footer__meta-value {
  @apply font-sans font-normal text-base text-text-body leading-6 whitespace-nowrap;
}

/* ── Barra inferior ──────────────────────────────────────── */
.r-footer__bottom {
  @apply flex flex-wrap items-center justify-between border-t border-text-subtle py-4;
}

.r-footer__bottom-text {
  @apply font-sans font-normal text-sm text-text-muted leading-6 whitespace-nowrap;
}

.r-footer__bottom-link {
  @apply no-underline transition-colors hover:text-text-body;
}

/* ── Lettering decorativo ────────────────────────────────── */
.r-footer__deco {
  @apply flex items-end gap-4 w-full opacity-50 pointer-events-none h-[92px] lg:h-[273px];
}

.r-footer__deco-letter {
  @apply block object-contain shrink-0 h-[72px] lg:h-[270px];
  width: auto;
}
</style>
