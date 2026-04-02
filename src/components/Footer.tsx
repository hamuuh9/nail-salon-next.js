export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-theme">Nail Salon</h3>
            <p className="text-gray-400 mb-6">
              We provide premium nail care services in a relaxing atmosphere. Our skilled technicians are dedicated to making you look and feel beautiful.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-theme transition-colors"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-theme transition-colors"
                aria-label="Instagram"
              >
                𝓲
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-theme transition-colors"
                aria-label="Twitter"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-theme transition-colors"
                aria-label="Pinterest"
              >
                P
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Our Services', href: '#services' },
                { name: 'Pricing', href: '#pricing' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Book Appointment', href: '#booking' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-theme transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Manicure',
                'Pedicure',
                'Nail Art',
                'Gel Nails',
                'Nail Extensions',
                'Spa Treatments',
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#pricing"
                    className="text-gray-400 hover:text-theme transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-theme">📍</span>
                <span>
                  123 Beauty Street
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-theme">📞</span>
                <a href="tel:+1234567890" className="hover:text-theme">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-theme">✉️</span>
                <a href="mailto:info@nailsalon.com" className="hover:text-theme">
                  info@nailsalon.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Nail Salon. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-theme">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-theme">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-theme">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}