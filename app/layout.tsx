import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ali Haider Portfolio',
  description: 'Portfolio of Ali Haider, a software engineer specializing in web development.',
  generator: 'React, Next.js, and TypeScript',
  openGraph: {
    images: [
      {
        url: '/images/ali-profile.png',
        width: 400,
        height: 400,
        alt: 'Ali Haider Profile Picture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/ali-profile.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
