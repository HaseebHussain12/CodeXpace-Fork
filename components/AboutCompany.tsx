"use client";
import { useEffect, useRef, useState } from "react";

const benefits = [
  "Proven Track Record of Delivering Results",
  "Flexible Engagement Models & Rapid Onboarding",
  "Expertise in AI, Blockchain, Cloud, and Quality Assurance",
  "Clear, Transparent Pricing with No Hidden Costs",
  "Full-End Ownership of Projects from Start to Finish",
];

export default function AboutCompany() {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  const [projects, setProjects] = useState(0);
  const [countries, setCountries] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCount) return;

    let p = 0,
      c = 0,
      y = 0;

    const interval = setInterval(() => {
      if (p < 300) {
        p += 5;
        setProjects(p);
      }
      if (c < 23) {
        c += 1;
        setCountries(c);
      }
      if (y < 8) {
        y += 1;
        setYears(y);
      }

      if (p >= 300 && c >= 23 && y >= 8) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [startCount]);

  return (
    <section ref={sectionRef} className="py-14 md:py-20 lg:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-14 lg:mb-16">
          Why Partner with{" "}
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
            CodeXpace
          </span>
          ?
        </h2>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-center">

          {/* Benefits */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* Counters */}
          <div className="flex flex-wrap justify-center lg:justify-evenly gap-8 sm:gap-10">

            <div className="flex flex-col items-center">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 mb-2">
                {projects}+
              </h3>
              <p className="text-gray-300 text-sm sm:text-base text-center">
                Successful Projects
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 mb-2">
                {countries}+
              </h3>
              <p className="text-gray-300 text-sm sm:text-base text-center">
                Countries Supported
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 mb-2">
                {years}+
              </h3>
              <p className="text-gray-300 text-sm sm:text-base text-center">
                Years of Enablement Experience
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}