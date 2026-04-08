import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import { CustomCursor } from '@/components/custom-cursor'
import { Navigation } from '@/components/navigation'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sufi Shaikh | Full-Stack Web Developer & Freelancer',
  description: 'I build real-world web apps and client-facing digital products using React, Tailwind CSS, and Supabase. From SaaS platforms to NGO websites — I turn ideas into live products.',
  keywords: ['Full-Stack Developer', 'Web Developer', 'Freelancer', 'React', 'Supabase', 'Tailwind CSS'],
  authors: [{ name: 'Sufi Shaikh' }],
  creator: 'Sufi Shaikh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Sufi Shaikh | Full-Stack Web Developer & Freelancer',
    description: 'I build real-world web apps and client-facing digital products using React, Tailwind CSS, and Supabase.',
    siteName: 'Sufi Shaikh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sufi Shaikh | Full-Stack Web Developer & Freelancer',
    description: 'I build real-world web apps and client-facing digital products using React, Tailwind CSS, and Supabase.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0f1e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${plusJakartaSans.variable} ${inter.variable} font-body antialiased bg-background text-foreground overflow-x-hidden`}>
        <CustomCursor />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
