'use client'

import { useEffect, useRef, useState } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
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

  const services = [
    {
      name: 'Facials',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
      description: 'Refresh your skin with our rejuvenating facial treatments',
      icon: '✨',
      delay: 100
    },
    {
      name: 'Nail Care',
      image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=600&q=80',
      description: 'Professional nail care services for beautiful hands',
      icon: '💅',
      delay: 200
    },
    {
      name: 'Makeup',
      image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=600&q=80',
      description: 'Expert makeup services for any occasion',
      icon: '💄',
      delay: 300
    },
  ]

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-theme-light via-white to-theme-light/50" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212, 165, 165, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative container-custom">
        {/* Section Title with Animation */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-theme/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-theme rounded-full animate-pulse-slow" />
            <span className="text-theme font-medium text-sm tracking-wider uppercase">
              Look Good. Feel Better
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-theme-dark to-gray-900 bg-clip-text text-transparent">
            Exceptional Services for the Best Experience
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Experience luxury nail care with our professional services designed to make you look and feel amazing. 
            Our expert technicians use only premium products for stunning results.
          </p>
        </div>

        {/* Service Images Grid with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl aspect-[4/3] transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${service.delay}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '20px 20px'
                  }} />
                </div>

                {/* Icon */}
                <div className="absolute top-6 left-6 w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {service.description}
                  </p>
                  <a
                    href="#pricing"
                    className="inline-flex items-center gap-2 text-white font-medium text-sm bg-theme px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-theme-hover"
                  >
                    View Prices
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
                <div className="absolute top-8 right-8 w-12 h-12 border border-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-theme/20 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { number: '8960+', label: 'Happy Clients', icon: '😊' },
            { number: '298', label: 'Polish Colors', icon: '🎨' },
            { number: '12+', label: 'Years Experience', icon: '⭐' },
            { number: '24/7', label: 'Online Booking', icon: '📅' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center group"
            >
              <div className="text-3xl mb-2 transform group-hover:scale-125 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-theme mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <a 
              href="#pricing" 
              className="group relative px-8 py-4 bg-theme text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-theme/30"
            >
              <span className="relative z-10">View Services & Prices</span>
              <div className="absolute inset-0 bg-theme-hover transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
            <a 
              href="#booking" 
              className="px-8 py-4 border-2 border-theme text-theme rounded-full font-semibold hover:bg-theme hover:text-white transition-all duration-300"
            >
              Book Now
            </a>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 items-center opacity-60">
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Licensed Professionals</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Premium Products</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}