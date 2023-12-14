import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://rgp.ltd'),
  title: 'R     G     P',
  description: 'Design + development office focused on art, e-commerce, and culture. Based in NYC, founded by Ritu Ghiya. ',
  keywords: ["Web development", "New York", "Art", "Ritu Ghiya"],
  openGraph: {
    images: 'http://rgp.ltd/opengraph-image.png',
  },
  twitter: {
    images: ['http://rgp.ltd/opengraph-image.png'],
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
