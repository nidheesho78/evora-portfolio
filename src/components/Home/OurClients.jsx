

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

// List of image filenames (without extension) – match your folder exactly
const clientLogos = [
  "al_jasim",
  "al_mabrook",
  "aztec",
  "cheff_story",
  "harees_al_waldah",
  "safiaya_travels",
  "spectra",
  "sushi_box",
  "sunrise",
  "travel_house",
  "vinci",
  "vlcc",
  "fujairah",
  "life_spring_pharmacy",
  "nesto",
  "ivory_mirage",
  // add more if needed
  // duplicates for smooth infinite loop will be handled in render
];

export default function OurClients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPaused, setIsPaused] = useState(false);

  // We duplicate the array in render for seamless loop
  const displayedLogos = [...clientLogos, ...clientLogos];

  return (
    <section
      ref={ref}
      className="relative bg-white py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      <div className="mx-auto w-full px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#005369]"
          >
            OUR CLIENTS
          </motion.h2>
          <div className="flex justify-center mt-4">
            <div className="w-28 h-1.5 bg-[#c2b790] rounded-full" />
          </div>
        </div>

        {/* Scrolling logos container */}
        <div className="relative">
          {/* Fade gradients on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scroll wrapper */}
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <motion.div
              className="flex gap-6 md:gap-10 lg:gap-12 py-6"
              animate={{ x: [0, -2400] }} // adjust this value based on total width ≈ logo count × avg width
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40, // slower = more premium feel
                  ease: "linear",
                },
              }}
              style={{ animationPlayState: isPaused ? "paused" : "running" }}
            >
              {displayedLogos.map((logo, idx) => (
                <div
                  key={`${logo}-${idx}`}
                  className="flex-shrink-0 w-40 sm:w-44 md:w-52 lg:w-60 h-28 sm:h-32 md:h-36 lg:h-40 
                             relative bg-white rounded-xl border border-gray-200 
                             hover:border-[#c2b790]/60 hover:shadow-xl 
                             transition-all duration-300 overflow-hidden"
                >
                  <Image
                    src={`/images/clients/${logo}.jpg`}
                    alt={`${logo.replace(/_/g, " ")} logo`}
                    fill
                    sizes="(max-width: 640px) 160px, (max-width: 768px) 176px, (max-width: 1024px) 208px, 240px"
                    className="object-contain p-4 sm:p-5 md:p-6"
                    priority={idx < 8} // load first few faster
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
 