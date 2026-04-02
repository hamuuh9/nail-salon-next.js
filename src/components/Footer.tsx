'use client'

import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-theme rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-theme-dark rounded-full blur-3xl" />
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-gray-800">
        <div className="container-custom py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-3">
                Stay Updated with Our Newsletter
              </h3>
              <p className="text-gray-400 max-w-xl">
                Subscribe to receive exclusive offers, nail care tips, and updates about our latest services.
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative flex-1 sm:w-80">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-xl focus:border-theme focus:ring-4 focus:ring-theme/20 transition-all outline-none text-white placeholder-gray-500"
                  required
                />
                {isSubscribed && (
                  <div className="absolute inset-0 flex items-center justify-center bg-green-500 rounded-xl animate-fade-in">
                    <span className="font-medium">Subscribed!</span>
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-theme text-white rounded-xl font-semibold hover:bg-theme-hover transition-colors flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* About Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-theme to-theme-dark rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                N
              </div>
              <h3 className="text-2xl font-bold">Nail Salon</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We provide premium nail care services in a relaxing atmosphere. Our skilled technicians 
              are dedicated to making you look and feel beautiful with every visit.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.875-1.956 1.782v2.281h3.328l-.532 3.47h-2.796v8.385C19.612 23.047 24 18.056 24 12.073z', color: 'hover:bg-blue-600' },
                { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { name: 'Twitter', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', color: 'hover:bg-black' },
                { name: 'Pinterest', icon: 'M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z', color: 'hover:bg-red-600' },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 ${social.color} hover:text-white transition-all duration-300 hover:scale-110`}
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Our Services', href: '#services' },
                { name: 'Pricing', href: '#pricing' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Book Appointment', href: '#booking' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-theme transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-4">
              {[
                { name: 'Manicure', icon: '💅' },
                { name: 'Pedicure', icon: '🦶' },
                { name: 'Nail Art', icon: '🎨' },
                { name: 'Gel Nails', icon: '💎' },
                { name: 'Extensions', icon: '✨' },
                { name: 'Spa Treatments', icon: '💆' },
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#pricing"
                    className="text-gray-400 hover:text-theme transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2"
                  >
                    <span>{service.icon}</span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-5 text-gray-400">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-theme flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="leading-relaxed">
                  123 Beauty Street<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-theme flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+1234567890" className="hover:text-theme transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-theme flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:info@nailsalon.com" className="hover:text-theme transition-colors">
                  info@nailsalon.com
                </a>
              </li>
            </ul>

            {/* Opening Hours */}
            <div className="mt-8 p-4 bg-gray-800/50 rounded-xl">
              <h5 className="font-semibold text-white mb-2">Opening Hours</h5>
              <p className="text-gray-400 text-sm">
                Mon-Sat: 9:00 AM - 7:00 PM<br />
                Sunday: 10:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {new Date().getFullYear()} Nail Salon.</span>
              <span>All rights reserved.</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-theme transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-theme transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-theme transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-theme transition-colors">
                Accessibility
              </a>
            </div>
            <div className="text-gray-500 text-sm">
              Made with <span className="text-theme">♥</span> for beautiful nails
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-theme text-white rounded-full shadow-lg hover:bg-theme-hover hover:scale-110 transition-all duration-300 flex items-center justify-center z-50"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  )
}