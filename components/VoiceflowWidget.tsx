'use client'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

export default function VoiceflowWidget() {
  const pathname = usePathname()
  if (pathname !== '/') return null
  return (
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
  )
} 