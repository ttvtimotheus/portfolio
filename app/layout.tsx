import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "timo haseloff – web & software development",
  description: "Spezialisiert auf moderne Webanwendungen mit Next.js, React und Tailwind CSS. Schnelle Lieferung, sauberer Code für kleine Unternehmen und Startups.",
  keywords: ['Webentwicklung', 'Next.js', 'React', 'Webseiten', 'Apps', 'Software Development'],
  authors: [{ name: 'Timo Haseloff' }],
  creator: 'Timo Haseloff',
  metadataBase: new URL('https://timo-haseloff.de'),
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://timo-haseloff.de',
    title: 'Timo Haseloff - Web und Software Development',
    description: 'Moderne Webseiten und Apps für kleine Unternehmen und Startups.',
    siteName: 'Timo Haseloff',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Timo Haseloff - Web und Software Development',
    description: 'Moderne Webseiten und Apps für kleine Unternehmen und Startups.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://timo-haseloff.de/#organization",
                  "name": "Timo Haseloff Web und Software Development",
                  "url": "https://timo-haseloff.de",
                  "sameAs": [],
                  "logo": {
                    "@type": "ImageObject",
                    "@id": "https://timo-haseloff.de/#logo",
                    "url": "https://timo-haseloff.de/logo.png",
                    "width": 200,
                    "height": 200
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://timo-haseloff.de/#website",
                  "url": "https://timo-haseloff.de",
                  "name": "Timo Haseloff - Web und Software Development",
                  "description": "Moderne Webseiten und Apps für kleine Unternehmen und Startups",
                  "publisher": {
                    "@id": "https://timo-haseloff.de/#organization"
                  },
                  "inLanguage": "de-DE"
                }
              ]
            })
          }}
        />
      </head>
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
