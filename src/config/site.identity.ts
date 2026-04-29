export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'u5mpaapst3',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Newsmidcentral',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'UK\'s #1 Press Release Distribution Service',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Professional press release distribution service helping businesses reach media outlets and maximize their PR impact across the UK.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'newsmidcentral.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://newsmidcentral.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const
