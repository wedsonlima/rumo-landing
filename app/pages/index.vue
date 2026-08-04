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
const title = 'Rumo — Plataforma de Performance Comercial para Times de Vendas'
const description = 'Rumo transforma o caos do time comercial em resultados previsíveis. Gestão de metas, gamificação, rankings em tempo real e pagamentos integrados para times de vendas.'

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
