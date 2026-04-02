'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['about', 'services', 'pricing', 'gallery', 'testimonials', 'booking', 'contact']
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-3">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-theme text-white shadow-lg shadow-theme/30' 
                : 'bg-white/20 backdrop-blur-md text-white border border-white/30'
            } group-hover:scale-110 group-hover:rotate-3`}>
              N
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Nail Salon
              </span>
              <span className={`text-xs transition-colors ${
                isScrolled ? 'text-gray-500' : 'text-white/70'
              }`}>
                Premium Beauty
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg ${
                  activeSection === item.id
                    ? isScrolled 
                      ? 'text-theme bg-theme/10' 
                      : 'text-white bg-white/20'
                    : isScrolled 
                      ? 'text-gray-600 hover:text-theme hover:bg-theme/5' 
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                    isScrolled ? 'bg-theme' : 'bg-white'
                  }`} />
                )}
              </a>
            ))}
            <a
              href="#booking"
              className={`ml-4 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                isScrolled
                  ? 'bg-theme text-white hover:bg-theme-hover hover:shadow-lg hover:shadow-theme/30'
                  : 'bg-white text-theme hover:bg-white/90'
              }`}
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-gray-100 text-gray-900' 
                : 'bg-white/20 backdrop-blur-md text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-[600px] mt-6' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col gap-2 p-6 bg-white rounded-2xl shadow-2xl">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-theme bg-theme/10'
                    : 'text-gray-700 hover:text-theme hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: isMobileMenuOpen ? 'fadeInUp 0.3s ease-out forwards' : 'none',
                  opacity: isMobileMenuOpen ? 1 : 0
                }}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#booking"
              className="mt-4 px-6 py-3 bg-theme text-white rounded-xl font-semibold text-center hover:bg-theme-hover transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Appointment
            </a>
            
            {/* Mobile Menu Footer */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-center gap-4 text-gray-500 text-sm">
                <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-theme">
                  <span>📞</span>
                  <span>(123) 456-7890</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}