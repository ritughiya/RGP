import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'R     G     P',
  description: 'Design + development office focused on art, e-commerce, and culture. Based in NYC, Founded by Ritu Ghiya. ',
  openGraph: {
    title: 'R     G     P',
    description: 'Design + development office focused on art, e-commerce, and culture. Based in NYC, Founded by Ritu Ghiya.',
    url: 'https://rgp.ltd',
    siteName: 'R     G     P',
    images: [
      {
        url: 'https://rgp.ltd/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Ritu Ghiya Projects',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'R     G     P',
    description: 'Design + development office focused on art, e-commerce, and culture. Based in NYC, Founded by Ritu Ghiya.',
    images: ['https://rgp.ltd/twitter-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
