export default function Services() {
  const services = [
    {
      title: "False Ceilings",
      description:
        "Modern false ceiling designs that add elegance and functionality to your space with proper lighting integration.",
      features: [
        "LED Integration",
        "Sound Insulation",
        "Fire Resistant",
        "Easy Maintenance",
      ],
    },
    {
      title: "POP Ceilings",
      description:
        "Traditional Plaster of Paris work with intricate designs and patterns for a classic, elegant look.",
      features: [
        "Custom Designs",
        "Decorative Patterns",
        "Smooth Finish",
        "Durable",
      ],
    },
    {
      title: "Gypsum Ceilings",
      description:
        "Lightweight and versatile gypsum board installations perfect for modern homes and offices.",
      features: [
        "Lightweight",
        "Quick Installation",
        "Moisture Resistant",
        "Cost Effective",
      ],
    },
    {
      title: "Ceiling Repairs",
      description:
        "Professional repair and maintenance services to keep your ceilings looking perfect.",
      features: [
        "Crack Repairs",
        "Color Matching",
        "Texture Matching",
        "Quick Service",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            We offer comprehensive ceiling solutions for residential and
            commercial spaces
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-amber-600 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-stone-600"
                  >
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
