"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-linear-to-br from-stone-50 via-amber-50 to-orange-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(217,119,6,0.1),transparent_50%)]"></div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-orange-200 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-stone-300 rounded-full opacity-25 animate-pulse"></div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 mt-4">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-amber-700 mb-8 shadow-lg no-select">
          <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></span>
          Professional Ceiling Solutions
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-stone-900 mb-8 leading-tight">
          <span className="block mb-2">Skylook</span>
          <span className="block bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Ceilings
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-stone-600 mb-16 max-w-3xl mx-auto leading-relaxed">
          Transform your space with stunning{" "}
          <span className="font-semibold text-amber-700">false ceilings</span>,
          elegant{" "}
          <span className="font-semibold text-amber-700">POP designs</span>, and
          modern
          <span className="font-semibold text-amber-700">
            {" "}
            gypsum installations
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="flex items-center justify-center">
              Our Services
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm bg-white/50"
          >
            <span className="flex items-center justify-center">
              Get Free Quote
              <svg
                className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16">
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-amber-600 mb-3">250+</div>
            <div className="text-sm text-stone-600">Projects</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-amber-600 mb-3">5+</div>
            <div className="text-sm text-stone-600">Years</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-amber-600 mb-3">100%</div>
            <div className="text-sm text-stone-600">Satisfaction</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={scrollToNext}
          className="animate-bounce text-stone-400 hover:text-stone-600 transition-colors bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg"
        >
          <ChevronDownIcon className="h-6 w-6 md:h-8 md:w-8" />
        </button>
      </div>
    </section>
  );
}
