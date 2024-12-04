
const services = [
  { name: 'Dryer Repair', slug: 'dryer-repair' },
  { name: 'Washing Machine Repair', slug: 'washing-machine-repair' },
  { name: 'Refrigerator Repair', slug: 'refrigerator-repair' },
  { name: 'Dishwasher Repair', slug: 'dishwasher-repair' },
  { name: 'Range Repair', slug: 'range-repair' },
  { name: 'Oven Repair', slug: 'oven-repair' },
  { name: 'Stove Repair', slug: 'stove-repair' },
  { name: 'Microwave Repair', slug: 'microwave-repair' },
]

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            // <Link key={service.slug} href={`/services/${service.slug}`} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            //   <h2 className="text-2xl font-semibold mb-4">{service.name}</h2>
            //   <p className="text-gray-600">Expert {service.name.toLowerCase()} services in New York</p>
            // </Link>
            <div key={service.slug} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold mb-4">{service.name}</h2>
              <p className="text-gray-600">Expert {service.name.toLowerCase()} services in New York</p>
            </div>

          ))}
        </div>
      </div>
    </div>
  )
}

