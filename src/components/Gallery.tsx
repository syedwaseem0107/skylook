"use client";

export default function Gallery() {
  // Placeholder images - replace with actual project photos
  const projects = [
    {
      id: 1,
      title: "Modern False Ceiling",
      category: "False Ceiling",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Elegant POP Design",
      category: "POP Ceiling",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea8?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Contemporary Gypsum",
      category: "Gypsum Ceiling",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Decorative Pattern",
      category: "POP Ceiling",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      title: "LED Integrated Design",
      category: "False Ceiling",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      title: "Minimalist Gypsum",
      category: "Gypsum Ceiling",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea8?w=400&h=300&fit=crop",
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
          {projects.map((project, index) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-white/20 group-hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/80 mb-4">
                      {project.category}
                    </p>

                    {/* View button */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                    </div>
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
