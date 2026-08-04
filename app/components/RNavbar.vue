<template>
  <nav class="r-navbar" :class="{
    'r-navbar--hidden': isHidden && !isMobileMenuOpen,
    'r-navbar--scrolled': isScrolled,
  }">
    <div class="r-navbar__container">
      <span class="r-navbar__dot r-navbar__dot--left" />
      <span class="r-navbar__dot r-navbar__dot--right" />

      <!-- brand: logo / identidade -->
      <div class="r-navbar__brand">
        <slot name="brand">
          <NuxtLink to="/" class="r-navbar__logo">
            <NuxtImg src="/images/logo-rumo.png" alt="Rumo" width="140" height="37" />
          </NuxtLink>
        </slot>
      </div>

      <!-- start: navegação principal (desktop only) -->
      <div v-if="!props.minimal" class="r-navbar__start">
        <slot name="start">
          <ul class="r-navbar__nav">
            <li><a href="#o-rumo" class="r-navbar__link">O Rumo</a></li>
            <li><a href="#funcionalidades" class="r-navbar__link">Funcionalidades</a></li>
            <li><a href="#performance" class="r-navbar__link">Performance</a></li>
            <li><a href="#depoimentos" class="r-navbar__link">Depoimentos</a></li>
            <li><a href="#planos" class="r-navbar__link">Ver Planos</a></li>
          </ul>
        </slot>
      </div>

      <!-- end: ação principal (desktop only) -->
      <div v-if="!props.minimal" class="r-navbar__end">
        <slot name="end">
          <NuxtLink to="/contato">
            <Button variant="cta">
              Solicitar demonstração
            </Button>
          </NuxtLink>
        </slot>
      </div>

      <!-- mobile: botão hamburger -->
      <button v-if="!props.minimal" class="r-navbar__toggle"
        :aria-label="isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'" @click="isMobileMenuOpen = !isMobileMenuOpen">
        <IconClose v-if="isMobileMenuOpen" />
        <IconMenu v-else />
      </button>
    </div>

    <!-- mobile menu -->
    <Transition v-if="!props.minimal" name="mobile-slide">
      <div v-if="isMobileMenuOpen" class="r-navbar__mobile-menu">
        <ul class="r-navbar__mobile-nav">
          <li><a href="#o-rumo" class="r-navbar__mobile-link" @click="isMobileMenuOpen = false">O Rumo</a></li>
          <li><a href="#funcionalidades" class="r-navbar__mobile-link"
              @click="isMobileMenuOpen = false">Funcionalidades</a></li>
          <li><a href="#performance" class="r-navbar__mobile-link" @click="isMobileMenuOpen = false">Performance</a>
          </li>
          <li><a href="#depoimentos" class="r-navbar__mobile-link" @click="isMobileMenuOpen = false">Depoimentos</a>
          </li>
          <li><a href="#planos" class="r-navbar__mobile-link" @click="isMobileMenuOpen = false">Ver Planos</a></li>
        </ul>
        <div class="r-navbar__mobile-cta">
          <NuxtLink to="/contato" class="block" @click="isMobileMenuOpen = false">
            <Button variant="cta" class="w-full justify-center">
              Solicitar demonstração
            </Button>
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{ minimal?: boolean }>()

const isHidden = ref(false)
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
let lastScrollY = 0

watch(isMobileMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

function onScroll() {
  const currentScrollY = window.scrollY
  const delta = currentScrollY - lastScrollY

  if (Math.abs(delta) > 10) {
    isHidden.value = delta > 0 && currentScrollY > 80
    lastScrollY = currentScrollY
  }

  isScrolled.value = currentScrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
@reference "~/assets/css/main.css";

.r-navbar {
  @apply fixed top-0 left-0 right-0 z-50 w-full flex flex-col items-center bg-page-bg border-b border-page-border transition-transform duration-300 ease-in-out;
}

.r-navbar--hidden {
  @apply -translate-y-full;
}

.r-navbar--scrolled {
  @apply bg-page-bg/80 backdrop-blur-md border-page-border/60;
}

.r-navbar__container {
  @apply relative flex flex-1 items-center justify-between w-full max-w-304 px-5 py-6 lg:px-8 border-l border-r border-page-border;
}

.r-navbar__dot {
  @apply absolute bottom-[-3px] size-[5px] bg-text-subtle;
}

.r-navbar__dot--left {
  @apply left-[-3px];
}

.r-navbar__dot--right {
  @apply right-[-3px];
}

.r-navbar__brand {
  @apply shrink-0;
}

.r-navbar__logo {
  @apply block h-[37px] w-[139.895px];
}

/* Desktop only */
.r-navbar__start {
  @apply hidden lg:flex flex-1 items-center justify-center;
}

.r-navbar__nav {
  @apply flex items-center gap-4 list-none m-0 p-0;
}

.r-navbar__link {
  @apply font-sans font-normal text-[12px] text-text-muted tracking-[0.12px] leading-[1.15] whitespace-nowrap no-underline transition-colors hover:text-text-body;
}

.r-navbar__end {
  @apply hidden lg:flex shrink-0 items-center;
}

/* Mobile toggle */
.r-navbar__toggle {
  @apply flex lg:hidden items-center justify-center size-8 text-text-muted shrink-0 bg-transparent border-0 cursor-pointer transition-colors hover:text-text-body;
}

/* Mobile menu */
.r-navbar__mobile-menu {
  @apply flex flex-col w-full max-w-304 border-l border-r border-b border-page-border bg-page-bg lg:hidden;
}

.r-navbar__mobile-nav {
  @apply flex flex-col list-none m-0 p-0;
}

.r-navbar__mobile-link {
  @apply flex items-center px-5 py-5 font-sans font-normal text-base text-text-muted no-underline border-b border-page-border transition-colors hover:text-text-body;
}

.r-navbar__mobile-cta {
  @apply px-5 py-6;
}

/* Transition */
.mobile-slide-enter-active,
.mobile-slide-leave-active {
  @apply transition-all duration-200 ease-in-out overflow-hidden;
}

.mobile-slide-enter-from,
.mobile-slide-leave-to {
  @apply opacity-0 -translate-y-2;
}
</style>
