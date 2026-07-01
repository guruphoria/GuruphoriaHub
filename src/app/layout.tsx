import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase/client-provider';

export const metadata: Metadata = {
  title: {
    default: 'Guruphoria | Master AI & Software Engineering',
    template: '%s | Guruphoria'
  },
  description: 'Guruphoria is a premium learning platform for AI Engineering, LLMs, Agentic AI, React, Next.js, and Software Development. Built for engineers, by engineers.',
  keywords: ['AI Engineering', 'LLM Development', 'Agentic AI', 'Software Engineering', 'Next.js', 'React', 'Firebase', 'Puneet Shivaay'],
  authors: [{ name: 'Puneet Shivaay' }],
  creator: 'Puneet Shivaay',
  publisher: 'Guruphoria',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://guruphoria.com',
    siteName: 'Guruphoria',
    title: 'Guruphoria | Redefining Tech Education',
    description: 'Master AI, Build Software, and Shape the Future with expert-led technical tutorials.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Guruphoria Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guruphoria | AI & Software Engineering Labs',
    description: 'Deep dive into technical tutorials on Agentic AI, LLMs, and modern full-stack engineering.',
    creator: '@puneetshivaay',
    images: ['/og-image.jpg'],
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
};

export const viewport: Viewport = {
  themeColor: '#050816',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Guruphoria',
              url: 'https://guruphoria.com',
              logo: 'https://guruphoria.com/logo.jpg',
              description: 'Premium AI and Software Engineering education platform.',
              founder: {
                '@type': 'Person',
                name: 'Puneet Shivaay'
              },
              sameAs: [
                'https://www.youtube.com/@guruphoria',
                'https://github.com/PuneetShivaay',
                'https://puneetshivaay.medium.com/',
                'https://in.linkedin.com/company/guruphoria'
              ]
            })
          }}
        />
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-white">
        <FirebaseClientProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
