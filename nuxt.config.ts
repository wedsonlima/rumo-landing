// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import { articles, articlePath } from './app/data/articles'

// Base path of the deployment. On the custom domain the site is served from the
// root, so no prefix. Override with NUXT_APP_BASE_URL='/rumo-landing/' to build
// for the github.io project-site URL, which serves from /<repo>/.
const baseURL = process.env.NUXT_APP_BASE_URL || '/'

// Scheme + host only. The sitemap module joins this with app.baseURL itself,
// so passing it a URL that already contains the base path double-prefixes it.
const siteOrigin = process.env.NUXT_PUBLIC_SITE_ORIGIN || 'https://userumo.com.br'

// Full public address of the site, base path included. Canonical links and
// og:image are built from this.
const siteUrl = (siteOrigin + baseURL).replace(/\/$/, '')

// GA4 measurement ID. Public by design — it ships in the page source.
const gaMeasurementId = 'G-TLPZGGMLK5'

// The blog index changes whenever any article does.
const latestArticleUpdate = articles.map((a) => a.updatedAt).sort().at(-1)

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
      link: [
        { rel: 'icon', type: 'image/x-icon', href: `${baseURL}favicon.ico` },
        // Sem isto o iOS usa um screenshot da página como ícone na tela inicial.
        { rel: 'apple-touch-icon', sizes: '180x180', href: `${baseURL}apple-touch-icon.png` },
      ],
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
  //
  // GA4 lives here too, so `nuxt dev` never reports into the property.
  //
  // Only the initial page_view is sent, by gtag('config'). Client-side route
  // changes are deliberately NOT tracked here: GA4 enhanced measurement already
  // reports History API navigations, and sending our own on top double-counts
  // every <NuxtLink> hop. If enhanced measurement is ever turned off in the data
  // stream, the fix is to turn it back on, not to add a router hook.
  $production: {
    app: {
      head: {
        script: [
          { src: `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`, async: true },
          {
            innerHTML:
              'window.dataLayer=window.dataLayer||[];' +
              'function gtag(){dataLayer.push(arguments);}' +
              "gtag('js',new Date());" +
              `gtag('config','${gaMeasurementId}');`,
          },
        ],
      },
    },
    image: {
      provider: 'ipxStatic',
    },
  },
  // Routes are declared by hand instead of auto-discovered: discovery picked up
  // the base path as a route and emitted duplicate entries. The blog entries
  // come from the article registry, which is the single source for them.
  sitemap: {
    xsl: false,
    excludeAppSources: true,
    urls: [
      { loc: '/', changefreq: 'weekly', priority: 1.0 },
      { loc: '/contato', changefreq: 'monthly', priority: 0.8 },
      { loc: '/politica-de-privacidade', changefreq: 'yearly', priority: 0.3 },
      { loc: '/blog', changefreq: 'weekly', priority: 0.8, lastmod: latestArticleUpdate },
      ...articles.map((a) => ({
        loc: articlePath(a.slug),
        changefreq: 'monthly' as const,
        priority: 0.7,
        lastmod: a.updatedAt,
      })),
    ],
  },
  // Crawlers only read robots.txt from the domain root, so it is meaningless
  // under a base path — and the module refuses to emit it there. Gating on
  // baseURL keeps a project-site build (NUXT_APP_BASE_URL=/rumo-landing/) from
  // failing. The robots <meta> tag is emitted either way.
  robots: {
    allow: ['/'],
    robotsTxt: baseURL === '/',
  },
  nitro: {
    preset: 'github_pages',
    prerender: {
      crawlLinks: true,
      // failOnError turns a registry slug without a page into a build failure
      // instead of a silently missing article.
      failOnError: true,
      routes: [
        '/',
        '/contato',
        '/politica-de-privacidade',
        '/blog',
        ...articles.map((a) => articlePath(a.slug)),
        '/sitemap.xml',
      ],
    },
  },
})
