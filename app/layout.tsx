import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bonneval Solutions - AI Automation & Process Optimization',
  description: 'Expert AI automation and process optimization consultancy for SMEs and corporate departments. Specializing in workflow automation, AI agents, and custom digital solutions.',
  keywords: 'AI automation, process optimization, workflow automation, AI agents, digital transformation, logistics automation, engineering automation',
  authors: [{ name: 'Bonneval Solutions' }],
  metadataBase: new URL('https://bonnevalsolutions.com'),
  openGraph: {
    title: 'Bonneval Solutions - AI Automation & Process Optimization',
    description: 'Expert AI automation and process optimization consultancy for SMEs and corporate departments.',
    type: 'website',
    locale: 'en_US',
    url: 'https://bonnevalsolutions.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bonneval Solutions - AI Automation & Process Optimization',
    description: 'Expert AI automation and process optimization consultancy for SMEs and corporate departments.',
  },
}

// Client-only Voiceflow widget wrapper
import dynamic from 'next/dynamic'
const VoiceflowWidget = dynamic(() => import('@/components/VoiceflowWidget'), { ssr: false })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <VoiceflowWidget />
      </body>
    </html>
  )
} 