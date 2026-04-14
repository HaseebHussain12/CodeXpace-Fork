"use client";
import { useEffect, useRef, useState } from "react";

const benefits = [
  'Proven Track Record of Delivering Results',
  'Flexible Engagement Models & Rapid Onboarding',
  'Expertise in AI, Blockchain, Cloud, and Quality Assurance',
  'Clear, Transparent Pricing with No Hidden Costs',
  'Full-End Ownership of Projects from Start to Finish',
];

export default function AboutCompany() {

  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  const [projects, setProjects] = useState(0);
  const [countries, setCountries] = useState(0);
  const [years, setYears] = useState(0);

  // detect when section visible
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

  // counting animation
  useEffect(() => {
    if (!startCount) return;

    let p = 0, c = 0, y = 0;

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
    <section 
      ref={sectionRef}
      className="pt-12 pb-24 bg-black relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Why Partner with{" "}
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
            CodeXpace
          </span>
          ?
        </h2>

        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-14">

          <div className="flex justify-start">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0 mt-2.5"></div>
                  <p className="text-white text-base leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-evenly gap-10">

            <div className="flex flex-col items-center">
              <h3 className="text-[50px] font-bold text-red-500 mb-4">
                {projects}+
              </h3>
              <p className="text-gray-300">Successful Projects</p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-[50px] font-bold text-red-500 mb-4">
                {countries}+
              </h3>
              <p className="text-gray-300">Countries Supported</p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-[50px] font-bold text-red-500 mb-4">
                {years}+
              </h3>
              <p className="text-gray-300">
                Years of Enablement Experience
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}