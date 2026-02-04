// components/ScrollToTop.tsx
"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down > 300px (you can adjust this value)
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Add scroll listener
    window.addEventListener("scroll", toggleVisibility);

    // Clean up on unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`
            fixed bottom-6 right-6 z-50
            bg-[#c2b790] text-[#005369]
            p-4 rounded-full
            shadow-lg hover:shadow-xl
            hover:bg-[#b3a070] active:scale-95
            transition-all duration-300
            transform hover:-translate-y-1
            focus:outline-none focus:ring-2 focus:ring-[#c2b790]/50
          `}
          aria-label="Scroll to top"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </>
  );
}