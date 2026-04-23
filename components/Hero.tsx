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
            background: "rgba(0, 0, 0, 0.27)",
            height: "100%",
            width: "100%",
            position: "absolute",
          }}
        ></div>

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
          mr-2 max-[423px]:mb-3 max-[423px]:justify-center max-[423px]:w-[230px] max-[423px]:mr-0   
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
          className="inline-flex items-center space-x-2 bg-red-500  text-white border border-red-500 px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all transform uppercase tracking-wide font-sans"
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
