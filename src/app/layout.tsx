import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'interstellar s.r.o. | Helping You Navigate the World of AI',
  description: 'interstellar s.r.o. - SaaS software development and AI consulting services. Operating SeekWhy.ai and specializing in Agentic AI implementation since 2018.',
  keywords: ['AI consulting', 'Agentic AI', 'SaaS development', 'SeekWhy', 'artificial intelligence', 'software development'],
  authors: [{ name: 'interstellar s.r.o.' }],
  openGraph: {
    title: 'interstellar s.r.o. | AI & SaaS Solutions',
    description: 'SaaS software development and AI consulting services. Operating SeekWhy.ai.',
    url: 'https://interstellar.guide',
    siteName: 'interstellar',
    type: 'website',
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
