'use client'

import { useState, useEffect, useRef } from 'react'

interface BookingFormData {
  name: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  notes: string
}

export default function Booking() {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isVisible, setIsVisible] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
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
    { name: 'Classic Manicure', price: 19, duration: '25 min', icon: '💅' },
    { name: 'Spa Manicure', price: 30, duration: '35 min', icon: '✨' },
    { name: 'Aloe Vera Manicure', price: 48, duration: '45 min', icon: '🌿' },
    { name: 'Gel Manicure', price: 35, duration: '40 min', icon: '💎' },
    { name: 'Organic Express Pedi', price: 34, duration: '35-45 min', icon: '🦶' },
    { name: 'Hard Gel Full Set', price: 85, duration: '100-120 min', icon: '⭐' },
    { name: 'Nail Art', price: 11, duration: '15 min', icon: '🎨' },
    { name: 'French Polish', price: 16, duration: '20 min', icon: '🤍' },
    { name: 'Paraffin Mask', price: 18, duration: '20 min', icon: '💆' },
    { name: 'Gel Applications', price: 24, duration: '15 min', icon: '💫' },
    { name: 'Gel Polish Removal', price: 14, duration: '25 min', icon: '🧴' },
    { name: 'Callus Treatment', price: 19, duration: '30 min', icon: '🩹' },
  ]

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to create booking')

      await response.json()
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', service: '', date: '', time: '', notes: '' })
      setCurrentStep(1)
    } catch (error) {
      console.error('Booking error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1))

  return (
    <section id="booking" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-theme-light/20" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-theme/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-theme-dark/5 rounded-full blur-3xl" />

      <div className="relative container-custom">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-theme/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-theme rounded-full animate-pulse" />
            <span className="text-theme font-medium text-sm tracking-wider uppercase">
              Book Your Appointment
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Get Pampered?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl">
            Book your appointment online in just a few clicks. Choose your service, 
            pick a time, and we will take care of the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Booking Form */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-theme/5 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-theme/10 to-transparent rounded-full blur-2xl" />
              
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-theme to-theme-dark rounded-2xl flex items-center justify-center text-white text-2xl">
                  📅
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Book an Appointment</h3>
                  <p className="text-gray-500">Complete the form below</p>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8">
                {[
                  { num: 1, label: 'Personal Info' },
                  { num: 2, label: 'Service & Time' },
                  { num: 3, label: 'Confirmation' },
                ].map((step, index) => (
                  <div key={step.num} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                      currentStep >= step.num 
                        ? 'bg-theme text-white' 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {currentStep > step.num ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : step.num}
                    </div>
                    {index < 2 && (
                      <div className={`w-16 md:w-24 h-1 mx-2 rounded-full transition-all duration-300 ${
                        currentStep > step.num ? 'bg-theme' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Booking Request Submitted!</p>
                    <p className="text-sm">We will contact you shortly to confirm your appointment.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Something went wrong</p>
                    <p className="text-sm">Please try again or call us directly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Info */}
                <div className={`transition-all duration-500 ${currentStep === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute'}`}>
                  <div className="space-y-6">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-theme transition-colors">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-theme focus:ring-4 focus:ring-theme/10 transition-all outline-none"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-theme transition-colors">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-theme focus:ring-4 focus:ring-theme/10 transition-all outline-none"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-theme transition-colors">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-theme focus:ring-4 focus:ring-theme/10 transition-all outline-none"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-8 py-3 bg-theme text-white rounded-xl font-semibold hover:bg-theme-hover transition-colors flex items-center gap-2"
                    >
                      Continue
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Step 2: Service & Time */}
                <div className={`transition-all duration-500 ${currentStep === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute'}`}>
                  <div className="space-y-6">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Service *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {services.slice(0, 6).map((service, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, service: `${service.name} - $${service.price}` }))}
                            className={`p-3 rounded-xl border-2 text-left transition-all duration-300 ${
                              formData.service === `${service.name} - $${service.price}`
                                ? 'border-theme bg-theme/5'
                                : 'border-gray-200 hover:border-theme/50'
                            }`}
                          >
                            <div className="text-2xl mb-1">{service.icon}</div>
                            <div className="font-medium text-sm">{service.name}</div>
                            <div className="text-theme text-sm">${service.price}</div>
                          </button>
                        ))}
                      </div>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full mt-4 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-theme focus:ring-4 focus:ring-theme/10 transition-all outline-none"
                      >
                        <option value="">Or select from all services...</option>
                        {services.map((service, index) => (
                          <option key={index} value={`${service.name} - $${service.price}`}>
                            {service.icon} {service.name} - ${service.price} ({service.duration})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-theme focus:ring-4 focus:ring-theme/10 transition-all outline-none"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>

                      <div className="group">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Time *
                        </label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-theme focus:ring-4 focus:ring-theme/10 transition-all outline-none"
                        >
                          <option value="">Select a time</option>
                          {timeSlots.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-8 py-3 border-2 border-gray-200 text-gray-600 rounded-xl font-semibold hover:border-theme hover:text-theme transition-colors flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg>
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-8 py-3 bg-theme text-white rounded-xl font-semibold hover:bg-theme-hover transition-colors flex items-center gap-2"
                    >
                      Continue
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Step 3: Confirmation */}
                <div className={`transition-all duration-500 ${currentStep === 3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute'}`}>
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-lg mb-4">Booking Summary</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Name:</span>
                          <span className="font-medium">{formData.name || '-'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Email:</span>
                          <span className="font-medium">{formData.email || '-'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Phone:</span>
                          <span className="font-medium">{formData.phone || '-'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Service:</span>
                          <span className="font-medium text-theme">{formData.service || '-'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Date:</span>
                          <span className="font-medium">{formData.date || '-'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Time:</span>
                          <span className="font-medium">{formData.time || '-'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-theme focus:ring-4 focus:ring-theme/10 transition-all outline-none resize-none"
                        placeholder="Any special requests or notes..."
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-8 py-3 border-2 border-gray-200 text-gray-600 rounded-xl font-semibold hover:border-theme hover:text-theme transition-colors flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg>
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-theme text-white rounded-xl font-semibold hover:bg-theme-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          Confirm Booking
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Booking Info */}
          <div className={`lg:col-span-2 space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Opening Hours */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-theme/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-theme to-theme-dark rounded-2xl flex items-center justify-center text-white text-xl">
                  🕐
                </div>
                <h3 className="text-2xl font-bold">Opening Hours</h3>
              </div>

              <div className="space-y-4">
                {[
                  { day: 'Monday - Tuesday', hours: '9:00 AM - 7:00 PM' },
                  { day: 'Wednesday - Thursday', hours: '9:00 AM - 7:00 PM' },
                  { day: 'Friday', hours: '10:00 AM - 6:00 PM' },
                  { day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
                  { day: 'Sunday', hours: '10:00 AM - 4:00 PM' },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700">{item.day}</span>
                    <span className="font-medium text-theme">{item.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-theme/10 rounded-xl">
                <p className="text-theme text-sm font-medium text-center">
                  📅 Walk-ins welcome, appointments recommended
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-theme to-theme-dark rounded-3xl p-8 text-white">
              <h4 className="text-xl font-bold mb-6">Need Help?</h4>
              <p className="text-white/80 mb-6">
                Contact us for any questions about our services or booking.
              </p>
              
              <div className="space-y-4">
                <a href="tel:+1234567890" className="flex items-center gap-4 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    📞
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Call us</p>
                    <p className="font-semibold">(123) 456-7890</p>
                  </div>
                </a>
                
                <a href="mailto:info@nailsalon.com" className="flex items-center gap-4 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    ✉️
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Email us</p>
                    <p className="font-semibold">info@nailsalon.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 bg-white/10 rounded-xl">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Visit us</p>
                    <p className="font-semibold">123 Beauty Street, NY</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Booking CTA */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-theme/5 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-bold mb-2">Quick Booking</h4>
              <p className="text-gray-600 mb-4">
                Need an appointment urgently? Call us directly for same-day availability.
              </p>
              <a 
                href="tel:+1234567890" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-theme text-white rounded-full font-semibold hover:bg-theme-hover transition-colors"
              >
                Call Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}