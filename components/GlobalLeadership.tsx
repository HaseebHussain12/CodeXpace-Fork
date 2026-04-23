"use client";
import React, { useState, useEffect, useRef } from "react";

const slides = [
  { title: "Meenam Afzal", text: "CEO & Founder", image: "Meenam-afzal.jpeg" },
  { title: "Abdullah", text: "Chief Systems Architect", image: "Abdulllah.jpeg" },
  { title: "Ali Reyan", text: "Chief Technology Officer", image: "ali-rehan.jpeg" },
  { title: "Ans Mustafa", text: "Senior Backend Developer", image: "ans.png" },
  { title: "Asad Ali", text: "Chief Sales Officer", image: "Asad-ali.jpeg" },
  { title: "Talha Zahid", text: "Chief Operational Officer", image: "Talha-Zahid (2).jpeg" }
];

function GlobalLeadership() {
  const [current, setCurrent] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const GAP = 24;

  // precise resize handling
  useEffect(() => {
    const updateLayout = () => {
      let newCardsToShow = 3;
      if (window.innerWidth < 640) {
        newCardsToShow = 1;
      } else if (window.innerWidth < 1024) {
        newCardsToShow = 2;
      }

      setCardsToShow(newCardsToShow);

      // Ensure we don't end up on an empty space when resizing up
      setCurrent(prev => {
        const maxIndex = slides.length - newCardsToShow;
        return prev > maxIndex ? Math.max(0, maxIndex) : prev;
      });

      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // Update container width on initial mount if ref is ready
  useEffect(() => {
    if (containerRef.current && containerWidth === 0) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, [containerWidth]);

  const nextSlide = () => {
    if (current < slides.length - cardsToShow) {
      setCurrent(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(prev => prev - 1);
    }
  };

  const getTranslateX = () => {
    if (containerWidth === 0) return 0;
    const cardWidth = (containerWidth - GAP * (cardsToShow - 1)) / cardsToShow;
    return -(cardWidth + GAP) * current;
  };

  return (
    <section className="relative w-full py-16 bg-black overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-4 md:px-12">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Our Global{" "}
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
            Leadership
          </span>
        </h2>

        {/* SLIDER */}
        <div className="overflow-hidden" ref={containerRef}>
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(${getTranslateX()}px)`
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="bg-[#111] rounded-xl overflow-hidden border border-red-500/20 flex-shrink-0 group"
                style={{
                  width: `calc((100% - ${(cardsToShow - 1) * GAP}px) / ${cardsToShow})`
                }}
              >

                <div className="relative w-full h-[380px] sm:h-[380px] lg:h-[400px] overflow-hidden bg-black/20">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover object-[center_top]"
                  />
                </div>

                <div className="p-5 md:p-6 text-center sm:text-left flex flex-col items-center sm:items-start">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {slide.title}
                  </h3>
                  <p className="text-red-400 font-medium text-sm md:text-base border-t border-red-500/20 pt-2 inline-block sm:border-none sm:pt-0">
                    {slide.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ARROWS */}
        <button
          onClick={prevSlide}
          disabled={current === 0}
          className={`
            absolute 
            left-0 md:left-2 
            top-1/2 -translate-y-1/2 
            bg-black/60 backdrop-blur-md border border-red-500/40 
            text-white p-2 md:p-3 rounded-full z-10 transition-all
            ${current === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-red-500/20 hover:text-red-400 hover:scale-110 cursor-pointer'}
          `}
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>

        <button
          onClick={nextSlide}
          disabled={current >= slides.length - cardsToShow}
          className={`
            absolute 
            right-0 md:right-2 
            top-1/2 -translate-y-1/2 
            bg-black/60 backdrop-blur-md border border-red-500/40 
            text-white p-2 md:p-3 rounded-full z-10 transition-all
            ${current >= slides.length - cardsToShow ? 'opacity-30 cursor-not-allowed' : 'hover:bg-red-500/20 hover:text-red-400 hover:scale-110 cursor-pointer'}
          `}
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>

      </div>
    </section>
  );
}

export default GlobalLeadership;