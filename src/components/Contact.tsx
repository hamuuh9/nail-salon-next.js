export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold mb-2">Get in Touch</h3>
            <p className="text-gray-600 mb-8">
              Have questions? We would love to hear from you. Send us a message!
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="input-field"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="input-field resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold mb-2">Contact Information</h3>
            <p className="text-gray-600 mb-8">
              We are here to help and answer any question you might have.
            </p>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-theme-light rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Address</h4>
                  <p className="text-gray-600">
                    123 Beauty Street
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-theme-light rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-gray-600">
                    <a href="tel:+1234567890" className="hover:text-theme">
                      (123) 456-7890
                    </a>
                    <br />
                    <span className="text-sm">Mon-Sat: 9:00 AM - 7:00 PM</span>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-theme-light rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✉️</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:info@nailsalon.com" className="hover:text-theme">
                      info@nailsalon.com
                    </a>
                    <br />
                    <a href="mailto:booking@nailsalon.com" className="hover:text-theme">
                      booking@nailsalon.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-theme-light rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Follow Us</h4>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-theme hover:text-white transition-colors"
                      aria-label="Facebook"
                    >
                      f
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-theme hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      𝓲
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-theme hover:text-white transition-colors"
                      aria-label="Twitter"
                    >
                      𝕏
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-theme hover:text-white transition-colors"
                      aria-label="Pinterest"
                    >
                      P
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <div className="h-96 bg-gray-200 rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1619097464527!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}