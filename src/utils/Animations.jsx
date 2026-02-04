'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimatedSection({ children, className = '', animation = 'fadeInUp', delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  const animationClass = {
    fadeInUp: 'animate-on-scroll',
    fadeIn: 'animate-fade-in',
    slideLeft: 'animate-slide-left',
    slideRight: 'animate-slide-right',
  }[animation];

  return (
    <div
      ref={sectionRef}
      className={`${className} ${isVisible ? animationClass : 'opacity-0'}`}
    >
      {children}
    </div>
  );
}