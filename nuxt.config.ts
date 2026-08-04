// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

// Base path of the deployment. GitHub Pages project sites are served from
// /<repo>/, so every absolute asset URL needs this prefix.
// Override with NUXT_APP_BASE_URL='/' when moving to a custom domain.
const baseURL = process.env.NUXT_APP_BASE_URL || '/rumo-landing/'

// Scheme + host only. The sitemap module joins this with app.baseURL itself,
// so passing it a URL that already contains the base path double-prefixes it.
const siteOrigin = process.env.NUXT_PUBLIC_SITE_ORIGIN || 'https://wedsonlima.github.io'

// Full public address of the site, base path included. Canonical links and
// og:image are built from this.
const siteUrl = (siteOrigin + baseURL).replace(/\/$/, '')

export default defineNuxtConfig({
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxtjs/sitemap', '@nuxtjs/robots', 'shadcn-nuxt'],
  components: [
    { path: '~/components', pathPrefix: false },
    { path: '~/components/icons', pathPrefix: false },
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  devServer: {
    port: 8000,
  },
  css: ['~/assets/css/main.css'],
  app: {
    baseURL,
    head: {
      htmlAttrs: { lang: 'pt-BR', class: 'dark' },
      link: [{ rel: 'icon', type: 'image/x-icon', href: `${baseURL}favicon.ico` }],
      meta: [
        { name: 'theme-color', content: '#111111' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
    },
  },
  site: {
    url: siteOrigin,
    name: 'Rumo',
  },
  runtimeConfig: {
    public: { siteUrl },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: {
    families: [
      { name: 'Inter', weights: [400, 600] },
      { name: 'Inter Tight', weights: [600] },
      { name: 'JetBrains Mono', weights: [400] },
    ],
  },
  shadcn: {
    prefix: '',
    componentDir: './app/components/ui',
  },
  // WebP is set per-image rather than globally: several assets under
  // public/images are SVGs that carry a .png extension, and forcing a raster
  // format would rasterise the vector art.
  //
  // The provider is deliberately left at the default `ipx` here: it serves
  // /_ipx/* through dev middleware. `ipxStatic` has no such middleware, so
  // pinning it globally 404s every image under `nuxt dev`.
  image: {
    quality: 75,
    densities: [1, 2],
  },
  // ipxStatic emits every image at build time, so the deploy stays pure static
  // files. It also prefixes generated URLs with app.baseURL.
  $production: {
    image: {
      provider: 'ipxStatic',
    },
  },
  // The site has three fixed routes. Declaring them beats route auto-discovery,
  // which picked up the base path as a route and emitted duplicate entries.
  sitemap: {
    xsl: false,
    excludeAppSources: true,
    urls: [
      { loc: '/', changefreq: 'weekly', priority: 1.0 },
      { loc: '/contato', changefreq: 'monthly', priority: 0.8 },
      { loc: '/politica-de-privacidade', changefreq: 'yearly', priority: 0.3 },
    ],
  },
  // Crawlers only read robots.txt from the domain root, so it is meaningless
  // while the site is served from /rumo-landing/. The module refuses to emit it
  // under a base path; gating on baseURL turns it back on automatically once a
  // custom domain is configured. The robots <meta> tag is emitted either way.
  robots: {
    allow: ['/'],
    robotsTxt: baseURL === '/',
  },
  nitro: {
    preset: 'github_pages',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/contato', '/politica-de-privacidade', '/sitemap.xml'],
    },
  },
})
