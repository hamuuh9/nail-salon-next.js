'use client'

import { siteConfig } from '../siteConfig'

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-[100svh] min-h-[600px] flex items-center bg-[#1a1515] overflow-hidden font-sans">
      {/* Full Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1920&q=80" 
          alt="Luxury Nail Care" 
          className="w-full h-full object-cover object-center scale-105 animate-[pulse-slow_15s_ease-in-out_infinite]"
        />
        {/* Deep, sophisticated overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-transparent" />
      </div>

      {/* Floating Particles (decorative) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float blur-[1px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="container relative mx-auto px-6 h-full flex flex-col justify-end md:justify-center pb-32 md:pb-0 z-10 pt-24">
        <div className="max-w-2xl md:border-l-4 md:border-theme md:pl-8">
          <div className="inline-flex items-center gap-3 mb-4 animate-fade-in" style={{ animationFillMode: 'both', animationDelay: '0.2s' }}>
            <span className="w-8 h-[1px] bg-theme md:hidden" />
            <span className="text-sm font-semibold tracking-[0.2em] text-theme uppercase">
              {siteConfig.salonName}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] tracking-tight mb-6 animate-fade-in" style={{ animationFillMode: 'both', animationDelay: '0.4s' }}>
            {siteConfig.heroTitle}
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-lg font-light leading-relaxed animate-fade-in" style={{ animationFillMode: 'both', animationDelay: '0.6s' }}>
            Experience the pinnacle of nail artistry in a boutique sanctuary designed for the modern professional.
          </p>
          
          <div className="animate-fade-in flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6" style={{ animationFillMode: 'both', animationDelay: '0.8s' }}>
            {/* CTA Book Appointment */}
            <a 
              href="#booking" 
              className="hidden md:inline-flex items-center justify-center px-8 py-4 bg-theme text-white rounded-full text-lg font-medium shadow-[0_8px_30px_rgba(212,165,165,0.4)] hover:shadow-[0_8px_30px_rgba(212,165,165,0.6)] hover:-translate-y-1 active:translate-y-0 transition-all text-center"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}