"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-stone-50 to-amber-50">
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-stone-800 mb-6">
          Skylook <span className="text-amber-600">Ceilings</span>
        </h1>

        <p className="text-xl md:text-2xl text-stone-600 mb-8 max-w-2xl mx-auto">
          Transforming spaces with beautiful false ceilings, POP designs, and
          gypsum installations
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToNext}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
          >
            Our Services
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
          >
            Get Quote
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToNext}
          className="animate-bounce text-stone-400 hover:text-stone-600 transition-colors"
        >
          <ChevronDownIcon className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}
