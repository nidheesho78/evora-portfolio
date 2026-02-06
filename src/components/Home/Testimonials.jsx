"use client";

import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/utils/Animations";

const testimonials = [
  {
    name: "Preji Prabhakaran",
    role: "Modern Workspace",
    location: "Dubai, UAE",
    text: "We recently had our office interiors done by Evora Future and are extremely satisfied. The team was professional, creative, and detail-oriented. They transformed our workspace into a modern, functional, and elegant environment that perfectly matches our needs. Everything from design to execution was smooth and on time. Highly recommend Evora Future for top-notch interior design services.",
  },
  {
    name: "Rashid",
    role: "Grand Dine Restaurant",
    location: "Al Muteena, Deira, Dubai",
    text: "Evora Future delivered our restaurant interior fit-out with exceptional quality and professionalism. The team maintained clear communication, met timelines, and executed every detail to a high standard. We are extremely satisfied with the final outcome and would confidently recommend them.",
  },
  {
    name: "Mr. Mark",
    role: "Pai Burmese restaurant",
    location: "Deira, Dubai", // fixed typo: loaction → location
    text: "This team did the fit-out work for our restaurant and handled everything smoothly. The team was easy to work with and supportive throughout the project. They helped bring the Myanmar feel into the space with murals and a cozy, warm interior. We’re happy with how the restaurant turned out. Thanks to Evora Future.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6500); // slightly faster on mobile feels better
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#c2b790]">
              Testimonials
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#005369]">
              What Our Clients Say
            </h2>
            <div className="flex justify-center mt-4">
              <div className="w-20 sm:w-28 h-1 bg-[#c2b790] rounded-full" />
            </div>
          </div>
        </AnimatedSection>

        {/* Carousel */}
        <div className="relative mt-6 sm:mt-10">
          <div className="relative min-h-[320px] xs:min-h-[340px] sm:min-h-[380px] md:min-h-[400px] lg:min-h-[420px]">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === current
                    ? "opacity-100 translate-x-0 scale-100"
                    : index < current
                      ? "opacity-0 -translate-x-8 scale-95"
                      : "opacity-0 translate-x-8 scale-95"
                }`}
              >
                <div className="bg-[#005369] rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-9 shadow-xl border border-[#c2b790]/10 h-full flex flex-col">
                  <Quote
                    size={36}
                    className="text-[#c2b790] mb-4 opacity-70 flex-shrink-0"
                  />

                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white leading-relaxed mb-6 sm:mb-8 flex-grow">
                    “{t.text}”
                  </p>

                  <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#c2b790] flex items-center justify-center text-[#005369] text-lg sm:text-xl font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white leading-tight">
                        {t.name}
                      </h4>
                      <p className="text-[#c2b790] text-xs sm:text-sm">
                        {t.role} {t.location && `・ ${t.location}`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls – more compact on mobile */}
          <div className="mt-8 sm:mt-10 flex flex-col items-center gap-5 sm:gap-6">
            {/* Dots */}
            <div className="flex items-center gap-2.5 sm:gap-3.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-[#005369]"
                      : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows – closer together on mobile */}
            <div className="flex items-center justify-center gap-16 xs:gap-20 sm:gap-28 md:gap-36">
              <button
                onClick={goToPrev}
                className="flex items-center gap-1.5 text-[#005369] hover:text-[#c2b790] transition-colors text-sm font-medium active:scale-95"
                aria-label="Previous"
              >
                <ChevronLeft size={18} strokeWidth={2.5} />
                Prev
              </button>

              <button
                onClick={goToNext}
                className="flex items-center gap-1.5 text-[#005369] hover:text-[#c2b790] transition-colors text-sm font-medium active:scale-95"
                aria-label="Next"
              >
                Next
                <ChevronRight size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
