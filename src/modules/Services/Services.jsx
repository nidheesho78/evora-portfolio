// import PageBanner from '@/utils/PageBanner';
// import AnimatedSection from '@/utils/Animations';
// import { Home, Building2, Hammer, Zap, Wrench, Paintbrush, Droplets, Wallpaper, Maximize, Cog, Scissors, ShieldCheck, Award } from 'lucide-react';

// const allServices = [
//   {
//     icon: Home,
//     title: 'Residential Interior Fit-out',
//     description: 'Complete interior solutions for villas, apartments, and homes including design, execution, and finishing with premium materials and expert craftsmanship.',
//     features: ['Custom home interiors', 'Villa fit-outs', 'Apartment renovations', 'Luxury residential projects'],
//   },
//   {
//     icon: Building2,
//     title: 'Commercial Interior Fit-out',
//     description: 'Professional fit-out services for offices, retail spaces, showrooms, and corporate environments with focus on functionality and aesthetics.',
//     features: ['Office interiors', 'Retail spaces', 'Showroom design', 'Corporate fit-outs'],
//   },
//   {
//     icon: Hammer,
//     title: 'Civil Works',
//     description: 'Comprehensive civil construction services including plastering, block work, tile & marble fixing, screeding, and interlock & kerbstone works.',
//     // features: ['Plastering & block work', 'Tile & marble fixing', 'Screeding works', 'Interlock & kerbstone'],
//   },
//   {
//     icon: Zap,
//     title: 'MEP Works',
//     description: 'Expert mechanical, electrical, and plumbing installations ensuring safe, efficient, and compliant systems for residential and commercial projects.',
//     // features: ['Electrical installations', 'Plumbing systems', 'HVAC solutions', 'MEP consultancy'],
//   },
//   {
//     icon: Wrench,
//     title: 'Joinery Works',
//     description: 'High-quality custom woodwork including kitchen cabinets, wardrobes, cladding, TV units, office & retail counters, and wall paneling.',
//     // features: ['Kitchen cabinets', 'Wardrobes', 'TV units & cladding', 'Office counters'],
//   },
//   {
//     icon: Paintbrush,
//     title: 'Painting Works',
//     description: 'Professional internal & external painting, floor epoxy painting, and decorative painting services with premium quality finishes.',
//     // features: ['Internal painting', 'External painting', 'Epoxy flooring', 'Decorative finishes'],
//   },
//   {
//     icon: Wallpaper,
//     title: 'Interior Decor',
//     description: 'Ceiling work, partitions, wall cladding, gypsum molding, and corniche work to enhance aesthetics and functionality of your space.',
//     // features: ['Ceiling installations', 'Gypsum partitions', 'Wall cladding', 'Decorative molding'],
//   },
//   {
//     icon: Droplets,
//     title: 'Waterproofing',
//     description: 'Professional waterproofing solutions for bathrooms, kitchens, terraces, and basements to prevent water damage and ensure longevity.',
//     // features: ['Bathroom waterproofing', 'Terrace sealing', 'Basement protection', 'Leak prevention'],
//   },
//   {
//     icon: Maximize,
//     title: 'Aluminium & Glass Works',
//     description: 'Installation of glass partitions, shower cubicles, windows, and doors with modern designs and durable materials.',
//     // features: ['Glass partitions', 'Shower cubicles', 'Aluminium windows', 'Glass doors'],
//   },
//   {
//     icon: Scissors,
//     title: 'Floor Fixing',
//     description: 'Expert installation of carpets, vinyl flooring, and SPC flooring with precision and quality assurance.',
//     // features: ['Carpet installation', 'Vinyl flooring', 'SPC flooring', 'Floor finishing'],
//   },
//   {
//     icon: Cog,
//     title: 'Automation Solutions',
//     description: 'Smart home and office automation systems for lighting, climate control, security, and entertainment.',
//     // features: ['Smart home systems', 'Lighting automation', 'Climate control', 'Security systems'],
//   },
//   {
//     icon: ShieldCheck,
//     title: 'Annual Maintenance Contract',
//     description: 'Comprehensive maintenance services for villas, apartments, offices, and schools ensuring optimal condition year-round.',
//     // features: ['Preventive maintenance', 'Emergency repairs', 'Regular inspections', 'Facility management'],
//   },
// ];

// const coreValues = [
//   {
//     title: 'RESIDENTIAL',
//     description: 'Transform your home with our comprehensive residential interior solutions. We handle everything from design to execution.',
//     icon: Home,
//   },
//   {
//     title: 'COMMERCIAL',
//     description: 'Create inspiring workspaces that boost productivity. From offices to retail spaces, we deliver excellence.',
//     icon: Building2,
//   },
//   {
//     title: 'MAINTENANCE',
//     description: 'Keep your spaces in perfect condition with our comprehensive annual maintenance contracts and cleaning services.',
//     icon: Wrench,
//   },
// ];

// export default function ServicesPage() {
//   return (
//     <main>
//       <PageBanner
//         title="Our Services"
//         subtitle="Comprehensive interior solutions tailored to your needs"
//         image="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg"
//       />

//      {/* What We Offer + Services Grid - Combined Section */}
// <section className="py-20 bg-gray-50">
//   <div className="container mx-auto px-6">

//     {/* Heading + Description */}
//     <AnimatedSection>
//       <div className="text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-[#005369]">
//           What We Offer
//         </h2>
//         <div className="w-24 h-1 bg-[#c2b790] mt-4 mx-auto" />
//         <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
//           From concept to completion, we deliver exceptional interior fit-out and maintenance services across UAE.
//         </p>
//       </div>
//     </AnimatedSection>

//     {/* Services Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
//             {allServices.map((service, idx) => {
//               const Icon = service.icon;
//               return (
//                 <AnimatedSection key={idx} delay={idx * 60}>
//                   <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] h-full border border-gray-100 group">
//                     {/* Icon Circle with hover effect */}
//                     <div className="w-16 h-16 rounded-full bg-[#005369] flex items-center justify-center text-[#c2b790] mb-6 mx-auto md:mx-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#c2b790] group-hover:text-white">
//                       <Icon size={32} strokeWidth={2} />
//                     </div>

//                     {/* Title */}
//                     <h3 className="text-2xl font-bold text-[#005369] mb-4 text-center md:text-left">
//                       {service.title}
//                     </h3>

//                     {/* Description */}
//                     <p className="text-gray-700 leading-relaxed mb-6 text-center md:text-left">
//                       {service.description}
//                     </p>

//                     {/* Features List
//                     <ul className="space-y-2.5">
//                       {service.features.map((feature, fIdx) => (
//                         <li key={fIdx} className="flex items-start text-gray-600">
//                           <span className="w-2.5 h-2.5 rounded-full bg-[#c2b790] mt-1.5 mr-3 flex-shrink-0" />
//                           <span>{feature}</span>
//                         </li>
//                       ))}
//                     </ul> */}
//                   </div>
//                 </AnimatedSection>
//               );
//             })}
//           </div>
//   </div>
// </section>

// {/* Specialized Solutions Section – Matches Screenshot */}
// <section className="py-16 md:py-24 bg-white">
//   <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
//     {/* Heading */}
//     <AnimatedSection>
//       <div className="text-center mb-12 md:mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-[#005369] mb-4">
//           Specialized Solutions
//         </h2>
//         <div className="w-24 h-1 bg-[#c2b790] mx-auto mb-6" />
//         <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
//           Transform your spaces with our comprehensive residential interior solutions. We handle everything from design to execution.
//         </p>
//       </div>
//     </AnimatedSection>

//     {/* Cards Grid – 3 columns on desktop */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
//       {coreValues.map((value, idx) => (
//         <AnimatedSection key={idx} delay={idx * 150}>
//           <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center h-full flex flex-col">
//             {/* Icon Circle – fixed style like screenshot */}
//             <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#005369] flex items-center justify-center">
//               <value.icon size={40} className="text-white" strokeWidth={2} />
//             </div>

//             {/* Title */}
//             <h3 className="text-2xl md:text-3xl font-bold text-[#005369] mb-4">
//               {value.title}
//             </h3>

//             {/* Description */}
//             <p className="text-gray-600 text-base md:text-lg leading-relaxed flex-grow">
//               {value.description}
//             </p>
//           </div>
//         </AnimatedSection>
//       ))}
//     </div>
//   </div>
// </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-[#005369] text-white">
//         <div className="container mx-auto px-6">
//           <AnimatedSection>
//             <div className="max-w-4xl mx-auto text-center">
//               <h2 className="text-4xl md:text-5xl font-bold mb-6">
//                 Ready to Transform Your Space?
//               </h2>
//               <p className="text-xl text-white/90 mb-8">
//                 Contact us today for a free consultation and quote
//               </p>
//               <a
//                 href="/contact"
//                 className="inline-flex items-center gap-3 rounded-lg border-2 border-[#c2b790] bg-[#c2b790] px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-semibold text-[#005369] transition-all hover:bg-transparent hover:text-white hover:scale-105"
//               >
//                 Get In Touch
//               </a>
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>
//     </main>
//   );
// }

import PageBanner from "@/utils/PageBanner";
import AnimatedSection from "@/utils/Animations";
import {
  Home,
  Building2,
  Hammer,
  Zap,
  Wrench,
  Paintbrush,
  Droplets,
  Wallpaper,
  Maximize,
  Cog,
  Scissors,
  ShieldCheck,
  Award,
} from "lucide-react";

const allServices = [
  {
    icon: Home,
    title: "Residential Interior Fit-out",
    description:
      "Complete interior solutions for villas, apartments, and homes including design, execution, and finishing with premium materials and expert craftsmanship.",
    features: [
      "Custom home interiors",
      "Villa fit-outs",
      "Apartment renovations",
      "Luxury residential projects",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Interior Fit-out",
    description:
      "Professional fit-out services for offices, retail spaces, showrooms, and corporate environments with focus on functionality and aesthetics.",
    features: [
      "Office interiors",
      "Retail spaces",
      "Showroom design",
      "Corporate fit-outs",
    ],
  },
  {
    icon: Hammer,
    title: "Civil Works",
    description:
      "Comprehensive civil construction services including plastering, block work, tile & marble fixing, screeding, and interlock & kerbstone works.",
    // features: ['Plastering & block work', 'Tile & marble fixing', 'Screeding works', 'Interlock & kerbstone'],
  },
  {
    icon: Zap,
    title: "MEP Works",
    description:
      "Expert mechanical, electrical, and plumbing installations ensuring safe, efficient, and compliant systems for residential and commercial projects.",
    // features: ['Electrical installations', 'Plumbing systems', 'HVAC solutions', 'MEP consultancy'],
  },
  {
    icon: Wrench,
    title: "Joinery Works",
    description:
      "High-quality custom woodwork including kitchen cabinets, wardrobes, cladding, TV units, office & retail counters, and wall paneling.",
    // features: ['Kitchen cabinets', 'Wardrobes', 'TV units & cladding', 'Office counters'],
  },
  {
    icon: Paintbrush,
    title: "Painting Works",
    description:
      "Professional internal & external painting, floor epoxy painting, and decorative painting services with premium quality finishes.",
    // features: ['Internal painting', 'External painting', 'Epoxy flooring', 'Decorative finishes'],
  },
  {
    icon: Wallpaper,
    title: "Interior Decor",
    description:
      "Ceiling work, partitions, wall cladding, gypsum molding, and corniche work to enhance aesthetics and functionality of your space.",
    // features: ['Ceiling installations', 'Gypsum partitions', 'Wall cladding', 'Decorative molding'],
  },
  {
    icon: Droplets,
    title: "Waterproofing",
    description:
      "Professional waterproofing solutions for bathrooms, kitchens, terraces, and basements to prevent water damage and ensure longevity.",
    // features: ['Bathroom waterproofing', 'Terrace sealing', 'Basement protection', 'Leak prevention'],
  },
  {
    icon: Maximize,
    title: "Aluminium & Glass Works",
    description:
      "Installation of glass partitions, shower cubicles, windows, and doors with modern designs and durable materials.",
    // features: ['Glass partitions', 'Shower cubicles', 'Aluminium windows', 'Glass doors'],
  },
  {
    icon: Scissors,
    title: "Floor Fixing",
    description:
      "Expert installation of carpets, vinyl flooring, and SPC flooring with precision and quality assurance.",
    // features: ['Carpet installation', 'Vinyl flooring', 'SPC flooring', 'Floor finishing'],
  },
  {
    icon: Cog,
    title: "Automation Solutions",
    description:
      "Smart home and office automation systems for lighting, climate control, security, and entertainment.",
    // features: ['Smart home systems', 'Lighting automation', 'Climate control', 'Security systems'],
  },
  {
    icon: ShieldCheck,
    title: "Annual Maintenance Contract",
    description:
      "Comprehensive maintenance services for villas, apartments, offices, and schools ensuring optimal condition year-round.",
    // features: ['Preventive maintenance', 'Emergency repairs', 'Regular inspections', 'Facility management'],
  },
];

const coreValues = [
  {
    title: "RESIDENTIAL",
    description:
      "Transform your home with our comprehensive residential interior solutions. We handle everything from design to execution.",
    icon: Home,
  },
  {
    title: "COMMERCIAL",
    description:
      "Create inspiring workspaces that boost productivity. From offices to retail spaces, we deliver excellence.",
    icon: Building2,
  },
  {
    title: "MAINTENANCE",
    description:
      "Keep your spaces in perfect condition with our comprehensive annual maintenance contracts and cleaning services.",
    icon: Wrench,
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageBanner
        title="Our Services"
        subtitle="Comprehensive interior solutions tailored to your needs"
        image="/images/services.png"
      />

      {/* What We Offer + Services Grid - Combined Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Heading + Description */}
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#005369]">
                What We Offer
              </h2>
              <div className="w-24 h-1 bg-[#c2b790] mt-4 mx-auto" />
              <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                From concept to completion, we deliver exceptional interior
                fit-out and maintenance services across UAE.
              </p>
            </div>
          </AnimatedSection>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {allServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={idx} delay={idx * 60}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] h-full border border-gray-100 group">
                    {/* Icon Circle with hover effect */}
                    <div className="w-16 h-16 rounded-full bg-[#005369] flex items-center justify-center text-[#c2b790] mb-6 mx-auto md:mx-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#c2b790] group-hover:text-white">
                      <Icon size={32} strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[#005369] mb-4 text-center md:text-left">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-6 text-center md:text-left">
                      {service.description}
                    </p>

                    {/* Features List
                    <ul className="space-y-2.5">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start text-gray-600">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#c2b790] mt-1.5 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul> */}
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialized Solutions Section – Matches Screenshot */}
      <section className="py-12 md:py-18 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Heading */}
          <AnimatedSection>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#005369] mb-4">
                Specialized Solutions
              </h2>
              <div className="w-24 h-1 bg-[#c2b790] mx-auto mb-6" />
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Transform your spaces with our comprehensive residential
                interior solutions. We handle everything from design to
                execution.
              </p>
            </div>
          </AnimatedSection>

          {/* Cards Grid – 3 columns on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {coreValues.map((value, idx) => (
              <AnimatedSection key={idx} delay={idx * 150}>
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center h-full flex flex-col">
                  {/* Icon Circle – fixed style like screenshot */}
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#005369] flex items-center justify-center">
                    <value.icon
                      size={40}
                      className="text-white"
                      strokeWidth={2}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-[#005369] mb-4">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed flex-grow">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#005369] text-white">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Space?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Contact us today for a free consultation and quote
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-lg border-2 border-[#c2b790] bg-[#c2b790] px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-semibold text-[#005369] transition-all hover:bg-transparent hover:text-white hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
