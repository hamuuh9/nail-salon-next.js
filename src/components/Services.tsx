export default function Services() {
  const benefits = [
    {
      icon: '🏠',
      title: 'Homelike Atmosphere',
      description: 'Relax in our comfortable and welcoming salon environment',
    },
    {
      icon: '👥',
      title: 'Team of Professionals',
      description: 'Expert technicians with years of experience in nail care',
    },
    {
      icon: '✨',
      title: 'Professional Materials',
      description: 'Only premium products and tools for the best results',
    },
    {
      icon: '📅',
      title: 'Easy Online Booking',
      description: 'Book your appointment online anytime, anywhere',
    },
  ]

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Block */}
          <div>
            <span className="text-theme font-medium uppercase tracking-wider text-sm">
              Come, Relax and Enjoy
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Make your day shine with your shiny nails
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Experience the best in nail care with our professional services. Our expert technicians provide top-quality manicures, pedicures, and nail art services in a relaxing atmosphere.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <div className="w-16 h-16 rounded-full bg-theme flex items-center justify-center text-2xl">
                ✍️
              </div>
              <div>
                <h4 className="font-bold">Martha Ronkie</h4>
                <p className="text-gray-500">Founder & CEO</p>
              </div>
            </div>
          </div>

          {/* Image Block */}
          <div className="relative">
            <img
              src="https://via.placeholder.com/600x500/d4a5a5/ffffff?text=Nail+Art"
              alt="Nail art service"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-theme text-white p-6 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold">8960+</div>
              <div className="text-sm">Satisfied Clients</div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-theme-light transition-colors"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}