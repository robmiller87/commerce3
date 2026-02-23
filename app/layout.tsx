import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Agent Store Academy - The Shopify Era Tech Stack is Dead',
  description: 'Open source tools + AI Agents. Own everything. Pay almost nothing. Join the founding cohort of 100 builders.',
  other: {
    'facebook-domain-verification': 'r512vk2vj9sn2dqhmurrcx6zlkvc2f',
  },
  openGraph: {
    title: 'The Shopify Era Tech Stack is Dead',
    description: 'Open source tools + AI Agents. Own everything. Pay almost nothing. Join the founding cohort of 100 builders.',
    url: 'https://agentstore.academy',
    siteName: 'Agent Store Academy',
    images: [
      {
        url: 'https://agentstore.academy/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Agent Store Academy - The Shopify Era Tech Stack is Dead',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Shopify Era Tech Stack is Dead',
    description: 'Open source tools + AI Agents. Own everything. Pay almost nothing.',
    images: ['https://agentstore.academy/og-image.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#0f0f0f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1656205845736580');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1656205845736580&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  )
}
