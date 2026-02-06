// "use client";
// import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { useRef } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const AboutSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-50px" });

//   return (
//     <section ref={ref} className="relative py-16 md:py-20 lg:py-24 bg-white">
//       <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 mt-20">
//         <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
//           {/* LEFT COLUMN - Text Content */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="space-y-6"
//           >
//             {/* Overview Text */}
//             <p className="text-[#c2b790] uppercase tracking-[0.3em] font-semibold text-sm">
//               OVERVIEW
//             </p>
            
//             {/* About Us Heading */}
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#005369]">
//               ABOUT US
//                {/* Gold underline */}
//             </h2>
//         <div className="w-28 h-1 bg-[#c2b790]"></div>
            
//             {/* Description Paragraphs */}
//             <div className="space-y-5 text-gray-700">
//               <p className="text-lg leading-relaxed font-bold">
//                 Evora Future Technical Services LLC, established in 2019, is<br />
//                 a UAE-based interior fit-out and maintenance company.
//               </p>
              
//               <p className="text-lg leading-relaxed">
//                 Over the past six years, we have built a strong reputation for<br />
//                 delivering high-quality, end-to-end interior solutions,<br />
//                 specializing in residential, commercial, retail & corporate<br />
//                 projects.
//               </p>
//             </div>
            
//             {/* Learn More Link */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="pt-2"
//             >
//               <Link 
//                 href="/about" 
//                 className="group inline-flex items-center gap-2 text-[#005369] font-semibold hover:text-[#00394d] transition-colors text-lg"
//               >
//                 <span>Learn More About Us</span>
//                 <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
//               </Link>
//             </motion.div>
//           </motion.div>

//           {/* RIGHT COLUMN - Mission with Background Image */}
//          <motion.div
//   initial={{ opacity: 0, scale: 0.95 }}
//   animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
//   transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
//   className="relative"
// >
//   {/* Main container with image background */}
//   <div className="relative h-[500px] md:h-[550px] lg:h-[650px] border-2 rounded-2xl overflow-hidden">
//     {/* Background Image */}
//     <Image
//       src="/images/about-section.jpg"
//       alt="Modern interior design"
//       fill
//       className="object-cover"
//       priority
//     />
//   </div>
  
//   {/* Blue overlay card that sits on top of the image */}
//   <div className="absolute bottom-5 left-4 w-4/5 bg-[#005369] rounded-2xl p-8 md:p-10 lg:p-12 shadow-xl">
//     <div className="space-y-6">
//       {/* Mission Header with underline */}
//       <div>
//         <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
//           Our Mission
//         </h3>
//         {/* Gold underline */}
//         <div className="w-12 h-1 bg-[#c2b790]"></div>
//       </div>
      
//       {/* Mission Text - Exactly as in screenshot (no forced line breaks) */}
//       <p className="text-white text-lg leading-relaxed">
//         We focus on building transparent, long-term relationships with our clients, 
//         delivering functional, beautiful environments tailored to unique requirements.
//       </p>
//     </div>
    
//     {/* Optional decorative corner (if you want it) */}
//     <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/20"></div>
//   </div>
// </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;


"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative py-8 md:py-12 lg:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 mt-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          {/* LEFT COLUMN - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Overview Text */}
            <p className="text-[#c2b790] uppercase tracking-[0.3em] font-semibold text-7">
              OVERVIEW
            </p>

            {/* About Us Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#005369]">
              ABOUT US
              {/* Gold underline */}
            </h2>
            <div className="w-28 h-1 bg-[#c2b790]"></div>

            {/* Description Paragraphs */}
            <div className="space-y-5 text-gray-700">
              <p className="text-lg leading-relaxed font-bold">
                Evora Future Technical Services LLC, established in 2019, is a
                UAE-based interior fit-out and maintenance company.
              </p>

              <p className="text-lg leading-relaxed">
                Over the past six years, we have built a strong reputation for
                delivering high-quality, end-to-end interior solutions,
                specializing in residential, commercial, retail & corporate
                projects. Quality, punctuality and consistency in every project.
                We focus on building transparent, long-term relationships with
                our clients. Functional, beautiful environments tailored to our
                clients unique requirements. With a commitment to transparency,
                quality & exceptional service, we ensure that every project
                meets the highest standards, making us a trusted partner for all
                interior fit-out and maintenance needs.
              </p>
            </div>

            {/* Learn More Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-[#005369] font-semibold hover:text-[#00394d] transition-colors text-lg"
              >
                <span>Learn More About Us</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Mission with Background Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Main container with image background */}
            <div className="relative h-[500px] md:h-[550px] lg:h-[650px] border-2 rounded-2xl overflow-hidden">
              {/* Background Image */}
              <Image
                src="/images/about-section.png"
                alt="Modern interior design"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Blue overlay card that sits on top of the image */}
            <div className="absolute bottom-5 left-4 w-4/5 bg-[#005369] rounded-2xl p-8 md:p-10 lg:p-12 shadow-xl">
              <div className="space-y-6">
                {/* Mission Header with underline */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Our Mission
                  </h3>
                  {/* Gold underline */}
                  <div className="w-12 h-1 bg-[#c2b790]"></div>
                </div>

                {/* Mission Text - Exactly as in screenshot (no forced line breaks) */}
                <p className="text-white text-lg leading-relaxed">
                  We focus on building transparent, long-term relationships with
                  our clients, delivering functional, beautiful environments
                  tailored to unique requirements.
                </p>
              </div>

              {/* Optional decorative corner (if you want it) */}
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
