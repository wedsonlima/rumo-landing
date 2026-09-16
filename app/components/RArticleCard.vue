<template>
  <NuxtLink :to="articlePath(article.slug)" class="r-article-card">
    <div class="r-article-card__text">
      <span class="r-article-card__category">// {{ article.category }}</span>
      <component :is="heading" class="r-article-card__title">{{ article.title }}</component>
      <p v-if="!compact" class="r-article-card__description">{{ article.description }}</p>
    </div>
    <div class="r-article-card__meta">
      <time :datetime="article.publishedAt">{{ publishedLabel }}</time>
      <span>{{ article.readingMinutes }} min</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { articlePath, type Article } from '~/data/articles'

const props = withDefaults(defineProps<{
  article: Article
  /** h2 na listagem, h3 dentro de outro artigo. */
  heading?: 'h2' | 'h3'
  /** Esconde a descrição. Usado nos artigos relacionados. */
  compact?: boolean
}>(), {
  heading: 'h2',
  compact: false,
})

const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
const published = new Date(props.article.publishedAt)
const publishedLabel = `${published.getUTCDate()} ${months[published.getUTCMonth()]} ${published.getUTCFullYear()}`
</script>

<style scoped>
@reference "~/assets/css/main.css";

.r-article-card {
  @apply flex flex-col justify-between gap-6 p-6 no-underline
         bg-page-bg border border-page-border rounded-[8px]
         transition-colors hover:border-gray-8
         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary;
}

.r-article-card__text {
  @apply flex flex-col gap-3;
}

.r-article-card__category {
  @apply font-mono text-xs text-primary tracking-[0.12px] uppercase;
}

.r-article-card__title {
  @apply font-tight font-medium text-[22px] leading-7 tracking-[0.22px] text-text-primary;
}

.r-article-card:hover .r-article-card__title,
.r-article-card:focus-visible .r-article-card__title {
  @apply underline underline-offset-4 decoration-1;
}

.r-article-card__description {
  @apply font-sans text-base leading-6 text-text-body;
}

.r-article-card__meta {
  @apply flex justify-between gap-3 font-mono text-xs text-text-muted tracking-[0.12px] uppercase;
}

.r-article-card__meta time {
  @apply font-mono text-xs text-text-muted tracking-[0.12px];
}
</style>
