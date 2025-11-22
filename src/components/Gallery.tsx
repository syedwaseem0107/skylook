"use client";

import Image from "next/image";

export default function Gallery() {
  // Real project images showcasing our ceiling work
  const projects = [
    {
      id: 1,
      title: "Luxury Living Room Ceiling",
      category: "False Ceiling",
      description:
        "Multi-layered false ceiling with organic geometric patterns and integrated LED lighting",
      image: "/images/luxury-living-room-ceiling.jpeg",
    },
    {
      id: 2,
      title: "Organic Curvilinear Design",
      category: "POP Ceiling",
      description:
        "Flowing curvilinear patterns with warm LED strip lighting creating ambient atmosphere",
      image: "/images/organic-curvilinear-ceiling.jpeg",
    },
    {
      id: 3,
      title: "Marble Feature Wall Ceiling",
      category: "Gypsum Ceiling",
      description:
        "Sophisticated ceiling design complementing luxury marble feature walls",
      image: "/images/marble-feature-wall-ceiling.jpeg",
    },
    {
      id: 4,
      title: "Geometric Star Pattern",
      category: "POP Ceiling",
      description:
        "Intricate geometric star motif with integrated lighting and classic chandelier",
      image: "/images/geometric-star-ceiling.jpeg",
    },
    {
      id: 5,
      title: "Hexagonal Honeycomb Design",
      category: "False Ceiling",
      description:
        "Modern hexagonal honeycomb pattern with warm LED perimeter lighting",
      image: "/images/hexagonal-honeycomb-ceiling.jpeg",
    },
    {
      id: 6,
      title: "Modern Office Ceiling",
      category: "Commercial",
      description:
        "Clean commercial ceiling installation with glass partitions and modern aesthetics",
      image: "/images/modern-office-partition.jpeg",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-16 bg-linear-to-br from-stone-50 to-amber-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(251,191,36,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(217,119,6,0.1),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-amber-700 mb-6 shadow-lg">
            <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
            Portfolio
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6">
            Our{" "}
            <span className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of completed ceiling projects showcasing our
            expertise and attention to detail
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-white/20 group-hover:-translate-y-2">
                <div className="aspect-4/3 overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Permanent gradient for text readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/50 to-transparent pointer-events-none"></div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/80 mb-1">
                      {project.category}
                    </p>
                    <p className="text-xs text-white/70 mb-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* View button */}
                    {/* <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="inline-flex items-center text-sm font-medium text-white hover:text-amber-300 transition-colors">
                        View Details
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
                      </button>
                    </div> */}
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-stone-700">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-stone-900 mb-4">
              Love What You See?
            </h3>
            <p className="text-stone-600 mb-6">
              Let us create something amazing for your space too
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Your Project
              </button>
              <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm bg-white/50">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
