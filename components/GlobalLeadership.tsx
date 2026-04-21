"use client";
import React, { useState, useEffect } from "react";

const slides = [
  {
    title: "Meenam Afzal",
    text: "CEO & Founder",
    image: "Meenam-afzal.jpeg"
  },
  {
    title: "Abdullah",
    text: "Chief Systems Architect",
    image: "Abdulllah.jpeg"
  },
  {
    title: "Ali Reyan",
    text: "Cheif Technology officer",
    image: "ali-rehan.jpeg"
  },
  {
    title: "Ans",
    text: "Senior Backend developer",
    image: "ans.png"
  },
  {
    title: "Asad Ali",
    text: "Chief Sales Officer",
    image: "Asad-ali.jpeg"
  },
  {
    title: "Talha Zahid",
    text: "Chief Operational Officer",
    image: "Talha-Zahid.jpeg"
  }
];

function GlobalLeadership() {
  const [current, setCurrent] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // responsive cards
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const nextSlide = () => {
    if (current < slides.length - cardsToShow) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <section className="relative w-full py-16 bg-black overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Global{" "}
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
            LeaderShip
          </span>
        </h2>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${current * (100 / cardsToShow)}%)`
            }}
          >
            {slides.map((slide, index) => (
              <div
              key={index}
              className="bg-[#111] rounded-xl overflow-hidden border border-red-500/20"
              style={{ minWidth: `calc((100% - ${(cardsToShow - 1) * 30}px) / ${cardsToShow})` }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[400px] object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {slide.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {slide.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-[-10px] md:left-[-50px] top-1/2 -translate-y-1/2 bg-red-500/10 border border-red-500/40 text-white hover:text-red-400 disabled:opacity-30 p-2 md:p-3 rounded-full"
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-[-50px] top-1/2 -translate-y-1/2 bg-red-500/10 border border-red-500/40 text-white hover:text-red-400 disabled:opacity-30 p-2 md:p-3 rounded-full"
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>

      </div>
    </section>
  );
}

export default GlobalLeadership;