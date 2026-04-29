import type { Metadata } from 'next'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'
import { siteContent } from '@/config/site.content'
import { PressReleaseHomepage } from '@/components/home/press-release-homepage'

export const revalidate = 300

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/',
    title: "UK's #1 Press Release Distribution Service",
    description: "Professional press release distribution service helping businesses reach media outlets and maximize their PR impact across the UK.",
    openGraphTitle: "UK's #1 Press Release Distribution Service",
    openGraphDescription: "Professional press release distribution service helping businesses reach media outlets and maximize their PR impact across the UK.",
    image: SITE_CONFIG.defaultOgImage,
    keywords: ['press release distribution', 'PR services', 'media distribution', 'UK newswire'],
  })
}







export default async function HomePage() {
  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.baseUrl,
      logo: `${SITE_CONFIG.baseUrl.replace(/\/$/, '')}${SITE_CONFIG.defaultOgImage}`,
      sameAs: [],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.baseUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_CONFIG.baseUrl.replace(/\/$/, '')}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarShell />
      <SchemaJsonLd data={schemaData} />
      <PressReleaseHomepage />
      <Footer />
    </div>
  )
}
