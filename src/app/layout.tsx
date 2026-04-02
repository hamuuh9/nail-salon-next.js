import type { Metadata } from 'next'
import { Inter, Brawler, Marcellus } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const brawler = Brawler({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-brawler',
})

const marcellus = Marcellus({ 
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-marcellus',
})

export const metadata: Metadata = {
  title: 'Nail Salon - Premium Beauty & Nail Care',
  description: 'Experience luxury nail care with our professional services designed to make you look and feel amazing.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${brawler.variable} ${marcellus.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}