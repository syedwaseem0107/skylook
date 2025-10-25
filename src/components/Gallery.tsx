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
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
            Our Work
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Explore our portfolio of completed ceiling projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
}
