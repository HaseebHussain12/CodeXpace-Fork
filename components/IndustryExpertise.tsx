"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Import industry images
import educationImage from "../assets/industry/education.png";
import bankingImage from "../assets/industry/Banking.png";
import ecommerceImage from "../assets/industry/E-commerce.png";
import healthcareImage from "../assets/industry/healthcare.png";
import travelImage from "../assets/industry/Travel.png";

const industries = [
  {
    number: "01",
    title: "Education",
    description:
      "We build comprehensive learning management systems, school classroom platforms, and digital assessment tools, seamlessly integrating with ParentSquare, Canvas, Google Classroom, and more.",
    image: educationImage
  },

  {
    number: "02",
    title: "Fintech & Banking",
    description:
      "We specialize in digital banking and fintech solutions, including mobile banking apps, secure payment gateways, blockchain platforms, lending solutions, and custom financial software designed to drive innovation and streamline financial services.",
    image: bankingImage
  },
  {
    number: "03",
    title: "Retail & E-commerce",
    description:
      "From e-commerce platforms to inventory management, CRM, ERP systems, and AI-powered communication tools, we enable seamless and modern retail operations.",
    image: ecommerceImage
  },
  {
    number: "04",
    title: "Healthcare",
    description:
      "We develop advanced healthcare software solutions, including EHR/EMR systems, telemedicine applications, and patient engagement platforms. Our technology enhances healthcare delivery, streamlines hospital operations, and improves patient outcomes.",
    image: healthcareImage
  },

  {
    number: "05",
    title: "Travel & Hospitality",
    description:
      "We deliver custom travel and hospitality software solutions, including hotel management systems, booking engines, and travel apps with seamless GDS, payment gateway, and airline ticketing integrations. Our platforms streamline operations and enhance traveler experiences.",
    image: travelImage
  }
];

export default function IndustryExpertise() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((item, index) => {
      if (!item) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => {
                // Only update if not already visible to prevent unnecessary re-renders
                if (prev.has(index)) return prev;
                return new Set([...prev, index]);
              });
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: "0px 0px -100px 0px"
        }
      );

      observer.observe(item);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="pt-6 pb-20 bg-black relative" style={{ overflowX: 'hidden', overflowY: 'visible' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
          Where We Exceed{" "}
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
            Customers' Expectations
          </span>
        </h2>
        <div className="space-y-20">
          {industries.map((industry, index) => {
            const isVisible = visibleItems.has(index);
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                ref={(el: any) => (itemRefs.current[index] = el)}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="relative">
                    <div
                      className={`absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl z-[1] shadow-lg shadow-red-500/30 transition-all duration-700 ${isVisible
                        ? "opacity-100 scale-100 rotate-0"
                        : "opacity-0 scale-0 rotate-180"
                        }`}
                    >
                      {industry.number}
                    </div>
                    <div
                      className={`overflow-hidden aspect-video relative transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"
                        }`}
                      style={{
                        width: "100%",
                        maxWidth: "480px", // custom width
                        // height: "290px" // custom height - increased
                        // objectFit: "cover"
                      }
                      }
                    >
                      <Image
                        src={industry.image}
                        alt={industry.title}
                        // fill
                        // className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                        style={{
                          width: "480px", // custom width
                          height: "290px", // custom height - increased
                          objectFit: "cover"
                        }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0.8) 90%, rgba(0,0,0,1) 100%)"
                        }}
                      ></div>
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 15%, transparent 85%, rgba(0,0,0,0.9) 100%)"
                        }}
                      ></div>
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to left, rgba(0,0,0,0.9) 0%, transparent 15%, transparent 85%, rgba(0,0,0,0.9) 100%)"
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex-1 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  style={{
                    minHeight: "200px" // Prevent layout shift
                  }}
                >
                  <h3 className="text-3xl font-bold text-white mb-5 px-4 py-2 pl-0 w-fit max-[580px]:text-[25px]">
                    {industry.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed max-[580px]:text-[15px]">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
