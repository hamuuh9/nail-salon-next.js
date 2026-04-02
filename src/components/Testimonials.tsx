'use client'

import { useState, useEffect, useRef } from 'react'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
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

  const testimonials = [
    {
      name: 'Amanda Rodriguez',
      date: '3 days ago',
      title: 'Absolutely Amazing Experience!',
      text: 'Best nail salon I have ever been to! The attention to detail is incredible, and the atmosphere is so relaxing. My gel manicure lasted over 3 weeks without a single chip. The staff is professional and makes you feel like royalty.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      service: 'Gel Manicure',
      location: 'New York, NY'
    },
    {
      name: 'Sarah Chen',
      date: '1 week ago',
      title: 'My Go-To Nail Salon!',
      text: 'The attention to detail is amazing. My nails look absolutely stunning and the service was so relaxing. I have been coming here for 6 months now and they never disappoint. The nail art is always on point!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
      service: 'Nail Art Design',
      location: 'Brooklyn, NY'
    },
    {
      name: 'Michelle Williams',
      date: '2 weeks ago',
      title: 'LOVE This Salon!',
      text: 'From the moment I walked in, I felt welcomed and pampered. The nail technicians are true artists. My extensions look so natural, and the spa pedicure was heavenly. Already booked my next appointment!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      service: 'Nail Extensions',
      location: 'Manhattan, NY'
    },
    {
      name: 'Jessica Taylor',
      date: '3 weeks ago',
      title: 'Best Salon in the City!',
      text: 'I have tried many nail salons but this one is by far the best. The quality of products used is exceptional, the prices are very reasonable, and the results are always flawless. Highly recommend to everyone!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=150&q=80',
      service: 'Spa Manicure',
      location: 'Queens, NY'
    },
    {
      name: 'Emily Davis',
      date: '1 month ago',
      title: 'Exceeded All Expectations!',
      text: 'The attention to detail is incredible. Every brush stroke is precise, and the nail art designs are truly unique. The salon is spotless, and the technicians are so knowledgeable. Will definitely be a regular!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      service: 'Premium Pedicure',
      location: 'Jersey City, NJ'
    }
  ]

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))
  }

  return (
    <section id="testimonials" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-theme-light via-white to-theme-light/50" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-theme rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-theme-dark rounded-full filter blur-3xl" />
      </div>

      <div className="relative container-custom">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-theme/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-theme rounded-full animate-pulse" />
            <span className="text-theme font-medium text-sm tracking-wider uppercase">
              What Clients Say
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Customer Reviews
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl">
            Do not just take our word for it - hear what our satisfied clients have to say about their experience with us.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 text-theme/20 text-8xl font-serif">"</div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 text-theme/20 text-8xl font-serif rotate-180">"</div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-theme/10 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212, 165, 165, 0.3) 1px, transparent 0)',
                  backgroundSize: '30px 30px'
                }} />
              </div>

              <div className={`relative transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                  {/* Avatar Section */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      {/* Decorative Ring */}
                      <div className="absolute -inset-2 bg-gradient-to-br from-theme to-theme-dark rounded-full opacity-20 animate-spin-slow" />
                      <div className="absolute -inset-4 border-2 border-theme/20 rounded-full" />
                      
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover relative z-10 border-4 border-white shadow-xl"
                      />
                      
                      {/* Verified Badge */}
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center border-3 border-white z-20 shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    {/* Rating */}
                    <div className="flex justify-center lg:justify-start gap-1 mb-4">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-theme-dark bg-clip-text text-transparent">
                      {testimonials[currentIndex].title}
                    </h3>

                    {/* Quote */}
                    <p className="text-gray-600 text-lg md:text-xl mb-6 italic leading-relaxed">
                      "{testimonials[currentIndex].text}"
                    </p>

                    {/* Author Info */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                      <div>
                        <p className="font-bold text-lg text-gray-900">{testimonials[currentIndex].name}</p>
                        <p className="text-gray-500 text-sm">{testimonials[currentIndex].location}</p>
                      </div>
                      <div className="hidden sm:block w-px h-8 bg-gray-300" />
                      <div className="flex items-center gap-2 px-4 py-2 bg-theme/10 rounded-full">
                        <span className="text-theme text-sm font-medium">{testimonials[currentIndex].service}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                {/* Counter */}
                <div className="flex items-center gap-2 text-gray-500">
                  <span className="font-bold text-theme">{currentIndex + 1}</span>
                  <span>/</span>
                  <span>{testimonials.length}</span>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-200 text-gray-600 hover:border-theme hover:bg-theme hover:text-white transition-all duration-300"
                    aria-label="Previous testimonial"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-200 text-gray-600 hover:border-theme hover:bg-theme hover:text-white transition-all duration-300"
                    aria-label="Next testimonial"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-10 h-3 bg-theme rounded-full' 
                    : 'w-3 h-3 bg-gray-300 hover:bg-theme/50 rounded-full'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Rating Boxes */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { platform: 'Yelp', rating: '4.7', reviews: 124, color: 'bg-red-500' },
            { platform: 'TripAdvisor', rating: '4.95', reviews: 84, color: 'bg-green-500' },
            { platform: 'Google', rating: '4.24', reviews: 46, color: 'bg-blue-500' },
            { platform: 'Setmore', rating: '4.68', reviews: 29, color: 'bg-purple-500' },
          ].map((item, index) => (
            <div 
              key={index} 
              className="group relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Background Color Accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${item.color} rounded-t-2xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
              
              <div className="text-center">
                <div className={`w-12 h-12 ${item.color} rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg`}>
                  {item.platform.charAt(0)}
                </div>
                <h4 className="font-bold text-lg mb-2">{item.platform}</h4>
                <div className="flex justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-2xl font-bold text-theme mb-1">{item.rating}/5</p>
                <p className="text-gray-500 text-sm">{item.reviews} Reviews</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-500 mb-4">Trusted by thousands of satisfied customers</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="font-medium">4.9 Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">👥</span>
              <span className="font-medium">8,960+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              <span className="font-medium">Award Winning Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}