// 'use client';

// import { useState } from 'react';
// import PageBanner from '@/utils/PageBanner';
// import AnimatedSection from '@/utils/Animations';
// import Image from 'next/image';

// // Template project data - you can replace with actual projects later
// const projectCategories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Retail'];

// const projects = [
//   {
//     id: 1,
//     title: 'Luxury Villa Interior - Dubai',
//     category: 'Residential',
//     image: 'https://images.unsplash.com/photo-1584973547886-92c625508e24',
//     description: 'Complete interior fit-out for a luxury villa including living spaces, bedrooms, kitchen, and outdoor areas.',
//     year: '2024',
//     location: 'Dubai, UAE',
//   },
//   {
//     id: 2,
//     title: 'Modern Office Space',
//     category: 'Commercial',
//     image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg',
//     description: 'Corporate office interior with modern design, meeting rooms, and collaborative workspaces.',
//     year: '2024',
//     location: 'Dubai, UAE',
//   },
//   {
//     id: 3,
//     title: 'Premium Hotel Lobby',
//     category: 'Hospitality',
//     image: 'https://images.pexels.com/photos/33803739/pexels-photo-33803739.jpeg',
//     description: 'Elegant hotel lobby design with custom furniture, lighting, and premium finishes.',
//     year: '2023',
//     location: 'Abu Dhabi, UAE',
//   },
//   {
//     id: 4,
//     title: 'Contemporary Kitchen Design',
//     category: 'Residential',
//     image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
//     description: 'Modern kitchen with custom cabinetry, premium appliances, and innovative storage solutions.',
//     year: '2024',
//     location: 'Sharjah, UAE',
//   },
//   {
//     id: 5,
//     title: 'Luxury Residential Interior',
//     category: 'Residential',
//     image: 'https://images.pexels.com/photos/3754595/pexels-photo-3754595.jpeg',
//     description: 'High-end residential project featuring elegant living spaces and sophisticated design elements.',
//     year: '2023',
//     location: 'Dubai, UAE',
//   },
//   {
//     id: 6,
//     title: 'Boutique Retail Space',
//     category: 'Retail',
//     image: 'https://images.pexels.com/photos/5288134/pexels-photo-5288134.jpeg',
//     description: 'Stylish retail interior with custom display units, lighting design, and customer-friendly layout.',
//     year: '2024',
//     location: 'Dubai Mall, UAE',
//   },
// ];

// export default function ProjectsPage() {
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   // Filter projects based on selected category
//   const filteredProjects = selectedCategory === 'All'
//     ? projects
//     : projects.filter(project => project.category === selectedCategory);

//   return (
//     <main>
//       <PageBanner
//         title="Our Projects"
//         subtitle="Showcasing excellence in interior fit-out across UAE"
//         image="https://images.pexels.com/photos/18435276/pexels-photo-18435276.jpeg"
//       />

//       {/* Introduction */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <AnimatedSection>
//             <div className="max-w-4xl mx-auto text-center">
//               <h2 className="text-3xl md:text-4xl font-bold text-[#005369] mb-6">
//                 Portfolio of Excellence
//               </h2>
//                <div className="w-32 h-1 bg-[#c2b790] mt-3 mx-auto" />
//               <p className="text-lg text-gray-700 mt-3 leading-relaxed">
//                 Explore our diverse portfolio of successfully completed projects. Each project reflects our commitment to quality, innovation, and client satisfaction.
//               </p>
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Category Filter */}
//       <section className="py-8 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <AnimatedSection>
//             <div className="flex flex-wrap justify-center gap-4">
//               {projectCategories.map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => setSelectedCategory(category)}
//                   className={`px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 ${
//                     selectedCategory === category
//                       ? 'bg-[#005369] text-white shadow-lg scale-105'
//                       : 'bg-white text-[#005369] hover:bg-[#005369] hover:text-white shadow-md'
//                   }`}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Projects Grid */}
//       <section className="py-12 pb-20 bg-gray-50">
//         <div className="container mx-auto px-6">
//           {filteredProjects.length === 0 ? (
//             <div className="text-center py-20">
//               <p className="text-xl text-gray-600">No projects found in this category.</p>
//             </div>
//           ) : (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {filteredProjects.map((project, idx) => (
//                 <AnimatedSection key={project.id} delay={idx * 100}>
//                   <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
//                     <div className="relative h-64 overflow-hidden">
//                       <Image
//                         src={project.image}
//                         alt={project.title}
//                         fill
//                         className="object-cover transition-transform duration-700 group-hover:scale-110"
//                       />
//                       <div className="absolute top-4 right-4">
//                         <span className="bg-[#005369] text-white px-4 py-2 rounded-full text-sm font-medium">
//                           {project.category}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="p-6">
//                       <h3 className="text-2xl font-bold text-[#005369] mb-3 group-hover:text-[#c2b790] transition-colors">
//                         {project.title}
//                       </h3>
//                       <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
//                       <div className="flex justify-between items-center text-sm text-gray-500">
//                         <span className="flex items-center">
//                           <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                           </svg>
//                           {project.location}
//                         </span>
//                         <span>{project.year}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </AnimatedSection>
//               ))}
//             </div>
//           )}

//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <AnimatedSection>
//             <div className="max-w-4xl mx-auto text-center">
//               <h2 className="text-4xl md:text-5xl font-bold text-[#005369] mb-6">
//                 Let&apos;s Create Something Amazing Together
//               </h2>
//               <p className="text-xl text-gray-700 mb-8">
//                 Ready to start your next project? Contact us for a consultation.
//               </p>
//               <a
//                 href="/contact"
//                 className="inline-flex items-center gap-3 rounded-lg border-2 border-[#005369] px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-semibold text-[#005369] transition-all hover:bg-[#005369] hover:text-white hover:scale-105"
//               >
//                 Contact Us
//               </a>
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>
//     </main>
//   );
// }

// "use client";

// import { useState } from "react";
// import PageBanner from "@/utils/PageBanner";
// import AnimatedSection from "@/utils/Animations";
// import Image from "next/image";
// import { X } from "lucide-react"; // for close icon

// // Template project data – enhanced with gallery images
// const projectCategories = [
//   "All",
//   "Residential",
//   "Commercial",
//   "Hospitality",
//   "Retail",
// ];

// const projects = [
//   {
//     id: 1,
//     title: "Luxury Villa Interior - Dubai",
//     category: "Residential",
//     image: "https://images.unsplash.com/photo-1584973547886-92c625508e24",
//     gallery: [
//       "https://images.unsplash.com/photo-1600210492493-0946911123ea",
//       "https://images.unsplash.com/photo-1618221195710-dd2dabb60b29",
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
//       "https://images.unsplash.com/photo-1600565193348-f74bd5a51e3e",
//       "https://images.unsplash.com/photo-1615529182904-1d11d25903d2",
//     ],
//     description:
//       "Complete interior fit-out for a luxury villa including living spaces, bedrooms, kitchen, and outdoor areas with premium finishes and smart home integration.",
//     year: "2024",
//     location: "Dubai, UAE",
//   },
//   {
//     id: 2,
//     title: "Modern Office Space",
//     category: "Commercial",
//     image: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg",
//     gallery: [
//       "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
//       "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg",
//       "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
//       "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
//     ],
//     description:
//       "Corporate office interior with modern design, meeting rooms, collaborative workspaces, ergonomic furniture, and advanced AV systems.",
//     year: "2024",
//     location: "Dubai, UAE",
//   },
//   {
//     id: 3,
//     title: "Premium Hotel Lobby",
//     category: "Hospitality",
//     image:
//       "https://images.pexels.com/photos/33803739/pexels-photo-33803739.jpeg",
//     gallery: [
//       "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg",
//       "https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg",
//       "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg",
//       "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg",
//       "https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg",
//     ],
//     description:
//       "Elegant hotel lobby design featuring custom furniture, dramatic lighting, premium materials, and welcoming ambiance.",
//     year: "2023",
//     location: "Abu Dhabi, UAE",
//   },
//   // ... you can add gallery arrays to other projects similarly
//   // For the remaining projects, you can use placeholder or real images
//   {
//     id: 4,
//     title: "Contemporary Kitchen Design",
//     category: "Residential",
//     image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
//     gallery: [
//       "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
//       "https://images.pexels.com/photos/4194823/pexels-photo-4194823.jpeg",
//       "https://images.pexels.com/photos/4194821/pexels-photo-4194821.jpeg",
//     ],
//     description:
//       "Modern kitchen with custom cabinetry, premium appliances, innovative storage solutions, and elegant stone surfaces.",
//     year: "2024",
//     location: "Sharjah, UAE",
//   },
//   // Add gallery to others as needed...
// ];

// export default function ProjectsPage() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedProject, setSelectedProject] = useState(null);

//   const filteredProjects =
//     selectedCategory === "All"
//       ? projects
//       : projects.filter((p) => p.category === selectedCategory);

//   const openModal = (project) => {
//     setSelectedProject(project);
//   };

//   const closeModal = () => {
//     setSelectedProject(null);
//   };

//   return (
//     <main>
//       <PageBanner
//         title="Our Projects"
//         subtitle="Showcasing excellence in interior fit-out across UAE"
//         image="https://images.pexels.com/photos/18435276/pexels-photo-18435276.jpeg"
//       />

//       {/* Introduction */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <AnimatedSection>
//             <div className="max-w-4xl mx-auto text-center">
//               <h2 className="text-3xl md:text-4xl font-bold text-[#005369] mb-6">
//                 Portfolio of Excellence
//               </h2>
//               <div className="w-32 h-1 bg-[#c2b790] mt-3 mx-auto" />
//               <p className="text-lg text-gray-700 mt-3 leading-relaxed">
//                 Explore our diverse portfolio of successfully completed
//                 projects. Each project reflects our commitment to quality,
//                 innovation, and client satisfaction.
//               </p>
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Category Filter */}
//       <section className="py-8 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <AnimatedSection>
//             <div className="flex flex-wrap justify-center gap-4">
//               {projectCategories.map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => setSelectedCategory(category)}
//                   className={`px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 ${
//                     selectedCategory === category
//                       ? "bg-[#005369] text-white shadow-lg scale-105"
//                       : "bg-white text-[#005369] hover:bg-[#005369] hover:text-white shadow-md"
//                   }`}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Projects Grid */}
//       <section className="py-12 pb-20 bg-gray-50">
//         <div className="container mx-auto px-6">
//           {filteredProjects.length === 0 ? (
//             <div className="text-center py-20">
//               <p className="text-xl text-gray-600">
//                 No projects found in this category.
//               </p>
//             </div>
//           ) : (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredProjects.map((project, idx) => (
//                 <AnimatedSection key={project.id} delay={idx * 100}>
//                   <div
//                     className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
//                     onClick={() => openModal(project)}
//                   >
//                     <div className="relative h-64 overflow-hidden">
//                       <Image
//                         src={project.image}
//                         alt={project.title}
//                         fill
//                         className="object-cover transition-transform duration-700 group-hover:scale-110"
//                       />
//                       <div className="absolute top-4 right-4">
//                         <span className="bg-[#005369] text-white px-4 py-2 rounded-full text-sm font-medium">
//                           {project.category}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="p-6">
//                       <h3 className="text-2xl font-bold text-[#005369] mb-3 group-hover:text-[#c2b790] transition-colors">
//                         {project.title}
//                       </h3>
//                       <p className="text-gray-600 mb-4 line-clamp-2">
//                         {project.description}
//                       </p>
//                       <div className="flex justify-between items-center text-sm text-gray-500">
//                         <span className="flex items-center">
//                           <svg
//                             className="w-4 h-4 mr-2"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                             />
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                             />
//                           </svg>
//                           {project.location}
//                         </span>
//                         <span>{project.year}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </AnimatedSection>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <AnimatedSection>
//             <div className="max-w-4xl mx-auto text-center">
//               <h2 className="text-4xl md:text-5xl font-bold text-[#005369] mb-6">
//                 Let&apos;s Create Something Amazing Together
//               </h2>
//               <p className="text-xl text-gray-700 mb-8">
//                 Ready to start your next project? Contact us for a consultation.
//               </p>
//               <a
//                 href="/contact"
//                 className="inline-flex items-center gap-3 rounded-lg border-2 border-[#005369] px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-semibold text-[#005369] transition-all hover:bg-[#005369] hover:text-white hover:scale-105"
//               >
//                 Contact Us
//               </a>
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Modal */}
//       {selectedProject && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
//           onClick={closeModal}
//         >
//           <div
//             className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close button */}
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full text-gray-700 hover:text-[#005369] transition-colors"
//               aria-label="Close modal"
//             >
//               <X size={24} />
//             </button>

//             {/* Content */}
//             <div className="p-6 sm:p-8 lg:p-10">
//               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#005369] mb-3">
//                 {selectedProject.title}
//               </h2>
//               <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
//                 <span className="flex items-center">
//                   <svg
//                     className="w-5 h-5 mr-2"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                   </svg>
//                   {selectedProject.location}
//                 </span>
//                 <span>Year: {selectedProject.year}</span>
//                 <span className="bg-[#005369]/10 text-[#005369] px-3 py-1 rounded-full text-sm font-medium">
//                   {selectedProject.category}
//                 </span>
//               </div>

//               <p className="text-gray-700 leading-relaxed mb-8 text-lg">
//                 {selectedProject.description}
//               </p>

//               {/* Gallery */}
//               {selectedProject.gallery &&
//                 selectedProject.gallery.length > 0 && (
//                   <div>
//                     <h3 className="text-xl sm:text-2xl font-semibold text-[#005369] mb-5">
//                       Project Gallery
//                     </h3>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//                       {selectedProject.gallery.map((imgSrc, idx) => (
//                         <div
//                           key={idx}
//                           className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
//                         >
//                           <Image
//                             src={imgSrc}
//                             alt={`${selectedProject.title} - image ${idx + 1}`}
//                             fill
//                             className="object-cover hover:scale-105 transition-transform duration-500"
//                           />
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }

"use client";

import { useState } from "react";
import PageBanner from "@/utils/PageBanner";
import AnimatedSection from "@/utils/Animations";
import Image from "next/image";
import { X } from "lucide-react";

// Template project data – enhanced with gallery images
const projects = [
  {
    id: 1,
    title: "Grand Dine Restaurant",
    category: "Commercial",
    image: "/images/projects/grand-dine/grand-dine-one.png",
    gallery: [
      "/images/projects/grand-dine/grand-dine-one.png",
      "/images/projects/grand-dine/grand-dine-two.png",
      "/images/projects/grand-dine/grand-dine-three.png",
      "/images/projects/grand-dine/grand-dine-four.png",
      "/images/projects/grand-dine/grand-dine-five.png",
      "/images/projects/grand-dine/grand-dine.png",
    ],
    description:
      "Grand Dine Restaurant, Deira features a contemporary interior crafted to create a warm and inviting dining atmosphere. Our team delivered a modern fit-out highlighted by elegant ceiling elements with suspended greenery, soft ambient lighting, premium finishes, and thoughtfully arranged seating—combining aesthetics with functionality to enhance the overall guest experience.",
    year: "2025",
    location: "Al Muteena - Dubai, UAE",
  },
  {
    id: 2,
    title: "Life Spring Pharmacy",
    category: "Commercial",
    image: "/images/projects/pharmacy/lifespring-four.png",
    gallery: [
      "/images/projects/pharmacy/lifespring-four.png",
      "/images/projects/pharmacy/lifespring-one.png",
      "/images/projects/pharmacy/lifespring-two.png",
      "/images/projects/pharmacy/lifespring-three.png",
    ],
    description:
      "Life Spring Pharmacy is a modern retail healthcare space designed and delivered by our team with a focus on functionality, comfort, and visual appeal. The project features a clean, well-organized layout, warm wood finishes, bright ambient lighting, and strategically arranged product displays to enhance customer convenience and create a welcoming shopping experience.",
    year: "2025",
    location: "Nesto Mall, Fujairah - UAE",
  },

  {
    id: 3,
    title: "Alquoz Office Space",
    category: "Commercial",
    image: "/images/projects/office-project/alquoz-four.png",
    gallery: [
      "/images/projects/office-project/alquoz-four.png",
      "/images/projects/office-project/alquoz-one.png",
      "/images/projects/office-project/alquoz-two.png",
      "/images/projects/office-project/alquoz-three.png",
      "/images/projects/office-project/alquoz-five.png",
    ],
    description:
      "Office Space, Al Quoz is a contemporary workspace thoughtfully designed to promote productivity and collaboration. Our team delivered a modern fit-out featuring an open-plan layout, custom workstations, elegant glass partitions, and distinctive ceiling lighting that adds a dynamic visual element. The space balances functionality with refined aesthetics, creating a professional and inspiring environment for everyday operations.",
    year: "2025",
    location: "Dubai, UAE",
  },
  {
    id: 4,
    title: "Al Khayam Pharmacy",
    category: "Commercial",
    image: "/images/projects/AlKhayamPharmacy/Khayam-three.png",
    gallery: [
      "/images/projects/AlKhayamPharmacy/Khayam-three.png",
      "/images/projects/AlKhayamPharmacy/Khayam-one.png",
      "/images/projects/AlKhayamPharmacy/Khayam-two.png",
      "/images/projects/AlKhayamPharmacy/Khayam-four.png",
      "/images/projects/AlKhayamPharmacy/Khayam-five.png",
    ],
    description:
      "Al Khayam Pharmacy is a professionally designed healthcare retail space completed by our team, combining modern aesthetics with practical functionality. The project features a well-structured layout, efficient shelving systems, and bright lighting to ensure smooth customer flow while creating a clean, welcoming, and accessible environment.",
    year: "2024",
    location: "Dubai, UAE",
  },
  {
    id: 5,
    title: "Premium Hotel",
    category: "Residential",
    image: "/images/projects/residential/residential-one.png",
    gallery: [
      "/images/projects/residential/residential-one.png",
      "/images/projects/residential/residential-two.png",
      "/images/projects/residential/residential-three.png",
      "/images/projects/residential/residential-four.png",
      "/images/projects/residential/residential-five.png",
      "/images/projects/residential/residential-six.png",
      "/images/projects/residential/residential-seven.png",
      "/images/projects/residential/residential-eight.png",
    ],
    description:
      "Hotel Interior Project showcases a refined blend of comfort and elegance, thoughtfully designed to create a warm and inviting guest experience. Our team delivered a sophisticated space featuring soft color palettes, custom furnishings, ambient lighting, and premium finishes—ensuring both aesthetic appeal and functional excellence for modern hospitality environments.",
    year: "2024",
    location: "Dubai, UAE",
  },
  {
    id: 6,
    title: "Contemporary Kitchen Design",
    category: "Residential",
    image: "/images/projects/residential-project/residential-three.png",
    gallery: [
      "/images/projects/residential-project/residential-one.png",
      "/images/projects/residential-project/residential-two.png",
      "/images/projects/residential-project/residential-three.png",
      "/images/projects/residential-project/residential-four.png",
    ],
    description:
      "Poolside Leisure Project is a thoughtfully executed space designed to enhance relaxation and safety while maintaining a modern aesthetic. Our team delivered a clean and elegant environment featuring durable flooring, secure glass railings, ambient lighting, and landscaped elements—creating a serene setting ideal for comfort, leisure, and premium hospitality experiences.",
    year: "2024",
    location: "Dubai, UAE",
  },
  {
    id: 7,
    title: "Spectra International",
    category: "Commercial",
    image: "/images/projects/spectra/spectra-four.png",
    gallery: [
      "/images/projects/spectra/spectra-four.png",
      "/images/projects/spectra/spectra-one.png",
      "/images/projects/spectra/spectra-two.png",
      "/images/projects/spectra/spectra-three.png",
      "/images/projects/spectra/spectra-five.png",
      "/images/projects/spectra/spectra-six.png",
    ],
    description:
      "Spectra International Office is a modern workspace expertly designed to support productivity and professionalism. Our team delivered a sleek fit-out featuring ergonomic workstations, glass-partitioned cabins for privacy, and refined lighting—creating a balanced environment that promotes efficiency, collaboration, and everyday comfort.",
    year: "2025",
    location: "Dubai, UAE",
  },

  {
    id: 8,
    title: "Vincy Ristorante",
    category: "Commercial",
    image: "/images/projects/vincy-ristorante/Vincy-three.png",
    gallery: [
      "/images/projects/vincy-ristorante/Vincy-one.png",
      "/images/projects/vincy-ristorante/Vincy-two.png",
      "/images/projects/vincy-ristorante/Vincy-three.png",
      "/images/projects/vincy-ristorante/Vincy-four.png",
      "/images/projects/vincy-ristorante/Vincy-five.png",
    ],
    description:
      "Vinci Restaurant is a stylish dining space brought to life by our expert fit-out solutions, blending modern design with functional elegance. The project features a well-planned layout, premium finishes, ambient lighting, and comfortable seating—creating a vibrant and welcoming atmosphere that enhances the overall guest experience.",
    year: "2024",
    location: "Dubai, UAE",
  },
  {
    id: 9,
    title: "Al Jasim Air Conditioning",
    category: "Commercial",
    image: "/images/projects/al-jasim-air-conditioning/commercial-three.png",
    gallery: [
      "/images/projects/al-jasim-air-conditioning/commercial-three.png",
      "/images/projects/al-jasim-air-conditioning/commercial-one.png",
      "/images/projects/al-jasim-air-conditioning/commercial-four.png",
      "/images/projects/al-jasim-air-conditioning/commercial-five.png",
    ],
    description:
      "Al Jasim Air Conditioning project reflects our commitment to delivering efficient and professional commercial spaces. Our team executed a functional fit-out with a clean layout, durable finishes, and well-organized work areas—creating an environment that supports smooth operations while maintaining a modern and professional appearance.",
    year: "2024",
    location: "Fujairah, UAE",
  },

  {
    id: 10,
    title: "Mosque",
    category: "Commercial",
    image: "/images/projects/mosque/mosque-two.png",
    gallery: [
      "/images/projects/mosque/mosque-one.png",
      "/images/projects/mosque/mosque-two.png",
      "/images/projects/mosque/mosque-three.png",
      "/images/projects/mosque/mosque-four.png",
    ],
    description:
      "Mosque Project reflects our dedication to craftsmanship and architectural excellence, delivering a serene and spiritually uplifting environment. The project features intricate detailing, elegant chandeliers, high ceilings, and refined finishes—carefully designed to create a peaceful atmosphere that enhances the prayer experience while honoring traditional aesthetics.",
    year: "2024",
    location: "Dubai, UAE",
  },
  {
    id: 11,
    title: "Villa",
    category: "Residential",
    image: "/images/projects/project/villa-one.png",
    gallery: [
      "/images/projects/project/villa-one.png",
      "/images/projects/project/villa-two.png",
      "/images/projects/project/villa-three.png",
      "/images/projects/project/villa-four.png",
      "/images/projects/project/villa-five.png",
      "/images/projects/project/villa-six.png",
    ],
    description:
      "Luxury Villa Interior showcases a perfect blend of elegance and comfort, designed to create a sophisticated living experience. Our team delivered a modern residential fit-out featuring premium finishes, soft ambient lighting, stylish furnishings, and a thoughtfully planned layout—resulting in a warm, inviting space ideal for contemporary living.",
    year: "2024",
    location: "Dubai, UAE",
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <main>
      <PageBanner
        title="Our Projects"
        subtitle="Showcasing excellence in interior fit-out across UAE"
        image="/images/projects-banner.png"
      />

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#005369] mb-6">
                Portfolio of Excellence
              </h2>
              <div className="w-32 h-1 bg-[#c2b790] mt-3 mx-auto" />
              <p className="text-lg text-gray-700 mt-3 leading-relaxed">
                Explore our diverse portfolio of successfully completed
                projects. Each project reflects our commitment to quality,
                innovation, and client satisfaction.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid – now always shows ALL projects */}
      <section className="py-12 pb-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <AnimatedSection key={project.id} delay={idx * 100}>
                <div
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                  onClick={() => openModal(project)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-[#005369] text-white px-4 py-2 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#005369] mb-3 group-hover:text-[#c2b790] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {project.location}
                      </span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#005369] mb-6">
                Let&apos;s Create Something Amazing Together
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Ready to start your next project? Contact us for a consultation.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-lg border-2 border-[#005369] px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-semibold text-[#005369] transition-all hover:bg-[#005369] hover:text-white hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Modal – remains unchanged */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full text-gray-700 hover:text-[#005369] transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#005369] mb-3">
                {selectedProject.title}
              </h2>
              <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
                <span className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {selectedProject.location}
                </span>
                <span>Year: {selectedProject.year}</span>
                <span className="bg-[#005369]/10 text-[#005369] px-3 py-1 rounded-full text-sm font-medium">
                  {selectedProject.category}
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                {selectedProject.description}
              </p>

              {selectedProject.gallery &&
                selectedProject.gallery.length > 0 && (
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#005369] mb-5">
                      Project Gallery
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      {selectedProject.gallery.map((imgSrc, idx) => (
                        <div
                          key={idx}
                          className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                        >
                          <Image
                            src={imgSrc}
                            alt={`${selectedProject.title} - image ${idx + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}