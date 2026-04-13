"use client";

import { Black_And_White_Picture } from "next/font/google";
import { useState, useEffect } from "react";

export default function Hero() {
  const words = [
    "Vision & Code",
    "Information",
    "Automation",
    "Infrastructure"
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const current = words[currentWordIndex];

      if (!isDeleting) {
        // Typing
        if (currentText.length < current.length) {
          setCurrentText(current.slice(0, currentText.length + 1));
          setTypingSpeed(100);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(current.slice(0, currentText.length - 1));
          setTypingSpeed(50);
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(100);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed]);

  return (
    <section className="relative min-h-screen flex items-center justify-center" style={{ overflow: 'hidden', zIndex: 0 }}>
      {/* Premium background with visible gradient */}
      <div className="absolute inset-0 bg-black">
        <video autoPlay loop muted playsInline 
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0, opacity: 0.9 }}
        >
          <source src="./video.mp4" type="video/mp4" />
        </video>

        <div className="dark"
         style={{
          background: "rgba(0, 0, 0, 0.42)",
          height: "100%",
          width: "100%",
          position: "absolute",
        }}      
        ></div>

        {/* Base gradient - visible but subtle (around 2%) */}
        {/* <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0, 0, 0, 1) 0%, rgba(20, 0, 0, 0.98) 30%, rgba(10, 0, 0, 0.99) 60%, rgba(0, 0, 0, 1) 100%)"
          }}
        ></div> */}

        {/* Radial gradient for depth */}
        {/* <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(20, 20, 20, 0.4) 0%, rgba(0, 0, 0, 0.98) 60%)"
          }}
        ></div> */}

        {/* Red gradient touch - visible (around 2%) */}
        {/* <div
          className="absolute bottom-0 right-0 w-1/2 h-1/2"
          style={{
            background:
              "radial-gradient(ellipse at bottom right, rgba(127, 29, 29, 0.15) 0%, transparent 50%)"
          }}
        ></div> */}

        {/* Subtle texture/grain overlay */}
        {/* <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px"
          }}
        ></div> */}

        {/* Red glow effects - visible but subtle */}
        {/* <div className="absolute inset-0">
          <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[150px]"></div>
        </div> */}

        {/* Prominent dashed curved line pattern in bottom right */}
        {/* <div className="absolute bottom-0 right-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-40">
          <svg viewBox="0 0 600 600" className="w-full h-full">
            <path
              d="M 50 550 Q 300 300, 550 550"
              stroke="#dc2626"
              strokeWidth="3"
              fill="none"
              strokeDasharray="12,12"
            />
            <path
              d="M 100 500 Q 350 200, 600 500"
              stroke="#dc2626"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray="12,12"
            />
            <path
              d="M 150 450 Q 400 100, 650 450"
              stroke="#dc2626"
              strokeWidth="2"
              fill="none"
              strokeDasharray="12,12"
            />
          </svg>
        </div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight flex items-baseline justify-center flex-wrap gap-3 md:gap-4 lg:gap-5">
          <span className="text-white">Bridging.</span>
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent inline-block min-w-[150px] md:min-w-[200px] lg:min-w-[250px] text-left">
            {currentText}
            <span className="inline-block w-[2px] h-[1.2em] bg-red-500 ml-1 align-middle typing-cursor"></span>
          </span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-sans leading-relaxed">
          Fast, intelligent custom software solutions, powered by AI and
          automation, tailored to meet your unique needs.
        </p>
        <a href="/#contact-form" 
          className="inline-flex items-center space-x-2 
          mr-2 max-[423px]:mb-3 
          bg-transparent border border-white px-6 py-3 
          text-white rounded-lg font-medium transition-all duration-300 ease-out
          hover:bg-white hover:text-red-500 hover:border-red-500
          hover:shadow-lg hover:shadow-red-500/20"
        >
          <span>Get in Touch</span>
        </a>
        <a
          href="#latest-projects"
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('latest-projects');
            if (element) {
              const headerOffset = 80; // Header height + some padding
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          }}
          className="inline-flex items-center space-x-2 bg-red-500 ml-2 hover:bg-transparent border border-white text-white  hover:border-red-500 px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all transform uppercase tracking-wide font-sans"
        >
          <span>See What We've Built</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
        
      </div>
    </section>
  );
}
