export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
            About Skylook Ceilings
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            We specialize in creating stunning ceiling designs that enhance the
            beauty and functionality of your space.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-stone-800 mb-4">
              Our Expertise
            </h3>
            <p className="text-stone-600 mb-6 leading-relaxed">
              With years of experience in interior design and ceiling
              installations, we bring creativity and precision to every project.
              Our team specializes in modern false ceiling designs, traditional
              POP work, and contemporary gypsum installations.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                <span className="text-stone-700">
                  Professional installation
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                <span className="text-stone-700">Quality materials</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                <span className="text-stone-700">Timely completion</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                <span className="text-stone-700">Competitive pricing</span>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-amber-50 to-stone-50 p-8 rounded-lg">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
              <div className="text-stone-600 mb-6">Projects Completed</div>

              <div className="text-4xl font-bold text-amber-600 mb-2">5+</div>
              <div className="text-stone-600 mb-6">Years Experience</div>

              <div className="text-4xl font-bold text-amber-600 mb-2">100%</div>
              <div className="text-stone-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
