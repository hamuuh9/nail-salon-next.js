export default function Gallery() {
  const images = [
    {
      src: 'https://via.placeholder.com/600x400/d4a5a5/ffffff?text=Nail+Art+1',
      alt: 'Nail art design 1',
    },
    {
      src: 'https://via.placeholder.com/600x400/d4a5a5/ffffff?text=Manicure',
      alt: 'Manicure service',
    },
    {
      src: 'https://via.placeholder.com/600x400/d4a5a5/ffffff?text=Nail+Art+2',
      alt: 'Nail art design 2',
    },
    {
      src: 'https://via.placeholder.com/600x400/d4a5a5/ffffff?text=Pedicure',
      alt: 'Pedicure service',
    },
    {
      src: 'https://via.placeholder.com/600x400/d4a5a5/ffffff?text=Gel+Nails',
      alt: 'Gel nails',
    },
    {
      src: 'https://via.placeholder.com/600x400/d4a5a5/ffffff?text=Spa+Treatment',
      alt: 'Spa treatment',
    },
  ]

  return (
    <section id="gallery" className="section-padding">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-theme font-medium uppercase tracking-wider text-sm">
            Make an Impression
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            We do not just do nails. We create memories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Every nail service we provide is a work of art. From classic manicures to intricate nail designs, we bring your vision to life with precision and care.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[3/2]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-theme px-6 py-3 rounded-lg font-medium hover:bg-theme hover:text-white transition-colors">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#gallery" className="btn-primary inline-block">
            Our Gallery
          </a>
        </div>
      </div>
    </section>
  )
}