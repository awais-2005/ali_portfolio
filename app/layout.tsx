import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ali Haider Portfolio',
  description: 'Portfolio of Ali Haider, a software engineer specializing in web development.',
  generator: 'React, Next.js, and TypeScript',
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
