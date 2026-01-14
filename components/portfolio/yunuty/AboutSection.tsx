"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [textColor, setTextColor] = useState("text-gray-400");

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      
      // Calculate scroll progress based on section position
      // When section top is above viewport center, start transitioning
      const viewportCenter = windowHeight * 0.5;
      const distanceFromTop = sectionTop;
      
      // Normalize: when section is at viewport center or above, text should be white
      // When section is below viewport, text should be gray
      if (distanceFromTop <= viewportCenter && distanceFromTop >= -rect.height) {
        // Section is in viewport, calculate progress
        const progress = Math.max(0, Math.min(1, (viewportCenter - distanceFromTop) / viewportCenter));
        
        if (progress > 0.6) {
          setTextColor("text-white");
        } else if (progress > 0.3) {
          setTextColor("text-gray-200");
        } else {
          setTextColor("text-gray-400");
        }
      } else if (distanceFromTop > viewportCenter) {
        // Section hasn't reached viewport yet
        setTextColor("text-gray-400");
      } else {
        // Section has passed viewport
        setTextColor("text-white");
      }
    };

    // Throttle scroll events
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });
    window.addEventListener("resize", scrollHandler, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", scrollHandler);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[50vh] flex items-center justify-center bg-primary py-12"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Who We Are Header */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <Image
              src="/sub-title-left.svg"
              alt=""
              width={79}
              height={17}
              className="flex-shrink-0"
            />
            <p
              className="text-secondary font-medium tracking-wider uppercase font-poppins"
              style={{ fontSize: "11px" }}
            >
              Who We Are
            </p>
            <Image
              src="/sub-title-right.svg"
              alt=""
              width={79}
              height={17}
              className="flex-shrink-0"
            />
          </div>

          {/* Main Text Block */}
          <p
            ref={textRef}
            className={`font-poppins font-medium mb-6 max-w-3xl mx-auto leading-relaxed transition-colors duration-700 ease-in-out ${textColor}`}
            style={{ fontSize: "24px" }}
          >
            At Yunuak, we help organizations transform operations through digital
            innovation, process engineering, and smart technology. We believe
            every business deserves strategies that drive efficiency, scalability,
            and sustainable growth. Our team blends deep industry expertise with a
            forward-thinking approach to streamline supply chains, optimize
            workflows, and deliver future-ready solutions like our ERP system
            YunutyConnect and mobile applications.
          </p>

          {/* More About Us Button */}
          <button className="inline-flex items-center gap-2 bg-white text-indigo-900 px-6 py-3 rounded-full border border-gray-300 font-poppins font-medium hover:bg-gray-50 transition-all shadow-[0_0_15px_rgba(79,96,250,0.3)]">
            <span style={{ fontSize: "17px" }}>More About Us</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12L10 6M10 6H4M10 6V12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

