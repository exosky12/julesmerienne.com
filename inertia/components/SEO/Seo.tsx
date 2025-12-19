import { Head, usePage } from '@inertiajs/react'

interface SeoProps {
  title: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  author?: string
  twitterCard?: 'summary' | 'summary_large_image'
  children?: React.ReactNode
}

export const Seo = ({
  title,
  description = 'Portfolio de Jules Merienne - Développeur Full Stack & Créatif. Découvrez mes projets, compétences et contactez-moi pour vos besoins digitaux.',
  image = 'https://julesmerienne.dev/myself.webp', // Fallback to provided self portrait
  url,
  type = 'website',
  publishedTime,
  author = 'Jules Merienne',
  twitterCard = 'summary_large_image',
  children,
}: SeoProps) => {
  const { canonicalUrl } = usePage().props as any
  const finalUrl = url || canonicalUrl || 'https://julesmerienne.dev'

  const siteName = 'Jules Merienne'
  const fullTitle = `${title} | ${siteName}`

  // Structured Data (JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type === 'profile' ? 'Person' : 'WebSite',
    'name': siteName,
    'url': finalUrl,
    'description': description,
    'author': {
      '@type': 'Person',
      'name': author,
    },
    'image': image,
    ...(publishedTime && { datePublished: publishedTime }),
  }

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={finalUrl} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="fr_FR" />
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={finalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@julesmerienne" />

      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {children}
    </Head>
  )
}
