

// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only hide/show after some scroll (avoid hiding at very top)
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down → hide
          setIsVisible(false);
        } else {
          // Scrolling up → show
          setIsVisible(true);
        }
      } else {
        // Always show when near the top
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY <= 0 ? 0 : currentScrollY); // Prevent negative values
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-transform duration-300 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        bg-white/95 backdrop-blur-sm   
        border-b border-gray-200/60
      `}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              width={200}
              height={200}
              alt="Evora Future"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
              <div key={item} className="relative group">
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`
                    text-sm lg:text-lg font-medium uppercase tracking-wider
                    text-gray-800 hover:text-[#005369] transition-colors duration-300
                  `}
                >
                  {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#c2b790] transition-all duration-300 group-hover:w-full" />
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={28} className="text-gray-800" />
            ) : (
              <Menu size={28} className="text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col space-y-4 px-6 py-6">
            {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-base font-medium text-gray-800 hover:text-[#005369] transition-colors py-3 border-b border-gray-100 last:border-b-0"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}