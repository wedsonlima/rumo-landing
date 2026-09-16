import { joinURL } from 'ufo'

interface SeoPageOptions {
  title: string
  description: string
  /** Route path, e.g. '/contato'. */
  path: string
  /** Public path of the social card image. */
  image?: string
  /** Defaults to 'website'. Articles pass 'article' plus the dates below. */
  type?: 'website' | 'article'
  /** ISO 8601 date. Only meaningful with type 'article'. */
  publishedTime?: string
  /** ISO 8601 date. Only meaningful with type 'article'. */
  modifiedTime?: string
}

/**
 * Single source of every per-page SEO tag.
 *
 * All absolute URLs are built from runtimeConfig.public.siteUrl rather than
 * useRequestURL(): on a prerendered build the request origin is the build
 * host (localhost), which would bake broken og:image and canonical URLs
 * into the static HTML.
 */
export function useSeoPage(options: SeoPageOptions) {
  const siteUrl = useRuntimeConfig().public.siteUrl as string

  const url = joinURL(siteUrl, options.path)
  const image = joinURL(siteUrl, options.image ?? '/images/og-cover.jpg')
  const type = options.type ?? 'website'

  useHead({
    title: options.title,
    link: [{ rel: 'canonical', href: url }],
  })

  useSeoMeta({
    description: options.description,
    ogTitle: options.title,
    ogDescription: options.description,
    ogType: type,
    ogUrl: url,
    ogImage: image,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: options.title,
    ogImageType: 'image/jpeg',
    ogSiteName: 'Rumo',
    ogLocale: 'pt_BR',
    twitterCard: 'summary_large_image',
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterImage: image,
    twitterImageAlt: options.title,
    ...(type === 'article' && {
      articlePublishedTime: options.publishedTime,
      articleModifiedTime: options.modifiedTime ?? options.publishedTime,
    }),
  })

  return { url, image, siteUrl }
}
