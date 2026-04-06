'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [filter, setFilter] = useState('all')

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

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'manicure', label: 'Manicure' },
    { id: 'pedicure', label: 'Pedicure' },
    { id: 'nail-art', label: 'Nail Art' },
    { id: 'gel', label: 'Gel Nails' },
    { id: 'extensions', label: 'Extensions' }
  ]

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
      alt: 'Beautiful nail art design with floral patterns',
      category: 'nail-art',
      title: 'Floral Elegance'
    },
    {
      src: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
      alt: 'Professional French manicure',
      category: 'manicure',
      title: 'Classic French'
    },
    {
      src: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=80',
      alt: 'Colorful gel nail design',
      category: 'gel',
      title: 'Gel Perfection'
    },
    {
      src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80',
      alt: 'Luxury pedicure spa treatment',
      category: 'pedicure',
      title: 'Spa Pedicure'
    },
    {
      src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80',
      alt: 'Intricate nail art with gems',
      category: 'nail-art',
      title: 'Glamorous Gems'
    },
    {
      src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80&sat=-100',
      alt: 'Minimalist nail design',
      category: 'manicure',
      title: 'Minimalist Chic'
    },
    {
      src: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80&rot=180',
      alt: 'Ombre nail design',
      category: 'gel',
      title: 'Gradient Ombre'
    },
    {
      src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80&flip=h',
      alt: 'Nail extension art',
      category: 'extensions',
      title: 'Long & Elegant'
    },
    {
      src: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=80&rot=90',
      alt: 'Seasonal nail art',
      category: 'nail-art',
      title: 'Seasonal Beauty'
    }
  ]

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    } else {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section id="gallery" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-theme-light/30" />
      
      <div className="relative container-custom">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-theme/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-theme rounded-full animate-pulse" />
            <span className="text-theme font-medium text-sm tracking-wider uppercase">
              Make an Impression
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            We Do Not Just Do Nails
            <span className="block text-theme mt-2">We Create Memories</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl">
            Every nail service we provide is a work of art. From classic manicures to intricate nail designs, 
            we bring your vision to life with precision and creativity.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setFilter(category.id);
                // Reset animation logic can go here if needed
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-theme text-white shadow-lg shadow-theme/30 scale-105'
                  : 'bg-white text-gray-600 hover:bg-theme/10 hover:text-theme'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Masonry Style */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{
                aspectRatio: index % 3 === 0 ? '4/5' : '3/2',
                animationDelay: `${index * 100}ms`
              }}
              onClick={() => openLightbox(index)}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <span className="inline-block px-3 py-1 bg-theme text-white text-xs font-medium rounded-full mb-3">
                    {categories.find(c => c.id === image.category)?.label}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                </div>
                
                <div className="flex gap-3 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <button className="flex-1 bg-white text-theme py-2 px-4 rounded-lg font-medium hover:bg-theme hover:text-white transition-colors">
                    View
                  </button>
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>


      </div>

      {/* Modern Lightbox with Swipe Gestures */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 md:p-12 touch-none"
            onClick={closeLightbox}
          >
            {/* Close Button - Safely Positioned */}
            <button 
              className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-[1010]"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous Button - Hidden on Mobile */}
            <button 
              className="absolute left-6 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full items-center justify-center text-white transition-colors z-[1010] hidden md:flex"
              onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button - Hidden on Mobile */}
            <button 
              className="absolute right-6 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full items-center justify-center text-white transition-colors z-[1010] hidden md:flex"
              onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Animating Image Container */}
            <motion.div 
              className="relative max-w-6xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative w-full h-[80vh] md:h-[90vh] flex items-center justify-center cursor-grab active:cursor-grabbing"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                      navigateLightbox('next');
                    } else if (swipe > swipeConfidenceThreshold) {
                      navigateLightbox('prev');
                    }
                  }}
                >
                  <img
                    src={filteredImages[selectedImage].src}
                    alt={filteredImages[selectedImage].alt}
                    className="w-full h-full object-contain rounded-2xl pointer-events-none select-none"
                  />
                  
                  {/* Image Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl pointer-events-none">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-white gap-4">
                      <div>
                        <h3 className="text-2xl font-bold">{filteredImages[selectedImage].title}</h3>
                        <p className="text-white/70 text-sm">{filteredImages[selectedImage].alt}</p>
                      </div>
                      <div className="hidden md:flex gap-2">
                        <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center pointer-events-auto">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Counter */}
            <div className="absolute top-6 left-6 md:top-8 md:left-8 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm font-medium tracking-widest z-[1010]">
              {selectedImage + 1} / {filteredImages.length}
            </div>

            {/* Mobile swipe helper text */}
            <div className="absolute bottom-8 text-white/50 text-xs tracking-widest uppercase md:hidden pointer-events-none animate-pulse">
              Swipe to explore
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}