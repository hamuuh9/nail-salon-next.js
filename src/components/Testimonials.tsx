'use client'

import { useState } from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Amanda R.',
      date: '3 days ago',
      title: 'Amazing!!',
      text: 'Best nail salon I have ever been to! The staff is incredibly professional and the results are always perfect. Highly recommend!',
      rating: 5,
      avatar: 'https://via.placeholder.com/100/d4a5a5/ffffff?text=AR',
    },
    {
      name: 'Mason W.',
      date: '13 days ago',
      title: 'So so gorgeous',
      text: 'The attention to detail is amazing. My nails look absolutely stunning and the service was so relaxing. Will definitely be coming back!',
      rating: 5,
      avatar: 'https://via.placeholder.com/100/d4a5a5/ffffff?text=MW',
    },
    {
      name: 'Elizabeth F.',
      date: '18 days ago',
      title: 'LOVE this salon',
      text: 'From the moment I walked in, I felt welcomed and pampered. The nail technicians are true artists. My gel manicure lasted for weeks!',
      rating: 5,
      avatar: 'https://via.placeholder.com/100/d4a5a5/ffffff?text=EF',
    },
    {
      name: 'Nicole M.',
      date: '24 days ago',
      title: 'My all time favourite',
      text: 'I have tried many nail salons but this one is by far the best. The quality of products used is exceptional and the prices are very reasonable.',
      rating: 4,
      avatar: 'https://via.placeholder.com/100/d4a5a5/ffffff?text=NM',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span key={i} className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
          ★
        </span>
      ))
  }

  return (
    <section id="testimonials" className="section-padding bg-theme-light">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-theme font-medium uppercase tracking-wider text-sm">
            What clients say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Customer Reviews
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Do not just take our word for it - hear what our satisfied clients have to say about their experience with us.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col items-center text-center">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full mb-6 object-cover"
              />
              <div className="flex gap-1 mb-4">{renderStars(testimonials[currentIndex].rating)}</div>
              <h3 className="text-2xl font-bold mb-4">{testimonials[currentIndex].title}</h3>
              <p className="text-gray-600 mb-6 italic">"{testimonials[currentIndex].text}"</p>
              <div>
                <p className="font-semibold">{testimonials[currentIndex].name}</p>
                <p className="text-gray-500 text-sm">{testimonials[currentIndex].date}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-theme hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-theme hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            →
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-theme w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Rating Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { platform: 'Yelp', rating: '4.7', reviews: 124 },
            { platform: 'TripAdvisor', rating: '4.95', reviews: 84 },
            { platform: 'Google', rating: '4.24', reviews: 46 },
            { platform: 'Setmore', rating: '4.68', reviews: 29 },
          ].map((item, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow">
              <h4 className="font-bold mb-2">{item.platform}</h4>
              <div className="flex justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-theme font-bold">{item.rating}/5</p>
              <p className="text-gray-500 text-sm">{item.reviews} Reviews</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}