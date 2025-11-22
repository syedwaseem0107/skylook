"use client";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(251,191,36,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(217,119,6,0.05),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-sm font-medium text-amber-700 mb-6">
            <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
            About Us
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6">
            About{" "}
            <span className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Skylook Ceilings
            </span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            We specialize in creating stunning ceiling designs that enhance the
            beauty and functionality of your space with precision and
            creativity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div>
              <h3 className="text-3xl font-bold text-stone-900 mb-4">
                Our Expertise
              </h3>
              <p className="text-lg text-stone-600 leading-relaxed mb-4">
                With years of experience in interior design and ceiling
                installations, we bring creativity and precision to every
                project. Our team specializes in modern false ceiling designs,
                traditional POP work, and contemporary gypsum installations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-6 bg-linear-to-br from-amber-50 to-orange-50 rounded-xl">
                <div className="w-12 h-12 bg-linear-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1 pl-2">
                  <h4 className="font-semibold text-stone-900 mb-3">
                    Professional Installation
                  </h4>
                  <p className="text-sm text-stone-600">Expert craftsmanship</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-linear-to-br from-blue-50 to-cyan-50 rounded-xl">
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="flex-1 pl-2">
                  <h4 className="font-semibold text-stone-900 mb-3">
                    Quality Materials
                  </h4>
                  <p className="text-sm text-stone-600">Premium products</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-linear-to-br from-green-50 to-emerald-50 rounded-xl">
                <div className="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1 pl-2">
                  <h4 className="font-semibold text-stone-900 mb-3">
                    Timely Completion
                  </h4>
                  <p className="text-sm text-stone-600">On-time delivery</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-linear-to-br from-purple-50 to-pink-50 rounded-xl">
                <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <div className="flex-1 pl-2">
                  <h4 className="font-semibold text-stone-900 mb-3">
                    Competitive Pricing
                  </h4>
                  <p className="text-sm text-stone-600">Best value</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Stats cards */}
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-linear-to-br from-amber-500 to-orange-500 rounded-2xl p-8 text-white shadow-2xl">
                <div className="text-5xl font-bold mb-4">500+</div>
                <div className="text-amber-100 text-lg mb-6">
                  Projects Completed
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full w-4/5"></div>
                </div>
              </div>

              <div className="bg-linear-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white shadow-2xl">
                <div className="text-5xl font-bold mb-4">7+</div>
                <div className="text-blue-100 text-lg mb-6">
                  Years Experience
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full w-3/4"></div>
                </div>
              </div>

              <div className="bg-linear-to-br from-green-500 to-emerald-500 rounded-2xl p-8 text-white shadow-2xl">
                <div className="text-5xl font-bold mb-4">100%</div>
                <div className="text-green-100 text-lg mb-6">
                  Customer Satisfaction
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full w-full"></div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-200 rounded-full opacity-30 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
