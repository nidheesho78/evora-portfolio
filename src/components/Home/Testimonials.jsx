


"use client";

import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/utils/Animations";

const testimonials = [
  {
    name: "Preji Prabhakaran",
    role: "Mordern Workspace",
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
    loaction: "Deira, Dubai",
    text: "This team did the fit-out work for our restaurant and handled everything smoothly. The team was easy to work with and supportive throughout the project. They helped bring the Myanmar feel into the space with murals and a cozy, warm interior. We’re happy with how the restaurant turned out. Thanks to Evora Future.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
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
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#c2b790]">
              Testimonials
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#005369]">
              What Our Clients Say
            </h2>
            <div className="flex justify-center mt-5">
              <div className="w-24 sm:w-28 h-1.5 bg-[#c2b790] rounded-full" />
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonial Carousel */}
        {/* Testimonial Carousel */}
        <div className="relative mt-8 sm:mt-12">
          {/* Sliding testimonials container – fixed/controlled height */}
          <div className="relative min-h-[340px] sm:min-h-[380px] lg:min-h-[420px] xl:min-h-[380px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-800 ease-in-out ${
                  index === current
                    ? "opacity-100 translate-x-0"
                    : index < current
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                }`}
              >
                <div className="bg-[#005369] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 shadow-2xl border border-[#c2b790]/15 h-full flex flex-col">
                  <Quote
                    size={40}
                    className="text-[#c2b790] mb-5 sm:mb-6 opacity-80 flex-shrink-0"
                  />

                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white leading-relaxed mb-8 flex-grow">
                    “{testimonial.text}”
                  </p>

                  <div className="flex items-center gap-4 sm:gap-5 flex-shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#c2b790] flex items-center justify-center text-[#005369] text-xl sm:text-2xl font-bold flex-shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-[#c2b790] text-sm sm:text-base">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation – now safely below the sliding area */}
          <div className="mt-10 sm:mt-12 lg:mt-16 flex flex-col items-center gap-6 sm:gap-8">
            {/* Dots */}
            <div className="flex items-center gap-3 sm:gap-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-10 bg-[#005369]"
                      : "w-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next */}
            <div className="flex items-center justify-center gap-16 sm:gap-24 lg:gap-32">
              <button
                onClick={goToPrev}
                className="flex items-center gap-2 text-[#005369] hover:text-[#c2b790] transition-colors text-sm sm:text-base font-medium active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} strokeWidth={2.5} />
                Prev
              </button>

              <button
                onClick={goToNext}
                className="flex items-center gap-2 text-[#005369] hover:text-[#c2b790] transition-colors text-sm sm:text-base font-medium active:scale-95"
                aria-label="Next testimonial"
              >
                Next
                <ChevronRight size={20} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
