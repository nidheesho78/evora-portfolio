// import Link from 'next/link';
// import Image from 'next/image';
// import AnimatedSection from '@/utils/Animations';
// import { ArrowRight } from 'lucide-react';

// const featuredProjects = [
//   {
//     title: 'Luxury Residential Villa',
//     category: 'Residential',
//     image: 'https://images.pexels.com/photos/31817157/pexels-photo-31817157.jpeg',
//   },
//   {
//     title: 'Modern Office Space',
//     category: 'Commercial',
//     image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg', // bright modern open-plan office (very popular & clean)
//   },
//   {
//     title: 'Premium Hotel Lobby',
//     category: 'Hospitality',
//     image: 'https://images.pexels.com/photos/29649745/pexels-photo-29649745.jpeg',
//   },
// ];

// export default function ProjectsShowcase() {
//   return (
//     <section className="bg-white py-20 md:py-28 lg:py-36">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <AnimatedSection>
//           <div className="text-center">
//             <span className="inline-block text-[#c2b790] uppercase tracking-widest font-medium text-sm md:text-base">
//               PORTFOLIO
//             </span>
//             <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-[#005369]">
//               Our Recent Work
//             </h2>
//             <div className="flex justify-center mt-4">
//             <div className="w-28 h-1 bg-[#c2b790]"></div>
//           </div>
//           </div>
//         </AnimatedSection>

//         <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {featuredProjects.map((project, idx) => (
//             <AnimatedSection key={idx} delay={idx * 150}>
//               <div className="group relative overflow-hidden rounded-xl bg-gray-100 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
//                 <div className="relative aspect-[4/3] overflow-hidden">
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-110"
//                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                   />

//                   {/* Overlay on hover */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#005369]/90 via-[#005369]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                   {/* Title - appears on hover */}
//                   <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
//                     <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
//                     <span className="inline-block rounded-full bg-[#c2b790] px-4 py-1.5 text-sm font-medium text-[#005369]">
//                       {project.category}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </AnimatedSection>
//           ))}
//         </div>

//         <AnimatedSection delay={450}>
//           <div className="mt-16 text-center">
//             <Link
//               href="/projects"
//               className="inline-flex items-center gap-3 rounded-lg border-2 border-[#005369] px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-semibold text-[#005369] transition-all hover:bg-[#005369] hover:text-white hover:scale-105"
//             >
//               View All Projects <ArrowRight size={20} />
//             </Link>
//           </div>
//         </AnimatedSection>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/utils/Animations";
import { ArrowRight } from "lucide-react";

const featuredProjects = [
  {
    title: "Life Spring Pharmacy",
    category: "Commercial",
    image:"/images/recent/life-spring.png",
  },
  {
    title: "Premium Hotel",
    category: "Residential",
    image:
    "/images/recent/recent-two.png",
  },
  {
    title: "Grand Dine Restaurant",
    category: "Commercial",
    image: "/images/recent/grand-dine.png", // bright modern open-plan office (very popular & clean)
  },
];

export default function ProjectsShowcase() {
  return (
    <section className="bg-white py-10 md:py-14 lg:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <span className="inline-block text-[#c2b790] uppercase tracking-widest font-medium text-sm md:text-base">
              PORTFOLIO
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-[#005369]">
              Our Recent Work
            </h2>
            <div className="flex justify-center mt-4">
              <div className="w-28 h-1 bg-[#c2b790]"></div>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, idx) => (
            <AnimatedSection key={idx} delay={idx * 150}>
              <div className="group relative overflow-hidden rounded-xl bg-gray-100 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#005369]/90 via-[#005369]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Title - appears on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <span className="inline-block rounded-full bg-[#c2b790] px-4 py-1.5 text-sm font-medium text-[#005369]">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={450}>
          <div className="mt-16 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 rounded-lg border-2 border-[#005369] px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-semibold text-[#005369] transition-all hover:bg-[#005369] hover:text-white hover:scale-105"
            >
              View All Projects <ArrowRight size={20} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}