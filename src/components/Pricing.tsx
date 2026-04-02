export default function Pricing() {
  const pricingLeft = [
    { name: 'Classic Manicure', price: 19, duration: '25 minutes' },
    { name: 'Spa Manicure', price: 30, duration: '35 minutes' },
    { name: 'Aloe Vera Manicure', price: 48, duration: '45 minutes' },
    { name: 'Gel Manicure', price: 35, duration: '40 minutes' },
    { name: 'Organic Express Pedi', price: 34, duration: '35-45 minutes' },
    { name: 'Hard Gel Full Set', price: 85, duration: '100-120 minutes' },
  ]

  const pricingRight = [
    { name: 'Nail Art', price: 11, duration: '15 minutes' },
    { name: 'French Polish', price: 16, duration: '20 minutes' },
    { name: 'Paraffin Mask', price: 18, duration: '20 minutes', from: true },
    { name: 'Gel Applications', price: 24, duration: '15 minutes', from: true },
    { name: 'Gel Polish Removal', price: 14, duration: '25 minutes' },
    { name: 'Callus Treatment', price: 19, duration: '30 minutes' },
  ]

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-theme font-medium uppercase tracking-wider text-sm">
            Let your nails shine
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Treat Yourself Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose from our wide range of nail services designed to enhance your natural beauty.
          </p>
        </div>

        {/* Pricing Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <ul className="space-y-6">
              {pricingLeft.map((item, index) => (
                <li key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <p className="text-gray-500 text-sm">Service length {item.duration}</p>
                  </div>
                  <div className="flex-1 border-b border-dashed border-gray-300 mx-4" />
                  <div className="text-theme font-bold text-xl">${item.price}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <ul className="space-y-6">
              {pricingRight.map((item, index) => (
                <li key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <p className="text-gray-500 text-sm">Service length {item.duration}</p>
                  </div>
                  <div className="flex-1 border-b border-dashed border-gray-300 mx-4" />
                  <div className="text-theme font-bold text-xl">
                    {item.from && <span className="text-gray-500 font-normal text-sm mr-1">From</span>}
                    ${item.price}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Make gorgeous nails a part of your life.{' '}
            <a href="#pricing" className="text-theme font-semibold hover:underline">
              Explore Salon Menu
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}