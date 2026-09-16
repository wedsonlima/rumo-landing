<template>
  <div class="p-blog">
    <RNavbar />

    <main class="p-blog__main">
      <div class="p-blog__container">
        <header class="p-blog__header">
          <div class="p-blog__heading">
            <p class="p-blog__label">// BLOG</p>
            <h1 class="p-blog__title">Metas, campanhas e premiação para quem gere time de vendas</h1>
          </div>
          <p class="p-blog__description">
            Guias práticos para tirar a operação comercial da planilha e governar o resultado todo dia.
          </p>
        </header>

        <div class="p-blog__grid">
          <RArticleCard v-for="article in sorted" :key="article.slug" :article="article" heading="h2" />
        </div>
      </div>
    </main>

    <RFooter />
  </div>
</template>

<script setup lang="ts">
import { articles } from '~/data/articles'

// Mais recente primeiro. Empate mantém a ordem do registro.
const sorted = [...articles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))

const { siteUrl } = useSeoPage({
  title: 'Blog Rumo: metas, campanhas e premiação de vendedores',
  description: 'Guias práticos sobre metas de vendas, campanhas de incentivo, ranking, gamificação e premiação de vendedores para gestores comerciais.',
  path: '/blog',
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
      ],
    }),
  }],
})
</script>

<style scoped>
@reference "~/assets/css/main.css";

.p-blog {
  @apply min-h-screen bg-page-bg;
}

.p-blog__main {
  @apply flex justify-center px-5 pt-10 pb-20 lg:pt-20;
}

.p-blog__container {
  @apply flex flex-col gap-8 w-full max-w-[1216px] lg:gap-12;
}

/* ── Cabeçalho ───────────────────────────────────────────── */
.p-blog__header {
  @apply flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12;
}

.p-blog__heading {
  @apply flex flex-col gap-4 lg:w-[480px] lg:shrink-0;
}

.p-blog__label {
  @apply font-mono text-xs text-primary tracking-[0.12px];
}

.p-blog__title {
  @apply font-tight font-medium text-[32px] leading-[37px] tracking-[0.32px] text-text-primary
         lg:text-[36px] lg:leading-[1.15] lg:tracking-[0.36px];
}

.p-blog__description {
  @apply font-sans text-base leading-6 text-text-body lg:w-90;
}

/* ── Grade ───────────────────────────────────────────────── */
.p-blog__grid {
  @apply grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8;
}
</style>
