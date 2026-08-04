<template>
  <div>
    <RNavbar />
    <main>
      <SHero />
      <SEcosystem />
      <SEcosystemAction />
      <SManagers />
      <SSellers />
      <SSystem />
      <STestimonials />
      <RSeparator />
      <SPlans />
      <SFaq />
      <SDownload />
    </main>
    <RFooter />
  </div>
</template>

<script setup lang="ts">
// Kept under the limits social previews and Google truncate at:
// title ≤ 60 characters, description ≤ 125.
const title = 'Rumo — Plataforma de Performance para Times de Vendas'
const description = 'Transforme o time comercial em resultado previsível: metas, gamificação, ranking em tempo real e premiação integrada.'

useSeoPage({ title, description, path: '/' })

const siteUrl = useRuntimeConfig().public.siteUrl as string

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Rumo',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Android, iOS, Web',
      url: siteUrl,
      description,
      offers: { '@type': 'Offer', priceCurrency: 'BRL' },
      publisher: {
        '@type': 'Organization',
        name: 'Rumo',
        email: 'admin@userumo.com.br',
        telephone: '+55 85 98178-4072',
      },
    }),
  }],
})
</script>
