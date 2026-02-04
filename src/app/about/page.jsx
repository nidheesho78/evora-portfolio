// 'use client';

// import PageBanner from '@/utils/PageBanner';       // ← Import the reusable banner
// import AnimatedSection from '@/utils/Animations';
// import { Target, TrendingUp, Award, Users } from 'lucide-react';
// import { animate, useMotionValue, useTransform } from 'framer-motion';
// import { useRef, useEffect } from 'react';
// import { useInView } from 'framer-motion';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// // Reusable Animated Counter Component
// function AnimatedCounter({ end, duration = 2.5, suffix = '+' }) {
//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) => Math.round(latest));

//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });

//   useEffect(() => {
//     if (isInView) {
//       const controls = animate(count, end, {
//         duration,
//         ease: 'easeOut',
//       });
//       return () => controls.stop();
//     }
//   }, [isInView, end, duration, count]);

//   return (
//     <div ref={ref} className="text-5xl md:text-6xl font-bold text-[#c2b790] mb-4">
//       <motion.span>{rounded}</motion.span>
//       {suffix}
//     </div>
//   );
// }

// const values = [
//   {
//     icon: Target,
//     title: 'Our Mission',
//     description: 'To deliver innovative, high-quality interior solutions that transform spaces and exceed client expectations through transparency, precision, and dedication.',
//   },
//   {
//     icon: TrendingUp,
//     title: 'Our Vision',
//     description: 'To be the leading provider of interior fit-out and maintenance solutions in the UAE, setting new industry standards through quality and innovation.',
//   },
//   {
//     icon: Award,
//     title: 'Our Values',
//     description: 'Quality, transparency, punctuality, and exceptional service in every project. Building long-lasting partnerships through consistent delivery.',
//   },
//   {
//     icon: Users,
//     title: 'Our Team',
//     description: 'Experienced professionals dedicated to transforming your vision into reality with precision craftsmanship and attention to detail.',
//   },
// ];

// const coreValues = [
//   {
//     title: 'Quality',
//     description: 'Excellence in every detail of our work',
//     icon: Award,
//   },
//   {
//     title: 'Punctuality',
//     description: 'On-time delivery, every time',
//     icon: Award,
//   },
//   {
//     title: 'Transparency',
//     description: 'Clear communication and honest practices',
//     icon: Award,
//   },
//   {
//     title: 'Innovation',
//     description: 'Creative solutions for unique spaces',
//     icon: Award,
//   },
// ];

// export default function AboutPage() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-50px' });

//   return (
//     <main className="min-h-screen bg-white">
//       {/* Reusable Page Banner - same style as Services page */}
//       <PageBanner
//         title="About Us"
//         subtitle="Your Trusted Partner in Interior Excellence"
//         image="/images/about-section.jpg"           // ← your local image (or change to any other)
//       />

//       {/* Who We Are Section */}
//       <section ref={ref} className="relative py-16 md:py-20 lg:py-24 bg-white">
//         <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 mt-10 md:mt-16">
//           <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.7, ease: 'easeOut' }}
//               className="space-y-6 lg:pr-8"
//             >
//               <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#005369]">
//                 Who We Are
//               </h2>
//               <div className="w-28 h-1 bg-[#c2b790]" />

//               <div className="space-y-6 text-gray-700">
//                 <p className="text-lg md:text-xl leading-relaxed font-semibold">
//                   Evora Future Technical Services LLC, established in 2019, is a UAE-based interior fit-out and maintenance company.
//                 </p>

//                 <p className="text-lg md:text-xl leading-relaxed">
//                   Over the past six years, we have built a strong reputation for delivering high-quality, end-to-end interior solutions, specializing in residential, commercial, retail & corporate projects.
//                 </p>

//                 <p className="text-lg md:text-xl leading-relaxed">
//                   We focus on building transparent, long-term relationships with our clients, delivering functional, beautiful environments tailored to our clients unique requirements.
//                 </p>

//                 <p className="text-lg md:text-xl leading-relaxed">
//                   With a commitment to transparency, quality & exceptional service, we ensure that every project meets the highest standards, making us a trusted partner for all interior fit-out and maintenance needs.
//                 </p>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={isInView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
//               className="relative"
//             >
//               <div className="relative h-[480px] md:h-[550px] lg:h-[650px] rounded-2xl overflow-hidden border-2 border-gray-200 shadow-xl">
//                 <Image
//                   src="https://images.pexels.com/photos/31817155/pexels-photo-31817155.jpeg"
//                   alt="Luxury modern interior design - Evora Future"
//                   fill
//                   className="object-cover"
//                   priority
//                   sizes="(max-width: 1024px) 100vw, 50vw"
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Our Core Values Section */}
//       <section className="py-16 md:py-24 bg-white">
//         <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-bold text-[#005369] mb-4">
//               Our Core Values
//             </h2>
//             <div className="w-24 h-1 bg-[#c2b790] mx-auto" />
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
//             {coreValues.map((value, idx) => (
//               <AnimatedSection key={idx} delay={idx * 150}>
//                 <div className="text-center bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
//                   <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#005369] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
//                     <value.icon size={40} className="text-[#c2b790]" strokeWidth={2.5} />
//                   </div>
//                   <h3 className="text-xl font-bold text-[#005369] mb-3">
//                     {value.title}
//                   </h3>
//                   <p className="text-gray-600 text-base leading-relaxed px-2">
//                     {value.description}
//                   </p>
//                 </div>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Principles (Mission, Vision, Values, Team) */}
//       <section className="py-15 md:py-28 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <AnimatedSection>
//             <div className="text-center mb-16">
//               <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#005369]">
//                 Our Principles
//               </h2>
//                <div className="w-24 h-1 bg-[#c2b790] mt-3 mx-auto" />
//             </div>
            
//           </AnimatedSection>

//           <div className="grid md:grid-cols-2 gap-8">
//             {values.map((value, idx) => {
//               const Icon = value.icon;
//               return (
//                 <AnimatedSection key={idx} delay={idx * 100}>
//                   <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
//                     <div className="w-16 h-16 rounded-full bg-[#005369] flex items-center justify-center text-[#c2b790] mb-6">
//                       <Icon size={32} />
//                     </div>
//                     <h3 className="text-2xl font-bold text-[#005369] mb-4">{value.title}</h3>
//                     <p className="text-gray-700 leading-relaxed">{value.description}</p>
//                   </div>
//                 </AnimatedSection>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us - with Animated Counters */}
//       <section className="py-15 md:py-28 bg-[#005369] text-white">
//         <div className="container mx-auto px-6">
//           <AnimatedSection>
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold">
//                 Why Choose Evora Future
//               </h2>
//             </div>
//           </AnimatedSection>

//           <div className="grid md:grid-cols-3 gap-12 md:gap-16">
//             <AnimatedSection delay={100}>
//               <div className="text-center">
//                 <AnimatedCounter end={6} />
//                 <h3 className="text-xl font-semibold mb-2">Years Experience</h3>
//                 <p className="text-white">Proven track record of excellence in the UAE market</p>
//               </div>
//             </AnimatedSection>

//             <AnimatedSection delay={200}>
//               <div className="text-center">
//                 <AnimatedCounter end={200} />
//                 <h3 className="text-xl font-semibold mb-2">Projects Completed</h3>
//                 <p className="text-white">Successfully delivered across all sectors</p>
//               </div>
//             </AnimatedSection>

//             <AnimatedSection delay={300}>
//               <div className="text-center">
//                 <AnimatedCounter end={100} suffix="%" />
//                 <h3 className="text-xl font-semibold mb-2">Client Satisfaction</h3>
//                 <p className="text-white">Committed to exceeding expectations</p>
//               </div>
//             </AnimatedSection>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import PageBanner from "@/utils/PageBanner"; // ← Import the reusable banner
import AnimatedSection from "@/utils/Animations";
import { Target, TrendingUp, Award, Users } from "lucide-react";
import { animate, useMotionValue, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";

// Reusable Animated Counter Component
function AnimatedCounter({ end, duration = 2.5, suffix = "+" }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, end, {
        duration,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, end, duration, count]);

  return (
    <div
      ref={ref}
      className="text-5xl md:text-6xl font-bold text-[#c2b790] mb-4"
    >
      <motion.span>{rounded}</motion.span>
      {suffix}
    </div>
  );
}

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver innovative, high-quality interior solutions that transform spaces and exceed client expectations through transparency, precision, and dedication.",
  },
  {
    icon: TrendingUp,
    title: "Our Vision",
    description:
      "To be the leading provider of interior fit-out and maintenance solutions in the UAE, setting new industry standards through quality and innovation.",
  },
  {
    icon: Award,
    title: "Our Values",
    description:
      "Quality, transparency, punctuality, and exceptional service in every project. Building long-lasting partnerships through consistent delivery.",
  },
  {
    icon: Users,
    title: "Our Team",
    description:
      "Experienced professionals dedicated to transforming your vision into reality with precision craftsmanship and attention to detail.",
  },
];

const coreValues = [
  {
    title: "Quality",
    description: "Excellence in every detail of our work",
    icon: Award,
  },
  {
    title: "Punctuality",
    description: "On-time delivery, every time",
    icon: Award,
  },
  {
    title: "Transparency",
    description: "Clear communication and honest practices",
    icon: Award,
  },
  {
    title: "Innovation",
    description: "Creative solutions for unique spaces",
    icon: Award,
  },
];

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <main className="min-h-screen bg-white">
      {/* Reusable Page Banner - same style as Services page */}
      <PageBanner
        title="About Us"
        subtitle="Your Trusted Partner in Interior Excellence"
        image="/images/about-section.jpg" // ← your local image (or change to any other)
      />

      {/* Who We Are Section */}
      <section ref={ref} className="relative py-12 md:py-26 lg:py-18 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 mt-10 md:mt-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-6 lg:pr-8"
            >
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#005369]">
                Who We Are
              </h2>
              <div className="w-28 h-1 bg-[#c2b790]" />

              <div className="space-y-6 text-gray-700">
                <p className="text-lg md:text-xl leading-relaxed font-semibold">
                  Evora Future Technical Services LLC, established in 2019, is a
                  UAE-based interior fit-out and maintenance company.
                </p>

                <p className="text-lg md:text-xl leading-relaxed">
                  Over the past six years, we have built a strong reputation for
                  delivering high-quality, end-to-end interior solutions,
                  specializing in residential, commercial, retail & corporate
                  projects. Quality, punctuality and consistency in every
                  project.
                </p>

                <p className="text-lg md:text-xl leading-relaxed">
                  We focus on building transparent, long-term relationships with
                  our clients. Functional, beautiful environments tailored to
                  our clients unique requirements.
                </p>

                <p className="text-lg md:text-xl leading-relaxed">
                  With a commitment to transparency, quality & exceptional
                  service, we ensure that every project meets the highest
                  standards, making us a trusted partner for all interior
                  fit-out and maintenance needs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[480px] md:h-[550px] lg:h-[650px] rounded-2xl overflow-hidden border-2 border-gray-200 shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/31817155/pexels-photo-31817155.jpeg"
                  alt="Luxury modern interior design - Evora Future"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-12 md:py-18 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#005369] mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-[#c2b790] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {coreValues.map((value, idx) => (
              <AnimatedSection key={idx} delay={idx * 150}>
                <div className="text-center bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#005369] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <value.icon
                      size={40}
                      className="text-[#c2b790]"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#005369] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed px-2">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Principles (Mission, Vision, Values, Team) */}
      <section className="py-12 md:py-18 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#005369]">
                Our Principles
              </h2>
              <div className="w-24 h-1 bg-[#c2b790] mt-3 mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="w-16 h-16 rounded-full bg-[#005369] flex items-center justify-center text-[#c2b790] mb-6">
                      <Icon size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#005369] mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us - with Animated Counters */}
      <section className="py-12 md:py-20 bg-[#005369] text-white">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                Why Choose Evora Future
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <AnimatedSection delay={100}>
              <div className="text-center">
                <AnimatedCounter end={6} />
                <h3 className="text-xl font-semibold mb-2">Years Experience</h3>
                <p className="text-white">
                  Proven track record of excellence in the UAE market
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="text-center">
                <AnimatedCounter end={200} />
                <h3 className="text-xl font-semibold mb-2">
                  Projects Completed
                </h3>
                <p className="text-white">
                  Successfully delivered across all sectors
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="text-center">
                <AnimatedCounter end={100} suffix="%" />
                <h3 className="text-xl font-semibold mb-2">
                  Client Satisfaction
                </h3>
                <p className="text-white">
                  Committed to exceeding expectations
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
