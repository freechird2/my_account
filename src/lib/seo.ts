import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  image: string
}

export function generateMetadata({
  title,
  description,
  image,
}: SEOProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 260,
          height: 260,
        },
      ],
      locale: 'ko_KR',
      type: 'website',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
    },
  }
}
