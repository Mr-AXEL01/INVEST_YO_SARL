import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
  title: string
  description: string
  path?: string
  image?: string
}

export default function SEOHead({ title, description, path = '/', image }: SEOHeadProps) {
  const url = `https://investyo.ma${path}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:locale" content="fr_MA" />
      <meta property="og:site_name" content="INVEST YO SARL" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  )
}
