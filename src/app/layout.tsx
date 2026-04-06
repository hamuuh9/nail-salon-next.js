import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { siteConfig } from '../siteConfig'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: siteConfig.salonName,
  description: 'Experience luxury nail care with our professional services designed to make you look and feel amazing.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <main className="pb-32 md:pb-0">
          {children}
        </main>
        {/* Sticky Mobile Book Appointment Button */}
        <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm z-40 animate-slide-up">
          <a
            href="#booking"
            className="flex items-center justify-center w-full py-4 bg-theme text-white rounded-full text-lg font-bold shadow-[0_8px_30px_rgb(0,0,0,0.12)] shadow-theme/40 active:scale-95 transition-all text-center"
          >
            Book Appointment
          </a>
        </div>
      </body>
    </html>
  )
}