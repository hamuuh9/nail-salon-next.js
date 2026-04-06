'use client'

import { useEffect, useRef, useState } from 'react'

export default function Services() {
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

  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: 'Homelike Atmosphere',
      description: 'Relax in our comfortable and welcoming salon environment designed for your comfort',
      color: 'from-pink-400 to-rose-500'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Team of Professionals',
      description: 'Expert technicians with years of experience and continuous training',
      color: 'from-purple-400 to-indigo-500'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Professional Materials',
      description: 'Only premium products and tools for the best and longest-lasting results',
      color: 'from-amber-400 to-orange-500'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Easy Online Booking',
      description: 'Book your appointment online anytime, anywhere with instant confirmation',
      color: 'from-teal-400 to-emerald-500'
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-theme-light/30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-theme/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-theme-dark/5 rounded-full blur-3xl" />

      <div className="relative container-custom">
        {/* Main Content Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Text Block */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-theme/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-theme rounded-full animate-pulse" />
              <span className="text-theme font-medium text-sm tracking-wider uppercase">
                Come, Relax and Enjoy
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Make Your Day Shine
              <span className="block text-theme mt-2">With Your Shiny Nails</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
              Experience the best in nail care with our professional services. Our expert technicians 
              provide top-quality manicures, pedicures, and nail art services in a relaxing, 
              luxurious atmosphere designed just for you.
            </p>
            
            {/* Founder Section */}
            <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg shadow-theme/5">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" 
                    alt="Martha Ronkie - Founder & CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-theme rounded-xl flex items-center justify-center text-white text-sm font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">Martha Ronkie</h4>
                <p className="text-gray-500">Founder & CEO</p>
                <div className="flex gap-1 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { number: '12+', label: 'Years Experience' },
                { number: '50+', label: 'Nail Designs' },
                { number: '100%', label: 'Satisfaction' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gradient-to-br from-theme/10 to-transparent rounded-2xl">
                  <div className="text-3xl font-bold text-theme mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Block */}
          <div className="relative order-1 lg:order-2">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80"
                alt="Professional nail art service"
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              


              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-gray-700">Open Now</span>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-theme/20 to-transparent rounded-full blur-2xl" />
            </div>

            {/* Second Image (floating) */}
            <div className="absolute -bottom-12 -right-8 w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=300&q=80"
                alt="Nail art design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Experience the difference with our premium nail care services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {benefit.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-theme transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Arrow */}
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-theme group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${benefit.color} opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <a 
              href="#booking" 
              className="group relative px-10 py-4 bg-theme text-white rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-theme/30"
            >
              <span className="relative z-10">Book Your Appointment</span>
              <div className="absolute inset-0 bg-theme-hover transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
            <a 
              href="tel:+1234567890" 
              className="flex items-center gap-2 px-10 py-4 border-2 border-gray-200 text-gray-700 rounded-full font-semibold hover:border-theme hover:text-theme transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}