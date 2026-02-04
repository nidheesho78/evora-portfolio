// // components/HeroBanner.tsx
// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";

// const slides = [
//   {
//     image: "/images/hero-banner-one.png",
//     title: "THE FUTURE",
//     subtitle: "MODERN ARCHITECTURAL DESIGN",
//   },
//   {
//     image: "/images/hero-banner-two.png",
//     title: "YOUR VISION",
//     subtitle: "OUR EXPERTISE",
//   },
//   {
//     image: "/images/hero-banner-three.png",
//     title: "LUXURY INTERIORS",
//     subtitle: "CRAFTED TO PERFECTION",
//   },
// ];

// // Counter data – updated to match your target values & labels
// const stats = [
//   { id: 1, end: 6, label: "Years Experience", suffix: "+" },
//   { id: 2, end: 200, label: "Projects Done", suffix: "+" },
//   { id: 3, end: 100, label: "Client Satisfaction", suffix: "%" },
//   { id: 4, end: 50, label: "Team Members", suffix: "+" },
// ];

// export default function HeroBanner() {
//   const [current, setCurrent] = useState(0);
//   const [counters, setCounters] = useState([0, 0, 0, 0]);

//   // Slide rotation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 7000);
//     return () => clearInterval(interval);
//   }, []);

//   // Counter animation (runs once on mount)
//   useEffect(() => {
//     const duration = 2200;
//     const steps = 60;
//     const stepDuration = duration / steps;

//     const intervals = stats.map((stat, index) => {
//       let currentStep = 0;

//       const interval = setInterval(() => {
//         currentStep++;
//         const progress = currentStep / steps;
//         const easeOutQuart = 1 - Math.pow(1 - progress, 4);
//         let newValue = Math.floor(stat.end * easeOutQuart);

//         // Ensure we reach exact final value
//         if (currentStep >= steps) {
//           newValue = stat.end;
//         }

//         setCounters((prev) => {
//           const newCounters = [...prev];
//           newCounters[index] = newValue;
//           return newCounters;
//         });

//         if (currentStep >= steps) {
//           clearInterval(interval);
//         }
//       }, stepDuration);

//       return interval;
//     });

//     return () => {
//       intervals.forEach((i) => clearInterval(i));
//     };
//   }, []);

//   return (
//     <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden">
//       {/* Background Images */}
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`
//             absolute inset-0 bg-cover bg-center transition-opacity duration-1500 ease-in-out
//             ${index === current ? "opacity-100" : "opacity-0"}
//           `}
//           style={{ backgroundImage: `url(${slide.image})` }}
//         >
//           {/* <div className="absolute inset-0 bg-[#005369] opacity-50" /> */}
//           <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
//         </div>
//       ))}

//       {/* Content */}
//       <div className="relative z-10 flex min-h-screen items-center justify-center px-5 sm:px-6 lg:px-8 text-center">
//         <div className="max-w-5xl w-full">
//           <p className="mb-4 text-base md:text-lg font-medium uppercase tracking-[0.3em] text-[#c2b790]">
//             {slides[current].title}
//           </p>

//           <h1 className="mb-6 md:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase text-white leading-[0.85] tracking-tight">
//             {slides[current].subtitle}
//           </h1>

//           <h2 className="mx-auto max-w-4xl text-2xl md:text-3xl text-gray-300 mb-10 md:mb-12 font-light leading-relaxed">
//             Delivering exceptional interior fit-out and maintenance services<br />
//             across UAE since 2019
//           </h2>

//           {/* ── New Counters ── */}
//           <div className="mb-10 md:mb-16">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-white">
//               {stats.map((stat, index) => (
//                 <div
//                   key={stat.id}
//                   className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
//                 >
//                   <div className="text-4xl md:text-5xl font-bold text-[#c2b790]">
//                     {counters[index]}
//                     {stat.suffix}
//                   </div>
//                   <div className="mt-2 text-sm md:text-base uppercase tracking-wide">
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* CTA */}
//           <div className="mt-12 md:mt-16">
//             <Link
//               href="/projects"
//               className="inline-flex items-center gap-3 rounded-lg border-2 border-[#c2b790] bg-[#c2b790] px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-semibold text-[#005369] transition-all hover:bg-transparent hover:text-white hover:scale-105 active:scale-95"
//             >
//               <span>VIEW PROJECTS</span>

//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Slide dots */}
//       <div className="absolute bottom-6 md:bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:gap-3">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             className={`
//               h-2 md:h-2.5 transition-all duration-300 rounded-full
//               ${i === current ? "w-8 md:w-10 bg-[#c2b790]" : "w-2 md:w-2.5 bg-white/50"}
//             `}
//             onClick={() => setCurrent(i)}
//             aria-label={`Go to slide ${i + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/hero-banner-one.png",
    title: "THE FUTURE",
    subtitle: "MODERN ARCHITECTURAL DESIGN",
  },
  {
    image: "/images/hero-banner-two.png",
    title: "YOUR VISION",
    subtitle: "OUR EXPERTISE",
  },
  {
    image: "/images/hero-banner-three.png",
    title: "LUXURY INTERIORS",
    subtitle: "CRAFTED TO PERFECTION",
  },
];

const stats = [
  { id: 1, end: 6, label: "Years Experience", suffix: "+" },
  { id: 2, end: 200, label: "Projects Done", suffix: "+" },
  { id: 3, end: 100, label: "Client Satisfaction", suffix: "%" },
  { id: 4, end: 50, label: "Team Members", suffix: "+" },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Counter animation
  useEffect(() => {
    const duration = 2200;
    const steps = 60;
    const stepDuration = duration / steps;

    const cleanup = [];

    stats.forEach((stat, i) => {
      let step = 0;

      const id = setInterval(() => {
        step++;
        const progress = step / steps;
        const ease = 1 - Math.pow(1 - progress, 4);
        let value = Math.floor(stat.end * ease);
        if (step >= steps) value = stat.end;

        setCounters((prev) => {
          const next = [...prev];
          next[i] = value;
          return next;
        });

        if (step >= steps) clearInterval(id);
      }, stepDuration);

      cleanup.push(() => clearInterval(id));
    });

    return () => cleanup.forEach((fn) => fn());
  }, []);

  return (
    <section className="relative h-[calc(100vh-80px)] w-full overflow-hidden">
      {/* Backgrounds */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/65" />
        </div>
      ))}

      <div className="relative z-10 flex h-full flex-col px-5 pt-16 md:pt-24 lg:pt-32">
        {/* Text content – pushed to the top */}
        <div className="text-center max-w-6xl mx-auto">
          <p className="mb-4 pt-8 text-sm font-medium uppercase tracking-[0.35em] text-[#c2b790] md:text-lg">
            {slides[current].title}
          </p>

          <h1 className="mb-5 md:mb-6 text-2xl font-black uppercase leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {slides[current].subtitle}
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-200 md:text-xl lg:text-2xl">
            Delivering exceptional interior fit-out and maintenance services
            <br className="hidden sm:inline" /> across UAE since 2019
          </p>
        </div>

        {/* Spacer that grows to push counters down – or leave empty */}
        <div className="flex-grow" />

        {/* Counters – stay fixed in lower part, no jumping */}
        <div className="pb-24 md:pb-32 lg:pb-40 w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className="flex flex-col items-center rounded-xl bg-white/10 px-8 py-8 backdrop-blur-sm transition hover:scale-105 hover:bg-white/15"
              >
                <span className="text-3xl font-bold text-[#c2b790] sm:text-4xl md:text-5xl">
                  {counters[index]}
                  {stat.suffix}
                </span>
                <span className="mt-2 text-xs uppercase tracking-wider text-gray-200 sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === current
                ? "w-10 bg-[#c2b790]"
                : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}