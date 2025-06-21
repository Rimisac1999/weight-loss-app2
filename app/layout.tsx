import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Script id="voiceflow-widget" strategy="afterInteractive">
          {`
            (function(d, t) {
                var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                  window.voiceflow.chat.load({
                    verify: { projectID: '6856a89623e97962edade3cd' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production',
                    voice: {
                      url: "https://runtime-api.voiceflow.com"
                    }
                  });
                }
                v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
                v.type = "text/javascript";
                s.parentNode.insertBefore(v, s);
            })(document, 'script');
          `}
        </Script>
      </body>
    </html>
  )
} 