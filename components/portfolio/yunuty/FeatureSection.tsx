"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function FeatureSection() {
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % 3);
    }, 4000); // Change card every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const column1 = [
    {
      image: "/col1-1.png",
      title: "Sales Orders",
      description: "Create, manage, and track sales orders efficiently",
    },
    {
      image: "/col1-2.png",
      title: "Invoices",
      description: "Generate and manage invoices with ease",
    },
    {
      image: "/col1-3.png",
      title: "Estimates",
      description: "Create professional estimates for your clients",
    },
  ];

  const column2 = [
    {
      image: "/col2-1.png",
      title: "Products",
      description: "Manage your product catalog and inventory",
    },
    {
      image: "/col2-2.png",
      title: "Inventory",
      description: "Track and manage inventory levels in real-time",
    },
    {
      image: "/col2-3.png",
      title: "Customers",
      description: "Manage customer relationships and data",
    },
  ];

  const column3 = [
    {
      image: "/col3-1.png",
      title: "Reports",
      description: "Generate comprehensive business reports",
    },
    {
      image: "/col3-2.png",
      title: "Analytics",
      description: "Get insights with advanced analytics",
    },
    {
      image: "/col3-3.png",
      title: "Settings",
      description: "Configure and customize your system",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading Section */}
          <div className="text-center mb-16">
            {/* Subtitle Label */}
            <div className="flex items-center justify-center gap-4 mb-4">
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
                Features
              </p>
              <Image
                src="/sub-title-right.svg"
                alt=""
                width={79}
                height={17}
                className="flex-shrink-0"
              />
            </div>

            {/* Main Title */}
            <h2
              className="font-poppins font-medium text-white mb-4 leading-tight"
              style={{ fontSize: "35px" }}
            >
              Our Clients Love Us
            </h2>

            {/* Subtitle */}
            <p
              className="text-gray-300 font-poppins max-w-3xl mx-auto leading-relaxed"
              style={{ fontSize: "14px" }}
            >
              Free Up Your Time to Focus on What Matters Most
            </p>
          </div>

          {/* Main Cards Row */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Card 1 - High-Level Workflow Visibility */}
              <div className="relative rounded-lg overflow-hidden border border-white/20 bg-transparent backdrop-blur-sm hover:bg-primary/10 transition-all p-6">
                {/* Icon and Text Row */}
                <div className="flex items-start gap-6 mb-6">
              {/* Icon */}
                  <div className="flex-shrink-0">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="30"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.3"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.5"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M32 22L36 28L32 34L28 28L32 22Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-white font-poppins font-medium mb-2" style={{ fontSize: "14px" }}>
                High-Level Workflow Visibility
              </h3>
                    <p className="text-gray-300 font-poppins leading-relaxed" style={{ fontSize: "12px" }}>
                With YunutyConnect, clients gain real-time insights into
                inventory and operations across the entire supply chain...
              </p>
                  </div>
                </div>

              {/* Image */}
                <div
                  className="relative w-full bg-transparent"
                  style={{ aspectRatio: "16/10" }}
                >
                <Image
                  src="/card1one.png"
                  alt="High-Level Workflow Visibility"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Card 2 - Mobile-App Access */}
              <div className="relative rounded-lg overflow-hidden border border-white/20 bg-transparent backdrop-blur-sm hover:bg-primary/10 transition-all p-6">
                {/* Icon and Text Row */}
                <div className="flex items-start gap-6 mb-6">
              {/* Icon */}
                  <div className="flex-shrink-0">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <rect
                    x="12"
                    y="12"
                    width="40"
                    height="40"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.3"
                  />
                  <rect
                    x="16"
                    y="16"
                    width="32"
                    height="32"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.5"
                  />
                  <rect
                    x="20"
                    y="20"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <rect
                    x="28"
                    y="28"
                    width="8"
                    height="8"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-white font-poppins font-medium mb-2" style={{ fontSize: "14px" }}>
                Mobile-App Access
              </h3>
                    <p className="text-gray-300 font-poppins leading-relaxed" style={{ fontSize: "12px" }}>
                      Our mobile-friendly ERP tools put critical data and
                      workflows at your fingertips.
                    </p>
                  </div>
                </div>

              {/* Image */}
                <div
                  className="relative w-full bg-transparent"
                  style={{ aspectRatio: "16/10" }}
                >
                <Image
                  src="/card2one.png"
                  alt="Mobile-App Access"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

            {/* Card 3 - Seamless Client Communication */}
            {/* <div className="max-w-6xl mx-auto">
              <div className="relative rounded-lg overflow-hidden border border-white/20 bg-transparent backdrop-blur-sm hover:bg-primary/10 transition-all p-4">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      <path
                        d="M32 8L40 24L56 26L44 38L48 54L32 46L16 54L20 38L8 26L24 24L32 8Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.3"
                      />
                      <path
                        d="M32 16L36 26L46 27L38 35L41 45L32 40L23 45L26 35L18 27L28 26L32 16Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.5"
                      />
                      <path
                        d="M32 24L34 28L38 28L35 31L36 35L32 33L28 35L29 31L26 28L30 28L32 24Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-poppins font-medium mb-2" style={{ fontSize: "14px" }}>
                      Seamless Client Communication
                    </h3>
                    <p className="text-gray-300 font-poppins leading-relaxed" style={{ fontSize: "12px" }}>
                      YunutyConnect enhances trust and alignment with seamless
                      updates, clear insights, and teamwork.
                    </p>
                  </div>
                </div>
                <div
                  className="relative w-full bg-transparent"
                  style={{ aspectRatio: "16/9" }}
                >
                  <Image
                    src="/card2.png"
                    alt="Seamless Client Communication"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div> */}
          </div>


          {/* Built for You Section */}
          <div className="max-w-7xl mx-auto mt-20 mb-20">
            <div className="relative">
              {/* Background with glowing light streaks */}
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <div className="absolute bottom-0 left-0 w-full h-full opacity-30">
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-xl"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-xl" style={{ transform: "translateY(-20px)" }}></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent blur-xl" style={{ transform: "translateY(-40px)" }}></div>
                </div>
              </div>

              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Text Content */}
                <div className="space-y-6">
                  {/* Subtitle with decorative elements */}
                  <div className="flex items-center justify-start gap-4 mb-4">
                    <Image
                      src="/sub-title-left.svg"
                      alt=""
                      width={79}
                      height={17}
                      className="flex-shrink-0"
                    />
                    <p className="text-secondary font-poppins font-medium tracking-wider uppercase" style={{ fontSize: "11px" }}>
                      Built for you
                    </p>
                    <Image
                      src="/sub-title-right.svg"
                      alt=""
                      width={79}
                      height={17}
                      className="flex-shrink-0"
                    />
                  </div>

                  {/* Main Heading */}
                  <h2 className="text-white font-poppins font-medium mb-4 leading-tight" style={{ fontSize: "35px" }}>
                    What We've Built for You
                  </h2>

                  {/* Description */}
                  <p className="text-gray-300 font-poppins leading-relaxed" style={{ fontSize: "14px" }}>
                    Designed to simplify operations, accelerate growth, and help businesses thrive in an ever-evolving digital world.
                  </p>

                  {/* Explore More Button */}
                  <button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 bg-primary/60 backdrop-blur-sm hover:bg-primary/80 transition-all text-white font-poppins font-medium" style={{ fontSize: "14px" }}>
                    Explore More
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                {/* Right Side - Modern Slider */}
                <div className="relative h-[600px] rounded-2xl overflow-hidden">
                  {/* Background Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 rounded-2xl"></div>
                  
                  {/* Slider Container */}
                  <div className="relative h-full">
                    {/* Cards with Fade Transition */}
                    <div className="relative h-full">
                      {[
                        { id: 0, title: "Realtime-Tracking Data", description: "Track your content performance and leverage data-driven insights." },
                        { id: 1, title: "Gain Valuable Insights", description: "Track your content performance and leverage data-driven insights." },
                        { id: 2, title: "Planning Feature", description: "Track your content performance and leverage data-driven insights." }
                      ].map((card, index) => (
                        <div
                          key={card.id}
                          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                            currentCard === index
                              ? "opacity-100 translate-x-0 scale-100 z-10"
                              : "opacity-0 translate-x-8 scale-95 z-0 pointer-events-none"
                          }`}
                        >
                          <div className="h-full p-6">
                            <div className="h-full bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl">
                              {/* Card Header */}
                              <div className="mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-white/10">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400">
                                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  </div>
                                  <div>
                                    <h3 className="text-white font-poppins font-semibold text-2xl mb-1">
                                      {card.title}
                                    </h3>
                                    <p className="text-gray-400 font-poppins text-sm">
                                      {card.description}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Card Content */}
                              {index === 0 && (
                                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                                  <h4 className="text-white font-poppins font-semibold mb-6 text-lg">Referral Tracking</h4>
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-6">
                                      <div>
                                        <p className="text-gray-400 font-poppins text-xs mb-2">Invited</p>
                                        <p className="text-white font-poppins font-bold text-2xl">145 people</p>
                                      </div>
                                      <div>
                                        <p className="text-gray-400 font-poppins text-xs mb-2">Bonus</p>
                                        <p className="text-white font-poppins font-bold text-2xl">1,465</p>
                                      </div>
                                    </div>
                                    <div className="relative w-36 h-36">
                                      <svg className="transform -rotate-90" width="144" height="144">
                                        <circle cx="72" cy="72" r="64" stroke="rgba(255,255,255,0.1)" strokeWidth="10" fill="none"/>
                                        <circle cx="72" cy="72" r="64" stroke="url(#gradient1)" strokeWidth="10" fill="none" strokeLinecap="round" strokeDasharray={`${2 * Math.PI * 64 * 0.93} ${2 * Math.PI * 64}`}/>
                                        <defs>
                                          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#8C5FFF" />
                                            <stop offset="100%" stopColor="#FF6B9D" />
                                          </linearGradient>
                                        </defs>
                                      </svg>
                                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <p className="text-gray-400 font-poppins text-xs">Safety</p>
                                        <p className="text-white font-poppins font-bold text-3xl">9.3</p>
                                        <p className="text-gray-400 font-poppins text-xs">Total Score</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {index === 1 && (
                                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                                  <div className="flex items-center justify-between mb-6">
                                    <h4 className="text-white font-poppins font-semibold text-lg">New Report</h4>
                                    <p className="text-gray-400 font-poppins text-sm">20:56</p>
                                  </div>
                                  <div className="flex items-end justify-between h-48 gap-3">
                                    {[1, 2, 3, 4].map((bar, barIndex) => (
                                      <div key={barIndex} className="flex-1 flex flex-col items-center">
                                        <div className="relative w-full flex items-end justify-center">
                                          {barIndex === 2 ? (
                                            <div className="relative w-full">
                                              <div className="h-40 bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500 rounded-xl w-full relative shadow-lg">
                                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-primary px-4 py-2 rounded-lg font-poppins font-semibold text-sm shadow-xl">
                                                  $2.332
                                                </div>
                                                <div className="absolute top-10 left-0 w-full">
                                                  <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto"></div>
                                                  <div className="absolute top-3 left-0 text-white text-xs font-poppins">Aug</div>
                                                </div>
                                                <div className="absolute bottom-10 left-0 w-full">
                                                  <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto"></div>
                                                  <div className="absolute bottom-3 right-0 text-white text-xs font-poppins">Jul</div>
                                                </div>
                                              </div>
                                            </div>
                                          ) : (
                                            <div className="h-24 bg-white/10 rounded-xl w-full"></div>
                                          )}
                                        </div>
                                        <p className="text-gray-400 font-poppins mt-3 text-xs">0{bar}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {index === 2 && (
                                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                                  <div className="grid grid-cols-4 gap-4">
                                    <div className="col-span-1 space-y-3">
                                      <p className="text-gray-400 font-poppins text-xs mb-4">Unix-AI Dashboard</p>
                                      <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-3 border border-white/10">
                                        <div className="flex items-center gap-2 text-white">
                                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                                          </svg>
                                          <span className="font-poppins text-sm">Dashboard</span>
                                        </div>
                                      </div>
                                      <div className="flex items-center gap-2 text-gray-400 p-3">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                                        </svg>
                                        <span className="font-poppins text-sm">Tables</span>
                                      </div>
                                    </div>
                                    <div className="col-span-3 space-y-4">
                                      <div className="bg-white/5 rounded-xl p-4 h-20 flex items-center justify-center border border-white/10">
                                        <div className="w-10 h-10 bg-gradient-to-br from-orange-400 via-blue-500 to-green-500 rounded-lg"></div>
                                      </div>
                                      <div className="bg-white/5 rounded-xl p-5 h-28 flex items-center justify-center border border-white/10">
                                        <div className="relative w-20 h-20">
                                          <svg className="transform -rotate-90" width="80" height="80">
                                            <circle cx="40" cy="40" r="36" stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="none"/>
                                            <circle cx="40" cy="40" r="36" stroke="url(#gradient2)" strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray={`${2 * Math.PI * 36 * 0.75} ${2 * Math.PI * 36}`}/>
                                            <defs>
                                              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#8C5FFF" />
                                                <stop offset="100%" stopColor="#FF6B9D" />
                                              </linearGradient>
                                            </defs>
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="bg-white/5 rounded-xl p-5 h-24 flex items-center justify-between border border-white/10">
                                        <div>
                                          <p className="text-gray-400 font-poppins text-xs mb-1">This Week</p>
                                          <p className="text-white font-poppins font-semibold text-xl">1.342km</p>
                                        </div>
                                        <div className="w-20 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                                          <svg width="48" height="24" viewBox="0 0 48 24" className="text-blue-400">
                                            <path d="M0,18 Q12,6 24,12 T48,6" stroke="currentColor" strokeWidth="2" fill="none"/>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        ))}
                    </div>

                    {/* Modern Navigation */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                      <div className="flex items-center gap-4 bg-black/40 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20 shadow-2xl">
                        {/* Previous Button */}
                        <button
                          onClick={() => setCurrentCard((prev) => (prev === 0 ? 2 : prev - 1))}
                          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                          aria-label="Previous"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white group-hover:text-purple-400 transition-colors">
                            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>

                        {/* Dots */}
                        <div className="flex items-center gap-2">
                          {[0, 1, 2].map((index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentCard(index)}
                              className={`relative transition-all duration-300 ${
                                currentCard === index
                                  ? "w-8 h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50"
                                  : "w-2 h-2 bg-white/30 rounded-full hover:bg-white/50 hover:scale-125"
                              }`}
                              aria-label={`Slide ${index + 1}`}
                            />
                          ))}
                        </div>

                        {/* Next Button */}
                        <button
                          onClick={() => setCurrentCard((prev) => (prev === 2 ? 0 : prev + 1))}
                          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                          aria-label="Next"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white group-hover:text-purple-400 transition-colors">
                            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
