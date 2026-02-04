// import { Home, Building2, Wrench, Paintbrush, Hammer, Zap } from 'lucide-react';
// import AnimatedSection from '@/utils/Animations';
// import Link from 'next/link';
// import { ArrowRight } from 'lucide-react';

// const services = [
//   {
//     icon: Home,
//     title: 'RESIDENTIAL',
//     description: 'Complete interior fit-out solutions for villas, apartments, and homes with premium materials and craftsmanship.',
//   },
//   {
//     icon: Building2,
//     title: 'COMMERCIAL',
//     description: 'Professional fit-out services for offices, retail spaces, and corporate environments.',
//   },
//   {
//     icon: Hammer,
//     title: 'CIVIL WORKS',
//     description: 'Comprehensive civil construction including plastering, block work, tile & marble fixing, and screeding.',
//   },
//   {
//     icon: Zap,
//     title: 'MEP WORKS',
//     description: 'Expert electrical and plumbing installations for residential and commercial projects.',
//   },
//   {
//     icon: Wrench,
//     title: 'JOINERY WORKS',
//     description: 'Custom kitchen cabinets, wardrobes, TV units, and high-quality woodwork solutions.',
//   },
//   {
//     icon: Paintbrush,
//     title: 'PAINTING & FINISHING',
//     description: 'Professional internal & external painting, epoxy flooring, and decorative finishes.',
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="relative bg-[#005369] py-20 md:py-28 lg:py-36 overflow-hidden">
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#c2b79050_1px,transparent_1px),linear-gradient(to_bottom,#c2b79050_1px,transparent_1px)] bg-[size:40px_40px]" />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
//         <AnimatedSection>
//           <div className="text-center mb-16">
//             <span className="inline-block text-[#c2b790] uppercase tracking-widest font-medium text-sm md:text-base">
//               WHAT WE OFFER
//             </span>
//             <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
//               Our Services
//             </h2>
//            <div className="flex justify-center mt-4">
//             <div className="w-28 h-1 bg-[#c2b790]"></div>
//           </div>
//           </div>
//         </AnimatedSection>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, idx) => {
//             const Icon = service.icon;
//             return (
//               <AnimatedSection key={idx} delay={idx * 100}>
//                 <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 hover:border-[#c2b790] transition-all duration-300 hover:scale-105">
//                   <div className="w-16 h-16 rounded-full bg-[#c2b790]/20 flex items-center justify-center text-[#c2b790] mb-6 group-hover:bg-[#c2b790] group-hover:text-[#005369] transition-all duration-300">
//                     <Icon size={32} />
//                   </div>
//                   <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
//                   <p className="text-white/80 leading-relaxed">{service.description}</p>
//                 </div>
//               </AnimatedSection>
//             );
//           })}
//         </div>

//         <AnimatedSection delay={600}>
//           <div className="mt-16 text-center">
//             <Link
//               href="/services"
//               className="inline-flex items-center gap-3 rounded-lg border-2 border-[#c2b790] bg-[#c2b790] px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-semibold text-[#005369] transition-all hover:bg-transparent hover:text-white hover:scale-105"
//             >
//               View All Services <ArrowRight size={20} />
//             </Link>
//           </div>
//         </AnimatedSection>
//       </div>
//     </section>
//   );
// }

import { Home, Building2, Wrench, Paintbrush, Hammer, Zap } from "lucide-react";
import AnimatedSection from "@/utils/Animations";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "RESIDENTIAL",
    description:
      "Complete interior fit-out solutions for villas, apartments, and homes with premium materials and craftsmanship.",
  },
  {
    icon: Building2,
    title: "COMMERCIAL",
    description:
      "Professional fit-out services for offices, retail spaces, and corporate environments.",
  },
  {
    icon: Hammer,
    title: "CIVIL WORKS",
    description:
      "Comprehensive civil construction including plastering, block work, tile & marble fixing, and screeding.",
  },
  {
    icon: Zap,
    title: "MEP WORKS",
    description:
      "Expert electrical and plumbing installations for residential and commercial projects.",
  },
  {
    icon: Wrench,
    title: "JOINERY WORKS",
    description:
      "Custom kitchen cabinets, wardrobes, TV units, and high-quality woodwork solutions.",
  },
  {
    icon: Paintbrush,
    title: "PAINTING & FINISHING",
    description:
      "Professional internal & external painting, epoxy flooring, and decorative finishes.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-[#005369] py-10 md:py-14 lg:py-18 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c2b79050_1px,transparent_1px),linear-gradient(to_bottom,#c2b79050_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block text-[#c2b790] uppercase tracking-widest font-medium text-sm md:text-base">
              WHAT WE OFFER
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Our Services
            </h2>
            <div className="flex justify-center mt-4">
              <div className="w-28 h-1 bg-[#c2b790]"></div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 hover:border-[#c2b790] transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 rounded-full bg-[#c2b790]/20 flex items-center justify-center text-[#c2b790] mb-6 group-hover:bg-[#c2b790] group-hover:text-[#005369] transition-all duration-300">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={600}>
          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 rounded-lg border-2 border-[#c2b790] bg-[#c2b790] px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-semibold text-[#005369] transition-all hover:bg-transparent hover:text-white hover:scale-105"
            >
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}