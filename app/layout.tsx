import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://blickstra.com'),
  title: 'Blickstra — Strategic Tender Intelligence for Malaysian Contractors',
  description: 'AI-powered tender intelligence. Monitor 10 government portals automatically. Get alerted only when tenders match your company profile.',
  openGraph: {
    title: 'Blickstra — Strategic Tender Intelligence',
    description: 'AI-powered tender intelligence for Malaysian contractors',
    url: 'https://blickstra.com',
    siteName: 'Blickstra',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-zinc-900`}>
        {children}
      </body>
    </html>
  )
}
