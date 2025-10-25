"use client";

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
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500",
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
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
          />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-500",
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
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      gradient: "from-green-500 to-emerald-500",
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
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 bg-linear-to-br from-stone-50 to-amber-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(251,191,36,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(217,119,6,0.1),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-amber-700 mb-6 shadow-lg">
            <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
            Our Expertise
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6">
            Our{" "}
            <span className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive ceiling solutions for residential and
            commercial spaces with cutting-edge technology and expert
            craftsmanship
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-white/20 hover:-translate-y-2"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-linear-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-stone-900 mb-4 group-hover:text-amber-700 transition-colors">
                  {service.title}
                </h3>

                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6 pl-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-stone-600 group-hover:text-stone-700 transition-colors"
                    >
                      <div
                        className={`w-2 h-2 bg-linear-to-r ${service.gradient} rounded-full mr-4 group-hover:scale-125 transition-transform flex-shrink-0`}
                      ></div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn more link */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className={`inline-flex items-center text-sm font-medium bg-linear-to-r ${service.gradient} bg-clip-text text-transparent hover:scale-105 transition-transform`}
                  >
                    Learn More
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
            <h3 className="text-2xl font-bold text-stone-900 mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-stone-600 mb-6">
              Get a free consultation and quote for your ceiling project
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
