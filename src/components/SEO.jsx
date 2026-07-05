import { Helmet } from 'react-helmet-async'

const SITE = 'Agro One India'
const BASE = 'https://www.agroone.in'

export default function SEO({ title, description, path = '/', image }) {
  const fullTitle = title ? `${title} | ${SITE}` : `${SITE} | Agricultural Machinery`
  const url = `${BASE}${path}`
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
