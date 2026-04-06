'use client'

import { useState, useEffect } from 'react'
import { siteConfig } from '../siteConfig'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 font-sans ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white shadow-[0_10px_30px_rgba(62,47,47,0.05)] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="relative z-50 flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-theme to-[#b88c8c] flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-theme/30 group-hover:scale-105 transition-transform">
            N
          </div>
          <div className={`text-xl font-semibold tracking-tight transition-colors ${
            isScrolled || isMobileMenuOpen ? 'text-[#3e2f2f]' : 'text-[#3e2f2f] md:text-white'
          }`}>
            {siteConfig.salonName}
          </div>
        </a>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden relative z-50 p-2 -mr-2 transition-colors ${
            isScrolled || isMobileMenuOpen ? 'text-[#3e2f2f]' : 'text-[#3e2f2f]'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
            <span className={`w-full h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`w-full h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className={`text-sm font-medium tracking-wide transition-colors ${isScrolled ? 'text-[#6d5b5b] hover:text-[#3e2f2f]' : 'text-white/90 hover:text-white'}`}>
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden fixed inset-0 top-0 bg-white pt-24 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: -1 }}
      >
        <nav className="flex flex-col h-full px-6 pb-32">
          <div className="flex flex-col gap-6 flex-1 mt-8">
            {navItems.map((item, index) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-light text-[#3e2f2f] hover:text-theme transition-colors border-b border-[#f5dddc] pb-4"
                style={{
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transition: `all 0.4s ease-out ${index * 0.1}s`
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div 
            className="flex flex-col mt-auto pt-8 border-t border-[#f5dddc] gap-2 mb-8"
            style={{
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isMobileMenuOpen ? 1 : 0,
              transition: `all 0.4s ease-out 0.5s`
            }}
          >
            <span className="text-xs font-semibold text-[#a79a99] uppercase tracking-[0.2em] mb-2">Get in Touch</span>
            <a href={`tel:${siteConfig.phoneLink}`} className="text-2xl text-[#7b5556] font-medium block mb-1">{siteConfig.phoneNumber}</a>
            <a href={`mailto:${siteConfig.email}`} className="text-lg text-[#6d5b5b] block">{siteConfig.email}</a>
          </div>
        </nav>
      </div>
    </header>
  )
}