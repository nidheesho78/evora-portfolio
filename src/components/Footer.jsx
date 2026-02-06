// "use client";

// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaEnvelope,
//   FaLinkedin,
//   FaYoutube,
//   FaArrowUp,
// } from "react-icons/fa"; // Using F variants to match thin icons
// import { MdEmail } from "react-icons/md";
// import { IoLogoWhatsapp } from "react-icons/io";

// export default function Footer() {
//   return (
//     <footer className="bg-[#005369] text-white relative">
//       <div className="container mx-auto px-4 py-10 md:py-12 lg:py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
//           {/* Column 1: EVORA FUTURE */}
//           <div>
//             <h3 className="text-2xl text-[#c2b790] font-bold mb-4">
//               EVORA FUTURE
//             </h3>
//             <p className="text-gray-200 mb-6">
//               Delivering exceptional interior fit-out and maintenance services
//               across UAE since 2019.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <a
//                 href="https://www.linkedin.com/in/niyasudheen-e-818282358/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white rounded-full p-2 hover:bg-[#0A66C2] transition-colors duration-300"
//               >
//                 <FaLinkedin
//                   size={24}
//                   className="text-[#27164a] hover:text-white transition-colors duration-300"
//                 />
//               </a>

//               <a
//                 href="https://wa.me/00971542004993?text=Hi%20Nidheesh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white rounded-full p-2 hover:bg-[#25D366] transition-colors duration-300"
//               >
//                 <IoLogoWhatsapp
//                   size={24}
//                   className="text-[#27164a] hover:text-white transition-colors duration-300"
//                 />
//               </a>

//               <a
//                 href=""
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white rounded-full p-2 hover:bg-[#1877F2] transition-colors duration-300"
//               >
//                 <FaFacebookF
//                   size={24}
//                   className="text-[#27164a] hover:text-white transition-colors duration-300"
//                 />
//               </a>

//               <a
//                 href="https://www.instagram.com/evora_future?igsh=MTBobjdmN25mZ2c2Yg=="
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white rounded-full p-2 hover:bg-[#E4405F] transition-colors duration-300"
//               >
//                 <FaInstagram
//                   size={24}
//                   className="text-[#27164a] hover:text-white transition-colors duration-300"
//                 />
//               </a>
//             </div>
//           </div>

//           {/* Column 2: QUICK LINKS */}
//           <div>
//             <h3 className="text-xl text-[#c2b790] font-semibold mb-4">
//               QUICK LINKS
//             </h3>
//             <ul className="space-y-3 text-gray-200">
//               <li>
//                 <a href="/" className="hover:text-[#c2b790] transition-colors">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/about"
//                   className="hover:text-[#c2b790]  transition-colors"
//                 >
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/services"
//                   className="hover:text-[#c2b790]  transition-colors"
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/projects"
//                   className="hover:text-[#c2b790]  transition-colors"
//                 >
//                   Projects
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/contact"
//                   className="hover:text-[#c2b790]  transition-colors"
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Column 3: OUR SERVICES */}
//           <div>
//             <h3 className="text-xl text-[#c2b790] font-semibold mb-4">
//               OUR SERVICES
//             </h3>
//             <ul className="space-y-3 text-gray-200">
//               <li>Interior Fit-Out</li>
//               <li>Civil Works</li>
//               <li>MEP Works</li>
//               <li>Joinery Works</li>
//               <li>Painting & Decor</li>
//               <li>Maintenance</li>
//             </ul>
//           </div>

//           {/* Column 4: CONTACT US */}
//           <div>
//             <h3 className="text-xl text-[#c2b790] font-semibold mb-4">
//               CONTACT US
//             </h3>
//             <div className="space-y-4 text-gray-200">
//               <div className="flex items-start gap-3">
//                 <span className="mt-1">📍</span>
//                 <p>Dubai, United Arab Emirates</p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <span>✉️</span>
//                 <a
//                   href="mailto:Email
// hello@evorafuture.com"
//                   className="hover:text-white transition-colors"
//                 >
//                   Email hello@evorafuture.com
//                 </a>
//               </div>
//               <div className="flex items-center gap-3">
//                 <span>📞</span>
//                 <div className="flex flex-col">
//                   <a
//                     href="tel:+971542004993"
//                     className="hover:text-white transition-colors"
//                   >
//                     +971 54 200 4993
//                   </a>
//                   <a
//                     href="tel:+971506596828"
//                     className="hover:text-white transition-colors"
//                   >
//                     +971 52 958 6828
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom copyright */}
//         <div className="mt-10 pt-6 border-t border-gray-600 text-center text-gray-300 text-sm">
//           © 2026 Evora Future Technical Services LLC. All rights reserved.
//         </div>
//       </div>

//       {/* ── Improved Scroll-to-Top Button ── */}
//       {/* <button
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//         className={`
//           absolute bottom-6 right-6 
//           bg-[#c2b790] text-[#005369] 
//           p-4 rounded-full 
//           shadow-lg hover:shadow-xl 
//           hover:bg-[#b3a070] 
//           transition-all duration-300 
//           transform hover:-translate-y-1 
//           focus:outline-none focus:ring-2 focus:ring-[#c2b790]/50
//         `}
//         aria-label="Scroll to top"
//       >
//         <FaArrowUp size={24} className="text-[#005369]" />
//       </button> */}
//     </footer>
//   );
// }



"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaLinkedin,
  FaYoutube,
  FaArrowUp,
  FaPhoneAlt,
} from "react-icons/fa"; // Using F variants to match thin icons
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall, IoLocationSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-[#005369] text-white relative">
      <div className="container mx-auto px-4 py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: EVORA FUTURE */}
          <div>
            <h3 className="text-2xl text-[#c2b790] font-bold mb-4">
              EVORA FUTURE
            </h3>
            <p className="text-gray-200 mb-6">
              Delivering exceptional interior fit-out and maintenance services
              across UAE since 2019.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/niyasudheen-e-818282358/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-2 hover:bg-[#0A66C2] transition-colors duration-300"
              >
                <FaLinkedin
                  size={24}
                  className="text-[#27164a] hover:text-white transition-colors duration-300"
                />
              </a>

              <a
                href="https://wa.me/00971542004993?text=Hi%20Nidheesh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-2 hover:bg-[#25D366] transition-colors duration-300"
              >
                <IoLogoWhatsapp
                  size={24}
                  className="text-[#27164a] hover:text-white transition-colors duration-300"
                />
              </a>

              {/* <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-2 hover:bg-[#1877F2] transition-colors duration-300"
              >
                <FaFacebookF
                  size={24}
                  className="text-[#27164a] hover:text-white transition-colors duration-300"
                />
              </a> */}

              <a
                href="https://www.instagram.com/evora_future?igsh=MTBobjdmN25mZ2c2Yg=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-2 hover:bg-[#E4405F] transition-colors duration-300"
              >
                <FaInstagram
                  size={24}
                  className="text-[#27164a] hover:text-white transition-colors duration-300"
                />
              </a>
            </div>
          </div>

          {/* Column 2: QUICK LINKS */}
          <div>
            <h3 className="text-xl text-[#c2b790] font-semibold mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-3 text-gray-200">
              <li>
                <a href="/" className="hover:text-[#c2b790] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-[#c2b790]  transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-[#c2b790]  transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="hover:text-[#c2b790]  transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-[#c2b790]  transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: OUR SERVICES */}
          <div>
            <h3 className="text-xl text-[#c2b790] font-semibold mb-4">
              OUR SERVICES
            </h3>
            <ul className="space-y-3 text-gray-200">
              <li>Interior Fit-Out</li>
              <li>Civil Works</li>
              <li>MEP Works</li>
              <li>Joinery Works</li>
              <li>Painting & Decor</li>
              <li>Maintenance</li>
            </ul>
          </div>

          {/* Column 4: CONTACT US */}
          <div>
            <h3 className="text-xl md:text-2xl text-[#c2b790] font-semibold mb-5 md:mb-6">
              CONTACT US
            </h3>

            <div className="space-y-5 md:space-y-6 text-gray-200 text-base md:text-lg">
              {/* Address */}
              <div className="flex items-start gap-3">
                <span className="mt-1 text-[#c2b790] text-xl">
                  <IoLocationSharp />
                </span>
                <p>Dubai, United Arab Emirates</p>
              </div>

              {/* Email */}
              <a
                href="mailto:hello@evorafuture.com"
                className="flex items-center gap-3 hover:text-white transition-colors group cursor-pointer"
              >
                <span className="text-[#c2b790] text-xl group-hover:scale-110 transition-transform">
                  <FaEnvelope />
                </span>
                <span>hello@evorafuture.com</span>
              </a>

              {/* Phones */}
              <div className="flex items-start gap-3">
                <span className="mt-1 text-[#c2b790] text-xl">
                  <FaPhoneAlt />
                </span>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+971542004993"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    +971 54 200 4993
                  </a>
                  <a
                    href="tel:+971506596828"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    +971 52 958 6828
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 pt-6 border-t border-gray-600 text-center text-gray-300 text-sm">
          © 2026 Evora Future Technical Services LLC. All rights reserved.
        </div>
      </div>

      {/* ── Improved Scroll-to-Top Button ── */}
      {/* <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`
          absolute bottom-6 right-6 
          bg-[#c2b790] text-[#005369] 
          p-4 rounded-full 
          shadow-lg hover:shadow-xl 
          hover:bg-[#b3a070] 
          transition-all duration-300 
          transform hover:-translate-y-1 
          focus:outline-none focus:ring-2 focus:ring-[#c2b790]/50
        `}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={24} className="text-[#005369]" />
      </button> */}
    </footer>
  );
}
