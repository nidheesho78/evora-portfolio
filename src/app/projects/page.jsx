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

"use client";

import { useState } from "react";
import PageBanner from "@/utils/PageBanner";
import AnimatedSection from "@/utils/Animations";
import Image from "next/image";
import { X } from "lucide-react"; // for close icon

// Template project data – enhanced with gallery images
const projectCategories = [
  "All",
  "Residential",
  "Commercial",
  "Hospitality",
  "Retail",
];

const projects = [
  {
    id: 1,
    title: "Luxury Villa Interior - Dubai",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1584973547886-92c625508e24",
    gallery: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea",
      "https://images.unsplash.com/photo-1618221195710-dd2dabb60b29",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600565193348-f74bd5a51e3e",
      "https://images.unsplash.com/photo-1615529182904-1d11d25903d2",
    ],
    description:
      "Complete interior fit-out for a luxury villa including living spaces, bedrooms, kitchen, and outdoor areas with premium finishes and smart home integration.",
    year: "2024",
    location: "Dubai, UAE",
  },
  {
    id: 2,
    title: "Modern Office Space",
    category: "Commercial",
    image: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg",
    gallery: [
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg",
      "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    ],
    description:
      "Corporate office interior with modern design, meeting rooms, collaborative workspaces, ergonomic furniture, and advanced AV systems.",
    year: "2024",
    location: "Dubai, UAE",
  },
  {
    id: 3,
    title: "Premium Hotel Lobby",
    category: "Hospitality",
    image:
      "https://images.pexels.com/photos/33803739/pexels-photo-33803739.jpeg",
    gallery: [
      "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg",
      "https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg",
      "https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg",
    ],
    description:
      "Elegant hotel lobby design featuring custom furniture, dramatic lighting, premium materials, and welcoming ambiance.",
    year: "2023",
    location: "Abu Dhabi, UAE",
  },
  // ... you can add gallery arrays to other projects similarly
  // For the remaining projects, you can use placeholder or real images
  {
    id: 4,
    title: "Contemporary Kitchen Design",
    category: "Residential",
    image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
    gallery: [
      "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
      "https://images.pexels.com/photos/4194823/pexels-photo-4194823.jpeg",
      "https://images.pexels.com/photos/4194821/pexels-photo-4194821.jpeg",
    ],
    description:
      "Modern kitchen with custom cabinetry, premium appliances, innovative storage solutions, and elegant stone surfaces.",
    year: "2024",
    location: "Sharjah, UAE",
  },
  // Add gallery to others as needed...
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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
        image="https://images.pexels.com/photos/18435276/pexels-photo-18435276.jpeg"
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

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-4">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-[#005369] text-white shadow-lg scale-105"
                      : "bg-white text-[#005369] hover:bg-[#005369] hover:text-white shadow-md"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 pb-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                No projects found in this category.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
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
          )}
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

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full text-gray-700 hover:text-[#005369] transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Content */}
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

              {/* Gallery */}
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