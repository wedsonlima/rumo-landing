<template>
  <div class="sellers-card" :class="{ 'sellers-card--wide': wide }">
    <div class="sellers-card__text">
      <span class="sellers-card__accent" />
      <h3 class="sellers-card__title">{{ title }}</h3>
      <p class="sellers-card__body">{{ body }}</p>
    </div>
    <div v-if="$slots.image" class="sellers-card__image">
      <slot name="image" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  body: string
  wide?: boolean
}>()
</script>

<style scoped>
@reference "~/assets/css/main.css";

.sellers-card {
  @apply flex flex-col bg-gray-3 border border-gray-6 rounded-[8px] overflow-hidden;
}

.sellers-card--wide {
  @apply col-span-2 flex-row gap-8;
}

.sellers-card__text {
  @apply flex flex-col gap-6 p-8 shrink-0;
}

.sellers-card--wide .sellers-card__text {
  @apply w-96 self-stretch;
}

.sellers-card__accent {
  @apply block h-[2px] w-10 bg-primary rounded-full shrink-0;
}

.sellers-card__title {
  @apply font-tight font-medium text-2xl text-gray-12 leading-[1.15] tracking-[0.24px];
}

.sellers-card__body {
  @apply font-sans font-normal text-sm text-gray-11 leading-[1.4];
}

.sellers-card__image {
  @apply relative overflow-hidden shrink-0 h-60 w-full;
}

.sellers-card__image::before {
  content: '';
  @apply absolute top-0 left-0 right-0 z-10 pointer-events-none;
  height: 80px;
  background: linear-gradient(to bottom, var(--color-gray-3), transparent);
}
</style>
