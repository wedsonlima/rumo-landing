<template>
  <div class="r-article">
    <RNavbar />

    <main class="r-article__main">
      <article class="r-article__container">
        <header class="r-article__header">
          <nav class="r-article__breadcrumb" aria-label="Você está em">
            <ol class="r-article__breadcrumb-list">
              <li><NuxtLink to="/" class="r-article__breadcrumb-link">Início</NuxtLink></li>
              <li aria-hidden="true" class="r-article__breadcrumb-sep">/</li>
              <li><NuxtLink to="/blog" class="r-article__breadcrumb-link">Blog</NuxtLink></li>
              <li aria-hidden="true" class="r-article__breadcrumb-sep">/</li>
              <li class="r-article__breadcrumb-current" aria-current="page">{{ article.category }}</li>
            </ol>
          </nav>

          <h1 class="r-article__title">{{ article.title }}</h1>

          <p class="r-article__lead">
            <slot name="lead">{{ article.description }}</slot>
          </p>

          <div class="r-article__meta">
            <time :datetime="article.publishedAt" class="r-article__meta-item">{{ publishedLabel }}</time>
            <span aria-hidden="true" class="r-article__meta-sep">/</span>
            <span class="r-article__meta-item">{{ article.readingMinutes }} min de leitura</span>
            <span aria-hidden="true" class="r-article__meta-sep">/</span>
            <span class="r-article__meta-item r-article__meta-item--category">{{ article.category }}</span>
          </div>
        </header>

        <div class="r-article__body">
          <slot name="intro" />

          <nav v-if="sections.length" class="r-article__toc" aria-label="Nesta página">
            <p class="r-article__toc-label">Nesta página</p>
            <ol class="r-article__toc-list">
              <li v-for="section in sections" :key="section.id">
                <a :href="`#${section.id}`" class="r-article__toc-link">{{ section.title }}</a>
              </li>
            </ol>
          </nav>

          <slot />
        </div>

        <section id="como-o-rumo-faz" class="r-article__rumo" aria-labelledby="rumo-title">
          <div class="r-article__rumo-glow" aria-hidden="true">
            <NuxtImg src="/images/plans-glow-ellipse.svg" alt="" width="400" height="400" loading="lazy" />
          </div>
          <div class="r-article__rumo-content">
            <p class="r-article__rumo-label">// COMO O RUMO FAZ</p>
            <h2 id="rumo-title" class="r-article__rumo-title">{{ article.rumo.title }}</h2>
            <p class="r-article__rumo-body">{{ article.rumo.body }}</p>
            <NuxtLink to="/contato" class="r-article__rumo-cta">
              <Button variant="cta" class="r-article__rumo-btn">Solicitar demonstração</Button>
            </NuxtLink>
          </div>
        </section>

        <section v-if="relatedArticles.length" class="r-article__related" aria-labelledby="related-title">
          <h2 id="related-title" class="r-article__related-title">// CONTINUE LENDO</h2>
          <div class="r-article__related-grid">
            <RArticleCard
              v-for="related in relatedArticles"
              :key="related.slug"
              :article="related"
              heading="h3"
            />
          </div>
        </section>
      </article>
    </main>

    <RFooter />
  </div>
</template>

<script setup lang="ts">
import { articles, articlePath, findArticle, type Article } from '~/data/articles'

export interface ArticleSection {
  /** Must match the id on the <h2> inside the article body. */
  id: string
  title: string
}

const props = withDefaults(defineProps<{
  slug: string
  /** Headings listed in the "Nesta página" box. */
  sections?: ArticleSection[]
}>(), {
  sections: () => [],
})

const article = findArticle(props.slug) as Article
if (!article) {
  throw createError({ statusCode: 404, statusMessage: `Artigo "${props.slug}" não está no registro.` })
}

const relatedArticles = article.related
  .map((slug) => articles.find((a) => a.slug === slug))
  .filter((a): a is Article => Boolean(a))

// "16 set 2026", no site style. Date arithmetic in UTC so the calendar day
// never shifts with the build machine's timezone.
const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
const published = new Date(article.publishedAt)
const publishedLabel = `${published.getUTCDate()} ${months[published.getUTCMonth()]} ${published.getUTCFullYear()}`

const { url, siteUrl } = useSeoPage({
  title: article.title,
  description: article.description,
  path: articlePath(article.slug),
  type: 'article',
  publishedTime: article.publishedAt,
  modifiedTime: article.updatedAt,
})

const organization = {
  '@type': 'Organization',
  name: 'Rumo',
  url: siteUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${siteUrl}/images/logo-rumo.svg`,
  },
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.description,
        // Sem `image`: a única imagem disponível é a capa social com logo e
        // chamada comercial, e o Google pede imagem representativa do artigo.
        // Entra quando houver ilustração editorial por artigo.
        datePublished: article.publishedAt,
        dateModified: article.updatedAt,
        inLanguage: 'pt-BR',
        articleSection: article.category,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        author: organization,
        publisher: organization,
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: article.title, item: url },
        ],
      }),
    },
  ],
})
</script>

<style scoped>
@reference "~/assets/css/main.css";

/* Mobile first: uma coluna com 20px de margem. O desktop só alarga o
   respiro e a tipografia. */

.r-article {
  @apply min-h-screen bg-page-bg;
}

.r-article__main {
  @apply flex justify-center px-5 pt-10 pb-20 lg:pt-20;
}

.r-article__container {
  @apply flex flex-col gap-8 w-full max-w-[720px];
}

/* ── Cabeçalho ───────────────────────────────────────────── */
.r-article__header {
  @apply flex flex-col gap-4;
}

.r-article__breadcrumb-list {
  @apply flex flex-wrap items-center gap-2 list-none m-0 p-0
         font-mono text-xs text-text-muted tracking-[0.12px];
}

.r-article__breadcrumb-link {
  @apply no-underline text-text-muted transition-colors hover:text-text-body;
}

.r-article__breadcrumb-sep {
  @apply text-text-subtle;
}

.r-article__breadcrumb-current {
  @apply text-text-body;
}

.r-article__title {
  @apply font-tight font-semibold text-[32px] leading-[37px] tracking-[0.32px] text-text-primary
         lg:text-[40px] lg:leading-[46px] lg:tracking-[0.4px];
}

.r-article__lead {
  @apply font-sans text-[17px] leading-[26px] text-text-body
         lg:text-lg lg:leading-7;
}

.r-article__meta {
  @apply flex flex-wrap items-center gap-x-3 gap-y-2 pt-4 border-t border-page-border
         font-mono text-xs text-text-muted tracking-[0.12px] uppercase;
}

.r-article__meta-item {
  @apply font-mono text-xs text-text-muted tracking-[0.12px];
}

.r-article__meta-item--category {
  @apply text-text-body;
}

.r-article__meta-sep {
  @apply text-text-subtle;
}

/* ── Sumário ─────────────────────────────────────────────── */
.r-article__toc {
  @apply flex flex-col gap-3 px-6 py-5 border border-page-border rounded-[8px];
}

/* Seletores com dois níveis para vencer os :deep(p) e :deep(a) do corpo,
   que têm a mesma origem e vêm depois. */
.r-article__toc .r-article__toc-label {
  @apply font-mono text-xs leading-[1.15] text-text-muted tracking-[0.12px] uppercase;
}

.r-article__toc .r-article__toc-list {
  @apply flex flex-col gap-2 m-0 pl-5 font-sans text-sm leading-[22px] text-text-body;
}

.r-article__toc .r-article__toc-link {
  @apply no-underline text-text-body transition-colors hover:text-text-primary;
}

/* ── Corpo do artigo ─────────────────────────────────────── */
/* O texto editorial chega pelo slot, então os seletores precisam de :deep.
   Os tamanhos sobrescrevem o <p> global de 14px do main.css. */
.r-article__body {
  @apply flex flex-col gap-5;
}

.r-article__body :deep(p) {
  @apply font-sans text-[17px] leading-7 text-gray-6
         lg:text-lg lg:leading-[30px];
}

.r-article__body :deep(h2) {
  @apply font-tight font-medium text-2xl leading-[30px] tracking-[0.24px] text-text-primary mt-5
         lg:text-[28px] lg:leading-[34px] lg:tracking-[0.28px];
  scroll-margin-top: 96px;
}

.r-article__body :deep(h3) {
  @apply font-tight font-medium text-xl leading-[26px] tracking-[0.2px] text-text-primary mt-2;
}

.r-article__body :deep(ul),
.r-article__body :deep(ol) {
  @apply flex flex-col gap-2.5 m-0 pl-6 font-sans text-[17px] leading-7 text-gray-6
         lg:text-lg lg:leading-[30px];
}

.r-article__body :deep(ul) {
  @apply list-disc;
}

.r-article__body :deep(ol) {
  @apply list-decimal;
}

.r-article__body :deep(strong) {
  @apply font-semibold text-text-primary;
}

.r-article__body :deep(a) {
  @apply text-primary underline underline-offset-4 decoration-primary/40 transition-colors
         hover:text-primary-light hover:decoration-primary-light;
}

.r-article__body :deep(blockquote) {
  @apply m-0 pl-5 border-l border-primary font-sans text-[17px] leading-7 text-text-body
         lg:text-lg lg:leading-[30px];
}

/* Tabelas rolam na horizontal no celular em vez de estourar a página. */
.r-article__body :deep(.r-table) {
  @apply w-full overflow-x-auto;
}

.r-article__body :deep(table) {
  @apply w-full border-collapse font-sans text-[15px] leading-6 text-gray-6;
}

.r-article__body :deep(th),
.r-article__body :deep(td) {
  @apply text-left align-top px-3 py-2.5 border-b border-page-border whitespace-nowrap;
}

.r-article__body :deep(th) {
  @apply font-mono text-xs uppercase tracking-[0.12px] text-text-muted font-normal;
}

.r-article__body :deep(td:first-child),
.r-article__body :deep(th:first-child) {
  @apply pl-0;
}

/* Caixa de exemplo ou modelo pronto para copiar. */
.r-article__body :deep(.r-box) {
  @apply flex flex-col gap-3 px-6 py-5 bg-surface border border-page-border rounded-[8px];
}

.r-article__body :deep(.r-box__label) {
  @apply font-mono text-xs text-primary tracking-[0.12px] uppercase;
}

/* Botão de download (planilha). */
.r-article__body :deep(.r-download) {
  @apply inline-flex items-center justify-center gap-2 self-start min-h-11 w-full
         px-[18px] py-[10px] rounded-full no-underline
         font-mono text-xs uppercase tracking-[0.12px] text-white
         bg-primary border-t border-l border-r border-primary-border
         shadow-[var(--shadow-primary-glow)] transition-colors hover:bg-primary-dark hover:text-white
         sm:w-auto;
}

/* ── Como o Rumo faz ─────────────────────────────────────── */
.r-article__rumo {
  @apply relative overflow-hidden p-6 border border-primary rounded-[8px] bg-page-bg
         lg:p-8;
  scroll-margin-top: 96px;
}

.r-article__rumo-glow {
  @apply absolute size-[400px] pointer-events-none;
  top: -141px;
  left: -141px;
}

.r-article__rumo-content {
  @apply relative flex flex-col gap-4;
}

.r-article__rumo-label {
  @apply font-mono text-xs text-primary tracking-[0.12px];
}

.r-article__rumo-title {
  @apply font-tight font-medium text-2xl leading-[30px] tracking-[0.24px] text-text-primary;
}

.r-article__rumo-body {
  @apply font-sans text-base leading-[26px] text-text-body;
}

.r-article__rumo-cta {
  @apply block w-full sm:w-auto sm:self-start;
}

.r-article__rumo-btn {
  @apply w-full min-h-11 justify-center sm:w-auto;
}

/* ── Continue lendo ──────────────────────────────────────── */
.r-article__related {
  @apply flex flex-col gap-6 mt-4;
}

.r-article__related-title {
  @apply font-mono font-normal text-xs text-primary tracking-[0.12px];
}

.r-article__related-grid {
  @apply grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6;
}
</style>
