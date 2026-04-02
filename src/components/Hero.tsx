'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1920&q=80',
      alt: 'Luxury nail salon interior with elegant lighting',
      title: 'Experience Luxury',
      subtitle: 'Step into our world of beauty and relaxation'
    },
    {
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1920&q=80',
      alt: 'Professional manicure with beautiful nail art',
      title: 'Perfect Manicures',
      subtitle: 'Artistry that transforms your nails'
    },
    {
      image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1920&q=80&sat=-100',
      alt: 'Relaxing pedicure spa treatment',
      title: 'Pedicure Paradise',
      subtitle: 'Treat your feet to pure relaxation'
    },
    {
      image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=1920&q=80',
      alt: 'Intricate nail art design',
      title: 'Nail Artistry',
      subtitle: 'Custom designs that express you'
    }
  ]

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="hero" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-theme/20 via-transparent to-theme/10 animate-gradient-xy" />
      
      {/* Background Slides with Parallax Effect */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1500 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)',
              transition: 'transform 6s ease-out'
            }}
          />
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-theme/10 via-transparent to-theme/5 opacity-50" />
        </div>
      ))}

      {/* Floating Particles (decorative) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className={`mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-white/90 text-sm tracking-widest uppercase">Premium Nail Salon</span>
            </div>
          </div>

          {/* Main Heading with Animation */}
          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {slides[currentSlide].title}
          </h1>

          {/* Subtitle with Animation */}
          <p 
            className={`text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 font-display max-w-3xl mx-auto transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {slides[currentSlide].subtitle}
          </p>

          {/* Buttons with Staggered Animation */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a 
              href="#booking" 
              className="group relative px-10 py-4 bg-theme text-white rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-theme/30 hover:scale-105"
            >
              <span className="relative z-10">Book Appointment</span>
              <div className="absolute inset-0 bg-theme-hover transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
            <a
              href="#gallery"
              className="px-10 py-4 border-2 border-white/80 text-white rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              View Gallery
            </a>
            <a
              href="#services"
              className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Our Services
            </a>
          </div>

          {/* Slide Counter */}
          <div className={`absolute bottom-32 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="flex items-center gap-4 text-white/70">
              <span className="text-4xl font-light">0{currentSlide + 1}</span>
              <div className="w-16 h-px bg-white/30" />
              <span className="text-2xl font-light">0{slides.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative overflow-hidden transition-all duration-500 ${
              index === currentSlide ? 'w-12 h-3' : 'w-3 h-3'
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className="absolute inset-0 bg-white/30 rounded-full" />
            <div 
              className="absolute inset-0 bg-theme rounded-full"
              style={{
                transform: index === currentSlide ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.5s ease-out'
              }}
            />
          </button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/60 text-xs uppercase tracking-widest transform rotate-90 mb-8">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-scroll" />
        </div>
      </div>

      {/* Social Media Links */}
      <div className="absolute left-8 bottom-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-4">
        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-theme transition-all duration-300 hover:scale-110">
          <span className="text-lg">f</span>
        </a>
        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-theme transition-all duration-300 hover:scale-110">
          <span className="text-lg">in</span>
        </a>
        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-theme transition-all duration-300 hover:scale-110">
          <span className="text-lg">ig</span>
        </a>
      </div>
    </section>
  )
}