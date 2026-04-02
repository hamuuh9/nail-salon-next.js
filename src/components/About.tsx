export default function About() {
  const services = [
    {
      name: 'Facials',
      image: 'https://via.placeholder.com/400x300/d4a5a5/ffffff?text=Facials',
      description: 'Refresh your skin with our rejuvenating facial treatments',
    },
    {
      name: 'Nails Care',
      image: 'https://via.placeholder.com/400x300/d4a5a5/ffffff?text=Nails+Care',
      description: 'Professional nail care services for beautiful hands',
    },
    {
      name: 'Makeup',
      image: 'https://via.placeholder.com/400x300/d4a5a5/ffffff?text=Makeup',
      description: 'Expert makeup services for any occasion',
    },
  ]

  return (
    <section id="about" className="section-padding bg-theme-light">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-theme font-medium uppercase tracking-wider text-sm">
            Look Good. Feel Better
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            The exceptional services for the best experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience luxury nail care with our professional services designed to make you look and feel amazing.
          </p>
        </div>

        {/* Service Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="#pricing"
                  className="bg-theme text-white px-6 py-3 rounded-lg font-medium hover:bg-theme-hover transition-colors"
                >
                  {service.name}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a href="#pricing" className="btn-primary inline-block">
            Services & Prices
          </a>
        </div>
      </div>
    </section>
  )
}