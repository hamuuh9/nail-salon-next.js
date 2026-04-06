'use client'

import { useState, useEffect, useRef } from 'react'

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const pricingLeft = [
    { name: 'Classic Manicure', price: 19, duration: '25 minutes', icon: '💅', popular: false, from: false },
    { name: 'Spa Manicure', price: 30, duration: '35 minutes', icon: '✨', popular: true, from: false },
    { name: 'Aloe Vera Manicure', price: 48, duration: '45 minutes', icon: '🌿', popular: false, from: false },
    { name: 'Gel Manicure', price: 35, duration: '40 minutes', icon: '💎', popular: true, from: false },
    { name: 'Organic Express Pedi', price: 34, duration: '35-45 minutes', icon: '🦶', popular: false, from: false },
    { name: 'Hard Gel Full Set', price: 85, duration: '100-120 minutes', icon: '⭐', popular: true, from: true },
  ]

  const pricingRight = [
    { name: 'Nail Art', price: 11, duration: '15 minutes', icon: '🎨', popular: false, from: false },
    { name: 'French Polish', price: 16, duration: '20 minutes', icon: '🤍', popular: false, from: false },
    { name: 'Paraffin Mask', price: 18, duration: '20 minutes', from: true, icon: '💆', popular: false },
    { name: 'Gel Applications', price: 24, duration: '15 minutes', from: true, icon: '💫', popular: true },
    { name: 'Gel Polish Removal', price: 14, duration: '25 minutes', icon: '🧴', popular: false, from: false },
    { name: 'Callus Treatment', price: 19, duration: '30 minutes', icon: '🩹', popular: false, from: false },
  ]

  return (
    <section id="pricing" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-theme-light/20" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-theme/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-theme-dark/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container-custom">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-theme/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-theme rounded-full animate-pulse" />
            <span className="text-theme font-medium text-sm tracking-wider uppercase">
              Let Your Nails Shine
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Treat Yourself Today
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl">
            Choose from our wide range of nail services designed to enhance your natural beauty. 
            All services include complimentary beverages and relaxing hand massage.
          </p>
        </div>

        {/* Pricing Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column */}
          <div className={`bg-white rounded-3xl p-8 shadow-xl shadow-theme/5 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-theme to-theme-dark rounded-2xl flex items-center justify-center text-white text-xl">
                💅
              </div>
              <div>
                <h3 className="text-2xl font-bold">Manicure & Gel Services</h3>
                <p className="text-gray-500 text-sm">Premium hand care treatments</p>
              </div>
            </div>

            <ul className="space-y-4">
              {pricingLeft.map((item, index) => (
                <li 
                  key={index} 
                  className={`group relative p-4 rounded-2xl transition-all duration-300 ${
                    hoveredItem === index ? 'bg-theme/5 scale-[1.02]' : 'hover:bg-gray-50'
                  } ${item.popular ? 'border-2 border-theme/20' : ''}`}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.popular && (
                    <div className="absolute -top-3 right-4 px-3 py-1 bg-theme text-white text-xs font-bold rounded-full">
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-gray-900">{item.name}</h4>
                      <p className="text-gray-500 text-sm">{item.duration}</p>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-theme font-bold text-2xl">
                        {item.from && <span className="text-gray-400 font-normal text-sm mr-1">From</span>}
                        ${item.price}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Arrow */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-theme" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className={`bg-white rounded-3xl p-8 shadow-xl shadow-theme/5 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-theme to-theme-dark rounded-2xl flex items-center justify-center text-white text-xl">
                ✨
              </div>
              <div>
                <h3 className="text-2xl font-bold">Add-ons & Extras</h3>
                <p className="text-gray-500 text-sm">Enhance your nail experience</p>
              </div>
            </div>

            <ul className="space-y-4">
              {pricingRight.map((item, index) => (
                <li 
                  key={index} 
                  className={`group relative p-4 rounded-2xl transition-all duration-300 ${
                    hoveredItem === index + 10 ? 'bg-theme/5 scale-[1.02]' : 'hover:bg-gray-50'
                  } ${item.popular ? 'border-2 border-theme/20' : ''}`}
                  onMouseEnter={() => setHoveredItem(index + 10)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.popular && (
                    <div className="absolute -top-3 right-4 px-3 py-1 bg-theme text-white text-xs font-bold rounded-full">
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-gray-900">{item.name}</h4>
                      <p className="text-gray-500 text-sm">{item.duration}</p>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-theme font-bold text-2xl">
                        {item.from && <span className="text-gray-400 font-normal text-sm mr-1">From</span>}
                        ${item.price}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Arrow */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-theme" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Special Offer Banner */}
        <div className={`bg-gradient-to-r from-theme via-theme-dark to-theme rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Background Animation */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 animate-gradient-xy" style={{
              backgroundImage: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)',
              backgroundSize: '400% 400%'
            }} />
          </div>

          <div className="relative z-10">
            <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
              Limited Time Offer
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              First Time Client Special
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Get <span className="font-bold">20% OFF</span> your first appointment! 
              Use code <span className="bg-white/20 px-3 py-1 rounded-lg font-mono font-bold">NEWCLIENT</span> when booking.
            </p>
            <a 
              href="#booking" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-theme rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Claim Your Discount
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>


      </div>
    </section>
  )
}